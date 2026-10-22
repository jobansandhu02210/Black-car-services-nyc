import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const site = getSiteUrl();
  return {
    rules: [
      // AI answer engines may read public pages (docs/REFERENCE-RESEARCH.md §3 GEO/AEO).
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
        disallow: ['/admin/', '/api/', '/invoice/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',    // Admin tools — protected but noindex not enough, block crawlers too
          '/api/',      // API routes — no crawlable content
          '/invoice/',  // Customer invoice pages — private payment links with unique tokens
        ],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
  };
}
