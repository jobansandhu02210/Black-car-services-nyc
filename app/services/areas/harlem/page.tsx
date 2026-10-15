import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Harlem Black Car Service NYC | Luxury Chauffeur',
  description:
    'Black car in Harlem — JFK & LGA airport transfers, Apollo Theater events, Columbia University pickups. Flat rates, no surge. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/harlem` },
  openGraph: {
    ...ogDefaults,
    title: 'Harlem Black Car Service NYC | Luxury Chauffeur | Eagle Eye',
    description: 'Luxury black car service in Harlem and upper Manhattan. JFK & LGA airport transfers, Apollo Theater events, Columbia University pickups, and 125th.',
    url: `${getSiteUrl()}/services/areas/harlem`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Can I get a black car from Harlem to JFK or LaGuardia Airport?',
    a: "Yes. Airport transfers from Harlem to JFK, LGA, EWR, and HPN are among our most consistent upper Manhattan bookings. From Central Harlem and 125th Street, typical travel to LaGuardia is 30–45 minutes via the Triborough Bridge; to JFK plan 50–65 minutes depending on time of day. Your flat rate is confirmed at booking and never changes, regardless of bridge toll fluctuations, traffic patterns, or any other variable. Pre-booking for early-morning departures ensures your chauffeur is confirmed the evening before.",
  },
  {
    q: 'Do you offer corporate travel for businesses and professionals in upper Manhattan?',
    a: "Yes. Harlem and upper Manhattan are home to a growing number of corporate offices, medical facilities, and professional practices — from the 125th Street commercial corridor to the health campuses on Amsterdam Avenue and the academic institutions throughout West Harlem. We provide corporate accounts with monthly invoicing, dedicated account management, and multi-rider scheduling for organizations with regular transport needs between upper Manhattan and Midtown, downtown, or the airports.",
  },
  {
    q: 'Can you pick up from the Apollo Theater on 125th Street?',
    a: "Absolutely. The Apollo Theater at 253 West 125th Street is one of the most iconic venues in New York City, and Eagle Eye handles pre-show drop-offs and post-show pickups regularly. For popular performances, we recommend arranging your departure pickup when you book your inbound ride — the 125th Street corridor gets busy after major shows. Your chauffeur is at the agreed point before the last bow, not circling the block.",
  },
  {
    q: 'Do you serve Columbia University and Morningside Heights from Harlem?',
    a: "Yes. Columbia University in Morningside Heights, Barnard College, and the surrounding academic community are fully within our Harlem service area. Faculty, administrators, visiting scholars, and students regularly use Eagle Eye for airport transfers, Midtown connections, and professional travel. We also serve the Columbia Medical Center campus on 168th Street in Washington Heights, extending our upper Manhattan reach well beyond Central Harlem.",
  },
  {
    q: 'Is black car service available for events in East Harlem and Hamilton Heights?',
    a: "Yes. Our Harlem service area spans the full upper Manhattan corridor — Central Harlem, East Harlem (El Barrio) from 96th Street to the Harlem River, West Harlem along Riverside Drive, and Hamilton Heights north of 145th Street. Whether your event is a private dinner in East Harlem, a concert at a West Harlem venue, or a family gathering in Hamilton Heights, Eagle Eye provides the same flat-rate, professional service to every address in the area.",
  },
  {
    q: 'Is hourly black car hire available in Harlem and upper Manhattan?',
    a: "Yes. Hourly hire in Harlem is practical for days that include multiple Manhattan destinations — a morning Columbia University meeting, a Midtown office visit, and an afternoon JFK departure, for example. Book hourly and your dedicated chauffeur stays with you throughout the full booking window, positioned nearby at each stop and managing your schedule without gaps or re-bookings.",
  },
];

const eaglEyeBenefits = [
  {
    title: 'Upper Manhattan airport expertise',
    desc: "From Harlem to JFK and LGA, Eagle Eye knows every route — the Triborough, the RFK Bridge, and the fastest path for early-morning departures before traffic builds.",
  },
  {
    title: 'Apollo Theater and event coverage',
    desc: "Post-show pickups at the Apollo and other Harlem venues are coordinated in advance — your chauffeur is positioned before the crowd files out of 125th Street.",
  },
  {
    title: 'Columbia University community',
    desc: "Faculty, researchers, and administrators at Columbia and Barnard benefit from reliable, professional service to airports, Midtown offices, and inter-campus connections.",
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is TLC-licensed, background-checked, and trained to the professional standard that Harlem residents and upper Manhattan clients deserve.',
  },
  {
    title: 'Flat rate from Harlem — always',
    desc: 'Your Harlem rate is confirmed at booking and locked. No surge for Triborough Bridge toll increases, 125th Street event traffic, or any other variable.',
  },
  {
    title: 'Full upper Manhattan coverage',
    desc: 'Central Harlem, East Harlem, West Harlem, Hamilton Heights, Washington Heights, and Inwood — complete coverage of upper Manhattan in a single service.',
  },
];

