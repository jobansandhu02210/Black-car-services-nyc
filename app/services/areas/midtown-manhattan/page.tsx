import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Midtown Manhattan Black Car Service',
  description:
    'Corporate black car Midtown Manhattan — flat-rate airport transfers, hourly roadshows, Penn Station pickups, Times Square events. TLC-licensed. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/midtown-manhattan` },
  openGraph: {
    ...ogDefaults,
    title: 'Midtown Manhattan Black Car Service | Eagle Eye',
    description: 'Corporate car service in Midtown Manhattan. Flat-rate airport transfers, hourly hire for roadshows, Penn Station pickups, and Times Square event.',
    url: `${getSiteUrl()}/services/areas/midtown-manhattan`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you provide corporate black car service in Midtown Manhattan?',
    a: 'Yes. Corporate travel is one of our core services in Midtown. We provide executive transfers between Midtown offices, Rockefeller Center, Hudson Yards, and Park Avenue headquarters. Our chauffeurs are briefed on professional discretion, punctuality, and client-facing conduct. Monthly invoicing and managed corporate accounts are available for businesses with recurring needs.',
  },
  {
    q: 'Can I get a black car from Midtown Manhattan to JFK or LGA?',
    a: 'Absolutely. We run flat-rate airport transfers from anywhere in Midtown — Times Square hotels, Grand Central, Park Avenue offices, or Penn Station — to JFK, LGA, EWR, and HPN. Your rate is confirmed at booking and never changes for traffic or demand. For arrivals, we track your flight and adjust pickup timing automatically.',
  },
  {
    q: 'Is hourly black car hire available for Midtown roadshows?',
    a: 'Yes. Our hourly hire service is built for Midtown&apos;s multi-stop corporate day — investor roadshows, back-to-back client meetings, and bank presentations across Avenue of the Americas, Park Avenue, and Sixth Avenue. Your dedicated chauffeur stays with you for the full booking period so there&apos;s no re-booking between stops.',
  },
  {
    q: 'Do you offer pickups from Penn Station or Grand Central in Midtown?',
    a: 'Yes. We pick up and drop off at Penn Station, Grand Central Terminal, and Port Authority Bus Terminal. For train arrivals, share your arrival time and platform and your chauffeur will be positioned nearby. This is popular with executives commuting in from New Jersey, Long Island, or Connecticut who need onward transport to a Midtown office or hotel.',
  },
  {
    q: 'Can I book a black car for a Times Square or Madison Square Garden event?',
    a: 'Definitely. Special event transport from — and to — Times Square, Madison Square Garden, Radio City Music Hall, and Carnegie Hall is a common booking. We handle post-event pickup logistics carefully given Midtown traffic patterns, ensuring your chauffeur is waiting at an agreed point rather than caught in event-night gridlock.',
  },
  {
    q: 'How far in advance should I book a Midtown Manhattan black car?',
    a: 'For scheduled airport transfers and corporate bookings, 24 hours in advance is recommended. For same-day or on-demand Midtown rides, contact us via WhatsApp or phone and we&apos;ll confirm availability promptly. Pre-booking is always advisable for early morning departures, major events, and roadshow days.',
  },
  {
    q: 'Do you pick up from the Javits Center on the west side of Midtown?',
    a: 'Yes. The Jacob K. Javits Convention Center on Eleventh Avenue between 34th and 40th Streets is a regular Eagle Eye pickup point. We handle arrivals from all three major airports before convention openings, and departures back to JFK, LGA, and EWR at the end of convention days. For multi-day events, we can set up a recurring daily schedule so you have a confirmed car without re-booking each morning.',
  },
  {
    q: 'Can I book a black car from a Midtown hotel for an early morning JFK departure?',
    a: 'Yes. Early morning airport pickups from Midtown hotels — The Plaza, The St. Regis, Four Seasons on 57th, Park Hyatt, and all other Midtown properties — are one of our most common bookings. Your chauffeur is confirmed the evening before, coordinates with the hotel bell desk, and arrives precisely at your requested time. Visit /book to reserve your transfer.',
  },
  {
    q: 'How far is Midtown Manhattan from the NYC airports?',
    a: 'From Midtown Manhattan, LaGuardia (LGA) is the closest airport at about 8 miles (20–40 minutes). JFK is about 15 miles (45–60 minutes) and Newark (EWR) about 15 miles (30–50 minutes via the Lincoln Tunnel). LaGuardia is usually quickest for domestic flights, while EWR can be faster than JFK in heavy traffic.',
  },
  {
    q: 'How much does a car service from Midtown Manhattan to the airport cost?',
    a: 'Airport transfers from Midtown are a flat rate confirmed at booking, with all tolls included and no surge regardless of traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Midtown corporate expertise',
    desc: 'We understand the pace of Midtown — tight meeting windows, doorstep-to-doorstep precision, and the discretion executive clients require.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Midtown rate is locked the moment you book. Rush hour on Fifth Avenue, rain on 42nd Street, or a sold-out MSG night — the price never moves.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is fully licensed, background-checked, and trained to serve business-class clients. Professional attire and client-first conduct on every ride.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model business-class vehicles kept immaculate. Ideal for impressing clients or simply arriving to your next meeting composed.',
  },
  {
    title: 'Hourly hire for full-day coverage',
    desc: 'Keep your chauffeur through a full day of Midtown appointments, roadshows, or investor presentations without re-booking between stops.',
  },
  {
    title: 'Corporate accounts and invoicing',
    desc: 'Monthly billing, multi-rider coordination, and tailored corporate accounts for law firms, banks, and consulting groups headquartered in Midtown.',
  },
];

