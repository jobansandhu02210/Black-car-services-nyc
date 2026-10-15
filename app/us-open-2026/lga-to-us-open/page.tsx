import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';
import UsOpenRelatedRoutes from '@/components/UsOpenRelatedRoutes';

export const metadata: Metadata = {
  title: 'LaGuardia (LGA) to US Open | Closest Airport Car Service',
  description:
    'LaGuardia Airport to US Open car service — closest airport to the Billie Jean King Tennis Center. ~15–20 minutes, meet & greet, flat-rate, no surge.',
  keywords: [
    'LGA to US Open',
    'LaGuardia to US Open tennis',
    'LaGuardia airport US Open car service',
    'closest airport to US Open',
    'LGA to Billie Jean King National Tennis Center',
    'LaGuardia to Flushing Meadows car service',
  ],
  alternates: { canonical: `${getSiteUrl()}/us-open-2026/lga-to-us-open` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/us-open-2026/lga-to-us-open` },
};

const faqs = [
  { q: 'How long is the drive from LaGuardia to the US Open?', a: 'LaGuardia (LGA) to the USTA Billie Jean King National Tennis Center is typically 15–20 minutes via the Grand Central Parkway — the shortest airport transfer of any NYC airport. On peak session days, allow 25–30 minutes for arrival traffic around Flushing Meadows.' },
  { q: 'Is LaGuardia the best airport for the US Open?', a: 'Yes. LGA is the closest major airport to the tennis center, making it the fastest option for domestic travelers. If you have a choice of flights, LGA saves you real time over JFK or Newark.' },
  { q: 'Do you offer meet and greet at LaGuardia?', a: 'Yes. Your chauffeur meets you inside the terminal at baggage claim with a name sign, assists with luggage, and escorts you to the vehicle. We serve all LGA terminals — A, B, and C.' },
  { q: 'Can I go directly from LGA to the US Open for a session?', a: 'Yes. Given the short drive, LGA arrivals are ideal for heading straight to a day or night session. We monitor your flight and time pickup so you make it to your seat with room to spare.' },
  { q: 'What about LGA to hotel, then hotel to the US Open on session day?', a: 'Yes — multi-leg bookings are available. Many visitors book LGA to a Manhattan hotel on arrival, then a separate hotel-to-tennis-center transfer on session day. We can handle both with the same service.' },
];

export default function LGAToUSOpenPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="LaGuardia Airport to US Open Car Service" description="Direct flat-rate transfer from LaGuardia Airport to the USTA Billie Jean King National Tennis Center for the US Open — the closest airport option. Meet & greet at all LGA terminals, flight tracking, no surge pricing." areaServed="New York City, NY" url={`${siteUrl}/us-open-2026/lga-to-us-open`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'US Open Transportation', url: `${siteUrl}/us-open-2026` }, { name: 'LGA to US Open', url: `${siteUrl}/us-open-2026/lga-to-us-open` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">US Open 2026 · Closest Airport</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            LaGuardia to the US Open — Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flying into LGA for the US Open? You have the shortest ride of any NYC airport — we meet you at baggage claim and take you directly to the Billie Jean King National Tennis Center or your Manhattan hotel. Flat-rate, no surge, all terminals covered.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~15–20 min to Flushing Meadows</span>
            <span>✈️ All LGA terminals</span>
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
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">Arriving at LGA for the US Open</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Met at Baggage Claim', body: 'Your chauffeur is inside the terminal at arrivals with a name sign. After collecting baggage, you are met and escorted to your vehicle — no stress after your flight.' },
              { title: 'Direct to the Tennis Center or Hotel', body: 'Heading straight to a session? Direct to Flushing Meadows. Checking in first? Hotel pickup on session day. We handle both and coordinate your itinerary.' },
              { title: 'Flight Delays Tracked', body: 'We track your flight live and adjust pickup timing automatically for early or delayed arrivals — no extra charge, no waiting around.' },
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

      <UsOpenRelatedRoutes current="lga-to-us-open" />

      <section className="bg-brand-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book LGA → US Open Now</h2>
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
