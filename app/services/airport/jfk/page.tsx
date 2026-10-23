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
import { SkylineArt } from '@/components/SkylineArt';
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

const bookHref = `/book?service=airport&airport=${encodeURIComponent('JFK - John F. Kennedy')}`;

const priceFactors = [
  { factor: 'Distance and route', detail: 'Where you start or finish matters most. Midtown and Downtown Brooklyn are similar distances; New Jersey and Connecticut add mileage and time.' },
  { factor: 'Vehicle', detail: 'A Business Sedan costs less than an SUV or a First Class car. Pick the smallest car that fits your people and bags.' },
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

// JFK is mid-rebuild (New Terminal One and the new Terminal 6 open in phases; Terminal 7 is
// closing). Only name airlines whose terminal is stable. Re-check every few months.
const terminals = [
  {
    name: 'Terminal 4',
    airlines: 'Delta and many of its international partners.',
    note: 'The largest terminal at JFK. Arrivals and departures are on separate levels, so tell us whether you are flying out or landing.',
  },
  {
    name: 'Terminal 5',
    airlines: 'JetBlue and some of its partner airlines.',
    note: 'JetBlue’s home at JFK, right next to the new Terminal 6 that is opening in phases.',
  },
  {
    name: 'Terminal 8',
    airlines: 'American Airlines and oneworld partners, including British Airways.',
    note: 'On the north side of the airport, closest to the Van Wyck for trips back to Manhattan and the Bronx.',
  },
  {
    name: 'Terminal 1 and the New Terminal One',
    airlines: 'International airlines, moving from the old Terminal 1 to the New Terminal One as it opens.',
    note: 'The first gates of the New Terminal One are due to open from late 2026, with more added through 2030. Check your airline’s app for which building you are using.',
  },
  {
    name: 'Terminals 6 and 7',
    airlines: 'Airlines are moving out of Terminal 7 and into the new Terminal 6 in stages through 2026 and 2027.',
    note: 'If your airline used Terminal 7 before, confirm the terminal on your boarding pass the day before you fly.',
  },
];

// Approximate road distance and typical drive time to/from JFK (public-map estimates, rounded).
const driveTimes = [
  { place: 'Midtown Manhattan', miles: '16 mi', offPeak: '40–55 min', peak: '60–90 min' },
  { place: 'Lower Manhattan / FiDi', miles: '18 mi', offPeak: '40–55 min', peak: '60–90 min' },
  { place: 'Upper East Side', miles: '17 mi', offPeak: '40–55 min', peak: '60–90 min' },
  { place: 'Downtown Brooklyn', miles: '17 mi', offPeak: '35–50 min', peak: '50–80 min' },
  { place: 'Williamsburg', miles: '16 mi', offPeak: '35–45 min', peak: '50–75 min' },
  { place: 'Long Island City', miles: '14 mi', offPeak: '30–40 min', peak: '45–70 min' },
  { place: 'Jersey City / Hoboken', miles: '25 mi', offPeak: '50–70 min', peak: '75–110 min' },
  { place: 'Stamford, CT', miles: '40 mi', offPeak: '55–75 min', peak: '80–120 min' },
  { place: 'Princeton, NJ', miles: '65 mi', offPeak: '85–110 min', peak: '110–150 min' },
  { place: 'Philadelphia, PA', miles: '105 mi', offPeak: '2–2.5 h', peak: '2.5–3.5 h' },
];

// Capacities match VEHICLE_CAPACITY in lib/booking-estimate-server.ts.
const vehicles = [
  { name: 'Business Sedan', spec: 'Up to 3 passengers · 3 bags', body: 'Right for one or two travelers with checked bags. The most common choice for JFK.' },
  { name: 'Business SUV', spec: 'Up to 6 passengers · 6 bags', body: 'For families, small teams, strollers, golf bags and long-haul luggage.' },
  { name: 'First Class', spec: 'Sedan or SUV · same capacity', body: 'A newer, top-trim vehicle when you are collecting a client or senior executive.' },
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
    a: 'Aim to reach the terminal two hours before a domestic flight and three hours before an international one, then add the drive time and a 30-minute buffer. For a 6 pm international departure from Midtown, leaving around 1:30 pm is sensible.',
  },
  {
    q: 'Can you take a group or a lot of luggage to JFK?',
    a: 'Yes. A Business SUV seats up to six with six bags. For larger groups we can send two cars timed to arrive together.',
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
  { href: '/fleet', title: 'Our vehicles', body: 'Sedans, SUVs and First Class cars.' },
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint to-brand-sky/60">
        <SkylineArt className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full text-brand-blue/20 lg:h-44" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brand-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-brand-blue">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services/airport" className="hover:text-brand-blue">Airports</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-brand-ink">JFK</li>
            </ol>
          </nav>
          <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-4">
            John F. Kennedy International Airport
          </p>
          <h1 id="jfk-title" className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-brand-ink text-balance">
            JFK Car Service NYC
          </h1>
          <p id="jfk-answer" className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">
            {SITE_NAME} drives you between JFK and anywhere in New York City, New Jersey and Connecticut in a private
            sedan or SUV. Book ahead for a set pickup time, add your flight number, and your driver works around when
            you actually land. The drive to Midtown usually takes 40 to 90 minutes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={bookHref}
              className="rounded-lg bg-brand-blue px-6 py-3 text-center font-display font-bold text-brand-white hover:bg-brand-blue-hover"
            >
              Get my JFK price
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="rounded-lg bg-brand-white px-6 py-3 text-center font-display font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-blue"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="cost-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="cost-heading"
            eyebrow="Pricing"
            title="How much does a car service to JFK cost?"
            intro="A JFK fare comes down to six things. Knowing them helps you compare quotes and avoid surprises."
          />
          <div className="overflow-x-auto rounded-2xl border border-brand-line">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">What affects the price of a JFK car service</caption>
              <thead className="bg-brand-tint font-display text-brand-ink">
                <tr>
                  <th scope="col" className="w-1/4 px-5 py-4 font-bold">Factor</th>
                  <th scope="col" className="px-5 py-4 font-bold">What it means for your fare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {priceFactors.map((f) => (
                  <tr key={f.factor}>
                    <th scope="row" className="px-5 py-4 align-top font-semibold text-brand-ink">{f.factor}</th>
                    <td className="px-5 py-4 leading-relaxed text-brand-muted">{f.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-brand-muted leading-relaxed">
            The fastest way to a real number is to{' '}
            <Link href={bookHref} className="font-semibold text-brand-blue hover:underline">enter your trip</Link>. You see an
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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {terminals.map((t) => (
              <div key={t.name} className="rounded-2xl border border-brand-line p-6">
                <h3 className="text-xl text-brand-ink">{t.name}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-blue">{t.airlines}</p>
                <p className="mt-3 text-brand-muted leading-relaxed">{t.note}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-brand-tint p-6">
              <h3 className="text-xl text-brand-ink">Not sure which terminal?</h3>
              <p className="mt-3 text-brand-muted leading-relaxed">
                Give us your flight number when you book. For departures we drop you at the right door; for arrivals we
                confirm the meeting point with you before you land — inside after baggage claim, or at the curb once you
                have your bags.
              </p>
            </div>
          </div>
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
          <div className="overflow-x-auto rounded-2xl border border-brand-line bg-brand-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">Approximate distance and drive time between JFK and nearby neighborhoods and cities</caption>
              <thead className="bg-brand-tint font-display text-brand-ink">
                <tr>
                  <th scope="col" className="px-5 py-4 font-bold">To or from</th>
                  <th scope="col" className="px-5 py-4 font-bold">Distance</th>
                  <th scope="col" className="px-5 py-4 font-bold">Off-peak</th>
                  <th scope="col" className="px-5 py-4 font-bold">Rush hour</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-line">
                {driveTimes.map((d) => (
                  <tr key={d.place}>
                    <th scope="row" className="px-5 py-3.5 font-semibold text-brand-ink">{d.place}</th>
                    <td className="px-5 py-3.5 text-brand-muted">{d.miles}</td>
                    <td className="px-5 py-3.5 text-brand-muted">{d.offPeak}</td>
                    <td className="px-5 py-3.5 text-brand-muted">{d.peak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-brand-muted">
            Approximate road distances and times; live traffic decides on the day. Going further?{' '}
            <Link href="/services/routes/nyc-to-philadelphia" className="font-semibold text-brand-blue hover:underline">
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
          <div className="grid gap-5 md:grid-cols-3">
            {vehicles.map((v) => (
              <div key={v.name} className="rounded-2xl border border-brand-line p-6">
                <h3 className="text-xl text-brand-ink">{v.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-blue">{v.spec}</p>
                <p className="mt-3 text-brand-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
          <Link href="/fleet" className="mt-8 inline-block font-display text-sm font-bold text-brand-blue hover:underline">
            See every vehicle →
          </Link>
        </div>
      </section>

      {/* Corporate */}
      <section className="bg-brand-ink py-16 text-brand-white lg:py-24" aria-labelledby="corporate-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-sky mb-3">For assistants and travel managers</p>
            <h2 id="corporate-heading" className="text-3xl lg:text-[2.5rem] leading-tight text-balance">
              Corporate JFK car service in NYC
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-silver">
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
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-sky" />
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
        </div>
      </section>

      {/* How to book */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="How it works" title="How to book JFK car service" />
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.name}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue font-display font-bold text-brand-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg text-brand-ink">{s.name}</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={bookHref} className="rounded-lg bg-brand-blue px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-blue-hover">
              Book your JFK car
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-white px-6 py-3 text-center font-display text-sm font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-blue"
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
          <div className="divide-y divide-brand-line border-y border-brand-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="text-lg text-brand-ink">{f.q}</h3>
                  <span aria-hidden="true" className="mt-1 font-display text-xl text-brand-blue transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-brand-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-tint py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Related NYC airports and routes" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="block h-full rounded-xl bg-brand-white p-5 ring-1 ring-brand-line hover:ring-brand-blue">
                  <span className="font-display font-bold text-brand-ink">{r.title} →</span>
                  <span className="mt-1 block text-sm text-brand-muted">{r.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
