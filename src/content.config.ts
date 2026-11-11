import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const localeStringMapSchema = z.record(z.string(), z.string());

const blogs = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/content/blogs',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    slug: z.enum([
      'VLA',
      'm9g-agent',
      'stamp',
      'sdl-survey',
      'lazy-dash',
      'tamp-fast-sim',
    ]),
    reportId: z.string().regex(/^M9G-TR-2026-0[1-6]$/),
    order: z.number().int().min(1).max(6),
    topic: z.enum(['robotics', 'agents']),
    publishedIso: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    publishedDisplay: z.string().min(1),
    updatedIso: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    switcherKicker: z.string().min(1),
    switcherTitle: z.string().min(1),
    cardBadge: z.string().min(1),
    cardTypeBadge: z.string().min(1),
    cardDurationBadge: z.string().min(1),
    thumbPng: z.string().startsWith('/screenshots/'),
    thumbWebp: z.string().startsWith('/screenshots/'),
    pageTitle: z.string().min(1),
    metaDescription: z.string().min(1),
    canonicalUrl: z.string().url(),
    ogTitle: z.string().min(1),
    ogDescription: z.string().min(1),
    ogImage: z.string().url(),
    seoKeywords: z.string().min(1),
    jsonLd: z.object({
      '@context': z.literal('https://schema.org'),
      '@type': z.literal('TechArticle'),
      headline: z.string().min(1),
      identifier: z.string().min(1),
      datePublished: z.string().min(1),
      dateModified: z.string().min(1),
      inLanguage: z.array(z.string().min(1)).length(5),
      image: z.string().url(),
      author: z.object({
        '@type': z.literal('Person'),
        name: z.string().min(1),
        honorificSuffix: z.string().min(1),
        alternateName: z.array(z.string().min(1)),
        url: z.string().url(),
      }),
      publisher: z.object({
        '@type': z.literal('Organization'),
        name: z.string().min(1),
        url: z.string().url(),
      }),
    }),
    kickerTag: z.string().min(1),
    kickerMetaHtml: z.string().min(1),
    title: z.string().min(1),
    ledeHtml: z.string().min(1),
    bylineCells: z
      .array(
        z.object({
          label: z.string().min(1),
          valueHtml: z.string().min(1),
        }),
      )
      .length(4),
    hubTitleI18nKey: z.string().min(1),
    hubDescI18nKey: z.string().min(1),
    hubTitle: z.string().min(1),
    hubDesc: z.string().min(1),
    bodyHtml: z.string().min(1),
    i18n: z.object({
      en: localeStringMapSchema,
      ko: localeStringMapSchema,
      ja: localeStringMapSchema,
      zh: localeStringMapSchema,
      es: localeStringMapSchema,
    }),
  }),
});

const publications = defineCollection({
  loader: file('./src/content/data/publications.json'),
  schema: z.object({
    id: z.string().min(1),
    order: z.number().int().min(1).max(21),
    frontier: z.boolean(),
    badge: z.string().min(1),
    frontierBadge: z.string().nullable(),
    year: z.number().int().min(2016).max(2026),
    venue: z.string().min(1),
    venueHtml: z.string().min(1),
    titleHtml: z.string().min(1),
    authorsHtml: z.string().min(1),
    metaNote: z.string(),
    links: z.array(
      z.object({
        label: z.string().min(1),
        url: z.string().min(1),
      }),
    ),
  }),
});

const patents = defineCollection({
  loader: file('./src/content/data/patents.json'),
  schema: z.object({
    id: z.string().min(1),
    code: z.enum([
      'P01',
      'P02',
      'P03',
      'P04',
      'P05',
      'P06',
      'P07',
      'P08',
      'P09',
      'P10',
      'P11',
      'P12',
      'P13',
      'P14',
    ]),
    order: z.number().int().min(1).max(14),
    jurisdiction: z.enum(['US', 'KR']),
    status: z.enum(['granted', 'application']),
    title: z.string().min(1),
    inventorsHtml: z.string().min(1),
    patentNumber: z.string().min(1),
    meta: z.string().min(1),
    url: z.string().url().optional(),
    linkLabel: z.string().optional(),
  }),
});

const redirects = defineCollection({
  loader: file('./src/content/data/redirects.json'),
  schema: z.object({
    id: z.string().min(1),
    source: z.string().min(1),
    sourcePath: z.string().startsWith('/'),
    target: z.string().min(1),
    canonical: z.string().url(),
    title: z.string().min(1),
  }),
});

export const collections = {
  blogs,
  publications,
  patents,
  redirects,
};
