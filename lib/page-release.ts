import type { Metadata } from 'next';

/**
 * Pages that are built and linked but not released to search yet (LAUNCH-PLAN: add pages a few
 * at a time). A held page is left out of the sitemap and sends `noindex, follow`.
 * To release a page: delete its path from this list (and bump LAST_UPDATED in app/sitemap.ts).
 */
export const HELD_PATHS = new Set<string>([
  '/services/airport/hpn',
  '/services/airport/teb',
  '/services/areas/queens',
  '/services/routes/nyc-to-hamptons',
  '/services/areas/manhattan',
  '/services/areas/brooklyn',
  '/services/areas/long-island',
  '/services/areas/westchester',
  '/services/routes/nyc-to-boston',
]);

export function isHeld(path: string): boolean {
  return HELD_PATHS.has(path);
}

/** Spread into a page's metadata: `...releaseRobots(path)`. */
export function releaseRobots(path: string): Pick<Metadata, 'robots'> {
  return isHeld(path) ? { robots: { index: false, follow: true } } : {};
}
