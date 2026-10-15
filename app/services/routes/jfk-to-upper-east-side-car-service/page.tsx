import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'JFK to Upper East Side Car Service | Eagle Eye NYC',
  description:
    'JFK Airport to Upper East Side black car service — flat rate, meet &amp; greet at arrivals, flight tracking. Park Ave, 5th Ave, Lenox Hill.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-upper-east-side-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/jfk-to-upper-east-side-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from JFK to the Upper East Side?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering JFK as your pickup and your Upper East Side address as the destination.',
  },
  {
    q: 'How far is JFK from the Upper East Side, and how long does it take?',
    a: 'JFK to the Upper East Side is approximately 16 miles via the Midtown Tunnel or the RFK Bridge. In normal traffic it takes 35–55 minutes. During Midtown afternoon traffic (3–7pm), allow 55–70 minutes. Your driver takes the most efficient route in real time.',
  },
  {
    q: 'Do you go to Park Avenue and 5th Avenue addresses on the UES?',
    a: 'Yes. We serve all Upper East Side streets — Park Avenue, 5th Avenue, Madison Avenue, and every cross street from 57th to 106th. Your chauffeur drops you at your exact building entrance.',
  },
  {
    q: 'Is JFK to Upper East Side available early morning?',
    a: 'Yes, Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Red-eye arrivals and pre-dawn pickups are fully covered. Your driver is confirmed the night before regardless of the hour.',
  },
  {
    q: 'Can I request a First Class vehicle for UES arrivals?',
    a: 'Yes. We offer both Business Class (luxury sedan) and First Class (premium SUV) options. Select your vehicle class when booking — pricing is confirmed at checkout with no surprises.',
  },
];


export default function JFKToUpperEastSideCarServicePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Upper East Side', url: `${getSiteUrl()}/services/routes/jfk-to-upper-east-side-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK Airport to Upper East Side Black Car Service"
        description="Premium black car service from JFK Airport to the Upper East Side. Flat rate, meet &amp; greet at arrivals, real-time flight tracking, 60-minute free wait. TLC licensed. 24/7."
        areaServed="Upper East Side, Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-upper-east-side-car-service`}
      />

      {/* Hero — dark */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
            JFK Airport to Upper East Side Black Car Service
          </h1>
          <p className="text-lg text-brand-silver mb-8 max-w-2xl">
            From Park Avenue to 5th Avenue, Lenox Hill to Carnegie Hill — Eagle Eye Chauffeur
            delivers you from JFK to your Upper East Side address in a luxury sedan or SUV.
            Flat rate, meet &amp; greet at arrivals, and 60 minutes of free wait time included.
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
              Book JFK to Upper East Side
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
            JFK to Upper East Side — Route &amp; Time Estimates
          </h2>
          <div className="space-y-3">
            {[
              { from: 'JFK → Park Ave / 60s–70s', time: '35–50 min' },
              { from: 'JFK → 5th Ave / Museum Mile', time: '35–50 min' },
              { from: 'JFK → Lenox Hill / 70s–80s', time: '38–55 min' },
              { from: 'JFK → Carnegie Hill / 86th–96th St', time: '38–55 min' },
              { from: 'JFK → Yorkville / 85th–95th (East)', time: '40–55 min' },
              { from: 'JFK → 72nd St / Central Park area', time: '35–50 min' },
              { from: 'JFK → 57th St corridor', time: '38–52 min' },
              { from: 'JFK → 96th–106th St (UES boundary)', time: '40–55 min' },
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
            Why Choose Eagle Eye for JFK to Upper East Side
          </h2>
          <ul className="space-y-4">
            <li className="text-brand-grey">
              <strong className="text-brand-black">Discreet, professional service</strong> — the Upper East Side demands a certain standard; our chauffeurs are trained in discretion.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">All JFK terminals</strong> — T1 through T8, your driver is at the right terminal based on your flight.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">60-minute free wait</strong> — customs and baggage claim take time; included at no charge.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">No surge pricing</strong> — JFK to UES is a consistently priced route, always flat.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Residential building drop-off</strong> — driver parks at your building entrance, not a corner.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why Eagle Eye for JFK to Upper East Side
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
            JFK to Upper East Side — FAQ
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
            <Link href="/services/routes/upper-east-side-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Upper East Side to JFK</div>
              <div className="text-sm text-brand-grey mt-1">Outbound departures from UES to JFK</div>
            </Link>
            <Link href="/services/areas/manhattan" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Manhattan Car Service</div>
              <div className="text-sm text-brand-grey mt-1">All Manhattan neighborhoods</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
            Book Your JFK to Upper East Side Black Car
          </h2>
          <p className="text-brand-silver mb-8">
            Flat rate. Meet &amp; greet at arrivals. 60-minute free wait. Residential building drop-off.
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
