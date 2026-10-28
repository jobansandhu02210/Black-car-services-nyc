import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { FaqJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import { HeroBookingCard } from '@/components/HeroBookingCard';
import { VehiclePhoto } from '@/components/VehiclePhoto';
import { classPhoto, type VehicleClassId } from '@/lib/fleet';
import { SectionHeading } from '@/components/SectionHeading';
import { ComparisonTable, type Cell } from '@/components/ComparisonTable';
import { ogDefaults } from '@/lib/og';

const title = 'NYC Black Car Service | JFK, LGA, EWR & Long Distance';
const description =
  'Private black car service from anywhere in NYC to JFK, LaGuardia and Newark, plus door-to-door rides to NJ, Connecticut, Philadelphia and DC. Book 24/7.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: getSiteUrl() },
  openGraph: { ...ogDefaults, url: getSiteUrl(), title, description },
  twitter: { card: 'summary_large_image', title, description },
};

// TODO(owner): confirm each promise below is true for this business before launch.
const trust = [
  { title: 'Flight tracked', body: 'Airport pickups follow your actual landing time, not the schedule.' },
  { title: 'Door to door', body: 'One car from your address to the terminal or the city you are heading to.' },
  { title: 'No account needed', body: 'Book online, by phone or on WhatsApp in a couple of minutes.' },
  { title: 'A real person, 24/7', body: 'Call or message any hour and talk to someone who can help.' },
];

// Typical distance/time from Midtown Manhattan outside rush hour (rounded, public-map estimates).
const airports = [
  { code: 'JFK', name: 'JFK Airport', href: '/services/airport/jfk', miles: '≈ 15 mi', time: '45–75 min', note: 'Every terminal, arrivals and departures.' },
  { code: 'LGA', name: 'LaGuardia', href: '/services/airport/lga', miles: '≈ 8 mi', time: '25–45 min', note: 'Terminals B and C, early flights included.' },
  { code: 'EWR', name: 'Newark Liberty', href: '/services/airport/ewr', miles: '≈ 16 mi', time: '40–60 min', note: 'Across the Hudson without the train change.' },
];

const routes = [
  { to: 'Philadelphia, PA', href: '/services/routes/nyc-to-philadelphia', miles: '≈ 95 mi', time: '≈ 2 h' },
  { to: 'Washington, DC', href: '/services/routes/nyc-to-washington-dc', miles: '≈ 225 mi', time: '≈ 4 h 15 min' },
  { to: 'Princeton, NJ', href: '/services/areas/new-jersey', miles: '≈ 55 mi', time: '≈ 1 h 15 min' },
  { to: 'Morristown, NJ', href: '/services/areas/new-jersey', miles: '≈ 35 mi', time: '≈ 1 h' },
  { to: 'Stamford, CT', href: '/services/areas/connecticut', miles: '≈ 40 mi', time: '≈ 1 h' },
  { to: 'New Haven, CT', href: '/services/areas/connecticut', miles: '≈ 80 mi', time: '≈ 1 h 45 min' },
];

const comparison: { row: string; cells: Cell[] }[] = [
  { row: 'Picks you up at your door', cells: ['yes', 'yes', 'varies', 'no'] },
  { row: 'Drops you at the exact address', cells: ['yes', 'yes', 'yes', 'no'] },
  { row: 'Booked ahead for a set time', cells: ['yes', 'varies', 'no', 'yes'] },
  { row: 'Room for your luggage guaranteed', cells: ['yes', 'varies', 'varies', 'no'] },
  { row: 'Waits if your flight lands late', cells: ['yes', 'no', 'no', 'no'] },
  { row: 'No transfers on long trips', cells: ['yes', 'varies', 'varies', 'no'] },
];

// Capacities match VEHICLE_CAPACITY in lib/booking-estimate-server.ts.
const vehicles = [
  { name: 'Business Sedan', photo: 'business-sedan' as VehicleClassId, seats: 'Up to 3 passengers', bags: '3 bags', body: 'The usual choice for one or two travelers and a couple of suitcases.' },
  { name: 'Business SUV', photo: 'business-suv' as VehicleClassId, seats: 'Up to 6 passengers', bags: '6 bags', body: 'For families, small teams, ski bags and anyone packing heavy.' },
  { name: 'First Class', photo: 'first-sedan' as VehicleClassId, seats: 'Sedan or SUV', bags: 'Same capacity', body: 'A newer, top-trim vehicle for client pickups and executive travel.' },
];

