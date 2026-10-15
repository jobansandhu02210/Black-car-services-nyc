import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: "Hell's Kitchen Black Car Service NYC | Eagle Eye",
  description:
    "Hell's Kitchen black car — Broadway pickups, Javits Center, Penn Station, JFK & LGA airport runs. Flat rates, TLC-licensed. Book Eagle Eye 24/7.",
  alternates: { canonical: `${getSiteUrl()}/services/areas/hells-kitchen` },
  openGraph: {
    ...ogDefaults,
    title: "Hell's Kitchen Black Car Service NYC | Eagle Eye",
    description: "Luxury black car in Hell's Kitchen and the Theater District. Broadway pickups, Javits Center transfers, Penn Station area, late-night service, and.",
    url: `${getSiteUrl()}/services/areas/hells-kitchen`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: "Do you pick up from Broadway theaters and the Theater District in Hell's Kitchen?",
    a: "Yes. Pre-show drop-offs and post-show pickups throughout the Theater District are among our most active bookings in Hell's Kitchen. Whether you're departing from West 42nd Street, West 44th Street, or anywhere along the Broadway corridor, your chauffeur is at the arranged point when the curtain falls — not circling the block waiting for a surge to clear. For post-show pickups, we recommend booking 30 minutes after curtain-down to account for crowds exiting the house.",
  },
  {
    q: 'Can I get a black car from Hell\'s Kitchen to the Javits Center?',
    a: "Absolutely. The Jacob K. Javits Convention Center on Eleventh Avenue sits at the northern edge of Hell's Kitchen, making it one of the most convenient transfers we handle. Whether you're arriving for a multi-day convention or heading out after an exhausting trade show floor, we handle pickups and drop-offs at all Javits entrances and can coordinate daily scheduling for corporate groups attending the same event.",
  },
  {
    q: "Is black car service available near Penn Station from Hell's Kitchen?",
    a: "Yes. Penn Station on 34th Street is a frequent connection point for Hell's Kitchen residents and visitors. We provide black car pickups from the surrounding blocks — Eighth Avenue, Ninth Avenue, and all cross-streets between 30th and 38th — for connections heading to JFK, LGA, EWR, or anywhere in the metropolitan area. If you're arriving at Penn Station and need a luxury transfer, we meet you at the agreed street entrance.",
  },
  {
    q: "Do you offer late-night black car service in Hell's Kitchen?",
    a: "Yes. Hell's Kitchen has one of Manhattan's most active late-night dining and nightlife scenes along Ninth Avenue and the surrounding blocks. We provide pre-arranged pickups after restaurant dinners, late-night events, and post-theater gatherings so you're never competing with surge-priced apps at midnight. Book in advance and your chauffeur is confirmed and on time.",
  },
  {
    q: "How long does it take to get from Hell's Kitchen to JFK or LGA?",
    a: "From Hell's Kitchen, plan approximately 35–50 minutes to JFK and 20–35 minutes to LaGuardia, depending on time of day and Queens-Midtown Tunnel or Triborough Bridge conditions. We always recommend booking well ahead of departure to account for Midtown Tunnel traffic during peak hours. Your flat rate is confirmed at booking regardless of actual travel time.",
  },
  {
    q: "Can you handle group transfers for Broadway shows or Hudson Yards events from Hell's Kitchen?",
    a: "Yes. Hell's Kitchen&apos;s position between the Theater District, Times Square, Columbus Circle, and Hudson Yards makes multi-stop or multi-vehicle group bookings very common. Whether you need two SUVs after a Broadway night or a sedan convoy for a Hudson Yards corporate event, we coordinate the logistics so every guest departs on time in a luxury vehicle.",
  },
  {
    q: "How far is Hell's Kitchen from the NYC airports?",
    a: "From Hell's Kitchen on Manhattan's west side, Newark (EWR) is about 10 miles (20–40 minutes via the Lincoln Tunnel), LaGuardia (LGA) about 9 miles (25–45 minutes), and JFK about 15 miles (45–65 minutes). Being right by the Lincoln Tunnel, Newark is often the quickest airport from here.",
  },
  {
    q: "How much does a car service from Hell's Kitchen to the airport cost?",
    a: 'Airport transfers are a flat rate confirmed at booking, with all tolls included and no surge — even during Theater District and Times Square congestion. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Theater District timing expertise',
    desc: "Broadway curtains drop on time and so does your chauffeur. We position your driver before the crowds pour out of the Theater District so you&apos;re moving while others are waiting.",
  },
  {
    title: 'Javits Center specialists',
    desc: "The Javits Center is steps from Hell's Kitchen and Eagle Eye handles convention arrivals, daily shuttles, and group departures throughout every major trade show season.",
  },
  {
    title: 'Late-night coverage, no surge',
    desc: "Hell's Kitchen dining and nightlife runs past midnight. Your pre-booked rate never changes regardless of how busy Ninth Avenue gets on a Friday night.",
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is fully TLC-licensed, background-checked, and trained to the professional standard that Theater District clients and corporate groups expect.',
  },
  {
    title: 'Flat rate from booking to arrival',
    desc: "Your Hell's Kitchen rate is locked at the moment you book. No surprises, no surge for Times Square congestion or late-night Midtown West traffic.",
  },
  {
    title: 'Full Midtown West coverage',
    desc: "Hell's Kitchen, Theater District, Times Square, Columbus Circle, Penn Station, Hudson Yards, and the Intrepid — full coverage across the entire Midtown West corridor.",
  },
];

