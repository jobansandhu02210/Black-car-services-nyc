import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Upstate New York Car Service | NYC Airport Transfers',
  description:
    'Upstate New York car service to JFK, LGA & EWR — flat-rate airport transfers from the Hudson Valley, Catskills, Poughkeepsie & Albany. No surge, 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/upstate-ny` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/upstate-ny` },
};

const faqs = [
  {
    q: 'Do you provide black car service from upstate New York to NYC airports?',
    a: 'Yes. We serve Hudson Valley, the Catskill region, and upstate communities for airport transfers to JFK, LGA, and EWR. All rates are flat and confirmed at booking — no surge pricing for long-distance trips.',
  },
  {
    q: 'How long does it take from Poughkeepsie to JFK Airport?',
    a: 'Approximately 90–120 minutes depending on traffic on I-87 (New York State Thruway) and the Taconic State Parkway. We build in appropriate travel buffer to ensure on-time airport arrival.',
  },
  {
    q: 'Is long-distance upstate service available 24/7?',
    a: 'Yes. Early morning departures from the Hudson Valley are common — your driver is confirmed the evening before at the same flat rate regardless of hour or day. No surge premium for pre-dawn pickups.',
  },
  {
    q: 'How does pricing work for upstate New York rides?',
    a: 'All rates are flat and confirmed at booking. No surge pricing, no meters, no variables. Get an instant quote on our booking page by entering your exact upstate pickup address and airport destination.',
  },
  {
    q: 'Can you pick up in the Catskills and drive to JFK?',
    a: 'Yes. Woodstock, Kingston, Saugerties, and surrounding Catskill communities are fully served for NYC airport transfers and Manhattan-bound rides. Flat rates for all Catskill-to-JFK trips.',
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

const upstateAreas = [
  'Hudson Valley', 'Catskills', 'Poughkeepsie', 'Newburgh', 'Kingston',
  'Woodstock', 'Hyde Park', 'Rhinebeck', 'Millbrook', 'Cold Spring',
  'Beacon', 'Peekskill', 'Ossining', 'Albany', 'Schenectady',
  'Troy', 'Saratoga Springs', 'New Paltz', 'Saugerties', 'Yonkers border',
];

const routes = [
  { from: 'Poughkeepsie → JFK Airport', time: '90–120 min' },
  { from: 'Newburgh → JFK Airport', time: '75–100 min' },
  { from: 'Rhinebeck → JFK Airport', time: '100–130 min' },
  { from: 'Beacon → JFK Airport', time: '80–105 min' },
  { from: 'Albany → JFK Airport', time: '150–180 min' },
  { from: 'Kingston → JFK Airport', time: '110–140 min' },
  { from: 'Woodstock → JFK Airport', time: '120–150 min' },
  { from: 'New Paltz → JFK Airport', time: '95–120 min' },
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

export default function UpstateNYPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Upstate New York', url: `${siteUrl}/services/areas/upstate-ny` },
        ]}
      />
      <ServiceJsonLd
        name="Upstate New York Car Service"
        description="Premium black car and chauffeur service throughout Upstate New York and the Hudson Valley. NYC airport transfers to JFK, LGA, and EWR from Poughkeepsie, Newburgh, Kingston, Woodstock, Rhinebeck, Albany, and all Hudson Valley and Catskill communities. Flat rates, TLC-licensed chauffeurs 24/7."
        areaServed="Hudson Valley, Catskills, Upstate New York, NY"
        url={`${siteUrl}/services/areas/upstate-ny`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Upstate New York Car Service | NYC Airport Transfers
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car service from Hudson Valley, the Catskills, and upstate
              New York to JFK, LaGuardia, and Newark airports. Poughkeepsie is 90 minutes from JFK.
              Newburgh is 75. Flat-rate, no surge, confirmed driver, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Upstate New York to a New York City airport is a long-distance run that demands a
              professional — someone who knows the I-87, the Taconic, and the approach to JFK.
              Eagle Eye Chauffeur handles every detail: your rate is locked at booking, tolls are
              included, and your driver is confirmed the evening before. No surprises on a
              two-hour morning drive to the airport.
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
              Upstate New York &amp; Hudson Valley Areas We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur serves the full Hudson Valley corridor — from Peekskill and Cold
              Spring in the south to Poughkeepsie, Rhinebeck, and Kingston in the mid-valley — and
              extends service to the Catskills, Albany, Saratoga Springs, and beyond. Long-distance
              airport transfers are a core specialty, with flat rates for every run.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {upstateAreas.map((area) => (
                <div
                  key={area}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your area? We serve all upstate New York addresses.{' '}
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
              Popular Upstate NY Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times under normal conditions on I-87, the Taconic State Parkway, and
              Route 9. Long-distance times can vary with traffic — we schedule buffer time into all
              airport runs and monitor conditions in real time on your travel day.
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
              What&apos;s Included with Every Upstate NY Ride
            </h2>
            <p className="text-brand-grey mb-8">
              A long-distance run from the Hudson Valley or Catskills deserves the full premium
              experience — and every Eagle Eye booking delivers exactly that, from the moment you
              book to the moment your driver drops you at the terminal.
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
              Why Choose Eagle Eye for Upstate NY to NYC Airport Rides
            </h2>
            <p className="text-brand-grey mb-6">
              For a 90-minute run from Poughkeepsie or a 2-hour drive from Woodstock to JFK,
              long-distance travel demands a professional — flat rate, confirmed driver, luggage
              assistance, and all tolls included.
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
              Upstate New York Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">90–180 min from upstate communities</div>
              </Link>
              <Link
                href="/services/areas/westchester"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Westchester Service</div>
                <div className="text-sm text-brand-grey mt-1">Southern Westchester — closer to JFK</div>
              </Link>
              <Link
                href="/services/areas/manhattan"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Manhattan Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Upstate to Manhattan, door-to-door</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Upstate New York Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from Hudson Valley, the Catskills, Albany, and all upstate communities.
              Flat rates with all tolls included. Driver confirmed the evening before.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp. We recommend booking 48 hours
              ahead for long-distance upstate-to-airport trips.
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
