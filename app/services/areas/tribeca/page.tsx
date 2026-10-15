import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Tribeca Black Car Service NYC | Luxury Chauffeur',
  description:
    'Black car in Tribeca — residential pickups, private events, JFK & LGA transfers, discreet VIP transport. Flat rates, no surge. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/tribeca` },
  openGraph: {
    ...ogDefaults,
    title: 'Tribeca Black Car Service NYC | Luxury Chauffeur | Eagle Eye',
    description: 'Luxury black car service in Tribeca, NYC. Residential pickups, private events, airport transfers, and discreet VIP transport throughout TriBeCa and.',
    url: `${getSiteUrl()}/services/areas/tribeca`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you offer residential black car pickups in Tribeca?',
    a: 'Yes. Tribeca is one of our most active residential service areas. We pick up from loft buildings, converted warehouses, and luxury condos throughout TriBeCa — from North Moore Street to Chambers Street, Greenwich Street to Hudson Street. Your chauffeur meets you at the building entrance. No waiting at a corner, no app confusion.',
  },
  {
    q: 'Can I book a black car for a private event or dinner in Tribeca?',
    a: 'Absolutely. Private event transport is a core part of our Tribeca service — restaurant reservations at Nobu or Tribeca Grill, private loft events, film screenings at the Tribeca Film Festival venues, and client entertainment throughout the neighborhood. We handle arrival logistics and post-event pickup with the same flat-rate structure.',
  },
  {
    q: 'What&apos;s the black car transfer time from Tribeca to JFK or EWR?',
    a: 'Typical travel time from Tribeca to JFK is 40–55 minutes; to EWR via the Holland Tunnel is approximately 30–40 minutes depending on traffic and time of day. Your flat rate is confirmed at booking regardless of conditions. For airport pickups, we track your flight in real time and adjust timing automatically.',
  },
  {
    q: 'Do you provide discreet VIP and celebrity transport in Tribeca?',
    a: 'Yes. Tribeca is home to a significant VIP residential community, and discretion is a non-negotiable standard for us. Our chauffeurs are trained on confidentiality protocols, do not discuss clients, and conduct pickups and drop-offs with the minimum possible profile. This extends to event venues, private residences, and hotel lobbies throughout the neighborhood.',
  },
  {
    q: 'Do you serve Hudson Square and Battery Park from Tribeca?',
    a: 'Yes. Our Tribeca service area extends seamlessly into Hudson Square, Battery Park City, the Financial District, and SoHo. If your trip spans multiple lower Manhattan neighborhoods — say, a residential pickup in Tribeca followed by a stop in Hudson Square before heading to JFK — we handle it as a single cohesive booking.',
  },
  {
    q: 'Is hourly black car hire available in Tribeca?',
    a: 'Yes. Hourly hire is popular in Tribeca for multi-stop days — meetings in the Financial District, lunch in SoHo, pickups back at the loft, and onward to an evening event. Your dedicated chauffeur stays with you throughout the booking period and waits at each stop without re-booking.',
  },
  {
    q: 'How far is Tribeca from the NYC airports?',
    a: 'From Tribeca in Lower Manhattan, Newark (EWR) is about 11 miles (20–40 minutes via the Holland Tunnel), LaGuardia (LGA) about 10 miles (25–45 minutes), and JFK about 14 miles (35–55 minutes). Being close to the Holland Tunnel, Newark is often the quickest airport from Tribeca.',
  },
  {
    q: 'How much does a car service from Tribeca to the airport cost?',
    a: 'Airport transfers from Tribeca are a flat rate confirmed at booking, with all tolls included and no surge regardless of downtown traffic. Enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Discreet VIP-standard service',
    desc: 'Tribeca&apos;s high-profile community expects absolute discretion. Our chauffeurs are trained on confidentiality and conduct every pickup with a low profile.',
  },
  {
    title: 'Residential building expertise',
    desc: 'We know TriBeCa&apos;s converted loft buildings and luxury residences. Your chauffeur arrives at the exact entrance and handles luggage without fuss.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Tribeca rate is locked before the ride begins. No surge for rainy evenings, Tribeca Film Festival nights, or high-demand weekends.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every driver is fully licensed, background-checked, and trained to the white-glove standard Tribeca residents expect.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Immaculate late-model vehicles that fit Tribeca&apos;s understated luxury aesthetic — never a worn-out car or an unwashed vehicle.',
  },
  {
    title: 'Hourly hire for multi-stop days',
    desc: 'Keep your chauffeur through a full Tribeca day — FiDi meetings, SoHo errands, and evening events without re-booking between stops.',
  },
];

