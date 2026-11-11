import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIMENSIONS_PATH = ROOT / "public" / "screenshots" / "dimensions.json"
DIMENSIONS = json.loads(DIMENSIONS_PATH.read_text(encoding="utf-8"))

THEME_TOGGLE_BTN = (
    '<button class="topbar-btn" id="theme-btn" data-theme-toggle="icon-only" '
    'onclick="window.__m9gToggleTheme()" title="Toggle Light / Dark Theme">☀</button>'
)


def upgrade_screenshot_imgs(html: str) -> str:
    pattern = re.compile(
        r'<img\s+([^>]*?src="(/screenshots/[^"]+\.(?:jpg|png))"[^>]*?)\s*/?>'
    )

    def repl(match: re.Match[str]) -> str:
        attrs = match.group(1).strip()
        src = match.group(2)
        meta = DIMENSIONS.get(src)
        if not meta or not meta.get("webp"):
            raise ValueError(f"Missing WebP/dimension metadata for {src}")
        width = meta["width"]
        height = meta["height"]
        webp = meta["webp"]
        if 'width="' not in attrs:
            attrs += f' width="{width}"'
        if 'height="' not in attrs:
            attrs += f' height="{height}"'
        if 'decoding="' not in attrs:
            attrs += ' decoding="async"'
        return (
            f'<picture>'
            f'<source srcset="{webp}" type="image/webp" />'
            f'<img {attrs} />'
            f'</picture>'
        )

    return pattern.sub(repl, html)


def remove_google_fonts_and_head_theme_script(html: str) -> str:
    html = re.sub(
        r'\s*<link\s+rel="preconnect"\s+href="https://fonts\.googleapis\.com"\s*/?>',
        "",
        html,
    )
    html = re.sub(
        r'\s*<link\s+rel="preconnect"\s+href="https://fonts\.gstatic\.com"\s+crossorigin\s*/?>',
        "",
        html,
    )
    html = re.sub(
        r'\s*<link\s+href="https://fonts\.googleapis\.com/css2\?[^"]+"\s+rel="stylesheet"\s*/?>',
        "",
        html,
    )
    html = re.sub(
        r'\s*<script>\s*\(function\(\)\s*\{\s*try\s*\{\s*var\s+t\s*=\s*localStorage\.getItem\(\'m9g_theme\'\);[\s\S]*?\}\)\(\);\s*</script>',
        "",
        html,
    )
    return html


def remove_gotop_fab(html: str) -> str:
    html = re.sub(
        r'\s*\.m9g-gotop-fab\s*\{[\s\S]*?html:not\(\.light\)\s*\.m9g-gotop-fab\s*\{[\s\S]*?\}',
        "",
        html,
    )
    html = re.sub(
        r'\s*window\.addEventListener\(\'scroll\',\s*function\(\)\s*\{\s*var\s+fab\s*=\s*document\.getElementById\(\'m9g-gotop-fab\'\);[\s\S]*?\},\s*\{\s*passive:\s*true\s*\}\);',
        "",
        html,
    )
    return html


def upgrade_font_variables(html: str) -> str:
    html = html.replace(
        "--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;",
        "--font-sans: 'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;",
    )
    html = html.replace(
        "--font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;",
        "--font-display: 'Plus Jakarta Sans Variable', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;",
    )
    html = html.replace(
        "--font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;",
        "--font-mono: 'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;",
    )
    return html


def ensure_lazy_youtube_iframes(html: str) -> str:
    def repl(match: re.Match[str]) -> str:
        tag = match.group(0)
        if 'youtube.com/embed/' in tag and 'loading="lazy"' not in tag:
            tag = tag.replace("<iframe ", '<iframe loading="lazy" ', 1)
        return tag

    return re.sub(r"<iframe\b[^>]*>", repl, html)


def escape_pre_braces(html: str) -> str:
    def repl(match: re.Match[str]) -> str:
        inner = match.group(1).replace("{", "&#123;").replace("}", "&#125;")
        return f"<pre>{inner}</pre>"

    return re.sub(r"<pre>([\s\S]*?)</pre>", repl, html)


