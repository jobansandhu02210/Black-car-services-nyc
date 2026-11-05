/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
  async redirects() {
    // New domain, no legacy URLs to preserve (Eagle Eye's historical redirects were dropped).
    return [
      // One canonical host: www → apex (keeps path and query).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.blackcarservicesnyc.com' }],
        destination: 'https://blackcarservicesnyc.com/:path*',
        permanent: true,
      },
      {
        source: '/bookings',
        destination: '/book',
        permanent: true,
      },
      // No /services index in the lean page set; hubs are /services/airport and /services/long-distance.
      {
        source: '/services',
        destination: '/',
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
              // Stripe (invoice payments, /invoice/[token]): js.stripe.com per Stripe's CSP guidance.
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://connect.facebook.net https://js.stripe.com https://*.js.stripe.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://images.unsplash.com https://placehold.co",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://api.stripe.com",
              // hooks.stripe.com: 3-D Secure card authentication frames.
              "frame-src https://www.google.com https://td.doubleclick.net https://js.stripe.com https://*.js.stripe.com https://hooks.stripe.com",
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
