import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Greenwich Village Black Car Service NYC',
  description:
    'Black car in Greenwich Village — NYU area, restaurant pickups, JFK & LGA transfers, late-night West Village service. Flat rates, no surge. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/greenwich-village` },
  openGraph: {
    ...ogDefaults,
    title: 'Greenwich Village Black Car Service NYC | Eagle Eye',
    description: 'Luxury black car in Greenwich Village and the West Village. NYU campus area, restaurant pickups, JFK & LGA airport transfers, and late-night Village.',
    url: `${getSiteUrl()}/services/areas/greenwich-village`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you provide black car pickups in the NYU campus area and Washington Square Park?',
    a: "Yes. The NYU campus and Washington Square Park area — including LaGuardia Place, Mercer Street, West 4th Street, and the surrounding blocks — are active pickup zones for Eagle Eye. Faculty, administrators, and visiting lecturers regularly book our service for airport connections and corporate travel. We also handle pickups for NYU event guests who need reliable transport without app uncertainty on busy campus weekends.",
  },
  {
    q: 'Is late-night black car service available in Greenwich Village and the West Village?',
    a: "Absolutely. Greenwich Village and the West Village have among the most active late-night dining scenes in Manhattan — Bleecker Street, Christopher Street, Hudson Street, and the surrounding restaurant rows run well past midnight. Pre-booking your pickup ensures your chauffeur is at the agreed corner when you leave, not a surge-priced app circling SoHo. We recommend booking your return at the time you place the outbound reservation.",
  },
  {
    q: 'How do I get a black car from Greenwich Village to JFK or LGA?',
    a: "Book through our website or via WhatsApp with your Village address, airport terminal, and departure time. Your flat rate is confirmed immediately. Typical transit from Greenwich Village to JFK via the Holland Tunnel or the BQE is 40–55 minutes; to LaGuardia plan 30–45 minutes. For early-morning flights, we recommend a pre-dawn pickup to avoid any morning bridge traffic — your chauffeur is confirmed the evening before.",
  },
  {
    q: 'Can you pick up from restaurants and private events in the Village?',
    a: "Yes. Whether you&apos;re wrapping a private dinner on Hudson Street, leaving a book launch in the West Village, or finishing a gallery dinner in SoHo adjacent areas, Eagle Eye provides pre-arranged departure transport. We position your chauffeur at the agreed block at the agreed time — no circling, no wait. Many Village clients use hourly hire so the chauffeur stays on standby throughout a multi-venue evening.",
  },
  {
    q: 'Do you serve the Meatpacking District from Greenwich Village?',
    a: "Yes. The Meatpacking District borders Greenwich Village and West Village to the north and is fully within our service area. We handle pickups and drop-offs throughout the Meatpacking corridor — Gansevoort Street, Little West 12th Street, and the surrounding blocks — for restaurant dinners, nightlife events, and the High Line adjacent areas that straddle the Village-Chelsea border.",
  },
  {
    q: 'Is hourly black car hire available for a night out in the Village?',
    a: "Yes. Hourly hire in Greenwich Village is particularly practical for evenings that move between multiple destinations — a pre-dinner cocktail bar on Christopher Street, dinner on Bleecker, and a nightcap on Hudson, for instance. Book hourly and your chauffeur stays with your party through the full booking window, positioned nearby at each stop so you move seamlessly without waiting or re-booking.",
  },
  {
    q: 'How far is Greenwich Village from the NYC airports?',
    a: 'From Greenwich Village in Lower Manhattan, LaGuardia (LGA) is about 9 miles (25–45 minutes), Newark (EWR) about 12 miles (25–45 minutes via the Holland Tunnel), and JFK about 14 miles (40–60 minutes). Being close to the Holland Tunnel, Newark is often the quickest airport from the Village.',
  },
  {
    q: 'How much does a car service from Greenwich Village to the airport cost?',
    a: 'Airport transfers from Greenwich Village are a flat rate confirmed at booking, with all tolls included and no surge regardless of downtown traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Village street knowledge',
    desc: "Greenwich Village&apos;s irregular grid and one-way streets can trap app drivers. Eagle Eye chauffeurs know every block from Washington Square to the Hudson River.",
  },
  {
    title: 'NYU and academic community',
    desc: 'Faculty, visiting scholars, and administrators at NYU and The New School benefit from reliable point-to-point and airport service with professional discretion.',
  },
  {
    title: 'No surge — ever',
    desc: "Your Village or West Village rate is locked at booking. Busy Friday nights on Bleecker Street don&apos;t change what you owe.",
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is TLC-licensed, background-checked, and trained to the professional standard that Village residents and their guests expect.',
  },
  {
    title: 'Late-night reliability',
    desc: "The Village runs late and so do we. Whether your evening ends at 10 p.m. or 2 a.m., your pre-booked chauffeur is confirmed and on time.",
  },
  {
    title: 'Full downtown coverage',
    desc: 'Greenwich Village, West Village, SoHo, Meatpacking District, NoHo, and Washington Square — full coverage of lower Manhattan&apos;s most storied neighborhoods.',
  },
];

