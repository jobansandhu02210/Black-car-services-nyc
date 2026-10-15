import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Jersey City NJ Car Service | NYC & Airport Transfers',
  description:
    'Jersey City NJ black car service — airport transfers to EWR, JFK & LGA, corporate rides to Manhattan. TLC-licensed chauffeurs, flat rates, all tolls.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/jersey-city` },
  openGraph: {
    ...ogDefaults,
    title: 'Jersey City NJ Car Service | NYC & Airport Transfers | Eagle Eye',
    description:
      'Jersey City NJ black car service — airport transfers to EWR, JFK & LGA, corporate rides to Manhattan. TLC-licensed chauffeurs, flat rates, all tolls.',
    url: `${getSiteUrl()}/services/areas/jersey-city`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long does it take from Jersey City to Newark Airport (EWR)?',
    a: 'Jersey City to EWR is typically 20–30 minutes via the New Jersey Turnpike — one of the fastest airport connections in the metro area. For morning rush departures we recommend leaving a little earlier. Your chauffeur monitors live traffic and departs at exactly the right time to make your flight.',
  },
  {
    q: 'How long is the ride from Jersey City to JFK Airport?',
    a: 'Jersey City to JFK typically takes 40–55 minutes via the Holland Tunnel and the BQE. We recommend allowing at least 3 hours before international flights. All tunnel and bridge tolls are included in your flat rate — the price is confirmed before you book.',
  },
  {
    q: 'Do you offer corporate accounts for companies in Jersey City?',
    a: 'Yes. Many of our clients are financial and tech firms in the Newport and Exchange Place districts who require regular executive transportation and airport transfers. We offer corporate accounts with consistent service, reliable scheduling, and invoicing for business clients.',
  },
  {
    q: 'Can I book a Jersey City black car for early morning airport departures?',
    a: 'Absolutely. Early morning airport runs are one of our most common Jersey City bookings. We operate 24/7 and your driver is confirmed the evening before, so a 4:30 AM EWR pickup is handled identically to an afternoon ride — professional, on time, door-to-door.',
  },
  {
    q: 'Do you serve the entire Jersey City area, including Downtown and Journal Square?',
    a: 'Yes. We cover all Jersey City neighborhoods — Downtown JC, Newport, Exchange Place, Journal Square, The Heights, Liberty State Park area, Bergen-Lafayette, and Greenville. Enter your exact address on the booking page for an instant flat-rate quote.',
  },
  {
    q: 'Are there any extra charges for pickup in Jersey City?',
    a: 'No. Your flat rate covers door-to-door pickup at your Jersey City address. All tunnel and bridge tolls to New York City or to Newark Airport are included in the price confirmed at booking. There are no fuel surcharges or hidden fees.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate locked at booking',
    desc: 'Your price is confirmed before you travel — no surge pricing, no hidden fees, no toll add-ons.',
  },
  {
    title: 'All tolls included',
    desc: 'Holland Tunnel, Lincoln Tunnel, and NJ Turnpike — every toll is built into your flat rate for JC rides.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is background-checked, NYC TLC-licensed, and trained to a professional service standard.',
  },
  {
    title: 'Door-to-door at your exact address',
    desc: 'We pick up from your Newport high-rise, Exchange Place office, or Downtown brownstone — exact address.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'You receive your chauffeur&apos;s details in advance — name, photo, vehicle — before every scheduled ride.',
  },
  {
    title: '24/7 availability & support',
    desc: 'Phone and WhatsApp support around the clock. Early morning EWR departures handled with the same care.',
  },
];