export default function HarlemPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Harlem', url: `${getSiteUrl()}/services/areas/harlem` },
        ]}
      />
      <ServiceJsonLd
        name="Harlem Black Car Service"
        description="Luxury black car and chauffeur service in Harlem and upper Manhattan, New York City. JFK and LGA airport transfers, corporate travel from Central Harlem, East Harlem, and West Harlem, Apollo Theater event pickups, Columbia University area service, Hamilton Heights coverage, and 125th Street corridor pickups."
        areaServed="Harlem, Upper Manhattan, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/harlem`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Harlem Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service throughout Harlem and upper Manhattan — from flat-rate JFK
            and LGA airport transfers and Apollo Theater event pickups to Columbia University area
            rides and corporate travel from the 125th Street corridor. Professional, reliable,
            and available 24/7 across all of upper Manhattan.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Harlem</div>
              <div className="text-brand-silver text-sm mt-1">Full neighborhood coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Upper Manhattan</div>
              <div className="text-brand-silver text-sm mt-1">96th St to Inwood</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Pre-dawn to post-show</div>
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
            Harlem Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From JFK and LGA airport transfers and Apollo Theater event transport to Columbia
            University pickups and upper Manhattan corporate travel — every Harlem transportation
            need covered.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Harlem or upper Manhattan address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Multi-stop Harlem and Midtown days — Columbia meetings, event transport, airport departures — one chauffeur.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Upper Manhattan corporate accounts, academic institution travel, and medical center pickups.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Harlem address to Midtown, downtown, the boroughs, or beyond — flat rate at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Apollo Theater, Harlem venues, private events, and cultural functions — luxury arrivals and departures.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Out-of-Town Transfers</div>
              <div className="text-sm text-brand-grey">
                Harlem to Long Island, Westchester, Connecticut, the Catskills, or New Jersey — flat rate.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Harlem Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Upper Manhattan has historically been underserved by luxury car services that
            concentrate their focus downtown. Eagle Eye treats every Harlem and upper Manhattan
            address with the same premium standard as Midtown.
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
            Harlem &amp; Upper Manhattan Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Harlem coverage spans the full upper Manhattan corridor from 96th Street to Inwood —
            Central Harlem, East Harlem, West Harlem, Hamilton Heights, Washington Heights, and beyond.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Central Harlem',
              'East Harlem (El Barrio)',
              'West Harlem',
              'Hamilton Heights',
              'Columbia University',
              'Apollo Theater — 125th St',
              '125th Street Corridor',
              'Morningside Heights',
              'Washington Heights',
              'Inwood',
              'Riverside Drive (Upper)',
              'St. Nicholas Avenue',
              'Frederick Douglass Blvd',
              'Malcolm X Blvd',
              'Marcus Garvey Park',
              'Strivers\' Row Area',
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Harlem</h2>
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
                  <td className="p-4 text-brand-grey">45–60 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">LaGuardia Airport (LGA)</td>
                  <td className="p-4 text-brand-grey">25–35 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">55–70 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Westchester</td>
                  <td className="p-4 text-brand-grey">25–40 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black">The Bronx</td>
                  <td className="p-4 text-brand-grey">20–35 min</td>
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
            Harlem Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-brand-black mb-3">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">Harlem&apos;s main avenues — Frederick Douglass Boulevard (Eighth Avenue), Adam Clayton Powell Jr. Boulevard (Seventh Avenue), Malcolm X Boulevard (Lenox Avenue), and Fifth Avenue — run north–south and are all accessible for staged pickups. The 125th Street crosstown is the main east–west artery and becomes congested around the Apollo Theater on event nights — your chauffeur stages on a parallel block (124th or 126th) and confirms your exact meet point. For Columbia University pickups at 116th Street and Broadway, the Broadway median and Riverside Drive offer clean staging. Residential side streets like Strivers&apos; Row on 138th–139th are narrow but quiet — your chauffeur positions on the avenue (Adam Clayton Powell or Frederick Douglass) and walks luggage if needed. For LGA transfers, the Triborough Bridge via the RFK approach from East 125th Street is the standard route.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Key pickup locations</h3>
              <ul className="space-y-2">
                {[
                  'Apollo Theater — W 125th St & Frederick Douglass Blvd',
                  'Columbia University — Broadway & 116th St',
                  '125th Street corridor — main east–west spine',
                  'Marcus Garvey Park — 5th Ave & 122nd St',
                  'Morningside Heights — Broadway & 120th St',
                  'East 125th St & Park Ave — RFK/Triborough access',
                  'Hamilton Heights — Amsterdam Ave & 145th St',
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
            Harlem Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Harlem residents, Columbia University affiliates, Apollo Theater
            guests, and upper Manhattan visitors.
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
            Book Your Harlem Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Harlem or upper Manhattan
            door — airport runs, Apollo Theater nights, Columbia pickups, and everything in between.
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
