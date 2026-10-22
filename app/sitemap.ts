import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const base = getSiteUrl();

// Stable last-modified date for static pages. Bump this ONLY when page content
// actually changes — do NOT use `new Date()`, which re-stamps every URL on every
// build and destroys the freshness signal Google uses to prioritize re-crawls.
const LAST_UPDATED = new Date('2026-10-22');

// Lean launch set — keep in sync with LAUNCH-PLAN.md. Add pages one at a time.
const paths: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/book', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/airport', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/airport/jfk', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/airport/lga', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/airport/ewr', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/long-distance', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/routes/nyc-to-philadelphia', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/services/routes/nyc-to-washington-dc', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/services/areas/new-jersey', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/services/areas/connecticut', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/fleet', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
  }));
}
