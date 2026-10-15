import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'SoHo NYC Black Car Service | Luxury Chauffeur',
  description:
    'Black car in SoHo and NoLIta — hotel pickups, shopping, JFK & LGA airport transfers, evening events. Flat rates, no surge. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/soho` },
  openGraph: {
    ...ogDefaults,
    title: 'SoHo NYC Black Car Service | Luxury Chauffeur | Eagle Eye',
    description: 'Luxury black car service in SoHo, NoLIta, and lower Manhattan. Hotel pickups, shopping, airport transfers, and evening event transport. Flat rates.',
    url: `${getSiteUrl()}/services/areas/soho`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you pick up from SoHo hotels and boutique residences?',
    a: 'Yes. We pick up from every SoHo hotel — the Crosby Street Hotel, 11 Howard, The James, and all boutique properties on West Broadway, Spring Street, and Prince Street. Your chauffeur arrives at the entrance and meets you directly, making it seamless whether you have luggage for an airport run or just need a quick ride downtown.',
  },
  {
    q: 'Can I book a black car for a SoHo shopping trip with multiple stops?',
    a: 'Absolutely. Our hourly hire service is perfect for SoHo shopping — you can move between boutiques, galleries, and showrooms with your chauffeur waiting at each stop. There&apos;s no app metering, no hunting for the next ride between stops. Book hourly and your driver stays with you through the full outing.',
  },
  {
    q: 'What&apos;s the flat rate for a black car from SoHo to JFK or LGA?',
    a: 'Your rate is confirmed at booking when you enter your SoHo pickup address and airport destination. We do not show pricing on this page because your exact rate depends on your specific address and terminal — visit our booking page for an instant quote. Once confirmed, that rate never changes regardless of traffic or time of day.',
  },
  {
    q: 'Do you serve NoLIta, Little Italy, and the Lower East Side from SoHo?',
    a: 'Yes. Our SoHo service coverage extends into NoLIta, Little Italy, Hudson Square, and the Lower East Side. If you&apos;re moving between dinner reservations in NoLIta and an event in the West Village, or heading from the Lower East Side to JFK, we handle all of it as a single connected service area.',
  },
  {
    q: 'Is a black car available for SoHo event nights and gallery openings?',
    a: 'Yes. SoHo&apos;s gallery scene and event calendar make evening bookings very common. We provide discreet, timely pickup and drop-off for gallery openings, private dinners, film premieres, and evening events throughout SoHo and the surrounding neighborhoods. Your chauffeur monitors traffic and plans accordingly.',
  },
  {
    q: 'Can I get an airport black car from SoHo for an early morning flight?',
    a: 'Yes. Early morning airport runs from SoHo are straightforward bookings. Your chauffeur is confirmed the night before, arrives at your SoHo address at the agreed time, and handles your luggage at pickup and drop-off. We track your flight and provide terminal-specific guidance for JFK, LGA, and EWR.',
  },
  {
    q: 'How far is SoHo from the NYC airports?',
    a: 'From SoHo in Lower Manhattan, JFK is about 14 miles (35–55 minutes), LaGuardia (LGA) about 10 miles (25–45 minutes), and Newark (EWR) about 12 miles (25–45 minutes via the Holland Tunnel). Because SoHo is close to the Holland Tunnel, Newark is often the quickest airport from here.',
  },
  {
    q: 'How much does a car service from SoHo to the airport cost?',
    a: 'Airport transfers from SoHo are a flat rate confirmed at booking, with all tolls included and no surge regardless of downtown traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Boutique hotel & residence pickup',
    desc: 'We know SoHo&apos;s narrow cast-iron streets. Your chauffeur arrives at the entrance of your hotel or building, not a block away.',
  },
  {
    title: 'Hourly hire for shopping & galleries',
    desc: 'Keep your chauffeur for a full SoHo afternoon — boutiques, showrooms, and gallery hops with a luxury vehicle waiting at each stop.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your SoHo rate is locked immediately. No surge for SoHo&apos;s busy weekends, fashion week, or summer gallery nights.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is background-checked, licensed, and trained to the standard SoHo&apos;s discerning residents and hotel guests expect.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Immaculate late-model vehicles that complement the aesthetic of SoHo&apos;s upscale hotels and residential buildings.',
  },
  {
    title: 'Airport transfers from SoHo',
    desc: 'Flat-rate runs to JFK, LGA, EWR, and HPN — direct from your SoHo hotel or apartment, luggage handled door to door.',
  },
];

