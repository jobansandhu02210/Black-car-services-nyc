import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Lower Manhattan Black Car Service NYC',
  description:
    'Downtown NYC black car — City Hall, finance accounts, JFK & EWR transfers, Lower Manhattan coverage. Flat rates, no surge. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/lower-manhattan` },
  openGraph: {
    ...ogDefaults,
    title: 'Lower Manhattan Black Car Service NYC | Eagle Eye',
    description: 'Downtown NYC black car service. City Hall and court area pickups, finance corporate accounts, early-morning JFK and EWR transfers, and full Lower.',
    url: `${getSiteUrl()}/services/areas/lower-manhattan`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you pick up from City Hall and the court district in Lower Manhattan?',
    a: "Yes. The City Hall and Civic Center area — including Foley Square, the Federal Courthouse on Pearl Street, the New York State Supreme Court, and the surrounding government offices — is an active service area for Eagle Eye. Attorneys, government officials, and visiting clients regularly book our service for court day departures and pickups. We handle early arrivals before 8 a.m. and post-hearing departures at any time the proceedings conclude.",
  },
  {
    q: 'Do you offer early morning airport runs for finance professionals in Lower Manhattan?',
    a: "Yes. Finance and legal professionals in the Financial District, Battery Park City, and throughout Lower Manhattan frequently need pre-market flights to JFK, LGA, EWR, or HPN. Eagle Eye provides 4 a.m. and 5 a.m. black car pickups from any Lower Manhattan address — chauffeur confirmed the night before, vehicle at the door at the agreed time. Pre-booking for early departures is strongly recommended.",
  },
  {
    q: 'How do I get from Lower Manhattan to JFK Airport?',
    a: "Book online at eagleeyechauffeur.com or message us on WhatsApp with your downtown address, JFK terminal, and departure time. Your flat rate is confirmed immediately. From Lower Manhattan, typical travel to JFK is 40–55 minutes via the Brooklyn Battery Tunnel to the BQE or via the Manhattan Bridge, depending on the time of day. For arrivals, we track your flight and meet you at the agreed terminal pickup point.",
  },
  {
    q: 'Do you handle corporate accounts for law firms and banks in downtown NYC?',
    a: "Yes. Lower Manhattan is home to some of New York&apos;s most prominent law firms, investment banks, and financial institutions — from the skyscrapers of the Financial District to the government offices around City Hall. We provide corporate accounts with monthly invoicing, multi-rider booking coordination, and dedicated account management for firms whose professionals travel regularly to airports, Midtown, and tri-state destinations.",
  },
  {
    q: 'Can you pick up from the South Street Seaport and Brooklyn Bridge area?',
    a: "Yes. The South Street Seaport on Fulton Street and the Brooklyn Bridge area are fully within our Lower Manhattan service zone. We handle departures from Seaport hotel guests, restaurant diners, and event attendees at Pier 17 and the surrounding venues. The Brooklyn Bridge area — including the pedestrian plaza access points and DUMBO-facing side — is also a regular pickup location for cross-river transfers.",
  },
  {
    q: 'Is black car service available from Chinatown and the Lower East Side border of Lower Manhattan?',
    a: "Yes. Our Lower Manhattan coverage extends into the Canal Street and Chinatown corridor as well as the northern edge toward the Manhattan Bridge approach. Whether you need transport from a Canal Street address, a Chinatown restaurant, or anywhere along the lower East Side boundary, Eagle Eye is available with the same flat-rate, no-surge pricing and professional chauffeur service that downtown clients expect.",
  },
];

const eaglEyeBenefits = [
  {
    title: 'Court and civic center expertise',
    desc: 'Foley Square, federal and state courthouses, and City Hall — we handle legal professionals and government clients with the punctuality their schedules demand.',
  },
  {
    title: 'Finance sector reliability',
    desc: "Wall Street and Lower Manhattan&apos;s financial district operate on a pre-market schedule. Eagle Eye&apos;s pre-dawn airport service matches that standard without exception.",
  },
  {
    title: 'Flat rate locked at booking',
    desc: 'Your Lower Manhattan rate is confirmed at booking. No surge for Battery Tunnel traffic, Manhattan Bridge congestion, or any other downtown variable.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is TLC-licensed, background-checked, and trained to the discretion and professionalism standard that legal and financial clients in downtown NYC require.',
  },
  {
    title: 'Full airport coverage',
    desc: 'JFK, LGA, EWR, and HPN — flat rates from any Lower Manhattan address to all four New York area airports, with flight tracking for arrivals.',
  },
  {
    title: 'Downtown to anywhere',
    desc: 'Lower Manhattan to Midtown, the boroughs, Long Island, the Hamptons, Connecticut, and New Jersey — flat-rate point-to-point from any downtown address.',
  },
];

