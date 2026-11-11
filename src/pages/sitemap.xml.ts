import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'weekly' | 'monthly';
  priority: string;
}

export const GET: APIRoute = async () => {
  const blogs = (await getCollection('blogs')).sort((a, b) => b.data.order - a.data.order);
  const latestLastmod = blogs[0]?.data.updatedIso ?? '2026-11-09';

  const entries: SitemapEntry[] = [
    {
      loc: 'https://mincasurong.github.io/',
      lastmod: latestLastmod,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      loc: 'https://mincasurong.github.io/blog/',
      lastmod: latestLastmod,
      changefreq: 'weekly',
      priority: '0.9',
    },
    ...blogs.map((blog) => ({
      loc: blog.data.canonicalUrl,
      lastmod: blog.data.updatedIso,
      changefreq: 'monthly' as const,
      priority: blog.data.order === 6 ? '0.95' : '0.9',
    })),
    {
      loc: 'https://mincasurong.github.io/tutorials/',
      lastmod: '2026-10-25',
      changefreq: 'monthly',
      priority: '0.9',
    },
    {
      loc: 'https://mincasurong.github.io/archive/',
      lastmod: '2026-11-01',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: 'https://mincasurong.github.io/vcard/',
      lastmod: '2026-11-08',
      changefreq: 'monthly',
      priority: '0.9',
    },
  ];

  const urlsXml = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
