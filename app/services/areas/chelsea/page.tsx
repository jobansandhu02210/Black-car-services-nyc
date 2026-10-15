import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Chelsea NYC Black Car Service | Luxury Chauffeur',
  description:
    'Chelsea black car NYC — High Line & Javits Center pickups, JFK & LGA transfers, Meatpacking event nights. Flat rates, no surge, TLC-licensed. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/chelsea` },
  openGraph: {
    ...ogDefaults,
    title: 'Chelsea NYC Black Car Service | Luxury Chauffeur | Eagle Eye',
    description: 'Luxury black car service in Chelsea and Meatpacking District, NYC. High Line area pickups, Javits Center transfers, airport runs, and event nights.',
    url: `${getSiteUrl()}/services/areas/chelsea`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you offer black car pickups near the High Line and Chelsea Market?',
    a: 'Yes. The High Line and Chelsea Market corridor is one of our most active Chelsea pickup zones. Whether you&apos;re leaving a meeting at Chelsea Market, finishing a walk on the High Line, or departing a gallery opening along West 22nd Street, your chauffeur arrives at the agreed point — no app hunting, no surge because of the crowds.',
  },
  {
    q: 'Can I get a black car from Chelsea to JFK or LGA?',
    a: 'Yes. Flat-rate airport transfers from Chelsea to JFK, LGA, EWR, and HPN are a core part of our service. Your rate is confirmed at booking and never changes regardless of traffic on the West Side Highway or tunnel conditions. For LGA, typical travel time from Chelsea is 25–40 minutes; for JFK, plan for 40–55 minutes.',
  },
  {
    q: 'Do you handle transfers to and from the Javits Center in Chelsea?',
    a: 'Yes. The Jacob K. Javits Convention Center on Eleventh Avenue is a frequent booking point for Eagle Eye. We handle pre-conference arrivals from JFK, LGA, and EWR as well as end-of-day transfers back to hotels in Midtown or the airports. For multi-day conventions, corporate accounts with daily scheduling are available.',
  },
  {
    q: 'Is black car service available for Chelsea and Meatpacking District event nights?',
    a: 'Yes. The Meatpacking District, which borders Chelsea to the south, is one of Manhattan&apos;s busiest nightlife and event zones. We provide pre-arranged event pickups and departures so you&apos;re not competing with surge-priced apps at 1 a.m. Your chauffeur is booked in advance and at the agreed location on time.',
  },
  {
    q: 'Do you serve Hudson Yards and Hell&apos;s Kitchen from Chelsea?',
    a: 'Yes. Our Chelsea service area connects directly into Hudson Yards to the north and Hell&apos;s Kitchen beyond. If your day involves Chelsea galleries, a meeting at Hudson Yards, and an airport departure, we handle the full sequence as a single booking with one dedicated chauffeur.',
  },
  {
    q: 'Is hourly black car hire available in Chelsea?',
    a: 'Absolutely. Chelsea&apos;s gallery district and the High Line corridor make hourly hire particularly practical here — you can move between gallery openings, Chelsea Market stops, and Flatiron meetings with your chauffeur on standby at each location. Book hourly and your driver stays with you through the full booking period.',
  },
  {
    q: 'How far is Chelsea from the NYC airports?',
    a: 'From Chelsea on Manhattan\'s west side, LaGuardia (LGA) is about 9 miles (25–45 minutes), Newark (EWR) is about 12 miles (25–45 minutes via the Lincoln or Holland Tunnel), and JFK is about 15 miles (40–65 minutes). Because Chelsea is close to the West Side Highway and the Hudson River tunnels, EWR is often quicker than its distance suggests.',
  },
  {
    q: 'How much does a car service from Chelsea to the airport cost?',
    a: 'Airport transfers from Chelsea are a flat rate confirmed at booking, with all tolls included and no surge — regardless of West Side Highway or tunnel traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Gallery & event district expertise',
    desc: 'Chelsea&apos;s gallery opening scene and Meatpacking nightlife require precise timing. Your chauffeur is positioned and waiting before crowds build.',
  },
  {
    title: 'Javits Center transfers',
    desc: 'Convention pickups and drop-offs at the Javits Center on Eleventh Avenue — multi-day corporate accounts and group coordination available.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Chelsea rate is locked at booking. No surge for gallery night traffic, Hudson Yards weekends, or Meatpacking District late nights.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is fully licensed, background-checked, and trained to the professional standard Chelsea&apos;s creative and corporate community expects.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Immaculate late-model vehicles that fit Chelsea&apos;s mix of creative professionals, hotel guests, and gallery clients — never an unwashed car.',
  },
  {
    title: 'West Side coverage',
    desc: 'Full coverage of the West Side corridor — Chelsea, Meatpacking, Hudson Yards, Hell&apos;s Kitchen, and all cross-streets from 14th to 34th Street.',
  },
];

