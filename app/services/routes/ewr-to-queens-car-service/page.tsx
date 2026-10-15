import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Newark Airport to Queens Car Service',
  description:
    'Newark Airport (EWR) to Queens car service — flat rate, all tolls included, TLC licensed. Astoria, Flushing, Jamaica, Forest Hills, Long Island.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/ewr-to-queens-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/ewr-to-queens-car-service` },
};

const faqs = [
  {
    q: 'How much does a car service from Newark Airport to Queens cost?',
    a: 'All rates are flat and confirmed at booking — including all tolls. No surge pricing, no add-ons at the end of the trip. Get an instant quote on our booking page by entering Newark Airport as your pickup and your Queens destination.',
  },
  {
    q: 'How far is Newark Airport from Queens, and how long does it take?',
    a: 'Newark Airport to Queens is roughly 15–20 miles depending on your neighborhood. EWR to Long Island City or Astoria typically takes 35–55 minutes. To Flushing or Bayside, allow 50–70 minutes. To Jamaica or Ozone Park, which are closer to EWR via the Staten Island route, times can be 40–55 minutes. Your driver selects the optimal route in real time.',
  },
  {
    q: 'Which route does the driver take from EWR to Queens?',
    a: 'Depending on traffic and destination, your driver will take either the Staten Island Expressway and Verrazzano Bridge, or the Lincoln Tunnel and Queens Midtown Tunnel. Both routes are accounted for in your flat rate — all tolls included.',
  },
  {
    q: 'Are Newark Airport tolls included in the rate?',
    a: 'Yes. All tolls — including the Lincoln Tunnel, Goethals Bridge, Verrazzano Bridge, and any other tolls on the route — are included in your flat rate confirmed at booking. No surprises at drop-off.',
  },
  {
    q: 'Is Newark Airport actually convenient for some Queens neighborhoods?',
    a: 'Yes. For neighborhoods like Ozone Park, Jamaica, Howard Beach, and Richmond Hill, EWR can actually be more direct than LGA — especially via the Staten Island Expressway, which avoids city traffic entirely. Your chauffeur takes the fastest route based on real-time conditions.',
  },
  {
    q: 'Does Eagle Eye track my flight at Newark Airport?',
    a: 'Yes. We track your EWR flight in real time. If your arrival is early or delayed, your driver adjusts accordingly. Your flat rate stays the same regardless of when you land.',
  },
];


