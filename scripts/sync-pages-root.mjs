import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

if (!fs.existsSync(DIST)) {
  console.error('dist/ directory not found. Run `npm run build` first.');
  process.exit(1);
}

const MANAGED_ROOT_ENTRIES = [
  '_astro',
  '.nojekyll',
  '404.html',
  'archive',
  'blog',
  'fast-sim',
  'favicon.svg',
  'gemini3-hackathon-epilogue',
  'index.html',
  'out-of-research',
  'research2022',
  'robots.txt',
  'rss.xml',
  'screenshots',
  'sitemap.xml',
  'tutorials',
  'vcard',
];

for (const entry of MANAGED_ROOT_ENTRIES) {
  const target = path.join(ROOT, entry);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

for (const entry of fs.readdirSync(DIST)) {
  const src = path.join(DIST, entry);
  const dest = path.join(ROOT, entry);
  fs.cpSync(src, dest, { recursive: true });
}

console.log(`Synced ${fs.readdirSync(DIST).length} verified dist/ entries to repository root.`);
