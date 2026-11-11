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

// 1. Exact uppercase 'VLA' directory entry in dist/blog and >50 KB size
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

// 2. All expected routes exist in dist/
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

// Pre-index all HTML files and their id="..." attributes
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

// 3. Every internal href="/..." and <meta http-equiv="refresh" content="0; url=/..."> resolves
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

// 4. Valid JSON-LD across dist/**/*.html and 0 raw LaTeX tokens in dist/blog/**/*.html
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

// 5. Content route checks (11 routes)
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

// 6. src/styles/tokens.css contains 0 !important declarations
const tokensCss = fs.readFileSync(path.resolve('src/styles/tokens.css'), 'utf8');
if (tokensCss.includes('!important')) {
  fail('src/styles/tokens.css contains forbidden !important declaration');
}

// 7. Media binary integrity and no .py files in dist/
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