export default function ChelseaPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Chelsea', url: `${getSiteUrl()}/services/areas/chelsea` },
        ]}
      />
      <ServiceJsonLd
        name="Chelsea NYC Black Car Service"
        description="Luxury black car and chauffeur service in Chelsea, New York City. High Line and Chelsea Market area pickups, Javits Center transfers, airport runs to JFK, LGA, EWR and HPN, Meatpacking District event nights, and hourly hire throughout Chelsea, Hudson Yards, and Hell's Kitchen."
        areaServed="Chelsea, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/chelsea`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Chelsea NYC Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service in Chelsea and the Meatpacking District — from High Line
            gallery nights and Chelsea Market departures to Javits Center convention transfers,
            JFK airport runs, and event evenings throughout the West Side. Flat-rate pricing,
            no surge, and a TLC-licensed chauffeur on standby around the clock.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Chelsea &amp; Meatpacking</div>
              <div className="text-brand-silver text-sm mt-1">Full district coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">West Side</div>
              <div className="text-brand-silver text-sm mt-1">14th to 34th &amp; beyond</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Gallery nights to pre-dawn</div>
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
            Chelsea Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From gallery opening transport and Javits Center convention transfers to early airport
            runs and late-night Meatpacking departures — every Chelsea transportation need covered.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Chelsea or Meatpacking address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Gallery hops, Chelsea Market, multi-stop creative days — chauffeur on standby.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Chelsea offices to Midtown, Javits Center, and beyond — corporate accounts available.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Chelsea address to any destination — flat rate confirmed at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Gallery openings, Meatpacking events, and private dinners — luxury transport in and out.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Javits Center Transfers</div>
              <div className="text-sm text-brand-grey">
                Convention pickups and group transfers — daily scheduling for multi-day events.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Chelsea Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Chelsea&apos;s mix of galleries, creative agencies, hotels, and the convention center demands
            a car service that is equally at home at a gallery opening and a corporate airport run.
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
            Chelsea & West Side Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Chelsea coverage spans the full West Side from the Meatpacking District south
            through Chelsea&apos;s gallery row to Hudson Yards and the Javits Center to the north.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'High Line',
              'Chelsea Market',
              'Meatpacking District',
              'Hudson Yards',
              'Javits Center',
              'Flatiron District',
              'Hell\'s Kitchen (South)',
              'West Chelsea Galleries',
              'Tenth Avenue',
              'Eleventh Avenue',
              'West 14th Street',
              'West 23rd Street',
              'West 34th Corridor',
              'Chelsea Piers',
              'Greenwich Village (North)',
              'West Village (Adjacent)',
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
            Chelsea Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-black mb-2">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">Chelsea&apos;s West Side location gives it good access to the West Side Highway and the Lincoln Tunnel approach, making it one of the faster neighborhoods to exit toward EWR and TEB. Tenth and Eleventh Avenues are the primary north–south corridors for vehicle movement; Eighth and Ninth Avenues have more local traffic and bus lanes. For gallery strip pickups along West 21st–26th Streets between Tenth and Eleventh, your chauffeur will stage on Eleventh Avenue and text you the cross-street to meet. Javits Center pickups use the designated vehicle staging area on Eleventh Avenue between 34th and 39th — your chauffeur tracks your convention schedule and positions accordingly. Chelsea Market pickups on Ninth Avenue are managed from the north or south entrance on 15th or 16th Street.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-2">Notable pickup points</h3>
              <ul className="space-y-1">
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Javits Center — 11th Ave, 34th to 40th St vehicle lane</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Chelsea Market — 9th Ave, 15th or 16th St entrance</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>High Line northern access — 10th Ave &amp; 30th St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Chelsea gallery strip — 11th Ave &amp; 22nd–24th St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Chelsea Piers — West Side Highway &amp; 23rd St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Meatpacking District — Gansevoort St &amp; 9th Ave</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Hudson Yards Shops — 10th Ave &amp; 30th St plaza</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Routes ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Common Routes from Chelsea</h2>
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
                  <td className="p-4 text-brand-black">Chelsea to JFK Airport</td>
                  <td className="p-4 text-brand-grey">40–55 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Chelsea to LaGuardia (LGA)</td>
                  <td className="p-4 text-brand-grey">30–40 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Chelsea to Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">30–45 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Chelsea to Teterboro (TEB)</td>
                  <td className="p-4 text-brand-grey">25–40 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Chelsea to Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">15–20 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Chelsea to the Hamptons</td>
                  <td className="p-4 text-brand-grey">2–2.5 hr</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black">Chelsea to Greenwich Village / SoHo</td>
                  <td className="p-4 text-brand-grey">10–20 min</td>
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
            Chelsea Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Chelsea residents, gallery clients, convention attendees, and hotel guests.
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
            Book Your Chelsea Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Chelsea door —
            gallery nights, Javits transfers, airport runs, and everything in between.
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
