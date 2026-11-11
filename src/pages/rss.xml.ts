import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc2822Utc(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString();
}

export const GET: APIRoute = async () => {
  const blogs = (await getCollection('blogs')).sort((a, b) => b.data.order - a.data.order);
  const latestBlog = blogs[0];
  const lastBuildDate = latestBlog
    ? toRfc2822Utc(latestBlog.data.updatedIso)
    : 'Mon, 09 Nov 2026 00:00:00 GMT';

  const blogItemsXml = blogs
    .map((blog) => {
      const title = escapeXml(blog.data.ogTitle || blog.data.title);
      const link = escapeXml(blog.data.canonicalUrl);
      const pubDate = escapeXml(toRfc2822Utc(blog.data.publishedIso));
      const description = escapeXml(blog.data.metaDescription);
      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>`;
    })
    .join('\n\n');

  const staticItemsXml = `    <item>
      <title>ROS 2, MoveIt 2 &amp; NVIDIA Jetson Nano Camera Vision Tutorials Hub (12 Hands-On Modules)</title>
      <link>https://mincasurong.github.io/tutorials/</link>
      <guid>https://mincasurong.github.io/tutorials/</guid>
      <pubDate>Sat, 24 Oct 2026 09:00:00 GMT</pubDate>
      <description>Complete hands-on robotics manipulation, mobile navigation, and NVIDIA Jetson Nano SSD-MobileNet / TensorRT transfer learning tutorials by Minsu Chang, Ph.D. (장민수, mincasurong, M9G).</description>
    </item>

    <item>
      <title>Patents, Publications, Medical Robotics (SUBAR) &amp; Research Archive — Minsu Chang, Ph.D. (장민수 / M9G)</title>
      <link>https://mincasurong.github.io/archive/</link>
      <guid>https://mincasurong.github.io/archive/</guid>
      <pubDate>Sun, 01 Nov 2026 09:00:00 GMT</pubDate>
      <description>14+ US/KR Patents, 21 Peer-Reviewed Publications (IEEE ICRA, IEEE/RSJ IROS, IEEE TNSRE, ICORR), KFDA-certified lower-limb rehabilitation exoskeleton SUBAR &amp; AI Therapist videos, Google Cloud OnBoard recap, and Sogang Univ. LQR/MATLAB control lectures.</description>
    </item>`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>M9G (Minsu Chang, Ph.D. / 장민수 / mincasurong) — Robotics, Physical AI &amp; Agentic Systems</title>
    <link>https://mincasurong.github.io/</link>
    <description>Official portfolio and engineering blog of Minsu Chang, Ph.D. (장민수, mincasurong, M9G): 1st-Place Winner at Google Gemini 3 Seoul Hackathon 2026, Multi-Robot VLA Benchmarks in NVIDIA Isaac Sim 6.0 &amp; ROS 2, ROS/MoveIt/Jetson Nano Tutorials, 21 Peer-Reviewed Publications (IEEE ICRA, IEEE/RSJ IROS, IEEE TNSRE), and 14+ US/KR Patents.</description>
    <language>en-us</language>
    <lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>
    <atom:link href="https://mincasurong.github.io/rss.xml" rel="self" type="application/rss+xml" />

${blogItemsXml}

${staticItemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
