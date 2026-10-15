import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Upper West Side Black Car Service NYC',
  description:
    'Black car on the Upper West Side — Lincoln Center pickups, JFK/LGA airport transfers, Columbia University area. Flat rates, TLC-licensed. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/upper-west-side` },
  openGraph: {
    ...ogDefaults,
    title: 'Upper West Side Black Car Service NYC | Eagle Eye',
    description: 'Luxury black car service on the Upper West Side. Lincoln Center pickups, JFK/LGA airport transfers, Columbia University area, and residential.',
    url: `${getSiteUrl()}/services/areas/upper-west-side`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you offer black car pickups from Lincoln Center and the surrounding UWS area?',
    a: 'Yes. Lincoln Center is one of our most frequent Upper West Side pickup points — after-performance departures, pre-show arrivals, and event transport for the Metropolitan Opera, New York Philharmonic, and New York City Ballet. For post-show pickups, your chauffeur is positioned nearby in advance and meets you at a pre-arranged point to avoid the curtain-call crowd.',
  },
  {
    q: 'What is the flat rate from the Upper West Side to JFK or LGA?',
    a: 'Your flat rate is confirmed when you enter your specific UWS address and airport terminal on our booking page. We do not list fixed rates here because the exact amount depends on your pickup location and terminal — but once confirmed at booking, that price never changes. LGA is typically 25–40 minutes from the Upper West Side; JFK is 40–60 minutes.',
  },
  {
    q: 'Can I get a black car from the Columbia University area to the airport?',
    a: 'Yes. We serve the Columbia University area — Morningside Heights, West 116th Street, and the surrounding blocks — for airport transfers, Midtown rides, and out-of-town trips. Students, faculty, and visiting academics frequently use Eagle Eye for reliable airport transfers and one-way rides to other Manhattan neighborhoods.',
  },
  {
    q: 'Do you provide black car service from residential buildings on Central Park West and Riverside Drive?',
    a: 'Yes. Residential pickup is central to our Upper West Side service. We pick up from pre-war doorman buildings on Central Park West and Riverside Drive, and from all addresses throughout the UWS grid. Your chauffeur arrives at the building entrance and coordinates with the doorman when needed for smooth, unhurried departures.',
  },
  {
    q: 'Is hourly black car hire available for Upper West Side residents?',
    a: 'Absolutely. Hourly hire on the UWS is popular for multi-stop days — appointments at Columbia, shopping on Amsterdam Avenue, a Midtown lunch, and back. Your dedicated chauffeur stays with you for the full booking period with no re-booking between stops. Contact us or visit the booking page for hourly hire options.',
  },
  {
    q: 'Do you cover Broadway and Amsterdam Avenue on the Upper West Side?',
    a: 'Yes. Our UWS coverage runs the full width and length of the neighborhood — from Riverside Park and Riverside Drive on the west to Central Park West on the east, and from 59th Street at Columbus Circle north through Morningside Heights to 125th Street. Broadway, Amsterdam Avenue, Columbus Avenue, and all cross-streets are included.',
  },
  {
    q: 'How far is the Upper West Side from the NYC airports?',
    a: 'From the Upper West Side, LaGuardia (LGA) is about 9 miles (25–45 minutes), Newark (EWR) about 14 miles (30–50 minutes), and JFK about 16 miles (45–65 minutes). Because the UWS is on Manhattan\'s west side near the Henry Hudson Parkway, LaGuardia and Newark are usually the quickest airports.',
  },
  {
    q: 'How much does a car service from the Upper West Side to the airport cost?',
    a: 'Airport transfers from the Upper West Side are a flat rate confirmed at booking, with all tolls included and no surge regardless of traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Lincoln Center & performing arts expertise',
    desc: 'We specialize in post-performance departures and pre-show pickups at Lincoln Center — timing your chauffeur&apos;s arrival to avoid the curtain-call rush.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your UWS rate is locked at booking. No surge for Lincoln Center nights, Columbia graduation weekends, or holiday events along Central Park West.',
  },
  {
    title: 'Central Park West & Riverside Drive pickup',
    desc: 'We coordinate with doormen at pre-war buildings throughout the UWS for seamless lobby departures — no waiting on the sidewalk.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is fully licensed, background-checked, and trained to serve Upper West Side residents and Lincoln Center audiences with equal professionalism.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Immaculate late-model vehicles suited to UWS residential building entrances and Lincoln Center arrivals. Always the class you booked.',
  },
  {
    title: 'Columbia University area coverage',
    desc: 'We serve Morningside Heights and the Columbia area for airport transfers and Manhattan rides — reliable transport for students, faculty, and visiting guests.',
  },
];

