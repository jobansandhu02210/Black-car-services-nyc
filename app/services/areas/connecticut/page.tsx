import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Connecticut Black Car Service | NYC Airport Transfers',
  description:
    'Connecticut black car service — NYC airport transfers from Greenwich, Stamford, Westport, Fairfield, New Haven, Hartford. Flat rates. Professional.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/connecticut` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/connecticut` },
};

const faqs = [
  {
    q: 'Do you provide black car service from Connecticut to NYC airports?',
    a: 'Yes. We serve all Fairfield County and New Haven County communities for airport transfers to JFK, LGA, and EWR. All rates are flat and confirmed at booking — no surprises.',
  },
  {
    q: 'How far in advance should I book a CT to JFK transfer?',
    a: 'We recommend booking at least 48 hours ahead for Connecticut trips. For early morning departures or group travel, the earlier the better. Your driver is confirmed the evening before your scheduled pickup.',
  },
  {
    q: 'Are there any highway tolls extra for Connecticut rides?',
    a: 'No. All applicable tolls — including any CT highway tolls and NYC bridge and tunnel tolls — are included in your flat rate. You pay exactly what was quoted at booking, nothing more.',
  },
  {
    q: 'How long is the drive from Greenwich to JFK Airport?',
    a: 'Approximately 60–80 minutes under normal conditions. During peak I-95 congestion, allow up to 90 minutes. We build appropriate buffer time into all scheduling and monitor live traffic.',
  },
  {
    q: 'Can you pick up from home in Connecticut and go directly to JFK?',
    a: 'Yes. Door-to-door service from any Connecticut address directly to JFK, LGA, or EWR. No shuttle, no intermediate stop — your chauffeur picks you up at your door and delivers you to your terminal.',
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

const ctCities = [
  'Greenwich', 'Stamford', 'Norwalk', 'Westport', 'Fairfield',
  'Bridgeport', 'Darien', 'New Canaan', 'Wilton', 'Ridgefield',
  'Southport', 'Trumbull', 'Shelton', 'Stratford', 'Milford',
  'New Haven', 'Hartford', 'Westport', 'Glastonbury', 'West Hartford',
];

const routes = [
  { from: 'Greenwich → JFK Airport', time: '60–80 min' },
  { from: 'Stamford → JFK Airport', time: '70–90 min' },
  { from: 'Westport → JFK Airport', time: '75–95 min' },
  { from: 'Greenwich → Manhattan (Midtown)', time: '45–65 min' },
  { from: 'Stamford → LGA Airport', time: '65–85 min' },
  { from: 'New Haven → JFK Airport', time: '90–110 min' },
  { from: 'Greenwich → EWR Airport', time: '50–70 min' },
  { from: 'Fairfield → JFK Airport', time: '80–100 min' },
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

export default function ConnecticutPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Connecticut', url: `${siteUrl}/services/areas/connecticut` },
        ]}
      />
      <ServiceJsonLd
        name="Connecticut Black Car Service"
        description="Premium black car and chauffeur service throughout Connecticut. NYC airport transfers to JFK, LGA, and EWR from Greenwich, Stamford, Westport, Fairfield, New Haven, Hartford and all CT communities. Flat rates, tolls included, 24/7."
        areaServed="Connecticut, CT"
        url={`${siteUrl}/services/areas/connecticut`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Connecticut Black Car Service | NYC Airport Transfers from CT
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional chauffeur service from Greenwich, Stamford, Westport, Fairfield, New Haven,
              and all Connecticut communities. Flat-rate airport transfers to JFK, LaGuardia, and
              EWR — all tolls included, no surge pricing, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Connecticut to a New York City airport means I-95 or the Merritt Parkway, bridge and
              tunnel tolls, and traffic that can vary dramatically. Eagle Eye Chauffeur handles all
              of it — your chauffeur is confirmed the evening before, your rate is locked at booking,
              and tolls are included. No variables, no surprises.
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
              Connecticut Cities &amp; Towns We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers all of Fairfield County and New Haven County, and extends
              service statewide to Hartford and beyond. Whether you&apos;re in the Gold Coast towns of
              Greenwich and Darien or the inner-ring suburbs of Trumbull and Stratford, your
              chauffeur meets you at the door.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ctCities.map((city) => (
                <div
                  key={city}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your town? We serve all Connecticut addresses.{' '}
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
              Popular CT Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times under normal I-95 and Merritt Parkway conditions. We build
              buffer time into all scheduling and monitor live traffic on the day of your trip.
              For airport rides, we recommend a 3-hour lead before departure.
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
              What&apos;s Included with Every Connecticut Ride
            </h2>
            <p className="text-brand-grey mb-8">
              A long-distance trip from Connecticut deserves the full premium experience — and
              every Eagle Eye booking delivers exactly that, from the moment you book to the
              moment your driver drops you at the terminal.
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
              Why Choose Eagle Eye for CT to NYC Airport Rides
            </h2>
            <p className="text-brand-grey mb-6">
              For a long-distance trip from Greenwich or Westport to JFK, you need a professional
              service built for the distance — flat rate, luggage assistance, and a driver confirmed
              the night before.
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
              Connecticut Black Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">Flat-rate transfers from all CT towns</div>
              </Link>
              <Link
                href="/services/airport/lga"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">LaGuardia Airport (LGA)</div>
                <div className="text-sm text-brand-grey mt-1">Often faster from Stamford &amp; Greenwich</div>
              </Link>
              <Link
                href="/services/areas/manhattan"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Manhattan Car Service</div>
                <div className="text-sm text-brand-grey mt-1">CT to Manhattan, door-to-door</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Connecticut Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from Greenwich to Hartford. Flat rates with all tolls included.
              Driver confirmed the evening before. No surge pricing.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp. We recommend booking 48 hours
              ahead for Connecticut-to-airport trips.
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
