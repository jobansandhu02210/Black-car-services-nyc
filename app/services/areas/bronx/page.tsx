import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Bronx Car Service | NYC Airport Transfers',
  description:
    'Bronx black car service — airport transfers to JFK, LGA & EWR from all Bronx neighborhoods. Flat-rate, no surge pricing. Professional TLC-licensed.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/bronx` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/bronx` },
};

const faqs = [
  {
    q: 'How much is a black car from the Bronx to JFK Airport?',
    a: 'All rates are flat and confirmed at booking — no surge pricing ever. Visit our booking page to get an instant quote by entering your Bronx address and destination.',
  },
  {
    q: 'Which Bronx neighborhoods do you serve?',
    a: 'We serve all Bronx neighborhoods including Riverdale, Fieldston, Fordham, Co-op City, Pelham Bay, South Bronx, Mott Haven, Parkchester, Throgs Neck, Morris Park, City Island, Hunts Point, Norwood, Bedford Park, Kingsbridge, Woodlawn, University Heights, Tremont, Spuyten Duyvil, and Soundview.',
  },
  {
    q: 'How long does it take from the Bronx to JFK Airport?',
    a: 'It depends on your neighborhood. Riverdale to JFK is approximately 40–55 minutes. Co-op City and Pelham Bay are closer to 30–45 minutes. South Bronx and Mott Haven run 35–50 minutes. We recommend allowing at least 3 hours before your departure.',
  },
  {
    q: 'Do you offer early morning Bronx airport pickups?',
    a: 'Yes — 24/7, any time of day or night. Early morning pre-dawn pickups are a specialty. Your driver is confirmed the evening before your trip and there is no surge pricing regardless of the hour.',
  },
  {
    q: 'Can I book a car service from the Bronx to Manhattan?',
    a: 'Absolutely. Flat-rate rides from any Bronx neighborhood to any Manhattan destination — Midtown, Downtown, Upper West Side, or anywhere else. Door-to-door, professional chauffeur, no surprises.',
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
  'Riverdale', 'Fieldston', 'Spuyten Duyvil', 'Fordham', 'University Heights',
  'Tremont', 'Pelham Bay', 'City Island', 'Co-op City', 'Mott Haven',
  'South Bronx', 'Hunts Point', 'Throgs Neck', 'Morris Park', 'Parkchester',
  'Soundview', 'Norwood', 'Bedford Park', 'Kingsbridge', 'Woodlawn',
];

const routes = [
  { from: 'Riverdale → JFK Airport', time: '40–55 min' },
  { from: 'Fordham → JFK Airport', time: '35–50 min' },
  { from: 'Co-op City → JFK Airport', time: '30–45 min' },
  { from: 'Pelham Bay → JFK Airport', time: '30–45 min' },
  { from: 'Riverdale → Manhattan (Midtown)', time: '20–35 min' },
  { from: 'South Bronx → Manhattan', time: '15–25 min' },
  { from: 'Mott Haven → JFK Airport', time: '35–50 min' },
  { from: 'Bronx → LaGuardia (LGA)', time: '20–35 min' },
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

export default function BronxPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Bronx', url: `${siteUrl}/services/areas/bronx` },
        ]}
      />
      <ServiceJsonLd
        name="Bronx Car Service"
        description="Premium black car and chauffeur service throughout the Bronx, New York City. Airport transfers to JFK, LGA, and EWR from all Bronx neighborhoods. Flat-rate, TLC-licensed chauffeurs 24/7."
        areaServed="The Bronx, New York, NY"
        url={`${siteUrl}/services/areas/bronx`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Bronx Car Service | JFK, LGA &amp; EWR Airport Transfers
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car service from every Bronx neighborhood — Riverdale to Mott Haven,
              Co-op City to City Island. Flat-rate airport transfers to JFK, LaGuardia, and Newark.
              TLC-licensed chauffeurs available 24/7, no surge pricing ever.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              The Bronx is New York City&apos;s northernmost borough and one of its most transit-diverse.
              LaGuardia Airport is often just 20–35 minutes from eastern neighborhoods. JFK is 30–55
              minutes depending on your location. Eagle Eye Chauffeur serves every corner of the borough
              with door-to-door precision and flat rates confirmed before you book.
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
              Bronx Neighborhoods We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers every corner of the Bronx. Whether you are heading to JFK
              from Riverdale&apos;s riverside streets or catching a red-eye from Co-op City, we have a
              licensed chauffeur ready at your door — at the same flat rate, any time.
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
              Don&apos;t see your neighborhood? We serve all Bronx addresses.{' '}
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
              Popular Bronx Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times under normal traffic conditions. For airport trips we recommend
              adding buffer time — your chauffeur will factor in real-time conditions.
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
              All rates are flat. No surge pricing. Tolls included.{' '}
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
              What&apos;s Included with Every Bronx Ride
            </h2>
            <p className="text-brand-grey mb-8">
              Every Eagle Eye booking comes with the same standard of service — no tiers, no upsells,
              no surprises at the end.
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
              Why Choose Eagle Eye for Bronx Airport Runs
            </h2>
            <p className="text-brand-grey mb-6">
              For a 4am JFK pickup from Riverdale, a flat-rate black car with a confirmed driver
              is the professional choice — reliability and peace of mind when your travel cannot
              afford uncertainty.
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
              Bronx Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">Flat-rate transfers from all Bronx neighborhoods</div>
              </Link>
              <Link
                href="/services/airport/lga"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">LaGuardia Airport (LGA)</div>
                <div className="text-sm text-brand-grey mt-1">Closest airport to many Bronx neighborhoods</div>
              </Link>
              <Link
                href="/services/areas/manhattan"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Manhattan Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Bronx to Manhattan, door-to-door</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Bronx Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Bronx neighborhood. Flat rates confirmed at booking.
              Driver confirmed the evening before. No surge pricing.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us directly on WhatsApp — we respond around the clock.
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
