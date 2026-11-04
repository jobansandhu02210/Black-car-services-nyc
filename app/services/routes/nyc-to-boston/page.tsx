import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { ComparisonTable, type Cell } from '@/components/ComparisonTable';
import { PageHero, TextTable } from '@/components/PageHero';
import { FaqList, InfoCards, RelatedLinks } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';
import { releaseRobots } from '@/lib/page-release';

const path = '/services/routes/nyc-to-boston';
const title = 'NYC to Boston Car Service, Door to Door | Black Car Service';
const description =
  'Private car service from New York City to Boston, Cambridge and Logan Airport: about four to four and a half hours, one driver, no train or flight changes.';
const bookHref = `/book?service=point-to-point&dropoff=${encodeURIComponent('Boston, MA')}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
  ...releaseRobots(path),
};

// From Midtown Manhattan. Rounded public-map estimates.
const driveTimes: string[][] = [
  ['Hartford, CT', '115 mi', '2 h – 2 h 30 min'],
  ['Providence, RI', '180 mi', '3 h 15 min – 3 h 45 min'],
  ['Newport, RI', '180 mi', '3 h 30 min – 4 h'],
  ['Back Bay, Boston', '215 mi', '4 h – 4 h 30 min'],
  ['Cambridge, MA', '215 mi', '4 h – 4 h 45 min'],
  ['Boston Logan Airport (BOS)', '215 mi', '4 h – 4 h 30 min'],
];

const destinations = [
  { title: 'Back Bay and Downtown', body: 'Hotels, Copley Square and the Financial District.' },
  { title: 'Seaport and the waterfront', body: 'The convention center, offices and harbour hotels.' },
  { title: 'Cambridge', body: 'Harvard, MIT and Kendall Square, for campus visits and move-in days.' },
  { title: 'Logan Airport', body: 'A one-way ride for a flight out of Boston, or a pickup there for the drive back to New York.' },
  { title: 'Providence and Newport', body: 'Brown, RISD and the Rhode Island coast on the way.' },
  { title: 'Boston suburbs', body: 'Newton, Wellesley, Brookline and the towns along Route 128.' },
];

const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Door to door with your bags', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Leave exactly when you want', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Private space for calls and work', cells: ['yes', 'varies', 'no', 'no'] },
  { row: 'No airport security', cells: ['yes', 'yes', 'no', 'yes'] },
  { row: 'Stops on the way', cells: ['yes', 'no', 'no', 'no'] },
];

const faqs = [
  {
    q: 'How long does it take to drive from New York to Boston?',
    a: 'About four to four and a half hours from Midtown to Back Bay outside rush hour, on I-95 or by way of Hartford. Friday afternoons and holiday weekends can add an hour or more.',
  },
  {
    q: 'Is a car service faster than the train or a flight to Boston?',
    a: 'Station to station, the train is usually quicker, and the flight is shorter in the air. Door to door, once you add getting to Penn Station or the airport, security and the ride at the other end, a car is often close — and you never change vehicles.',
  },
  {
    q: 'How much is a car service from NYC to Boston?',
    a: 'It depends on the exact addresses, the vehicle and any stops. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'Can we stop on the way?',
    a: 'Yes. A rest stop is always fine. For a planned stop — a meeting in Stamford or a campus visit in Providence — add it when you book so it is in the quote.',
  },
  {
    q: 'Do you drive from Boston back to New York?',
    a: 'Yes, in both directions. Book with your Boston pickup address and your New York destination, including JFK, LaGuardia or Newark.',
  },
];

const related = [
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'All our routes out of New York.' },
  { href: '/services/areas/connecticut', title: 'Connecticut car service', body: 'Stamford, New Haven and Hartford on the way.' },
  { href: '/services/routes/nyc-to-philadelphia', title: 'NYC to Philadelphia', body: 'The other direction — about two hours.' },
  { href: '/services/routes/nyc-to-washington-dc', title: 'NYC to Washington, DC', body: 'About four to four and a half hours south.' },
  { href: '/services/areas/manhattan', title: 'Manhattan car service', body: 'Pickups anywhere on the island.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Room to work, or a Sprinter for the whole team.' },
];

export default function NycToBostonPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Long-distance car service', url: `${site}/services/long-distance` },
          { name: 'NYC to Boston', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="New York City to Boston Car Service"
        description={description}
        url={`${site}${path}`}
        serviceType="Long-distance car service"
        areaServed={[
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
          { type: 'City', name: 'Boston', sameAs: 'https://www.wikidata.org/wiki/Q100' },
          { type: 'State', name: 'Massachusetts', sameAs: 'https://www.wikidata.org/wiki/Q771' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#boston-title', '#boston-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Long distance', href: '/services/long-distance' }, { name: 'NYC to Boston' }]}
        eyebrow="New York → Boston"
        idPrefix="boston"
        h1="NYC to Boston Car Service"
        answer={`${SITE_NAME} drives you from any New York address to Boston, Cambridge or Logan Airport in about four to four and a half hours. One car and one driver the whole way — no Penn Station, no security line, and room to work or sleep.`}
        ctaHref={bookHref}
        ctaLabel="Get my Boston price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="time-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="time-heading"
            eyebrow="Drive time"
            title="How long is the drive from NYC to Boston?"
            intro="Times from Midtown. We take I-95 along the coast or the inland route through Hartford, whichever traffic favours on the day."
          />
          <TextTable caption="Drive times from Midtown Manhattan to Boston and stops on the way" head={['To', 'Distance', 'Typical drive']} rows={driveTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate road distances and times; live traffic decides on the day.</p>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="dest-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="dest-heading"
            eyebrow="Destinations"
            title="Where we drive in Boston and New England"
            intro="Any address works. These are the trips we are asked for most."
          />
          <InfoCards items={destinations} tone="tint" />
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Car service vs train, plane and bus to Boston"
            intro="The train and the shuttle flights are hard to beat station to station. A car wins when you count the trip from your door to theirs, or travel with bags, kids or colleagues."
          />
          <ComparisonTable
            caption="How a car service compares with train, plane and bus from New York to Boston"
            columns={['Car service', 'Train', 'Flight', 'Bus']}
            rows={comparison}
          />
          <p className="mt-8 text-sm text-brand-muted">
            Stopping in Connecticut on the way? See our{' '}
            <Link href="/services/areas/connecticut" className="font-semibold text-brand-accent hover:underline">Connecticut car service</Link> page.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center text-brand-white hover:bg-brand-accent-hover">
              Book NYC to Boston
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Ask about a return trip
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="NYC to Boston FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related routes and areas" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
