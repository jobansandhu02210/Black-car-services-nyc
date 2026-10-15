import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Battery Park City Black Car Service NYC',
  description:
    'Black car in Battery Park City — Brookfield Place pickups, JFK & EWR transfers, World Trade Center area. Flat rates, no surge. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/battery-park-city` },
  openGraph: {
    ...ogDefaults,
    title: 'Battery Park City Black Car Service NYC | Eagle Eye',
    description: 'Luxury black car in Battery Park City and Lower Manhattan. Brookfield Place corporate pickups, JFK & EWR airport transfers, World Trade Center area.',
    url: `${getSiteUrl()}/services/areas/battery-park-city`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Can I get an early morning black car from Battery Park City to JFK or EWR?',
    a: "Yes. Early morning airport departures are among the most consistent bookings we receive from Battery Park City residents. Whether you&apos;re on Liberty Street, Rector Place, or anywhere within the BPC residential complex, your chauffeur is confirmed and at the door before sunrise — no last-minute app scrambles. For JFK, plan approximately 45–55 minutes from Battery Park City; for Newark Airport, plan 30–40 minutes via the Holland Tunnel, which is typically the fastest option from BPC at off-peak hours.",
  },
  {
    q: 'Do you serve Brookfield Place and World Financial Center corporate clients?',
    a: "Yes. Brookfield Place on Vesey Street is a primary pickup and drop-off location for Eagle Eye clients in Battery Park City. We work with financial services firms, law offices, and executives based at Brookfield Place for recurring corporate accounts, daily executive transport, and multi-rider coordination. Monthly invoicing and dedicated account management are available for firms with regular travel needs.",
  },
  {
    q: 'Can you pick up from the World Trade Center area and One WTC?',
    a: "Absolutely. One World Trade Center and the surrounding World Trade Center campus — including the Oculus transportation hub, Fulton Center, and Church Street — are fully within our Battery Park City service area. We coordinate pickups at agreed lobby entrances or street-level points and can navigate the WTC complex's pedestrian layout to ensure a smooth departure for clients in the surrounding office towers.",
  },
  {
    q: 'Is Eagle Eye a good alternative to the NY Waterway or Brookfield ferry from Battery Park City?',
    a: "Yes. While the Hudson River ferries are useful for certain commuter routes, a luxury black car offers door-to-door service that ferries cannot — particularly for airport transfers, early departures before ferry service begins, or when traveling with luggage to JFK, EWR, or LGA. We provide a direct, flat-rate service from your Battery Park City address to any tri-state airport without transfers or connections.",
  },
  {
    q: 'Do you provide black car service to Tribeca from Battery Park City?',
    a: "Yes. Battery Park City connects directly into Tribeca to the north along Greenwich Street and West Street, and our service area covers the full corridor. Residents who work in BPC and have evening plans in Tribeca, or who need airport transfers via Tribeca hotel pickups, are fully served. We also handle cross-borough transfers from BPC to Brooklyn and other outer-borough destinations.",
  },
  {
    q: 'Is hourly black car hire available for corporate needs in Battery Park City?',
    a: "Absolutely. Executives and legal professionals in Battery Park City and Brookfield Place regularly use hourly hire for multi-stop days — morning WTC meetings, a Midtown client lunch, and an afternoon JFK departure, all handled with one dedicated chauffeur. Book hourly and your driver stays with your schedule for the full booking period without gaps.",
  },
];

const eaglEyeBenefits = [
  {
    title: 'Pre-dawn airport reliability',
    desc: "Battery Park City is one of Manhattan&apos;s most residential downtown neighborhoods. Eagle Eye handles 4 a.m. and 5 a.m. departures to JFK, EWR, and LGA without fail.",
  },
  {
    title: 'Brookfield Place corporate accounts',
    desc: 'Financial and legal firms at Brookfield Place receive dedicated corporate account management, monthly invoicing, and priority scheduling for recurring travel.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Battery Park City rate is locked at booking. No surge for Holland Tunnel traffic, morning rush, or any other Lower Manhattan variable.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is TLC-licensed, background-checked, and trained to the discretion standard expected by financial professionals and BPC residents.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: "Late-model business-class vehicles, immaculately maintained — the right impression when arriving at Brookfield Place or departing for an airport terminal.",
  },
  {
    title: 'Full Lower Manhattan coverage',
    desc: 'Battery Park City, World Trade Center, Financial District, Tribeca, and the Hudson River waterfront — seamless coverage throughout Lower Manhattan.',
  },
];

