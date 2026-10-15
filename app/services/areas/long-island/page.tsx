import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Long Island Car Service | JFK Airport Transfers NYC',
  description:
    'Long Island black car service — JFK & LGA airport transfers from Nassau and Suffolk Counties. Garden City, Great Neck, Huntington, Hampton Bays. Flat.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/long-island` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/long-island` },
};

const faqs = [
  {
    q: 'Do you serve all of Long Island for black car service?',
    a: 'Yes. Both Nassau and Suffolk Counties — from the Queens border communities of Valley Stream and Elmont all the way east to the Hamptons and Montauk Point. Flat rates confirmed at booking.',
  },
  {
    q: 'How long is the drive from Long Island to JFK Airport?',
    a: 'Western Nassau (Garden City, Valley Stream): 20–35 minutes. Eastern Nassau (Great Neck, Manhasset): 25–45 minutes. Western Suffolk (Huntington, Babylon): 40–60 minutes. Allow 3 hours before departure for airport trips.',
  },
  {
    q: 'Can I book a Long Island to Manhattan black car?',
    a: 'Yes. Daily service from any Long Island community to any Manhattan destination. Comfortable luxury sedan or SUV with a professional driver — no LIRR, no transfers, just door-to-door.',
  },
  {
    q: 'Is Long Island car service available for early morning JFK flights?',
    a: 'Yes. 24/7 service with no surge pricing. Pre-dawn pickups are common — your driver is confirmed the evening before your trip at the same flat rate as any other time of day.',
  },
  {
    q: 'Do you serve the North Shore and South Shore equally?',
    a: 'Yes. Gold Coast North Shore (Great Neck, Manhasset, Port Washington, Roslyn) and South Shore (Valley Stream, Rockville Centre, Massapequa, Long Beach) are both fully covered with the same flat-rate standard.',
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

const longIslandCommunities = [
  'Garden City', 'Great Neck', 'Manhasset', 'Huntington', 'Smithtown',
  'Babylon', 'Bay Shore', 'Rockville Centre', 'Valley Stream', 'Massapequa',
  'Patchogue', 'Ronkonkoma', 'East Meadow', 'Mineola', 'Port Washington',
  'Roslyn', 'Westbury', 'Hicksville', 'Commack', 'Hauppauge',
];

const routes = [
  { from: 'Garden City → JFK Airport', time: '20–35 min' },
  { from: 'Great Neck → JFK Airport', time: '25–40 min' },
  { from: 'Huntington → JFK Airport', time: '45–60 min' },
  { from: 'Babylon → JFK Airport', time: '40–55 min' },
  { from: 'Ronkonkoma → JFK Airport', time: '40–55 min' },
  { from: 'Garden City → Manhattan (Midtown)', time: '45–60 min' },
  { from: 'Great Neck → LGA Airport', time: '20–30 min' },
  { from: 'Smithtown → JFK Airport', time: '50–65 min' },
];

const included = [
  'Flat-rate pricing locked at booking — no surge, no hidden fees',
  'TLC-licensed professional chauffeur',
  'Door-to-door pickup at your exact address',
  'Luxury sedan or SUV, always clean and maintained',
  'Driver confirmed the evening before your trip',
  'Luggage assistance at pickup and drop-off',
  '24/7 support via phone or WhatsApp',
];

export default function LongIslandPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Long Island', url: `${siteUrl}/services/areas/long-island` },
        ]}
      />
      <ServiceJsonLd
        name="Long Island Car Service"
        description="Premium black car and chauffeur service throughout Long Island. Airport transfers to JFK, LGA, and EWR from Nassau and Suffolk Counties — Garden City, Great Neck, Huntington, Babylon, Ronkonkoma, and all Long Island communities. Flat rates, TLC-licensed chauffeurs 24/7."
        areaServed="Long Island, Nassau County, Suffolk County, New York, NY"
        url={`${siteUrl}/services/areas/long-island`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Long Island Car Service | JFK Airport Transfers &amp; Black Car
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car service across all of Long Island — Nassau County from the Queens
              border to its eastern edge, and Suffolk County from Babylon and Huntington all the way
              to the Hamptons. JFK as close as 20 minutes from Garden City. Flat-rate, no surge, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Long Island is home to some of the most JFK-adjacent communities in the New York metro
              area — and Eagle Eye Chauffeur serves all of them. Whether you&apos;re on the South Shore,
              the Gold Coast North Shore, or deep in western Suffolk County, your rate is locked at
              booking and your driver is confirmed the evening before. No app surprises.
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
              Long Island Communities We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers all of Long Island across Nassau and Suffolk Counties. From
              the incorporated villages of Great Neck and Port Washington on the North Shore to the
              South Shore communities of Rockville Centre, Massapequa, and Long Beach — and from
              Garden City in the west to Huntington and Commack in the east. Every address gets the
              same flat-rate, door-to-door standard.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {longIslandCommunities.map((city) => (
                <div
                  key={city}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your community? We serve all Long Island addresses.{' '}
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
              Popular Long Island Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Long Island&apos;s proximity to JFK Airport makes it one of the easiest metro areas for
              airport transfers. Estimated times under normal traffic on the Belt Parkway, Southern
              State Parkway, and Long Island Expressway. Allow 3 hours before departure for airport trips.
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
              What&apos;s Included with Every Long Island Ride
            </h2>
            <p className="text-brand-grey mb-8">
              Every Eagle Eye booking — a Garden City to JFK hop or a Great Neck to Manhattan
              corporate run — comes with the full premium package. No tiers, no upsells, no surprise
              charges when you arrive at the terminal.
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
              Why Choose Eagle Eye for Long Island Airport Rides
            </h2>
            <p className="text-brand-grey mb-6">
              For a 5am JFK pickup from Mineola or Huntington, a flat-rate black car with a
              confirmed professional and luggage assistance is the dependable choice for every
              Long Island airport departure.
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
              Long Island Car Service — Frequently Asked Questions
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
                href="/services/areas/nassau-county"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">JFK as close as 20 min from Nassau</div>
              </Link>
              <Link
                href="/services/areas/suffolk-county"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">Huntington, Babylon, Smithtown &amp; more</div>
              </Link>
              <Link
                href="/services/areas/hamptons"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">The Hamptons Service</div>
                <div className="text-sm text-brand-grey mt-1">East Hampton, Southampton, Montauk</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Long Island Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Long Island community. Flat rates confirmed at booking.
              Driver confirmed the evening before. No surge pricing at any hour.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp — we respond around the clock
              for early morning JFK departures and last-minute bookings.
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
