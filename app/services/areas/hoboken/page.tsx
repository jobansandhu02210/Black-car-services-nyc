import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Hoboken NJ Black Car Service | NYC Chauffeur',
  description:
    'Hoboken NJ black car service — flat-rate airport transfers to JFK, EWR & LGA. TLC-licensed chauffeurs, door-to-door pickup, tolls included. Skip the.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hoboken` },
  openGraph: {
    ...ogDefaults,
    title: 'Hoboken NJ Black Car Service | NYC Chauffeur | Eagle Eye',
    description:
      'Hoboken NJ black car service — flat-rate airport transfers to JFK, EWR & LGA. TLC-licensed chauffeurs, door-to-door pickup, tolls included. Skip the.',
    url: `${getSiteUrl()}/services/areas/hoboken`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long does it take from Hoboken to JFK Airport by black car?',
    a: 'Hoboken to JFK typically takes 45–60 minutes under normal traffic conditions via the Holland Tunnel and the Brooklyn-Queens Expressway. For early morning flights we recommend allowing at least 3 hours before departure. Your chauffeur monitors live traffic conditions and takes the fastest route available.',
  },
  {
    q: 'How long is the ride from Hoboken to Newark Airport (EWR)?',
    a: 'Hoboken to EWR is typically 20–35 minutes — one of the quickest airport connections from Hudson County. The New Jersey Turnpike extension puts Newark Liberty within easy reach, making it a very popular choice for Hoboken residents flying domestically or on short-haul international routes.',
  },
  {
    q: 'Do you pick up in Hoboken for Manhattan office trips?',
    a: 'Absolutely. Many of our Hoboken clients are finance and tech professionals who prefer a comfortable, direct car service to their Manhattan offices over the PATH train. We pick up at your building entrance and drop you curbside at your Midtown or Financial District office with all tunnel tolls included in the flat rate.',
  },
  {
    q: 'Can I book a Hoboken black car for a very early morning flight?',
    a: 'Yes — early morning airport pickups are among our most common Hoboken bookings. We operate 24/7 including pre-dawn departures. Your driver is confirmed the evening before, so a 4 AM EWR pickup runs the same way a mid-afternoon trip does: no surprises, no waiting, driver at your door.',
  },
  {
    q: 'Do you offer hourly hire in Hoboken and New Jersey?',
    a: 'Yes. Hourly hire is available for clients in Hoboken and throughout NJ who need a dedicated chauffeur for meetings, multi-stop errands, or a full day of corporate travel. Your chauffeur stays with you for the entire booking period. Contact us or visit the booking page for hourly options.',
  },
  {
    q: 'Are Lincoln Tunnel tolls included in my Hoboken to Manhattan fare?',
    a: 'Yes — all tunnel and bridge tolls are built into your flat rate at booking. Lincoln Tunnel, Holland Tunnel, and any other applicable tolls are included. The price you see when you book is exactly what you pay at the end of your trip.',
  },
  {
    q: 'How far is Hoboken from Newark Airport and the other NYC airports?',
    a: 'Hoboken sits right across the Hudson from Manhattan, so Newark Liberty (EWR) is the closest airport at about 8 miles (15–30 minutes). LaGuardia (LGA) is roughly 12 miles (30–50 minutes) and JFK about 18 miles (40–60 minutes), both via Manhattan or the bridges.',
  },
  {
    q: 'How much does a car service from Hoboken cost?',
    a: 'Hoboken transfers are billed as a flat rate confirmed at booking, with all tunnel and bridge tolls included and no surge. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate locked at booking',
    desc: 'Your price is confirmed before you book — no surge pricing for rush hour, bad weather, or PATH train disruptions.',
  },
  {
    title: 'All tunnel tolls included',
    desc: 'Lincoln Tunnel, Holland Tunnel — every toll crossing between Hoboken and NYC is built into your flat rate.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is background-checked, licensed by the NYC TLC, and trained to a luxury service standard.',
  },
  {
    title: 'Door-to-door building pickup',
    desc: 'We pick up at your exact Hoboken address — waterfront building, brownstone block, or Washington Street office.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'You receive your chauffeur&apos;s name and vehicle details in advance — no last-minute assignments.',
  },
  {
    title: '24/7 phone & WhatsApp support',
    desc: 'We answer calls and messages around the clock — including pre-dawn airport departures from Hoboken.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Door-to-door from Hoboken to JFK. Flat rate, flight tracking, luggage assistance.',
    href: '/services/airport/jfk',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Quick, direct Hoboken to Newark Liberty — often the fastest airport run from Hudson County.',
    href: '/services/airport/ewr',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Hoboken to LaGuardia with a professional chauffeur. Flat rate, no surprises.',
    href: '/services/airport/lga',
  },
  {
    title: 'Manhattan Corporate Commuter',
    desc: 'Skip the PATH. Door-to-door from your Hoboken building to your Midtown or FiDi office.',
    href: '/services/corporate',
  },
  {
    title: 'Hourly Hire',
    desc: 'A dedicated chauffeur for meetings, errands, or a full day across Hoboken and NJ.',
    href: '/services/hourly',
  },
  {
    title: 'Special Events',
    desc: 'Galas, dinners, concerts — arrive at Manhattan venues in a luxury black car from Hoboken.',
    href: '/book',
  },
];

