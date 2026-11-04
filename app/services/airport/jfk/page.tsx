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

const path = '/services/airport/jfk';
const title = 'JFK Car Service to & from NYC | Black Car Service';
const description =
  'Private car service between JFK and Manhattan, Brooklyn, New Jersey and Connecticut. Flight-tracked pickups, every terminal, sedans and SUVs. Book 24/7.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const airport = AIRPORTS.JFK;
const bookHref = airportBookHref(airport);

const priceFactors = [
  { factor: 'Distance and route', detail: 'Where you start or finish matters most. Midtown and Downtown Brooklyn are similar distances; New Jersey and Connecticut add mileage and time.' },
  { factor: 'Vehicle', detail: 'The Executive Sedan is the lowest fare, then the First Class SUV, then the First Class Sedan. Pick the smallest car that fits your people and bags.' },
  { factor: 'Tolls', detail: 'The Van Wyck and Belt Parkway are toll-free, but tunnels and many bridges are not. Trips from New Jersey or across the Hudson almost always include tolls.' },
  { factor: 'Manhattan congestion charge', detail: 'Rides that start or end south of 60th Street in Manhattan include the congestion pricing charge for for-hire vehicles.' },
  { factor: 'Time and waiting', detail: 'Rush-hour trips take longer, and extended waiting after a pickup time or landing can add to the fare.' },
  { factor: 'Extra stops', detail: 'Picking up a colleague on the way or stopping at a hotel is fine. Tell us when you book so it is part of the quote.' },
];

const comparisonColumns = ['Black car', 'Yellow taxi', 'Rideshare', 'AirTrain + rail'];
const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Booked ahead for a set time', cells: ['yes', 'no', 'varies', 'no'] },
  { row: 'Price agreed before you ride', cells: ['yes', 'varies', 'varies', 'yes'] },
  { row: 'Adjusts to a late or early landing', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'Door to door with your luggage', cells: ['yes', 'yes', 'yes', 'no'] },
  { row: 'One car for up to 6 people', cells: ['yes', 'no', 'varies', 'no'] },
  { row: 'Same booking for NJ, CT or Philadelphia', cells: ['yes', 'varies', 'varies', 'no'] },
];

