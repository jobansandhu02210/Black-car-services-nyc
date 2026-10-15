import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Bronx to Manhattan Car Service',
  description:
    'Professional black car from any Bronx neighborhood to Manhattan. Riverdale, Fordham, Grand Concourse, Pelham Bay. Flat rates, no surge pricing, TLC.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/bronx-to-manhattan-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/bronx-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much does a car service from the Bronx to Manhattan cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering your Bronx address and Manhattan destination.',
  },
  {
    q: 'How long does it take from the Bronx to Manhattan by black car?',
    a: 'Riverdale to Midtown is typically 25–40 minutes; Fordham to Midtown 20–35 minutes; Grand Concourse to Midtown 20–30 minutes. Your driver monitors real-time traffic and takes the fastest route.',
  },
  {
    q: 'Do you serve all Bronx neighborhoods?',
    a: 'Yes. We pick up from every Bronx neighborhood — Riverdale, Fordham, Grand Concourse, Co-op City, Pelham Bay, City Island, Mott Haven, Tremont, Hunts Point, and more.',
  },
  {
    q: 'Can I book a one-way trip from the Bronx to Manhattan?',
    a: 'Absolutely. One-way point-to-point trips are our most common booking type. Book online for an instant confirmation and flat-rate quote.',
  },
  {
    q: 'Is Bronx to Manhattan car service available early morning or late night?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Early business meetings, late-night returns, and overnight rides are all fully covered.',
  },
  {
    q: 'Do you offer Bronx to Manhattan car service for medical appointments?',
    a: 'Yes. We regularly transport clients to hospital appointments and medical facilities in Manhattan including NY-Presbyterian, Mount Sinai, and NYU Langone. Book in advance for scheduled appointments.',
  },
  {
    q: 'How far is the Bronx from Manhattan?',
    a: 'The Bronx borders northern Manhattan, so the South Bronx is very close — Mott Haven is about 6 miles from Lower Manhattan and roughly 8 miles from Midtown. Central neighborhoods like Fordham and the Grand Concourse are about 8–10 miles from Midtown, while Riverdale, Co-op City, and City Island are about 13–16 miles. Drive times run from 15 minutes to under an hour depending on traffic.',
  },
  {
    q: 'How much does a car service from the Bronx to Manhattan cost?',
    a: 'It is a flat rate confirmed at booking, based on your Bronx neighborhood, destination, and vehicle class, with all tolls included and no surge. Hourly hire is available for appointments, events, or multi-stop days in the city. Enter your trip on the booking page for an exact quote.',
  },
];


export default function BronxToManhattanPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Bronx to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/bronx-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Bronx to Manhattan Black Car Service"
        description="Professional black car service from any Bronx neighborhood to Manhattan. Flat rates, no surge pricing, TLC licensed chauffeurs. Riverdale, Fordham, Grand Concourse, Pelham Bay and more."
        areaServed="Bronx, New York City, NY"
        url={`${getSiteUrl()}/services/routes/bronx-to-manhattan-black-car-service`}
      />

      {/* Hero — dark */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
            Bronx to Manhattan Car Service
          </h1>
          <p className="text-lg text-brand-silver mb-8 max-w-2xl">
            Eagle Eye Chauffeur provides flat-rate black car service from any Bronx neighborhood
            directly to your Manhattan destination — door to door, professional chauffeur, confirmed
            price before you book.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['All Bronx Neighborhoods', 'Flat Rate', '24/7', 'TLC Licensed'].map((stat) => (
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
              Book Bronx to Manhattan
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

      {/* Popular sub-routes */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
            Bronx to Manhattan: Distances &amp; Drive Times
          </h2>
          <p className="text-brand-grey mb-6 max-w-2xl">
            The Bronx borders Manhattan to the north, so the South Bronx is remarkably close — Mott Haven is only about 6
            miles from Lower Manhattan via the bridges over the Harlem River. Northern and eastern neighborhoods like
            Riverdale, Co-op City, and City Island run a little longer. Times below are off-peak estimates.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Mott Haven → Lower Manhattan', miles: '~6 miles', time: '15–25 min' },
              { from: 'Grand Concourse → Midtown Manhattan', miles: '~8 miles', time: '20–30 min' },
              { from: 'Hunts Point → Midtown Manhattan', miles: '~9 miles', time: '20–35 min' },
              { from: 'Fordham → Midtown Manhattan', miles: '~10 miles', time: '20–35 min' },
              { from: 'Riverdale → Midtown Manhattan', miles: '~13 miles', time: '25–40 min' },
              { from: 'Co-op City → Midtown Manhattan', miles: '~15 miles', time: '30–45 min' },
              { from: 'Pelham Bay → Midtown Manhattan', miles: '~15 miles', time: '30–50 min' },
              { from: 'City Island → Midtown Manhattan', miles: '~16 miles', time: '35–55 min' },
            ].map((r) => (
              <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat and confirmed at booking. No surge pricing — ever.{' '}
            <Link href="/book" className="underline">Get an instant quote →</Link>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Book Online', desc: 'Enter your Bronx pickup address and Manhattan destination. Get an instant flat-rate quote — no surprises.' },
              { step: '2', title: 'Driver Confirmed', desc: 'Your TLC-licensed chauffeur is assigned and confirmed in advance. You receive driver details before pickup.' },
              { step: '3', title: 'Door-to-Door', desc: 'Your driver arrives at your exact Bronx address and drops you at your Manhattan destination. Luggage assistance included.' },
            ].map((item) => (
              <div key={item.step} className="bg-brand-offwhite border border-brand-light p-6">
                <div className="text-3xl font-serif font-semibold text-brand-black mb-3">{item.step}</div>
                <div className="font-semibold text-brand-black mb-2">{item.title}</div>
                <p className="text-sm text-brand-grey">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to book */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            When to Book a Bronx to Manhattan Black Car
          </h2>
          <ul className="space-y-4">
            <li className="text-brand-grey">
              <strong className="text-brand-black">Early business meetings</strong> — catch your 7am Wall Street or Midtown meeting with a confirmed, on-time pickup from any Bronx neighborhood.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Late-night returns</strong> — safe, reliable ride home to the Bronx after evening events, dinners, or late work sessions in Manhattan.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Airport connections</strong> — we can chain a Bronx pickup into an airport drop-off at JFK, LGA, or EWR without changing vehicles.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Medical appointments</strong> — reliable transport to NY-Presbyterian, Mount Sinai, NYU Langone, and other Manhattan medical centers.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why Eagle Eye Black Car for Bronx to Manhattan
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Confirmed at Booking', body: 'Your price is locked when you book and never changes — no surprises in peak hours or bad weather.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and is trained to a professional standard on every trip.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
              { title: 'Exact Door Pickup', body: 'Your driver comes to your Bronx address — not a nearby corner or curbside zone.' },
              { title: 'Driver Confirmed in Advance', body: 'You receive your driver details before your pickup day — not minutes before arrival.' },
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
            Bronx to Manhattan — FAQ
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
            <Link href="/services/routes/bronx-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Bronx to JFK</div>
              <div className="text-sm text-brand-grey mt-1">Airport transfers from the Bronx</div>
            </Link>
            <Link href="/services/areas/bronx" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Bronx Car Service</div>
              <div className="text-sm text-brand-grey mt-1">All Bronx rides &amp; hourly service</div>
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
            Book Your Bronx to Manhattan Car Service
          </h2>
          <p className="text-brand-silver mb-8">
            Flat rate. Professional chauffeur. Instant confirmation.
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
