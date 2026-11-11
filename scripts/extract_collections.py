from __future__ import annotations

import html as html_lib
import json
import os
import re
import sys
from pathlib import Path
from typing import Any

sys.stdout.reconfigure(encoding="utf-8")

ROOT = Path(__file__).resolve().parent.parent
LOCALES = ("en", "ko", "ja", "zh", "es")

BLOG_SPECS = [
    {
        "slug": "VLA",
        "order": 1,
        "reportId": "M9G-TR-2026-01",
        "hubKeyPrefix": "b1",
        "seoKeywords": (
            "M9G-TR-2026-01, VLA, Vision-Language-Action, Symbolic 3D Grounding, "
            "Software-Pipelined Scheduling, Gemini Robotics-ER 2, Gemini 4 Carbon, "
            "Gemini 3.5 Flash-Lite, NVIDIA Isaac Sim 6.0, ROS 2 Jazzy, Franka Emika FR3, "
            "Minsu Chang, M9G, mincasurong"
        ),
    },
    {
        "slug": "m9g-agent",
        "order": 2,
        "reportId": "M9G-TR-2026-02",
        "hubKeyPrefix": "b2",
        "seoKeywords": (
            "M9G-TR-2026-02, m9g-agent-corps, m9g-mcp, Coding Agent Harness, "
            "Oh-My-OpenAgent, OmO, OpenCode, Claude Code, Google Antigravity, "
            "Model Context Protocol, MCP, Hashline Edit, AST Skeletonizer, "
            "Minsu Chang, M9G, mincasurong"
        ),
    },
    {
        "slug": "stamp",
        "order": 3,
        "reportId": "M9G-TR-2026-03",
        "hubKeyPrefix": "b3",
        "seoKeywords": (
            "M9G-TR-2026-03, Project STAMP, Spatial Task and Motion Planning, "
            "Deterministic Safety Gate, FrankaFR3DeterministicGate, write_limit_back, "
            "Closed-Loop Context Repair, MoveIt 2, ROS 2 Jazzy, NVIDIA Isaac Sim 6.0, "
            "Minsu Chang, M9G, mincasurong"
        ),
    },
    {
        "slug": "sdl-survey",
        "order": 4,
        "reportId": "M9G-TR-2026-04",
        "hubKeyPrefix": "b4",
        "seoKeywords": (
            "M9G-TR-2026-04, Self-Driving Labs, SDL Survey, Multi-Robot Manipulation, "
            "Deformable Object Manipulation, Cooperative Assembly, MATTERIX, APEX-MR, "
            "RoboFactory, DexGarmentLab, ORGANA, NVIDIA Isaac Sim, Project STAMP, "
            "Minsu Chang, M9G, mincasurong"
        ),
    },
    {
        "slug": "lazy-dash",
        "order": 5,
        "reportId": "M9G-TR-2026-05",
        "hubKeyPrefix": "b5",
        "seoKeywords": (
            "M9G-TR-2026-05, Lazy-DaSH, UIUC Parasol Lab, IEEE T-RO, "
            "Hypergraph Task and Motion Planning, Multi-Robot TAMP, "
            "Gemini 4 Carbon, Gemini Robotics-ER 2, Gemini 3.5 Flash-Lite, "
            "IsaacSim_Gemini, Minsu Chang, M9G, mincasurong"
        ),
    },
    {
        "slug": "tamp-fast-sim",
        "order": 6,
        "reportId": "M9G-TR-2026-06",
        "hubKeyPrefix": "b6",
        "seoKeywords": (
            "M9G-TR-2026-06, tamp.mincasurong.com, fast_sim_web, 3D Multi-Robot TAMP, "
            "Browser-Native WebGL Simulator, Three.js, 7-DoF DLS Inverse Kinematics, "
            "Swept Capsule Collision Gate, Smart Factory Digital Twin, Lazy-DaSH, "
            "Franka FR3, Minsu Chang, M9G, mincasurong"
        ),
    },
]


def parse_js_i18n_object(js_str: str) -> dict[str, dict[str, str]]:
    out: list[str] = []
    i = 0
    n = len(js_str)
    while i < n:
        ch = js_str[i]
        if ch in ('"', "'"):
            quote = ch
            s_chars = ['"']
            i += 1
            while i < n:
                c = js_str[i]
                if c == "\\" and i + 1 < n:
                    nxt = js_str[i + 1]
                    if nxt == "'":
                        s_chars.append("'")
                    else:
                        s_chars.append("\\" + nxt)
                    i += 2
                    continue
                if c == quote:
                    i += 1
                    break
                if c == '"' and quote == "'":
                    s_chars.append('\\"')
                else:
                    s_chars.append(c)
                i += 1
            s_chars.append('"')
            out.append("".join(s_chars))
        elif ch.isalpha() or ch == "_":
            j = i
            while j < n and (js_str[j].isalnum() or js_str[j] == "_"):
                j += 1
            ident = js_str[i:j]
            k = j
            while k < n and js_str[k] in " \t\r\n":
                k += 1
            if k < n and js_str[k] == ":":
                out.append(f'"{ident}"')
                i = j
            else:
                out.append(ident)
                i = j
        else:
            out.append(ch)
            i += 1
    json_s = "".join(out)
    json_s = re.sub(r",\s*([}\]])", r"\1", json_s)
    parsed = json.loads(json_s)
    return {loc: dict(parsed[loc]) for loc in LOCALES}


def strip_tags(raw_html: str) -> str:
    cleaned = re.sub(r"<[^>]+>", "", raw_html)
    return html_lib.unescape(cleaned).strip()


def load_dimensions() -> dict[str, dict[str, Any]]:
    dim_path = ROOT / "public" / "screenshots" / "dimensions.json"
    if not dim_path.exists():
        return {}
    return json.loads(dim_path.read_text(encoding="utf-8"))


def upgrade_body_media(body_html: str, dimensions: dict[str, dict[str, Any]]) -> str:
    # 1. Upgrade <img src="/screenshots/<name>.png" ...> to <picture><source srcset="/screenshots/<name>.webp" type="image/webp" /><img ... /></picture>
    def repl_img(match: re.Match[str]) -> str:
        full_tag = match.group(0)
        src_m = re.search(r'\bsrc="(/screenshots/[^"]+\.png)"', full_tag)
        if not src_m:
            return full_tag
        png_src = src_m.group(1)
        webp_src = re.sub(r"\.png$", ".webp", png_src)
        dim_info = dimensions.get(png_src)
        img_tag = full_tag
        if dim_info and "width=" not in img_tag and "height=" not in img_tag:
            w = dim_info.get("width")
            h = dim_info.get("height")
            if w and h:
                img_tag = re.sub(
                    r"\s*/?>$",
                    f' width="{w}" height="{h}" />',
                    img_tag,
                )
        return (
            f'<picture>'
            f'<source srcset="{webp_src}" type="image/webp" />'
            f'{img_tag}'
            f'</picture>'
        )

    upgraded = re.sub(r"<img\b[^>]*>", repl_img, body_html)

    # 2. Upgrade <video ... autoplay muted loop playsinline ...> to <video ... preload="metadata" muted playsinline controls ...>
    def repl_video(match: re.Match[str]) -> str:
        attrs = match.group(1)
        id_m = re.search(r'\bid="([^"]+)"', attrs)
        poster_m = re.search(r'\bposter="([^"]+)"', attrs)
        parts = ["<video"]
        if id_m:
            parts.append(f'id="{id_m.group(1)}"')
        parts.append('preload="metadata" muted playsinline controls')
        if poster_m:
            parts.append(f'poster="{poster_m.group(1)}"')
        return " ".join(parts) + ">"

    upgraded = re.sub(r"<video\b([^>]*)>", repl_video, upgraded)
    return upgraded


def extract_hub_cards() -> tuple[dict[str, dict[str, Any]], dict[str, dict[str, str]]]:
    hub_html = (ROOT / "blog" / "index.html").read_text(encoding="utf-8")
    i18n_m = re.search(
        r"(?:const|var)\s+HUB_I18N\s*=\s*(\{.*?\n    \});", hub_html, re.S
    )
    if not i18n_m:
        raise RuntimeError("Could not find HUB_I18N in blog/index.html")
    hub_i18n = parse_js_i18n_object(i18n_m.group(1))

    cards: dict[str, dict[str, Any]] = {}
    card_pattern = re.compile(
        r'<div class="showcase-card[^"]*" data-topic="(robotics|agents)">\s*'
        r'<a href="/blog/([^/]+)/" class="card-thumb">\s*'
        r'<img src="([^"]+)" alt="([^"]*)"[^>]*/>\s*'
        r'<span class="card-type-badge">(.*?)</span>\s*'
        r'<span class="card-duration-badge"><span class="card-duration-dot"></span>(.*?)</span>\s*'
        r"</a>\s*"
        r'<div class="card-body">\s*<div>\s*<div class="card-meta">\s*'
        r'<span class="card-badge">(.*?)</span>.*?'
        r'<h2 class="card-title"><a href="/blog/[^/]+/" data-i18n="([^"]+)">(.*?)</a></h2>\s*'
        r'<p class="card-desc" data-i18n="([^"]+)">(.*?)</p>',
        re.S,
    )
    for m in card_pattern.finditer(hub_html):
        (
            topic,
            slug,
            thumb_png,
            _thumb_alt,
            type_badge,
            duration_badge,
            card_badge,
            title_key,
            hub_title,
            desc_key,
            hub_desc,
        ) = m.groups()
        cards[slug] = {
            "topic": topic,
            "thumbPng": thumb_png.strip(),
            "thumbWebp": re.sub(r"\.png$", ".webp", thumb_png.strip()),
            "cardTypeBadge": html_lib.unescape(type_badge.strip()),
            "cardDurationBadge": html_lib.unescape(duration_badge.strip()),
            "cardBadge": html_lib.unescape(card_badge.strip()),
            "hubTitleI18nKey": title_key.strip(),
            "hubDescI18nKey": desc_key.strip(),
            "hubTitle": html_lib.unescape(hub_title.strip()),
            "hubDesc": html_lib.unescape(hub_desc.strip()),
        }

    if len(cards) != 6:
        raise RuntimeError(f"Expected 6 hub cards in blog/index.html, got {len(cards)}")
    return cards, hub_i18n


def extract_switcher_tabs(html: str) -> dict[str, dict[str, str]]:
    nav_m = re.search(
        r'<nav class="blog-post-switcher"[^>]*>(.*?)</nav>', html, re.S
    )
    if not nav_m:
        raise RuntimeError("Missing .blog-post-switcher")
    tabs: dict[str, dict[str, str]] = {}
    for m in re.finditer(
        r'<a href="/blog/([^/]+)/" class="blog-post-tab[^"]*">\s*'
        r'<span class="blog-post-tab-kicker">(.*?)</span>\s*'
        r'<span class="blog-post-tab-title">(.*?)</span>\s*</a>',
        nav_m.group(1),
        re.S,
    ):
        slug, kicker, title = m.groups()
        tabs[slug] = {
            "switcherKicker": html_lib.unescape(kicker.strip()),
            "switcherTitle": html_lib.unescape(title.strip()),
        }
    return tabs


