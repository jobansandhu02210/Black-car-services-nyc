import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import {
  AirportServiceJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
  HowToJsonLd,
  SpeakableJsonLd,
} from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { ComparisonTable, type Cell } from '@/components/ComparisonTable';
import {
  AirportHero,
  DriveTimeTable,
  FactorTable,
  FaqList,
  InfoCards,
  RelatedLinks,
  StepsList,
  TerminalCards,
  airportBookHref,
} from '@/components/AirportSections';
import { TerminalFinder } from '@/components/TerminalFinder';
import { PickupPlanner } from '@/components/PickupPlanner';
import { AIRPORTS } from '@/lib/airports';
import { ogDefaults } from '@/lib/og';

const airport = AIRPORTS.EWR;
const path = airport.path;
const bookHref = airportBookHref(airport);
const title = 'Newark Airport Car Service (EWR) | Black Car Service';
const description =
  'Private car service between Newark Airport and Manhattan, Jersey City, Hoboken, Princeton and Philadelphia. Flight-tracked pickups at every terminal.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const priceFactors = [
  { factor: 'Which side of the Hudson', detail: 'Trips within New Jersey avoid the river crossings entirely. Trips to or from Manhattan and Brooklyn use a tunnel or bridge, which adds both time and tolls.' },
  { factor: 'Direction of travel', detail: 'The Port Authority tunnels and bridges collect tolls only in the New York-bound direction, so a ride from Newark into Manhattan pays a crossing toll that the ride out does not.' },
  { factor: 'Manhattan congestion charge', detail: 'Rides that begin or end south of 60th Street — Lower Manhattan via the Holland Tunnel, for example — include the congestion pricing charge for for-hire vehicles.' },
  { factor: 'Vehicle', detail: 'A sedan fits most travelers. An SUV costs more but takes up to six people, which often beats two separate cars.' },
  { factor: 'Turnpike and time of day', detail: 'New Jersey Turnpike tolls apply on some routes, and the tunnel approaches are slowest on weekday evenings.' },
  { factor: 'Waiting and stops', detail: 'Waiting beyond your pickup or landing time and any stop on the way should be in the quote. Tell us when you book.' },
];

const comparisonColumns = ['Black car', 'Taxi', 'Rideshare', 'AirTrain + NJ Transit'];
const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Booked ahead for a set time', cells: ['yes', 'no', 'varies', 'no'] },
  { row: 'Price agreed before you ride', cells: ['yes', 'varies', 'varies', 'yes'] },
  { row: 'Adjusts to a late or early landing', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'No transfers with your luggage', cells: ['yes', 'yes', 'yes', 'no'] },
  { row: 'Unaffected by AirTrain construction', cells: ['yes', 'yes', 'yes', 'no'] },
  { row: 'Same booking for Princeton or Philadelphia', cells: ['yes', 'varies', 'varies', 'varies'] },
];

