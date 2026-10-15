import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Brooklyn Black Car Service | JFK LGA EWR Transfers',
  description:
    'Brooklyn black car service — professional chauffeurs, flat-rate airport transfers to JFK, LGA & EWR from every Brooklyn neighborhood. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/brooklyn` },
  openGraph: {
    ...ogDefaults,
    title: 'Brooklyn Black Car Service | JFK LGA EWR Transfers | Eagle Eye',
    description:
      'Premium black car service across all Brooklyn neighborhoods. Flat-rate airport transfers, chauffeur for events and corporate travel. No surge.',
    url: `${getSiteUrl()}/services/areas/brooklyn`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How much is a black car from Brooklyn to JFK Airport?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, no last-minute changes. Get an instant quote on our booking page by entering your Brooklyn address and JFK as your destination. What you see is what you pay.',
  },
  {
    q: 'What neighborhoods in Brooklyn do you serve?',
    a: 'We cover all of Brooklyn — from DUMBO, Williamsburg, and Brooklyn Heights in the north to Bay Ridge, Dyker Heights, and Gravesend in the south, and everything in between including Park Slope, Flatbush, Crown Heights, Bushwick, Red Hook, Carroll Gardens, and every other neighborhood. No area is out of range.',
  },
  {
    q: 'Is Eagle Eye black car service reliable for airport trips?',
    a: 'Yes. Your driver is confirmed the evening before your trip — not minutes before pickup. Your rate is flat and locked, so there is no surprise at 5am on a Monday. Your chauffeur meets you at the door and helps with luggage — every booking, every time.',
  },
  {
    q: 'Can I book a black car for a Brooklyn event or wedding?',
    a: 'Absolutely. We provide professional chauffeur service for weddings, corporate events, proms, and special occasions throughout Brooklyn. Hourly packages are available for multi-stop itineraries. Contact us to discuss your event requirements.',
  },
  {
    q: 'How far in advance should I book a Brooklyn black car pickup?',
    a: 'We recommend booking at least 24 hours in advance for standard airport transfers and point-to-point rides. For weddings, events, or multi-vehicle coordination, 48–72 hours is preferred to ensure vehicle and driver availability.',
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate locked at booking', desc: 'Your price is confirmed before you book — no changes for early mornings, peak hours, or bad weather.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and confirmed the evening before your trip.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, spotless vehicles every ride — the class you booked, confirmed before your trip.' },
  { title: 'Exact door pickup', desc: 'Your chauffeur meets you at your building entrance or hotel lobby anywhere in Brooklyn.' },
  { title: 'Reliability built in', desc: 'Your driver is confirmed the evening before — no last-minute uncertainty on early morning airport runs.' },
  { title: 'Luggage assistance', desc: 'Your chauffeur loads and unloads bags at pickup and drop-off — standard on every booking.' },
];

const brooklynNeighborhoods = [
  'DUMBO',
  'Brooklyn Heights',
  'Williamsburg',
  'Greenpoint',
  'Park Slope',
  'Prospect Heights',
  'Downtown Brooklyn',
  'Fort Greene',
  'Bay Ridge',
  'Dyker Heights',
  'Sheepshead Bay',
  'Marine Park',
  'Coney Island',
  'Brighton Beach',
  'Bensonhurst',
  'Gravesend',
  'Flatbush',
  'Crown Heights',
  'Bushwick',
  'Red Hook',
];

const popularRoutes = [
  { label: 'Brooklyn to JFK Airport', time: '20–35 min', href: '/services/routes/brooklyn-to-jfk-black-car-service' },
  { label: 'Brooklyn to LaGuardia (LGA)', time: '25–40 min', href: '/services/airport/lga' },
  { label: 'Brooklyn to Newark (EWR)', time: '40–55 min', href: '/services/airport/ewr' },
  { label: 'Brooklyn to Manhattan', time: '20–35 min', href: '/services/routes/brooklyn-to-manhattan-black-car-service' },
  { label: 'JFK Airport Arrivals — Meet & Greet', time: 'Flight tracking included', href: '/services/airport/jfk' },
  { label: 'Brooklyn to Westchester', time: '60–80 min', href: '/services/areas/westchester' },
  { label: 'Brooklyn to The Hamptons', time: '2–3 hrs', href: '/services/areas/hamptons' },
  { label: 'Brooklyn to Newark City', time: '40–55 min', href: '/services/areas/new-jersey' },
];

const includedItems = [
  'Flat rate confirmed at booking — price never changes',
  'Professional TLC-licensed chauffeur',
  'Luxury sedan or SUV, always clean',
  'Door-to-door pickup at your Brooklyn address',
  'Luggage assistance at pickup and drop-off',
  'Real-time flight tracking on airport pickups',
  'Driver confirmed the evening before your trip',
];