// Capacities match VEHICLE_CAPACITY in lib/booking-estimate-server.ts.
const vehicles = [
  { title: 'Executive Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'Right for one or two travelers with checked bags. The most common choice for JFK.' },
  { title: 'First Class SUV', spec: 'Up to 6 passengers · 6 bags', body: 'For families, small teams, strollers, golf bags and long-haul luggage.' },
  { title: 'First Class Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'A newer, top-trim vehicle when you are collecting a client or senior executive.' },
];

const steps = [
  { name: 'Enter the trip', text: 'Choose Airport, pick JFK, add your pick-up address, date and time, and your flight number if you are landing.' },
  { name: 'Choose a vehicle', text: 'Sedan for most trips, SUV for more people or bags, First Class for clients and executives.' },
  { name: 'Review the estimate', text: 'You see an estimate while booking. We confirm the fare with you before the ride.' },
  { name: 'Get your driver details', text: 'Your driver’s name, car and plate are sent to your phone ahead of pickup.' },
];

// TODO(owner): confirm flight tracking, meeting point and booking-for-others answers.
const faqs = [
  {
    q: 'How much is a car service from Manhattan to JFK?',
    a: 'It depends on where in Manhattan you start, the vehicle, tolls, the congestion charge below 60th Street and the time of day. Enter your trip on our booking page for an estimate; we confirm the fare before the ride.',
  },
  {
    q: 'How long does it take to drive from JFK to Manhattan?',
    a: 'About 40 to 55 minutes to Midtown outside rush hour, and 60 to 90 minutes or more on weekday afternoons and evenings. Lower Manhattan and the Upper East Side are similar.',
  },
  {
    q: 'Is it cheaper to take a taxi or Uber from JFK?',
    a: 'For one person with a carry-on, a yellow taxi or rideshare is often cheaper. A booked black car makes more sense when you need a set pickup time, room for luggage, a car for up to six people, or a ride beyond Manhattan.',
  },
  {
    q: 'What happens if my JFK flight is delayed?',
    a: 'Give us your flight number when you book. We follow the flight and time the pickup to when you actually land, so an early or late arrival does not leave you without a car.',
  },
  {
    q: 'Where will my driver meet me at JFK?',
    a: 'We confirm the exact meeting point with you before you land: either inside the arrivals hall after baggage claim, or at the curb once you have your bags. Your driver’s name and number come by text.',
  },
  {
    q: 'Which terminal is my airline at JFK?',
    a: 'Delta is in Terminal 4, JetBlue in Terminal 5 and American in Terminal 8. Several international airlines are moving to the New Terminal One and the new Terminal 6 during 2026 and 2027, so check your airline’s app the day before.',
  },
  {
    q: 'How early should I leave Manhattan for a JFK flight?',
    a: 'Aim to reach the terminal two hours before a domestic flight and three hours before an international one, then add the drive time and a 30-minute buffer. For a 6 pm international departure from Midtown on a weekday, a pickup around 1 pm is sensible.',
  },
  {
    q: 'Can you take a group or a lot of luggage to JFK?',
    a: 'Yes. A First Class SUV seats up to six with six bags. For larger groups, a Sprinter Van seats up to 14.',
  },
  {
    q: 'Do you drive from JFK to New Jersey, Connecticut or Philadelphia?',
    a: 'Yes. We drive door to door from JFK to towns across New Jersey and Connecticut, and to Philadelphia and Washington, DC.',
  },
  {
    q: 'Can I book a JFK car for someone else?',
    a: 'Yes. Book with your details and add the traveler’s name, mobile number and flight in the special requests box. We coordinate the pickup with them directly.',
  },
];

const related = [
  { href: '/services/airport/lga', title: 'LaGuardia car service', body: 'Shorter drive from most of Manhattan and the Bronx.' },
  { href: '/services/airport/ewr', title: 'Newark airport car service', body: 'Often the easier airport from the West Side and New Jersey.' },
  { href: '/services/airport', title: 'Compare NYC airports', body: 'JFK, LGA and EWR side by side.' },
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'JFK to Philadelphia, DC, New Jersey and Connecticut.' },
  { href: '/services/areas/queens', title: 'Queens car service', body: 'Most of Queens is 10 to 30 minutes from JFK.' },
  { href: '/book', title: 'Book a ride', body: 'Get an estimate in a couple of minutes.' },
];

export default function JfkCarServicePage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Airport car service', url: `${site}/services/airport` },
          { name: 'JFK car service', url: `${site}${path}` },
        ]}
      />
      <AirportServiceJsonLd
        name="JFK Airport Car Service"
        description={description}
        url={`${site}${path}`}
        airportName="John F. Kennedy International Airport"
        airportWikidata="https://www.wikidata.org/wiki/Q8685"
        iataCode="JFK"
      />
      <HowToJsonLd name="How to book a car service to or from JFK" steps={steps} />
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#jfk-title', '#jfk-answer']} />

      <AirportHero
        airport={airport}
        idPrefix="jfk"
        h1="JFK Car Service NYC"
        answer={`${SITE_NAME} drives you between JFK and anywhere in New York City, New Jersey and Connecticut in a private sedan or SUV. Book ahead for a set pickup time, add your flight number, and your driver works around when you actually land. The drive to Midtown usually takes 40 to 90 minutes.`}
        ctaLabel="Get my JFK price"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Cost */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="cost-heading"
            eyebrow="Pricing"
            title="How much does a car service to JFK cost?"
            intro="A JFK fare comes down to six things. Knowing them helps you compare quotes and avoid surprises."
          />
          <FactorTable caption="What affects the price of a JFK car service" rows={priceFactors} />
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            The fastest way to a real number is to{' '}
            <Link href={bookHref} className="font-semibold text-brand-accent hover:underline">enter your trip</Link>. You see an
            estimate as you book, and we confirm the fare with you before the car is dispatched.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="JFK car service vs taxi, rideshare and AirTrain"
            intro="Every option gets you out of JFK. The right one depends on your bags, your group and how much the clock matters."
          />
          <ComparisonTable caption="How a booked black car compares with other ways to and from JFK" columns={comparisonColumns} rows={comparison} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">Yellow taxi</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Taxis between JFK and Manhattan charge a flat fare set by the city, plus surcharges, tolls and tip. Trips to
                Brooklyn, Queens or New Jersey run on the meter. Expect a line at the taxi stand at busy times.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Rideshare</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Convenient for light travelers, but prices rise when demand spikes, pickups are at a set zone, and the car
                that arrives may not fit a family’s luggage.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">AirTrain and rail</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                The AirTrain links every terminal to Jamaica (LIRR and subway) and Howard Beach (A train). It is the
                cheapest route, with at least one transfer and stairs or elevators with your bags.
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
            title="JFK terminals and where your driver meets you"
            intro="JFK is in the middle of a rebuild, and some airlines are changing terminals during 2026 and 2027. We check your flight before pickup, but it is worth confirming your terminal in the airline’s app the day before."
          />
          <div className="mb-10">
            <TerminalFinder initialAirport="JFK" />
          </div>
          <TerminalCards
            airport={airport}
            fallbackTitle="Not sure which terminal?"
            fallbackBody="Give us your flight number when you book. For departures we drop you at the right door; for arrivals we confirm the meeting point with you before you land — inside after baggage claim, or at the curb once you have your bags."
          />
        </div>
      </section>

      {/* Drive times */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="times-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="times-heading"
            eyebrow="Drive times"
            title="JFK drive times by neighborhood"
            intro="Typical door-to-door times by car. Weekday afternoons, Friday evenings and holiday weekends sit at the top of the rush-hour range or above it."
          />
          <DriveTimeTable airport={airport} />
          <p className="mt-6 text-sm text-brand-muted">
            Approximate road distances and times; live traffic decides on the day. Going further?{' '}
            <Link href="/services/routes/nyc-to-philadelphia" className="font-semibold text-brand-accent hover:underline">
              See our New York to Philadelphia service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="fleet-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="fleet-heading" eyebrow="Vehicles" title="JFK black car fleet: vehicles and capacity" />
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
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-accent-soft mb-3">For assistants and travel managers</p>
            <h2 id="corporate-heading" className="text-4xl lg:text-5xl text-balance">
              Corporate JFK car service in NYC
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-silver">
              Booking for an executive or a visiting team? Send us the itinerary once and we handle the rest: the flight
              is followed, the traveler gets the driver’s details directly, and you get one invoice per ride for your
              expense system.
            </p>
          </div>
          <ul className="space-y-4 self-center">
            {[
              'Book for someone else without sharing their account or login',
              'Several arrivals on one day timed to each flight',
              'An invoice for every ride, payable by card',
              'One phone number and WhatsApp for changes, any hour',
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
          <SectionHeading id="when-heading" eyebrow="Planning" title="When to book your JFK car, and what is included" />
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg text-brand-ink">Booking ahead</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Online bookings need at least two hours’ notice. For early-morning departures, holiday weekends and
                groups that need an SUV, book a day or more ahead. For anything sooner, call or WhatsApp us.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-brand-ink">Leaving for a flight</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">
                Plan to reach the terminal two hours before a domestic flight and three before an international one. Add
                the drive time from the table above and 30 minutes of buffer, more on weekday afternoons.
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
              <p className="mt-3 text-sm text-brand-muted">Plans changed? Call or message us as early as you can.</p>
            </div>
          </div>
          <div className="mt-12 max-w-2xl">
            <PickupPlanner airportCode="JFK" />
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="How it works" title="How to book JFK car service" />
          <StepsList steps={steps} />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-accent px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
              Book your JFK car
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
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="JFK car service FAQs" />
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
