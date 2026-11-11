from __future__ import annotations

import json
import re
import shutil
import struct
import subprocess
import sys
from pathlib import Path
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "screenshots"
DST_DIR = ROOT / "public" / "screenshots"
SKIP_REL_PATHS = {Path("stamp-demo-veo.mp4")}


def get_mp4_box_offsets(path: Path) -> dict[str, int]:
    data = path.read_bytes()
    pos = 0
    offsets: dict[str, int] = {}
    total = len(data)
    while pos + 8 <= total:
        size, box_type = struct.unpack(">I4s", data[pos : pos + 8])
        name = box_type.decode("latin1", errors="replace")
        offsets.setdefault(name, pos)
        if size == 1:
            if pos + 16 > total:
                break
            size = struct.unpack(">Q", data[pos + 8 : pos + 16])[0]
        elif size == 0:
            break
        if size < 8:
            break
        pos += size
    return offsets


def parse_svg_dimensions(svg_path: Path) -> tuple[int, int]:
    text = svg_path.read_text(encoding="utf-8")
    w_match = re.search(r'\bwidth=["\'](\d+(?:\.\d+)?)', text)
    h_match = re.search(r'\bheight=["\'](\d+(?:\.\d+)?)', text)
    if w_match and h_match:
        return int(float(w_match.group(1))), int(float(h_match.group(1)))
    vb_match = re.search(
        r'\bviewBox=["\']\s*[\d.-]+\s+[\d.-]+\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)',
        text,
    )
    if vb_match:
        return int(float(vb_match.group(1))), int(float(vb_match.group(2)))
    raise ValueError(f"Could not determine SVG dimensions for {svg_path}")


def probe_video_dimensions(video_path: Path) -> tuple[int, int]:
    cmd = [
        "ffprobe",
        "-v",
        "error",
        "-select_streams",
        "v:0",
        "-show_entries",
        "stream=width,height",
        "-of",
        "csv=p=0",
        str(video_path),
    ]
    out = subprocess.check_output(cmd, text=True).strip()
    w_str, h_str = out.split(",")[:2]
    return int(w_str), int(h_str)


def to_rgb_over_white(im: Image.Image) -> Image.Image:
    if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
        rgba = im.convert("RGBA")
        bg = Image.new("RGB", rgba.size, (255, 255, 255))
        bg.paste(rgba, mask=rgba.getchannel("A"))
        return bg
    return im.convert("RGB")


def normalize_media() -> None:
    DST_DIR.mkdir(parents=True, exist_ok=True)

    for skip_rel in SKIP_REL_PATHS:
        stale = DST_DIR / skip_rel
        if stale.exists():
            stale.unlink()

    dimensions: dict[str, dict[str, int | str | None]] = {}
    report_rows: list[tuple[str, int, int, int | None]] = []

    for src_path in sorted(SRC_DIR.rglob("*")):
        if not src_path.is_file():
            continue
        rel_path = src_path.relative_to(SRC_DIR)
        if rel_path in SKIP_REL_PATHS:
            print(f"[SKIP] {rel_path.as_posix()} ({src_path.stat().st_size:,} B)")
            continue

        dst_path = DST_DIR / rel_path
        dst_path.parent.mkdir(parents=True, exist_ok=True)
        suffix = src_path.suffix.lower()
        src_size = src_path.stat().st_size
        web_key = f"/screenshots/{rel_path.as_posix()}"

        if suffix == ".svg":
            shutil.copy2(src_path, dst_path)
            w, h = parse_svg_dimensions(dst_path)
            sibling_webp_rel = rel_path.with_suffix(".webp")
            sibling_png_src = SRC_DIR / rel_path.with_suffix(".png")
            webp_val = (
                f"/screenshots/{sibling_webp_rel.as_posix()}"
                if sibling_png_src.exists()
                else None
            )
            dimensions[web_key] = {"width": w, "height": h, "webp": webp_val}
            report_rows.append((rel_path.as_posix(), src_size, dst_path.stat().st_size, None))

        elif suffix == ".png":
            webp_dst = dst_path.with_suffix(".webp")
            webp_key = f"/screenshots/{rel_path.with_suffix('.webp').as_posix()}"
            with Image.open(src_path) as im:
                has_alpha = im.mode in ("RGBA", "LA") or (
                    im.mode == "P" and "transparency" in im.info
                )
                converted = im.convert("RGBA" if has_alpha else "RGB")
                w, h = converted.size
                converted.save(webp_dst, format="WEBP", quality=82, method=6)
                quantized = converted.quantize(
                    colors=256,
                    method=Image.Quantize.FASTOCTREE,
                    dither=Image.Dither.FLOYDSTEINBERG,
                )
                quantized.save(dst_path, format="PNG", optimize=True)

            dimensions[web_key] = {"width": w, "height": h, "webp": webp_key}
            dimensions[webp_key] = {"width": w, "height": h, "webp": webp_key}
            report_rows.append(
                (
                    rel_path.as_posix(),
                    src_size,
                    dst_path.stat().st_size,
                    webp_dst.stat().st_size,
                )
            )

        elif suffix in (".jpg", ".jpeg"):
            webp_dst = dst_path.with_suffix(".webp")
            webp_key = f"/screenshots/{rel_path.with_suffix('.webp').as_posix()}"
            with Image.open(src_path) as im:
                rgb = to_rgb_over_white(im)
                w, h = rgb.size
                rgb.save(
                    dst_path,
                    format="JPEG",
                    quality=85,
                    optimize=True,
                    progressive=True,
                )
                rgb.save(webp_dst, format="WEBP", quality=82, method=6)

            dimensions[web_key] = {"width": w, "height": h, "webp": webp_key}
            dimensions[webp_key] = {"width": w, "height": h, "webp": webp_key}
            report_rows.append(
                (
                    rel_path.as_posix(),
                    src_size,
                    dst_path.stat().st_size,
                    webp_dst.stat().st_size,
                )
            )

        elif suffix == ".mp4":
            cmd = [
                "ffmpeg",
                "-y",
                "-v",
                "error",
                "-i",
                str(src_path),
                "-c",
                "copy",
                "-movflags",
                "+faststart",
                str(dst_path),
            ]
            subprocess.run(cmd, check=True)
            w, h = probe_video_dimensions(dst_path)
            dimensions[web_key] = {"width": w, "height": h, "webp": None}
            report_rows.append((rel_path.as_posix(), src_size, dst_path.stat().st_size, None))

    dim_path = DST_DIR / "dimensions.json"
    dim_path.write_text(
        json.dumps(dict(sorted(dimensions.items())), indent=2) + "\n",
        encoding="utf-8",
    )

    verify_outputs()
    print_size_report(report_rows)


