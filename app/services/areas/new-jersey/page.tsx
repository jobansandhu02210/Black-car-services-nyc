import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'New Jersey Black Car Service | NYC Airport Transfers',
  description:
    'New Jersey black car service — airport transfers to JFK, LGA & EWR from Hoboken, Jersey City, Princeton, Morristown, Short Hills and all NJ. Flat.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/new-jersey` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/new-jersey` },
};

const faqs = [
  {
    q: 'Do you serve all of New Jersey?',
    a: 'Yes. We serve all NJ communities — Hudson County (Hoboken, Jersey City, Weehawken), Essex County (Montclair, Livingston, Maplewood), Morris County (Morristown, Madison, Chatham), Somerset County (Bernardsville, Far Hills), Middlesex County (Princeton), Bergen County (Ridgewood, Englewood, Tenafly), and beyond.',
  },
  {
    q: 'Are tunnel and bridge tolls included for NJ rides?',
    a: 'Yes. All Lincoln Tunnel, Holland Tunnel, George Washington Bridge, and any other applicable tolls are included in your flat rate. There are zero surprise charges at the end of your trip — you pay exactly what was quoted at booking.',
  },
  {
    q: 'How long does it take from New Jersey to JFK Airport?',
    a: 'It depends on your location. Hoboken and Jersey City are typically 45–60 minutes. Princeton and Morris County communities run 60–80 minutes. We recommend allowing at least 3 hours before your departure for NJ-to-JFK trips.',
  },
  {
    q: 'Can you pick me up at home in New Jersey and drop me at JFK?',
    a: 'Absolutely. Door-to-door service from any New Jersey address to JFK, LGA, or EWR. Your chauffeur meets you at your front door — no terminal shuttle, no shuttle lot, no walking with luggage.',
  },
  {
    q: 'Do you serve New Jersey for corporate travel?',
    a: 'Yes. We work with many NJ-based executives for regular NYC airport transfers, Manhattan corporate travel, and dedicated commuter accounts. Flat rates, invoicing available, and a consistent standard of service on every ride.',
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

const njCities = [
  'Hoboken', 'Jersey City', 'Weehawken', 'Edgewater', 'Fort Lee',
  'Englewood', 'Tenafly', 'Hackensack', 'Paramus', 'Ridgewood',
  'Montclair', 'Livingston', 'Maplewood', 'Millburn', 'Short Hills',
  'Morristown', 'Madison', 'Chatham', 'Summit', 'Westfield',
  'Florham Park', 'Bernardsville', 'Far Hills', 'Princeton', 'Newark',
];

const routes = [
  { from: 'Hoboken → JFK Airport', time: '45–60 min' },
  { from: 'Jersey City → JFK Airport', time: '40–55 min' },
  { from: 'Princeton → JFK Airport', time: '60–80 min' },
  { from: 'Morristown → JFK Airport', time: '55–75 min' },
  { from: 'Short Hills → JFK Airport', time: '45–65 min' },
  { from: 'Hoboken → Manhattan (Midtown)', time: '20–35 min' },
  { from: 'Newark → JFK Airport', time: '40–55 min' },
  { from: 'Princeton → EWR Airport', time: '35–50 min' },
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

export default function NewJerseyPage() {
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
        ]}
      />
      <ServiceJsonLd
        name="New Jersey Black Car Service"
        description="Premium black car and chauffeur service throughout New Jersey. NYC airport transfers to JFK, LGA, and EWR from Hoboken, Jersey City, Princeton, Morristown, Short Hills and all NJ communities. Flat rates, tolls included, 24/7."
        areaServed="New Jersey, NJ"
        url={`${siteUrl}/services/areas/new-jersey`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              New Jersey Black Car Service | NYC Airport Transfers &amp; Chauffeur
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional chauffeur service from every corner of New Jersey — Hudson County
              to Somerset County, Bergen to Middlesex. Flat-rate NYC airport transfers with all
              tolls included. Available 24/7, no surge pricing.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Getting from New Jersey to JFK, LaGuardia, or Newark means crossing bridges and
              tunnels — and every one of those tolls is built into your flat rate at booking.
              Eagle Eye Chauffeur covers all of NJ with a licensed chauffeur at your door, whether
              you&apos;re in downtown Hoboken or a Princeton residential neighborhood at 4am.
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

        {/* Cities grid */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              New Jersey Cities &amp; Communities We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              From the Hudson River waterfront to the Somerset Hills, Eagle Eye Chauffeur
              serves every major New Jersey community with the same flat-rate, professional service.
              If your town is not listed, we still serve it — enter your address on the booking page
              for an instant quote.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {njCities.map((city) => (
                <div
                  key={city}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your city? We serve all NJ addresses.{' '}
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
              Popular NJ Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times under normal traffic. Your chauffeur monitors live conditions
              and always takes the fastest route. For airport trips we recommend allowing at least
              3 hours before departure.
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
              All rates are flat. All tolls included. No surge pricing.{' '}
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
              What&apos;s Included with Every New Jersey Ride
            </h2>
            <p className="text-brand-grey mb-8">
              Every Eagle Eye booking from New Jersey — whether a Hoboken-to-JFK airport run or
              a Princeton corporate transfer to Manhattan — includes the full suite of services.
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
              Why Choose Eagle Eye for NJ Airport Transfers
            </h2>
            <p className="text-brand-grey mb-6">
              New Jersey to JFK at 5am is a trip that demands a professional — a flat-rate black
              car with a driver confirmed the night before, all tolls included, and no surprises
              at drop-off.
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
              New Jersey Black Car Service — Frequently Asked Questions
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
                href="/services/airport/ewr"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">EWR Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">Newark Liberty — closest airport to NJ</div>
              </Link>
              <Link
                href="/services/areas/manhattan"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Manhattan Car Service</div>
                <div className="text-sm text-brand-grey mt-1">NJ to Manhattan, tolls included</div>
              </Link>
              <Link
                href="/services/corporate"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Corporate Car Service</div>
                <div className="text-sm text-brand-grey mt-1">NJ executive &amp; commuter accounts</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your New Jersey Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every New Jersey community. Flat rates with all tolls included.
              Driver confirmed the evening before. No surge pricing.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp — we respond around the clock,
              including for early morning airport departures.
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
