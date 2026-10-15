import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import {
  hamptonOrigins,
  getHamptonsDestinationSlugs,
  hamptonsDestinationName,
  hamptonsRouteSlug,
} from '@/lib/hamptons-routes-data';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Hamptons Car Service | NYC & JFK Airport Transfers',
  description:
    'Hamptons black car service — NYC & JFK airport transfers from East Hampton, Southampton, Bridgehampton, Sag Harbor, Montauk. Flat rates. Professional.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hamptons` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/hamptons` },
};

const faqs = [
  {
    q: 'Do you provide car service from the Hamptons to JFK Airport?',
    a: 'Yes. East Hampton, Southampton, Bridgehampton, Montauk, and all Hamptons communities are served for JFK airport transfers. Flat rates confirmed at booking — no surge pricing during summer weekends.',
  },
  {
    q: 'How long does it take from East Hampton to JFK Airport?',
    a: 'Approximately 90–120 minutes in normal traffic via the LIE or Sunrise Highway. During peak summer season — particularly Friday afternoons — allow 2.5–3 hours. We plan routes and schedules accordingly.',
  },
  {
    q: 'Can you drive from the Hamptons to Manhattan?',
    a: 'Yes. Door-to-door service from any Hamptons address to any Manhattan destination. Flat rate, luxury vehicle, and a professional chauffeur who knows every Hamptons route and the best way into the city.',
  },
  {
    q: 'Is there surge pricing for Hamptons rides on summer weekends?',
    a: 'Never. Our price is flat and locked at booking regardless of season, demand, or day of week. A summer Friday ride to JFK costs the same as a Tuesday in January — confirmed the moment you book.',
  },
  {
    q: 'Can you pick up multiple guests at different Hamptons addresses?',
    a: 'Yes, with coordination. Multiple stops can be arranged for group travel across Hamptons communities. Contact us for multi-stop itineraries and we\'ll build the routing and timing.',
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate locked at booking', desc: 'Your price is confirmed before you book — no changes for season, weekend, or demand.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and trained to a professional service standard.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, late-model vehicles in the class you booked — confirmed before your trip.' },
  { title: 'Exact door pickup', desc: 'Your chauffeur meets you at your building entrance, home, or hotel — not a nearby corner.' },
  { title: 'Driver confirmed the night before', desc: 'You receive your driver\'s details in advance, not a last-minute assignment.' },
  { title: '24/7 phone & WhatsApp support', desc: 'Reach us any time — including early morning airport departures and last-minute bookings.' },
];

const hamptonsCommunities = [
  'East Hampton', 'Southampton', 'Bridgehampton', 'Sag Harbor', 'Water Mill',
  'Wainscott', 'Montauk', 'Amagansett', 'Quogue', 'Westhampton Beach',
  'Hampton Bays', 'North Haven', 'Shelter Island', 'Springs', 'Sagaponack',
];

const routes = [
  { from: 'East Hampton → JFK Airport', time: '90–120 min' },
  { from: 'Southampton → JFK Airport', time: '85–115 min' },
  { from: 'Bridgehampton → JFK Airport', time: '90–120 min' },
  { from: 'Montauk → JFK Airport', time: '120–150 min' },
  { from: 'East Hampton → Manhattan (Midtown)', time: '100–140 min' },
  { from: 'Southampton → Manhattan', time: '90–130 min' },
  { from: 'Sag Harbor → JFK Airport', time: '95–125 min' },
  { from: 'Westhampton Beach → JFK Airport', time: '70–90 min' },
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

export default function HamptonsPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'The Hamptons', url: `${siteUrl}/services/areas/hamptons` },
        ]}
      />
      <ServiceJsonLd
        name="Hamptons Car Service"
        description="Premium black car and chauffeur service throughout the Hamptons. NYC and JFK airport transfers from East Hampton, Southampton, Bridgehampton, Sag Harbor, Montauk, Westhampton Beach, and all Hamptons communities. Flat rates locked at booking — no summer surge. TLC-licensed chauffeurs 24/7."
        areaServed="The Hamptons, East Hampton, Southampton, Suffolk County, New York, NY"
        url={`${siteUrl}/services/areas/hamptons`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Hamptons Car Service | NYC &amp; JFK Airport Transfers
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car service from every Hamptons community — East Hampton and
              Southampton to Montauk and Sag Harbor. JFK is 85–120 minutes. Manhattan is 90–140
              minutes. Flat-rate, no summer surge, confirmed driver, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              The Hamptons is New York&apos;s premier seasonal destination — and getting there or
              departing from a summer address demands a driver who knows the routes and a price
              that doesn&apos;t change with the season. Eagle Eye Chauffeur serves every Hamptons
              community with door-to-door service, a rate locked at booking, and a professional
              chauffeur confirmed the evening before. No Jitney stops. No surge pricing on Fridays.
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

        {/* Communities grid */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Hamptons Communities We Serve
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers all Hamptons communities on the East End of Long Island —
              from Westhampton Beach in the west to Montauk at the tip of the Island. Whether
              you&apos;re departing from a Southampton estate, an East Hampton village house, or a
              Sag Harbor waterfront property, your chauffeur comes to your door.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {hamptonsCommunities.map((community) => (
                <div
                  key={community}
                  className="p-3 bg-brand-white border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {community}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Don&apos;t see your community? We serve all Hamptons and East End addresses.{' '}
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
              Popular Hamptons Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times under normal conditions via the LIE, Sunrise Highway, or
              Route 27. Summer Friday afternoon traffic can extend these times significantly —
              we plan routes and departure windows accordingly to ensure you reach the airport
              with time to spare.
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
              All rates are flat. No surge pricing — even on summer Fridays.{' '}
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
              What&apos;s Included with Every Hamptons Ride
            </h2>
            <p className="text-brand-grey mb-8">
              Every Eagle Eye booking — a Montauk to JFK airport transfer or a Southampton to
              Manhattan corporate run — comes with the full premium package. No summer tiers,
              no weekend surcharges, no surprise add-ons at drop-off.
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
              Why Choose Eagle Eye for Hamptons Airport Rides
            </h2>
            <p className="text-brand-grey mb-6">
              On a summer Friday, getting from East Hampton to JFK demands a professional black car
              with a flat rate locked at booking and a confirmed driver — no variables, no surprises
              when your departure cannot wait.
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

        {/* Hamptons routes by destination — links every pickup-area route page */}
        <section className="py-16 bg-brand-offwhite">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              Hamptons Car Service Routes by Pickup Area
            </h2>
            <p className="text-brand-grey mb-6 max-w-2xl">
              Choose your Hamptons destination, then your NYC pickup area or airport. Every route is a flat rate with door-to-door service and no surge pricing.
            </p>
            <div className="space-y-3">
              {getHamptonsDestinationSlugs().map((dest) => (
                <details key={dest} className="bg-brand-white border border-brand-light p-4 group">
                  <summary className="cursor-pointer font-semibold text-brand-black">
                    Car service to {hamptonsDestinationName(dest)}
                  </summary>
                  <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm">
                    {Object.entries(hamptonOrigins).map(([originSlug, origin]) => (
                      <li key={originSlug}>
                        <Link
                          href={`/services/routes/${hamptonsRouteSlug(originSlug, dest)}`}
                          className="text-brand-charcoal underline hover:text-brand-black"
                        >
                          {origin.name} to {hamptonsDestinationName(dest)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Hamptons Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">85–150 min from Hamptons communities</div>
              </Link>
              <Link
                href="/services/areas/long-island"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Long Island Car Service</div>
                <div className="text-sm text-brand-grey mt-1">All Long Island communities served</div>
              </Link>
              <Link
                href="/services/point-to-point"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Point-to-Point Service</div>
                <div className="text-sm text-brand-grey mt-1">Multi-stop and custom Hamptons routes</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Hamptons Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Hamptons community. Flat rates confirmed at booking.
              No summer surge. Driver confirmed the evening before your trip.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Get an instant quote online or reach us on WhatsApp. Summer weekends book quickly —
              we recommend reserving your Hamptons ride as early as possible.
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
