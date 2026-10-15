import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Staten Island Car Service | JFK EWR Airport Transfers',
  description:
    'Staten Island black car service — airport transfers to JFK, LGA & EWR. Flat rates, no surge pricing. Professional chauffeur 24/7. Book Eagle Eye for.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/staten-island` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/staten-island` },
};

const faqs = [
  {
    q: 'How much is a black car from Staten Island to JFK Airport?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Visit our booking page to get an instant quote by entering your Staten Island address and destination.',
  },
  {
    q: 'What areas of Staten Island do you serve?',
    a: 'We serve all Staten Island neighborhoods — from St. George, Tompkinsville, Stapleton, and New Brighton in the north to Great Kills, Eltingville, Annadale, Tottenville, and every community in between.',
  },
  {
    q: 'Is the Verrazano Bridge toll included in the fare?',
    a: 'Yes. All applicable tolls — including the Verrazano-Narrows Bridge, Goethals Bridge, and any other crossings — are factored into your flat rate at booking. There are zero surprise charges at the end of your ride.',
  },
  {
    q: 'How long does it take from Staten Island to Manhattan?',
    a: 'Approximately 40–55 minutes from St. George via the Staten Island Expressway and Verrazano Bridge or through Brooklyn, depending on traffic. We build appropriate buffer time into all schedules.',
  },
  {
    q: 'Do you do early morning pickups from Staten Island for airport flights?',
    a: 'Yes — 24/7 service, no exceptions. We specialize in pre-dawn airport departures. Your driver is confirmed the evening before and there is no surge pricing at 4am, 5am, or any hour.',
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate locked at booking', desc: 'Your price is confirmed before you book — no changes for traffic, time of day, or demand.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and trained to a professional service standard.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, late-model vehicles in the class you booked — confirmed before your trip.' },
  { title: 'Exact door pickup', desc: 'Your chauffeur meets you at your building entrance, home, or hotel — not a nearby corner.' },
  { title: 'Driver confirmed the night before', desc: 'You receive your driver\'s details in advance, not a last-minute assignment.' },
  { title: '24/7 phone & WhatsApp support', desc: 'Reach us any time — including early morning airport departures and last-minute bookings.' },
];

const neighborhoods = [
  'St. George', 'Tompkinsville', 'Stapleton', 'New Brighton', 'Snug Harbor',
  'Castleton Corners', 'Mariners Harbor', 'Port Richmond', 'Westerleigh', 'Grasmere',
  'Great Kills', 'Eltingville', 'Annadale', 'Tottenville', 'Huguenot',
  'Pleasant Plains', 'Richmond Valley', 'Charleston', 'Rossville', 'New Dorp',
];

const routes = [
  { from: 'St. George → JFK Airport', time: '35–50 min' },
  { from: 'Tottenville → JFK Airport', time: '45–60 min' },
  { from: 'Great Kills → JFK Airport', time: '40–55 min' },
  { from: 'Staten Island → Manhattan (Midtown)', time: '40–55 min via Verrazano' },
  { from: 'Staten Island Ferry Terminal → Manhattan', time: '30–45 min' },
  { from: 'Eltingville → EWR Airport', time: '35–50 min' },
  { from: 'St. George → LGA Airport', time: '50–65 min' },
  { from: 'Staten Island → Brooklyn', time: '20–40 min' },
];

const included = [
  'Flat-rate pricing locked at booking — no surge, no hidden fees',
  'TLC-licensed professional chauffeur',
  'Door-to-door pickup at your exact address',
  'Luxury sedan or SUV, always clean',
  'Driver confirmed the evening before your trip',
  'Luggage assistance at pickup and drop-off',
  '24/7 support via phone or WhatsApp',
];

export default function StatenIslandPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Staten Island', url: `${siteUrl}/services/areas/staten-island` },
        ]}
      />
      <ServiceJsonLd
        name="Staten Island Car Service"
        description="Premium black car and chauffeur service throughout Staten Island, New York City. Airport transfers to JFK, LGA, and EWR. Flat-rate pricing, TLC-licensed chauffeurs 24/7."
        areaServed="Staten Island, New York, NY"
        url={`${siteUrl}/services/areas/staten-island`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Staten Island Car Service | Airport Transfers &amp; Chauffeur
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car service from St. George to Tottenville. Flat-rate airport
              transfers to JFK, LaGuardia, and Newark — all tolls included, no surge pricing, and a
              TLC-licensed chauffeur at your door 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Staten Island is New York City&apos;s most car-reliant borough — no subway reaches its
              residential streets, and getting to a major airport means crossing a bridge. Eagle Eye
              Chauffeur removes that friction entirely: door-to-door service from any address on the
              island to JFK, EWR, or LGA at a flat rate confirmed before you ever step outside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                Get an Instant Quote
              </Link>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Neighborhoods grid */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Staten Island Neighborhoods We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Whether you live on the North Shore steps from the ferry or in the south island
              communities of Tottenville and Rossville, your Eagle Eye chauffeur will be at your
              door — at the same flat rate.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {neighborhoods.map((n) => (
                <div
                  key={n}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {n}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your neighborhood listed? We serve every Staten Island address.{' '}
              <Link href="/book" className="underline">
                Get a quote →
              </Link>
            </p>
          </div>
        </section>

        {/* Popular routes */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Popular Staten Island Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times under normal traffic conditions. Your driver monitors live
              traffic and adjusts the route for the fastest arrival.
            </p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div
                  key={r.from}
                  className="bg-brand-offwhite border border-brand-light p-4 flex justify-between items-center"
                >
                  <span className="font-medium text-brand-black text-sm">{r.from}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              All rates are flat. Tolls included. No surge pricing.{' '}
              <Link href="/book" className="underline">
                Get an instant quote →
              </Link>
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              What&apos;s Included with Every Staten Island Ride
            </h2>
            <p className="text-brand-grey mb-8">
              Every Eagle Eye booking — whether a 5am airport run from Tottenville or an afternoon
              corporate ride to Manhattan — comes with the same complete service.
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-brand-white border border-brand-light p-4">
                  <span className="text-brand-black font-bold mt-0.5">✓</span>
                  <span className="text-brand-grey text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Eagle Eye */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Why Choose Eagle Eye for Staten Island Airport Rides
            </h2>
            <p className="text-brand-grey mb-6">
              When you need a car at 4:30am for a 7am JFK flight, a confirmed professional
              chauffeur with a flat rate locked in the night before is the only reliable option
              for Staten Island travelers.
            </p>
            <ul className="space-y-3">
              {eaglEyeBenefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-3 bg-brand-offwhite border border-brand-light p-4">
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

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Staten Island Car Service — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/services/airport/jfk"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">JFK Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">Via Verrazano Bridge &amp; Belt Parkway</div>
              </Link>
              <Link
                href="/services/airport/ewr"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">EWR Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">Newark — closest airport to Staten Island</div>
              </Link>
              <Link
                href="/services/areas/manhattan"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Manhattan Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Door-to-door to any Manhattan address</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Staten Island Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Staten Island neighborhood. Flat rates with tolls included.
              Driver confirmed the evening before. No surge pricing.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp — we respond around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                Get an Instant Quote
              </Link>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