export default function GreenwichVillagePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Greenwich Village', url: `${getSiteUrl()}/services/areas/greenwich-village` },
        ]}
      />
      <ServiceJsonLd
        name="Greenwich Village Black Car Service"
        description="Luxury black car and chauffeur service in Greenwich Village and the West Village, New York City. NYU campus area pickups, Washington Square Park vicinity, JFK and LGA airport transfers, restaurant and nightlife departures, Meatpacking District, SoHo, and late-night Village service."
        areaServed="Greenwich Village, West Village, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/greenwich-village`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Greenwich Village Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service throughout Greenwich Village and the West Village — from NYU
            campus pickups and Washington Square departures to late-night restaurant exits on Bleecker
            Street and flat-rate airport transfers to JFK and LGA. Pre-booked, no surge, TLC-licensed
            and available around the clock.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Greenwich Village</div>
              <div className="text-brand-silver text-sm mt-1">Full neighborhood coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">West Village</div>
              <div className="text-brand-silver text-sm mt-1">Hudson St to the river</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Dinner hour to pre-dawn</div>
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
            Greenwich Village Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From NYU campus area pickups and late-night restaurant departures to early airport runs
            and West Village hourly hire — every Village transportation need covered.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Greenwich Village or West Village address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Multi-restaurant evenings, gallery hops, and West Village nights — chauffeur on standby throughout.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                NYU faculty and admin, Village offices to Midtown, and corporate accounts available.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Village or West Village address to any destination — flat rate confirmed at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Private dinners, gallery openings, book launches, and Village venue events — arrive and depart in style.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Out-of-Town Transfers</div>
              <div className="text-sm text-brand-grey">
                Village to the Hamptons, Connecticut, Westchester, or anywhere in the tri-state region.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Greenwich Village Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Village&apos;s winding streets, dense restaurant scene, and mix of academic institutions
            and creative residents demand a car service that is reliable at 11 p.m. on a Saturday
            and at 5 a.m. for an early JFK departure.
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
            Greenwich Village &amp; Downtown Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Village coverage spans the full neighborhood from Washington Square Park west to
            the Hudson River and from 14th Street south through NoHo and the SoHo border.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Washington Square Park',
              'West Village',
              'NYU Campus Area',
              'SoHo (Adjacent)',
              'Meatpacking District',
              'Hudson Street',
              'Bleecker Street',
              'Christopher Street',
              'Seventh Avenue South',
              'Sixth Avenue Corridor',
              'NoHo',
              'MacDougal Street',
              'Cornelia Street',
              'Bank Street',
              'Horatio Street',
              'Jane Street',
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

      {/* ── Pickup Guide ── */}
      <section className="bg-brand-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
            Greenwich Village Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-black mb-2">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">Greenwich Village&apos;s irregular street grid — a legacy of its pre-grid settlement — means many blocks don&apos;t follow Manhattan&apos;s numbered pattern. Streets like Grove, Commerce, Bedford, and Barrow curve and intersect at odd angles, and several blocks are one-way in non-obvious directions. Your chauffeur will confirm the exact pickup corner via text — often the nearest accessible avenue (Hudson, Seventh Avenue South, or Sixth Avenue) rather than a narrow side street. The West Village section west of Hudson Street is particularly narrow; pickups are usually staged on West Street or Washington Street near the waterfront. For restaurant departure pickups on Bleecker or Christopher, your chauffeur confirms a block in advance and stays in contact so you walk out to a waiting car rather than waiting on a busy sidewalk.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-2">Notable pickup points</h3>
              <ul className="space-y-1">
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Washington Square Park — 5th Ave &amp; Washington Square North</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>NYU Bobst Library — 70 Washington Square South</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Bleecker Street restaurant row — 6th Ave to 7th Ave South</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Carbone / Commerce Street area — Bedford St &amp; Commerce St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Hudson Street corridor — full north–south spine</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Jane Hotel — Jane St &amp; West St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Meatpacking District — Gansevoort St &amp; 9th Ave</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Routes ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Common Routes from Greenwich Village</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left p-4 font-medium">Route</th>
                  <th className="text-left p-4 font-medium">Est. Drive Time</th>
                  <th className="text-left p-4 font-medium">Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Greenwich Village to JFK Airport</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Greenwich Village to LaGuardia (LGA)</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Greenwich Village to Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">30–45 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Greenwich Village to Teterboro (TEB)</td>
                  <td className="p-4 text-brand-grey">30–45 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Greenwich Village to Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">15–25 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Greenwich Village to the Hamptons</td>
                  <td className="p-4 text-brand-grey">2–2.5 hr</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black">Greenwich Village to Brooklyn</td>
                  <td className="p-4 text-brand-grey">20–35 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-brand-grey text-xs mt-3">Times are estimates in normal traffic. Flat rate confirmed at booking.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Greenwich Village Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Greenwich Village residents, NYU affiliates, restaurant guests,
            and West Village visitors.
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
            Book Your Greenwich Village Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Greenwich Village or
            West Village door — dinner nights, airport runs, NYU campus pickups, and everything
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
