import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Garden City Car Service | JFK Airport Transfers NYC',
  description:
    'Garden City black car and chauffeur service — flat-rate JFK, LGA & EWR airport transfers, corporate travel, and events. TLC-licensed driver. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/garden-city` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/garden-city` },
};

const faqs = [
  {
    q: 'How long does it take from Garden City to JFK Airport?',
    a: 'Typically 20–35 minutes via the Belt Parkway or Southern State Parkway. Garden City is one of the closest Nassau County communities to JFK. We plan departure times based on live traffic and your flight time.',
  },
  {
    q: 'Do you serve Garden City for corporate and executive travel?',
    a: 'Yes. Garden City is a major Nassau County business hub. We provide executive car service for corporate meetings, Midtown Manhattan commutes, and multi-stop business days — hourly hire and point-to-point.',
  },
  {
    q: 'Is there a flat rate for Garden City to Manhattan black car?',
    a: 'Yes. Every booking includes a flat rate confirmed at the time of booking. No surge pricing, no meter, and no changes due to traffic or time of day.',
  },
  {
    q: 'Do you provide black car service for Garden City events and weddings?',
    a: 'Yes. We serve weddings, corporate events, galas, and special occasions throughout Garden City and Nassau County. Hourly service is available for multi-stop itineraries.',
  },
  {
    q: 'How far is Garden City from JFK and LaGuardia?',
    a: 'Garden City is one of the closest Nassau County communities to the airports — about 18 miles from JFK (roughly 20–35 minutes via the Belt or Southern State Parkway) and about 15 miles from LaGuardia (25–40 minutes).',
  },
  {
    q: 'How much does a car service from Garden City cost?',
    a: 'Garden City transfers are billed as a flat rate confirmed at booking, based on your address and destination, with all tolls included and no surge. Enter your trip on the booking page for an exact quote.',
  },
];

const routes = [
  { label: 'Garden City to LaGuardia (LGA)', miles: '~15 miles', time: '25–40 min' },
  { label: 'Garden City to JFK Airport', miles: '~18 miles', time: '20–35 min' },
  { label: 'Garden City to Manhattan (Midtown)', miles: '~22 miles', time: '40–65 min' },
  { label: 'Garden City to Brooklyn', miles: '~20 miles', time: '35–50 min' },
  { label: 'Garden City to Newark (EWR)', miles: '~35 miles', time: '55–80 min' },
  { label: 'Garden City to Westchester (White Plains)', miles: '~30 miles', time: '55–85 min' },
];

export default function GardenCityPage() {
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
          { name: 'Garden City', url: `${siteUrl}/services/areas/garden-city` },
        ]}
      />
      <ServiceJsonLd
        name="Garden City Car Service"
        description="Premium black car and chauffeur service in Garden City, NY. Flat-rate airport transfers to JFK, LGA, and EWR. Corporate travel, events, and 24/7 availability."
        areaServed="Garden City, Nassau County, NY"
        url={`${siteUrl}/services/areas/garden-city`}
      />

      <div className="bg-brand-offwhite">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Garden City Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Professional black car and chauffeur service in Garden City, NY. Flat-rate airport transfers to JFK in as little as 20 minutes, executive corporate rides to Manhattan, and 24/7 availability with no surge pricing — ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Routes */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Garden City Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times from Garden City under normal traffic. All rates are flat and confirmed at booking — tolls included, no surge pricing.
            </p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div key={r.label} className="bg-brand-offwhite border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-brand-black text-sm">{r.label}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              All tolls included. Flat rate confirmed at booking.{' '}
              <Link href="/book" className="underline">Get a quote →</Link>
            </p>
          </div>
        </section>

        {/* Why Eagle Eye */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Garden City Residents Choose Eagle Eye Chauffeur
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat rate locked at booking', body: 'Your price is confirmed the moment you book and never changes — not for traffic, weather, or time of day.' },
                { title: 'TLC-licensed professional chauffeur', body: 'Every driver is background-checked, licensed, and confirmed the evening before your trip.' },
                { title: 'Door-to-door pickup', body: 'Your chauffeur meets you at your home, office, or hotel entrance — not a corner or parking lot.' },
                { title: 'Flight tracking for airport rides', body: 'We monitor your flight in real time. If it is delayed or early, your driver adjusts automatically at no charge.' },
                { title: 'Luxury sedan or SUV', body: 'Clean, late-model premium vehicles — the class you booked, confirmed before every trip.' },
                { title: '24/7 availability', body: 'Early morning JFK departures, late-night arrivals, and same-day bookings — all covered.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-brand-black font-bold mt-0.5">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Garden City Car Service — FAQ
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

        {/* Related */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/areas/nassau-county" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau County communities</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">Meet & greet, flight tracking</div>
              </Link>
              <Link href="/services/areas/long-island" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Long Island Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Nassau & Suffolk Counties</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Garden City Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Flat rates confirmed at booking. Driver confirmed the evening before. Available 24/7 with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors">
                Call {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
