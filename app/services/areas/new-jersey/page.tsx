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

const path = '/services/areas/new-jersey';
const title = 'New Jersey Car Service to & from NYC | Black Car Service';
const description =
  'Private car service between New York City and New Jersey: Jersey City, Hoboken, Montclair, Morristown, Princeton and the Shore, plus Newark Airport.';
const bookHref = '/book?service=point-to-point';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const regions = [
  { title: 'Hudson waterfront', spec: 'Jersey City · Hoboken · Weehawken', body: 'Across the river from Manhattan — often quicker by car than it looks on a map, and a short hop to Newark Airport.' },
  { title: 'Bergen County', spec: 'Fort Lee · Englewood · Hackensack', body: 'Over the George Washington Bridge from upper Manhattan and the Bronx, and well placed for LaGuardia.' },
  { title: 'Essex and Morris', spec: 'Montclair · Short Hills · Morristown', body: 'Leafy commuter towns and the corporate campuses along Routes 78 and 287.' },
  { title: 'Central Jersey', spec: 'Princeton · New Brunswick', body: 'The university, Route 1 offices and Rutgers — about an hour or a little more from Midtown.' },
  { title: 'The Jersey Shore', spec: 'Red Bank · Asbury Park · Long Branch', body: 'Summer weekends and beach houses down the Garden State Parkway.' },
  { title: 'Atlantic City', spec: 'Casinos · Convention Center', body: 'About two to two and a half hours from Manhattan, door to door.' },
];

// From Midtown Manhattan. Rounded public-map estimates.
const driveTimes: string[][] = [
  ['Jersey City', '6 mi', '20–30 min', '35–55 min'],
  ['Hoboken', '5 mi', '20–30 min', '35–55 min'],
  ['Fort Lee', '10 mi', '25–35 min', '40–70 min'],
  ['Montclair', '17 mi', '35–45 min', '55–85 min'],
  ['Short Hills', '22 mi', '40–50 min', '60–90 min'],
  ['Morristown', '33 mi', '50–60 min', '70–100 min'],
  ['New Brunswick', '38 mi', '55–70 min', '80–110 min'],
  ['Princeton', '55 mi', '75–90 min', '100–130 min'],
  ['Red Bank', '45 mi', '60–75 min', '85–120 min'],
  ['Atlantic City', '125 mi', '2–2.5 h', '2.5–3.5 h'],
];

const priceFactors = [
  { factor: 'Which crossing', detail: 'The Lincoln and Holland Tunnels, the George Washington Bridge and the Staten Island bridges all lead to New Jersey. We pick the quickest for your trip.' },
  { factor: 'Direction', detail: 'The Port Authority crossings charge tolls only in the New York-bound direction, so the ride home from New Jersey into the city carries a toll that the ride out does not.' },
  { factor: 'Turnpike and Parkway', detail: 'Trips further south or to the Shore use the New Jersey Turnpike or Garden State Parkway, which are tolled.' },
  { factor: 'Congestion charge', detail: 'Rides that start or end in Manhattan south of 60th Street include the congestion pricing charge for for-hire vehicles.' },
  { factor: 'Vehicle and distance', detail: 'A sedan to Hoboken and an SUV to Atlantic City are very different trips. We price your exact addresses and car.' },
];

const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Door to door', cells: ['yes', 'no', 'no', 'yes'] },
  { row: 'Booked for a set time', cells: ['yes', 'no', 'no', 'varies'] },
  { row: 'Works late at night', cells: ['yes', 'varies', 'varies', 'varies'] },
  { row: 'Easy with luggage or kids', cells: ['yes', 'no', 'varies', 'yes'] },
  { row: 'Reaches suburbs away from stations', cells: ['yes', 'no', 'varies', 'yes'] },
];

const airportTrips = [
  { title: 'Newark Airport', body: 'The home airport for most of New Jersey: 15–25 minutes from Jersey City, under an hour from Morristown and Princeton.' },
  { title: 'JFK from New Jersey', body: 'For flights only offered at JFK. Allow 50–70 minutes from the Hudson waterfront outside rush hour, more from further west.' },
  { title: 'LaGuardia from New Jersey', body: 'Often the easier New York airport from Bergen County, across the George Washington Bridge.' },
];