def build_vcard() -> None:
    raw = (ROOT / "vcard" / "index.html").read_text(encoding="utf-8").replace("\r\n", "\n")
    html = remove_google_fonts_and_head_theme_script(raw)
    html = remove_gotop_fab(html)
    html = upgrade_font_variables(html)
    html = upgrade_screenshot_imgs(html)
    html = ensure_lazy_youtube_iframes(html)

    html = html.replace(
        '  <script type="application/ld+json">',
        '  <ThemeHead />\n  <script type="application/ld+json" is:inline>',
        1,
    )
    html = html.replace("  <style>", "  <style is:global>", 1)
    html = html.replace(
        "    .judy-card-img img {",
        "    .judy-card-img picture { display: block; width: 100%; height: 100%; }\n    .judy-card-img img {",
        1,
    )

    html = html.replace(
        '<button class="topbar-btn" id="theme-toggle-btn" onclick="toggleTheme()" title="Toggle Light / Dark Theme">☀</button>',
        THEME_TOGGLE_BTN,
        1,
    )
    html = html.replace('onclick="toggleLangMenu(event)"', 'onclick="toggleLangMenu(arguments[0])"')
    html = html.replace('onclick="closeLightbox(event)"', 'onclick="closeLightbox()"')

    html = html.replace("  <script>\n    function openLightbox", "  <script is:inline>\n    function openLightbox", 1)
    html = html.replace("    function closeLightbox(e) {", "    function closeLightbox() {", 1)
    html = html.replace("    function toggleSidebar() {", "    window.toggleSidebar = function() {", 1)
    html = html.replace("    function downloadVcf() {", "    window.downloadVcf = function() {", 1)

    old_theme_js = """    function applyTheme(theme) {
      const root = document.documentElement;
      const btn = document.getElementById('theme-toggle-btn');
      if (theme === 'dark') {
        root.classList.add('dark'); root.classList.remove('light');
        if (btn) btn.textContent = '☾';
      } else {
        root.classList.add('light'); root.classList.remove('dark');
        if (btn) btn.textContent = '☀';
      }
    }
    function toggleTheme() {
      const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      try { localStorage.setItem('m9g_theme', next); } catch (e) {}
      applyTheme(next);
    }
    applyTheme((function() { try { return localStorage.getItem('m9g_theme') === 'dark' ? 'dark' : 'light'; } catch (e) { return 'light'; } })());"""

    new_theme_js = """    window.toggleTheme = function() {
      if (window.__m9gToggleTheme) window.__m9gToggleTheme();
    };"""
    assert old_theme_js in html, "Expected vcard theme JS block not found"
    html = html.replace(old_theme_js, new_theme_js, 1)

    old_cursor_canvas_js = """    (function initInteractiveCursor() {
      var ring = document.getElementById('cursor-ring');
      var dot = document.getElementById('cursor-dot');
      if (!ring || !dot || window.matchMedia('(pointer: coarse)').matches) return;
      var mx = -100, my = -100, rx = -100, ry = -100;
      window.addEventListener('mousemove', function(e) {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = 'translate3d(' + (mx - 3) + 'px,' + (my - 3) + 'px,0)';
      }, { passive: true });
      function tickCursor() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = 'translate3d(' + (rx - 16) + 'px,' + (ry - 16) + 'px,0)';
        requestAnimationFrame(tickCursor);
      }
      requestAnimationFrame(tickCursor);
    })();

    (function initFluidCanvas() {
      var canvas = document.getElementById('fluid-canvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var width = canvas.width = window.innerWidth;
      var height = canvas.height = window.innerHeight;
      window.addEventListener('resize', function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });
      var mouse = { x: -1000, y: -1000 };
      window.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX; mouse.y = e.clientY;
      }, { passive: true });
      var count = Math.min(68, Math.max(30, Math.floor((width * height) / 22000)));
      var particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          r: Math.random() * 1.9 + 0.9,
          gold: i % 3 === 0
        });
      }
      function renderParticles() {
        ctx.clearRect(0, 0, width, height);"""

    new_cursor_canvas_js = """    (function initInteractiveCursor() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var ring = document.getElementById('cursor-ring');
      var dot = document.getElementById('cursor-dot');
      if (!ring || !dot || window.matchMedia('(pointer: coarse)').matches) return;
      var mx = -100, my = -100, rx = -100, ry = -100;
      window.addEventListener('mousemove', function(e) {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = 'translate3d(' + (mx - 3) + 'px,' + (my - 3) + 'px,0)';
      }, { passive: true });
      function tickCursor() {
        if (!document.hidden) {
          rx += (mx - rx) * 0.18;
          ry += (my - ry) * 0.18;
          ring.style.transform = 'translate3d(' + (rx - 16) + 'px,' + (ry - 16) + 'px,0)';
        }
        requestAnimationFrame(tickCursor);
      }
      requestAnimationFrame(tickCursor);
    })();

    (function initFluidCanvas() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var canvas = document.getElementById('fluid-canvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var width = canvas.width = window.innerWidth;
      var height = canvas.height = window.innerHeight;
      window.addEventListener('resize', function() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });
      var mouse = { x: -1000, y: -1000 };
      window.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX; mouse.y = e.clientY;
      }, { passive: true });
      var count = Math.min(68, Math.max(30, Math.floor((width * height) / 22000)));
      var particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          r: Math.random() * 1.9 + 0.9,
          gold: i % 3 === 0
        });
      }
      function renderParticles() {
        if (document.hidden) {
          requestAnimationFrame(renderParticles);
          return;
        }
        ctx.clearRect(0, 0, width, height);"""

    assert old_cursor_canvas_js in html, "Expected vcard cursor/canvas JS block not found"
    html = html.replace(old_cursor_canvas_js, new_cursor_canvas_js, 1)

    frontmatter = "---\nimport ThemeHead from '../../components/ThemeHead.astro';\n---\n"
    out_path = ROOT / "src" / "pages" / "vcard" / "index.astro"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(frontmatter + html, encoding="utf-8")
    print(f"Wrote {out_path}")


