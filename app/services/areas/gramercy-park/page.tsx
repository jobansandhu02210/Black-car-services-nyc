import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Gramercy Park Black Car Service NYC',
  description:
    'Black car in Gramercy Park and Murray Hill — residential pickups, JFK & LGA transfers, corporate travel, hourly hire. Flat rates, no surge. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/gramercy-park` },
  openGraph: {
    ...ogDefaults,
    title: 'Gramercy Park Black Car Service NYC | Eagle Eye',
    description: 'Luxury black car in Gramercy Park, Murray Hill, and Kips Bay. Residential building pickups, JFK & LGA airport transfers, corporate travel, and hourly.',
    url: `${getSiteUrl()}/services/areas/gramercy-park`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you pick up from residential buildings in Gramercy Park?',
    a: "Yes. Gramercy Park is one of Manhattan&apos;s most established and private residential neighborhoods, and Eagle Eye handles discreet, professional pickups from the doorman buildings and pre-war co-ops throughout the area. Whether your address is on Gramercy Park East, Gramercy Park South, Irving Place, or Stuyvesant Square, your chauffeur arrives at the agreed entrance on time. We understand the expectations of Gramercy residents — quiet, professional, and reliable every time.",
  },
  {
    q: 'Can I get a black car from Gramercy Park to JFK or LGA?',
    a: "Yes. Airport transfers from Gramercy Park to JFK, LGA, EWR, and HPN are a core service. Your flat rate is confirmed at booking and never changes regardless of traffic on the FDR Drive or the Midtown Tunnel. From Gramercy Park, typical transit to LaGuardia is 25–40 minutes and to JFK is 40–55 minutes. We recommend booking in advance for early-morning departures — your chauffeur is confirmed the evening before.",
  },
  {
    q: 'Do you serve Murray Hill and Kips Bay from Gramercy?',
    a: "Yes. Murray Hill and Kips Bay are directly adjacent to Gramercy Park and are fully within our service area. Residents and professionals between East 23rd Street and East 40th Street on the east side of Midtown South are all served by Eagle Eye. Whether you&apos;re on Third Avenue in Murray Hill, First Avenue in Kips Bay, or Lexington Avenue anywhere between, your service is identical in quality and flat-rate pricing.",
  },
  {
    q: 'Is corporate travel available for businesses in the Gramercy and Murray Hill area?',
    a: "Yes. The Gramercy-Murray Hill corridor includes numerous corporate offices, medical facilities, and professional firms. We provide corporate accounts with monthly invoicing, multi-rider scheduling, and dedicated account management for businesses with recurring transport needs. Executive airport runs, client dinner pickups, and multi-stop corporate days are all handled by a single dedicated chauffeur.",
  },
  {
    q: 'Is hourly black car hire available in Gramercy and Murray Hill?',
    a: "Yes. Hourly hire in Gramercy and Murray Hill is practical for days that move between multiple Manhattan destinations — a morning meeting near Union Square, a Midtown office, an East Side lunch, and an evening departure from JFK. Book hourly and your dedicated chauffeur stays with you throughout the booking period, positioned nearby at each stop so you move between locations without re-booking or waiting.",
  },
  {
    q: 'Do you serve Peter Cooper Village and Stuyvesant Town from Gramercy?',
    a: "Yes. Stuyvesant Town and Peter Cooper Village — the large residential complex along the East River between 14th and 23rd Streets — are within our service area. We pick up from the main gates on First Avenue and from any of the building entrances throughout the complex. Residents use Eagle Eye for JFK and LGA airport transfers, uptown appointments, and evening events in other parts of Manhattan.",
  },
  {
    q: 'How far is Gramercy Park from the NYC airports?',
    a: 'From Gramercy Park in Manhattan, LaGuardia (LGA) is about 9 miles (25–45 minutes), Newark (EWR) about 12 miles (25–45 minutes via the tunnels), and JFK about 14 miles (40–60 minutes). LaGuardia is typically the quickest airport from Gramercy.',
  },
  {
    q: 'How much does a car service from Gramercy Park to the airport cost?',
    a: 'Airport transfers from Gramercy Park are a flat rate confirmed at booking, with all tolls included and no surge regardless of traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Residential building expertise',
    desc: "Gramercy&apos;s pre-war co-ops and doorman buildings require a chauffeur who understands building protocols. Eagle Eye handles every pickup with appropriate discretion.",
  },
  {
    title: 'Murray Hill and Kips Bay coverage',
    desc: 'East side Midtown South — from 14th to 40th Streets, First Avenue to Lexington — fully served with the same flat-rate, professional standard.',
  },
  {
    title: 'Flat rate locked at booking',
    desc: 'Your Gramercy, Murray Hill, or Kips Bay rate is confirmed at booking and never changes — no surge for FDR Drive traffic or East Side events.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is TLC-licensed, background-checked, and trained to the professional discretion standard that Gramercy residents and their guests expect.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: "Late-model, immaculately maintained vehicles — the right fit for Gramercy Park&apos;s established residential character and Murray Hill&apos;s professional clientele.",
  },
  {
    title: 'Irving Place and Union Square links',
    desc: "Gramercy connects into Irving Place, Union Square, the Flatiron District, and the East Village — Eagle Eye covers the full corridor with a single booking.",
  },
];

