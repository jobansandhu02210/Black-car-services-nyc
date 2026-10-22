/** Public brand name — use this everywhere instead of hardcoding the name. */
export const SITE_NAME = 'Black Car Service';

/** Longer form used where the bare brand name is too generic (schema alternateName, email signatures). */
export const SITE_NAME_LONG = 'Black Car Services NYC';

/** Canonical production domain (no protocol). Used only for host allowlists; URLs come from getSiteUrl(). */
export const SITE_DOMAIN = 'blackcarservicesnyc.com';

/**
 * Production site URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (and .env.local) to https://www.blackcarservicesnyc.com
 * (or the apex — whichever is the primary domain in Vercel).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return raw.replace(/\/$/, '');
}

/**
 * Header logo path. null = render the text wordmark (the files in /public are still
 * Eagle Eye's logos and must not be shown). Set once a new brand logo is added.
 */
export const BRAND_LOGO_SRC: string | null = null;
