import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { ComparisonTable, type Cell } from '@/components/ComparisonTable';
import { PageHero } from '@/components/PageHero';
import { FactorTable, FaqList, InfoCards, RelatedLinks, StepsList } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';

const path = '/services/long-distance';
const title = 'Long-Distance Car Service from NYC | Black Car Service';
const description =
  'Private long-distance car service from New York City to Philadelphia, Washington DC, New Jersey and Connecticut. One car, one driver, door to door.';
const bookHref = '/book?service=point-to-point';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const routes = [
  { to: 'Philadelphia, PA', miles: '≈ 95 mi', time: '≈ 2 h', href: '/services/routes/nyc-to-philadelphia', note: 'Center City, University City, the Main Line and PHL airport.' },
  { to: 'Washington, DC', miles: '≈ 225 mi', time: '≈ 4–4.5 h', href: '/services/routes/nyc-to-washington-dc', note: 'Capitol Hill, Downtown, Georgetown, Arlington and Bethesda.' },
  { to: 'Princeton, NJ', miles: '≈ 55 mi', time: '≈ 1 h 15 min', href: '/services/areas/new-jersey', note: 'The university, Route 1 offices and nearby towns.' },
  { to: 'Morristown, NJ', miles: '≈ 33 mi', time: '≈ 1 h', href: '/services/areas/new-jersey', note: 'Corporate campuses along Routes 287 and 78.' },
  { to: 'Stamford, CT', miles: '≈ 40 mi', time: '≈ 1 h', href: '/services/areas/connecticut', note: 'Downtown offices and the Fairfield County shoreline.' },
  { to: 'New Haven, CT', miles: '≈ 80 mi', time: '≈ 1 h 45 min', href: '/services/areas/connecticut', note: 'Yale, the hospital campus and the station area.' },
];

const priceFactors = [
  { factor: 'Distance', detail: 'Mileage is the biggest part of a long-distance fare. We price from your exact pickup to your exact drop-off, not station to station.' },
  { factor: 'Tolls', detail: 'Hudson crossings, the New Jersey Turnpike and, further south, Delaware and Maryland tolls add up on longer routes. They are listed on your invoice.' },
  { factor: 'One way or round trip', detail: 'A one-way trip includes the driver’s return to New York. A same-day round trip with the driver waiting can work out better value than two one-way rides.' },
  { factor: 'Vehicle', detail: 'Sedan, SUV or First Class. On a four-hour ride, many people choose the bigger car for the extra room.' },
  { factor: 'Stops and waiting', detail: 'A coffee stop is fine. A planned stop on the way — a meeting in Princeton, a pickup in Philadelphia — should be in the quote.' },
  { factor: 'Time of departure', detail: 'Leaving New York on a Friday afternoon can add an hour or more. Early-morning and midday departures are the smoothest.' },
];

const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'From your door to their door', cells: ['yes', 'no', 'no', 'yes'] },
  { row: 'Leave exactly when you want', cells: ['yes', 'no', 'no', 'yes'] },
  { row: 'No luggage limits or transfers', cells: ['yes', 'varies', 'no', 'yes'] },
  { row: 'Work or rest the whole way', cells: ['yes', 'yes', 'varies', 'no'] },
  { row: 'Private — no other passengers', cells: ['yes', 'no', 'no', 'yes'] },
  { row: 'Stops wherever you need them', cells: ['yes', 'no', 'no', 'yes'] },
];

// TODO(owner): confirm onboard promises (stops on request, quiet ride) before launch.
const experience = [
  { title: 'Stops when you want them', body: 'Ask for a break at the next service area, or plan a stop on the way. The car runs to your schedule, not a timetable.' },
  { title: 'Time to work or switch off', body: 'Take calls, finish a deck or sleep. Nobody else in the car, and no announcements.' },
  { title: 'Room for everything', body: 'Suitcases, a dog crate, a guitar, a box from the office. If it fits in the car, it comes with you.' },
];