export default function GramercyParkPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Gramercy Park', url: `${getSiteUrl()}/services/areas/gramercy-park` },
        ]}
      />
      <ServiceJsonLd
        name="Gramercy Park Black Car Service"
        description="Luxury black car and chauffeur service in Gramercy Park, Murray Hill, and Kips Bay, New York City. Residential building pickups in Gramercy, JFK and LGA airport transfers, corporate travel for East Side businesses, Stuyvesant Town and Peter Cooper Village service, and hourly hire throughout the corridor."
        areaServed="Gramercy Park, Murray Hill, Kips Bay, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/gramercy-park`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Gramercy Park Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service in Gramercy Park, Murray Hill, and Kips Bay — from discreet
            residential building pickups and JFK and LGA airport transfers to corporate travel
            throughout the East Side and hourly hire for multi-stop Manhattan days. Flat-rate pricing,
            no surge, TLC-licensed, and available 24/7.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Gramercy &amp; Murray Hill</div>
              <div className="text-brand-silver text-sm mt-1">Full corridor coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">East Side</div>
              <div className="text-brand-silver text-sm mt-1">14th to 40th, 1st to Lex</div>
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
            Gramercy Park Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From residential building pickups and flat-rate airport transfers to Murray Hill
            corporate accounts and East Side hourly hire — every Gramercy transportation need covered.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Gramercy, Murray Hill, or Kips Bay address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Multi-stop East Side days and evening Manhattan outings — dedicated chauffeur throughout.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                East Side offices to Midtown, downtown, and airports — corporate accounts available.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Gramercy or Murray Hill address to any destination — flat rate confirmed at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Private dinners, club events, and East Side venue functions — luxury arrivals and departures.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Out-of-Town Transfers</div>
              <div className="text-sm text-brand-grey">
                Gramercy to Long Island, the Hamptons, Connecticut, Westchester, or New Jersey.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Gramercy Park Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Gramercy Park and its surrounding neighborhoods expect a car service that is as
            composed and reliable as the neighborhood itself — professional, punctual, and
            never varying in quality or price.
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
            Gramercy &amp; East Side Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Gramercy coverage spans the full East Side Midtown South corridor — from the
            private park to Murray Hill to the north and Kips Bay to the east, connecting
            seamlessly into Union Square and the Flatiron District.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Gramercy Park',
              'Murray Hill',
              'Kips Bay',
              'Union Square (Adjacent)',
              'Flatiron (Adjacent)',
              'Stuyvesant Town',
              'Peter Cooper Village',
              'Irving Place',
              'Lexington Avenue',
              'Third Avenue',
              'Second Avenue',
              'First Avenue',
              'East 23rd Street',
              'East 30th Street',
              'East 34th–38th Streets',
              'Bellevue Hospital Area',
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

      {/* ── Routes Table ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Gramercy Park</h2>
          <p className="text-brand-grey text-sm mb-6">Estimated drive times in normal traffic — flat rate confirmed at booking.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left p-4 font-medium">Destination</th>
                  <th className="text-left p-4 font-medium">Est. Drive Time</th>
                  <th className="text-left p-4 font-medium">Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">JFK Airport</td>
                  <td className="p-4 text-brand-grey">40–55 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">LaGuardia Airport (LGA)</td>
                  <td className="p-4 text-brand-grey">25–35 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">10–20 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black">The Hamptons</td>
                  <td className="p-4 text-brand-grey">2–2.5 hrs</td>
                  <td className="p-4 text-brand-grey">Long Distance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Pickup Guide ── */}
      <section className="bg-brand-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Gramercy Park Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-brand-black mb-3">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">Gramercy Park is one of Manhattan&apos;s quieter residential enclaves — the streets around the private park itself (Gramercy Park East, West, North, and South) have limited traffic and ample room for a staged pickup alongside doorman buildings. Lexington Avenue and Third Avenue are the main through-routes and work well for brief stops. Irving Place between 14th and 20th Street is calm and accessible. For Murray Hill addresses on Park Avenue South or Lexington, your chauffeur stages at the building entrance or the nearest corner. Stuyvesant Town and Peter Cooper Village pickups are made at the First Avenue gates — your chauffeur will confirm which gate (14th, 18th, or 20th Street) minimizes your walk. FDR Drive access means JFK and LGA transfers route east quickly without crossing busy midtown corridors.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Key pickup locations</h3>
              <ul className="space-y-2">
                {[
                  'Gramercy Park South — 20th St & Irving Place',
                  'Irving Place corridor — 14th to 20th St',
                  'Stuyvesant Town — 1st Ave & 18th St gate',
                  'Peter Cooper Village — 1st Ave & 20th St gate',
                  'Lexington Avenue corridor — 20th to 30th St',
                  'Murray Hill — Park Ave South & 30th–38th St',
                  'Bellevue / NYU Langone — 1st Ave & 27th St',
                ].map(loc => (
                  <li key={loc} className="text-sm text-brand-grey flex gap-2">
                    <span className="text-brand-charcoal">→</span>{loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Gramercy Park Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Gramercy Park residents, Murray Hill professionals, Kips Bay
            residents, and East Side visitors.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Gramercy Park Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Gramercy Park, Murray Hill,
            or Kips Bay door — airport runs, corporate travel, evening events, and everything
            in between.
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