export default function HellsKitchenPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: "Hell's Kitchen", url: `${getSiteUrl()}/services/areas/hells-kitchen` },
        ]}
      />
      <ServiceJsonLd
        name="Hell's Kitchen Black Car Service"
        description="Luxury black car and chauffeur service in Hell's Kitchen and the Theater District, Midtown West, New York City. Broadway and theater pickups, Javits Center convention transfers, Penn Station area, JFK and LGA airport runs, late-night service throughout Hell's Kitchen, Times Square, Columbus Circle, and Hudson Yards."
        areaServed="Hell's Kitchen, Theater District, Midtown West, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/hells-kitchen`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Hell&apos;s Kitchen Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service in Hell&apos;s Kitchen and the Theater District — from Broadway
            curtain pickups and Javits Center convention transfers to JFK and LGA airport runs and
            late-night Ninth Avenue departures. Flat-rate pricing, no surge, and a TLC-licensed
            chauffeur available around the clock in Midtown West.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Hell&apos;s Kitchen</div>
              <div className="text-brand-silver text-sm mt-1">Full neighborhood coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Theater District</div>
              <div className="text-brand-silver text-sm mt-1">Broadway &amp; beyond</div>
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
            Hell&apos;s Kitchen Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From Broadway theater pickups and Javits Center convention transfers to early airport
            departures and late-night Ninth Avenue rides — every Midtown West transportation need covered.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Hell&apos;s Kitchen or Theater District address.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Multi-show nights, convention days, and Midtown West multi-stop bookings — chauffeur on standby.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Javits Center convention groups, Midtown offices, and corporate accounts available.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Hell&apos;s Kitchen address to any destination — flat rate confirmed at booking.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Broadway shows, Hudson Yards events, and Intrepid Museum functions — luxury transport in and out.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Javits Center Transfers</div>
              <div className="text-sm text-brand-grey">
                Daily convention shuttles and group departures — multi-day scheduling available.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Hell&apos;s Kitchen Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Hell&apos;s Kitchen&apos;s blend of Broadway energy, convention traffic, and residential calm
            demands a car service that can match the pace at 11 p.m. after curtain and at 5 a.m.
            for an early JFK departure.
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
            Hell&apos;s Kitchen &amp; Midtown West Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Hell&apos;s Kitchen coverage spans the full Midtown West corridor from the Theater District
            south through Hell&apos;s Kitchen to the Intrepid Museum and Hudson Yards to the north and west.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Theater District',
              'Times Square',
              'Columbus Circle',
              'Penn Station Area',
              'Jacob Javits Center',
              'Hudson Yards',
              'Intrepid Museum',
              'Ninth Avenue',
              'Eighth Avenue',
              'West 42nd Street',
              'West 45th–50th Streets',
              'West 57th Street',
              'Clinton (North HK)',
              'Port Authority Area',
              'Lincoln Tunnel Approach',
              'West Side Highway',
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Hell&apos;s Kitchen</h2>
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
                  <td className="p-4 text-brand-grey">30–40 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Teterboro Airport (TEB)</td>
                  <td className="p-4 text-brand-grey">25–35 min</td>
                  <td className="p-4 text-brand-grey">Private Aviation</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Midtown East</td>
                  <td className="p-4 text-brand-grey">10–15 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-offwhite">
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
            Hell&apos;s Kitchen Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-brand-black mb-3">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">Hell&apos;s Kitchen&apos;s avenues — Eighth, Ninth, Tenth, and Eleventh — run north–south with good vehicle flow, while the cross-streets between 42nd and 57th tend to be less congested than the Broadway-Times Square blocks to the east. Your chauffeur will stage on the agreed avenue and text you the precise cross-street. For Broadway Theater District pickups after curtain, your chauffeur positions away from the main 45th–47th Street surge and meets you at a pre-agreed point one block west — typically on Eighth Avenue. For Javits Center and Hudson Yards pickups, Eleventh Avenue staging is standard. Post-dinner departures on Ninth Avenue are handled smoothly at off-peak hours, though popular Friday and Saturday nights may require confirming a half-block meet point in advance.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-3">Key pickup locations</h3>
              <ul className="space-y-2">
                {[
                  'Jacob Javits Center — 11th Ave, 34th to 40th St',
                  'Broadway Theater District — 8th Ave & 44th–47th St',
                  'Times Square hotels — 8th Ave & 42nd–49th St',
                  'Ninth Avenue restaurant row — 44th to 54th St',
                  'Hudson Yards plaza — 10th Ave & 30th St',
                  'Intrepid Museum — 12th Ave & 46th St',
                  'Penn Station / 34th St — 8th Ave entrance',
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
            Hell&apos;s Kitchen Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Hell&apos;s Kitchen residents, Broadway theatergoers, convention attendees,
            and Midtown West visitors.
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
            Book Your Hell&apos;s Kitchen Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your Hell&apos;s Kitchen or
            Theater District door — Broadway nights, Javits transfers, airport runs, and everything
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
