/**
 * Shared Open Graph defaults.
 *
 * Next.js does NOT deep-merge `openGraph` — a page that exports its own `openGraph`
 * replaces the root layout's object entirely, dropping og:type, og:site_name,
 * og:locale and og:image (which breaks link previews on WhatsApp/iMessage/social and
 * trips "Open Graph tags incomplete" in SEO audits). Spread these defaults first in
 * every page-level `openGraph` so each page keeps the full set, then override
 * url / title / description per page.
 */
export const ogDefaults = {
  type: 'website' as const,
  locale: 'en_US',
  siteName: 'Eagle Eye Chauffeur',
  images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Eagle Eye Chauffeur — luxury black car service in New York City',
    },
  ],
};