const services = [
  {
    title: 'EWR Airport Transfers',
    desc: 'Jersey City to Newark Liberty — the quickest airport run from Hudson County. Flat rate, all tolls in.',
    href: '/services/airport/ewr',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate door-to-door service from Jersey City to JFK. Flight tracking, luggage assistance.',
    href: '/services/airport/jfk',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Jersey City to LaGuardia with a professional chauffeur. No surge, flat rate confirmed at booking.',
    href: '/services/airport/lga',
  },
  {
    title: 'Corporate Car Service',
    desc: 'Executive transport for Newport and Exchange Place firms — regular accounts, invoicing available.',
    href: '/services/corporate',
  },
  {
    title: 'Manhattan Business Rides',
    desc: 'Direct from your Jersey City office or home to anywhere in Manhattan — tolls included.',
    href: '/services/areas/manhattan',
  },
  {
    title: 'Hourly Hire',
    desc: 'Dedicated chauffeur for the day — meetings, site visits, multi-stop itineraries across JC and NJ.',
    href: '/services/hourly',
  },
];

const nearbyAreas = [
  { name: 'Hoboken', href: '/services/areas/hoboken' },
  { name: 'Newark NJ', href: '/services/areas/newark-nj' },
  { name: 'Weehawken', href: '/services/areas/new-jersey' },
  { name: 'Bayonne', href: '/services/areas/new-jersey' },
  { name: 'Manhattan', href: '/services/areas/manhattan' },
  { name: 'EWR Airport', href: '/services/airport/ewr' },
  { name: 'New Jersey (All Areas)', href: '/services/areas/new-jersey' },
  { name: 'Morristown NJ', href: '/services/areas/morristown-nj' },
];

