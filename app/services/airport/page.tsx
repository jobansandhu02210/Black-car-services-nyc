import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'NYC Airport Car Service | JFK LGA EWR HPN',
  description:
    'NYC airport car service — flat-rate black car to JFK, LaGuardia, Newark & Westchester. Meet & greet, real-time flight tracking, no surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/airport` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/airport` },
};

const airports = [
  {
    code: 'JFK',
    name: 'John F. Kennedy International',
    detail: 'NYC\'s largest international airport — 6 active terminals, meet & greet at all. Real-time flight tracking. 60-min free wait. All international carriers and JetBlue domestic hub.',
    time: '35–60 min from Midtown',
    href: '/services/airport/jfk',
  },
  {
    code: 'LGA',
    name: 'LaGuardia Airport',
    detail: 'Closest airport to Manhattan — just 8 miles from Midtown. Newly rebuilt Terminal B and Terminal C. Domestic flights only: American, United, Delta, Southwest.',
    time: '20–35 min from Midtown',
    href: '/services/airport/lga',
  },
  {
    code: 'EWR',
    name: 'Newark Liberty International',
    detail: 'United Airlines hub serving NYC and New Jersey. All NJ Turnpike and tunnel tolls included in your flat rate. Terminals A, B, and C — all covered.',
    time: '30–50 min from Midtown',
    href: '/services/airport/ewr',
  },
  {
    code: 'HPN',
    name: 'Westchester County Airport',
    detail: 'Smaller regional airport with shorter security lines — popular with executives in Westchester, Connecticut, and northern Manhattan. American, Delta, United, JetBlue on select routes.',
    time: '45–65 min from Midtown',
    href: '/services/airport/hpn',
  },
];

const faqs = [
  {
    q: 'Which NYC airport do you serve?',
    a: 'Eagle Eye Chauffeur serves all four major New York airports: JFK (John F. Kennedy International), LGA (LaGuardia), EWR (Newark Liberty), and HPN (Westchester County Airport). Teterboro Airport (TEB) for private aviation is also available on request.',
  },
  {
    q: 'Do you track flights for airport pickups?',
    a: 'Yes. We monitor every flight in real time. If your plane is delayed or arrives early, your driver adjusts automatically at no extra charge. You never need to call us to update your pickup time.',
  },
  {
    q: 'What is included in a flat-rate airport transfer?',
    a: 'Your quoted price includes the ride, all tolls, meet-and-greet service at arrivals, flight tracking, luggage assistance, and 60 minutes of complimentary wait time after landing. No surge pricing, no hidden fees.',
  },
  {
    q: 'Which NYC airport is best for Manhattan?',
    a: 'LaGuardia (LGA) is closest to Midtown at just 8 miles. JFK is best for Brooklyn, Queens, and Long Island, as well as all international arrivals. Newark (EWR) is fastest for Lower Manhattan and New Jersey destinations. For Westchester and Connecticut, HPN avoids the city entirely.',
  },
  {
    q: 'How far in advance should I book an airport transfer?',
    a: 'We recommend at least 24 hours in advance to guarantee your preferred vehicle. Same-day bookings are accepted subject to availability — call or WhatsApp us directly for urgent requests.',
  },
];

export default function AirportHubPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Airport Transfers', url: `${siteUrl}/services/airport` },
        ]}
      />
      <ServiceJsonLd
        name="NYC Airport Car Service"
        description="Premium black car airport transfers to JFK, LaGuardia, Newark and Westchester. Flat rates, meet & greet, real-time flight tracking. TLC-licensed chauffeurs available 24/7."
        areaServed="New York City, NY"
        url={`${siteUrl}/services/airport`}
      />

      <div className="bg-brand-offwhite">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Airport Car Service</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              NYC Airport Transfers
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Flat-rate black car service to all four New York City airports — JFK, LaGuardia, Newark, and Westchester. Professional chauffeur, real-time flight tracking, and meet &amp; greet at arrivals. No surge pricing, ever.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: '4 Airports', sub: 'JFK · LGA · EWR · HPN' },
                { stat: '60-Min Wait', sub: 'Free after landing' },
                { stat: '24/7', sub: 'Always available' },
                { stat: 'TLC Licensed', sub: 'Every driver' },
              ].map((s) => (
                <div key={s.stat} className="border border-brand-charcoal p-4 text-center">
                  <div className="font-semibold text-brand-white text-sm">{s.stat}</div>
                  <div className="text-brand-silver text-xs mt-1">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Book Your Transfer
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Airport cards */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Choose Your Airport</h2>
            <p className="text-brand-grey mb-8">Select your airport for terminal guides, routes, and pricing.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {airports.map((a) => (
                <Link
                  key={a.code}
                  href={a.href}
                  className="group bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="font-serif text-3xl font-bold text-brand-black group-hover:text-brand-charcoal">{a.code}</div>
                    <span className="text-brand-grey text-lg group-hover:text-brand-black transition-colors">→</span>
                  </div>
                  <div className="font-semibold text-brand-black text-sm mb-2">{a.name}</div>
                  <p className="text-brand-grey text-sm leading-relaxed mb-3">{a.detail}</p>
                  <div className="text-xs text-brand-silver border-t border-brand-light pt-3">{a.time}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">What&apos;s Included in Every Airport Transfer</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits inside the terminal at the arrivals level with a name sign — not at a parking lot or curbside.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your flight from departure. Early arrivals, delays, and gate changes are handled automatically.' },
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed the moment you book and never changes — no surge pricing at any time of day.' },
                { title: 'All Tolls Included', body: 'Every bridge, tunnel, and airport fee is built into your flat rate. NJ Turnpike and Lincoln Tunnel included for EWR rides.' },
                { title: '60-Min Free Wait Time', body: '60 minutes of complimentary wait time after landing covers customs, baggage claim, and any terminal walking.' },
                { title: 'Luggage Assistance', body: 'Your chauffeur loads and unloads all bags — from baggage claim straight to the vehicle.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-brand-black font-bold mt-0.5">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Airport Car Service — FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your NYC Airport Transfer</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Flat rate confirmed at booking. Flight tracking included. Chauffeur waiting at arrivals — JFK, LGA, EWR, or HPN.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors">
                Call {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
