import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const site = getSiteUrl();
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',    // Admin tools — protected but noindex not enough, block crawlers too
          '/api/',      // API routes — no crawlable content
          '/invoice/',  // Customer invoice pages — private payment links with unique tokens
          '/go/',       // Driver referral redirect links — tracking only, not content
        ],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
  };
}
