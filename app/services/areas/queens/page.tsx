import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { PageHero, TextTable } from '@/components/PageHero';
import { FaqList, InfoCards, RelatedLinks } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';
import { releaseRobots } from '@/lib/page-release';

const path = '/services/areas/queens';
const title = 'Queens Car Service to JFK & LaGuardia | Black Car Service';
const description =
  'Private car service from anywhere in Queens to JFK, LaGuardia and Newark, into Manhattan, or on to Long Island, Connecticut and Philadelphia.';
const bookHref = '/book?service=airport';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
  ...releaseRobots(path),
};

const neighborhoods = [
  { title: 'Long Island City', spec: 'Court Square · Hunters Point', body: 'One stop from Midtown, with LaGuardia about 15 to 25 minutes away.' },
  { title: 'Astoria', spec: 'Ditmars · Broadway', body: 'The closest part of Queens to LaGuardia — often 10 to 20 minutes.' },
  { title: 'Flushing', spec: 'Main Street · Flushing Meadows', body: 'Between both airports, and a short ride from Citi Field and the tennis center.' },
  { title: 'Forest Hills and Rego Park', spec: 'Austin Street · Queens Boulevard', body: 'Central Queens with an easy run down the Van Wyck to JFK.' },
  { title: 'Jamaica', spec: 'Downtown Jamaica · Jamaica Estates', body: 'The nearest neighborhood to JFK, usually 10 to 20 minutes.' },
  { title: 'Bayside and Douglaston', spec: 'Northeast Queens', body: 'Quiet residential streets with quick access to LaGuardia and Long Island.' },
];

// Typical drive times from each neighborhood (public-map estimates, rounded).
const airportTimes: string[][] = [
  ['Long Island City', '15–25 min', '30–45 min', '30–45 min'],
  ['Astoria', '10–20 min', '30–40 min', '40–55 min'],
  ['Flushing', '15–25 min', '25–35 min', '50–70 min'],
  ['Forest Hills', '15–25 min', '20–30 min', '45–65 min'],
  ['Jamaica', '20–30 min', '10–20 min', '50–70 min'],
  ['Bayside', '15–25 min', '25–35 min', '55–75 min'],
];

const beyond = [
  { title: 'Into Manhattan', body: 'Midtown is about 15 to 30 minutes from western Queens outside rush hour, via the Queensboro Bridge or the Midtown Tunnel.' },
  { title: 'Long Island and the Hamptons', body: 'Queens is the start of the Long Island Expressway. The Hamptons are roughly two hours outside summer weekends.' },
  { title: 'Connecticut and Philadelphia', body: 'Northeast Queens is well placed for Greenwich and Stamford; Philadelphia is about two and a half hours.' },
];

const faqs = [
  {
    q: 'Which airport is closer from Queens, JFK or LaGuardia?',
    a: 'It depends where you live. Astoria, Long Island City and northern Queens are closest to LaGuardia; Jamaica, South Ozone Park and the Rockaways are closest to JFK. Flushing and Forest Hills are in between.',
  },
  {
    q: 'How much is a car service from Queens to JFK?',
    a: 'Queens rides to JFK and LaGuardia are some of our shortest trips. The price depends on your address and the vehicle; enter your trip on the booking page for an estimate.',
  },
  {
    q: 'Can you pick me up in Queens for Newark Airport?',
    a: 'Yes. Allow about 45 minutes to an hour and a quarter depending on traffic and where in Queens you start.',
  },
  {
    q: 'Do you drive from Queens to the Hamptons or Connecticut?',
    a: 'Yes. We drive door to door from Queens to the Hamptons, Long Island, Connecticut, New Jersey, Philadelphia and Washington, DC.',
  },
  {
    q: 'Can I book a car to Citi Field or the US Open?',
    a: 'Yes, as a point-to-point ride. For event days, book ahead and allow extra time around the stadium and the tennis center.',
  },
];

const related = [
  { href: '/services/airport/jfk', title: 'JFK car service', body: 'Terminals, drive times and the pickup planner.' },
  { href: '/services/airport/lga', title: 'LaGuardia car service', body: 'The closest airport to northern Queens.' },
  { href: '/services/routes/nyc-to-hamptons', title: 'NYC to the Hamptons', body: 'Straight out the Long Island Expressway.' },
  { href: '/services/areas/connecticut', title: 'Connecticut car service', body: 'Greenwich, Stamford and the shoreline.' },
  { href: '/services/airport', title: 'Compare NYC airports', body: 'JFK, LaGuardia, Newark, HPN and Teterboro.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function QueensPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'Queens car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Queens Car Service"
        description={description}
        url={`${site}${path}`}
        areaServed={[
          { type: 'AdministrativeArea', name: 'Queens', sameAs: 'https://www.wikidata.org/wiki/Q18432' },
          { type: 'Airport', name: 'John F. Kennedy International Airport', sameAs: 'https://www.wikidata.org/wiki/Q8685' },
          { type: 'Airport', name: 'LaGuardia Airport', sameAs: 'https://www.wikidata.org/wiki/Q8977' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#queens-title', '#queens-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Airports', href: '/services/airport' }, { name: 'Queens' }]}
        eyebrow="Queens, New York"
        idPrefix="queens"
        h1="Queens Car Service"
        answer={`Both of New York City's biggest airports are in Queens, so ${SITE_NAME} rides from Astoria, Flushing, Forest Hills or Jamaica to JFK or LaGuardia are often 10 to 30 minutes. We also drive from Queens into Manhattan and out to Long Island, Connecticut and beyond.`}
        ctaHref={bookHref}
        ctaLabel="Get my Queens price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="hoods-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="hoods-heading"
            eyebrow="Neighborhoods"
            title="Where we pick up in Queens"
            intro="Any address in the borough works. These are the neighborhoods we drive from most."
          />
          <InfoCards items={neighborhoods} />
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="Queens to JFK, LaGuardia and Newark"
            intro="Typical off-peak drive times. Add 15 to 30 minutes on weekday afternoons and around big events at Flushing Meadows."
          />
          <TextTable caption="Off-peak drive times from Queens neighborhoods to NYC airports" head={['From', 'LaGuardia', 'JFK', 'Newark']} rows={airportTimes} />
          <p className="mt-6 text-sm text-brand-muted">
            Approximate times; live traffic decides on the day. Terminal tips are on the{' '}
            <Link href="/services/airport/jfk" className="font-semibold text-brand-accent hover:underline">JFK</Link> and{' '}
            <Link href="/services/airport/lga" className="font-semibold text-brand-accent hover:underline">LaGuardia</Link> pages.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="beyond-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="beyond-heading" eyebrow="Beyond the airports" title="Car service from Queens to Manhattan and beyond" />
          <InfoCards items={beyond} />
          <Link href={bookHref} className="mt-10 inline-flex rounded-lg bg-brand-accent px-6 py-3 text-brand-white hover:bg-brand-accent-hover">
            Book a Queens ride
          </Link>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Queens car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related airports and routes" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