export default function BrooklynPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Brooklyn', url: `${getSiteUrl()}/services/areas/brooklyn` },
        ]}
      />
      <ServiceJsonLd
        name="Brooklyn Black Car Service"
        description="Premium black car and chauffeur service throughout Brooklyn, New York City. Airport transfers to JFK, LGA, and EWR from all Brooklyn neighborhoods. Flat-rate pricing, TLC-licensed chauffeurs, 24/7 availability."
        areaServed="Brooklyn, New York, NY"
        url={`${getSiteUrl()}/services/areas/brooklyn`}
      />

      {/* ── HERO ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">
            Service Areas
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5 leading-tight">
            Brooklyn Black Car Service
            <br className="hidden sm:block" />
            <span className="text-brand-silver"> JFK, LGA &amp; EWR Airport Transfers</span>
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-10 leading-relaxed">
            Executive black car service across all 24+ Brooklyn neighborhoods. From DUMBO to Bay Ridge,
            Williamsburg to Flatbush — flat-rate pricing, professional chauffeur at your door,
            and zero surge pricing for every airport transfer or point-to-point ride.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { stat: '24+', label: 'Neighborhoods' },
              { stat: '4', label: 'Airports Served' },
              { stat: '24/7', label: 'Availability' },
              { stat: 'TLC', label: 'Licensed' },
            ].map(({ stat, label }) => (
              <div key={label} className="border border-brand-charcoal p-4 text-center">
                <div className="font-serif text-2xl font-semibold text-brand-white">{stat}</div>
                <div className="text-brand-silver text-xs uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now — Get an Instant Quote
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.121 1.526 5.849L0 24l6.302-1.503A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.001-1.368l-.36-.213-3.733.89.922-3.639-.235-.374A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS GRID ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Brooklyn Neighborhoods We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Eagle Eye Chauffeur picks up and drops off throughout Brooklyn, covering every neighborhood
            from the waterfront to the outer edges of the borough. No area surcharge, no coverage gap.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {brooklynNeighborhoods.map((neighborhood) => (
              <div
                key={neighborhood}
                className="bg-brand-white border border-brand-light px-4 py-3 text-sm font-medium text-brand-black text-center hover:border-brand-dark transition-colors"
              >
                {neighborhood}
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-6">
            Don&apos;t see your neighborhood?{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline text-brand-black">
              Call us at {CONTACT_PHONE_DISPLAY}
            </a>{' '}
            — we serve all of Brooklyn and can confirm availability instantly.
          </p>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Popular Brooklyn Car Service Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            All rates are flat and confirmed before your ride. No meter running, no surge pricing —
            whether it&apos;s 5am for a JFK departure or a late-night return from the Hamptons.
          </p>
          <div className="space-y-3">
            {popularRoutes.map((route) => (
              <Link
                key={route.label}
                href={route.href}
                className="flex justify-between items-center bg-brand-offwhite border border-brand-light px-5 py-4 hover:border-brand-dark hover:bg-brand-white transition-colors group"
              >
                <span className="font-medium text-brand-black group-hover:text-brand-charcoal">
                  {route.label}
                </span>
                <span className="text-brand-grey text-sm shrink-0 ml-4">{route.time}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-5">
            For a quote,{' '}
            <Link href="/book" className="underline text-brand-black">
              use our instant booking tool →
            </Link>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included with Every Brooklyn Ride
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every booking with Eagle Eye is a complete, professional experience — not just a car and a driver.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-brand-white border border-brand-light px-5 py-4"
              >
                <span className="text-brand-black font-bold text-lg mt-0.5 shrink-0">✓</span>
                <span className="text-brand-grey text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Brooklyn Riders Choose Eagle Eye Black Car
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            A professional black car service built for airport trips and important travel —
            flat rates, confirmed drivers, and the full premium experience on every booking.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {eaglEyeBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-3 bg-brand-offwhite border border-brand-light px-5 py-4"
              >
                <span className="text-brand-black font-bold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <div className="font-medium text-brand-black mb-1">{benefit.title}</div>
                  <div className="text-brand-grey text-sm">{benefit.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Brooklyn Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Answers to the questions Brooklyn riders ask most often before booking.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-brand-white border border-brand-light px-6 py-5"
              >
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-6">
            Still have questions?{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline text-brand-black">
              Email us
            </a>{' '}
            or{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline text-brand-black">
              call {CONTACT_PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Related Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Eagle Eye Chauffeur serves all New York City boroughs and beyond.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/brooklyn-to-jfk-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Brooklyn → JFK</div>
              <div className="text-sm text-brand-grey">
                Direct black car transfers to JFK — meet &amp; greet, flight tracking, flat rate.
              </div>
            </Link>
            <Link
              href="/services/airport/jfk"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">
                All JFK terminals — arrivals, departures, and meet &amp; greet.
              </div>
            </Link>
            <Link
              href="/services/areas/manhattan"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Manhattan Car Service</div>
              <div className="text-sm text-brand-grey">
                Point-to-point and hourly chauffeur throughout all of Manhattan.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-brand-black py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Brooklyn Black Car Today
          </h2>
          <p className="text-brand-silver text-lg mb-10 max-w-xl mx-auto">
            Available 24/7. Flat rates. Professional chauffeurs. JFK, LGA, EWR, and every destination
            from Brooklyn — get an instant quote online or reach us directly on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-10 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Get an Instant Quote
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.121 1.526 5.849L0 24l6.302-1.503A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.001-1.368l-.36-.213-3.733.89.922-3.639-.235-.374A9.77 9.77 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              Book on WhatsApp
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-8">
            Questions? Call us at{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline">
              {CONTACT_PHONE_DISPLAY}
            </a>{' '}
            or email{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
