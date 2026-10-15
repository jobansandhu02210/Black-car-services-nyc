/**
 * Placeholder for Google Analytics and Search Console.
 * Replace with your actual GA4 measurement ID and gtag script.
 * For Search Console, add verification meta tag in layout.tsx metadata.verification.google
 */
export function AnalyticsPlaceholder() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID; // e.g. G-XXXXXXXXXX
  if (!gaId) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      />
    </>
  );
}