// Capacities match VEHICLE_CAPACITY in lib/booking-estimate-server.ts.
const vehicles = [
  { title: 'Executive Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'Covers most Newark arrivals heading into Manhattan or across New Jersey.' },
  { title: 'First Class SUV', spec: 'Up to 6 passengers · 6 bags', body: 'For long-haul luggage, families back from Europe or a team landing on the same United flight.' },
  { title: 'First Class Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'For visiting clients and executives arriving on international flights into Terminal B or C.' },
];

const steps = [
  { name: 'Enter the trip', text: 'Choose Airport and Newark, then add your address, date and time — and the flight number for an arrival.' },
  { name: 'Choose the car', text: 'Sedan for most trips; SUV for more people or bags; First Class for clients.' },
  { name: 'See the estimate', text: 'An estimate shows as you book, and we confirm the fare with you before the ride.' },
  { name: 'Meet your driver', text: 'Your driver’s name, car and plate are texted to you ahead of pickup, with the meeting point.' },
];

// TODO(owner): confirm flight tracking, meeting point and the Jersey City/Hoboken answer.
const faqs = [
  {
    q: 'How much is a car service from Manhattan to Newark Airport?',
    a: 'It depends on where in Manhattan you start, the vehicle, tolls, the congestion charge below 60th Street and the time of day. The ride out to Newark avoids the inbound tunnel toll. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'How long does it take to get from Newark Airport to Manhattan?',
    a: 'About 35 to 50 minutes to Midtown outside rush hour, and 60 to 90 minutes on weekday evenings when the Lincoln and Holland Tunnel approaches back up. Lower Manhattan is often a little quicker via the Holland Tunnel.',
  },
  {
    q: 'Is Newark or JFK better if I live in Manhattan?',
    a: 'From the West Side, Lower Manhattan, Jersey City and Hoboken, Newark is often the shorter drive. From the East Side, Brooklyn and Queens, JFK or LaGuardia usually wins. United flyers will mostly be at Newark either way.',
  },
  {
    q: 'Is the AirTrain at Newark Airport running?',
    a: 'The current AirTrain is being replaced by a new system due around 2030. Until then, parts of the line are swapped for shuttle buses on weekdays at set times, with pauses around busy travel seasons. Check the Port Authority’s AirTrain Newark page before you rely on it.',
  },
  {
    q: 'Which terminal is United at Newark?',
    a: 'Most United flights use Terminal C, United’s hub. A few use Terminal A, which opened in 2023. American, JetBlue and Air Canada are in Terminal A, and most other international airlines are in Terminal B.',
  },
  {
    q: 'Where will my driver meet me at Newark Airport?',
    a: 'We confirm the meeting point before you land: inside the arrivals area after baggage claim, or at the curb once you have your bags. Terminal A has its own roadway, so the terminal matters.',
  },
  {
    q: 'What happens if my Newark flight is delayed?',
    a: 'Add your flight number when you book. We follow the flight and time the pickup to your actual landing, including long international delays.',
  },
  {
    q: 'How early should I leave Manhattan for a Newark flight?',
    a: 'Aim to be at the terminal two hours before a domestic flight and three before an international one, then add the drive and a 30-minute cushion. For a 7 pm international flight from Midtown on a weekday, a pickup around 2 pm is sensible.',
  },
  {
    q: 'Can you drive from Newark Airport to Princeton or Philadelphia?',
    a: 'Yes. Princeton is usually under an hour from Newark, and Philadelphia about an hour and a half outside rush hour. Both are door to door in one car.',
  },
  {
    q: 'Do you pick up at Newark for Jersey City and Hoboken?',
    a: 'Yes. Jersey City is often 15 to 25 minutes from Newark Airport and Hoboken about 20 to 30 — one of the shortest airport rides we do.',
  },
];

const related = [
  { href: '/services/airport/jfk', title: 'JFK car service', body: 'Most long-haul airlines and JetBlue’s home terminal.' },
  { href: '/services/airport/teb', title: 'Teterboro car service', body: 'Private flights about 15 miles north of Newark.' },
  { href: '/services/airport', title: 'Compare NYC airports', body: 'Drive times and terminals for JFK, LGA and EWR.' },
  { href: '/services/areas/new-jersey', title: 'New Jersey car service', body: 'Newark to Princeton, Morristown, Short Hills and the Shore.' },
  { href: '/services/routes/nyc-to-philadelphia', title: 'NYC to Philadelphia', body: 'Door to door, about two hours from Midtown.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function NewarkAirportCarServicePage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'Newark airport car service', url: `${site}${path}` },
        ]}
      />
      <AirportServiceJsonLd
        name="Newark Airport Car Service"
        description={description}
        url={`${site}${path}`}
        airportName="Newark Liberty International Airport"
        airportWikidata="https://www.wikidata.org/wiki/Q16564"
        iataCode="EWR"
      />
      <HowToJsonLd name="How to book a car service to or from Newark Airport" steps={steps} />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#ewr-title', '#ewr-answer']} />

      <AirportHero
        airport={airport}
        idPrefix="ewr"
        h1="Newark Airport Car Service"
        answer={`${SITE_NAME} drives you between Newark Liberty and Manhattan, Brooklyn and towns across New Jersey, as well as on to Princeton and Philadelphia. With the AirTrain under construction until about 2030, a booked car is the one way in or out that skips the transfers — Midtown is usually 35 to 90 minutes away.`}
        ctaLabel="Get my Newark price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Cost */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="cost-heading"
            eyebrow="Pricing"
            title="How much is a car service to Newark Airport?"
            intro="Newark fares depend more on the river than on the miles. Here is what changes the price."
          />
          <FactorTable caption="What affects the price of a Newark Airport car service" rows={priceFactors} />
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            The quickest way to a real number is to{' '}
            <Link href={bookHref} className="font-semibold text-brand-accent hover:underline">enter your trip</Link>. The
            estimate updates as you go, and we confirm the fare before anything is booked.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Newark airport car service vs AirTrain, NJ Transit and taxi"
            intro="Newark is the one NYC airport with a train station — but between 2026 and 2028 the link to it is a construction site."
          />
          <ComparisonTable caption="How a booked black car compares with other ways to and from Newark Airport" columns={comparisonColumns} rows={comparison} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">AirTrain Newark during construction</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                The monorail linking the terminals to the rail station is being replaced. On many weekdays, part of the
                route runs on shuttle buses at set hours. It works, but it adds a change and some uncertainty.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">NJ Transit and Amtrak</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                From the airport station, NJ Transit and Amtrak run to New York Penn Station and south toward Princeton and
                Philadelphia. Good value when you travel light and your destination is near a station.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Taxi and rideshare</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Newark taxis leave from dispatcher stands at each terminal; New York trips add tolls and surcharges.
                Rideshare uses marked pickup zones and prices rise when big international arrivals land together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terminals */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="terminals-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="terminals-heading"
            eyebrow="Terminals"
            title="Newark terminals and where your driver meets you"
            intro="Newark has three terminals. A is the new building on its own roadway; B and C are next to each other on the main loop."
          />
          <div className="mb-10">
            <TerminalFinder initialAirport="EWR" />
          </div>
          <TerminalCards
            airport={airport}
            fallbackTitle="United, but which terminal?"
            fallbackBody="Most United flights use Terminal C, but some use A. Add your flight number when you book and we check the terminal before the car heads to the airport."
          />
        </div>
      </section>

      {/* Drive times */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="Newark Airport drive times by town and neighborhood"
            intro="Typical door-to-door times by car. Trips into Manhattan depend on the tunnels; trips within New Jersey depend on the Turnpike and Route 78."
          />
          <DriveTimeTable airport={airport} />
          <p className="mt-6 text-sm text-brand-muted">
            Approximate road distances and times; live traffic decides on the day. Staying in New Jersey?{' '}
            <Link href="/services/areas/new-jersey" className="font-semibold text-brand-accent hover:underline">
              See our New Jersey car service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="fleet-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="fleet-heading" eyebrow="Vehicles" title="Newark black car fleet: vehicles and capacity" />
          <InfoCards items={vehicles} />
          <Link href="/fleet" className="mt-8 inline-block font-display text-sm font-bold text-brand-accent hover:underline">
            See every vehicle →
          </Link>
        </div>
      </section>

      {/* Corporate */}
      <section className="bg-brand-ink py-16 text-brand-white lg:py-24" aria-labelledby="corporate-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-accent-soft mb-3">Business travel</p>
            <h2 id="corporate-heading" className="text-4xl lg:text-5xl text-balance">
              Corporate car service at Newark Airport
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-silver">
              Newark serves two business markets at once: Manhattan offices, and the corporate campuses along Route 78, Route
              287 and the Route 1 corridor near Princeton. We drive both from the same booking.
            </p>
          </div>
          <ul className="space-y-4 self-center">
            {[
              'International arrivals tracked through customs delays',
              'Pickups for visitors heading to New Jersey offices',
              'Bookings for colleagues without sharing logins',
              'An invoice for every ride, payable by card',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent-soft" />
                <span className="text-brand-tint">{item}</span>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="font-display font-bold text-brand-white underline-offset-4 hover:underline">
                Talk to us about company travel →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* When to book */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="when-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="when-heading" eyebrow="Planning" title="When to book your Newark car, and what is included" />
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">Booking ahead</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Online bookings need at least two hours’ notice. Evening transatlantic departures and early-morning
                arrivals from Europe fill up first, so book those a day or more ahead.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Leaving for a flight</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Plan on three hours at the airport for international flights and two for domestic. Leaving Manhattan after
                3 pm on a weekday, give the tunnel approaches extra time — the planner below does this for you.
              </p>
            </div>
            <div>
              {/* TODO(owner): confirm what is included and the change/cancellation terms. */}
              <h3 className="text-lg text-brand-ink">Included with every ride</h3>
              <ul className="mt-2 space-y-1.5 text-brand-muted">
                <li>Flight followed for arrivals</li>
                <li>Help with your luggage</li>
                <li>Tolls and fees listed on your invoice</li>
                <li>Driver details sent before pickup</li>
              </ul>
              <p className="mt-3 text-sm text-brand-muted">Change of plans? Call or message us as soon as you know.</p>
            </div>
          </div>
          <div className="mt-12 max-w-2xl">
            <PickupPlanner airportCode="EWR" />
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="How it works" title="How to book Newark airport car service" />
          <StepsList steps={steps} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
              Book your Newark car
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center font-display text-sm font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Newark airport car service FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-tint py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related NYC airports and routes" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