export default function BatteryParkCityPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Battery Park City', url: `${getSiteUrl()}/services/areas/battery-park-city` },
        ]}
      />
      <ServiceJsonLd
        name="Battery Park City Black Car Service"
        description="Luxury black car and chauffeur service in Battery Park City and Lower Manhattan, New York City. Early morning airport transfers to JFK, EWR, and LGA, Brookfield Place corporate client pickups, World Trade Center area transfers, ferry terminal alternatives, and Tribeca coverage."
        areaServed="Battery Park City, Lower Manhattan, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/battery-park-city`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Battery Park City Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service in Battery Park City and Lower Manhattan — from pre-dawn
            airport runs to JFK and Newark and Brookfield Place corporate pickups to World Trade
            Center area transfers and Tribeca connections. Flat-rate pricing, no surge, and a
            TLC-licensed chauffeur on call 24/7.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Battery Park City</div>
              <div className="text-brand-silver text-sm mt-1">Full neighborhood coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Brookfield Place</div>
              <div className="text-brand-silver text-sm mt-1">Corporate &amp; WTC district</div>
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
            Battery Park City Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From early morning JFK and EWR departures and Brookfield Place corporate pickups to
            World Trade Center area transfers and hourly hire — every Battery Park City
            transportation need covered.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Battery Park City or Lower Manhattan address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Multi-stop Lower Manhattan days — WTC meetings, Midtown lunch, airport departure — one chauffeur.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Brookfield Place and WTC corporate accounts, monthly invoicing, and multi-rider scheduling.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Battery Park City address to any destination — flat rate confirmed at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Brookfield Place events, Tribeca galas, and Lower Manhattan venue functions — luxury departures.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Out-of-Town Transfers</div>
              <div className="text-sm text-brand-grey">
                Battery Park City to the Hamptons, Westchester, Connecticut, or New Jersey — flat rate.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Battery Park City Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Battery Park City&apos;s residential calm and proximity to one of Manhattan&apos;s busiest
            financial districts means transport needs range from quiet early-morning airport runs
            to high-stakes corporate pickups at Brookfield Place.
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
            Battery Park City &amp; Lower Manhattan Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Battery Park City coverage spans the residential complex and connects seamlessly
            into the Financial District, World Trade Center campus, and Tribeca to the north.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Brookfield Place',
              'World Financial Center',
              'One World Trade Center',
              'WTC Oculus Hub',
              'Hudson River Esplanade',
              'Liberty Street',
              'Rector Place',
              'Vesey Street',
              'West Street Corridor',
              'Financial District (Adjacent)',
              'Tribeca (North)',
              'South Cove Area',
              'North End Avenue',
              'Murray Street',
              'Fulton Center',
              'Chambers Street',
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Battery Park City</h2>
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
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">LaGuardia Airport (LGA)</td>
                  <td className="p-4 text-brand-grey">40–55 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">25–35 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Teterboro Airport (TEB)</td>
                  <td className="p-4 text-brand-grey">30–40 min</td>
                  <td className="p-4 text-brand-grey">Private Aviation</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">15–25 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Wall Street / Financial District</td>
                  <td className="p-4 text-brand-grey">5–10 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
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
            Battery Park City Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-brand-black mb-3">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">Battery Park City is a largely self-contained residential enclave with its own internal street grid running along the Hudson River. West Street (Route 9A) forms the eastern boundary and is the main vehicle artery — your chauffeur will typically stage on West Street at the agreed cross-street rather than inside the BPC complex, where through-traffic is limited. North End Avenue and South End Avenue carry internal traffic and work for building-front pickups within BPC. For Brookfield Place corporate pickups, the designated vehicle drop-off on Vesey Street between West Street and North End Avenue is the cleanest approach. For EWR transfers, the Holland Tunnel via West Street is a fast and direct route — often the quickest airport run from any downtown Manhattan address.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Key pickup locations</h3>
              <ul className="space-y-2">
                {[
                  'Brookfield Place — Vesey St & West St vehicle lane',
                  'One World Trade Center — Fulton St & West St',
                  'North End Avenue residential buildings',
                  'South End Avenue — southern BPC corridor',
                  'West Street / Route 9A — main vehicle artery',
                  'Liberty Street & West St — FiDi border',
                  'Hudson River Esplanade — Rector Place entry',
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
            Battery Park City Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Battery Park City residents, Brookfield Place executives,
            World Trade Center area workers, and Lower Manhattan visitors.
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
            Book Your Battery Park City Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Battery Park City or
            Brookfield Place door — pre-dawn airport runs, corporate transfers, and everything
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
