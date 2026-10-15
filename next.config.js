/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/bookings',
        destination: '/book',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/site-map',
        permanent: true,
      },
      // Fix 4xx: TEB linked as /services/airport/teb, canonical page is /services/areas/teb-airport
      {
        source: '/services/airport/teb',
        destination: '/services/areas/teb-airport',
        permanent: true,
      },
      // World Cup 2026 Final page retired after the event — fold into the evergreen MetLife hub
      {
        source: '/world-cup-2026/final',
        destination: '/world-cup-2026',
        permanent: true,
      },
      // Wedding car service had two competing pages — consolidate into the fuller /services/wedding page
      {
        source: '/services/wedding-car-service',
        destination: '/services/wedding',
        permanent: true,
      },
      // Consolidate near-duplicate airport pages (areas/*-airport vs airport/*) that were
      // cannibalizing each other's rankings for the same head term — one canonical page per airport.
      {
        source: '/services/areas/jfk-airport',
        destination: '/services/airport/jfk',
        permanent: true,
      },
      {
        source: '/services/areas/lga-airport',
        destination: '/services/airport/lga',
        permanent: true,
      },
      {
        source: '/services/areas/ewr-airport',
        destination: '/services/airport/ewr',
        permanent: true,
      },
      {
        source: '/services/areas/hpn-airport',
        destination: '/services/airport/hpn',
        permanent: true,
      },
    ];
  },
  async headers() {
    // PRE-LAUNCH SAFETY: keep every page out of Google until NEXT_PUBLIC_SITE_LIVE=true is set
    // in Vercel (do this only after the rebrand + rewrite is finished and the real domain is attached).
    const prelaunch =
      process.env.NEXT_PUBLIC_SITE_LIVE !== 'true'
        ? [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]
        : [];
    return [
      {
        source: '/(.*)',
        headers: [
          ...prelaunch,
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://images.unsplash.com https://placehold.co",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
              "frame-src https://www.google.com https://td.doubleclick.net",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