export default function UpperWestSidePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Upper West Side', url: `${getSiteUrl()}/services/areas/upper-west-side` },
        ]}
      />
      <ServiceJsonLd
        name="Upper West Side Black Car Service"
        description="Luxury black car and chauffeur service on the Upper West Side, Manhattan. Lincoln Center pickups, airport transfers to JFK and LGA, Columbia University area transport, residential building service on Central Park West and Riverside Drive, and hourly hire throughout UWS."
        areaServed="Upper West Side, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/upper-west-side`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Upper West Side Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Professional chauffeur service throughout the Upper West Side — from Lincoln Center
            post-performance departures and Central Park West residential buildings to JFK and LGA
            airport transfers, Columbia University runs, and hourly hire for full-day coverage.
            Flat-rate pricing, no surge, a TLC-licensed chauffeur at your UWS door whenever you need one.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Upper West Side</div>
              <div className="text-brand-silver text-sm mt-1">59th to 125th Street</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">All UWS</div>
              <div className="text-brand-silver text-sm mt-1">Riverside to Central Park West</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Pre-dawn to post-curtain</div>
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
            Upper West Side Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Whether you need a Lincoln Center pickup after the opera, an early airport run, or a
            dedicated chauffeur for the full day — we have the right service for every UWS need.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Upper West Side address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Dedicated chauffeur for appointments, errands, and events across the UWS and Midtown.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                UWS to Midtown offices and beyond — corporate accounts and monthly invoicing.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Upper West Side address to any destination — flat rate confirmed at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Lincoln Center performances, museum galas, and private UWS events — luxury transport.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Columbia University Area</div>
              <div className="text-sm text-brand-grey">
                Morningside Heights pickups for airport transfers and Manhattan rides.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Upper West Side Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Upper West Side combines residential elegance with a packed cultural calendar.
            Eagle Eye delivers the car service that matches both — reliable, flat-rate, and always professional.
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
            Upper West Side Locations & Areas We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our UWS coverage runs from Columbus Circle at 59th Street north to Morningside Heights,
            and from Riverside Drive at the Hudson River east to Central Park West.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Lincoln Center',
              'Central Park West',
              'Columbus Circle',
              'Riverside Drive',
              'Riverside Park',
              'Amsterdam Avenue',
              'Columbus Avenue (UWS)',
              'Broadway (UWS)',
              'Columbia University',
              'Morningside Heights',
              '72nd Street (UWS)',
              '86th Street (UWS)',
              '96th Street (UWS)',
              'West End Avenue',
              'Natural History Museum',
              'Fordham University (Lincoln Ctr)',
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
            Upper West Side Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-black mb-2">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">The Upper West Side&apos;s residential avenues — Central Park West, West End Avenue, Riverside Drive, Amsterdam, and Columbus — all run north–south and are generally accessible for staged pickups. Broadway diagonals through the neighborhood and can be congested near 72nd and 86th Street subway stations. For doorman buildings on Central Park West, your chauffeur coordinates with building staff and waits in the service lane or a nearby spot rather than double-parking on the park-side. Lincoln Center pickups require timing around performance curtains — your chauffeur monitors show times and positions near the Columbus Avenue or Amsterdam Avenue exits, not directly on Broadway, to avoid the post-curtain taxi rush.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-2">Notable pickup points</h3>
              <ul className="space-y-1">
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Lincoln Center — Columbus Ave &amp; 65th St (main plaza)</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>American Museum of Natural History — 79th St &amp; Central Park West</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>The Beacon Theatre — Broadway &amp; 74th St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Central Park West co-ops — 72nd to 96th corridor</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Riverside Drive buildings — 80th–100th St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Columbia University — 116th St &amp; Broadway</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>The Apthorp — Broadway &amp; 79th St</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Routes ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Common Routes from the Upper West Side</h2>
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
                  <td className="p-4 text-brand-black">Upper West Side to JFK Airport</td>
                  <td className="p-4 text-brand-grey">45–60 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Upper West Side to LaGuardia (LGA)</td>
                  <td className="p-4 text-brand-grey">30–40 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Upper West Side to Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">50–65 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Upper West Side to Westchester</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Upper West Side to the Hamptons</td>
                  <td className="p-4 text-brand-grey">2.5–3 hr</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Upper West Side to Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">15–25 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black">Upper West Side to Lower Manhattan / FiDi</td>
                  <td className="p-4 text-brand-grey">25–40 min</td>
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
            Upper West Side Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from UWS residents, Lincoln Center guests, and visitors booking luxury car service.
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
            Book Your Upper West Side Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your UWS door —
            from Central Park West lobby pickups to Lincoln Center drop-offs and airport runs.
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
