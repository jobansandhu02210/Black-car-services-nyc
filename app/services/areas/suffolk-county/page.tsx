import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Suffolk County Car Service | JFK LGA EWR Transfers',
  description:
    'Suffolk County black car service — JFK & LGA airport transfers from Huntington, Babylon, Brentwood, Bay Shore, Smithtown, Patchogue. Flat rates.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/suffolk-county` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/suffolk-county` },
};

const faqs = [
  {
    q: 'Do you provide black car service from Suffolk County to JFK?',
    a: 'Yes. All Suffolk County communities from Huntington and Babylon to Patchogue and Smithtown. Flat rates confirmed at booking — no surge pricing, no hidden fees.',
  },
  {
    q: 'How long does it take from Suffolk County to JFK Airport?',
    a: 'Bay Shore and Babylon are typically 35–50 minutes via the Southern State Parkway and Belt Parkway. Huntington and Smithtown run 45–65 minutes. Allow at least 3 hours before your departure time.',
  },
  {
    q: 'Is the JFK expressway toll included for Suffolk rides?',
    a: 'Yes. All applicable tolls — including the JFK expressway, Verrazzano, and any parkway tolls — are included in your flat-rate quote. You pay exactly what was confirmed at booking.',
  },
  {
    q: 'Do you pick up from Ronkonkoma and MacArthur Airport area?',
    a: 'Yes. We serve the entire Ronkonkoma area and can transfer you to JFK, LGA, or EWR from there. We also serve Long Island MacArthur Airport (ISP) for both arrivals and departures.',
  },
  {
    q: 'Can I book a Suffolk County car service for early morning airport trips?',
    a: 'Yes. 24/7 service with no surge pricing for early morning departures. Pre-dawn pickups at 4am or 5am cost the same flat rate as any other time. Your driver is confirmed the evening before.',
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

const suffolkCities = [
  'Huntington', 'Melville', 'Babylon', 'Bay Shore', 'Brentwood',
  'Patchogue', 'Smithtown', 'Hauppauge', 'Commack', 'Ronkonkoma',
  'Islip', 'Bohemia', 'Holbrook', 'Sayville', 'West Islip',
  'Deer Park', 'Massapequa Park', 'Amityville', 'Copiague', 'Lindenhurst',
];

const routes = [
  { from: 'Huntington → JFK Airport', time: '45–60 min' },
  { from: 'Babylon → JFK Airport', time: '40–55 min' },
  { from: 'Bay Shore → JFK Airport', time: '35–50 min' },
  { from: 'Smithtown → JFK Airport', time: '50–65 min' },
  { from: 'Ronkonkoma → JFK Airport', time: '40–55 min' },
  { from: 'Huntington → Manhattan', time: '60–80 min' },
  { from: 'Hauppauge → JFK Airport', time: '45–60 min' },
  { from: 'Patchogue → JFK Airport', time: '50–65 min' },
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

export default function SuffolkCountyPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Suffolk County', url: `${siteUrl}/services/areas/suffolk-county` },
        ]}
      />
      <ServiceJsonLd
        name="Suffolk County Car Service"
        description="Premium black car and chauffeur service throughout Suffolk County, Long Island. Airport transfers to JFK, LGA, and EWR from Huntington, Babylon, Bay Shore, Smithtown, Patchogue, Ronkonkoma, and all Suffolk communities. Flat-rate, TLC-licensed chauffeurs 24/7."
        areaServed="Suffolk County, Long Island, New York, NY"
        url={`${siteUrl}/services/areas/suffolk-county`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Suffolk County Car Service | JFK, LGA &amp; EWR Transfers Long Island
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car service from every Suffolk County community — Huntington and
              Babylon in the west to Patchogue and Smithtown in the heart of the Island. JFK Airport
              is 35–65 minutes from most towns. Flat-rate, no surge, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Suffolk County stretches across the heart and east of Long Island — and whether you&apos;re
              heading to JFK from Bay Shore or connecting to Manhattan from Huntington, Eagle Eye
              Chauffeur serves every address with a TLC-licensed professional, a clean luxury vehicle,
              and a rate locked at booking. No Long Island Rail Road. No guessing.
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
              Suffolk County Cities &amp; Communities We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers all of Suffolk County — from western communities like Babylon,
              Bay Shore, and Lindenhurst to central hubs like Ronkonkoma and Hauppauge. Every address
              receives the same door-to-door flat-rate standard whether you&apos;re in a waterfront
              community or an inland neighborhood.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {suffolkCities.map((city) => (
                <div
                  key={city}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your community? We serve all Suffolk County addresses.{' '}
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
              Popular Suffolk County Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times under normal traffic on the Southern State, Long Island Expressway,
              and Belt Parkway. For airport trips we recommend allowing at least 3 hours before your
              scheduled departure to account for check-in and security.
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
              What&apos;s Included with Every Suffolk County Ride
            </h2>
            <p className="text-brand-grey mb-8">
              Every Eagle Eye booking — a quick Bay Shore to JFK run or a Huntington to Manhattan
              corporate transfer — comes with the full premium package. No tiers, no surprise add-ons,
              no upcharges at the end.
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
              Why Choose Eagle Eye for Suffolk County Airport Rides
            </h2>
            <p className="text-brand-grey mb-6">
              For a pre-dawn JFK pickup from Ronkonkoma or Huntington, a flat-rate black car with
              a confirmed professional chauffeur and luggage assistance is the reliable choice
              for every airport departure.
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
              Suffolk County Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">35–65 min from Suffolk County communities</div>
              </Link>
              <Link
                href="/services/areas/nassau-county"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">Western Long Island — closer to JFK</div>
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
              Book Your Suffolk County Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Suffolk County community. Flat rates with all tolls included.
              Driver confirmed the evening before. No surge pricing at any hour.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp — we respond around the clock
              for early morning airport departures and same-day bookings.
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
