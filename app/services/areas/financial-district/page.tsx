import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Financial District Black Car Service NYC',
  description:
    'Financial District black car service NYC — Wall Street chauffeurs for early airport runs to JFK, LGA & EWR, FiDi corporate accounts, hourly hire for.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/financial-district` },
  openGraph: {
    ...ogDefaults,
    title: 'Financial District Black Car Service NYC | Eagle Eye',
    description: 'Wall Street black car service for finance professionals. Early morning JFK runs, FiDi corporate accounts, hourly hire, and downtown Manhattan.',
    url: `${getSiteUrl()}/services/areas/financial-district`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you offer early morning airport runs from the Financial District?',
    a: 'Yes. Early morning departures are among our most common bookings in FiDi. Finance professionals regularly need 4 a.m. or 5 a.m. pickups for pre-market flights to JFK, LGA, or EWR. Your chauffeur is confirmed the night before, vehicle is at your door at the agreed time — no last-minute scrambles. Pre-booking is always recommended for early departures.',
  },
  {
    q: 'Is hourly black car hire available for Wall Street and FiDi finance professionals?',
    a: 'Absolutely. We provide dedicated hourly black car service for finance professionals in the Financial District — bank meetings, multi-stop deal roadshows, client entertainment runs between Lower Manhattan and Midtown. Your chauffeur stays with you for the full booking period without re-booking between stops.',
  },
  {
    q: 'How do I get a black car from the Financial District to JFK?',
    a: 'Book online at our booking page or message us on WhatsApp with your FiDi address, JFK terminal, and departure time. We confirm your flat rate immediately — no surge, no changes. For arrivals, we track your incoming flight and wait at the agreed point. Typical travel time from the Financial District to JFK is 40–55 minutes depending on traffic.',
  },
  {
    q: 'Do you handle corporate accounts for Financial District firms?',
    a: 'Yes. We work with law firms, investment banks, private equity offices, and corporate headquarters in Lower Manhattan. Corporate accounts include monthly invoicing, multi-rider coordination, and dedicated account management. Contact us to discuss a tailored arrangement for your firm&apos;s travel needs.',
  },
  {
    q: 'Can you pick up from One World Trade, the NYSE, or Battery Park?',
    a: 'Yes. We pick up from any Financial District address — One World Trade Center, the New York Stock Exchange on Broad Street, Brookfield Place, Battery Park City, Fulton Center, and all surrounding office towers and residential buildings. Provide your specific address and we&apos;ll meet you at the entrance.',
  },
  {
    q: 'Do you serve Tribeca and the Seaport from the same area?',
    a: 'Yes. Our Financial District service extends seamlessly into neighboring Tribeca, South Street Seaport, and the Brooklyn Bridge area. If you&apos;re moving between FiDi offices and Tribeca meetings or heading to the Seaport for a client dinner, we handle it as a single cohesive booking.',
  },
  {
    q: 'How far is the Financial District from the NYC airports?',
    a: 'From the Financial District in Lower Manhattan, Newark (EWR) is about 12 miles (20–40 minutes via the Holland Tunnel), LaGuardia (LGA) about 10 miles (25–45 minutes), and JFK about 14 miles (35–55 minutes). Being close to the tunnels, Newark and LaGuardia are usually the quickest airports from FiDi.',
  },
  {
    q: 'How much does a car service from the Financial District to the airport cost?',
    a: 'Airport transfers from the Financial District are a flat rate confirmed at booking, with all tolls included and no surge regardless of downtown traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Pre-dawn reliability',
    desc: 'For 4 a.m. and 5 a.m. JFK departures, your chauffeur is confirmed and at the door — no last-minute cancellations or no-shows.',
  },
  {
    title: 'Flat rate locked at booking',
    desc: 'Your Financial District rate is confirmed at booking. No surge for early mornings, bad weather, or high-demand trading days.',
  },
  {
    title: 'Discretion for finance professionals',
    desc: 'Our chauffeurs understand the confidentiality standards expected in financial services. Professional conduct on every ride.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model business-class vehicles, immaculately maintained — the right first impression when meeting clients or arriving at a bank.',
  },
  {
    title: 'Corporate account management',
    desc: 'Monthly invoicing, multi-rider bookings, and coordinated travel for firms with recurring FiDi transport needs.',
  },
  {
    title: 'All four NYC airports covered',
    desc: 'JFK, LGA, EWR, and HPN — flat rates from any Financial District address to any New York area airport.',
  },
];