// TODO(owner): confirm Shore/Atlantic City coverage and the late-night answer.
const faqs = [
  {
    q: 'Do you provide car service from New York City to New Jersey?',
    a: 'Yes. We drive between any address in New York City and towns across New Jersey, from Jersey City and Hoboken to Princeton, the Shore and Atlantic City.',
  },
  {
    q: 'How much is a car service from Manhattan to New Jersey?',
    a: 'It depends on the town, the crossing, tolls, the vehicle and the time of day. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'How long does it take to get from Manhattan to Hoboken or Jersey City by car?',
    a: 'Usually 20 to 30 minutes from Midtown outside rush hour, and 35 to 55 minutes when the tunnels are busy.',
  },
  {
    q: 'Is it faster to take PATH or a car to Jersey City?',
    a: 'From near a PATH station, PATH is often quicker at rush hour. From elsewhere in Manhattan, with luggage, late at night or to an address away from the stations, a car is usually easier.',
  },
  {
    q: 'Do you pick up in New Jersey for JFK and LaGuardia?',
    a: 'Yes. We drive New Jersey travelers to all three NYC airports. Newark is closest for most of the state, but some flights only leave from JFK or LaGuardia.',
  },
  {
    q: 'Can you drive from New Jersey to Philadelphia or Washington, DC?',
    a: 'Yes. Central Jersey is roughly halfway between New York and Philadelphia, and we continue to Washington, DC as well.',
  },
  {
    q: 'Do you drive to the Jersey Shore and Atlantic City?',
    a: 'Yes. Red Bank and Asbury Park are about an hour to an hour and a half from Midtown outside rush hour; Atlantic City is about two to two and a half hours.',
  },
  {
    q: 'Can I book a late-night ride home to New Jersey?',
    a: 'Yes. We run 24/7. Book ahead for a set time, or call or WhatsApp us for a ride at short notice.',
  },
];

const related = [
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'New Jersey’s main airport, minutes from the waterfront.' },
  { href: '/services/routes/nyc-to-philadelphia', title: 'NYC to Philadelphia', body: 'Straight down the Turnpike, about two hours.' },
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'All our routes out of New York.' },
  { href: '/services/areas/connecticut', title: 'Connecticut car service', body: 'The other direction — Greenwich to New Haven.' },
  { href: '/services/airport/teb', title: 'Teterboro car service', body: 'Private flights in Bergen County.' },
  { href: '/services/areas/manhattan', title: 'Manhattan car service', body: 'Across the Hudson, pickups anywhere on the island.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function NewJerseyCarServicePage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Long-distance car service', url: `${site}/services/long-distance` },
          { name: 'New Jersey car service', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="New Jersey Car Service"
        description={description}
        url={`${site}${path}`}
        areaServed={[
          { type: 'State', name: 'New Jersey', sameAs: 'https://www.wikidata.org/wiki/Q1408' },
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
          { type: 'Airport', name: 'Newark Liberty International Airport', sameAs: 'https://www.wikidata.org/wiki/Q16564' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#nj-title', '#nj-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Long distance', href: '/services/long-distance' }, { name: 'New Jersey' }]}
        eyebrow="New York ↔ New Jersey"
        idPrefix="nj"
        h1="New Jersey Car Service"
        answer={`${SITE_NAME} drives between New York City and New Jersey in both directions — Hoboken and Jersey City in about half an hour, Morristown in about an hour, Princeton in an hour and a quarter — plus Newark Airport and the Shore, in one private car.`}
        ctaHref={bookHref}
        ctaLabel="Get my New Jersey price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Regions */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="where-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="where-heading"
            eyebrow="Where we drive"
            title="Where we drive in New Jersey"
            intro="Any address in the state works. These are the areas New York riders travel to and from most."
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
            title="Drive times from Manhattan to New Jersey towns"
            intro="Typical times from Midtown. Evening traffic into the tunnels and onto the George Washington Bridge is the main variable."
          />
          <TextTable caption="Drive times from Midtown Manhattan to New Jersey towns" head={['To', 'Distance', 'Off-peak', 'Rush hour']} rows={driveTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate road distances and times; live traffic decides on the day.</p>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="cost-heading" eyebrow="Pricing" title="How much is a car service between NYC and New Jersey?" />
          <FactorTable caption="What affects the price of a car service between New York and New Jersey" rows={priceFactors} />
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            <Link href={bookHref} className="font-semibold text-brand-accent hover:underline">Enter your trip</Link> for an
            estimate. We confirm the fare before the ride.
          </p>
        </div>
      </section>

      {/* Airports */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="airports-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="airports-heading"
            eyebrow="Airports"
            title="Newark Airport and NYC airport transfers from New Jersey"
          />
          <InfoCards items={airportTrips} tone="tint" />
          <p className="mt-6 text-sm text-brand-muted">
            Terminals, drive times and a pickup planner are on the{' '}
            <Link href="/services/airport/ewr" className="font-semibold text-brand-accent hover:underline">Newark airport page</Link>.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Car service vs PATH, NJ Transit and driving yourself"
            intro="PATH and NJ Transit are hard to beat from station to station at rush hour. A car covers everything else."
          />
          <ComparisonTable
            caption="How a car service compares with PATH, NJ Transit and driving between New York and New Jersey"
            columns={['Car service', 'PATH', 'NJ Transit', 'Drive yourself']}
            rows={comparison}
          />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
              Book a New Jersey ride
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
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="New Jersey car service FAQs" />
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
