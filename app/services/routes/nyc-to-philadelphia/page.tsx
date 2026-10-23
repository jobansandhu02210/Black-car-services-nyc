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

const path = '/services/routes/nyc-to-philadelphia';
const title = 'NYC to Philadelphia Car Service | Black Car Service';
const description =
  'Private car service from New York City to Philadelphia: about 2 hours door to door to Center City, University City, the Main Line or PHL. Book 24/7.';
const bookHref = `/book?service=point-to-point&dropoff=${encodeURIComponent('Philadelphia, PA')}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

// To Center City Philadelphia. Rounded public-map estimates.
const driveTimes: string[][] = [
  ['Midtown Manhattan', '95 mi', '1 h 50 min – 2 h 15 min', '2 h 30 min – 3 h 30 min'],
  ['Lower Manhattan', '92 mi', '1 h 45 min – 2 h 10 min', '2 h 30 min – 3 h 15 min'],
  ['Downtown Brooklyn', '100 mi', '2 h – 2 h 20 min', '2 h 45 min – 3 h 45 min'],
  ['JFK Airport', '110 mi', '2 h – 2 h 30 min', '2 h 45 min – 3 h 45 min'],
  ['LaGuardia Airport', '105 mi', '2 h – 2 h 25 min', '2 h 45 min – 3 h 45 min'],
  ['Newark Airport', '85 mi', '1 h 30 min – 1 h 45 min', '2 h – 2 h 45 min'],
];

const priceFactors = [
  { factor: 'Start and finish', detail: 'Newark to Center City is the shortest version of this trip; Brooklyn or JFK to the Main Line is among the longest. We price your exact addresses.' },
  { factor: 'Tolls', detail: 'Trips into Manhattan pay a Hudson crossing toll; the ride south uses the New Jersey Turnpike, and the Delaware River bridges into Pennsylvania are tolled on the way in.' },
  { factor: 'One way or round trip', detail: 'One way includes the driver’s return to New York. A day trip with the car waiting is booked as a round trip.' },
  { factor: 'Vehicle', detail: 'A sedan suits most trips; an SUV for groups, students moving in, or a lot of luggage.' },
  { factor: 'Stops', detail: 'A stop in Princeton or Trenton on the way should be part of the quote. Tell us when you book.' },
];

const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Door to door, no station', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Leave at the exact time you choose', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Luggage, boxes or a bike with no fuss', cells: ['yes', 'varies', 'no', 'varies'] },
  { row: 'Fastest station to station', cells: ['no', 'yes', 'no', 'no'] },
  { row: 'Private — just your group', cells: ['yes', 'no', 'no', 'no'] },
];

const dropoffs = [
  { title: 'Center City', body: 'Rittenhouse Square, Market Street offices, the Convention Center and the hotels around City Hall.' },
  { title: 'University City', body: 'Penn, Drexel and the hospital campuses west of the Schuylkill — popular for move-in days and visits.' },
  { title: 'The Main Line', body: 'Bryn Mawr, Villanova, Wayne and the towns along Lancaster Avenue.' },
  { title: 'Philadelphia International (PHL)', body: 'Drop-offs and pickups at PHL, about 15 minutes past Center City on the way in from New York.' },
  { title: 'South Jersey suburbs', body: 'Cherry Hill, Haddonfield and Moorestown, just across the Delaware from the city.' },
  { title: 'Stops on the way', body: 'Princeton, Trenton or a meeting near Route 1 — we can break the trip wherever you need.' },
];

// TODO(owner): confirm the round-trip/waiting answer.
const faqs = [
  {
    q: 'How long is the drive from New York City to Philadelphia?',
    a: 'About 1 hour 50 minutes to 2 hours 15 minutes from Midtown to Center City outside rush hour, and up to 3 hours 30 minutes on Friday afternoons or holiday weekends.',
  },
  {
    q: 'How much is a car service from NYC to Philadelphia?',
    a: 'It depends on your exact pickup and drop-off, tolls, the vehicle and whether it is one way or a round trip. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'Is the train faster than a car from New York to Philadelphia?',
    a: 'Amtrak is faster between Penn Station and 30th Street Station, usually 1 hour 10 minutes to 1 hour 30 minutes. Add getting to Penn Station, waiting for the train and a taxi at the other end, and a car is often close door to door — and easier with luggage.',
  },
  {
    q: 'Can you pick me up at JFK or Newark and drive me to Philadelphia?',
    a: 'Yes. Newark is the quickest airport for Philadelphia, about an hour and a half outside rush hour. Add your flight number and we follow the landing.',
  },
  {
    q: 'Can you drive me to Philadelphia airport (PHL)?',
    a: 'Yes. PHL is just past Center City coming from New York, so allow a little over two hours from Midtown outside rush hour.',
  },
  {
    q: 'Can I do a day trip to Philadelphia and come back the same day?',
    a: 'Yes. Book a round trip and tell us the return time. The driver waits or meets you at a set time for the ride home.',
  },
  {
    q: 'Do you drive from Philadelphia to New York?',
    a: 'Yes. Book with your Philadelphia pickup address and your New York destination — including JFK, LaGuardia or Newark.',
  },
  {
    q: 'Can you help with a college move-in at Penn or Drexel?',
    a: 'Yes. An SUV takes up to six bags and boxes along with passengers. Tell us roughly what you are bringing when you book.',
  },
];

const related = [
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'All our routes out of New York.' },
  { href: '/services/routes/nyc-to-washington-dc', title: 'NYC to Washington, DC', body: 'Keep going south — about four hours.' },
  { href: '/services/areas/new-jersey', title: 'New Jersey car service', body: 'Princeton and other stops on the way.' },
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'The closest NYC airport to Philadelphia.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and First Class cars.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function NycToPhiladelphiaPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Long-distance car service', url: `${site}/services/long-distance` },
          { name: 'NYC to Philadelphia', url: `${site}${path}` },
        ]}
      />
      <ServiceJsonLd
        name="New York City to Philadelphia Car Service"
        description={description}
        url={`${site}${path}`}
        serviceType="Long-distance car service"
        areaServed={[
          { type: 'City', name: 'New York City', sameAs: 'https://www.wikidata.org/wiki/Q60' },
          { type: 'City', name: 'Philadelphia', sameAs: 'https://www.wikidata.org/wiki/Q1345' },
        ]}
      />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#phl-title', '#phl-answer']} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Long distance', href: '/services/long-distance' }, { name: 'NYC to Philadelphia' }]}
        eyebrow="New York → Philadelphia"
        idPrefix="phl"
        h1="NYC to Philadelphia Car Service"
        answer={`${SITE_NAME} drives you from anywhere in New York City to anywhere in Philadelphia in one private car — about two hours from Midtown to Center City outside rush hour. No trip to Penn Station, no platform, no taxi at 30th Street.`}
        ctaHref={bookHref}
        ctaLabel="Get my Philadelphia price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Drive time */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="time-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="time-heading"
            eyebrow="Drive time"
            title="How long is the drive from New York to Philadelphia?"
            intro="Times to Center City. The New Jersey Turnpike carries most of the trip; the slowest part is usually getting out of New York."
          />
          <TextTable caption="Drive times from New York to Center City Philadelphia" head={['From', 'Distance', 'Off-peak', 'Rush hour / Fridays']} rows={driveTimes} />
          <p className="mt-6 text-sm text-brand-muted">Approximate road distances and times; live traffic decides on the day.</p>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="cost-heading" eyebrow="Pricing" title="How much is a car service from NYC to Philadelphia?" />
          <div className="rounded-2xl bg-brand-white">
            <FactorTable caption="What affects the price of a New York to Philadelphia car service" rows={priceFactors} />
          </div>
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            <Link href={bookHref} className="font-semibold text-brand-blue hover:underline">Enter your trip</Link> for an
            estimate. We confirm the fare with you before the ride.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Car service vs Amtrak, NJ Transit and bus to Philadelphia"
          />
          <ComparisonTable
            caption="How a car service compares with train and bus between New York and Philadelphia"
            columns={['Car service', 'Amtrak', 'NJ Transit + SEPTA', 'Bus']}
            rows={comparison}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">Amtrak</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                The quickest option between Penn Station and 30th Street, at a little over an hour. Fares rise close to the
                day, and you still need to get to and from the stations.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">NJ Transit and SEPTA</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                The cheapest rail route: NJ Transit to Trenton, then SEPTA into Philadelphia. Expect around two and a half
                hours and a change of train.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Intercity bus</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Low fares and frequent departures, but the same Turnpike traffic as a car, plus fixed curbside stops at
                each end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drop-offs */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="where-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="where-heading"
            eyebrow="Destinations"
            title="Where we drop off in and around Philadelphia"
            intro="Any address works. These are the places New York riders ask for most."
          />
          <InfoCards items={dropoffs} tone="tint" />
        </div>
      </section>

      {/* The route */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="route-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="route-heading" eyebrow="On the road" title="The route from New York to Philadelphia" />
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">Leaving the city</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                From Manhattan we usually take the Lincoln or Holland Tunnel; from Brooklyn and Queens, the Verrazzano and
                Staten Island. Which one depends on traffic at the time.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Through New Jersey</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Most of the drive is the New Jersey Turnpike — steady, with service areas if you want a break or a coffee.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Into Philadelphia</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                We cross the Delaware into Pennsylvania and head for your address — no detour via 30th Street Station unless
                that is where you are going.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-blue px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-blue-hover">
              Book NYC to Philadelphia
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center font-display text-sm font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-blue"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="NYC to Philadelphia car service FAQs" />
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
