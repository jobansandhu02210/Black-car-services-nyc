import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_E164 } from '@/lib/contact';
import { getSiteUrl, SITE_NAME, SITE_NAME_LONG } from '@/lib/site';

/**
 * JSON-LD structured data for local business and service offerings.
 * Renders in head for SEO / rich results.
 */
export function LocalBusinessJsonLd() {
  const site = getSiteUrl();
  // Service-area business: no street address or geo pin until there is a real, staffed
  // office. Google requires SABs to hide the address rather than publish a fake one.
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TaxiService'],
    '@id': `${site}/#business`,
    name: SITE_NAME,
    alternateName: SITE_NAME_LONG,
    description:
      'Private black car service based in New York City: JFK, LaGuardia and Newark airport transfers, and door-to-door long-distance rides to New Jersey, Connecticut, Philadelphia and Washington, DC.',
    url: site,
    telephone: CONTACT_PHONE_E164,
    email: CONTACT_EMAIL_BOOKINGS,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    currenciesAccepted: 'USD',
    image: [`${site}/og-image.jpg`],
    // NOTE: aggregateRating / review markup intentionally omitted. Google
    // prohibits self-serving review snippets on your own LocalBusiness. Re-add
    // only with genuine third-party reviews (e.g. synced Google Business reviews).
    areaServed: [
      { '@type': 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
      { '@type': 'State', name: 'New Jersey', sameAs: 'https://www.wikidata.org/wiki/Q1408' },
      { '@type': 'State', name: 'Connecticut', sameAs: 'https://www.wikidata.org/wiki/Q779' },
      { '@type': 'State', name: 'Pennsylvania', sameAs: 'https://www.wikidata.org/wiki/Q1400' },
      { '@type': 'City', name: 'Washington, D.C.', sameAs: 'https://www.wikidata.org/wiki/Q61' },
      { '@type': 'Airport', name: 'John F. Kennedy International Airport', sameAs: 'https://www.wikidata.org/wiki/Q8685' },
      { '@type': 'Airport', name: 'LaGuardia Airport', sameAs: 'https://www.wikidata.org/wiki/Q8977' },
      { '@type': 'Airport', name: 'Newark Liberty International Airport', sameAs: 'https://www.wikidata.org/wiki/Q16564' },
    ],
    // sameAs (social profiles) omitted until the brand's own profiles exist.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Black Car Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'JFK Airport Car Service', url: `${site}/services/airport/jfk` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LaGuardia Airport Car Service', url: `${site}/services/airport/lga` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Newark Airport Car Service', url: `${site}/services/airport/ewr` } },
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
      name: SITE_NAME,
      url: site,
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
    serviceType: 'Black Car Service',
    provider: {
      '@type': ['LocalBusiness', 'TaxiService'],
      name: SITE_NAME,
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
    name: SITE_NAME,
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
