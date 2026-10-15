import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'JFK to Midtown Manhattan Car Service | Eagle Eye NYC',
  description:
    'JFK Airport to Midtown Manhattan black car service — flat rate, meet &amp; greet at arrivals, real-time flight tracking. Times Square, Park Ave.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-midtown-manhattan-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/jfk-to-midtown-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from JFK to Midtown Manhattan?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering JFK as your pickup and your Midtown address or hotel as the destination.',
  },
  {
    q: 'How far is JFK from Midtown Manhattan, and how long does it take?',
    a: 'JFK to Midtown Manhattan is approximately 15 miles via the Van Wyck Expressway and the Queens-Midtown Tunnel. In normal traffic it takes 35–55 minutes. For afternoon arrivals (3–7pm), allow 60–75 minutes due to Midtown congestion.',
  },
  {
    q: 'Do you serve Times Square hotels from JFK?',
    a: 'Yes. Times Square and the 42nd–48th Street corridor is one of our primary Midtown destinations. Your chauffeur drops you directly at your hotel entrance.',
  },
  {
    q: 'Where does the chauffeur meet me at JFK arrivals?',
    a: 'Your chauffeur waits in the arrivals hall with a name sign, right past baggage claim at your terminal. You receive a WhatsApp message with the exact meeting point before you land.',
  },
  {
    q: 'What if my JFK flight is delayed?',
    a: 'We track your flight in real time. If your flight is delayed, your driver adjusts automatically — no calls needed, no extra charge. You will never land to find no driver waiting.',
  },
];


export default function JFKToMidtownManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Midtown Manhattan', url: `${getSiteUrl()}/services/routes/jfk-to-midtown-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK to Midtown Manhattan Black Car Service"
        description="Premium black car service from JFK Airport to Midtown Manhattan. Flat rate, meet &amp; greet at arrivals, real-time flight tracking, 60-minute free wait. 24/7 TLC licensed."
        areaServed="Midtown Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-midtown-manhattan-black-car-service`}
      />

      {/* Hero — dark */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
            JFK to Midtown Manhattan Black Car Service
          </h1>
          <p className="text-lg text-brand-silver mb-8 max-w-2xl">
            Midtown Manhattan is JFK&apos;s most-requested destination — Times Square, Grand Central,
            Park Avenue, and every hotel in between. Flat-rate black car service with a professional
            chauffeur waiting at arrivals, real-time flight tracking, and 60 minutes of free wait time.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['All JFK Terminals', '60-Min Free Wait', '24/7', 'TLC Licensed'].map((stat) => (
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
              Book JFK to Midtown
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

      {/* Route table */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            JFK to Midtown — Route &amp; Time Estimates
          </h2>
          <div className="space-y-3">
            {[
              { from: 'JFK → Times Square (42nd–48th St)', time: '35–50 min' },
              { from: 'JFK → Grand Central / Park Ave', time: '35–50 min' },
              { from: 'JFK → 5th Ave / Rockefeller Center', time: '38–55 min' },
              { from: 'JFK → Midtown West / Hell’s Kitchen', time: '40–55 min' },
              { from: 'JFK → Penn Station / 34th St', time: '35–50 min' },
              { from: 'JFK → Hudson Yards / 30th St', time: '40–55 min' },
              { from: 'JFK → Carnegie Hill / 90th St', time: '40–55 min' },
              { from: 'JFK → Central Park South (59th St)', time: '38–55 min' },
            ].map((r) => (
              <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat and confirmed at booking. No surge pricing — ever.{' '}
            <Link href="/book" className="underline">Get an instant quote →</Link>
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            What&apos;s Included in Every Booking
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              'Real-time JFK flight tracking',
              'Meet &amp; greet at all JFK terminals',
              '60-minute free wait after landing',
              'Luggage assistance at arrivals',
              'Flat rate — same price regardless of traffic',
              'Luxury sedan or SUV',
              'TLC licensed &amp; insured',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-brand-black mt-0.5 shrink-0">&#10003;</span>
                <span className="text-brand-grey" dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why Choose Eagle Eye for JFK to Midtown
          </h2>
          <ul className="space-y-4">
            <li className="text-brand-grey">
              <strong className="text-brand-black">60-minute free wait</strong> — we know JFK customs and baggage claim takes time; your driver waits without charging.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">All JFK terminals covered</strong> — T1, T2, T4, T5, T7, T8 — your driver is at the right terminal based on your flight.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">No surge pricing</strong> — JFK arrivals to Midtown are our most booked route; our flat rate never changes.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Hotel entrance drop-off</strong> — chauffeur drives to your hotel&apos;s front door, not a corner.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Driver confirmed night before</strong> — not matched minutes before pickup.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why Eagle Eye for JFK to Midtown
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises at peak JFK arrival hours.' },
              { title: '60 Minutes Free Wait After Landing', body: 'No rushing once you land — your driver waits up to 60 minutes after touchdown at no extra charge.' },
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
            JFK to Midtown Manhattan — FAQ
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

      {/* Related */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">JFK Airport Service</div>
              <div className="text-sm text-brand-grey mt-1">Full JFK terminal guide &amp; info</div>
            </Link>
            <Link href="/services/routes/jfk-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">JFK to Manhattan</div>
              <div className="text-sm text-brand-grey mt-1">All Manhattan neighborhoods from JFK</div>
            </Link>
            <Link href="/services/areas/manhattan" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Manhattan Car Service</div>
              <div className="text-sm text-brand-grey mt-1">All Manhattan districts &amp; routes</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
            Book Your JFK to Midtown Manhattan Black Car
          </h2>
          <p className="text-brand-silver mb-8">
            Flat rate. Meet &amp; greet at arrivals. 60-minute free wait. No surge pricing.
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
