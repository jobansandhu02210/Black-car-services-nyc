/**
 * Driver/Referral tracking system.
 *
 * Each driver gets a short slug used on business cards and shareable links.
 * Add their name and phone to the DRIVERS map below.
 */

export interface DriverInfo {
  name: string;
  slug: string;
  phone?: string;
}

/** ══════ ADD DRIVERS BELOW ══════
 *  slug — short word for the URL, e.g. "joban" → /.well-known/joban
 *  name — display name (printed on reports)
 *  phone — optional personal WhatsApp number
 */
const DRIVERS: DriverInfo[] = [
  { slug: 'joban', name: 'Joban Sandhu', phone: '+19299196499' },
  { slug: 'driver2', name: 'Driver 2' },
  { slug: 'driver3', name: 'Driver 3' },
  { slug: 'driver4', name: 'Driver 4' },
  { slug: 'driver5', name: 'Driver 5' },
];

export function getDrivers(): DriverInfo[] {
  return DRIVERS;
}

export function getDriverBySlug(slug: string): DriverInfo | undefined {
  return DRIVERS.find((d) => d.slug === slug);
}

export const TRACKING_COOKIE = 'ref_driver';

/**
 * Build a shareable business-card URL for a driver.
 * e.g. https://eagleeyechauffeur.com/go/joban
 */
export function driverLink(slug: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.eagleeyechauffeur.com';
  return `${base}/go/${slug}`;
}