export default function EWRToQueensPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Newark Airport to Queens Car Service', url: `${getSiteUrl()}/services/routes/ewr-to-queens-car-service` },
      ]} />
      <ServiceJsonLd
        name="Newark Airport (EWR) to Queens Car Service"
        description="Premium black car service from Newark Airport to Queens. Flat rate, all tolls included, real-time flight tracking, 60-minute free wait. Astoria, Flushing, Jamaica, Forest Hills, Long Island City, Bayside and all Queens neighborhoods. TLC licensed. 24/7."
        areaServed="Queens, New York City, NY"
        url={`${getSiteUrl()}/services/routes/ewr-to-queens-car-service`}
      />

      {/* Hero — dark */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
            Newark Airport (EWR) to Queens Car Service
          </h1>
          <p className="text-lg text-brand-silver mb-8 max-w-2xl">
            Eagle Eye Chauffeur provides flat-rate black car service from Newark Liberty Airport to
            every Queens neighborhood — with real-time flight tracking, a professional chauffeur at
            arrivals, and all tolls included in your confirmed price. No surge pricing, no add-ons.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['All EWR Terminals', '60-Min Free Wait', 'All Tolls Included', 'TLC Licensed'].map((stat) => (
              <div key={stat} className="border border-brand-charcoal px-4 py-3 text-center">
                <span className="text-brand-white text-sm font-medium">{stat}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book EWR to Queens
            </Link>
            <Link
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-white text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-center"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
            EWR to Queens — Destinations &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-6">
            Your driver takes the most efficient route in real time — either via the Staten Island Expressway and Verrazzano Bridge, or via the Lincoln Tunnel and Queens Midtown Tunnel. All tolls included.
          </p>
          <div className="space-y-3">
            {[
              { from: 'EWR → Long Island City', time: '40–55 min' },
              { from: 'EWR → Astoria', time: '40–55 min' },
              { from: 'EWR → Jackson Heights', time: '45–60 min' },
              { from: 'EWR → Forest Hills', time: '45–60 min' },
              { from: 'EWR → Ozone Park', time: '40–55 min' },
              { from: 'EWR → Richmond Hill', time: '40–55 min' },
              { from: 'EWR → Jamaica', time: '45–60 min' },
              { from: 'EWR → Flushing', time: '55–75 min' },
              { from: 'EWR → Bayside', time: '55–75 min' },
            ].map((r) => (
              <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat and confirmed at booking. All tolls included. No surge pricing — ever.{' '}
            <Link href="/book" className="underline">Get an instant quote →</Link>
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            What&apos;s Included in Every Booking
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              'Real-time EWR flight tracking',
              'Meet & greet at EWR arrivals',
              '60-minute free wait after landing',
              'Luggage assistance at arrivals',
              'Flat rate — same price regardless of traffic',
              'All tolls included (Lincoln Tunnel, Goethals, Verrazzano)',
              'Luxury sedan or SUV',
              'TLC licensed & insured',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-brand-black mt-0.5 shrink-0">&#10003;</span>
                <span className="text-brand-grey">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Route info */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            EWR to Queens — Route &amp; Why It Works
          </h2>
          <ul className="space-y-4">
            <li className="text-brand-grey">
              <strong className="text-brand-black">Two route options, one flat price</strong> — your driver chooses between the Staten Island Expressway / Verrazzano Bridge route, or the Lincoln Tunnel / Queens Midtown Tunnel route, based on real-time traffic. Either way, your price is the same.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">EWR is actually closer for South Queens</strong> — neighborhoods like Ozone Park, Jamaica, Howard Beach, and Richmond Hill are geographically closer to Newark via the Staten Island route than to LGA through city traffic. Many residents fly EWR by choice.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">All tolls built in</strong> — the Lincoln Tunnel, Goethals Bridge, Verrazzano Bridge, and any other tolls along the route are included. No add-ons at drop-off.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Driver confirmed before you land</strong> — your chauffeur is assigned the night before for early morning arrivals and confirmed for all rides. No searching for a car after customs.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why Eagle Eye for EWR to Queens
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — All Tolls Included', body: 'Your price includes all tolls and is confirmed at booking. What you see is what you pay — nothing added at the end.' },
              { title: '60 Minutes Free Wait After Landing', body: 'Your driver waits up to 60 minutes after touchdown — no rushing through baggage claim.' },
              { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign in the arrivals hall — no walking with luggage.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
              { title: 'Driver Confirmed the Night Before', body: 'You receive your chauffeur\'s name, vehicle, and contact details the evening before your flight lands.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-light p-4">
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                </div>
                <p className="text-brand-grey text-sm pl-6">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            EWR to Queens — FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                <p className="text-sm text-brand-grey">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/airport/ewr" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">EWR Airport Service</div>
              <div className="text-sm text-brand-grey mt-1">Full Newark Airport guide &amp; info</div>
            </Link>
            <Link href="/services/areas/queens" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Queens Car Service</div>
              <div className="text-sm text-brand-grey mt-1">All Queens rides &amp; hourly service</div>
            </Link>
            <Link href="/services/routes/ewr-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">EWR to Manhattan</div>
              <div className="text-sm text-brand-grey mt-1">Newark Airport to Manhattan black car</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
            Book Your EWR to Queens Car Service
          </h2>
          <p className="text-brand-silver mb-8">
            Flat rate. All tolls included. Meet &amp; greet at arrivals. 60-minute free wait.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Reserve Now
            </Link>
            <Link
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-white text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              WhatsApp Us
            </Link>
          </div>
          <p className="text-brand-silver mt-6 text-sm">
            Or call{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
