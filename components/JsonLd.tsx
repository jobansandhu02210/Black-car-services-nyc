import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_E164, CONTACT_PHONE_2_E164 } from '@/lib/contact';
import { getSiteUrl } from '@/lib/site';

/**
 * JSON-LD structured data for local business and service offerings.
 * Renders in head for SEO / rich results.
 */
export function LocalBusinessJsonLd() {
  const site = getSiteUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TaxiService'],
    '@id': `${site}/#business`,
    name: 'Eagle Eye Chauffeur',
    alternateName: ['Eagle Eye Black Car', 'Eagle Eye Car Service NYC'],
    description:
      'Eagle Eye Chauffeur provides luxury black car and chauffeur service in New York City: JFK, LGA, EWR, and HPN airport transfers, Manhattan and boroughs, hourly hire, corporate travel, and point-to-point rides. Professional, discreet, and reliable.',
    url: site,
    telephone: [CONTACT_PHONE_E164, CONTACT_PHONE_2_E164],
    email: CONTACT_EMAIL_BOOKINGS,
    founder: { '@type': 'Person', name: 'Joban Sandhu' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$$',
    paymentAccepted: 'Credit Card, Debit Card, Cash, Bank Transfer',
    currenciesAccepted: 'USD',
    logo: {
      '@type': 'ImageObject',
      url: `${site}/logo-2026-04-25.png`,
      width: 400,
      height: 120,
    },
    image: [`${site}/og-image.jpg`, `${site}/logo-2026-04-25.png`],
    // NOTE: aggregateRating / review markup intentionally omitted. Google
    // prohibits self-serving review snippets on your own LocalBusiness. Re-add
    // only with genuine third-party reviews (e.g. synced Google Business reviews).
    areaServed: [
      { '@type': 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
      { '@type': 'AdministrativeArea', name: 'Manhattan', sameAs: 'https://www.wikidata.org/wiki/Q11299' },
      { '@type': 'AdministrativeArea', name: 'Brooklyn', sameAs: 'https://www.wikidata.org/wiki/Q18419' },
      { '@type': 'AdministrativeArea', name: 'Queens', sameAs: 'https://www.wikidata.org/wiki/Q18432' },
      { '@type': 'AdministrativeArea', name: 'Bronx', sameAs: 'https://www.wikidata.org/wiki/Q18426' },
      { '@type': 'AdministrativeArea', name: 'Staten Island', sameAs: 'https://www.wikidata.org/wiki/Q60750' },
      { '@type': 'AdministrativeArea', name: 'Westchester County', sameAs: 'https://www.wikidata.org/wiki/Q498726' },
      { '@type': 'AdministrativeArea', name: 'Long Island' },
      { '@type': 'State', name: 'New Jersey' },
      { '@type': 'State', name: 'Connecticut' },
      { '@type': 'Airport', name: 'John F. Kennedy International Airport', sameAs: 'https://www.wikidata.org/wiki/Q8685' },
      { '@type': 'Airport', name: 'LaGuardia Airport', sameAs: 'https://www.wikidata.org/wiki/Q8977' },
      { '@type': 'Airport', name: 'Newark Liberty International Airport', sameAs: 'https://www.wikidata.org/wiki/Q16564' },
    ],
    hasMap: 'https://maps.google.com/?q=Eagle+Eye+Chauffeur+New+York+NY',
    sameAs: [
      'https://www.instagram.com/eagleeyechauffeur',
      'https://www.facebook.com/eagleeyechauffeur',
    ],
    knowsAbout: [
      'Airport Transfers',
      'Luxury Chauffeur Service',
      'Black Car Service',
      'Corporate Transportation',
      'Wedding Car Service',
      'NYC Limousine Service',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Chauffeur & Black Car Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'JFK Airport Car Service', url: `${site}/services/airport/jfk` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LGA Airport Car Service', url: `${site}/services/airport/lga` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EWR Airport Car Service', url: `${site}/services/airport/ewr` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HPN Airport Car Service', url: `${site}/services/airport/hpn` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Car Service NYC', url: `${site}/services/corporate` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hourly Chauffeur NYC', url: `${site}/services/hourly` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Point-to-Point Car Service', url: `${site}/services/point-to-point` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Special Events Car Service', url: `${site}/services/special-events` } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQ structured data for rich results in Google Search.
 * Add to any page that has a visible FAQ section.
 */
export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingJsonLd({
  headline,
  description,
  datePublished,
  author,
  image,
  url,
}: {
  headline: string;
  description: string;
  datePublished: string;
  author: string;
  image: string;
  url: string;
}) {
  const site = getSiteUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: site,
    },
    image: { '@type': 'ImageObject', url: image, width: 1200, height: 800 },
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    publisher: {
      '@type': 'Organization',
      name: 'Eagle Eye Chauffeur',
      url: site,
      logo: { '@type': 'ImageObject', url: `${site}/logo-2026-04-25.png`, width: 400, height: 120 },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  areaServed = 'New York, NY',
  url,
}: {
  name: string;
  description: string;
  areaServed?: string;
  url?: string;
}) {
  const site = getSiteUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    ...(url ? { url } : {}),
    serviceType: 'Chauffeur & Black Car Service',
    provider: {
      '@type': ['LocalBusiness', 'TaxiService'],
      name: 'Eagle Eye Chauffeur',
      telephone: CONTACT_PHONE_E164,
      url: site,
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const site = getSiteUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site}/#website`,
    name: 'Eagle Eye Chauffeur',
    url: site,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${site}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Speakable schema signals to Google which content is suitable for
// text-to-speech (Google Assistant, AI Overviews). Target headings + intros.
export function SpeakableJsonLd({ cssSelectors }: { cssSelectors: string[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