const steps = [
  { title: 'Tell us the trip', body: 'Pick-up, destination or airport, date and time. Add a flight number for airport rides.' },
  { title: 'Choose the vehicle', body: 'Sedan for most trips, SUV for more people or bags, First Class for clients.' },
  { title: 'Get your price', body: 'You see an estimate as you book, and we confirm the fare before the ride.' },
  { title: 'Meet your driver', body: 'Driver name, car and plate come to your phone ahead of pickup.' },
];

const areas = [
  { name: 'New York City', body: 'All five boroughs — Manhattan, Brooklyn, Queens, the Bronx and Staten Island.', href: '/services/airport' },
  { name: 'New Jersey', body: 'Hoboken and Jersey City to Princeton, Morristown and the Shore.', href: '/services/areas/new-jersey' },
  { name: 'Connecticut', body: 'Greenwich, Stamford, Westport and New Haven.', href: '/services/areas/connecticut' },
  { name: 'Pennsylvania', body: 'Philadelphia, its suburbs and PHL airport.', href: '/services/routes/nyc-to-philadelphia' },
  { name: 'Washington, DC', body: 'Downtown DC, Capitol Hill, Georgetown and nearby Virginia.', href: '/services/routes/nyc-to-washington-dc' },
];

// TODO(owner): confirm the flight-delay and booking-for-someone-else answers match how you work.
const faqs = [
  {
    q: 'How do I book a black car in NYC?',
    a: 'Enter your pick-up, destination or airport, date and time on our booking page, choose a vehicle and send the request. You can also call or WhatsApp us. You do not need an account.',
  },
  {
    q: 'Which airports do you cover?',
    a: 'JFK, LaGuardia (LGA) and Newark Liberty (EWR), to and from anywhere in New York City, New Jersey and Connecticut.',
  },
  {
    q: 'Can I take a car service from New York to Philadelphia or Washington, DC?',
    a: 'Yes. We drive door to door from New York City to Philadelphia (about 2 hours) and Washington, DC (about 4 to 4.5 hours), as well as towns across New Jersey and Connecticut.',
  },
  {
    q: 'What happens if my flight is delayed?',
    a: 'Add your flight number when you book. We track the flight and time the pickup to when you actually land, so a delay does not leave you without a car.',
  },
  {
    q: 'How is the fare worked out?',
    a: 'The fare depends on distance, the vehicle you choose, tolls and the time of day. You see an estimate while booking and we confirm the final fare with you before the ride.',
  },
  {
    q: 'Can I book a car for someone else?',
    a: 'Yes. Book with your own details and put the traveler’s name and mobile number in the special requests box. We will coordinate the pickup with them directly.',
  },
];

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['#hero-title', '#hero-answer']} />

      {/* Hero */}
      <section className="border-b border-brand-line bg-brand-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-accent mb-4">
              Airports · Long distance · 24/7
            </p>
            <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-[72px] text-brand-ink text-balance">
              NYC Black Car Service
            </h1>
            <p className="mt-5 text-2xl lg:text-[30px] leading-tight uppercase text-brand-ink">
              Private airport transfers &amp; intercity travel
            </p>
            <p id="hero-answer" className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted">
              {SITE_NAME} picks you up anywhere in New York City and drives you to JFK, LaGuardia or Newark — or all the
              way to New Jersey, Connecticut, Philadelphia or Washington, DC. One private car, one driver, no transfers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a href={`tel:${CONTACT_PHONE_E164}`} className="font-display font-bold text-brand-ink hover:text-brand-accent">
                Call {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-brand-ink hover:text-brand-accent"
              >
                WhatsApp us
              </a>
            </div>
          </div>
          <HeroBookingCard />
        </div>
      </section>

      {/* Trust row */}
      <section aria-label="What every ride includes" className="border-b border-brand-line bg-brand-white">
        <ul className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trust.map((t) => (
            <li key={t.title} className="flex gap-3">
              <span aria-hidden="true" className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-accent" />
              <div>
                <p className="font-display text-base font-semibold text-brand-ink">{t.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">{t.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Airports */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="airports-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="airports-heading"
            eyebrow="Airport car service"
            title="Car service to JFK, LaGuardia and Newark"
            intro="Pickups from your door to departures, and from arrivals to wherever you are staying. Times below are typical from Midtown outside rush hour."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {airports.map((a) => (
              <Link
                key={a.code}
                href={a.href}
                className="group card-hover rounded-2xl border border-brand-line bg-brand-white p-6"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl font-bold text-brand-accent">{a.code}</span>
                  <span className="text-sm text-brand-muted">
                    {a.miles} · {a.time}
                  </span>
                </div>
                <h3 className="mt-4 text-xl text-brand-ink">{a.name} car service</h3>
                <p className="mt-2 text-brand-muted">{a.note}</p>
                <span className="mt-5 inline-block font-display text-sm font-bold text-brand-accent group-hover:underline">
                  {a.code} details →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-brand-muted">
            Not sure which airport is best for your flight?{' '}
            <Link href="/services/airport" className="font-semibold text-brand-accent hover:underline">
              Compare all three NYC airports
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Long distance */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="routes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="routes-heading"
            eyebrow="Long-distance car service"
            title="Long-distance car service from NYC"
            intro="From New York to the next city, without the station. When the train means a cab to Penn Station, a transfer and another cab at the other end, one car from door to door is often simpler — especially with bags, kids or a meeting to prepare for."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((r) => (
              <li key={r.to}>
                <Link
                  href={r.href}
                  className="card-hover flex items-center justify-between rounded-xl bg-brand-white px-5 py-4 ring-1 ring-brand-line hover:ring-brand-accent"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-brand-muted">NYC to</span>
                    <span className="font-display text-lg font-bold text-brand-ink">{r.to}</span>
                  </span>
                  <span className="text-right text-sm text-brand-muted">
                    {r.miles}
                    <span className="block font-semibold text-brand-ink">{r.time}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-brand-muted">
            Distances and drive times are approximate, from Midtown Manhattan.{' '}
            <Link href="/services/long-distance" className="font-semibold text-brand-accent hover:underline">
              See how long-distance rides work
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="compare-heading"
            eyebrow="Compare"
            title="Black car vs rideshare, taxi and train"
            intro="Each has its place. A booked black car is the one built around a fixed time, your luggage and getting you all the way there."
          />
          <ComparisonTable
            caption="How a booked black car compares with rideshare, taxi and train"
            columns={['Black car', 'Rideshare', 'Taxi', 'Train']}
            rows={comparison}
          />
        </div>
      </section>

      {/* Vehicles */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="fleet-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="fleet-heading" eyebrow="Vehicles" title="Black car fleet: sedans and SUVs" />
          <div className="grid gap-5 md:grid-cols-3">
            {vehicles.map((v) => (
              <Link key={v.name} href="/fleet" className="card-hover block rounded-2xl bg-brand-white p-6 ring-1 ring-brand-line">
                <VehiclePhoto src={classPhoto(v.photo).image} alt={classPhoto(v.photo).name} className="mb-5" />
                <h3 className="text-xl text-brand-ink">{v.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-accent">
                  {v.seats} · {v.bags}
                </p>
                <p className="mt-3 text-brand-muted">{v.body}</p>
              </Link>
            ))}
          </div>
          <Link href="/fleet" className="mt-8 inline-block font-display text-sm font-bold text-brand-accent hover:underline">
            See the full fleet →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="How it works" title="How to book your car" />
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent font-display font-bold text-brand-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg text-brand-ink">{s.title}</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/book"
            className="mt-10 inline-flex rounded-lg bg-brand-accent px-6 py-3 font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover"
          >
            Start a booking
          </Link>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="areas-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="areas-heading"
            eyebrow="Where we drive"
            title="Black car service in New York City, New Jersey, Connecticut, Philadelphia and DC"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map((a) => (
              <li key={a.name}>
                <Link href={a.href} className="card-hover block h-full rounded-xl bg-brand-white p-5 ring-1 ring-brand-line hover:ring-brand-accent">
                  <h3 className="text-base text-brand-ink">{a.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{a.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="NYC black car service FAQs" />
          <div className="divide-y divide-brand-line border-y border-brand-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="text-lg text-brand-ink">{f.q}</h3>
                  <span aria-hidden="true" className="mt-1 font-display text-xl text-brand-accent transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-brand-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-ink py-16 text-brand-white lg:py-20" aria-label="Book a ride">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-3xl font-bold tracking-tight lg:text-4xl">Your car, when you need it.</p>
          <p className="mt-4 text-lg text-brand-silver">Book in a couple of minutes, or talk to us now.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/book" className="rounded-lg bg-brand-white px-6 py-3 font-display font-bold text-brand-ink hover:bg-brand-accent-soft">
              Get my price
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="rounded-lg px-6 py-3 font-display font-bold text-brand-white ring-1 ring-brand-white/40 hover:bg-brand-white/10"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
