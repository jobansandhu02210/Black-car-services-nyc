import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'LaGuardia to Queens Car Service | LGA Arrivals',
  description:
    'LaGuardia Airport to Queens black car service — flat rate, flight tracking, meet & greet at Terminal B & C. Astoria, Flushing, Jamaica, Forest.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/lga-to-queens-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/lga-to-queens-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from LGA to Queens?',
    a: 'All rates are flat and confirmed at booking. LGA to Queens transfers are often among the most affordable routes Eagle Eye Chauffeur serves, since LaGuardia is located within Queens itself. Nearby neighborhoods like Astoria and Jackson Heights are short rides. Your rate is locked at booking — no surge pricing when multiple flights land at the same time. Get an instant quote on our booking page.',
  },
  {
    q: 'How close is LaGuardia to Queens neighborhoods?',
    a: 'LaGuardia Airport is located in East Elmhurst, Queens — so it is already within the borough. Astoria is approximately 10–20 minutes away. Jackson Heights and Long Island City are similar distances. Flushing is 15–25 minutes. Forest Hills and Bayside are 20–30 minutes. Jamaica, which connects to the AirTrain and LIRR, is about 25–35 minutes from LGA.',
  },
  {
    q: 'Is it worth booking a black car for a short LGA to Queens trip?',
    a: 'Yes — especially for airport arrivals. After a flight, the value of a black car service is not just the distance. It is the luggage assistance, the flat rate, the meet & greet with a TLC-licensed driver waiting with your name on a sign so you walk straight out to your vehicle. Even for Astoria or Jackson Heights, the difference in experience is significant.',
  },
  {
    q: 'Which LGA terminal — B or C?',
    a: 'LaGuardia has two active terminals. Terminal B is the main terminal serving American Airlines, United Airlines, Southwest, and most other carriers. Terminal C is the Delta terminal. Eagle Eye Chauffeur meets and greets at both terminals — just include your terminal information when booking and your driver will be at the correct arrivals hall.',
  },
  {
    q: 'Is early morning LGA to Queens service available?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Early morning arrivals, late-night flights, and red-eye connections are all covered. Your driver is confirmed the night before — name, vehicle, and contact details — so there is no uncertainty regardless of what time your flight lands.',
  },
];