export default function SohoPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'SoHo', url: `${getSiteUrl()}/services/areas/soho` },
        ]}
      />
      <ServiceJsonLd
        name="SoHo NYC Black Car Service"
        description="Luxury black car and chauffeur service in SoHo, New York City. Hotel pickups, shopping and gallery trips with hourly hire, airport transfers to JFK, LGA, EWR and HPN, and evening event transport throughout SoHo, NoLIta, Tribeca and Greenwich Village."
        areaServed="SoHo, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/soho`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            SoHo NYC Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service in SoHo, NoLIta, and lower Manhattan. From boutique hotel
            pickups on West Broadway to airport runs from Spring Street, shopping afternoons with
            hourly hire to gallery event nights — flat-rate pricing, no surge, and a TLC-licensed
            chauffeur at your SoHo door whenever you need one.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">SoHo &amp; NoLIta</div>
              <div className="text-brand-silver text-sm mt-1">Full neighborhood coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Luxury Vehicles</div>
              <div className="text-brand-silver text-sm mt-1">Sedan &amp; SUV, always clean</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Early mornings &amp; late nights</div>
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
            SoHo Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every service SoHo residents, hotel guests, and visitors need — from airport
            transfers to gallery nights to full-day shopping with a dedicated chauffeur.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from your SoHo hotel or apartment.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Shopping, gallery hops, or a full afternoon with a chauffeur on standby.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                SoHo offices and showrooms to Midtown or downtown — corporate accounts available.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                SoHo to any Manhattan destination, the airports, or outer boroughs — flat rate.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Gallery openings, film premieres, private dinners — luxury transport in and out.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hotel Guest Service</div>
              <div className="text-sm text-brand-grey">
                Lobby pickup at Crosby Street Hotel, 11 Howard, The James, and all SoHo properties.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why SoHo Guests & Residents Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            SoHo&apos;s cobblestone streets and boutique character call for a car service that understands
            the neighborhood — not a faceless app that sends an unmarked sedan to the wrong block.
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
            SoHo & Surrounding Neighborhoods We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our SoHo service extends into the full lower Manhattan cultural corridor — from Tribeca
            north through Greenwich Village, and from Hudson Square east through NoLIta and the
            Lower East Side.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'SoHo (West Broadway)',
              'SoHo (Spring Street)',
              'SoHo (Prince Street)',
              'NoLIta',
              'Little Italy',
              'Tribeca',
              'Greenwich Village',
              'Hudson Square',
              'Lower East Side',
              'West Village',
              'Nolita & Elizabeth St',
              'Canal Street Corridor',
              'Varick Street',
              'Broome Street',
              'Grand Street',
              'Houston Street',
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
            SoHo Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-black mb-2">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">SoHo&apos;s cast-iron district has narrow cobblestone blocks — especially on Wooster, Greene, and Mercer Streets — that make double-parking difficult during peak hours. West Broadway and Spring Street are the main commercial corridors with more vehicle throughput, while Prince Street and Broome Street are also workable. Your chauffeur will text you a precise corner to walk to if the exact address isn&apos;t stoppable. For hotel pickups at the Crosby Street Hotel on Crosby Street or 11 Howard on Howard Street, drivers coordinate with the front desk for a clean lobby pull-up. Weekend afternoons and Fashion Week periods see heavy pedestrian traffic, so your chauffeur arrives 5 minutes early to secure a spot.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-2">Notable pickup points</h3>
              <ul className="space-y-1">
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Crosby Street Hotel — Crosby St between Spring &amp; Prince</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>11 Howard Hotel — Howard St &amp; Lafayette St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>The James New York — Grand St &amp; Thompson St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>West Broadway — main spine, Spring to Canal</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Spring Street &amp; Sixth Avenue intersection</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Prince Street &amp; Broadway — busy but accessible</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Houston Street — northern boundary, easy access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Routes ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Common Routes from SoHo</h2>
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
                  <td className="p-4 text-brand-black">SoHo to JFK Airport</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">SoHo to LaGuardia (LGA)</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">SoHo to Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">30–45 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">SoHo to Teterboro (TEB)</td>
                  <td className="p-4 text-brand-grey">30–45 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">SoHo to Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">15–25 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">SoHo to Brooklyn</td>
                  <td className="p-4 text-brand-grey">20–30 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black">SoHo to the Hamptons</td>
                  <td className="p-4 text-brand-grey">2–2.5 hr</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
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
            SoHo Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from SoHo hotel guests, residents, and visitors booking luxury car service.
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
            Book Your SoHo Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. A luxury vehicle at your SoHo door —
            hotel pickup, airport run, or an afternoon of shopping with a driver on standby.
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