def extract_blogs(dimensions: dict[str, dict[str, Any]]) -> dict[str, dict[str, str]]:
    hub_cards, hub_i18n = extract_hub_cards()
    blogs_out_dir = ROOT / "src" / "content" / "blogs"
    blogs_out_dir.mkdir(parents=True, exist_ok=True)

    sample_html = (ROOT / "blog" / "VLA" / "index.html").read_text(encoding="utf-8")
    switcher_tabs = extract_switcher_tabs(sample_html)

    for spec in BLOG_SPECS:
        slug = spec["slug"]
        blog_path = ROOT / "blog" / slug / "index.html"
        html = blog_path.read_text(encoding="utf-8")

        page_title_m = re.search(r"<title>(.*?)</title>", html, re.S)
        meta_desc_m = re.search(
            r'<meta name="description" content="(.*?)"', html, re.S
        )
        canonical_m = re.search(
            r'<link rel="canonical" href="(.*?)"', html, re.S
        )
        og_title_m = re.search(
            r'<meta property="og:title" content="(.*?)"', html, re.S
        )
        og_desc_m = re.search(
            r'<meta property="og:description" content="(.*?)"', html, re.S
        )
        og_img_m = re.search(
            r'<meta property="og:image" content="(.*?)"', html, re.S
        )
        ld_m = re.search(
            r'<script type="application/ld\+json">\s*(.*?)\s*</script>',
            html,
            re.S,
        )
        if not (
            page_title_m
            and meta_desc_m
            and canonical_m
            and og_title_m
            and og_desc_m
            and og_img_m
            and ld_m
        ):
            raise RuntimeError(f"Missing head metadata in {blog_path}")

        json_ld = json.loads(ld_m.group(1))
        published_iso = json_ld["datePublished"]
        updated_iso = json_ld["dateModified"]

        kicker_row_m = re.search(
            r'<div class="dm-kicker-row">\s*<span class="dm-badge"[^>]*>(.*?)</span>\s*(.*?)\s*</div>',
            html,
            re.S,
        )
        if not kicker_row_m:
            raise RuntimeError(f"Missing .dm-kicker-row in {blog_path}")
        kicker_tag = html_lib.unescape(kicker_row_m.group(1).strip())
        kicker_meta_html = kicker_row_m.group(2).strip()
        pub_disp_m = re.search(r"<span>(Published[^<]+)</span>", kicker_meta_html)
        if not pub_disp_m:
            raise RuntimeError(f"Missing Published span in {blog_path}")
        published_display = html_lib.unescape(pub_disp_m.group(1).strip())

        h1_m = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.S)
        lede_m = re.search(r'<p class="lede"[^>]*>(.*?)</p>', html, re.S)
        if not (h1_m and lede_m):
            raise RuntimeError(f"Missing h1 or .lede in {blog_path}")
        title = html_lib.unescape(h1_m.group(1).strip())
        lede_html = lede_m.group(1).strip()

        byline_cells = []
        for lbl_raw, val_raw in re.findall(
            r'<div class="byline-cell">\s*<div class="byline-label"[^>]*>(.*?)</div>\s*<div class="byline-val"[^>]*>(.*?)</div>\s*</div>',
            html,
            re.S,
        ):
            byline_cells.append(
                {
                    "label": html_lib.unescape(lbl_raw.strip()),
                    "valueHtml": val_raw.strip(),
                }
            )
        if len(byline_cells) != 4:
            raise RuntimeError(
                f"Expected 4 byline cells in {blog_path}, got {len(byline_cells)}"
            )

        article_m = re.search(r"<article>(.*?)</article>", html, re.S)
        if not article_m:
            raise RuntimeError(f"Missing <article> in {blog_path}")
        raw_body_html = article_m.group(1).strip()
        upgraded_body_html = upgrade_body_media(raw_body_html, dimensions)

        i18n_m = re.search(
            r"(?:const|var)\s+BLOG_I18N\s*=\s*(\{.*?\n    \});", html, re.S
        )
        if not i18n_m:
            raise RuntimeError(f"Missing BLOG_I18N in {blog_path}")
        blog_i18n = parse_js_i18n_object(i18n_m.group(1))

        hub_info = hub_cards[slug]
        tab_info = switcher_tabs[slug]

        record = {
            "slug": slug,
            "reportId": spec["reportId"],
            "order": spec["order"],
            "topic": hub_info["topic"],
            "publishedIso": published_iso,
            "publishedDisplay": published_display,
            "updatedIso": updated_iso,
            "switcherKicker": tab_info["switcherKicker"],
            "switcherTitle": tab_info["switcherTitle"],
            "cardBadge": hub_info["cardBadge"],
            "cardTypeBadge": hub_info["cardTypeBadge"],
            "cardDurationBadge": hub_info["cardDurationBadge"],
            "thumbPng": hub_info["thumbPng"],
            "thumbWebp": hub_info["thumbWebp"],
            "pageTitle": html_lib.unescape(page_title_m.group(1).strip()),
            "metaDescription": html_lib.unescape(meta_desc_m.group(1).strip()),
            "canonicalUrl": canonical_m.group(1).strip(),
            "ogTitle": html_lib.unescape(og_title_m.group(1).strip()),
            "ogDescription": html_lib.unescape(og_desc_m.group(1).strip()),
            "ogImage": og_img_m.group(1).strip(),
            "seoKeywords": spec["seoKeywords"],
            "jsonLd": json_ld,
            "kickerTag": kicker_tag,
            "kickerMetaHtml": kicker_meta_html,
            "title": title,
            "ledeHtml": lede_html,
            "bylineCells": byline_cells,
            "hubTitleI18nKey": hub_info["hubTitleI18nKey"],
            "hubDescI18nKey": hub_info["hubDescI18nKey"],
            "hubTitle": hub_info["hubTitle"],
            "hubDesc": hub_info["hubDesc"],
            "bodyHtml": upgraded_body_html,
            "i18n": blog_i18n,
        }

        out_file = blogs_out_dir / f"{slug}.json"
        out_file.write_text(
            json.dumps(record, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        print(f"Wrote {out_file.relative_to(ROOT)} ({len(upgraded_body_html)} chars bodyHtml)")

    return hub_i18n


def extract_publications() -> list[dict[str, Any]]:
    arch_html = (ROOT / "archive" / "index.html").read_text(encoding="utf-8")
    sec_m = re.search(
        r'<article class="section-card" id="publications">(.*?)</article>',
        arch_html,
        re.S,
    )
    if not sec_m:
        raise RuntimeError("Could not find #publications in archive/index.html")
    sec_html = sec_m.group(1)

    item_pattern = re.compile(
        r'<div class="pub-item([^"]*)">\s*'
        r'<div class="pub-num">(.*?)</div>\s*'
        r'<div class="pub-body">\s*'
        r'<div class="pub-title">(.*?)</div>\s*'
        r'<div class="pub-authors">(.*?)</div>\s*'
        r'<div class="pub-venue">(.*?)</div>\s*'
        r"</div>\s*"
        r'(?:<a class="pub-link" href="([^"]+)"[^>]*>(.*?)</a>\s*)?'
        r"</div>",
        re.S,
    )

    publications: list[dict[str, Any]] = []
    for idx, m in enumerate(item_pattern.finditer(sec_html), 1):
        cls_suffix, badge_raw, title_raw, authors_raw, venue_raw, link_url, link_label = (
            m.groups()
        )
        frontier = "frontier" in cls_suffix
        badge = html_lib.unescape(badge_raw.strip())
        fbadge_m = re.search(
            r'<span class="frontier-badge">(.*?)</span>', title_raw, re.S
        )
        frontier_badge = (
            html_lib.unescape(fbadge_m.group(1).strip()) if fbadge_m else None
        )
        title_html = re.sub(
            r'<span class="frontier-badge">.*?</span>', "", title_raw, flags=re.S
        ).strip()
        authors_html = authors_raw.strip()
        venue_html = venue_raw.strip()
        venue_plain = strip_tags(venue_html)

        year_matches = re.findall(r"\b(20\d{2})\b", venue_plain)
        if year_matches:
            year = int(year_matches[-1])
        else:
            short_yr = re.search(r"(\d{2})$", badge)
            year = 2000 + int(short_yr.group(1)) if short_yr else 2020

        if frontier_badge:
            meta_note = frontier_badge
        elif " · " in venue_plain:
            meta_note = venue_plain.split(" · ", 1)[1].strip()
        else:
            meta_note = ""

        links = []
        if link_url and link_label:
            links.append(
                {
                    "label": html_lib.unescape(link_label.strip()),
                    "url": html_lib.unescape(link_url.strip()),
                }
            )

        publications.append(
            {
                "id": f"pub-{idx:02d}",
                "order": idx,
                "frontier": frontier,
                "badge": badge,
                "frontierBadge": frontier_badge,
                "year": year,
                "venue": venue_plain,
                "venueHtml": venue_html,
                "titleHtml": title_html,
                "authorsHtml": authors_html,
                "metaNote": meta_note,
                "links": links,
            }
        )

    if len(publications) != 21:
        raise RuntimeError(
            f"Expected 21 publications in archive/index.html, got {len(publications)}"
        )

    out_path = ROOT / "src" / "content" / "data" / "publications.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(
        json.dumps(publications, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {out_path.relative_to(ROOT)} ({len(publications)} publications)")
    return publications


def extract_patents() -> list[dict[str, Any]]:
    arch_html = (ROOT / "archive" / "index.html").read_text(encoding="utf-8")
    sec_m = re.search(
        r'<article class="section-card" id="patents">(.*?)</article>',
        arch_html,
        re.S,
    )
    if not sec_m:
        raise RuntimeError("Could not find #patents in archive/index.html")
    sec_html = sec_m.group(1)

    item_pattern = re.compile(
        r'<div class="pub-item">\s*'
        r'<div class="pub-num">(P\d{2})</div>\s*'
        r'<div class="pub-body">\s*'
        r'<div class="pub-title">(.*?)</div>\s*'
        r'<div class="pub-authors">(.*?)</div>\s*'
        r'<div class="pub-venue">(.*?)</div>\s*'
        r"</div>\s*"
        r'(?:<a class="pub-link" href="([^"]+)"[^>]*>(.*?)</a>\s*)?'
        r"</div>",
        re.S,
    )

    patents: list[dict[str, Any]] = []
    for idx, m in enumerate(item_pattern.finditer(sec_html), 1):
        code, title_raw, authors_raw, venue_raw, link_url, link_label = m.groups()
        title = strip_tags(title_raw)
        inventors_html = authors_raw.strip()
        inventors_plain = strip_tags(inventors_html)
        patent_number = strip_tags(venue_raw)

        jurisdiction = "US" if patent_number.startswith("US") else "KR"
        status = (
            "granted"
            if ("Granted" in patent_number or "Registered" in patent_number)
            else "application"
        )
        meta = f"{inventors_plain} • {patent_number}"

        entry: dict[str, Any] = {
            "id": code,
            "code": code,
            "order": idx,
            "jurisdiction": jurisdiction,
            "status": status,
            "title": title,
            "inventorsHtml": inventors_html,
            "patentNumber": patent_number,
            "meta": meta,
        }
        if link_url:
            entry["url"] = html_lib.unescape(link_url.strip())
        if link_label:
            entry["linkLabel"] = html_lib.unescape(link_label.strip())

        patents.append(entry)

    if len(patents) != 14:
        raise RuntimeError(
            f"Expected 14 patents in archive/index.html, got {len(patents)}"
        )

    out_path = ROOT / "src" / "content" / "data" / "patents.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(
        json.dumps(patents, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {out_path.relative_to(ROOT)} ({len(patents)} patents)")
    return patents


def extract_redirects() -> list[dict[str, str]]:
    html404 = (ROOT / "404.html").read_text(encoding="utf-8")
    tut_html = (ROOT / "tutorials" / "index.html").read_text(encoding="utf-8")
    arch_html = (ROOT / "archive" / "index.html").read_text(encoding="utf-8")

    tut_ids = set(re.findall(r'\bid="([^"]+)"', tut_html))
    arch_ids = set(re.findall(r'\bid="([^"]+)"', arch_html))

    map_m = re.search(r"var map = \{(.*?)\};", html404, re.S)
    if not map_m:
        raise RuntimeError("Could not find var map in 404.html")
    map_pairs = dict(re.findall(r'"([^"]+)"\s*:\s*"([^"]+)"', map_m.group(1)))

    explicit_routes: list[tuple[str, str, str, str]] = [
        (
            "blog/vla",
            "/blog/VLA/",
            "https://mincasurong.github.io/blog/VLA/",
            "Redirecting — We're M9G",
        ),
        (
            "blog/m9g-agent-corps",
            "/blog/m9g-agent/",
            "https://mincasurong.github.io/blog/m9g-agent/",
            "Redirecting — We're M9G",
        ),
        (
            "blog/sota-isaacsim-multi-robot-sdl-survey",
            "/blog/sdl-survey/",
            "https://mincasurong.github.io/blog/sdl-survey/",
            "Redirecting — We're M9G",
        ),
        (
            "fast-sim",
            "https://tamp.mincasurong.com",
            "https://tamp.mincasurong.com",
            "Redirecting to 3D Fast-Sim (tamp.mincasurong.com) — We're M9G",
        ),
        (
            "research2022",
            map_pairs["/research2022"],
            "https://mincasurong.github.io/archive/",
            "Research (~2022) KFDA Exoskeletons & AI Therapist — We're M9G",
        ),
        (
            "gemini3-hackathon-epilogue",
            map_pairs["/gemini3-hackathon-epilogue"],
            "https://mincasurong.github.io/archive/",
            "Gemini 3 Seoul Hackathon 2026 Epilogue — We're M9G",
        ),
    ]

    for path_key, target in map_pairs.items():
        if path_key.startswith("/out-of-research"):
            src = path_key.lstrip("/")
            if target.startswith("/tutorials/"):
                canonical = "https://mincasurong.github.io/tutorials/"
            else:
                canonical = "https://mincasurong.github.io/archive/"
            explicit_routes.append(
                (src, target, canonical, "Redirecting — We're M9G")
            )

    redirects: list[dict[str, str]] = []
    for src, target, canonical, title in explicit_routes:
        if "#" in target:
            base, frag = target.split("#", 1)
            if base == "/tutorials/" and frag not in tut_ids:
                raise RuntimeError(f"Invalid tutorial anchor {frag} for {src}")
            if base == "/archive/" and frag not in arch_ids:
                raise RuntimeError(f"Invalid archive anchor {frag} for {src}")
        redirects.append(
            {
                "id": src,
                "source": src,
                "sourcePath": f"/{src}/",
                "target": target,
                "canonical": canonical,
                "title": title,
            }
        )

    if len(redirects) != 25:
        raise RuntimeError(f"Expected 25 redirects, got {len(redirects)}")

    out_path = ROOT / "src" / "content" / "data" / "redirects.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(
        json.dumps(redirects, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {out_path.relative_to(ROOT)} ({len(redirects)} redirects)")
    return redirects


def extract_ui_ts(hub_i18n: dict[str, dict[str, str]]) -> None:
    arch_html = (ROOT / "archive" / "index.html").read_text(encoding="utf-8")
    vcard_html = (ROOT / "vcard" / "index.html").read_text(encoding="utf-8")
    tut_html = (ROOT / "tutorials" / "index.html").read_text(encoding="utf-8")

    arch_m = re.search(r"var\s+I18N\s*=\s*(\{.*?\n    \});", arch_html, re.S)
    vcard_m = re.search(
        r"const\s+VCARD_I18N\s*=\s*(\{.*?\n    \});", vcard_html, re.S
    )
    tut_m = re.search(r"var\s+TUT_I18N\s*=\s*(\{.*?\n    \});", tut_html, re.S)
    if not (arch_m and vcard_m and tut_m):
        raise RuntimeError("Missing I18N block in archive, vcard, or tutorials")

    arch_raw = parse_js_i18n_object(arch_m.group(1))
    vcard_i18n = parse_js_i18n_object(vcard_m.group(1))
    tut_raw = parse_js_i18n_object(tut_m.group(1))

    # Normalize tutorials navBlog across all 5 locales
    tut_i18n: dict[str, dict[str, str]] = {}
    for loc in LOCALES:
        d = dict(tut_raw[loc])
        d.pop("navVlaBlog", None)
        d.pop("navAgentBlog", None)
        d["navBlog"] = hub_i18n[loc]["navBlog"]
        d["navVcard"] = vcard_i18n[loc]["navVcard"]
        tut_i18n[loc] = d

    # Convert archive snake_case keys to camelCase
    snake_to_camel = {
        "nav_archive": "navArchiveBrand",
        "hero_eyebrow": "heroEyebrow",
        "hero_title_1": "heroTitle1",
        "hero_title_2": "heroTitle2",
        "hero_sub": "heroSub",
        "tab_all": "tabAll",
        "tab_patents": "tabPatents",
        "tab_rehab": "tabRehab",
        "tab_hackathon": "tabHackathon",
        "tab_beyond": "tabBeyond",
    }
    archive_i18n: dict[str, dict[str, str]] = {}
    for loc in LOCALES:
        raw_d = arch_raw[loc]
        camel_d: dict[str, str] = {
            "navVcard": vcard_i18n[loc]["navVcard"],
            "navTutorials": raw_d["navTutorials"],
            "navBlog": raw_d["navBlog"],
            "navArchive": raw_d["navArchive"],
            "navPortfolio": raw_d["navPortfolio"],
        }
        for sk, ck in snake_to_camel.items():
            camel_d[ck] = raw_d[sk]
        archive_i18n[loc] = camel_d

    common_i18n: dict[str, dict[str, str]] = {
        "en": {
            "navVcard": "CV",
            "navArchive": "Archive",
            "navArchivePatents": "Archive & Patents",
            "navBlog": "Blog",
            "navFastSim": "Fast-Sim",
            "navTutorials": "Tutorials",
            "navPortfolio": "Main Portal",
            "goToTop": "Go to Top",
            "toggleThemeTitle": "Toggle Light / Dark Theme",
            "selectLanguageLabel": "Select Language",
            "footerBuildInPublic": "Build in Public",
            "footerTagline": "From Machine to General Intelligence by Agent-enabled System Engineering",
            "whyM9g": "Why M9G?",
            "formulaTitle": "The M9G Formula",
            "formulaDesc": "M9G represents our journey and dual alignment:",
            "formulaAnd": "and",
        },
        "ko": {
            "navVcard": "CV",
            "navArchive": "아카이브",
            "navArchivePatents": "아카이브 & 특허",
            "navBlog": "블로그",
            "navFastSim": "Fast-Sim",
            "navTutorials": "튜토리얼",
            "navPortfolio": "메인 포털",
            "goToTop": "맨 위로",
            "toggleThemeTitle": "라이트 / 다크 테마 전환",
            "selectLanguageLabel": "언어 선택",
            "footerBuildInPublic": "빌드 인 퍼블릭",
            "footerTagline": "에이전트 기반 시스템 엔지니어링을 통해 기계에서 범용 인공지능으로",
            "whyM9g": "Why M9G?",
            "formulaTitle": "M9G 공식",
            "formulaDesc": "M9G는 우리의 여정과 조화를 상징합니다:",
            "formulaAnd": "그리고",
        },
        "ja": {
            "navVcard": "CV",
            "navArchive": "アーカイブ",
            "navArchivePatents": "アーカイブ & 特許",
            "navBlog": "ブログ",
            "navFastSim": "Fast-Sim",
            "navTutorials": "チュートリアル",
            "navPortfolio": "メインポータル",
            "goToTop": "トップへ戻る",
            "toggleThemeTitle": "ライト / ダークテーマ切替",
            "selectLanguageLabel": "言語を選択",
            "footerBuildInPublic": "パブリックでビルド",
            "footerTagline": "エージェント主導のシステムエンジニアリングにより機械から汎用人工知能へ",
            "whyM9g": "Why M9G?",
            "formulaTitle": "M9Gの構成式",
            "formulaDesc": "M9Gは私たちの旅路と調和を象徴しています:",
            "formulaAnd": "と",
        },
        "zh": {
            "navVcard": "CV",
            "navArchive": "档案库",
            "navArchivePatents": "研究档案与专利",
            "navBlog": "博客",
            "navFastSim": "Fast-Sim",
            "navTutorials": "教程",
            "navPortfolio": "主门户",
            "goToTop": "返回顶部",
            "toggleThemeTitle": "切换浅色 / 深色主题",
            "selectLanguageLabel": "选择语言",
            "footerBuildInPublic": "公开构建",
            "footerTagline": "基于智能体协同系统工程，从机器迈向通用人工智能",
            "whyM9g": "为何命名 M9G？",
            "formulaTitle": "M9G 公式",
            "formulaDesc": "M9G 代表了我们的探索历程与双向奔赴：",
            "formulaAnd": "以及",
        },
        "es": {
            "navVcard": "CV",
            "navArchive": "Archivo",
            "navArchivePatents": "Archivo y Patentes",
            "navBlog": "Blog",
            "navFastSim": "Fast-Sim",
            "navTutorials": "Tutoriales",
            "navPortfolio": "Portal Principal",
            "goToTop": "Ir Arriba",
            "toggleThemeTitle": "Cambiar Tema Claro / Oscuro",
            "selectLanguageLabel": "Seleccionar Idioma",
            "footerBuildInPublic": "Construyendo en Público",
            "footerTagline": "De la Máquina a la Inteligencia General mediante Ingeniería de Sistemas basada en Agentes",
            "whyM9g": "¿Por qué M9G?",
            "formulaTitle": "La Fórmula M9G",
            "formulaDesc": "M9G representa nuestro viaje y doble alineación:",
            "formulaAnd": "y",
        },
    }

    portal_i18n: dict[str, dict[str, str]] = {
        "en": {
            "portalBrandSec": "Portfolio",
            "heroTitleHtml": '<span class="font-bold">M9G</span>: from <span class="text-[#d4af37]">Machine</span> to <span class="text-[#d4af37]">General Intelligence</span>',
            "heroSubtitleHtml": 'by <span class="text-[#d4af37] font-medium">Agent-enabled System Engineering</span>',
            "heroContact": "Contact",
            "vaultSec": "Researcher Profile & Vault",
            "vaultBadge": "Ph.D. Research Engineer • Samsung Electronics, SAIT",
            "vaultTitle": "Spatial Intelligence, Physical AI & Multi-Robot TAMP",
            "vaultP1Title": "IEEE ICRA 2025 • Atlanta, USA",
            "vaultP1Sub": "Oral Session: OPPA Mobile Robot Navigation",
            "vaultP2Title": "Google Campus Seoul • 2026",
            "vaultP2Sub": "Invited Speaker: Gemma 4 Sprint & Gemini 3 Winner",
            "vaultCvTitle": "Who Builds M9G?",
            "vaultCvHook": "Ph.D. CV • SAIT & 10 Robotics Portfolios",
            "vaultArchTitle": "Research Archive",
            "vaultArchHook": "21 Papers • 14+ Patents • Exoskeletons",
            "vaultBlogLbl": "Blog",
            "vaultTutLbl": "Tutorials",
            "vaultSchLbl": "Scholar",
            "newsSectionTitle": "Recent News",
            "newsLabel": "01 — Highlight",
            "newsBadge": "1st Place Winner • Google Hackathon",
            "newsWinnerTitleHtml": '<span class="text-amber-400 font-black">1st</span>-Place Winner at Google Gemini3 Seoul Hackathon 2026',
            "newsP1Html": 'Claimed <span class="text-amber-400 font-semibold">1st Place</span> at the prestigious <span class="text-white font-medium">Google Gemini3 Seoul Hackathon 2026</span>, standing out among 111 finalist projects and over 1,500 highly competitive applicants.',
            "newsP2Html": 'We developed <span class="text-white font-semibold">GeminiSpace</span>, a Vision-Language-Action (VLA) navigation system that turns standard single-view room photos into an <span class="text-amber-400 font-medium">interactive indoor semantic map</span>. Simply capture your space and query it naturally, acting as a smart GPS for any indoor environment.',
            "newsTryAppCta": "Try GeminiSpace Free (Live Web App)",
            "newsTryAppSub": "geminispace.mincasurong.com — Turn 360° photos into an interactive indoor spatial map",
            "newsTryAppBadge": "Free Live App",
            "roboticsTitle": "Gemini × Robotic Arm Series (Isaac Sim & ROS 2)",
            "roboticsSub": "Multi-Robot VLA Manipulation, React Flow Digital Twins & Hardware-in-the-Loop Benchmarks",
            "roboticsBlogSub": "Featured Benchmark Report",
            "fastSimHeader": "Interactive 3D Fast-Sim Web App (Live in Browser)",
            "fastSimLaunch": "Launch tamp.mincasurong.com ↗",
            "fastSimTitle": "Reconfigurable Franka FR3 Workcell & Multi-Cell Factory 3D Fast-Sim",
            "fastSimDesc": "Lazy-DaSH RCPSP Scheduler, Real-Time Execution Hypergraph, 7-DOF Damped Least-Squares (DLS) IK, and Mobile Manipulator Material Transfer across 8-slot Franka FR3 workcells and 5-MM multi-cell factories.",
            "fastSimCta": "Launch Interactive 3D Fast-Sim (tamp.mincasurong.com) ↗",
            "demoVideosSub": "Demo Videos",
            "recentBlogHeader": "Most Recent Technical Research Blog",
            "viewAllBlogs": "View All 6 Research Blogs (/blog) ↗",
            "latestBlogTitle": "Building a Browser-Native 3D Multi-Robot & Smart Factory Lite-Sim (tamp.mincasurong.com)",
            "latestBlogDesc": "134 KB binary STL pack, <25 ms 7-DoF DLS IK, 128 Hz swept capsule gate & 6-cell 18-FR3 + 4-AMR smart factory at tamp.mincasurong.com",
            "vlaBenchDescHtml": 'Side-by-side 3-arm 9-block tower benchmark in <span class="text-[#d4af37] font-medium">Isaac Sim 6.0</span>: software-pipelined 10-turn scheduling and hybrid <span class="text-[#d4af37] font-medium">Gemini 4 Carbon + Flash-Lite</span> cutting API cost by <span class="text-white">76.6% ($0.01972)</span> with 0 RGB tokens.',
            "sprintDescHtml": 'Weekend stress-test across 1B tokens shipping 6 full-stack and Physical AI systems with <span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span>, Isaac Sim, ROS 2, and <span class="text-white">Google Cloud Run</span>.',
            "ep12DescHtml": 'Three FR3 robotic arms cooperatively constructing geometric formations in <span class="text-[#d4af37] font-medium">Isaac Sim</span> with dual zero-token <span class="text-white">React Flow</span> DAG and <span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span> VLA execution.',
            "ep11DescHtml": 'Cooperative FR3 robotic arms planning and assembling in <span class="text-[#d4af37] font-medium">Isaac Sim</span> via Gemini multi-agent reasoning and <span class="text-white">React Flow</span> digital twin.',
            "ep10DescHtml": 'End-to-end VLA multi-robot control framework integrating <span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span>, Isaac Sim, ROS 2, and real-time Web GUI.',
            "v3DescHtml": 'Dynamic multi-robot collaboration on NVIDIA IsaacSim via ROS2, orchestrated by <span class="text-[#d4af37] font-medium">Antigravity 2.0</span> and Gemini.',
            "v1DescHtml": 'An autonomous workspace organizer that declutters, tags, and structures files with <span class="text-[#d4af37] font-medium">zero manual effort</span>.',
            "geminiSpaceDescHtml": 'Sub-second <span class="text-[#d4af37] font-medium">Gemini</span> spatial reasoning, 360° Visual SLAM loop closure, and photorealistic 2D orthographic rendering.',
            "diariesSectionTitle": "Gemini Diaries & Free Live Apps",
            "diariesIntroHtml": 'Documenting our builder journey in spatial intelligence, robotics, agent-driven engineering, and deployed applications using <span class="text-[#d4af37] font-medium">Google AI Studio</span>, <span class="text-[#d4af37] font-medium">Antigravity</span>, and <span class="text-white">Gemini</span>.',
            "appsDeployedSub": "Apps and Deployed",
            "cloudRunBadge": "Google Cloud Run • Gemini & Antigravity",
            "freeBadge": "100% Free",
            "tryFreeCta": "Try App Free",
            "bearTitle": "UrKuma: Korean-Japanese Quiz & learning",
            "bearBadge": "Google Play • Android Quiz App",
            "bearDesc": "Can a cute bear really make you master Chinese characters in 3 minutes a day? 🐻✨",
            "downloadBear": "Download Free on Google Play",
            "opicTitle": "OPIc AI Master Coach",
            "opicBadge": "AI Voice Speaking Coach • AL Prep",
            "opicDesc": "How people score OPIc Advanced Low in 2 weeks without expensive tutors: real-time AI voice sparring. 🎙️🔥",
            "launchOpic": "Try OPIc Free",
            "jpltTitle": "JLPT N4 Mock Exam & Drill Master",
            "jpltBadge": "Japanese Proficiency • Gemini AI Tutor",
            "jpltDesc": "The secret JLPT N4 exam cheat-code: Gemini AI tutors your exact weak spots in real-time. 🇯🇵⚡",
            "launchJplt": "Try JLPT Drill Free",
            "pubsSectionTitle": "Publications",
            "pubsViewAll": "View All Scholar",
            "pubsArchiveTitle": "Research Archive",
            "pubsTop1Title": "AI Therapist: Expert Verbal Cues for Gait Training (IEEE TNSRE)",
            "pubsTop1Desc": "Robot-assisted gait rehabilitation system incorporating expert therapist verbal cueing and feedback.",
            "pubsTop2Title": "Imitation Learning Simulation in MuJoCo & robomimic",
            "pubsTop2Desc": "Demonstration-driven robotic manipulation policy learning and evaluation in MuJoCo physics simulation.",
            "whoSectionTitle": "Who We Are",
            "whoHeading": "Hi, we're M9G",
            "whoTagline": "A team of a human and AI agents",
            "whoP1Html": 'Our foundation is rooted in a profound passion for <span class="text-[#d4af37] font-medium">robotics</span>, complemented by extensive expertise in <span class="text-white font-medium">human-robot interaction (HRI)</span>, advanced control theory, and sophisticated machine learning techniques.',
            "whoP2Html": 'Our professional experience encompasses a broad spectrum, ranging from <span class="text-white font-medium">assistive and rehabilitation robotics</span> to the development of <span class="text-[#d4af37] font-medium">agentic systems</span> for industrial automation.',
            "introKicker": "Curious About the Builder?",
        },
        "ko": {
            "portalBrandSec": "포트폴리오",
            "heroTitleHtml": '<span class="font-bold">M9G</span>: <span class="text-[#d4af37]">기계</span>에서 <span class="text-[#d4af37]">범용 인공지능</span>으로',
            "heroSubtitleHtml": '<span class="text-[#d4af37] font-medium">에이전트 기반 시스템 엔지니어링</span>을 통한 혁신',
            "heroContact": "문의하기",
            "vaultSec": "연구자 프로필 & 아카이브",
            "vaultBadge": "공학박사 리서치 엔지니어 • 삼성전자 SAIT",
            "vaultTitle": "공간 지능, 피지컬 AI & 다중 로봇 태스크·모션 플래닝",
            "vaultP1Title": "IEEE ICRA 2025 • 미국 애틀랜타",
            "vaultP1Sub": "구두 발표: OPPA 자율주행 모바일 로봇 내비게이션",
            "vaultP2Title": "Google 스타트업 캠퍼스 서울 • 2026",
            "vaultP2Sub": "초청 연사: Gemma 4 스프린트 & 해커톤 1위 우승",
            "vaultCvTitle": "Who Builds M9G? (이력서)",
            "vaultCvHook": "삼성전자 SAIT·서강대 박사 이력 & 로보틱스 10선",
            "vaultArchTitle": "Research Archive (아카이브)",
            "vaultArchHook": "논문 21편(ICRA·IROS·TNSRE) • 특허 14+건 • 외골격 로봇",
            "vaultBlogLbl": "블로그",
            "vaultTutLbl": "튜토리얼",
            "vaultSchLbl": "Scholar",
            "newsSectionTitle": "최근 소식",
            "newsLabel": "01 — 주요 성과",
            "newsBadge": "구글 해커톤 1위 대상 수상",
            "newsWinnerTitleHtml": '구글 제미나이3 서울 해커톤 2026 <span class="text-amber-400 font-black">1위 대상</span> 수상',
            "newsP1Html": '1,500명 이상의 치열한 지원자들과 111개의 최종 프로젝트 사이에서 압도적인 성과를 거두며, 권위 있는 <span class="text-amber-400 font-semibold">구글 제미나이3 서울 해커톤 2026 1위(대상)</span>를 차지했습니다.',
            "newsP2Html": '저희는 일반적인 단일 뷰 방 사진을 <span class="text-amber-400 font-medium">대화형 실내 시맨틱 지도</span>로 변환하는 비전-언어-행동(VLA) 공간 탐색 시스템 <span class="text-white font-semibold">GeminiSpace</span>를 개발했습니다. 공간을 촬영하는 것만으로 자연스러운 질문과 탐색이 가능한 스마트 실내 GPS를 제공합니다.',
            "newsTryAppCta": "GeminiSpace 무료 체험하기 (Live Web App)",
            "newsTryAppSub": "geminispace.mincasurong.com — 360° 8방향 사진으로 실내 공간맵과 SLAM을 구축하는 공간 AI",
            "newsTryAppBadge": "무료 이용 가능",
            "roboticsTitle": "Gemini × 로봇 팔 시리즈 (Isaac Sim & ROS 2)",
            "roboticsSub": "다중 로봇 VLA 제어, React Flow 디지털 트윈 및 하드웨어-인-더-루프 벤치마크",
            "roboticsBlogSub": "주요 벤치마크 리포트",
            "fastSimHeader": "인터랙티브 3D Fast-Sim 웹 시뮬레이터 (브라우저 즉시 실행)",
            "fastSimLaunch": "전체 화면으로 실행 (tamp.mincasurong.com) ↗",
            "fastSimTitle": "재구성형 Franka FR3 워크셀 & 멀티셀 팩토리 3D Fast-Sim",
            "fastSimDesc": "Lazy-DaSH RCPSP 스케줄러, 실시간 실행 하이퍼그래프, 7자유도 감쇠 최소제곱(DLS) 역기구학(IK), 모바일 매니퓰레이터 자재 이송을 탑재한 8슬롯 Franka FR3 워크셀 및 5-MM 멀티셀 팩토리 3D 웹 시뮬레이터.",
            "fastSimCta": "인터랙티브 3D Fast-Sim 실행 (tamp.mincasurong.com) ↗",
            "demoVideosSub": "데모 비디오 (Demo Videos)",
            "recentBlogHeader": "최신 기술 리서치 블로그",
            "viewAllBlogs": "전체 블로그 6편 보기 (/blog) ↗",
            "latestBlogTitle": "브라우저 네이티브 3D 다중 로봇 & 스마트 팩토리 Lite-Sim 구축기 (tamp.mincasurong.com)",
            "latestBlogDesc": "134 KB 바이너리 STL 메쉬 팩, 25 ms 미만 7자유도 DLS 역기구학(IK), 128 Hz 스웹 캡슐 충돌 게이트 및 6워크셀(18 FR3 + 4 AMR) 스마트 팩토리 웹 시뮬레이션 (tamp.mincasurong.com)",
            "vlaBenchDescHtml": 'Isaac Sim 6.0 3대 FR3 9블록 타워 벤치마크: <span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span> 파이프라인 스케줄링(10턴)과 하이브리드 실행기로 API 비용 <span class="text-white">76.6% 절감 ($0.01972)</span> 달성.',
            "sprintDescHtml": '<span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span> 10억 토큰 스트레스 테스트를 통해 Isaac Sim, ROS 2, SaaS 및 <span class="text-white">Google Cloud Run</span> 기반 6개 프로젝트를 주말 동안 배포한 스프린트.',
            "ep12DescHtml": '제로 토큰 <span class="text-white">React Flow</span> DAG 스케줄러와 <span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span> 자율 VLA 이중 실행 엔진으로 Isaac Sim에서 3대 FR3 협동 조립 구현.',
            "ep11DescHtml": '<span class="text-[#d4af37] font-medium">Gemini</span> 멀티 에이전트와 <span class="text-white">React Flow</span> 디지털 트윈을 통해 Isaac Sim에서 협동 조립을 수행하는 3대의 FR3 로봇 암.',
            "ep10DescHtml": '<span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span>, Isaac Sim, ROS 2, 실시간 웹 모니터링 GUI를 결합한 엔드투엔드 VLA 다중 로봇 제어.',
            "v3DescHtml": 'WSL2 내부의 ROS2와 윈도우 환경을 연결하고, <span class="text-[#d4af37] font-medium">Antigravity 2.0</span> 및 제미나이를 기반으로 엔비디아 아이작심(NVIDIA IsaacSim) 상에서 다중 로봇의 협업을 구현했습니다.',
            "v1DescHtml": '<span class="text-[#d4af37] font-medium">번거로운 수작업 없이</span> 디렉토리를 스스로 정리하고 태그를 지정하며 구조화하는 자율형 워크스페이스 정리 비서입니다.',
            "geminiSpaceDescHtml": '<span class="text-[#d4af37] font-medium">Gemini</span>의 서브세컨드 공간 추론, 360° Visual SLAM 루프 클로저, 사실적인 2D 정사영 렌더링.',
            "diariesSectionTitle": "Gemini 라이브 앱 & 빌드 일지",
            "diariesIntroHtml": '<span class="text-[#d4af37] font-medium">Google AI Studio</span>와 <span class="text-[#d4af37] font-medium">Antigravity</span>, 그리고 <span class="text-white">Gemini</span>를 활용하여 공간 지능, 로보틱스, 에이전트 주도 엔지니어링, 그리고 실전 애플리케이션을 구축해 나가는 여정을 기록합니다.',
            "appsDeployedSub": "무료 공개 라이브 앱 & 도구 (Free Live Apps & Tools)",
            "cloudRunBadge": "Google Cloud Run 배포 • Gemini & Antigravity",
            "freeBadge": "100% 무료 체험",
            "tryFreeCta": "무료 체험 바로가기",
            "bearTitle": "너의쿠마(UrKuma): 한일 단어 퀴즈 & 학습 (Korean-Japanese Quiz & learning)",
            "bearBadge": "구글 플레이 • 안드로이드 퀴즈 앱",
            "bearDesc": "귀여운 곰돌이와 3분 만에 한자 시험을 꿰뚫는 마법 같은 무료 퀴즈 게임! 🐻✨",
            "downloadBear": "구글 플레이 무료 다운로드",
            "opicTitle": "오픽 AI 마스터 코치 (OPIc Practice)",
            "opicBadge": "실전 음성 AI 코치 • AL 등급 대비",
            "opicDesc": "학원 안 가고 2주 만에 OPIc AL 따는 비결? 실시간 원어민 톤으로 반박하는 AI 스피킹 코치! 🎙️🔥",
            "launchOpic": "오픽 연습 무료 체험",
            "jpltTitle": "JLPT N4 실전 모의고사 & 맞춤 드릴",
            "jpltBadge": "일본어 능력시험 • Gemini AI 튜터",
            "jpltDesc": "시험장 가기 전 모르면 후회하는 JLPT N4 실전 드릴, AI가 1:1로 족집게 과외해 준다고? 🇯🇵⚡",
            "launchJplt": "JLPT 연습 무료 체험",
            "pubsSectionTitle": "논문 실적",
            "pubsViewAll": "구글 스콜라에서 모두 보기",
            "pubsArchiveTitle": "연구 아카이브 (Research Archive)",
            "pubsTop1Title": "AI 테라피스트: 보행 훈련을 위한 언어 피드백 (IEEE TNSRE)",
            "pubsTop1Desc": "전문 치료사의 언어 피드백을 적용한 로봇 보조 보행 재활 시스템.",
            "pubsTop2Title": "MuJoCo 및 robomimic 기반 모방 학습 시뮬레이션",
            "pubsTop2Desc": "물리 시뮬레이션 환경에서 시연 데이터를 활용한 로봇 조작 정책 학습.",
            "whoSectionTitle": "팀 소개",
            "whoHeading": "안녕하세요, M9G입니다",
            "whoTagline": "인간과 AI 에이전트가 함께하는 협업 팀",
            "whoP1Html": '저희의 기반은 <span class="text-[#d4af37] font-medium">로보틱스</span>에 대한 깊은 열정에 뿌리를 두고 있으며, <span class="text-white font-medium">인간-로봇 상호작용(HRI)</span>, 고성능 제어 이론, 그리고 다각화된 머신러닝 기술에 대한 전문성을 갖추고 있습니다.',
            "whoP2Html": '저희의 전문 경험은 <span class="text-white font-medium">재활 및 보조 로봇 공학</span>부터 산업 자동화를 위한 <span class="text-[#d4af37] font-medium">지능형 에이전트 시스템 개발</span>에 이르기까지 광범위한 영역을 아우릅니다.',
            "introKicker": "M9G를 만든 연구자가 궁금하신가요?",
        },
        "ja": {
            "portalBrandSec": "ポートフォリオ",
            "heroTitleHtml": '<span class="font-bold">M9G</span>: <span class="text-[#d4af37]">機械</span>から<span class="text-[#d4af37]">汎用人工知能</span>へ',
            "heroSubtitleHtml": '<span class="text-[#d4af37] font-medium">エージェント主導のシステムエンジニアリング</span>による創造',
            "heroContact": "お問い合わせ",
            "vaultSec": "研究者プロフィール & アーカイブ",
            "vaultBadge": "Ph.D. リサーチエンジニア • Samsung Electronics, SAIT",
            "vaultTitle": "空間知能・フィジカルAI・マルチロボットTAMP",
            "vaultP1Title": "IEEE ICRA 2025 • 米国アトランタ",
            "vaultP1Sub": "口頭発表：OPPA 自律移動ロボットナビゲーション",
            "vaultP2Title": "Google Campus Seoul • 2026",
            "vaultP2Sub": "招待講演：Gemma 4 Sprint & ハッカソン第1位",
            "vaultCvTitle": "Who Builds M9G? (CV)",
            "vaultCvHook": "SAIT・西江大Ph.D.経歴 & ロボティクス10選",
            "vaultArchTitle": "Research Archive",
            "vaultArchHook": "論文21編 (ICRA・IROS・TNSRE) • 特許14+件 • 医療用外骨格",
            "vaultBlogLbl": "ブログ",
            "vaultTutLbl": "講座",
            "vaultSchLbl": "Scholar",
            "newsSectionTitle": "最新ニュース",
            "newsLabel": "01 — ハイライト",
            "newsBadge": "Google ハッカソン 1位 最優秀賞",
            "newsWinnerTitleHtml": 'Google Gemini3 ソウルハッカソン2026 <span class="text-amber-400 font-black">1位 最優秀賞</span>',
            "newsP1Html": '1,500人以上の応募者、111の最終プロジェクトの中から選ばれ、栄えある<span class="text-amber-400 font-semibold">Google Gemini3 ソウルハッカソン2026で1位（最優秀賞）</span>を獲得しました。',
            "newsP2Html": '私たちは、一般的な部屋の写真から<span class="text-amber-400 font-medium">インタラクティブな屋内セマンティックマップ</span>を構築するVLAナビゲーションシステム<span class="text-white font-semibold">GeminiSpace</span>を開発しました。空間を撮影し自然言語で問い合わせるだけで、スマート屋内GPSとして機能します。',
            "newsTryAppCta": "GeminiSpace を無料で試す (Live Web App)",
            "newsTryAppSub": "geminispace.mincasurong.com — 360°写真からインタラクティブな屋内空間マップを即時生成",
            "newsTryAppBadge": "無料アクセス",
            "roboticsTitle": "Gemini × ロボットアームシリーズ (Isaac Sim & ROS 2)",
            "roboticsSub": "マルチロボットVLA制御、React Flowデジタルツイン、ベンチマーク",
            "roboticsBlogSub": "注目ベンチマークレポート",
            "fastSimHeader": "インタラクティブ 3D Fast-Sim Webアプリ (ブラウザで即実行)",
            "fastSimLaunch": "フルスクリーンで開く (tamp.mincasurong.com) ↗",
            "fastSimTitle": "再構成可能 Franka FR3 ワークセル & マルチセル工場 3D Fast-Sim",
            "fastSimDesc": "Lazy-DaSH RCPSPスケジューラ、リアルタイム実行ハイパーグラフ、7自由度DLS逆運動学(IK)、モバイルマニピュレータ資材搬送を備えたFranka FR3ワークセル＆マルチセル工場3Dシミュレータ。",
            "fastSimCta": "3D Fast-Sim を今すぐ起動 (tamp.mincasurong.com) ↗",
            "demoVideosSub": "デモ動画 (Demo Videos)",
            "recentBlogHeader": "最新技術リサーチブログ",
            "viewAllBlogs": "全6本の記事を見る (/blog) ↗",
            "latestBlogTitle": "ブラウザネイティブ 3D マルチロボット＆スマート工場 Lite-Sim 構築記 (tamp.mincasurong.com)",
            "latestBlogDesc": "134 KBバイナリSTLメッシュ、25 ms未満の7自由度DLS逆運動学(IK)、128 Hzカプセル衝突安全ゲート、および6セル(18台FR3＋4台AMR)スマート工場シミュレーション (tamp.mincasurong.com)",
            "vlaBenchDescHtml": 'Isaac Sim 6.0での3アーム9ブロックタワー比較: <span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span>の10ターンパイプライン制御とハイブリッド構成でAPIコストを<span class="text-white">76.6%削減 ($0.01972)</span>。',
            "sprintDescHtml": '<span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span>で10億トークンを投入し、Isaac Sim、ROS 2、SaaS、<span class="text-white">Google Cloud Run</span>の6プロジェクトを週末で構築・デプロイ。',
            "ep12DescHtml": 'ゼロトークン<span class="text-white">React Flow</span> DAGと<span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span> VLAのデュアル実行エンジンによるIsaac Sim上の3台FR3協調制御。',
            "ep11DescHtml": '<span class="text-[#d4af37] font-medium">Gemini</span>マルチエージェントと<span class="text-white">React Flow</span>デジタルツインによる、Isaac Sim上での3台のFR3アーム協調制御・組み立て。',
            "ep10DescHtml": '<span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span>、Isaac Sim、ROS 2、リアルタイムWeb GUIを統合したエンドツーエンドVLA制御。',
            "v3DescHtml": 'NVIDIA IsaacSim上でROS2を介した動的な複数ロボットの協調制御を、<span class="text-[#d4af37] font-medium">Antigravity 2.0</span>とGeminiで実現。',
            "v1DescHtml": '<span class="text-[#d4af37] font-medium">手作業ゼロ</span>でファイルを整理、タグ付け、構造化する自律的なワークスペースオーガナイザー。',
            "geminiSpaceDescHtml": '<span class="text-[#d4af37] font-medium">Gemini</span>の高速空間推論、360° Visual SLAMループ閉合、写実的2D正射投影図レンダリング。',
            "diariesSectionTitle": "Gemini ライブアプリ & ビルド日記",
            "diariesIntroHtml": '<span class="text-[#d4af37] font-medium">Google AI Studio</span>、<span class="text-[#d4af37] font-medium">Antigravity</span>、そして<span class="text-white">Gemini</span>を用いて、空間知能、ロボティクス、エージェント主導開発、デプロイアプリの構築プロセスを記録します。',
            "appsDeployedSub": "無料公開ライブアプリ・ツール (Free Live Apps & Tools)",
            "cloudRunBadge": "Google Cloud Run デプロイ • Gemini & Antigravity",
            "freeBadge": "100% 無料利用可能",
            "tryFreeCta": "無料ですぐ試す",
            "bearTitle": "UrKuma: 日韓クイズ＆学習 (Korean-Japanese Quiz & learning)",
            "bearBadge": "Google Play • Android クイズアプリ",
            "bearDesc": "可愛いクマと一緒にたった3分で漢字を完全マスターできる秘密のクイズ！🐻✨",
            "downloadBear": "Google Play で無料ダウンロード",
            "opicTitle": "OPIc AI マスターコーチ",
            "opicBadge": "リアルタイム音声AI • AL等級対策",
            "opicDesc": "スクール通いなしでOPIc最高位ALを達成する秘訣？リアルタイム音声AIスパーリング！🎙️🔥",
            "launchOpic": "OPIc を無料で試す",
            "jpltTitle": "JLPT N4 実戦模擬試験 & ドリルマスター",
            "jpltBadge": "日本語能力試験 • Gemini AI チューター",
            "jpltDesc": "本番前の駆け込み寺！Gemini AIがあなたの弱点をリアルタイムで集中特訓。🇯🇵⚡",
            "launchJplt": "JLPT演習を無料で試す",
            "pubsSectionTitle": "論文・出版物",
            "pubsViewAll": "Google Scholarで全て見る",
            "pubsArchiveTitle": "研究アーカイブ (Research Archive)",
            "pubsTop1Title": "AIセラピスト: 歩行訓練用音声フィードバック (IEEE TNSRE)",
            "pubsTop1Desc": "専門セラピストの言語的キューを再現したロボット支援歩行リハビリシステム。",
            "pubsTop2Title": "MuJoCo・robomimic 模倣学習シミュレーション",
            "pubsTop2Desc": "物理シミュレーションにおける実演データに基づくロボット操作ポリシー学習。",
            "whoSectionTitle": "チーム紹介",
            "whoHeading": "こんにちは、M9Gです",
            "whoTagline": "人間とAIエージェントによるコラボレーションチーム",
            "whoP1Html": '私たちの基礎は<span class="text-[#d4af37] font-medium">ロボティクス</span>への深い情熱に根ざしており、<span class="text-white font-medium">ヒューマン・ロボット・インタラクション（HRI）</span>、高度な制御理論、洗練された機械学習技術の広範な専門知識を備えています。',
            "whoP2Html": '私たちの実務経験は、<span class="text-white font-medium">支援・リハビリテーションロボティクス</span>から産業自動化向けの<span class="text-[#d4af37] font-medium">エージェントシステム開発</span>まで、多岐にわたる領域を網羅しています。',
            "introKicker": "開発者の経歴・研究実績はこちら",
        },
        "zh": {
            "portalBrandSec": "作品集",
            "heroTitleHtml": '<span class="font-bold">M9G</span>: 从<span class="text-[#d4af37]">机器</span>到<span class="text-[#d4af37]">通用人工智能</span>',
            "heroSubtitleHtml": '基于<span class="text-[#d4af37] font-medium">智能体协同系统工程</span>',
            "heroContact": "联系我们",
            "vaultSec": "研究者档案与学术宝库",
            "vaultBadge": "工学博士研究工程师 • 三星电子 SAIT",
            "vaultTitle": "空间智能、具身物理 AI 与多机器人任务运动规划",
            "vaultP1Title": "IEEE ICRA 2025 • 美国亚特兰大",
            "vaultP1Sub": "口头报告：OPPA 移动机器人自适应导航",
            "vaultP2Title": "Google 首尔创业园区 • 2026",
            "vaultP2Sub": "特邀演讲：Gemma 4 冲刺与黑客松冠军",
            "vaultCvTitle": "Who Builds M9G? (CV)",
            "vaultCvHook": "三星 SAIT 与西江大学博士履历 • 10 项作品",
            "vaultArchTitle": "Research Archive",
            "vaultArchHook": "21 篇论文 (ICRA/IROS/TNSRE) • 14+ 项专利 • 医疗外骨骼",
            "vaultBlogLbl": "博客",
            "vaultTutLbl": "教程",
            "vaultSchLbl": "Scholar",
            "newsSectionTitle": "最新动态",
            "newsLabel": "01 — 焦点成果",
            "newsBadge": "谷歌黑客马拉松 第一名",
            "newsWinnerTitleHtml": '荣获 2026 谷歌 Gemini3 首尔黑客马拉松 <span class="text-amber-400 font-black">第一名</span>',
            "newsP1Html": '在 1,500 多名极具竞争力的申请者以及 111 个决赛项目里脱颖而出，斩获了享誉盛名的<span class="text-amber-400 font-semibold"> 2026 谷歌 Gemini3 首尔黑客马拉松第一名</span>。',
            "newsP2Html": '我们开发了 <span class="text-white font-semibold">GeminiSpace</span>，这是一款视觉-语言-动作（VLA）空间导航系统，能够将单视角房间照片转换为<span class="text-amber-400 font-medium">交互式室内语义地图</span>，像智能室内 GPS 一样随时自然交互。',
            "newsTryAppCta": "免费体验 GeminiSpace (Live Web App)",
            "newsTryAppSub": "geminispace.mincasurong.com — 基于 360° 照片生成交互式室内空间地图",
            "newsTryAppBadge": "免费体验",
            "roboticsTitle": "Gemini × 机械臂系列 (Isaac Sim & ROS 2)",
            "roboticsSub": "多机械臂 VLA 协同操控、React Flow 数字孪生与硬件在环基准测试",
            "roboticsBlogSub": "精选基准测试报告",
            "fastSimHeader": "交互式 3D Fast-Sim 网页仿真器 (浏览器即开即用)",
            "fastSimLaunch": "全屏打开 (tamp.mincasurong.com) ↗",
            "fastSimTitle": "可重构 Franka FR3 工作站与多单元工厂 3D Fast-Sim",
            "fastSimDesc": "集成 Lazy-DaSH RCPSP 调度器、实时执行超图、7 自由度阻尼最小二乘 (DLS) 逆运动学与移动机械臂物料转运的 8 槽位 Franka FR3 工作站及多单元工厂 3D 实时仿真。",
            "fastSimCta": "立即启动 3D Fast-Sim (tamp.mincasurong.com) ↗",
            "demoVideosSub": "演示视频 (Demo Videos)",
            "recentBlogHeader": "最新技术研究博客",
            "viewAllBlogs": "查看全部 6 篇技术博客 (/blog) ↗",
            "latestBlogTitle": "构建浏览器原生 3D 多机器人与智能工厂 Lite-Sim (tamp.mincasurong.com)",
            "latestBlogDesc": "134 KB 二进制 STL 网格包、<25 ms 7-DoF DLS 逆运动学、128 Hz 扫掠胶囊安全门控与 6 单元 (18 FR3 + 4 AMR) 智能工厂实时仿真 (tamp.mincasurong.com)",
            "vlaBenchDescHtml": 'Isaac Sim 6.0 三机械臂 9 积木塔基准测试：<span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span> 10 轮流水线调度与混合执行器将 API 成本降低 <span class="text-white">76.6% ($0.01972)</span>。',
            "sprintDescHtml": '周末消耗 10 亿 Token 压测 <span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span>，交付涵盖 Isaac Sim、ROS 2、SaaS 与 <span class="text-white">Google Cloud Run</span> 的 6 个完整项目。',
            "ep12DescHtml": '结合零 Token <span class="text-white">React Flow</span> DAG 调度与 <span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span> 闭环 VLA 双执行引擎，在 Isaac Sim 中实现 3 台 FR3 机械臂协同装配。',
            "ep11DescHtml": '基于 <span class="text-[#d4af37] font-medium">Gemini</span> 多智能体架构与 <span class="text-white">React Flow</span> 数字孪生，在 Isaac Sim 中实现 3 台 FR3 机械臂协同规划与装配。',
            "ep10DescHtml": '整合 <span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span>、Isaac Sim、ROS 2 与实时 Web GUI 的端到端 VLA 多机器人操控框架。',
            "v3DescHtml": '在 NVIDIA IsaacSim 上通过 ROS2 实现动态多机器人协作，由 <span class="text-[#d4af37] font-medium">Antigravity 2.0</span> 和 Gemini 协同调度。',
            "v1DescHtml": '一款自动化的工作空间整理工具，可以实现<span class="text-[#d4af37] font-medium">零人工干预</span>地整理、标记和组织文件结构。',
            "geminiSpaceDescHtml": '基于 <span class="text-[#d4af37] font-medium">Gemini</span> 亚秒级空间推理、360° Visual SLAM 闭环检测与照片级 2D 正交渲染。',
            "diariesSectionTitle": "Gemini 免费在线应用与构建日志",
            "diariesIntroHtml": '记录我们在空间智能、机器人技术、智能体驱动工程与已发布应用中的构建历程。主要使用 <span class="text-[#d4af37] font-medium">Google AI Studio</span>、<span class="text-[#d4af37] font-medium">Antigravity</span> 以及 <span class="text-white">Gemini</span>。',
            "appsDeployedSub": "免费在线应用与工具 (Free Live Apps & Tools)",
            "cloudRunBadge": "Google Cloud Run • Gemini & Antigravity",
            "freeBadge": "100% 免费体验",
            "tryFreeCta": "立即免费体验",
            "bearTitle": "UrKuma: 韩日双语词汇测验与学习 (Korean-Japanese Quiz & learning)",
            "bearBadge": "Google Play • 安卓测验应用",
            "bearDesc": "每天 3 分钟，跟随超萌小熊轻松拿下汉字闯关！🐻✨",
            "downloadBear": "在 Google Play 免费下载",
            "opicTitle": "OPIc AI 智能口语私教",
            "opicBadge": "实时 AI 语音口语教练 • AL 高级备考",
            "opicDesc": "不用报班就能拿下 OPIc AL 高分的秘密武器：实时纯正母语级 AI 语音对练！🎙️🔥",
            "launchOpic": "免费体验 OPIc",
            "jpltTitle": "JLPT N4 实战模拟考与专项特训",
            "jpltBadge": "日语能力考试 • Gemini AI 私教",
            "jpltDesc": "考前必刷的 JLPT N4 提分神器，AI 实时揪出薄弱题型一对一攻克！🇯🇵⚡",
            "launchJplt": "免费体验 JLPT",
            "pubsSectionTitle": "发表论文",
            "pubsViewAll": "在谷歌学术中查看全部",
            "pubsArchiveTitle": "研究档案 (Research Archive)",
            "pubsTop1Title": "AI 康复治疗师: 专家语音提示步态训练 (IEEE TNSRE)",
            "pubsTop1Desc": "结合专业治疗师实时语音提示反馈的机器人辅助步态康复系统。",
            "pubsTop2Title": "MuJoCo 与 robomimic 机械臂模仿学习仿真",
            "pubsTop2Desc": "物理仿真环境中基于示范数据的机器人操控策略学习与评估。",
            "whoSectionTitle": "团队简介",
            "whoHeading": "你好，我们是 M9G",
            "whoTagline": "由人类与 AI 智能体协同组成的团队",
            "whoP1Html": '我们的根基源于对<span class="text-[#d4af37] font-medium">机器人技术</span>的深厚热情，并辅以在<span class="text-white font-medium">人机交互（HRI）</span>、高级控制理论以及复杂机器学习技术方面的深厚专业知识。',
            "whoP2Html": '我们的专业经验涵盖广泛，从<span class="text-white font-medium">辅助与康复机器人技术</span>，延伸至用于工业自动化的<span class="text-[#d4af37] font-medium">智能体协同系统开发</span>。',
            "introKicker": "想了解 M9G 背后的研究者吗？",
        },
        "es": {
            "portalBrandSec": "Portafolio",
            "heroTitleHtml": '<span class="font-bold">M9G</span>: de la <span class="text-[#d4af37]">Máquina</span> a la <span class="text-[#d4af37]">Inteligencia General</span>',
            "heroSubtitleHtml": 'mediante <span class="text-[#d4af37] font-medium">Ingeniería de Sistemas basada en Agentes</span>',
            "heroContact": "Contacto",
            "vaultSec": "Perfil del Investigador y Archivo",
            "vaultBadge": "Ingeniero de Investigación Ph.D. • Samsung Electronics, SAIT",
            "vaultTitle": "Inteligencia Espacial, IA Física y TAMP Multirrobot",
            "vaultP1Title": "IEEE ICRA 2025 • Atlanta, EE.UU.",
            "vaultP1Sub": "Ponencia Oral: Navegación Móvil OPPA",
            "vaultP2Title": "Google Campus Seoul • 2026",
            "vaultP2Sub": "Orador Invitado: Gemma 4 Sprint y Ganador Gemini 3",
            "vaultCvTitle": "Who Builds M9G? (CV)",
            "vaultCvHook": "CV Ph.D. en SAIT y Sogang • 10 Portafolios",
            "vaultArchTitle": "Research Archive",
            "vaultArchHook": "21 Artículos • 14+ Patentes • Exoesqueletos",
            "vaultBlogLbl": "Blog",
            "vaultTutLbl": "Tutoriales",
            "vaultSchLbl": "Scholar",
            "newsSectionTitle": "Noticias Recientes",
            "newsLabel": "01 — Destacado",
            "newsBadge": "1.er Puesto • Google Hackathon",
            "newsWinnerTitleHtml": 'Ganador del <span class="text-amber-400 font-black">1.er</span> Puesto en Google Gemini3 Seoul Hackathon 2026',
            "newsP1Html": 'Obtuvimos el <span class="text-amber-400 font-semibold">1.er Puesto</span> en el prestigioso <span class="text-white font-medium">Google Gemini3 Seoul Hackathon 2026</span>, destacando entre 111 proyectos y más de 1,500 candidatos altamente competitivos.',
            "newsP2Html": 'Desarrollamos <span class="text-white font-semibold">GeminiSpace</span>, un sistema de navegación VLA que convierte fotos estándar de una habitación en un <span class="text-amber-400 font-medium">mapa semántico interior interactivo</span>. Simplemente captura tu espacio y navega con lenguaje natural.',
            "newsTryAppCta": "Probar GeminiSpace Gratis (Live Web App)",
            "newsTryAppSub": "geminispace.mincasurong.com — Convierte fotos 360° en un mapa espacial interactivo",
            "newsTryAppBadge": "Acceso Gratis",
            "roboticsTitle": "Serie Brazo Robótico × Gemini (Isaac Sim y ROS 2)",
            "roboticsSub": "Manipulación Multirrobot VLA, Gemelos Digitales en React Flow y Benchmarks",
            "roboticsBlogSub": "Informe Destacado",
            "fastSimHeader": "Simulador Web 3D Fast-Sim Interactivo (En Vivo)",
            "fastSimLaunch": "Abrir en Pantalla Completa (tamp.mincasurong.com) ↗",
            "fastSimTitle": "Fast-Sim 3D de Celda Franka FR3 Reconfigurable y Fábrica Multicelular",
            "fastSimDesc": "Planificador RCPSP Lazy-DaSH, hipergrafo de ejecución en tiempo real, IK DLS de 7-GDL y transferencia de materiales con manipuladores móviles en celdas Franka FR3 y fábricas multicelulares.",
            "fastSimCta": "Iniciar 3D Fast-Sim Interactivo (tamp.mincasurong.com) ↗",
            "demoVideosSub": "Videos de Demostración",
            "recentBlogHeader": "Blog de Investigación Más Reciente",
            "viewAllBlogs": "Ver los 6 Blogs (/blog) ↗",
            "latestBlogTitle": "Construyendo un Lite-Sim 3D Multirrobot y de Fábrica Inteligente (tamp.mincasurong.com)",
            "latestBlogDesc": "Paquete STL binario de 134 KB, IK DLS de 7-GDL en <25 ms, compuerta de cápsulas a 128 Hz y fábrica inteligente de 6 celdas (18 FR3 + 4 AMRs) en tamp.mincasurong.com",
            "vlaBenchDescHtml": 'Benchmark de torre de 9 bloques con 3 brazos en Isaac Sim 6.0: planificación segmentada en 10 turnos con <span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span> reduciendo el costo API en <span class="text-white">76.6% ($0.01972)</span>.',
            "sprintDescHtml": 'Sprint de fin de semana con 1B de tokens en <span class="text-[#d4af37] font-medium">Gemini 4 Carbon</span> desplegando 6 proyectos con Isaac Sim, ROS 2 y <span class="text-white">Google Cloud Run</span>.',
            "ep12DescHtml": 'Tres brazos FR3 colaborando en Isaac Sim mediante motor dual: DAG sin tokens en <span class="text-white">React Flow</span> y VLA autónomo con <span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span>.',
            "ep11DescHtml": 'Brazos robóticos FR3 planificando y ensamblando en Isaac Sim con razonamiento multiagente de <span class="text-[#d4af37] font-medium">Gemini</span> y gemelo digital en <span class="text-white">React Flow</span>.',
            "ep10DescHtml": 'Control multirrobot VLA que integra <span class="text-[#d4af37] font-medium">Gemini Robotics-ER 2</span>, Isaac Sim, ROS 2 y GUI de monitoreo web en tiempo real.',
            "v3DescHtml": 'Colaboración dinámica de múltiples robots en NVIDIA IsaacSim a través de ROS2, orquestada por <span class="text-[#d4af37] font-medium">Antigravity 2.0</span> y Gemini.',
            "v1DescHtml": 'Un organizador de espacio de trabajo autónomo que limpia, etiqueta y estructura archivos con <span class="text-[#d4af37] font-medium">cero esfuerzo manual</span>.',
            "geminiSpaceDescHtml": 'Razonamiento con <span class="text-[#d4af37] font-medium">Gemini</span>, cierre de bucle Visual SLAM 360° y renderizado 2D ortográfico fotorrealista.',
            "diariesSectionTitle": "Apps en Vivo y Diarios con Gemini",
            "diariesIntroHtml": 'Documentamos nuestro viaje como desarrolladores en inteligencia espacial, robótica, ingeniería dirigida por agentes y aplicaciones desplegadas utilizando <span class="text-[#d4af37] font-medium">Google AI Studio</span>, <span class="text-[#d4af37] font-medium">Antigravity</span> y <span class="text-white">Gemini</span>.',
            "appsDeployedSub": "Aplicaciones Gratuitas en Vivo (Free Live Apps & Tools)",
            "cloudRunBadge": "Google Cloud Run • Gemini & Antigravity",
            "freeBadge": "100% Gratis",
            "tryFreeCta": "Probar Gratis Ahora",
            "bearTitle": "UrKuma: Korean-Japanese Quiz & learning",
            "bearBadge": "Google Play • App de Quiz Android",
            "bearDesc": "¿Puede un tierno oso hacer que domines caracteres en 3 minutos al día? 🐻✨",
            "downloadBear": "Descargar Gratis en Google Play",
            "opicTitle": "OPIc AI Master Coach",
            "opicBadge": "Entrenador de Voz IA • Nivel AL",
            "opicDesc": "¿El truco para sacar AL en OPIc sin pagar academias? Sparring vocal con IA en tiempo real. 🎙️🔥",
            "launchOpic": "Probar OPIc Gratis",
            "jpltTitle": "Examen de Práctica JLPT N4 y Master Drill",
            "jpltBadge": "Aptitud en Japonés • Tutor Gemini AI",
            "jpltDesc": "El secreto para aprobar el JLPT N4: una IA que detecta y entrena tus puntos débiles al instante. 🇯🇵⚡",
            "launchJplt": "Probar JLPT Gratis",
            "pubsSectionTitle": "Publicaciones",
            "pubsViewAll": "Ver todo en Google Scholar",
            "pubsArchiveTitle": "Archivo de Investigación (Research Archive)",
            "pubsTop1Title": "Terapeuta IA: Retroalimentación Verbal para Marcha (IEEE TNSRE)",
            "pubsTop1Desc": "Rehabilitación de marcha asistida por robot con retroalimentación verbal experta.",
            "pubsTop2Title": "Simulación de Aprendizaje por Imitación en MuJoCo",
            "pubsTop2Desc": "Aprendizaje de políticas de manipulación guiadas por demostración en física MuJoCo.",
            "whoSectionTitle": "Quiénes Somos",
            "whoHeading": "Hola, somos M9G",
            "whoTagline": "Un equipo colaborativo de humanos y agentes de IA",
            "whoP1Html": 'Nuestra base está arraigada en una profunda pasión por la <span class="text-[#d4af37] font-medium">robótica</span>, complementada con una sólida experiencia en <span class="text-white font-medium">interacción humano-robot (HRI)</span>, teoría de control avanzado y técnicas sofisticadas de aprendizaje automático.',
            "whoP2Html": 'Nuestra experiencia profesional abarca un amplio espectro, desde la <span class="text-white font-medium">robótica asistencial y de rehabilitación</span> hasta el desarrollo de <span class="text-[#d4af37] font-medium">sistemas de agentes</span> para la automatización industrial.',
            "introKicker": "¿Curioso por Quién Construye M9G?",
        },
    }

    # Combine into unified camelCase UI dictionary per locale
    unified_ui: dict[str, dict[str, str]] = {}
    for loc in LOCALES:
        merged: dict[str, str] = {}
        merged.update(common_i18n[loc])
        merged.update(portal_i18n[loc])

        # Blog Hub keys (camelCase)
        for k, v in hub_i18n[loc].items():
            if k == "tabAll":
                merged["blogTabAll"] = v
            merged[k] = v

        # vCard keys (camelCase)
        for k, v in vcard_i18n[loc].items():
            if k == "headerBrand":
                merged["vcardHeaderBrand"] = v
            merged[k] = v

        # Tutorials keys (camelCase)
        for k, v in tut_i18n[loc].items():
            if k == "headerBrand":
                merged["tutorialsHeaderBrand"] = v
            elif k == "tabAll":
                merged["tutorialsTabAll"] = v
            else:
                merged[k] = v

        # Archive keys (camelCase)
        for k, v in archive_i18n[loc].items():
            if k == "navArchiveBrand":
                merged["archiveHeaderBrand"] = v
                merged["navArchiveBrand"] = v
            elif k == "tabAll":
                merged["archiveTabAll"] = v
            else:
                merged[k] = v

        unified_ui[loc] = merged

    # Verify all keys are camelCase (alphanumeric, starting with lowercase letter)
    en_keys = list(unified_ui["en"].keys())
    for k in en_keys:
        if not re.match(r"^[a-z][a-zA-Z0-9]*$", k):
            raise RuntimeError(f"Non-camelCase key in UI_I18N: {k}")
    for loc in LOCALES:
        if set(unified_ui[loc].keys()) != set(en_keys):
            raise RuntimeError(f"Key mismatch in UI_I18N for locale {loc}")

    def render_typed_dict_block(
        const_name: str,
        type_prefix: str,
        data: dict[str, dict[str, str]],
    ) -> list[str]:
        en_var = f"en{type_prefix}"
        key_type = f"{type_prefix}Key"
        dict_type = f"{type_prefix}Dictionary"
        lines = [
            f"const {en_var} = {json.dumps(data['en'], indent=2, ensure_ascii=False)} as const;",
            f"export type {key_type} = keyof typeof {en_var};",
            f"export type {dict_type} = Record<{key_type}, string>;",
        ]
        for loc in ("ko", "ja", "zh", "es"):
            lines.append(
                f"const {loc}{type_prefix} = {json.dumps(data[loc], indent=2, ensure_ascii=False)} satisfies {dict_type};"
            )
        lines.extend(
            [
                f"export const {const_name} = {{",
                f"  en: {en_var},",
                f"  ko: ko{type_prefix},",
                f"  ja: ja{type_prefix},",
                f"  zh: zh{type_prefix},",
                f"  es: es{type_prefix},",
                f"}} as const satisfies Record<Locale, {dict_type}>;",
                "",
            ]
        )
        return lines

    ts_lines = [
        "export const SUPPORTED_LOCALES = ['en', 'ko', 'ja', 'zh', 'es'] as const;",
        "export type Locale = (typeof SUPPORTED_LOCALES)[number];",
        "export const DEFAULT_LOCALE: Locale = 'en';",
        "",
        "export const LOCALE_OPTIONS: ReadonlyArray<{ code: Locale; short: string; label: string }> = [",
        "  { code: 'en', short: 'EN', label: 'English' },",
        "  { code: 'ko', short: 'KO', label: '한국어' },",
        "  { code: 'ja', short: 'JA', label: '日本語' },",
        "  { code: 'zh', short: 'ZH', label: '中文' },",
        "  { code: 'es', short: 'ES', label: 'Español' },",
        "] as const;",
        "",
    ]
    ts_lines.extend(render_typed_dict_block("UI_I18N", "Ui", unified_ui))
    ts_lines.extend(render_typed_dict_block("COMMON_I18N", "CommonUi", common_i18n))
    ts_lines.extend(render_typed_dict_block("PORTAL_I18N", "PortalUi", portal_i18n))
    ts_lines.extend(render_typed_dict_block("BLOG_HUB_I18N", "BlogHubUi", hub_i18n))
    ts_lines.extend(render_typed_dict_block("VCARD_I18N", "VcardUi", vcard_i18n))
    ts_lines.extend(
        render_typed_dict_block("TUTORIALS_I18N", "TutorialsUi", tut_i18n)
    )
    ts_lines.extend(
        render_typed_dict_block("ARCHIVE_I18N", "ArchiveUi", archive_i18n)
    )
    ts_lines.extend(
        [
            "export function t(locale: Locale, key: UiKey): string {",
            "  return UI_I18N[locale]?.[key] ?? UI_I18N.en[key];",
            "}",
            "",
        ]
    )

    ts_content = "\n".join(ts_lines)

    ui_path = ROOT / "src" / "i18n" / "ui.ts"
    ui_path.parent.mkdir(parents=True, exist_ok=True)
    ui_path.write_text(ts_content, encoding="utf-8")
    print(f"Wrote {ui_path.relative_to(ROOT)} ({len(en_keys)} camelCase keys × 5 locales)")


def verify_extracted_outputs() -> None:
    for spec in BLOG_SPECS:
        slug = spec["slug"]
        p = ROOT / "src" / "content" / "blogs" / f"{slug}.json"
        data = json.loads(p.read_text(encoding="utf-8"))
        assert data["slug"] == slug
        assert data["reportId"] == spec["reportId"]
        body = data["bodyHtml"]
        assert re.search(r"<video\b[^>]*\bautoplay\b", body) is None, (
            f"Found <video autoplay> in {slug}.json bodyHtml"
        )
        assert "<picture><source srcset=\"/screenshots/" in body, (
            f"Missing <picture> WebP upgrade in {slug}.json bodyHtml"
        )
        if slug != "VLA":
            assert 'preload="metadata" muted playsinline controls' in body, (
                f"Missing preload=metadata video upgrade in {slug}.json bodyHtml"
            )

    pubs = json.loads(
        (ROOT / "src" / "content" / "data" / "publications.json").read_text(
            encoding="utf-8"
        )
    )
    assert len(pubs) == 21
    assert sum(1 for x in pubs if x["frontier"]) == 8

    pats = json.loads(
        (ROOT / "src" / "content" / "data" / "patents.json").read_text(
            encoding="utf-8"
        )
    )
    assert len(pats) == 14
    assert sum(1 for x in pats if x["jurisdiction"] == "US") == 10
    assert sum(1 for x in pats if x["jurisdiction"] == "KR") == 4

    reds = json.loads(
        (ROOT / "src" / "content" / "data" / "redirects.json").read_text(
            encoding="utf-8"
        )
    )
    assert len(reds) == 25
    print(
        "VERIFIED: 6 blogs (VLA uppercase preserved, <picture> WebP + <video preload=metadata>), "
        "21 publications (8 frontier + 13 standard), 14 patents (10 US + 4 KR), 25 legacy redirects."
    )


def main() -> None:
    dimensions = load_dimensions()
    hub_i18n = extract_blogs(dimensions)
    extract_publications()
    extract_patents()
    extract_redirects()
    extract_ui_ts(hub_i18n)
    verify_extracted_outputs()


if __name__ == "__main__":
    main()
