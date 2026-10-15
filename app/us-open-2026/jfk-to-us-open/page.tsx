import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';
import UsOpenRelatedRoutes from '@/components/UsOpenRelatedRoutes';

export const metadata: Metadata = {
  title: 'JFK to US Open | Airport Car Service to Flushing Meadows',
  description:
    'JFK to US Open car service — direct transfer to the Billie Jean King National Tennis Center, ~20–30 min. Meet & greet at all terminals, flat-rate. No surge.',
  keywords: [
    'JFK to US Open',
    'JFK airport US Open car service',
    'JFK to Billie Jean King National Tennis Center',
    'JFK to Flushing Meadows car service',
    'international arrivals JFK US Open',
    'JFK airport to US Open chauffeur',
  ],
  alternates: { canonical: `${getSiteUrl()}/us-open-2026/jfk-to-us-open` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/us-open-2026/jfk-to-us-open` },
};

const faqs = [
  { q: 'How long is the drive from JFK to the US Open?', a: 'The drive from JFK Airport to the USTA Billie Jean King National Tennis Center is approximately 20–30 minutes via the Van Wyck Expressway — both are in Queens, making this one of the shortest airport transfers to any major NYC venue. On session days, allow extra time for arrival traffic near Flushing Meadows.' },
  { q: 'Is JFK a good airport for the US Open?', a: 'Yes. JFK is the primary international gateway for tennis fans flying in from overseas, and it is close enough to Flushing Meadows for a direct transfer straight to a session. We meet you at baggage claim and take you wherever you need to go — hotel or tennis center.' },
  { q: 'Do you offer meet and greet at JFK?', a: 'Yes. Your chauffeur meets you inside the terminal at baggage claim with a name sign, assists with luggage, and escorts you to the vehicle. We serve all JFK terminals — T1, T4, T5, T7, and T8.' },
  { q: 'Can I go directly from JFK to the US Open for a session?', a: 'Yes. We handle direct JFK-to-tennis-center transfers. If your flight lands with enough time before your session, your driver will take you straight to Flushing Meadows. We monitor your flight and adjust pickup timing so you make it.' },
  { q: 'What about JFK to hotel, then hotel to the US Open on session day?', a: 'Yes — multi-leg bookings are available. Many visitors book JFK to a Manhattan hotel on arrival, then a separate hotel-to-tennis-center transfer on session day. We can handle both with the same service.' },
];

export default function JFKToUSOpenPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="JFK Airport to US Open Car Service" description="Direct flat-rate transfer from JFK International Airport to the USTA Billie Jean King National Tennis Center for the US Open. Meet & greet at all JFK terminals, flight tracking, no surge pricing." areaServed="New York City, NY" url={`${siteUrl}/us-open-2026/jfk-to-us-open`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'US Open Transportation', url: `${siteUrl}/us-open-2026` }, { name: 'JFK to US Open', url: `${siteUrl}/us-open-2026/jfk-to-us-open` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">US Open 2026 · International Arrivals</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            JFK Airport to the US Open — Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flying into JFK for the US Open? We meet you at baggage claim and take you directly to the Billie Jean King National Tennis Center or your Manhattan hotel — flat-rate, no surge, all terminals covered.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~20–30 min to Flushing Meadows</span>
            <span>✈️ All JFK terminals</span>
            <span>🛬 Meet &amp; greet at arrivals</span>
            <span>🔄 Flight tracked live</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">Arriving at JFK for the US Open</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Met at Baggage Claim', body: 'Your chauffeur is inside the terminal at arrivals with a name sign. After clearing customs and collecting baggage, you are met and escorted to your vehicle — no stress after a long flight.' },
              { title: 'Direct to the Tennis Center or Hotel', body: 'Heading straight to a session? Direct to Flushing Meadows. Checking in first? Hotel pickup on session day. We handle both and coordinate your itinerary.' },
              { title: 'Delayed International Flights', body: 'JFK international arrivals can be delayed by customs processing. We track everything and your driver waits — no extra charge for tracked delays.' },
              { title: 'Group Travel Welcome', body: 'Travelling with a group? Our SUVs accommodate 5–7 passengers with luggage, and Sprinter vans handle larger parties arriving together.' },
            ].map((i) => (
              <div key={i.title} className="border border-brand-light bg-brand-offwhite p-6">
                <h3 className="font-semibold text-brand-black mb-2">{i.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-brand-light pb-6">
                <h3 className="font-semibold text-brand-black mb-2">{f.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UsOpenRelatedRoutes current="jfk-to-us-open" />

      <section className="bg-brand-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book JFK → US Open Now</h2>
          <p className="text-brand-silver text-sm mb-6">Meet &amp; greet · All terminals · Flat-rate · No surge</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-3 text-sm hover:bg-brand-offwhite transition-colors">Request a Quote</Link>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-brand-silver text-white font-semibold px-8 py-3 text-sm hover:border-brand-white transition-colors">Call {CONTACT_PHONE_DISPLAY}</a>
          </div>
          <Link href="/us-open-2026" className="text-brand-silver text-xs underline hover:text-brand-white">← All US Open routes</Link>
        </div>
      </section>
    </>
  );
}