export default function LGAToQueensPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'LGA to Queens Black Car', url: `${getSiteUrl()}/services/routes/lga-to-queens-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="LaGuardia Airport to Queens Black Car Service"
        description="Flat-rate black car service from LaGuardia Airport (LGA) to all Queens neighborhoods — Astoria, Flushing, Jamaica, Forest Hills, Bayside, and more. Flight tracking, meet & greet, TLC licensed, 24/7."
        areaServed="Queens, New York, NY"
        url={`${getSiteUrl()}/services/routes/lga-to-queens-black-car-service`}
      />

      {/* ── DARK HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            LaGuardia Airport to Queens Black Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from LGA to every Queens neighborhood — Astoria, Flushing,
            Jamaica, Forest Hills, Bayside, and beyond. Real-time flight tracking, meet &amp; greet
            at Terminal B or C, no surge pricing. TLC licensed, 24/7.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['Flight Tracking', 'Flat Rate', '24/7', 'TLC Licensed'].map((s) => (
              <div key={s} className="border border-brand-charcoal p-3 text-center text-sm font-medium">{s}</div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium"
            >
              WhatsApp Booking
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-5">
            Or call us:{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      {/* ── ROUTES TABLE ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            LGA to Queens — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            LaGuardia Airport is located in East Elmhurst, Queens — putting many Queens neighborhoods
            just minutes away. Travel times are estimates and vary with traffic. Your chauffeur takes
            the fastest live-traffic route.
          </p>
          <div className="space-y-3">
            {[
              { from: 'LGA → Astoria', time: '10–20 min' },
              { from: 'LGA → Jackson Heights', time: '10–20 min' },
              { from: 'LGA → Long Island City', time: '15–25 min' },
              { from: 'LGA → Flushing', time: '15–25 min' },
              { from: 'LGA → Forest Hills', time: '20–30 min' },
              { from: 'LGA → Jamaica', time: '25–35 min' },
              { from: 'LGA → Bayside', time: '20–30 min' },
              { from: 'LGA → Howard Beach', time: '30–45 min' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <span className="font-semibold text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm font-medium whitespace-nowrap">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-5">
            All rates flat and confirmed at booking. No surge pricing.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            What&apos;s Included in Every Booking
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Every LGA to Queens booking with Eagle Eye Chauffeur includes the following as standard —
            not an add-on, not an upgrade. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Real-Time Flight Tracking',
                body: 'We monitor your LGA arrival live. If your flight is delayed, diverted, or lands early, your driver adjusts automatically — no calls needed, no rebooking, and no extra charge for waiting.',
              },
              {
                title: 'Meet & Greet at Terminal B or C',
                body: 'Your chauffeur meets you inside at the arrivals hall — Terminal B for most carriers, Terminal C for Delta — holding a sign with your name. Walk straight from baggage claim to your waiting vehicle.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your chauffeur loads and unloads all bags at LGA and at your Queens destination. No lifting heavy luggage, no dragging cases across parking lots after a long flight.',
              },
              {
                title: 'Flat Rate (No Surge Pricing)',
                body: 'Multiple flights often land at LGA within the same window. Your Eagle Eye rate is flat and locked at booking — it does not change regardless of how busy arrivals are when you land.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Business-class sedan or premium SUV — always clean, professionally maintained, and fully private. Select your vehicle class at booking based on party size and luggage.',
              },
              {
                title: '24/7 Availability',
                body: 'LGA to Queens service is available around the clock. Early morning arrivals, late-night flights, and red-eyes are all covered with drivers confirmed the night before.',
              },
              {
                title: 'TLC Licensed & Insured',
                body: 'Every Eagle Eye driver holds a New York City TLC license and carries commercial insurance. You are riding with a credentialed professional, not an unverified gig driver.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-brand-black font-bold text-xl mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <div className="font-semibold text-brand-black">{item.title}</div>
                  <div className="text-brand-grey text-sm mt-1 leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Choose Eagle Eye for LGA to Queens
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            LaGuardia is one of the busiest airports in the Northeast, and Queens is the largest
            borough in New York City. Eagle Eye Chauffeur serves every Queens neighborhood from LGA
            with professional, flat-rate service.
          </p>
          <div className="space-y-7">
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">LGA is in Queens — but trips still need a professional</strong> — luggage handling and flat rates matter even for short rides. A meet &amp; greet inside arrivals means you walk straight to your vehicle from baggage claim.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Flight tracking</strong> — your driver knows when your flight lands, and delays are handled automatically. If your arrival is pushed back an hour, your driver adjusts their timing and is at the terminal when you actually land — not when you were originally scheduled to land.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">No surge pricing on busy arrival waves</strong> — Our rate is flat regardless of arrival wave size, time of day, or weather conditions affecting flight schedules.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Meet &amp; greet at Terminal B or C</strong> — Your chauffeur is inside the arrivals hall, holding a sign, ready to take your bags. Walk out of the secure area and straight to your vehicle.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Driver confirmed night before</strong> — not matched 5 minutes before pickup. You receive your driver&apos;s name, vehicle, and contact details the evening before your flight lands. No uncertainty at the airport, no scrambling to find your car after a long journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Eagle Eye Black Car for LGA to Queens
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Short distances do not mean the experience has to be unprofessional. A dedicated
            black car service delivers consistency and comfort from the moment you land.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — No Surge on Arrival Waves', body: 'Your price is locked at booking and stays fixed — even when multiple LGA flights land simultaneously.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and delivers a consistent professional standard on every trip.' },
              { title: 'Meet & Greet at Terminal B or C', body: 'Your chauffeur waits with a name sign in the arrivals hall — no searching, no walking with bags.' },
              { title: 'Luggage Assistance', body: 'Your driver loads and unloads all bags — no managing luggage on your own after a flight.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your LGA flight and adjust your driver automatically for any delay — at no extra charge.' },
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

      {/* ── FAQ ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            LGA to Queens Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about booking your LaGuardia to Queens black car transfer.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-6">
            More questions? Email{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-black transition-colors">
              {CONTACT_EMAIL_BOOKINGS}
            </a>{' '}
            or call{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-black transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>.
          </p>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Related Routes &amp; Services
          </h2>
          <p className="text-brand-grey mb-8">
            Explore other Eagle Eye Chauffeur services you may need.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/airport/lga"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">LaGuardia Airport Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                All LGA arrivals &amp; departures
              </div>
            </Link>
            <Link
              href="/services/areas/queens"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Queens Car Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                All Queens neighborhoods
              </div>
            </Link>
            <Link
              href="/services/routes/queens-to-lga-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Queens to LaGuardia</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Departures &amp; outbound service
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your LGA to Queens Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. Flight tracked. Meet &amp; greet inside arrivals.
            Astoria to Howard Beach — Eagle Eye covers all of Queens from LaGuardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-4 px-12 bg-brand-white text-brand-black font-semibold hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-4 px-12 border border-brand-white text-brand-white font-semibold hover:bg-brand-charcoal transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Call or text:{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