def build_tutorials() -> None:
    raw = (ROOT / "tutorials" / "index.html").read_text(encoding="utf-8").replace("\r\n", "\n")
    html = remove_google_fonts_and_head_theme_script(raw)
    html = remove_gotop_fab(html)
    html = upgrade_font_variables(html)
    html = upgrade_screenshot_imgs(html)
    html = ensure_lazy_youtube_iframes(html)
    html = escape_pre_braces(html)

    html = html.replace("http://ms-iot.github.io/", "https://ms-iot.github.io/")
    html = html.replace("http://docs.ros.org/", "https://docs.ros.org/")
    html = html.replace("http://wiki.ros.org/", "https://wiki.ros.org/")

    html = html.replace(
        "  <style>",
        "  <ThemeHead />\n  <style is:global>",
        1,
    )
    html = html.replace("    .ctrl-btn {", "    .topbar-btn, .ctrl-btn {", 1)
    html = html.replace("    .ctrl-btn:hover {", "    .topbar-btn:hover, .ctrl-btn:hover {", 1)

    html = html.replace(
        '        <div class="lang-dropdown-wrap" id="lang-dropdown-wrap">',
        f"        {THEME_TOGGLE_BTN}\n        <div class=\"lang-dropdown-wrap\" id=\"lang-dropdown-wrap\">",
        1,
    )
    html = html.replace('onclick="toggleLangMenu(event)"', 'onclick="toggleLangMenu(arguments[0])"')

    html = html.replace("  <script>\n    window.addEventListener('scroll'", "  <script is:inline>\n    window.addEventListener('scroll'", 1)

    old_theme_js = """    function syncThemeBtn() {
      var isDark = document.documentElement.classList.contains('dark');
      var btn = document.getElementById('theme-btn');
      if (btn) btn.textContent = isDark ? '☾ Dark' : '☀ Light';
    }
    function toggleTheme() {
      var isDark = document.documentElement.classList.contains('dark');
      var next = isDark ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      document.documentElement.classList.toggle('light', next === 'light');
      try { localStorage.setItem('m9g_theme', next); } catch (e) {}
      syncThemeBtn();
    }
    syncThemeBtn();"""

    new_theme_js = """    window.toggleTheme = function() {
      if (window.__m9gToggleTheme) window.__m9gToggleTheme();
    };"""
    assert old_theme_js in html, "Expected tutorials theme JS block not found"
    html = html.replace(old_theme_js, new_theme_js, 1)

    old_copy_js = """    function copyCmd(btn) {
      var pre = btn.closest('.cmd-block').querySelector('pre');
      if (!pre) return;
      navigator.clipboard.writeText(pre.innerText).then(function() {
        var orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function() { btn.textContent = orig; }, 1400);
      });
    }"""

    new_copy_js = """    function copyCmd(btn) {
      var pre = btn.closest('.cmd-block').querySelector('pre');
      if (!pre) return;
      navigator.clipboard.writeText(pre.innerText).then(function() {
        var orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function() { btn.textContent = orig; }, 1400);
      }).catch(function() {});
    }"""
    assert old_copy_js in html, "Expected tutorials copyCmd JS block not found"
    html = html.replace(old_copy_js, new_copy_js, 1)

    old_canvas_js = """    // Subtle background particle network
    (function initCanvas() {
      var canvas = document.getElementById('fluid-canvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var width = window.innerWidth, height = window.innerHeight;
      var count = width < 640 ? 24 : 48;
      var particles = [];
      function resize() {
        var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        width = window.innerWidth; height = window.innerHeight;
        canvas.width = width * dpr; canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        particles = [];
        for (var i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * width, y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.6 + 0.8
          });
        }
      }
      window.addEventListener('resize', resize);
      resize();
      function step() {
        ctx.clearRect(0, 0, width, height);
        var isDark = document.documentElement.classList.contains('dark');
        var strokeBase = isDark ? 'rgba(212, 175, 55, ' : 'rgba(26, 115, 232, ';
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = strokeBase + '0.32)'; ctx.fill();
          for (var j = i + 1; j < particles.length; j++) {
            var q = particles[j];
            var dx = p.x - q.x, dy = p.y - q.y, dSq = dx * dx + dy * dy;
            if (dSq < 16000) {
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = strokeBase + ((1 - Math.sqrt(dSq) / 126) * 0.12) + ')';
              ctx.lineWidth = 0.7; ctx.stroke();
            }
          }
        }
        requestAnimationFrame(step);
      }
            requestAnimationFrame(step);

      var ring = document.getElementById('cursor-ring');
      var dot = document.getElementById('cursor-dot');
      if (ring && dot && window.matchMedia('(pointer: fine)').matches) {
        var tx = -100, ty = -100, rx = -100, ry = -100, vx = 0, vy = 0;
        window.addEventListener('mousemove', function(e) {
          tx = e.clientX; ty = e.clientY;
          dot.style.transform = 'translate3d(' + (tx - 3.5) + 'px, ' + (ty - 3.5) + 'px, 0)';
          var t = e.target;
          var hover = !!(t && (t.tagName === 'A' || t.tagName === 'BUTTON' || (t.closest && (t.closest('a') || t.closest('button')))));
          ring.classList.toggle('hovering', hover);
          dot.classList.toggle('hovering', hover);
        }, { passive: true });
        (function springLoop() {
          vx = (vx + (tx - rx) * 0.18) * 0.72;
          vy = (vy + (ty - ry) * 0.18) * 0.72;
          rx += vx; ry += vy;
          var off = ring.classList.contains('hovering') ? 26 : 17;
          ring.style.transform = 'translate3d(' + (rx - off) + 'px, ' + (ry - off) + 'px, 0)';
          requestAnimationFrame(springLoop);
        })();
      }"""

    new_canvas_js = """    (function initCanvas() {
      var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var canvas = document.getElementById('fluid-canvas');
      if (canvas && !reducedMotion) {
        var ctx = canvas.getContext('2d');
        var width = window.innerWidth, height = window.innerHeight;
        var count = width < 640 ? 24 : 48;
        var particles = [];
        function resize() {
          var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
          width = window.innerWidth; height = window.innerHeight;
          canvas.width = width * dpr; canvas.height = height * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          particles = [];
          for (var i = 0; i < count; i++) {
            particles.push({
              x: Math.random() * width, y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
              r: Math.random() * 1.6 + 0.8
            });
          }
        }
        window.addEventListener('resize', resize);
        resize();
        function step() {
          if (document.hidden) {
            requestAnimationFrame(step);
            return;
          }
          ctx.clearRect(0, 0, width, height);
          var isDark = document.documentElement.classList.contains('dark');
          var strokeBase = isDark ? 'rgba(212, 175, 55, ' : 'rgba(26, 115, 232, ';
          for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = strokeBase + '0.32)'; ctx.fill();
            for (var j = i + 1; j < particles.length; j++) {
              var q = particles[j];
              var dx = p.x - q.x, dy = p.y - q.y, dSq = dx * dx + dy * dy;
              if (dSq < 16000) {
                ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                ctx.strokeStyle = strokeBase + ((1 - Math.sqrt(dSq) / 126) * 0.12) + ')';
                ctx.lineWidth = 0.7; ctx.stroke();
              }
            }
          }
          requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }

      var ring = document.getElementById('cursor-ring');
      var dot = document.getElementById('cursor-dot');
      if (ring && dot && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
        var tx = -100, ty = -100, rx = -100, ry = -100, vx = 0, vy = 0;
        window.addEventListener('mousemove', function(e) {
          tx = e.clientX; ty = e.clientY;
          dot.style.transform = 'translate3d(' + (tx - 3.5) + 'px, ' + (ty - 3.5) + 'px, 0)';
          var t = e.target;
          var hover = !!(t && (t.tagName === 'A' || t.tagName === 'BUTTON' || (t.closest && (t.closest('a') || t.closest('button')))));
          ring.classList.toggle('hovering', hover);
          dot.classList.toggle('hovering', hover);
        }, { passive: true });
        (function springLoop() {
          if (!document.hidden) {
            vx = (vx + (tx - rx) * 0.18) * 0.72;
            vy = (vy + (ty - ry) * 0.18) * 0.72;
            rx += vx; ry += vy;
            var off = ring.classList.contains('hovering') ? 26 : 17;
            ring.style.transform = 'translate3d(' + (rx - off) + 'px, ' + (ry - off) + 'px, 0)';
          }
          requestAnimationFrame(springLoop);
        })();
      }"""

    assert old_canvas_js in html, "Expected tutorials canvas JS block not found"
    html = html.replace(old_canvas_js, new_canvas_js, 1)

    frontmatter = "---\nimport ThemeHead from '../../components/ThemeHead.astro';\n---\n"
    out_path = ROOT / "src" / "pages" / "tutorials" / "index.astro"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(frontmatter + html, encoding="utf-8")
    print(f"Wrote {out_path}")


