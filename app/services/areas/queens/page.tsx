import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Queens Car Service | JFK & LGA Airport Transfers',
  description:
    'Queens black car service — professional chauffeurs, flat-rate airport transfers from JFK & LaGuardia to all Queens neighborhoods. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/queens` },
  openGraph: {
    ...ogDefaults,
    title: 'Queens Car Service | JFK & LGA Airport Transfers | Eagle Eye',
    description:
      'Premium black car service across Queens. Astoria, Flushing, Jamaica, Forest Hills, Long Island City and more. Flat-rate JFK & LGA transfers, no surge.',
    url: `${getSiteUrl()}/services/areas/queens`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How much does car service from Queens to JFK cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, no meter running. Get an instant quote on our booking page by entering your Queens address and JFK as your destination. The price you see is the price you pay, every time.',
  },
  {
    q: 'How much is car service from Queens to Manhattan?',
    a: 'Rates vary by your specific Queens neighborhood and Manhattan destination, and are locked at booking with no surge pricing. Get an instant quote online or contact us directly. Neighborhoods like Astoria and Long Island City typically see shorter transit times than Jamaica or Far Rockaway.',
  },
  {
    q: 'What is the best car service near JFK Airport in Queens?',
    a: 'Eagle Eye Chauffeur provides professional black car service from all JFK terminals. Your chauffeur tracks your flight in real time and meets you at arrivals with a name sign — no waiting, no guessing. Flat rate confirmed at booking, no surge pricing, fully TLC licensed.',
  },
  {
    q: 'Do you serve all Queens neighborhoods?',
    a: 'Yes. We cover every Queens neighborhood — from Astoria and Long Island City in the west to Jamaica and Far Rockaway in the east, Bayside and College Point in the north, and Howard Beach and Ozone Park in the south. No corner of Queens is out of range.',
  },
  {
    q: 'Can I book a Queens car service for early morning airport trips?',
    a: 'Absolutely. Eagle Eye operates 24/7. Pre-dawn pickups for 4am and 5am flights are a specialty — your chauffeur is at your door on time, no matter the hour, with your rate locked and confirmed from the night before.',
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate locked at booking', desc: 'Your price is confirmed before you book — no changes for rush hour, early mornings, or bad weather.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and confirmed the evening before your trip.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, spotless vehicles every ride — the class you booked, confirmed before your trip.' },
  { title: 'Meet & greet at airport arrivals', desc: 'Your chauffeur meets you at arrivals with a name sign — flight tracked in real time, adjusted for delays.' },
  { title: 'Reliability built in', desc: 'Your driver is confirmed the evening before — no last-minute uncertainty on early morning airport runs.' },
  { title: 'Luggage assistance', desc: 'Your chauffeur loads and unloads bags at every stop — standard on every booking.' },
];

const queensNeighborhoods = [
  'Astoria',
  'Long Island City',
  'Flushing',
  'Jamaica',
  'Forest Hills',
  'Bayside',
  'Jackson Heights',
  'Woodside',
  'Ridgewood',
  'Rego Park',
  'Howard Beach',
  'Far Rockaway',
  'Kew Gardens',
  'Richmond Hill',
  'Ozone Park',
  'Springfield Gardens',
  'Elmhurst',
  'Maspeth',
  'Glendale',
  'College Point',
];

const popularRoutes = [
  { label: 'Astoria to JFK Airport', time: '25–40 min', href: '/services/airport/jfk' },
  { label: 'Long Island City to JFK Airport', time: '25–35 min', href: '/services/airport/jfk' },
  { label: 'Flushing to JFK Airport', time: '20–30 min', href: '/services/airport/jfk' },
  { label: 'Jamaica to Manhattan (Midtown)', time: '25–40 min', href: '/services/areas/manhattan' },
  { label: 'Queens to LaGuardia (LGA)', time: '10–25 min', href: '/services/airport/lga' },
  { label: 'Howard Beach to JFK Airport', time: '10–20 min', href: '/services/airport/jfk' },
  { label: 'Queens to Newark Airport (EWR)', time: '40–55 min', href: '/services/airport/ewr' },
  { label: 'Queens to Manhattan — Point-to-Point', time: '15–30 min', href: '/services/areas/manhattan' },
];

const includedItems = [
  'Flat rate confirmed at booking — price never changes',
  'Professional TLC-licensed chauffeur',
  'Luxury sedan or SUV, always clean',
  'Door-to-door pickup at your Queens address',
  'Real-time flight tracking on all airport pickups',
  'Meet & greet at JFK and LGA arrivals with name sign',
  'Driver confirmed the evening before your trip',
];

export default function QueensPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Queens', url: `${getSiteUrl()}/services/areas/queens` },
        ]}
      />
      <ServiceJsonLd
        name="Queens Car Service"
        description="Premium black car and chauffeur service throughout Queens, New York City. Airport transfers to JFK and LaGuardia from all Queens neighborhoods. Flat-rate pricing, TLC-licensed chauffeurs, 24/7 availability."
        areaServed="Queens, New York, NY"
        url={`${getSiteUrl()}/services/areas/queens`}
      />

      {/* ── HERO ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">
            Service Areas
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5 leading-tight">
            Queens Car Service
            <br className="hidden sm:block" />
            <span className="text-brand-silver"> JFK &amp; LaGuardia Airport Transfers</span>
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-10 leading-relaxed">
            Professional black car service throughout all of Queens. From Astoria to Jamaica,
            Flushing to Forest Hills — flat-rate airport transfers to JFK and LaGuardia,
            rides to Manhattan, and point-to-point service with zero surge pricing.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { stat: '20+', label: 'Neighborhoods' },
              { stat: 'JFK & LGA', label: 'Airports' },
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
            Queens Neighborhoods We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Queens is New York City&apos;s most geographically diverse borough — stretching from the
            dense urban blocks of Astoria and Long Island City to the residential streets of Bayside
            and Springfield Gardens. Eagle Eye Chauffeur covers every neighborhood, with no area
            surcharge and no coverage gaps.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {queensNeighborhoods.map((neighborhood) => (
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
            — we serve all of Queens and can confirm availability instantly.
          </p>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Popular Queens Car Service Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Queens is home to JFK and LaGuardia — two of the three major New York airports. Whether
            you&apos;re departing from Flushing or arriving at JFK from Howard Beach, all rates are flat
            and confirmed before your ride. No meter, no surge.
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
            What&apos;s Included with Every Queens Ride
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every Eagle Eye booking is a full professional experience — from the confirmation the night
            before to luggage help at your destination.
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
            Why Queens Riders Choose Eagle Eye Black Car
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            A professional black car service built for airport trips and important travel —
            especially for riders near JFK and LaGuardia who need reliability above all else.
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
            Queens Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Answers to the questions Queens riders ask most often before booking.
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
            Eagle Eye Chauffeur serves all New York City boroughs, major airports, and destinations
            beyond the city.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/airport/jfk"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">
                All JFK terminals — arrivals meet &amp; greet with real-time flight tracking.
              </div>
            </Link>
            <Link
              href="/services/airport/lga"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">LaGuardia Airport Service</div>
              <div className="text-sm text-brand-grey">
                LGA arrivals &amp; departures — flat rate from any Queens neighborhood.
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
            Book Your Queens Car Service Today
          </h2>
          <p className="text-brand-silver text-lg mb-10 max-w-xl mx-auto">
            Available 24/7. Flat rates. Professional chauffeurs. JFK, LGA, Manhattan, and every
            destination from Queens — get an instant quote online or reach us on WhatsApp.
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
