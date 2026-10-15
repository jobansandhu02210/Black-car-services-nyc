import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Westchester Car Service | NYC Airport Transfers',
  description:
    'Westchester black car service — airport transfers to JFK, LGA & EWR from White Plains, Scarsdale, Yonkers, New Rochelle, Tarrytown, Bronxville. Flat.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/westchester` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/westchester` },
};

const faqs = [
  {
    q: 'Do you serve all of Westchester County for black car service?',
    a: 'Yes. From Yonkers and Bronxville in the south to Chappaqua and Pleasantville in the north, and everywhere between — including White Plains, Scarsdale, Larchmont, New Rochelle, Tarrytown, and the Greenwich border communities.',
  },
  {
    q: 'How long does it take from Westchester to JFK Airport?',
    a: 'Bronxville and Yonkers are typically 40–55 minutes via the Hutchinson River Parkway and Belt Parkway. White Plains and Scarsdale run 50–70 minutes. We recommend allowing 3 hours before your scheduled departure.',
  },
  {
    q: 'Do you offer Westchester to Manhattan black car service?',
    a: 'Yes. Daily service from all Westchester communities to any Manhattan destination — Midtown, Downtown, the Upper East Side, or anywhere else. Flat rate, door-to-door, no waiting for surge pricing to settle.',
  },
  {
    q: 'Is there a dedicated Westchester airport (HPN) transfer service?',
    a: 'Yes. We serve Westchester County Airport (HPN) in White Plains for both arrivals and departures. See our HPN airport page for full details on terminal pickup and drop-off procedures.',
  },
  {
    q: 'Can I set up a corporate account for regular Westchester rides?',
    a: 'Yes. Many Westchester executives use Eagle Eye for daily NYC commutes and airport transfers. Contact us to arrange a corporate account with consolidated billing and priority booking.',
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

const westchesterCities = [
  'White Plains', 'Scarsdale', 'Yonkers', 'New Rochelle', 'Bronxville',
  'Larchmont', 'Mamaroneck', 'Tarrytown', 'Sleepy Hollow', 'Dobbs Ferry',
  'Hastings-on-Hudson', 'Ardsley', 'Tuckahoe', 'Pelham', 'Port Chester',
  'Rye', 'Harrison', 'Greenwich border', 'Chappaqua', 'Pleasantville',
];

const routes = [
  { from: 'White Plains → JFK Airport', time: '50–70 min' },
  { from: 'Scarsdale → JFK Airport', time: '45–65 min' },
  { from: 'Bronxville → JFK Airport', time: '40–55 min' },
  { from: 'Yonkers → JFK Airport', time: '45–60 min' },
  { from: 'White Plains → Manhattan (Midtown)', time: '35–55 min' },
  { from: 'Tarrytown → JFK Airport', time: '55–75 min' },
  { from: 'New Rochelle → JFK Airport', time: '40–55 min' },
  { from: 'White Plains → LGA Airport', time: '40–55 min' },
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

export default function WestchesterPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Westchester', url: `${siteUrl}/services/areas/westchester` },
        ]}
      />
      <ServiceJsonLd
        name="Westchester Car Service"
        description="Premium black car and chauffeur service throughout Westchester County. NYC airport transfers to JFK, LGA, EWR, and HPN from White Plains, Scarsdale, Yonkers, New Rochelle, Bronxville, Tarrytown, and all Westchester communities. Flat rates, TLC-licensed chauffeurs 24/7."
        areaServed="Westchester County, New York, NY"
        url={`${siteUrl}/services/areas/westchester`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Westchester Car Service | NYC Airport Transfers &amp; Black Car
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car service from every Westchester County community — Yonkers and
              Bronxville in the south to Chappaqua and Pleasantville in the north. JFK is 40–70
              minutes. Manhattan is 35–55 minutes. Flat-rate, no surge, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Westchester County sits directly above New York City — a position that makes it
              executive commuter territory for some of the country&apos;s most demanding travelers.
              Eagle Eye Chauffeur serves every community from the Sound Shore to the Hudson River
              with door-to-door airport transfers and Manhattan rides. Your chauffeur is confirmed
              the evening before. Your rate is locked at booking.
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
              Westchester County Cities &amp; Communities We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers all of Westchester County — from the affluent Sound Shore
              communities of Larchmont, Mamaroneck, and New Rochelle to the executive corridors of
              White Plains and Scarsdale, and from the Hudson River towns of Tarrytown and Sleepy
              Hollow to the northern suburbs of Chappaqua and Pleasantville. Every address gets the
              same flat-rate standard.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {westchesterCities.map((city) => (
                <div
                  key={city}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your community? We serve all Westchester County addresses.{' '}
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
              Popular Westchester Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times under normal conditions on the Hutchinson River Parkway,
              Cross County Expressway, and I-95. We monitor live traffic on the day of your trip
              and build appropriate buffer time into all airport scheduling.
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
              What&apos;s Included with Every Westchester Ride
            </h2>
            <p className="text-brand-grey mb-8">
              Whether it&apos;s a 6am JFK departure from Scarsdale or a White Plains to Midtown
              corporate transfer, every Eagle Eye booking delivers the same complete service.
              No tiers, no upsells, no bill shock at drop-off.
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
              Why Choose Eagle Eye for Westchester Airport Rides
            </h2>
            <p className="text-brand-grey mb-6">
              For a 5am JFK pickup from White Plains or Bronxville, a confirmed professional black
              car with a flat rate locked in means a seamless morning — no uncertainty, no
              surprises as your departure approaches.
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
              Westchester Car Service — Frequently Asked Questions
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
                href="/services/airport/hpn"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">HPN Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">Westchester County Airport transfers</div>
              </Link>
              <Link
                href="/services/airport/jfk"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">JFK Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">40–70 min from Westchester County</div>
              </Link>
              <Link
                href="/services/areas/manhattan"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Manhattan Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Westchester to Manhattan, door-to-door</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Westchester Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Westchester community. Flat rates confirmed at booking.
              Driver confirmed the evening before. No surge pricing at any hour.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp. Corporate accounts available
              for executives who travel regularly between Westchester and NYC.
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