export default function FinancialDistrictPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Financial District', url: `${getSiteUrl()}/services/areas/financial-district` },
        ]}
      />
      <ServiceJsonLd
        name="Financial District Black Car Service"
        description="Luxury black car and chauffeur service in the Financial District, Lower Manhattan. Early morning airport transfers to JFK, LGA, EWR and HPN, hourly hire for finance professionals, Wall Street corporate accounts, and downtown Manhattan point-to-point rides."
        areaServed="Financial District, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/financial-district`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Financial District Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Wall Street moves early and moves fast. Eagle Eye Chauffeur delivers pre-dawn airport
            runs, hourly hire for finance professionals, and corporate accounts tailored to FiDi&apos;s
            demands — flat-rate pricing, no surge, and a TLC-licensed chauffeur at your Lower
            Manhattan door around the clock.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Wall Street</div>
              <div className="text-brand-silver text-sm mt-1">Finance district specialists</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Lower Manhattan</div>
              <div className="text-brand-silver text-sm mt-1">FiDi, Tribeca &amp; Seaport</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Pre-dawn to late night</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">TLC Licensed</div>
              <div className="text-brand-silver text-sm mt-1">Professional &amp; insured</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Now — Flat Rate
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Financial District Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From pre-market JFK departures to multi-stop deal roadshows, we offer every service
            a Wall Street professional or FiDi resident needs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any FiDi address. Flight tracking included.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Dedicated chauffeur for deal roadshows, bank meetings, and multi-stop days.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Corporate accounts, monthly invoicing, and multi-vehicle event coordination.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any FiDi address to Midtown, the boroughs, Long Island, or NJ — flat rate.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Seaport events, galas, client dinners — arrive and depart in a luxury vehicle.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Out-of-Town Transfers</div>
              <div className="text-sm text-brand-grey">
                FiDi to the Hamptons, Connecticut, Westchester, or anywhere in the tri-state area.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Wall Street Chooses Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Finance professionals in the Financial District need a car service that matches their
            standards — reliable before sunrise, discreet at all times, and never variable in price.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eaglEyeBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-brand-offwhite border border-brand-light p-6">
                <div className="font-semibold text-brand-black mb-2">{benefit.title}</div>
                <div className="text-sm text-brand-grey leading-relaxed">{benefit.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Financial District & Lower Manhattan Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our FiDi coverage spans the full lower Manhattan corridor — from the NYSE to the World
            Trade Center, Battery Park to the Brooklyn Bridge.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Wall Street',
              'NYSE & Broad Street',
              'One World Trade Center',
              'Battery Park City',
              'Fulton Center',
              'South Street Seaport',
              'Brooklyn Bridge',
              'Tribeca',
              'Brookfield Place',
              'Beekman Street',
              'Water Street',
              'Maiden Lane',
              'Liberty Street',
              'Chambers Street',
              'City Hall Area',
              'Lower Manhattan Residential',
            ].map((n) => (
              <div
                key={n}
                className="bg-brand-white border border-brand-light px-4 py-3 text-sm text-brand-black"
              >
                <span className="text-brand-charcoal mr-2">✓</span>
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Financial District Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Answers to the most common questions from FiDi professionals and residents.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Financial District Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your FiDi or Wall Street
            door — pre-dawn, late evening, and every hour in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-10 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-10 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Prefer to call?{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
            {' '}·{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