export default function JerseyCityPage() {
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
          { name: 'Jersey City', url: `${siteUrl}/services/areas/jersey-city` },
        ]}
      />
      <ServiceJsonLd
        name="Jersey City NJ Black Car Service"
        description="Premium black car and chauffeur service in Jersey City, NJ. Airport transfers to EWR, JFK, and LGA. Corporate rides to Manhattan. Flat rates with all tolls included, TLC-licensed chauffeurs, available 24/7."
        areaServed="Jersey City, Hudson County, New Jersey"
        url={`${siteUrl}/services/areas/jersey-city`}
      />

      {/* Hero */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Jersey City, NJ — Black Car Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Jersey City Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-6 leading-relaxed">
            Professional chauffeur service from Jersey City to EWR, JFK, LGA, and Manhattan.
            Flat-rate pricing, all tunnel and turnpike tolls included, TLC-licensed drivers at your
            door 24/7.
          </p>
          <p className="text-brand-silver max-w-2xl mb-10">
            Jersey City is one of New Jersey&apos;s fastest-growing business and residential hubs —
            and it sits minutes from Newark Liberty Airport. Whether you&apos;re a finance professional
            in Exchange Place, a Newport resident catching an early flight, or a corporate team that
            needs dependable executive transportation, Eagle Eye Chauffeur is ready.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Jersey City NJ</div>
              <div className="text-brand-silver text-sm mt-1">Full city coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Downtown JC</div>
              <div className="text-brand-silver text-sm mt-1">Newport · Exchange Place</div>
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
            Jersey City Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From rapid EWR connections to corporate commutes into Manhattan, we cover every
            ground transportation need for Jersey City residents and businesses.
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

      {/* Routes */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Jersey City Airport &amp; City Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Estimated travel times under typical conditions. Traffic is monitored in real time
            and your driver departs at the right time to make your flight.
          </p>
          <div className="space-y-3">
            {[
              { route: 'Jersey City → EWR (Newark Liberty)', time: '20–30 min' },
              { route: 'Jersey City → JFK Airport', time: '40–55 min' },
              { route: 'Jersey City → LGA (LaGuardia)', time: '35–50 min' },
              { route: 'Jersey City → Midtown Manhattan', time: '15–30 min' },
              { route: 'Jersey City → Financial District (NYC)', time: '10–20 min' },
              { route: 'Jersey City → HPN (Westchester Airport)', time: '55–75 min' },
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
            Flat rates with all tolls included.{' '}
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
            Black Car vs. NJ Transit &amp; PATH from Jersey City
          </h2>
          <p className="text-brand-silver mb-8 max-w-2xl">
            Jersey City is served by PATH, NJ Transit, and the Hudson-Bergen Light Rail. Each has its role — but for airport transfers and professional travel, the calculation is different.
          </p>
          <div className="space-y-4">
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">No direct transit to JFK or LGA</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                There is no direct rail connection from Jersey City to JFK or LaGuardia. Reaching JFK via PATH requires a transfer in Manhattan to the A train and then the AirTrain — easily 90 minutes or more with luggage. LGA is bus-accessible but requires multiple steps. Eagle Eye picks up at your address and delivers directly to the terminal curb.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">EWR via NJ Transit — a real alternative, with limits</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                NJ Transit does connect Jersey City to Newark Liberty Airport via the Northeast Corridor and AirTrain. This works well for mid-day travel with one bag. But for early morning departures before 6 AM, heavy luggage, international travel with long check-in times, or any trip where timing is non-negotiable, a confirmed black car is more reliable.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Corporate and client travel</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Finance and tech executives in Jersey City&apos;s Newport and Exchange Place districts routinely use black car service for client transportation, road show logistics, and any trip where showing up in a professional vehicle matters. A black car provides door-to-door service and a consistent, professional impression that transit cannot.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">When transit makes sense</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                PATH and the Hudson-Bergen Light Rail are excellent for daily Midtown commutes during peak hours — efficient and cost-effective. Eagle Eye is the right choice for airport runs, pre-dawn departures, heavy baggage, client-facing travel, and any journey where a missed connection is not an option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Jersey City Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Jersey City professionals need transportation that matches the pace and standard of the
            finance and tech industries based here. Here&apos;s what we deliver on every ride.
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
            Jersey City&apos;s Business Districts &amp; Residential Neighborhoods
          </h2>
          <p className="text-brand-grey mb-6 max-w-2xl">
            Eagle Eye Chauffeur serves every part of Jersey City — from the finance towers of
            Exchange Place to the Liberty State Park waterfront. We know the loading zones, the
            one-way streets, and the fastest routes to every airport from every JC neighborhood.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-8">
            <ul className="space-y-4 text-brand-grey">
              <li>
                <strong className="text-brand-black">Exchange Place &amp; Newport.</strong>{' '}
                Jersey City&apos;s financial core is home to global banks and investment firms whose
                executives rely on Eagle Eye for airport transfers and client transportation to
                Manhattan and beyond.
              </li>
              <li>
                <strong className="text-brand-black">EWR — the closest major airport.</strong>{' '}
                No other Hudson County city sits as conveniently to Newark Liberty as Jersey City.
                Our JC-to-EWR run is one of the fastest routes we operate — ideal for early morning
                domestic and international departures.
              </li>
              <li>
                <strong className="text-brand-black">Journal Square &amp; The Heights.</strong>{' '}
                We cover every Jersey City neighborhood with the same flat rate and same professional
                standard as downtown. Enter your address — if it&apos;s in Jersey City, we serve it.
              </li>
              <li>
                <strong className="text-brand-black">Liberty State Park area.</strong>{' '}
                Waterfront residents and Liberty Harbor North clients often choose Eagle Eye for
                their Manhattan commutes and airport runs to avoid the congestion of PATH and ferry
                schedules.
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
            Eagle Eye Chauffeur covers all of Hudson County and the greater NJ metro area.
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Jersey City</h2>
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
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">JFK Airport</td>
                  <td className="p-4 text-brand-grey">50–65 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">LGA Airport</td>
                  <td className="p-4 text-brand-grey">50–65 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">Teterboro Airport (TEB)</td>
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Private Aviation</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">Manhattan (Midtown)</td>
                  <td className="p-4 text-brand-grey">20–35 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">Manhattan (Financial District)</td>
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">Newark (city center)</td>
                  <td className="p-4 text-brand-grey">15–25 min</td>
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
            Jersey City Black Car Service — Frequently Asked Questions
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
            Book Your Jersey City Black Car
          </h2>
          <p className="text-brand-silver mb-3 max-w-xl mx-auto">
            Available 24/7 from every Jersey City address. Flat rates with all tolls included.
            Driver confirmed the night before. No surge pricing.
          </p>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Book online, call us, or message on WhatsApp — we respond around the clock,
            including for early morning EWR and JFK departures from Jersey City.
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