// Capacities match VEHICLE_CAPACITY in lib/booking-estimate-server.ts.
const vehicles = [
  { title: 'Executive Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'Comfortable for one or two people on trips up to a couple of hours.' },
  { title: 'First Class SUV', spec: 'Up to 6 passengers · 6 bags', body: 'More legroom for a long drive, and space for a family or team.' },
  { title: 'First Class Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'A newer, top-trim car for clients and four-hour trips to DC.' },
];

const steps = [
  { name: 'Tell us where to', text: 'Choose City to city, then add your pickup, the destination address, date and time.' },
  { name: 'Say one way or round trip', text: 'If you need us to wait and bring you back, add the return time in special requests.' },
  { name: 'Choose the car', text: 'Pick the vehicle for your group and luggage; see the estimate as you book.' },
  { name: 'Ride', text: 'We confirm the fare before the trip, and your driver’s details arrive before pickup.' },
];

const faqs = [
  {
    q: 'How far will you drive from New York City?',
    a: 'Our regular long-distance routes cover New Jersey, Connecticut, Philadelphia and Washington, DC. For anywhere else in the Northeast, call or WhatsApp us and we will tell you whether we can take it.',
  },
  {
    q: 'How much does a long-distance car service from NYC cost?',
    a: 'It depends on the miles, tolls, the vehicle, and whether it is one way or a round trip. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'Is a car service faster than the train from New York to Philadelphia or DC?',
    a: 'Station to station, the train is usually faster. Door to door, the gap narrows: there is no trip to Penn Station, no wait on the platform and no taxi at the other end. With luggage, children or a group, a car often comes out ahead.',
  },
  {
    q: 'Can the driver wait and bring me back the same day?',
    a: 'Yes. Book it as a round trip and tell us the return time. It is often better value than two separate one-way rides.',
  },
  {
    q: 'Can we stop along the way?',
    a: 'Yes. Rest stops are fine whenever you want one. A planned stop — a meeting or a second pickup — should be added when you book so it is part of the quote.',
  },
  {
    q: 'Can you pick me up at JFK, LaGuardia or Newark and drive me to another city?',
    a: 'Yes. Airport pickups to Philadelphia, DC, New Jersey and Connecticut are some of our most common long-distance trips. Add the flight number and we follow the landing time.',
  },
  {
    q: 'Do you drive from Philadelphia or DC back to New York?',
    a: 'Yes. We drive both directions; book the pickup address in Philadelphia or Washington and your New York destination.',
  },
  {
    q: 'How far in advance should I book a long-distance car?',
    a: 'A day or more ahead is best, especially for Friday afternoons and holiday weekends. Online bookings need at least two hours’ notice; call us for anything sooner.',
  },
];

const related = [
  { href: '/services/routes/nyc-to-philadelphia', title: 'NYC to Philadelphia', body: 'About two hours door to door from Midtown.' },
  { href: '/services/routes/nyc-to-washington-dc', title: 'NYC to Washington, DC', body: 'About four to four and a half hours.' },
  { href: '/services/areas/new-jersey', title: 'New Jersey car service', body: 'Hoboken to Princeton and the Shore.' },
  { href: '/services/areas/connecticut', title: 'Connecticut car service', body: 'Greenwich, Stamford and New Haven.' },
  { href: '/services/airport', title: 'Airport car service', body: 'JFK, LaGuardia and Newark compared.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function LongDistancePage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Long-distance car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Long-Distance Car Service from New York City"
        description={description}
        url={`${site}${path}`}
        serviceType="Long-distance car service"
        areaServed={[
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
          { type: 'City', name: 'Philadelphia', sameAs: 'https://www.wikidata.org/wiki/Q1345' },
          { type: 'City', name: 'Washington, D.C.', sameAs: 'https://www.wikidata.org/wiki/Q61' },
          { type: 'State', name: 'New Jersey', sameAs: 'https://www.wikidata.org/wiki/Q1408' },
          { type: 'State', name: 'Connecticut', sameAs: 'https://www.wikidata.org/wiki/Q779' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#ld-title', '#ld-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Long distance' }]}
        eyebrow="Philadelphia · Washington, DC · New Jersey · Connecticut"
        idPrefix="ld"
        h1="Long-Distance Car Service from NYC"
        answer={`${SITE_NAME} drives you from anywhere in New York City to the next city over — Philadelphia in about two hours, Washington, DC in about four, and towns across New Jersey and Connecticut — in one private car, from your door to theirs.`}
        ctaHref={bookHref}
        ctaLabel="Get my trip price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Routes */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="routes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="routes-heading"
            eyebrow="Routes"
            title="Popular long-distance routes from New York"
            intro="Approximate distances and drive times from Midtown Manhattan outside rush hour."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r) => (
              <li key={r.to}>
                <Link href={r.href} className="card-hover block h-full rounded-2xl border border-brand-line p-6 hover:border-brand-accent">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-brand-muted">NYC to</span>
                  <h3 className="mt-1 text-xl text-brand-ink">{r.to}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-accent">{r.miles} · {r.time}</p>
                  <p className="mt-3 text-brand-muted leading-relaxed">{r.note}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="cost-heading"
            eyebrow="Pricing"
            title="How much does a long-distance car service cost?"
            intro="Six things set the price of a ride out of the city."
          />
          <div className="rounded-2xl bg-brand-white">
            <FactorTable caption="What affects the price of a long-distance car service" rows={priceFactors} />
          </div>
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            For a real number,{' '}
            <Link href={bookHref} className="font-semibold text-brand-accent hover:underline">enter your trip</Link>. You see an
            estimate as you book, and we confirm the fare before the ride.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Car service vs train, bus and driving yourself"
            intro="The train wins on speed between stations. A car wins on everything either side of the station."
          />
          <ComparisonTable
            caption="How a long-distance car service compares with train, bus and driving yourself"
            columns={['Car service', 'Train', 'Bus', 'Drive yourself']}
            rows={comparison}
          />
        </div>
      </section>

      {/* Experience */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="ride-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="ride-heading" eyebrow="On the road" title="What a long ride with us is like" />
          <InfoCards items={experience} tone="tint" />
        </div>
      </section>

      {/* Vehicles */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="fleet-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="fleet-heading" eyebrow="Vehicles" title="Choosing a car for a long trip" />
          <InfoCards items={vehicles} />
          <Link href="/fleet" className="mt-8 inline-block font-display text-sm font-bold text-brand-accent hover:underline">
            See every vehicle →
          </Link>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="How it works" title="How to book a long-distance car" />
          <StepsList steps={steps} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
              Book a long-distance ride
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center font-display text-sm font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Long-distance car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-tint py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Routes and areas we cover" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