export default function LowerManhattanPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Lower Manhattan', url: `${getSiteUrl()}/services/areas/lower-manhattan` },
        ]}
      />
      <ServiceJsonLd
        name="Lower Manhattan Black Car Service"
        description="Luxury black car and chauffeur service throughout Lower Manhattan and downtown New York City. Financial District, Battery Park City, Tribeca, City Hall, Chinatown, Brooklyn Bridge, South Street Seaport — early morning airport transfers to JFK, LGA, EWR, and HPN, corporate accounts for law firms and banks, and 24/7 point-to-point service."
        areaServed="Lower Manhattan, Downtown NYC, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/lower-manhattan`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Lower Manhattan Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service throughout downtown New York City — from City Hall and court
            district pickups and pre-market JFK departures to South Street Seaport event transfers
            and corporate accounts for law firms and financial institutions. Flat-rate pricing,
            no surge, TLC-licensed, and available 24/7 across all of Lower Manhattan.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Lower Manhattan</div>
              <div className="text-brand-silver text-sm mt-1">Full downtown coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Downtown NYC</div>
              <div className="text-brand-silver text-sm mt-1">FiDi, BPC, Tribeca &amp; more</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Pre-market to late night</div>
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
            Lower Manhattan Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From court district and City Hall pickups and early-morning finance airport runs to
            South Street Seaport events and tri-state corporate transfers — every Lower Manhattan
            transportation need covered.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Lower Manhattan or downtown address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Court days, multi-stop downtown schedules, and legal roadshows — chauffeur on standby.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Law firm and bank corporate accounts, monthly invoicing, and multi-rider coordination.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Lower Manhattan address to Midtown, the boroughs, or beyond — flat rate at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                South Street Seaport events, Tribeca galas, and downtown venue functions — luxury arrivals and departures.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Out-of-Town Transfers</div>
              <div className="text-sm text-brand-grey">
                Lower Manhattan to the Hamptons, Westchester, Connecticut, or New Jersey — flat rate.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Downtown NYC Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Lower Manhattan operates on tight schedules — pre-market trading floors, court hearing
            times, and board meetings leave no room for transportation uncertainty. Eagle Eye
            delivers precision and luxury in equal measure.
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
            Lower Manhattan Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Lower Manhattan coverage spans the full downtown peninsula — from the Financial
            District and Battery Park City to City Hall, Tribeca, Chinatown, and South Street Seaport.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Financial District',
              'Battery Park City',
              'Tribeca',
              'City Hall',
              'Chinatown',
              'Brooklyn Bridge',
              'South Street Seaport',
              'Foley Square',
              'Fulton Center',
              'Wall Street',
              'Brookfield Place',
              'One World Trade Center',
              'Canal Street',
              'Park Row',
              'Maiden Lane',
              'Water Street',
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Lower Manhattan</h2>
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
                  <td className="p-4 text-brand-black">Brooklyn</td>
                  <td className="p-4 text-brand-grey">15–25 min</td>
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
            Lower Manhattan Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-brand-black mb-3">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">Lower Manhattan&apos;s street layout is the oldest in New York — narrow, winding streets that predate the grid system. Broadway, Church Street, and Water Street are the main vehicle corridors running roughly north–south; Fulton Street, Wall Street, and Chambers Street are the main cross-streets with reasonable vehicle access. For courthouse and Foley Square pickups, your chauffeur stages on Centre Street or Lafayette Street near the courthouse steps. For Wall Street and Financial District pickups, Broad Street or Exchange Place are often the cleanest staging points. South Street Seaport pickups use Fulton Street between Water Street and the river. For EWR-bound trips, the Holland Tunnel via West Street is typically the fastest route from Lower Manhattan — often faster than going through the Brooklyn Battery Tunnel.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Key pickup locations</h3>
              <ul className="space-y-2">
                {[
                  'Foley Square / Federal Courthouse — Centre St & Worth St',
                  'City Hall — Broadway & Murray St',
                  'Wall Street — Broad St & Exchange Place',
                  'South Street Seaport — Fulton St & Front St',
                  'One World Trade Center — Fulton St & West St',
                  'Brooklyn Bridge pedestrian access — Park Row',
                  'Pier 17 / Seaport District — Fulton & Water St',
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
            Lower Manhattan Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from downtown NYC professionals, attorneys, finance clients, and
            Lower Manhattan residents.
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
            Book Your Lower Manhattan Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Lower Manhattan door —
            court days, finance airport runs, corporate transfers, and everything in between.
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
