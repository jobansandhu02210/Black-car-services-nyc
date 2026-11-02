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

const airport = AIRPORTS.LGA;
const path = airport.path;
const bookHref = airportBookHref(airport);
const title = 'LaGuardia Car Service (LGA) to & from NYC | Black Car Service';
const description =
  'Private car service between LaGuardia and Manhattan, Brooklyn, Queens, Connecticut and New Jersey. Terminals A, B and C, flight-tracked pickups. Book 24/7.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const priceFactors = [
  { factor: 'Where you are going', detail: 'LaGuardia is the closest airport to most of Manhattan, so the distance part of the fare is the smallest of the three NYC airports. Brooklyn, New Jersey and Connecticut add miles.' },
  { factor: 'Bridge choice', detail: 'The RFK (Triborough) Bridge is tolled; the Queensboro Bridge is free. Which one makes sense depends on where you start and on traffic at the time.' },
  { factor: 'Manhattan congestion charge', detail: 'Rides that begin or end south of 60th Street include the congestion pricing charge that applies to for-hire vehicles.' },
  { factor: 'Vehicle', detail: 'A sedan covers most LaGuardia trips. An SUV costs more but fits up to six people and six bags.' },
  { factor: 'Time of day', detail: 'The Grand Central Parkway and the bridges slow sharply at weekday rush hours, which adds time and can add to the fare.' },
  { factor: 'Waiting and stops', detail: 'Extra waiting beyond your pickup or landing time, or a stop on the way, should be part of the quote. Tell us when you book.' },
];

const comparisonColumns = ['Black car', 'Yellow taxi', 'Rideshare', 'Bus + subway'];
const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Booked ahead for a set time', cells: ['yes', 'no', 'varies', 'no'] },
  { row: 'Price agreed before you ride', cells: ['yes', 'no', 'varies', 'yes'] },
  { row: 'Adjusts to a late or early landing', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Picked up right outside your terminal', cells: ['yes', 'yes', 'varies', 'varies'] },
  { row: 'One car for up to 6 people', cells: ['yes', 'no', 'varies', 'no'] },
  { row: 'Same booking for Connecticut or New Jersey', cells: ['yes', 'varies', 'varies', 'no'] },
];

