import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { ComparisonTable, type Cell } from '@/components/ComparisonTable';
import { PageHero, TextTable } from '@/components/PageHero';
import { FactorTable, FaqList, InfoCards, RelatedLinks } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';

const path = '/services/routes/nyc-to-washington-dc';
const title = 'NYC to Washington DC Car Service | Black Car Service';
const description =
  'Private car service from New York City to Washington, DC: about 4 to 4.5 hours door to door to Capitol Hill, Downtown, Georgetown or Arlington.';
const bookHref = `/book?service=point-to-point&dropoff=${encodeURIComponent('Washington, DC')}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

// To downtown Washington. Rounded public-map estimates.
const driveTimes: string[][] = [
  ['Midtown Manhattan', '225 mi', '4 h – 4 h 30 min', '5 h – 6 h'],
  ['Lower Manhattan', '225 mi', '4 h – 4 h 30 min', '5 h – 6 h'],
  ['Downtown Brooklyn', '230 mi', '4 h 10 min – 4 h 40 min', '5 h 15 min – 6 h 15 min'],
  ['JFK Airport', '240 mi', '4 h 15 min – 4 h 45 min', '5 h 15 min – 6 h 30 min'],
  ['Newark Airport', '215 mi', '3 h 45 min – 4 h 15 min', '4 h 45 min – 5 h 45 min'],
  ['Princeton, NJ (on the way)', '170 mi', '3 h – 3 h 20 min', '3 h 45 min – 4 h 30 min'],
];

const priceFactors = [
  { factor: 'Distance and time', detail: 'At around 225 miles each way, this is our longest regular route. Most of the fare is the driver’s time and mileage.' },
  { factor: 'Tolls', detail: 'The New Jersey Turnpike, the Delaware Memorial Bridge, Delaware’s I-95 toll and the Baltimore tunnels all add to the trip. They are listed on your invoice.' },
  { factor: 'One way, round trip or overnight', detail: 'One way includes the driver’s return. A same-day round trip or a next-day return is quoted separately — ask us when you book.' },
  { factor: 'Vehicle', detail: 'For four hours or more, many riders choose an SUV or First Class car for the extra room.' },
  { factor: 'Stops', detail: 'Rest breaks are part of the trip. A planned stop — a pickup in Philadelphia, a meeting in Baltimore — should be in the quote.' },
];

const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Door to door, no station or terminal', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'No security line or boarding time', cells: ['yes', 'yes', 'no', 'yes'] },
  { row: 'Leave exactly when you choose', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Stops along the way', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Private — just your group', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Quickest city center to city center', cells: ['no', 'yes', 'varies', 'no'] },
];

const dropoffs = [
  { title: 'Capitol Hill and Downtown', body: 'The Capitol, House and Senate office buildings, K Street and the hotels around the White House.' },
  { title: 'Georgetown and Foggy Bottom', body: 'Georgetown University, the State Department area and George Washington University.' },
  { title: 'Arlington and Alexandria, VA', body: 'Rosslyn, Crystal City, the Pentagon area and Old Town Alexandria.' },
  { title: 'Bethesda and Chevy Chase, MD', body: 'NIH, Walter Reed and the offices along Wisconsin Avenue.' },
  { title: 'DC airports', body: 'Reagan National (DCA), Dulles (IAD) and Baltimore/Washington (BWI) — for flights you would rather take from Washington.' },
  { title: 'Stops on the way', body: 'Philadelphia, Wilmington or Baltimore — pick up a colleague or fit in a meeting without a second booking.' },
];

const breaks = [
  { title: 'New Jersey Turnpike service areas', body: 'Regular stops all the way down the Turnpike for coffee, food and restrooms.' },
  { title: 'Delaware welcome center', body: 'A large rest area on I-95 near the Delaware–Maryland line, roughly halfway.' },
  { title: 'Maryland House', body: 'A well-known I-95 service plaza northeast of Baltimore, a little over an hour from DC.' },
];

// TODO(owner): confirm the overnight / next-day return answer.
const faqs = [
  {
    q: 'How long is the drive from New York City to Washington, DC?',
    a: 'About 4 to 4.5 hours from Midtown to downtown Washington outside rush hour, and 5 to 6 hours on Friday afternoons, holiday weekends or when leaving during the evening peak.',
  },
  {
    q: 'How much is a car service from NYC to DC?',
    a: 'It depends on your exact pickup and drop-off, the vehicle, tolls, and whether it is one way, a same-day round trip or a next-day return. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'Is a car faster than the Acela from New York to DC?',
    a: 'No — the Acela takes about 3 hours between Penn Station and Union Station. A car takes longer on the road but starts at your door and ends at your destination, with no station transfers, which can even it out door to door.',
  },
  {
    q: 'Is it better to drive or fly from New York to Washington?',
    a: 'The flight itself is about an hour, but getting to the airport, security and the trip in from DCA or Dulles often adds two to three hours. For groups, families and anyone with luggage, a car is often simpler.',
  },
  {
    q: 'Can we stop in Philadelphia or Baltimore on the way?',
    a: 'Yes. Add the stop when you book so it is part of the quote. Rest breaks along the way are always fine.',
  },
  {
    q: 'Can you drive me to Dulles, Reagan National or BWI?',
    a: 'Yes. We drive from New York to all three Washington-area airports. BWI is the closest of the three from the north.',
  },
  {
    q: 'Can the driver wait and bring me back to New York?',
    a: 'Yes, as a same-day round trip or a next-day return. Tell us your plans when you book and we will quote the full trip.',
  },
  {
    q: 'Do you drive from Washington, DC back to New York?',
    a: 'Yes. Book with your Washington pickup address and your New York destination, including JFK, LaGuardia or Newark.',
  },
];

const related = [
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'All our routes out of New York.' },
  { href: '/services/routes/nyc-to-philadelphia', title: 'NYC to Philadelphia', body: 'The halfway city — about two hours.' },
  { href: '/services/areas/new-jersey', title: 'New Jersey car service', body: 'Princeton and the Turnpike towns.' },
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'The closest NYC airport heading south.' },
  { href: '/services/routes/nyc-to-boston', title: 'NYC to Boston', body: 'The same distance in the other direction.' },
  { href: '/services/areas/manhattan', title: 'Manhattan car service', body: 'Pickups anywhere on the island.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and First Class cars.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function NycToWashingtonDcPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Long-distance car service', url: `${site}/services/long-distance` },
          { name: 'NYC to Washington, DC', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="New York City to Washington, DC Car Service"
        description={description}
        url={`${site}${path}`}
        serviceType="Long-distance car service"
        areaServed={[
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
          { type: 'City', name: 'Washington, D.C.', sameAs: 'https://www.wikidata.org/wiki/Q61' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#dc-title', '#dc-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Long distance', href: '/services/long-distance' }, { name: 'NYC to Washington, DC' }]}
        eyebrow="New York → Washington, DC"
        idPrefix="dc"
        h1="NYC to Washington DC Car Service"
        answer={`${SITE_NAME} drives you from New York City to Washington, DC in one private car — about four to four and a half hours door to door, with breaks when you want them and no airport or station at either end.`}
        ctaHref={bookHref}
        ctaLabel="Get my DC price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Drive time */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="time-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="time-heading"
            eyebrow="Drive time"
            title="How long is the drive from New York to Washington, DC?"
            intro="Times to downtown Washington via the New Jersey Turnpike and I-95. Leaving New York before 7 am or around midday avoids the worst of it."
          />
          <TextTable caption="Drive times from New York to downtown Washington, DC" head={['From', 'Distance', 'Off-peak', 'Rush hour / Fridays']} rows={driveTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate road distances and times; live traffic decides on the day.</p>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="cost-heading" eyebrow="Pricing" title="What does a car service from NYC to DC cost?" />
          <div className="rounded-2xl bg-brand-white">
            <FactorTable caption="What affects the price of a New York to Washington, DC car service" rows={priceFactors} />
          </div>
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            <Link href={bookHref} className="font-semibold text-brand-accent hover:underline">Enter your trip</Link> for an
            estimate, or message us for a round trip or next-day return. We confirm the fare before the ride.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Car service vs Acela, the air shuttle and the bus to DC"
            intro="Between city centers, the Acela is quickest. The question is how much of the day goes on getting to and from the station or airport."
          />
          <ComparisonTable
            caption="How a car service compares with train, flying and bus between New York and Washington"
            columns={['Car service', 'Acela / Amtrak', 'Flying', 'Bus']}
            rows={comparison}
          />
        </div>
      </section>

      {/* Drop-offs */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="where-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="where-heading"
            eyebrow="Destinations"
            title="Where we drop off in Washington, Virginia and Maryland"
            intro="Any address in the DC area works. These are the ones New York riders book most."
          />
          <InfoCards items={dropoffs} tone="tint" />
        </div>
      </section>

      {/* Breaks */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="breaks-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="breaks-heading"
            eyebrow="On the road"
            title="Breaking up a four-hour drive"
            intro="Four hours is long enough to want a stretch. Say the word and we stop at the next good place."
          />
          <InfoCards items={breaks} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
              Book NYC to DC
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center font-display text-sm font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Ask about a round trip
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="NYC to Washington, DC car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related routes and airports" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
