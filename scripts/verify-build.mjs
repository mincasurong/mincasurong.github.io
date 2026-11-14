import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const failures = [];

function fail(msg) {
  failures.push(msg);
}

function walkFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

const blogDir = path.join(DIST, 'blog');
if (!fs.existsSync(blogDir)) {
  fail('dist/blog directory does not exist');
} else {
  const blogEntries = fs.readdirSync(blogDir);
  if (!blogEntries.includes('VLA')) {
    fail(`dist/blog does not contain exact uppercase 'VLA' entry (found: ${blogEntries.join(', ')})`);
  }
  if (blogEntries.includes('vla')) {
    fail("dist/blog contains lowercase 'vla' entry");
  }
  const vlaIndex = path.join(blogDir, 'VLA', 'index.html');
  if (!fs.existsSync(vlaIndex)) {
    fail('dist/blog/VLA/index.html does not exist');
  } else {
    const size = fs.statSync(vlaIndex).size;
    if (size <= 50 * 1024) {
      fail(`dist/blog/VLA/index.html is too small (${size} bytes <= 50 KB)`);
    }
  }
}

const redirectsData = JSON.parse(fs.readFileSync(path.resolve('src/content/data/redirects.json'), 'utf8'));
const staticRedirectStubs = redirectsData
  .filter((r) => r.id !== 'blog/vla')
  .map((r) => `${r.source}/index.html`);

if (staticRedirectStubs.length !== 24) {
  fail(`Expected 24 static redirect stubs from redirects.json, got ${staticRedirectStubs.length}`);
}

const contentRoutes = [
  'index.html',
  'vcard/index.html',
  'tutorials/index.html',
  'archive/index.html',
  'blog/index.html',
  'blog/VLA/index.html',
  'blog/m9g-agent/index.html',
  'blog/stamp/index.html',
  'blog/sdl-survey/index.html',
  'blog/lazy-dash/index.html',
  'blog/tamp-fast-sim/index.html',
];

const expectedFiles = [
  ...contentRoutes,
  '404.html',
  'rss.xml',
  'sitemap.xml',
  'favicon.svg',
  'robots.txt',
  ...staticRedirectStubs,
];

for (const rel of expectedFiles) {
  const abs = path.join(DIST, rel);
  if (!fs.existsSync(abs)) {
    fail(`Missing expected output file: dist/${rel}`);
  }
}

const allDistFiles = walkFiles(DIST);
const htmlFiles = allDistFiles.filter((f) => f.endsWith('.html'));
const htmlContentByRel = new Map();
const idsByRel = new Map();

for (const file of htmlFiles) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  htmlContentByRel.set(rel, content);
  const ids = new Set();
  for (const m of content.matchAll(/\bid=["']([^"']+)["']/g)) {
    ids.add(m[1]);
  }
  idsByRel.set(rel, ids);
}

function resolveInternalUrl(rawUrl, sourceRel) {
  const [pathnameRaw, hash] = rawUrl.split('#');
  const pathname = pathnameRaw.split('?')[0] || '/';
  let targetRel;
  if (pathname.endsWith('/')) {
    targetRel = pathname === '/' ? 'index.html' : `${pathname.slice(1)}index.html`;
  } else {
    const candidateFile = pathname.slice(1);
    const candidateIndex = `${pathname.slice(1)}/index.html`;
    if (fs.existsSync(path.join(DIST, candidateFile)) && fs.statSync(path.join(DIST, candidateFile)).isFile()) {
      targetRel = candidateFile;
    } else {
      targetRel = candidateIndex;
    }
  }
  const targetAbs = path.join(DIST, targetRel);
  if (!fs.existsSync(targetAbs) || !fs.statSync(targetAbs).isFile()) {
    fail(`Broken internal URL "${rawUrl}" in dist/${sourceRel} -> missing dist/${targetRel}`);
    return;
  }
  if (hash && targetRel.endsWith('.html')) {
    const ids = idsByRel.get(targetRel);
    if (!ids || !ids.has(hash)) {
      fail(`Broken hash "#${hash}" in URL "${rawUrl}" from dist/${sourceRel} -> missing id="${hash}" in dist/${targetRel}`);
    }
  }
}