const nearbyAreas = [
  { name: 'Jersey City', href: '/services/areas/jersey-city' },
  { name: 'Newark NJ', href: '/services/areas/newark-nj' },
  { name: 'Weehawken', href: '/services/areas/new-jersey' },
  { name: 'Edgewater', href: '/services/areas/new-jersey' },
  { name: 'Fort Lee', href: '/services/areas/new-jersey' },
  { name: 'Manhattan', href: '/services/areas/manhattan' },
  { name: 'New Jersey (All Areas)', href: '/services/areas/new-jersey' },
  { name: 'EWR Airport', href: '/services/airport/ewr' },
];

export default function HobokenPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'New Jersey', url: `${siteUrl}/services/areas/new-jersey` },
          { name: 'Hoboken', url: `${siteUrl}/services/areas/hoboken` },
        ]}
      />
      <ServiceJsonLd
        name="Hoboken NJ Black Car Service"
        description="Premium black car and chauffeur service in Hoboken, NJ. Airport transfers to JFK, LGA, and EWR. Corporate commuter rides to Manhattan. Flat rates with all tunnel tolls included, TLC-licensed chauffeurs, available 24/7."
        areaServed="Hoboken, Hudson County, New Jersey"
        url={`${siteUrl}/services/areas/hoboken`}
      />

      {/* Hero */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Hoboken, NJ — Black Car Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Hoboken Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-6 leading-relaxed">
            Professional chauffeur service from Hoboken to JFK, EWR, LGA, and Manhattan.
            Skip the PATH train — door-to-door pickup at your building, all tunnel tolls included,
            flat rate confirmed before you book.
          </p>
          <p className="text-brand-silver max-w-2xl mb-10">
            Whether you&apos;re a waterfront resident catching a 6 AM flight from EWR, a corporate
            commuter heading to Midtown, or a professional who needs a reliable black car for
            client transfers — Eagle Eye Chauffeur is Hoboken&apos;s trusted choice for luxury
            ground transportation.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Hoboken NJ</div>
              <div className="text-brand-silver text-sm mt-1">Full city coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Manhattan Access</div>
              <div className="text-brand-silver text-sm mt-1">Tolls included, door-to-door</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Pre-dawn to late night</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">TLC Licensed</div>
              <div className="text-brand-silver text-sm mt-1">Professional &amp; insured</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Now — Flat Rate
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Hoboken Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From early morning EWR airport runs to corporate commutes into Manhattan, we cover
            every ground transportation need for Hoboken residents and businesses.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black text-lg mb-1">{s.title}</div>
                <div className="text-sm text-brand-grey">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Routes & Travel Times */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Hoboken Airport &amp; City Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Estimated travel times under normal conditions. Your chauffeur monitors live traffic
            and uses the fastest route. We recommend allowing at least 3 hours before international
            departures.
          </p>
          <div className="space-y-3">
            {[
              { route: 'Hoboken → EWR (Newark Liberty)', time: '20–35 min' },
              { route: 'Hoboken → JFK Airport', time: '45–60 min' },
              { route: 'Hoboken → LGA (LaGuardia)', time: '35–50 min' },
              { route: 'Hoboken → Midtown Manhattan', time: '15–30 min' },
              { route: 'Hoboken → Financial District', time: '15–25 min' },
              { route: 'Hoboken → HPN (Westchester Airport)', time: '55–75 min' },
            ].map((r) => (
              <div
                key={r.route}
                className="flex justify-between items-center bg-brand-offwhite border border-brand-light p-4"
              >
                <span className="font-medium text-brand-black text-sm">{r.route}</span>
                <span className="text-brand-grey text-sm tabular-nums">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat with tunnel tolls included.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* Transit Comparison */}
      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold mb-3">
            Black Car vs. NJ Transit &amp; PATH from Hoboken
          </h2>
          <p className="text-brand-silver mb-8 max-w-2xl">
            Hoboken is one of the best-connected towns in New Jersey — but the math changes quickly when you factor in airport transfers, early departures, and professional travel.
          </p>
          <div className="space-y-4">
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Airport runs — transit has no direct option</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                There is no direct transit link from Hoboken to JFK or LGA. Reaching JFK via PATH requires transferring to the subway in Manhattan and then the A train or AirTrain — a 90-minute journey minimum with luggage. EWR is reachable by NJ Transit, but involves a transfer at Newark Penn Station. A black car picks you up at your door and arrives at the terminal curb — no transfers, no luggage hauling, no schedules to manage.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Early morning and late-night travel</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                PATH trains run 24/7 but with reduced frequency overnight. A 4 AM EWR departure means leaving Hoboken by 3 AM — and there may not be a PATH train running at that time that connects to a workable NJ Transit link. Eagle Eye operates 24/7 with a confirmed driver the evening before.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Reliability for professional and client travel</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                PATH delays, signal issues, and service changes can make transit unpredictable on time-critical trips. For client pickups, business meetings, and non-negotiable flights, a confirmed black car with real-time driver tracking provides certainty that mass transit cannot. Your driver contacts you if anything changes.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">When transit makes sense</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                The PATH train is excellent for routine Hoboken-to-Midtown commuting during business hours — fast, frequent, inexpensive. Eagle Eye is the right call for airport transfers, early departures, heavy luggage, client trips, and any journey where reliability is non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Hoboken Residents Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Hoboken is one of the most transit-connected towns in New Jersey — but when it comes to
            airport departures at 4 AM or client pickups that need to run exactly on time, the PATH
            train is not an option. Here&apos;s why our Hoboken clients stay with us.
          </p>
          <ul className="space-y-3">
            {eaglEyeBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex items-start gap-3 bg-brand-white border border-brand-light p-4"
              >
                <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                <div>
                  <span className="font-medium text-brand-black">{benefit.title} — </span>
                  <span className="text-brand-grey text-sm">{benefit.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Serving All of Hoboken — Waterfront to Uptown
          </h2>
          <p className="text-brand-grey mb-6 max-w-2xl">
            Eagle Eye Chauffeur picks up throughout Hoboken — from the luxury high-rises along the
            waterfront and Sinatra Drive to the brownstone blocks on Park and Bloomfield Avenues,
            and commercial addresses on Washington Street and Hudson Street. We know Hoboken&apos;s
            one-way streets and loading zones.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-8">
            <ul className="space-y-4 text-brand-grey">
              <li>
                <strong className="text-brand-black">Waterfront residents.</strong>{' '}
                Maxwell Place, Pier House, The Shipyard — we pick up at your building and have you
                at EWR in under 35 minutes for that early morning flight.
              </li>
              <li>
                <strong className="text-brand-black">Corporate commuters.</strong>{' '}
                Many Hoboken professionals working in Midtown or the Financial District rely on us
                for a consistent, comfortable alternative to the PATH — especially for client-facing
                days when appearance matters.
              </li>
              <li>
                <strong className="text-brand-black">JFK airport transfers.</strong>{' '}
                Hoboken to JFK via the Holland Tunnel is one of our most-booked routes. Your driver
                monitors tunnel conditions and leaves at exactly the right time to meet your flight.
              </li>
              <li>
                <strong className="text-brand-black">Event nights in Manhattan.</strong>{' '}
                Broadway shows, Michelin-starred dinners, gallery openings — we get you there and
                bring you home to Hoboken without the cab queue.
              </li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-center"
            >
              Get an Instant Quote
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block py-3 px-8 border border-brand-light text-brand-black font-medium hover:border-brand-dark transition-colors text-center"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Nearby Service Areas
          </h2>
          <p className="text-brand-grey mb-8">
            Eagle Eye Chauffeur serves all of Hudson County and beyond — not just Hoboken.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="bg-brand-white border border-brand-light p-4 text-sm font-medium text-brand-black hover:border-brand-dark transition-colors text-center"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common Routes Table */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Hoboken</h2>
          <p className="text-brand-grey text-sm mb-6">Estimated drive times in normal traffic — flat rate confirmed at booking.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left p-4 font-medium">Destination</th>
                  <th className="text-left p-4 font-medium">Est. Drive Time</th>
                  <th className="text-left p-4 font-medium">Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">EWR Airport</td>
                  <td className="p-4 text-brand-grey">25–35 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer (closest airport to Hoboken)</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">JFK Airport</td>
                  <td className="p-4 text-brand-grey">50–65 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">LGA Airport</td>
                  <td className="p-4 text-brand-grey">45–60 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">Teterboro Airport (TEB)</td>
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Private Aviation</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">Manhattan (Midtown)</td>
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">Manhattan (Downtown)</td>
                  <td className="p-4 text-brand-grey">15–25 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">Manhattan (Financial District)</td>
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            Hoboken Black Car Service — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Book Your Hoboken Black Car
          </h2>
          <p className="text-brand-silver mb-3 max-w-xl mx-auto">
            Available 24/7 from every Hoboken address. Flat rates with all tunnel tolls included.
            Driver confirmed the evening before. No surge pricing.
          </p>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Get an instant quote online, call us directly, or reach us on WhatsApp — we respond
            around the clock, including for pre-dawn EWR and JFK departures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Get an Instant Quote
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors text-center"
            >
              Book on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-center"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Or email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