// Capacities match VEHICLE_CAPACITY in lib/booking-estimate-server.ts.
const vehicles = [
  { title: 'Executive Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'The usual LaGuardia car: one or two travelers, a short hop into the city, room for checked bags.' },
  { title: 'First Class SUV', spec: 'Up to 6 passengers · 6 bags', body: 'Families heading home from Florida, ski trips, a team flying back from a conference.' },
  { title: 'First Class Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'For the client or executive coming in on the morning shuttle who has a meeting an hour later.' },
];

const steps = [
  { name: 'Enter the trip', text: 'Choose Airport, pick LaGuardia, and add your address, date and time. For arrivals, include the flight number.' },
  { name: 'Pick the car', text: 'A sedan for most trips; an SUV once you are past three people or three suitcases.' },
  { name: 'Check the estimate', text: 'An estimate appears as you book. We confirm the fare with you before the ride.' },
  { name: 'Look out for the text', text: 'Your driver’s name, car and plate arrive by text before pickup, with the meeting point for arrivals.' },
];

// TODO(owner): confirm flight tracking, meeting point and booking-for-others answers.
const faqs = [
  {
    q: 'How much is a car service from Manhattan to LaGuardia?',
    a: 'It depends on your starting point, the vehicle, whether the route uses a tolled bridge, the congestion charge below 60th Street and the time of day. Enter your trip on the booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'How long does it take to get from LaGuardia to Midtown Manhattan?',
    a: 'About 25 to 35 minutes outside rush hour, and 45 to 70 minutes on weekday mornings and late afternoons. The Upper East Side is usually a little quicker; Lower Manhattan takes longer.',
  },
  {
    q: 'Is there a train to LaGuardia Airport?',
    a: 'No. LaGuardia has no rail link. The closest public options are the Q70 LaGuardia Link bus to Jackson Heights and Woodside, where you change to the subway or LIRR, and the M60 bus to upper Manhattan.',
  },
  {
    q: 'Which terminal are Delta, American and United at LaGuardia?',
    a: 'Delta uses Terminal C. American, United, Southwest and Air Canada use Terminal B. Terminal A, the old Marine Air Terminal, has a small number of airlines and is separate from the other two, so check your boarding pass.',
  },
  {
    q: 'Where will my driver meet me at LaGuardia?',
    a: 'We confirm the meeting point with you before you land: inside the arrivals area after baggage claim, or at the curb once you have your bags. Your driver’s name and number come by text.',
  },
  {
    q: 'What happens if my LaGuardia flight is delayed?',
    a: 'Add your flight number when you book. We follow the flight and time the pickup to your actual landing, which matters at LaGuardia where evening delays are common.',
  },
  {
    q: 'How early should I leave for a LaGuardia flight?',
    a: 'Plan to reach the terminal two hours before departure. For an 8 am flight from the Upper East Side, a pickup around 5 am leaves room for the drive, security and a small cushion. Use the planner on this page for your exact flight.',
  },
  {
    q: 'Is LaGuardia or JFK better if I live in Manhattan?',
    a: 'For domestic flights, LaGuardia is usually closer and quicker from Midtown, the East Side and the Bronx. Long-haul international flights mostly leave from JFK or Newark, because LaGuardia flights are largely limited to destinations within about 1,500 miles.',
  },
  {
    q: 'Can you drive from LaGuardia to Connecticut or New Jersey?',
    a: 'Yes. Greenwich and Stamford are often under an hour from LaGuardia outside rush hour, and we cover towns across New Jersey as well.',
  },
  {
    q: 'Can I book a LaGuardia pickup for a colleague?',
    a: 'Yes. Book with your details and put the traveler’s name, mobile number and flight in the special requests box. We coordinate the pickup with them and send you the confirmation.',
  },
];

const related = [
  { href: '/services/airport/jfk', title: 'JFK car service', body: 'For long-haul international flights and JetBlue’s home terminal.' },
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'United’s hub, and handy from the West Side and New Jersey.' },
  { href: '/services/airport', title: 'Compare NYC airports', body: 'Drive times and terminals for JFK, LGA and EWR.' },
  { href: '/services/areas/connecticut', title: 'Connecticut car service', body: 'LaGuardia to Greenwich, Stamford and beyond.' },
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and First Class cars.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function LaGuardiaCarServicePage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'LaGuardia car service', url: `${site}${path}` },
        ]}
      />
      <AirportServiceJsonLd
        name="LaGuardia Airport Car Service"
        description={description}
        url={`${site}${path}`}
        airportName="LaGuardia Airport"
        airportWikidata="https://www.wikidata.org/wiki/Q8977"
        iataCode="LGA"
      />
      <HowToJsonLd name="How to book a car service to or from LaGuardia" steps={steps} />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#lga-title', '#lga-answer']} />

      <AirportHero
        airport={airport}
        idPrefix="lga"
        h1="LaGuardia Car Service NYC"
        answer={`${SITE_NAME} runs private cars between LaGuardia and Manhattan, Brooklyn, Queens, New Jersey and Connecticut. It is the closest NYC airport to Midtown — usually 25 to 70 minutes by car — and the only one with no train, which is why a booked car is often the simplest way in or out.`}
        ctaLabel="Get my LaGuardia price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Cost */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="cost-heading"
            eyebrow="Pricing"
            title="How much is a car service to LaGuardia?"
            intro="LaGuardia trips are short on miles but sensitive to bridges and traffic. These are the things that move the fare."
          />
          <FactorTable caption="What affects the price of a LaGuardia car service" rows={priceFactors} />
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            For your exact trip,{' '}
            <Link href={bookHref} className="font-semibold text-brand-accent hover:underline">start a booking</Link> — the
            estimate updates as you change the car or add stops, and nothing is booked until we confirm the fare with you.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="LaGuardia car service vs taxi, rideshare and bus"
            intro="Without a rail link, every way out of LaGuardia uses the road. The difference is how much of the waiting and walking is yours."
          />
          <ComparisonTable caption="How a booked black car compares with other ways to and from LaGuardia" columns={comparisonColumns} rows={comparison} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">Yellow taxi</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                There is no flat fare at LaGuardia: taxis run on the meter, plus surcharges, any bridge toll and tip. Lines at
                the taxi stands build quickly when several flights land together.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Rideshare</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Pickups happen at marked rideshare zones, which can be a walk from baggage claim. Prices climb when arrivals
                bunch up in the evening.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Q70 and M60 buses</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                The Q70 LaGuardia Link runs to Jackson Heights and Woodside for the subway and LIRR; the M60 goes to upper
                Manhattan. Cheap, but you carry your bags through at least one change.
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
            title="LaGuardia terminals and where your driver meets you"
            intro="LaGuardia was rebuilt between 2016 and 2022 and now has three terminals. B and C sit side by side; Terminal A is on its own on the west side of the airport."
          />
          <div className="mb-10">
            <TerminalFinder initialAirport="LGA" />
          </div>
          <TerminalCards
            airport={airport}
            fallbackTitle="Flying from Terminal A?"
            fallbackBody="Tell us when you book. Terminal A has its own roadway, and getting there from B or C means looping back around the airport — so we make sure the car goes to the right building first time."
          />
        </div>
      </section>

      {/* Drive times */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="LaGuardia drive times by neighborhood"
            intro="Typical door-to-door times by car. Weekday 7–9 am and 4–7 pm are the slowest windows on the Grand Central Parkway and the East River bridges."
          />
          <DriveTimeTable airport={airport} />
          <p className="mt-6 text-sm text-brand-muted">
            Approximate road distances and times; live traffic decides on the day. Heading north?{' '}
            <Link href="/services/areas/connecticut" className="font-semibold text-brand-accent hover:underline">
              See our Connecticut car service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="fleet-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="fleet-heading" eyebrow="Vehicles" title="LaGuardia black car fleet: vehicles and capacity" />
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
              LaGuardia car service for business travelers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-silver">
              LaGuardia is the day-trip airport: Boston, Washington and Chicago and back before dinner. When the day runs on
              the shuttle schedule, the car on either end needs to be there already.
            </p>
          </div>
          <ul className="space-y-4 self-center">
            {[
              'Early-morning pickups booked the evening before',
              'Return pickup timed to the actual landing, not the schedule',
              'Bookings for colleagues and visitors without sharing logins',
              'An invoice for every ride, payable by card',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent-soft" />
                <span className="text-brand-tint">{item}</span>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="font-display font-bold text-brand-white underline-offset-4 hover:underline">
                Set up company travel with us →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* When to book */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="when-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="when-heading" eyebrow="Planning" title="When to book your LaGuardia car, and what is included" />
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">Booking ahead</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Online bookings need at least two hours’ notice. LaGuardia’s first departures leave around 6 am, so book
                early-morning cars the day before. For anything sooner, call or WhatsApp us.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Leaving for a flight</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Most LaGuardia flights are domestic, so two hours at the airport is usually enough. Security at Terminals B
                and C moves fast early and slows mid-afternoon; the planner below accounts for rush-hour traffic.
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
              <p className="mt-3 text-sm text-brand-muted">Flight changed? Message us and we will move the pickup.</p>
            </div>
          </div>
          <div className="mt-12 max-w-2xl">
            <PickupPlanner airportCode="LGA" />
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="How it works" title="How to book LaGuardia car service" />
          <StepsList steps={steps} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
              Book your LaGuardia car
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
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="LaGuardia car service FAQs" />
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