for (const [rel, content] of htmlContentByRel.entries()) {
  for (const m of content.matchAll(/\bhref=["'](\/[^"']*)["']/g)) {
    const url = m[1];
    if (url.startsWith('//')) continue;
    resolveInternalUrl(url, rel);
  }
  for (const m of content.matchAll(/http-equiv=["']refresh["'][^>]*content=["'][^"']*url=(\/[^"'\s>]*)/gi)) {
    resolveInternalUrl(m[1], rel);
  }
}

for (const [rel, content] of htmlContentByRel.entries()) {
  for (const m of content.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(m[1]);
    } catch (err) {
      fail(`Invalid JSON-LD in dist/${rel}: ${err.message}`);
    }
  }
  if (rel.startsWith('blog/')) {
    const stripped = content
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '');
    if (/\\(?:mathcal|text|texttt|textsc|frac|sum|forall|in|subseteq|cup|cap|rightarrow|leftarrow)\b/.test(stripped)) {
      fail(`Raw LaTeX command (\\mathcal or \\texttt) found in dist/${rel}`);
    }
    if (/\$[^0-9\s<{][^$<\n]{0,80}\$/.test(stripped)) {
      fail(`Raw inline LaTeX ($...$) found in dist/${rel}`);
    }
  }
}

for (const rel of contentRoutes) {
  const content = htmlContentByRel.get(rel);
  if (!content) continue;
  if (!/<link\s+rel=["']icon["']\s+type=["']image\/svg\+xml["']\s+href=["']\/favicon\.svg["']/.test(content)) {
    fail(`Missing <link rel="icon" type="image/svg+xml" href="/favicon.svg"> in dist/${rel}`);
  }
  if (!content.includes('data-theme-toggle')) {
    fail(`Missing data-theme-toggle in dist/${rel}`);
  }
  if (content.includes('fonts.googleapis.com')) {
    fail(`Found forbidden fonts.googleapis.com reference in dist/${rel}`);
  }
  for (const vm of content.matchAll(/<video\b[^>]*>/gi)) {
    if (/\bautoplay\b/i.test(vm[0])) {
      fail(`Found <video> with autoplay in dist/${rel}: ${vm[0]}`);
    }
  }
}

for (const rel of ['tutorials/index.html', 'archive/index.html']) {
  const content = htmlContentByRel.get(rel);
  if (!content) continue;
  const topnavMatch = content.match(/<nav\b[^>]*class=["'][^"']*\btopnav\b[^"']*["'][^>]*>([\s\S]*?)<\/nav>/i);
  if (!topnavMatch) {
    fail(`Missing .topnav in dist/${rel}`);
    continue;
  }
  const topnavHtml = topnavMatch[1];
  for (const key of ['navArchive', 'navBlog', 'navTutorials', 'navPortfolio']) {
    if (!new RegExp(`data-i18n=["']${key}["']`).test(topnavHtml)) {
      fail(`Missing topbar nav data-i18n="${key}" in dist/${rel}`);
    }
  }
}

const tokensCss = fs.readFileSync(path.resolve('src/styles/tokens.css'), 'utf8');
if (tokensCss.includes('!important')) {
  fail('src/styles/tokens.css contains forbidden !important declaration');
}

function getMp4AtomOffsets(buf) {
  let offset = 0;
  let moov = -1;
  let mdat = -1;
  while (offset + 8 <= buf.length) {
    let size = buf.readUInt32BE(offset);
    const type = buf.toString('ascii', offset + 4, offset + 8);
    if (type === 'moov' && moov === -1) moov = offset;
    if (type === 'mdat' && mdat === -1) mdat = offset;
    if (size === 1) {
      if (offset + 16 > buf.length) break;
      size = Number(buf.readBigUInt64BE(offset + 8));
    } else if (size === 0) {
      break;
    }
    if (size < 8) break;
    offset += size;
  }
  return { moov, mdat };
}

for (const file of allDistFiles) {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  if (rel.endsWith('.py')) {
    fail(`Forbidden Python script in dist/: dist/${rel}`);
  }
  if (rel.startsWith('screenshots/')) {
    const ext = path.extname(rel).toLowerCase();
    if (ext === '.png') {
      const buf = fs.readFileSync(file);
      if (buf.length < 4 || buf[0] !== 0x89 || buf[1] !== 0x50 || buf[2] !== 0x4e || buf[3] !== 0x47) {
        fail(`Invalid PNG magic bytes in dist/${rel}`);
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      const buf = fs.readFileSync(file);
      if (buf.length < 3 || buf[0] !== 0xff || buf[1] !== 0xd8 || buf[2] !== 0xff) {
        fail(`Invalid JPEG magic bytes in dist/${rel}`);
      }
    } else if (ext === '.webp') {
      const buf = fs.readFileSync(file);
      if (
        buf.length < 12 ||
        buf.toString('ascii', 0, 4) !== 'RIFF' ||
        buf.toString('ascii', 8, 12) !== 'WEBP'
      ) {
        fail(`Invalid WebP magic bytes in dist/${rel}`);
      }
    } else if (ext === '.mp4' && rel.startsWith('screenshots/videos/')) {
      const buf = fs.readFileSync(file);
      const { moov, mdat } = getMp4AtomOffsets(buf);
      if (moov === -1 || mdat === -1 || moov >= mdat) {
        fail(`MP4 lacks +faststart (moov=${moov}, mdat=${mdat}) in dist/${rel}`);
      }
    }
  }
}

const BLOG_LOCALES = ['en', 'ko', 'ja', 'zh', 'es'];
const BLOG_CHROME_DOM_KEYS = new Set([
  'blogHeaderBrand',
  'navCv',
  'navArchive',
  'navBlog',
  'navTutorials',
  'navPortfolio',
  'switcherIndexKicker',
  'switcherIndexTitle',
  'goTopLabel',
  'footerBlogIndex',
]);

const blogHubHtml = htmlContentByRel.get('blog/index.html') || '';
const blogJsonFiles = fs
  .readdirSync(path.resolve('src/content/blogs'))
  .filter((f) => f.endsWith('.json'))
  .sort();

for (const file of blogJsonFiles) {
  const relJson = `src/content/blogs/${file}`;
  const post = JSON.parse(fs.readFileSync(path.resolve(relJson), 'utf8'));
  const bodyAttrKeys = Array.from(
    post.bodyHtml.matchAll(/\bdata-i18n=["']([^"']+)["']/g),
    (m) => m[1]
  );
  const expectedPostKeys = new Set(['articleTag', 'articleTitle', 'articleLede', ...bodyAttrKeys]);

  for (const k of expectedPostKeys) {
    if (BLOG_CHROME_DOM_KEYS.has(k)) {
      fail(`${relJson}: bodyHtml/hero data-i18n key "${k}" collides with CHROME_I18N`);
    }
  }

  for (const loc of BLOG_LOCALES) {
    const dict = post.i18n?.[loc];
    if (!dict || typeof dict !== 'object') {
      fail(`${relJson}: missing i18n.${loc} dictionary`);
      continue;
    }
    const dictKeys = new Set(Object.keys(dict));
    const missing = [...expectedPostKeys].filter((k) => !dictKeys.has(k) || !String(dict[k]).trim());
    const orphaned = [...dictKeys].filter((k) => !expectedPostKeys.has(k));
    if (missing.length > 0) {
      fail(`${relJson} [${loc}]: missing data-i18n keys: ${missing.join(', ')}`);
    }
    if (orphaned.length > 0) {
      fail(`${relJson} [${loc}]: orphaned i18n keys: ${orphaned.join(', ')}`);
    }
  }

  const distPostHtml = htmlContentByRel.get(`blog/${post.slug}/index.html`);
  if (distPostHtml) {
    const domI18nKeys = new Set(
      Array.from(distPostHtml.matchAll(/\bdata-i18n=["']([^"']+)["']/g), (m) => m[1])
    );
    const expectedDomKeys = new Set([...BLOG_CHROME_DOM_KEYS, ...expectedPostKeys]);
    const domMissing = [...domI18nKeys].filter((k) => !expectedDomKeys.has(k));
    const domUnused = [...expectedDomKeys].filter((k) => !domI18nKeys.has(k));
    if (domMissing.length > 0) {
      fail(`dist/blog/${post.slug}/index.html: untranslated DOM data-i18n keys: ${domMissing.join(', ')}`);
    }
    if (domUnused.length > 0) {
      fail(`dist/blog/${post.slug}/index.html: expected data-i18n keys absent from DOM: ${domUnused.join(', ')}`);
    }
  }

  if (blogHubHtml) {
    const titleKey = `b${post.order}Title`;
    const descKey = `b${post.order}Desc`;
    const enBlockMatch = blogHubHtml.match(/var\s+HUB_I18N\s*=\s*\{\s*en:\s*\{([\s\S]*?)\}\s*,\s*ko:/);
    if (enBlockMatch) {
      const enBlock = enBlockMatch[1];
      const titleMatch = enBlock.match(new RegExp(`\\b${titleKey}:\\s*"([^"]*)"`));
      const descMatch = enBlock.match(new RegExp(`\\b${descKey}:\\s*"([^"]*)"`));
      if (titleMatch && titleMatch[1] !== post.hubTitle) {
        fail(`${relJson}: hubTitle ("${post.hubTitle}") !== HUB_I18N.en.${titleKey} ("${titleMatch[1]}")`);
      }
      if (descMatch && descMatch[1] !== post.hubDesc) {
        fail(`${relJson}: hubDesc ("${post.hubDesc}") !== HUB_I18N.en.${descKey} ("${descMatch[1]}")`);
      }
    }
  }
}

const BANNED_SLOP_RE = /\b(?:prestigious|profound|sophisticated|landmark|leveraging|leverage|utilize|seamlessly|rigorously|crucially|striking|isomorphism|substrates|substrate|cheat-code|delve|pivotal|underscore|cutting-edge|meticulously|highly competitive|broad spectrum|transparent breakdown)\b/i;

const proseTargets = [
  ['README.md', fs.readFileSync(path.resolve('README.md'), 'utf8')],
  ['dist/rss.xml', fs.existsSync(path.join(DIST, 'rss.xml')) ? fs.readFileSync(path.join(DIST, 'rss.xml'), 'utf8') : ''],
  ...Array.from(htmlContentByRel.entries()).map(([rel, txt]) => [`dist/${rel}`, txt]),
];

for (const [label, rawText] of proseTargets) {
  const withoutStyle = rawText.replace(/<style[\s\S]*?<\/style>/gi, '');
  if (withoutStyle.includes('\u2014') || /&mdash;/i.test(withoutStyle)) {
    fail(`Em-dash character found in ${label}`);
  }
  const masked = withoutStyle
    .replaceAll('argon_omo_substrate.py', 'ARGON_OMO_FILE_PY')
    .replaceAll(
      'Learning-Based Sampling Strategies Leveraging Bidirectional Motion Planning Characteristics',
      'JKROS_2026_CITATION_TITLE'
    );
  const m = masked.match(BANNED_SLOP_RE);
  if (m) {
    fail(`Banned slop word "${m[0]}" found in ${label}`);
  }
}

if (failures.length > 0) {
  console.error(`Build verification failed with ${failures.length} error(s):`);
  for (const f of failures) {
    console.error(`  - ${f}`);
  }
  process.exit(1);
}

console.log(
  `Build verification passed: ${contentRoutes.length} content routes, ${staticRedirectStubs.length} static redirect stubs, ${htmlFiles.length} total HTML files, media & schema checks OK.`
);