export default function MidtownManhattanPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Midtown Manhattan', url: `${getSiteUrl()}/services/areas/midtown-manhattan` },
        ]}
      />
      <ServiceJsonLd
        name="Midtown Manhattan Black Car Service"
        description="Luxury black car and chauffeur service throughout Midtown Manhattan. Corporate travel, airport transfers to JFK, LGA, EWR and HPN, hourly hire for roadshows, and Penn Station pickups. Flat-rate pricing, TLC-licensed chauffeurs, 24/7 availability."
        areaServed="Midtown Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/midtown-manhattan`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Midtown Manhattan Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Professional chauffeur service at the heart of New York City&apos;s corporate core. From Rockefeller
            Center boardrooms to Penn Station arrivals, Times Square hotels to Hudson Yards offices —
            flat-rate pricing, no surge, a luxury vehicle at your door around the clock.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Corporate Hub</div>
              <div className="text-brand-silver text-sm mt-1">NYC&apos;s business center</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">All Midtown</div>
              <div className="text-brand-silver text-sm mt-1">34th to 59th Street</div>
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
            Midtown Manhattan Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Whether you need an airport transfer from your Midtown hotel, a dedicated chauffeur for a
            full-day roadshow, or executive transport between Park Avenue offices — we have the right
            service for every Midtown need.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Midtown address. Flight tracking included.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Dedicated chauffeur for roadshows, investor meetings, or a full Midtown day.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Executive transport, monthly invoicing, and multi-vehicle event coordination.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Midtown address to any destination — flat rate, confirmed before you book.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                MSG, Broadway, Radio City, Carnegie Hall — arrive and depart in a luxury vehicle.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Station Transfers</div>
              <div className="text-sm text-brand-grey">
                Penn Station, Grand Central, and Port Authority pickups and drop-offs.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Midtown Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Midtown Manhattan demands precision. Meetings run back-to-back, traffic is unpredictable,
            and your professional image matters the moment you step out of a vehicle.
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
            Midtown Manhattan Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Midtown coverage spans the full corridor from 34th Street to 59th Street and beyond,
            including every major office cluster, hotel, transit hub, and entertainment venue.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Times Square',
              'Rockefeller Center',
              'Grand Central Terminal',
              'Penn Station',
              'Madison Square Garden',
              'Hudson Yards',
              "Hell's Kitchen",
              'Murray Hill',
              'Fifth Avenue',
              'Park Avenue',
              'Avenue of the Americas',
              'Bryant Park',
              'Carnegie Hall',
              'Radio City Music Hall',
              'Port Authority',
              'Javits Center',
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
            Midtown Manhattan Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-black mb-2">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">Midtown&apos;s grid is dense and heavily trafficked. Your chauffeur monitors conditions on Fifth Avenue, Sixth Avenue, and the cross-streets between 34th and 59th in real time. For hotel pickups at the Midtown Hilton, The Peninsula, or Four Seasons on 57th Street, drivers use the designated hotel loading zones and coordinate with the bell desk. For office buildings on Park Avenue or Avenue of the Americas, your chauffeur holds a nearby legal standing spot and texts you when on-site — avoiding the double-park chaos common with app services. Post-MSG or post-Broadway pickups are handled from a pre-agreed cross-street to keep you clear of the pedestrian surge.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-2">Notable pickup points</h3>
              <ul className="space-y-1">
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Grand Central Terminal — 42nd St &amp; Vanderbilt Ave</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Penn Station — 7th Ave &amp; 32nd St entrance</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Rockefeller Center — 49th or 50th &amp; Fifth Ave</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Times Square hotels — 7th Ave drop zone, W 45th–47th</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Hudson Yards — 10th Ave &amp; 30th St, mall entrance</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Madison Square Garden — 7th Ave &amp; 31st St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Park Avenue offices — lobby coordination, 45th–55th</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Routes ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Common Routes from Midtown Manhattan</h2>
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
                  <td className="p-4 text-brand-black">Midtown to JFK Airport</td>
                  <td className="p-4 text-brand-grey">40–55 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Midtown to LaGuardia (LGA)</td>
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Midtown to Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Midtown to Westchester (HPN)</td>
                  <td className="p-4 text-brand-grey">50–70 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Midtown to the Hamptons</td>
                  <td className="p-4 text-brand-grey">2–3 hr</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Midtown to Greenwich, CT</td>
                  <td className="p-4 text-brand-grey">55–80 min</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Midtown to Brooklyn</td>
                  <td className="p-4 text-brand-grey">20–35 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Midtown to Newark City</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
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
            Midtown Manhattan Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from corporate clients and travelers booking black car service in Midtown.
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
            Book Your Midtown Manhattan Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Midtown door —
            around the clock, seven days a week, no surge pricing ever.
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