export default function TribecaPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Tribeca', url: `${getSiteUrl()}/services/areas/tribeca` },
        ]}
      />
      <ServiceJsonLd
        name="Tribeca Black Car Service"
        description="Luxury black car and chauffeur service in Tribeca, New York City. Residential pickups, private event transport, VIP-discreet service, airport transfers to JFK, LGA, EWR and HPN, and hourly hire throughout TriBeCa, Hudson Square, and lower Manhattan."
        areaServed="Tribeca, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/tribeca`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Tribeca Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Luxury chauffeur service in one of Manhattan&apos;s most prestigious residential neighborhoods.
            From loft-building pickups on North Moore Street to discreet VIP transport, airport runs
            via the Holland Tunnel to EWR, and private event coverage throughout TriBeCa —
            flat-rate pricing, no surge, complete professional discretion.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">TriBeCa</div>
              <div className="text-brand-silver text-sm mt-1">Full neighborhood coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Premium Service</div>
              <div className="text-brand-silver text-sm mt-1">White-glove standard, always</div>
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
            Tribeca Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every service Tribeca&apos;s residents, businesses, and visitors need — from residential
            pickups and VIP transport to private events and airport transfers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate from any Tribeca address. Flight tracking included.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Dedicated chauffeur for a full day across Tribeca, FiDi, and lower Manhattan.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                TriBeCa offices to Midtown and back — corporate accounts and monthly invoicing.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Tribeca to any Manhattan address, airport, or outer-borough destination.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Tribeca Film Festival, private dinners, gallery events — discreet luxury transport.
              </div>
            </Link>
            <Link
              href="/book"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">VIP & Discreet Service</div>
              <div className="text-sm text-brand-grey">
                High-profile residential and event transport handled with complete confidentiality.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Tribeca Residents Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            TriBeCa&apos;s discerning residents expect a car service that is invisible when it needs to
            be and impeccably present when it counts — with pricing that never surprises.
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
            Tribeca & Lower Manhattan Locations We Serve
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Our Tribeca service covers the full TriBeCa triangle and connects seamlessly into
            neighboring SoHo, the Financial District, Hudson Square, Battery Park, and the West Village.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'North Moore Street',
              'Laight Street',
              'Hubert Street',
              'Harrison Street',
              'Duane Street',
              'Chambers Street',
              'Greenwich Street',
              'Hudson Street',
              'West Broadway (TriBeCa)',
              'Hudson Square',
              'Financial District',
              'SoHo Border',
              'Battery Park City',
              'West Village',
              'City Hall Area',
              'Canal Street (South)',
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
            Tribeca Pickup — What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-black mb-2">How pickup works</h3>
              <p className="text-sm text-brand-grey leading-relaxed">TriBeCa&apos;s residential character means relatively low foot traffic on most blocks — North Moore, Laight, Hubert, and Harrison Streets are quiet and easy for a staged pickup. Greenwich Street and Hudson Street run north–south and have more stopping opportunity than the east–west cross-streets. For loft buildings with freight elevator lobbies, your chauffeur confirms the correct entrance by text. West Broadway (TriBeCa section, south of Canal) and Church Street are usable for brief stops. The proximity to the Holland Tunnel means EWR trips are often routed west on Varick or West Street, avoiding Midtown entirely — a real advantage for early-morning flights.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-2">Notable pickup points</h3>
              <ul className="space-y-1">
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Nobu Tribeca — Hudson St &amp; Franklin St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Tribeca Grill — Greenwich St &amp; Franklin St</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>North Moore Street loft corridor</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Harrison Street — landmark row, easy access</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Duane Street &amp; West Broadway</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Greenwich Street — full north–south spine</li>
                <li className="text-sm text-brand-grey flex gap-2"><span>→</span>Chambers Street — southern boundary near City Hall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Routes ── */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Common Routes from Tribeca</h2>
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
                  <td className="p-4 text-brand-black">Tribeca to JFK Airport</td>
                  <td className="p-4 text-brand-grey">35–50 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Tribeca to LaGuardia (LGA)</td>
                  <td className="p-4 text-brand-grey">40–55 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Tribeca to Newark Airport (EWR)</td>
                  <td className="p-4 text-brand-grey">30–45 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Tribeca to Teterboro (TEB)</td>
                  <td className="p-4 text-brand-grey">30–40 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-white">
                  <td className="p-4 text-brand-black">Tribeca to Midtown Manhattan</td>
                  <td className="p-4 text-brand-grey">15–20 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="border-b border-brand-light bg-brand-offwhite">
                  <td className="p-4 text-brand-black">Tribeca to the Hamptons</td>
                  <td className="p-4 text-brand-grey">2–2.5 hr</td>
                  <td className="p-4 text-brand-grey">Out-of-Town Transfer</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black">Tribeca to Financial District</td>
                  <td className="p-4 text-brand-grey">10–15 min</td>
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
            Tribeca Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Tribeca residents, event planners, and visitors booking luxury car service.
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
            Book Your Tribeca Chauffeur
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. Discreet luxury transport from your Tribeca
            loft or residence — any hour, any destination.
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