def verify_outputs() -> None:
    assert not (DST_DIR / "stamp-demo-veo.mp4").exists(), "stamp-demo-veo.mp4 must not exist in public/screenshots"

    png_files = sorted(DST_DIR.rglob("*.png"))
    jpg_files = sorted(DST_DIR.rglob("*.jpg"))
    webp_files = sorted(DST_DIR.rglob("*.webp"))
    svg_files = sorted(DST_DIR.rglob("*.svg"))
    mp4_files = sorted((DST_DIR / "videos").glob("*.mp4"))

    assert len(png_files) == 13, f"Expected 13 PNG files, found {len(png_files)}"
    assert len(jpg_files) == 7, f"Expected 7 JPG files, found {len(jpg_files)}"
    assert len(webp_files) == 20, f"Expected 20 WEBP files, found {len(webp_files)}"
    assert len(svg_files) == 3, f"Expected 3 SVG files, found {len(svg_files)}"
    assert len(mp4_files) == 5, f"Expected 5 MP4 files, found {len(mp4_files)}"

    for p in png_files:
        header = p.read_bytes()[:8]
        assert header == b"\x89PNG\r\n\x1a\n", f"Invalid PNG header in {p}: {header!r}"

    for p in jpg_files:
        header = p.read_bytes()[:3]
        assert header == b"\xff\xd8\xff", f"Invalid JPEG header in {p}: {header!r}"

    for p in webp_files:
        header = p.read_bytes()[:12]
        assert header[:4] == b"RIFF" and header[8:12] == b"WEBP", f"Invalid WEBP header in {p}: {header!r}"

    for p in mp4_files:
        offsets = get_mp4_box_offsets(p)
        assert "moov" in offsets and "mdat" in offsets, f"Missing moov/mdat in {p}: {offsets}"
        assert offsets["moov"] < offsets["mdat"], f"moov not before mdat in {p}: {offsets}"

    print(
        f"[VERIFY OK] {len(png_files)} PNGs, {len(jpg_files)} JPGs, "
        f"{len(webp_files)} WEBPs, {len(svg_files)} SVGs, {len(mp4_files)} faststart MP4s"
    )


def print_size_report(rows: list[tuple[str, int, int, int | None]]) -> None:
    print(f"\n{'File':44s} {'Before (B)':>12s} {'After (B)':>12s} {'WebP (B)':>12s}")
    print("-" * 84)
    total_before = 0
    total_after = 0
    total_webp = 0
    for rel, before, after, webp in rows:
        total_before += before
        total_after += after
        webp_str = f"{webp:12,d}" if webp is not None else f"{'-':>12s}"
        if webp is not None:
            total_webp += webp
        print(f"{rel:44s} {before:12,d} {after:12,d} {webp_str}")
    print("-" * 84)
    print(f"{'TOTAL (processed files)':44s} {total_before:12,d} {total_after:12,d} {total_webp:12,d}")


if __name__ == "__main__":
    normalize_media()
