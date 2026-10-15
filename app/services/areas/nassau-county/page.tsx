import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Nassau County Car Service | JFK LGA EWR Transfers',
  description:
    'Nassau County black car service — JFK & LGA airport transfers from Garden City, Great Neck, Hempstead, Mineola, Manhasset, Rockville Centre. Flat.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/nassau-county` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/nassau-county` },
};

const faqs = [
  {
    q: 'Do you provide black car service from Nassau County to JFK Airport?',
    a: 'Yes. We serve Garden City, Great Neck, Rockville Centre, Mineola, Manhasset, and all Nassau County communities with flat-rate transfers to JFK. Your rate is confirmed at booking — no surprises.',
  },
  {
    q: 'How long is the drive from Nassau County to JFK Airport?',
    a: 'Garden City and Rockville Centre are typically 20–35 minutes via the Belt Parkway. Great Neck and Manhasset run 25–40 minutes. We recommend arriving at JFK at least 2.5 hours before departure.',
  },
  {
    q: 'Is Nassau County car service to Manhattan available?',
    a: 'Yes. Door-to-door service from any Nassau County address to any Manhattan destination — Midtown, Downtown, the Upper East Side, or anywhere else — at flat rates confirmed at booking.',
  },
  {
    q: 'Do you serve both the South Shore and North Shore of Nassau County?',
    a: 'Yes. Both shores covered. South Shore communities including Valley Stream, Long Beach, and Massapequa. Gold Coast North Shore communities including Great Neck, Manhasset, Port Washington, and Roslyn.',
  },
  {
    q: 'Can I get a Nassau County black car for early morning JFK flights?',
    a: 'Yes — 24/7 service with no surge pricing. Pre-dawn pickups at 4am or 5am cost the same flat rate as any other time. Your driver is confirmed the evening before your trip.',
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

const nassauCities = [
  'Garden City', 'Great Neck', 'Mineola', 'Hempstead', 'Rockville Centre',
  'Manhasset', 'Port Washington', 'Roslyn', 'Westbury', 'Hicksville',
  'Levittown', 'Massapequa', 'Long Beach', 'Valley Stream', 'Floral Park',
  'New Hyde Park', 'Merrick', 'Bellmore', 'Freeport', 'Lynbrook',
];

const routes = [
  { from: 'Garden City → JFK Airport', time: '20–35 min' },
  { from: 'Great Neck → JFK Airport', time: '25–40 min' },
  { from: 'Rockville Centre → JFK Airport', time: '20–35 min' },
  { from: 'Mineola → JFK Airport', time: '25–40 min' },
  { from: 'Manhasset → JFK Airport', time: '30–45 min' },
  { from: 'Garden City → Manhattan (Midtown)', time: '45–60 min' },
  { from: 'Massapequa → JFK Airport', time: '30–45 min' },
  { from: 'Great Neck → LGA Airport', time: '20–30 min' },
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

export default function NassauCountyPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Nassau County', url: `${siteUrl}/services/areas/nassau-county` },
        ]}
      />
      <ServiceJsonLd
        name="Nassau County Car Service"
        description="Premium black car and chauffeur service throughout Nassau County, Long Island. Airport transfers to JFK and LGA from Garden City, Great Neck, Mineola, Manhasset, Rockville Centre and all Nassau communities. Flat-rate, TLC-licensed chauffeurs 24/7."
        areaServed="Nassau County, New York, NY"
        url={`${siteUrl}/services/areas/nassau-county`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Nassau County Car Service | JFK, LGA &amp; EWR Transfers Long Island
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car service from every Nassau County community — the Gold Coast
              North Shore to the South Shore barrier beaches. JFK is as close as 20 minutes from
              Garden City and Rockville Centre. Flat-rate, no surge, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Nassau County sits at New York City&apos;s doorstep — JFK Airport borders Queens County
              just minutes from Nassau&apos;s western communities. Eagle Eye Chauffeur serves the entire
              county with door-to-door airport transfers and Manhattan rides at flat rates confirmed
              at booking. No Long Island Rail Road connection required.
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
              Nassau County Cities &amp; Communities We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers all of Nassau County — from the incorporated villages of
              Great Neck and Port Washington on the Gold Coast to the South Shore communities of
              Long Beach, Rockville Centre, and Massapequa. Every address gets the same flat-rate
              service standard.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {nassauCities.map((city) => (
                <div
                  key={city}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your community? We serve all Nassau County addresses.{' '}
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
              Popular Nassau County Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Nassau County&apos;s proximity to JFK Airport makes it one of the fastest and most
              convenient areas for airport transfers. Estimated times under normal traffic conditions.
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
              All rates are flat. No surge pricing.{' '}
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
              What&apos;s Included with Every Nassau County Ride
            </h2>
            <p className="text-brand-grey mb-8">
              Every Eagle Eye booking — a quick Garden City to JFK hop or a Manhasset to Manhattan
              corporate transfer — comes with the same complete service. No tiers, no upsells.
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
              Why Choose Eagle Eye for Nassau County Airport Rides
            </h2>
            <p className="text-brand-grey mb-6">
              For a 5am JFK pickup from Great Neck or Rockville Centre, a professional black car
              with a confirmed driver and flat rate locked at booking ensures stress-free travel
              every time.
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
              Nassau County Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">As close as 20 min from Nassau County</div>
              </Link>
              <Link
                href="/services/areas/suffolk-county"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">Further east on Long Island</div>
              </Link>
              <Link
                href="/services/areas/long-island"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Long Island Car Service</div>
                <div className="text-sm text-brand-grey mt-1">All Long Island communities served</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Nassau County Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Nassau County community. Flat rates confirmed at booking.
              Driver confirmed the evening before. No surge pricing at any hour.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp — we respond around the clock
              for early morning airport departures and last-minute bookings.
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