def build_archive() -> None:
    raw = (ROOT / "archive" / "index.html").read_text(encoding="utf-8").replace("\r\n", "\n")
    html = remove_google_fonts_and_head_theme_script(raw)
    html = remove_gotop_fab(html)
    html = upgrade_font_variables(html)
    html = upgrade_screenshot_imgs(html)
    html = ensure_lazy_youtube_iframes(html)

    html = html.replace(
        "  <style>",
        "  <ThemeHead />\n  <style is:global>",
        1,
    )
    html = html.replace("    .ctrl-btn {", "    .topbar-btn, .ctrl-btn {", 1)
    html = html.replace("    .ctrl-btn:hover {", "    .topbar-btn:hover, .ctrl-btn:hover {", 1)

    html = html.replace(
        '        <div class="lang-dropdown-wrap" id="lang-dropdown-wrap">',
        f"        {THEME_TOGGLE_BTN}\n        <div class=\"lang-dropdown-wrap\" id=\"lang-dropdown-wrap\">",
        1,
    )
    html = html.replace('onclick="toggleLangMenu(event)"', 'onclick="toggleLangMenu(arguments[0])"')

    # Add class="toc-link" to all sidebar TOC anchors
    old_toc_sidebar = """    <aside class="toc-sidebar">
      <div class="toc-group-title">1. IP &amp; Publications</div>
      <ul class="toc-list">
        <li><a href="#patents">14+ Registered &amp; Published Patents (US/KR)</a></li>
        <li><a href="#publications">21 Peer-Reviewed Publications (2016–2026)</a></li>
      </ul>
      <div class="toc-group-title">2. Research (~2022)</div>
      <ul class="toc-list">
        <li><a href="#research-2022">KFDA SUBAR &amp; AI Therapist (10 Demos)</a></li>
        <li><a href="#media-reports">TV Broadcasts &amp; 4 Korean Press Reports</a></li>
        <li><a href="#jetbot-2021">2021 Personal Project: JetBot Nano</a></li>
      </ul>
      <div class="toc-group-title">3. Agentic Era (2026)</div>
      <ul class="toc-list">
        <li><a href="#hackathon-epilogue">Gemini 3 Seoul Hackathon 1st-Place Epilogue</a></li>
        <li><a href="#cloud-onboard">Google Cloud OnBoard Recap (ADK/MCP/A2A)</a></li>
      </ul>
      <div class="toc-group-title">4. Beyond Research</div>
      <ul class="toc-list">
        <li><a href="#app-dev">Live Apps, TA Lectures &amp; Beyond Research</a></li>
        <li><a href="#teaching-assistant">Sogang TA &amp; 7 MATLAB/LQR Control Videos</a></li>
        <li><a href="#aiesec">AIESEC Exchange Teacher in Hungary</a></li>
      </ul>
    </aside>"""

    new_toc_sidebar = old_toc_sidebar.replace('<li><a href="#', '<li><a class="toc-link" href="#')
    assert old_toc_sidebar in html, "Expected archive toc-sidebar block not found"
    html = html.replace(old_toc_sidebar, new_toc_sidebar, 1)

    # Bind #publications and #patents to Content Collections
    pub_article_pattern = re.compile(
        r'(<article class="section-card" id="publications">[\s\S]*?<h2>21 Research Publications — Frontier IEEE Journals &amp; Flagship Conferences First \(2016 – 2026\)</h2>\s*)<div class="pub-list">[\s\S]*?</div>(\s*</article>)'
    )
    pub_astro_list = """<div class="pub-list">
            {publications.map((pub) => (
              <div class={pub.data.frontier ? 'pub-item frontier' : 'pub-item'}>
                <div class="pub-num">{pub.data.badge}</div>
                <div class="pub-body">
                  <div class="pub-title">
                    {pub.data.frontierBadge && <span class="frontier-badge">{pub.data.frontierBadge}</span>}
                    <Fragment set:html={pub.data.titleHtml} />
                  </div>
                  <div class="pub-authors"><Fragment set:html={pub.data.authorsHtml} /></div>
                  <div class="pub-venue"><Fragment set:html={pub.data.venueHtml} /></div>
                </div>
                {pub.data.links[0] && (
                  <a class="pub-link" href={pub.data.links[0].url} target="_blank" rel="noopener">{pub.data.links[0].label}</a>
                )}
              </div>
            ))}
          </div>"""
    assert pub_article_pattern.search(html), "Expected #publications article not found"
    html = pub_article_pattern.sub(rf"\1{pub_astro_list}\2", html, count=1)

    pat_article_pattern = re.compile(
        r'(<article class="section-card" id="patents">[\s\S]*?<h2>14 Patents — Autonomous Mobile Robotics, Lab Automation &amp; Exoskeleton Control</h2>\s*)<div class="pub-list">[\s\S]*?</div>(\s*</article>)'
    )
    pat_astro_list = """<div class="pub-list">
            {patents.map((pat) => (
              <div class="pub-item">
                <div class="pub-num">{pat.data.code}</div>
                <div class="pub-body">
                  <div class="pub-title">{pat.data.title}</div>
                  <div class="pub-authors"><Fragment set:html={pat.data.inventorsHtml} /></div>
                  <div class="pub-venue">{pat.data.patentNumber}</div>
                </div>
                {pat.data.url && pat.data.linkLabel && (
                  <a class="pub-link" href={pat.data.url} target="_blank" rel="noopener">{pat.data.linkLabel}</a>
                )}
              </div>
            ))}
          </div>"""
    assert pat_article_pattern.search(html), "Expected #patents article not found"
    html = pat_article_pattern.sub(rf"\1{pat_astro_list}\2", html, count=1)

    html = html.replace("  <script>\n    window.addEventListener('scroll'", "  <script is:inline>\n    window.addEventListener('scroll'", 1)

    old_theme_filter_js = """    function applyTheme(theme) {
      var root = document.documentElement;
      var btn = document.getElementById('themeBtn');
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
        if (btn) btn.textContent = '☾ Dark';
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
        if (btn) btn.textContent = '☀ Light';
      }
    }
    function toggleTheme() {
      var next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      try { localStorage.setItem('m9g_theme', next); } catch (e) {}
      applyTheme(next);
    }
    applyTheme((function() { try { return localStorage.getItem('m9g_theme') || 'light'; } catch (e) { return 'light'; } })());

    function filterSection(cat) {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      var activeBtn = document.getElementById('tab-' + cat);
      if (activeBtn) activeBtn.classList.add('active');
      document.querySelectorAll('.archive-section').forEach(function(sec) {
        sec.style.display = (cat === 'all' || sec.getAttribute('data-cat') === cat) ? '' : 'none';
      });
    }"""

    new_theme_filter_js = """    window.toggleTheme = function() {
      if (window.__m9gToggleTheme) window.__m9gToggleTheme();
    };

    function filterSection(cat) {
      document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
      var activeBtn = document.getElementById('tab-' + cat);
      if (activeBtn) activeBtn.classList.add('active');
      document.querySelectorAll('.archive-section').forEach(function(sec) {
        sec.style.display = (cat === 'all' || sec.getAttribute('data-cat') === cat) ? '' : 'none';
      });
    }

    document.querySelectorAll('.toc-link').forEach(function(link) {
      link.addEventListener('click', function() {
        var href = link.getAttribute('href');
        if (!href || href.charAt(0) !== '#') return;
        var target = document.getElementById(href.slice(1));
        var parentSec = target ? target.closest('.archive-section') : null;
        if (parentSec && parentSec.style.display === 'none') {
          filterSection('all');
        }
      });
    });"""

    assert old_theme_filter_js in html, "Expected archive theme/filter JS block not found"
    html = html.replace(old_theme_filter_js, new_theme_filter_js, 1)

    old_fluid_js = """    (function initFluidAndMotion() {
      var canvas = document.getElementById('fluid-canvas');
      if (canvas) {
        var ctx = canvas.getContext('2d');
        var mouse = { x: -1000, y: -1000, radius: 170 };
        var palette = ['rgba(26, 115, 232, ', 'rgba(212, 175, 55, ', 'rgba(30, 142, 62, ', 'rgba(217, 48, 37, '];
        var width = window.innerWidth, height = window.innerHeight;
        var count = width < 640 ? 26 : 52;
        var particles = [];
        function resize() {
          var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
          width = window.innerWidth; height = window.innerHeight;
          canvas.width = width * dpr; canvas.height = height * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          particles = [];
          for (var i = 0; i < count; i++) {
            var r = Math.random() * 1.8 + 0.9;
            particles.push({
              x: Math.random() * width, y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
              radius: r, baseRadius: r, alpha: Math.random() * 0.4 + 0.2,
              colorPrefix: palette[i % palette.length]
            });
          }
        }
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', function(e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
        resize();
        (function step() {
          ctx.clearRect(0, 0, width, height);
          for (var i = 0; i < particles.length; i++) {
            var p1 = particles[i];
            p1.x += p1.vx; p1.y += p1.vy;
            if (p1.x < 0) p1.x = width; if (p1.x > width) p1.x = 0;
            if (p1.y < 0) p1.y = height; if (p1.y > height) p1.y = 0;
            var mdx = mouse.x - p1.x, mdy = mouse.y - p1.y, mdSq = mdx * mdx + mdy * mdy;
            if (mdSq < 28900) {
              var md = Math.sqrt(mdSq), force = (170 - md) / 170, ang = Math.atan2(mdy, mdx);
              p1.x -= Math.cos(ang) * force * 1.5; p1.y -= Math.sin(ang) * force * 1.5;
            }
            ctx.beginPath(); ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            ctx.fillStyle = p1.colorPrefix + p1.alpha + ')'; ctx.fill();
            for (var j = i + 1; j < particles.length; j++) {
              var p2 = particles[j];
              var dx = p1.x - p2.x, dy = p1.y - p2.y, dSq = dx * dx + dy * dy;
              if (dSq < 18000) {
                ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = (i % 2 === 0 ? 'rgba(212, 175, 55, ' : 'rgba(26, 115, 232, ') + ((1 - Math.sqrt(dSq) / 135) * 0.13) + ')';
                ctx.lineWidth = 0.7; ctx.stroke();
              }
            }
          }
          requestAnimationFrame(step);
        })();
      }
      var ring = document.getElementById('cursor-ring');
      var dot = document.getElementById('cursor-dot');
      if (ring && dot && window.matchMedia('(pointer: fine)').matches) {
        var tx = -100, ty = -100, rx = -100, ry = -100, vx = 0, vy = 0;
        window.addEventListener('mousemove', function(e) {
          tx = e.clientX; ty = e.clientY;
          dot.style.transform = 'translate3d(' + (tx - 3.5) + 'px, ' + (ty - 3.5) + 'px, 0)';
          var t = e.target;
          var hover = !!(t && (t.tagName === 'A' || t.tagName === 'BUTTON' || (t.closest && (t.closest('a') || t.closest('button')))));
          ring.classList.toggle('hovering', hover);
          dot.classList.toggle('hovering', hover);
        }, { passive: true });
        (function springLoop() {
          vx = (vx + (tx - rx) * 0.18) * 0.72;
          vy = (vy + (ty - ry) * 0.18) * 0.72;
          rx += vx; ry += vy;
          var off = ring.classList.contains('hovering') ? 26 : 17;
          ring.style.transform = 'translate3d(' + (rx - off) + 'px, ' + (ry - off) + 'px, 0)';
          requestAnimationFrame(springLoop);
        })();
      }"""

    new_fluid_js = """    (function initFluidAndMotion() {
      var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var canvas = document.getElementById('fluid-canvas');
      if (canvas && !reducedMotion) {
        var ctx = canvas.getContext('2d');
        var mouse = { x: -1000, y: -1000, radius: 170 };
        var palette = ['rgba(26, 115, 232, ', 'rgba(212, 175, 55, ', 'rgba(30, 142, 62, ', 'rgba(217, 48, 37, '];
        var width = window.innerWidth, height = window.innerHeight;
        var count = width < 640 ? 26 : 52;
        var particles = [];
        function resize() {
          var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
          width = window.innerWidth; height = window.innerHeight;
          canvas.width = width * dpr; canvas.height = height * dpr;
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          particles = [];
          for (var i = 0; i < count; i++) {
            var r = Math.random() * 1.8 + 0.9;
            particles.push({
              x: Math.random() * width, y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
              radius: r, baseRadius: r, alpha: Math.random() * 0.4 + 0.2,
              colorPrefix: palette[i % palette.length]
            });
          }
        }
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', function(e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
        resize();
        (function step() {
          if (document.hidden) {
            requestAnimationFrame(step);
            return;
          }
          ctx.clearRect(0, 0, width, height);
          for (var i = 0; i < particles.length; i++) {
            var p1 = particles[i];
            p1.x += p1.vx; p1.y += p1.vy;
            if (p1.x < 0) p1.x = width; if (p1.x > width) p1.x = 0;
            if (p1.y < 0) p1.y = height; if (p1.y > height) p1.y = 0;
            var mdx = mouse.x - p1.x, mdy = mouse.y - p1.y, mdSq = mdx * mdx + mdy * mdy;
            if (mdSq < 28900) {
              var md = Math.sqrt(mdSq), force = (170 - md) / 170, ang = Math.atan2(mdy, mdx);
              p1.x -= Math.cos(ang) * force * 1.5; p1.y -= Math.sin(ang) * force * 1.5;
            }
            ctx.beginPath(); ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            ctx.fillStyle = p1.colorPrefix + p1.alpha + ')'; ctx.fill();
            for (var j = i + 1; j < particles.length; j++) {
              var p2 = particles[j];
              var dx = p1.x - p2.x, dy = p1.y - p2.y, dSq = dx * dx + dy * dy;
              if (dSq < 18000) {
                ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = (i % 2 === 0 ? 'rgba(212, 175, 55, ' : 'rgba(26, 115, 232, ') + ((1 - Math.sqrt(dSq) / 135) * 0.13) + ')';
                ctx.lineWidth = 0.7; ctx.stroke();
              }
            }
          }
          requestAnimationFrame(step);
        })();
      }
      var ring = document.getElementById('cursor-ring');
      var dot = document.getElementById('cursor-dot');
      if (ring && dot && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
        var tx = -100, ty = -100, rx = -100, ry = -100, vx = 0, vy = 0;
        window.addEventListener('mousemove', function(e) {
          tx = e.clientX; ty = e.clientY;
          dot.style.transform = 'translate3d(' + (tx - 3.5) + 'px, ' + (ty - 3.5) + 'px, 0)';
          var t = e.target;
          var hover = !!(t && (t.tagName === 'A' || t.tagName === 'BUTTON' || (t.closest && (t.closest('a') || t.closest('button')))));
          ring.classList.toggle('hovering', hover);
          dot.classList.toggle('hovering', hover);
        }, { passive: true });
        (function springLoop() {
          if (!document.hidden) {
            vx = (vx + (tx - rx) * 0.18) * 0.72;
            vy = (vy + (ty - ry) * 0.18) * 0.72;
            rx += vx; ry += vy;
            var off = ring.classList.contains('hovering') ? 26 : 17;
            ring.style.transform = 'translate3d(' + (rx - off) + 'px, ' + (ry - off) + 'px, 0)';
          }
          requestAnimationFrame(springLoop);
        })();
      }"""

    assert old_fluid_js in html, "Expected archive fluid JS block not found"
    html = html.replace(old_fluid_js, new_fluid_js, 1)

    frontmatter = """---
import { getCollection } from 'astro:content';
import ThemeHead from '../../components/ThemeHead.astro';

const publications = (await getCollection('publications')).sort((a, b) => a.data.order - b.data.order);
const patents = (await getCollection('patents')).sort((a, b) => a.data.order - b.data.order);
if (publications.length !== 21) {
  throw new Error(`Expected 21 publications in content collection, got ${publications.length}`);
}
if (patents.length !== 14) {
  throw new Error(`Expected 14 patents in content collection, got ${patents.length}`);
}
---
"""
    out_path = ROOT / "src" / "pages" / "archive" / "index.astro"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(frontmatter + html, encoding="utf-8")
    print(f"Wrote {out_path}")


if __name__ == "__main__":
    build_vcard()
    build_tutorials()
    build_archive()
