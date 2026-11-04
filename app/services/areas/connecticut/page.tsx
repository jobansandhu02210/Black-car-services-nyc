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

const path = '/services/areas/connecticut';
const title = 'Connecticut Car Service to & from NYC | Black Car Service';
const description =
  'Private car service between New York City and Connecticut: Greenwich, Stamford, Westport, New Haven and Hartford, plus LaGuardia and JFK. Book 24/7.';
const bookHref = '/book?service=point-to-point';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const regions = [
  { title: 'Greenwich and Stamford', spec: 'Old Greenwich · Riverside · Downtown Stamford', body: 'The closest of Connecticut to the city: hedge-fund offices, Stamford’s corporate towers and the train-station hotels.' },
  { title: 'Darien, New Canaan and Norwalk', spec: 'Fairfield County', body: 'Quiet commuter towns and SoNo’s restaurants, about an hour from Midtown when the roads are clear.' },
  { title: 'Westport and Fairfield', spec: 'Fairfield County shoreline', body: 'Beach houses, Saugatuck and the Fairfield University area, a little further up I-95.' },
  { title: 'New Haven', spec: 'Yale · the hospital campus · Wooster Square', body: 'University visits, hospital appointments and the downtown hotels, around an hour and a half away.' },
  { title: 'Hartford', spec: 'Downtown · West Hartford', body: 'Insurance offices and the state capital, about two hours from Manhattan.' },
  { title: 'Your address', spec: 'Anywhere in the state', body: 'If it is not listed, it is still on the map. Enter any Connecticut address when you book.' },
];

// From Midtown Manhattan. Rounded public-map estimates.
const driveTimes: string[][] = [
  ['Greenwich', '30 mi', '45–60 min', '70–100 min'],
  ['Stamford', '38 mi', '55–70 min', '80–110 min'],
  ['Darien / New Canaan', '42 mi', '60–75 min', '85–120 min'],
  ['Norwalk', '44 mi', '60–75 min', '85–120 min'],
  ['Westport', '48 mi', '65–80 min', '90–125 min'],
  ['New Haven', '80 mi', '90–105 min', '2–2.5 h'],
  ['Hartford', '115 mi', '2–2.5 h', '2.5–3.5 h'],
];

const priceFactors = [
  { factor: 'Distance up the coast', detail: 'Greenwich and Hartford are very different trips. We price your exact pickup and drop-off.' },
  { factor: 'Getting out of the city', detail: 'Connecticut’s highways have no tolls, so most toll cost is in New York — a bridge out of Manhattan or Queens, depending on the route.' },
  { factor: 'Congestion charge', detail: 'Rides that begin or end in Manhattan south of 60th Street include the congestion pricing charge for for-hire vehicles.' },
  { factor: 'Time of day', detail: 'I-95 through the Bronx and lower Fairfield County is slowest on weekday evenings and Friday afternoons in summer.' },
  { factor: 'Vehicle and stops', detail: 'Sedan or SUV, and any planned stop on the way — a second pickup in Greenwich, for example — should be in the quote.' },
];

const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Door to door', cells: ['yes', 'no', 'yes'] },
  { row: 'No change of train or taxi at the station', cells: ['yes', 'no', 'yes'] },
  { row: 'Booked for a set time, any hour', cells: ['yes', 'varies', 'yes'] },
  { row: 'Easy with luggage, kids or a group', cells: ['yes', 'varies', 'yes'] },
  { row: 'Work or rest on the way', cells: ['yes', 'yes', 'no'] },
];

const airports = [
  { title: 'LaGuardia', body: 'Usually the closest NYC airport from Greenwich and Stamford — often under an hour outside rush hour.' },
  { title: 'JFK', body: 'For long-haul international flights. Add roughly half an hour compared with LaGuardia.' },
  { title: 'Newark', body: 'For United flights and routes only offered there. Allow extra time to cross Manhattan or go around it.' },
];

// TODO(owner): confirm Hartford coverage and the Metro-North comparison wording.
const faqs = [
  {
    q: 'Do you provide car service from New York City to Connecticut?',
    a: 'Yes. We drive between any address in New York City and towns across Connecticut, from Greenwich and Stamford to New Haven and Hartford.',
  },
  {
    q: 'How much is a car service from Manhattan to Greenwich or Stamford?',
    a: 'It depends on your exact addresses, the vehicle, any tolls on the New York side, the congestion charge below 60th Street and the time of day. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'How long does it take to drive from Manhattan to Stamford?',
    a: 'About 55 to 70 minutes from Midtown outside rush hour, and 80 to 110 minutes on weekday evenings.',
  },
  {
    q: 'Is Metro-North faster than a car to Connecticut?',
    a: 'From Grand Central at rush hour, an express train to Stamford is often quicker. A car wins when you start or finish away from a station, travel late at night, or have luggage or a group.',
  },
  {
    q: 'Which airport is closest to Greenwich and Stamford?',
    a: 'LaGuardia is usually the closest of the three NYC airports. We also drive Connecticut travelers to JFK and Newark.',
  },
  {
    q: 'Do you drive to New Haven and Yale?',
    a: 'Yes. New Haven is about an hour and a half from Midtown outside rush hour — popular for university visits, move-in days and hospital appointments.',
  },
  {
    q: 'Can you pick me up in Connecticut and drive me into the city?',
    a: 'Yes. We drive both directions. Book with your Connecticut pickup address and your New York destination.',
  },
];

const related = [
  { href: '/services/airport/lga', title: 'LaGuardia car service', body: 'The nearest NYC airport to Fairfield County.' },
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'All our routes out of New York.' },
  { href: '/services/areas/new-jersey', title: 'New Jersey car service', body: 'The other side of the Hudson.' },
  { href: '/services/airport/hpn', title: 'Westchester Airport car service', body: 'Often the quickest airport from Greenwich and Stamford.' },
  { href: '/services/areas/westchester', title: 'Westchester car service', body: 'Next door, from Rye to Tarrytown.' },
  { href: '/services/routes/nyc-to-boston', title: 'NYC to Boston', body: 'Carry on up I-95 — about four hours from Midtown.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and First Class cars.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function ConnecticutCarServicePage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Long-distance car service', url: `${site}/services/long-distance` },
          { name: 'Connecticut car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="Connecticut Car Service"
        description={description}
        url={`${site}${path}`}
        areaServed={[
          { type: 'State', name: 'Connecticut', sameAs: 'https://www.wikidata.org/wiki/Q779' },
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#ct-title', '#ct-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Long distance', href: '/services/long-distance' }, { name: 'Connecticut' }]}
        eyebrow="New York ↔ Connecticut"
        idPrefix="ct"
        h1="Connecticut Car Service"
        answer={`${SITE_NAME} drives between New York City and Connecticut in both directions — Greenwich in under an hour, Stamford in about an hour, New Haven in an hour and a half — plus LaGuardia and JFK, in one private car from door to door.`}
        ctaHref={bookHref}
        ctaLabel="Get my Connecticut price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Regions */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="where-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="where-heading"
            eyebrow="Where we drive"
            title="Where we drive in Connecticut"
            intro="Most of our Connecticut rides are along the I-95 corridor in Fairfield and New Haven counties."
          />
          <InfoCards items={regions} />
        </div>
      </section>

      {/* Drive times */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="Drive times from Manhattan to Connecticut towns"
            intro="Typical times from Midtown. Getting through the Bronx is the main variable; once in Connecticut, traffic usually eases."
          />
          <TextTable caption="Drive times from Midtown Manhattan to Connecticut towns" head={['To', 'Distance', 'Off-peak', 'Rush hour']} rows={driveTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate road distances and times; live traffic decides on the day.</p>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="cost-heading" eyebrow="Pricing" title="How much is a car service between NYC and Connecticut?" />
          <FactorTable caption="What affects the price of a car service between New York and Connecticut" rows={priceFactors} />
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            <Link href={bookHref} className="font-semibold text-brand-accent hover:underline">Enter your trip</Link> for an
            estimate. We confirm the fare before the ride.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Car service vs Metro-North and driving yourself"
            intro="Metro-North is excellent between Grand Central and a station near you. A car covers the rest — late nights, luggage and addresses away from the line."
          />
          <ComparisonTable
            caption="How a car service compares with Metro-North and driving between New York and Connecticut"
            columns={['Car service', 'Metro-North', 'Drive yourself']}
            rows={comparison}
          />
        </div>
      </section>

      {/* Airports */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="airports-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="airports-heading" eyebrow="Airports" title="Airport car service from Connecticut" />
          <InfoCards items={airports} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
              Book a Connecticut ride
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
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Connecticut car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related airports and routes" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
