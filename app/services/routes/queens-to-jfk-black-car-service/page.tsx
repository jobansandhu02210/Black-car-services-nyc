import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Queens to JFK Car Service | Airport Transfer',
  description:
    'Queens to JFK Airport black car service — flat rates, real-time flight tracking, door-to-door from Astoria, Flushing, Jamaica, Forest Hills & all.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/queens-to-jfk-black-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    title: 'Queens to JFK Car Service | Eagle Eye',
    description: 'Flat-rate black car service from any Queens neighborhood to JFK Airport. No surge pricing — ever. TLC licensed, 24/7.',
    url: `${getSiteUrl()}/services/routes/queens-to-jfk-black-car-service`,
  },
};

const faqs = [
  {
    q: 'How much is a Queens to JFK car service?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Your fare is locked in when you reserve, whether you are heading out at 5am or during the evening rush. Get an instant quote on our booking page by entering your Queens address and JFK as your destination. The price you see is the price you pay.',
  },
  {
    q: 'How long does it take from Queens to JFK?',
    a: 'Travel time depends on your neighborhood. Jamaica is the closest at just 15–25 minutes. Flushing and Forest Hills typically take 20–30 minutes. Astoria and Ridgewood run 25–40 minutes in normal traffic. Howard Beach is among the shortest at 10–20 minutes due to its proximity to the airport. Allow extra time during morning rush hour and on Friday afternoons.',
  },
  {
    q: 'Do you serve all Queens neighborhoods for JFK transfers?',
    a: 'Yes. Eagle Eye Chauffeur serves every Queens neighborhood — Astoria, Long Island City, Flushing, Jamaica, Forest Hills, Rego Park, Jackson Heights, Howard Beach, Bayside, Fresh Meadows, Ridgewood, Ozone Park, Richmond Hill, Springfield Gardens, and more. There are no geographic restrictions or neighborhood surcharges within Queens.',
  },
  {
    q: 'How early should I book a Queens to JFK black car?',
    a: 'We recommend booking at least 24 hours in advance to guarantee your preferred vehicle and pickup time. That said, we can often accommodate same-day bookings — contact us via WhatsApp or phone and we will do our best. Your driver is confirmed the evening before every booking, giving you peace of mind.',
  },
  {
    q: "What's included in the JFK airport pickup if I'm arriving in Queens?",
    a: 'For arrivals, your chauffeur meets you inside the arrivals hall of your terminal with a name sign, just past baggage claim. We track your flight in real time, so if your flight is delayed we adjust automatically — no rebooking, no calls needed. You receive 60 minutes of complimentary wait time after landing, and your driver assists with all luggage.',
  },
  {
    q: 'How far is Queens from JFK?',
    a: 'JFK is in southeastern Queens, so most of the borough is very close. Howard Beach is only about 3 miles, Jamaica about 5 miles, and Forest Hills and Flushing roughly 9–10 miles. Even the farthest northern neighborhoods — Astoria, Long Island City, Bayside — are only about 12–13 miles, making Queens the closest borough to JFK alongside Brooklyn.',
  },
  {
    q: 'How much does a car service from Queens to JFK cost?',
    a: 'It is a flat rate confirmed at booking, based on your Queens neighborhood and vehicle class, with all tolls included and no surge. Because JFK sits within Queens, these are some of the shortest — and most affordable — airport transfers in the city. Enter your address on the booking page for an exact quote.',
  },
];


export default function QueensToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'Queens to JFK Black Car', url: `${getSiteUrl()}/services/routes/queens-to-jfk-black-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="Queens to JFK Black Car Service"
        description="Premium black car service from Queens to JFK Airport. Flat rates, real-time flight tracking, door-to-door from Astoria, Flushing, Jamaica, Forest Hills and all Queens neighborhoods. TLC licensed, 24/7."
        areaServed="Queens, New York, NY"
        url={`${getSiteUrl()}/services/routes/queens-to-jfk-black-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Route
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Queens to JFK Airport Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            JFK Airport is in southeastern Queens — making it the most convenient major airport for
            Queens residents. Eagle Eye Chauffeur provides door-to-door flat-rate black car service
            from every Queens neighborhood, with a professional TLC-licensed chauffeur at your door
            and a price that never surges at 5am.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flight Tracking</div>
              <div className="text-brand-silver text-sm mt-1">Automatic delay adjustment</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flat Rate</div>
              <div className="text-brand-silver text-sm mt-1">Locked in at booking</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Every day, every hour</div>
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
              Book Queens to JFK
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

      {/* ── Route Details ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Queens to JFK — Neighborhoods, Distances &amp; Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            JFK is in southeastern Queens, so most of the borough is remarkably close — Howard Beach and Jamaica are
            practically next door. Distances and times below are typical off-peak estimates; allow additional time during
            morning rush hour and Friday afternoons.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Howard Beach → JFK', miles: '~3 miles', time: '10–20 min' },
              { from: 'Jamaica → JFK', miles: '~5 miles', time: '15–25 min' },
              { from: 'Richmond Hill / Ozone Park → JFK', miles: '~6 miles', time: '15–25 min' },
              { from: 'Forest Hills / Rego Park → JFK', miles: '~9 miles', time: '20–30 min' },
              { from: 'Flushing → JFK', miles: '~10 miles', time: '20–30 min' },
              { from: 'Ridgewood → JFK', miles: '~11 miles', time: '25–40 min' },
              { from: 'Long Island City → JFK', miles: '~12 miles', time: '20–35 min' },
              { from: 'Astoria → JFK', miles: '~13 miles', time: '25–40 min' },
              { from: 'Bayside → JFK', miles: '~13 miles', time: '25–35 min' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
              >
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat and confirmed at booking. No surge pricing — ever.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included in Every Queens to JFK Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            A professional airport transfer is more than a ride — here is everything that comes
            standard with every Eagle Eye booking.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Real-time flight tracking',
                desc: 'We monitor your flight from the moment you book. If your departure is delayed or your arrival shifts, your chauffeur adjusts automatically — no calls, no rebooking required.',
              },
              {
                title: 'Meet &amp; greet at arrivals',
                desc: 'For JFK pickups, your chauffeur waits in the arrivals hall with a name sign, just past baggage claim at your terminal — T1, T2, T4, T5, T7, or T8.',
              },
              {
                title: 'Luggage assistance',
                desc: 'Your chauffeur handles bags at both ends of the journey — from your Queens front door to the terminal curb, or from baggage claim to the vehicle.',
              },
              {
                title: 'Flat rate — no surge pricing',
                desc: 'Your fare is confirmed at booking and never changes, regardless of traffic, time of day, or demand. No surprises on your receipt.',
              },
              {
                title: 'Luxury sedan or SUV',
                desc: 'Travel in a business-class sedan or full-size SUV — clean, well-maintained, and appropriate for both solo travelers and families with luggage.',
              },
              {
                title: '24/7 availability',
                desc: 'Early morning departures, late-night arrivals, early AM flights — Eagle Eye operates around the clock. Your 4am pickup is just as confirmed as a noon departure.',
              },
              {
                title: 'TLC licensed &amp; fully insured',
                desc: 'Every Eagle Eye chauffeur holds a New York TLC license and is fully insured — the professional standard required for luxury transportation in NYC.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 bg-brand-offwhite border border-brand-light">
                <span className="text-brand-black font-semibold mt-0.5">✓</span>
                <div>
                  <div
                    className="font-semibold text-brand-black mb-1"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <div className="text-sm text-brand-grey">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Queens Residents Choose Eagle Eye for JFK
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Queens is closer to JFK than any other borough — here is why locals trust Eagle Eye
            for every JFK run.
          </p>
          <div className="bg-brand-white border border-brand-light p-8">
            <ul className="space-y-5 text-brand-grey">
              <li>
                <strong className="text-brand-black">No surge pricing — even at 5am.</strong>{' '}
                Our flat rate is locked the moment you book — 5am costs the same as 2pm, every day.
                No demand-based multipliers, no surprise at checkout.
              </li>
              <li>
                <strong className="text-brand-black">Driver confirmed the evening before.</strong>{' '}
                You receive your chauffeur&apos;s name, number, and vehicle details the night before
                your pickup — not five minutes beforehand. For an early morning airport run, that
                certainty is invaluable.
              </li>
              <li>
                <strong className="text-brand-black">JFK expertise — every terminal covered.</strong>{' '}
                JFK has six active passenger terminals: T1, T2, T4, T5, T7, and T8. Our chauffeurs
                know exactly which entrance to use, where to pull up, and where to meet arriving
                passengers at each terminal without circling the airport.
              </li>
              <li>
                <strong className="text-brand-black">Door-to-door from any Queens address.</strong>{' '}
                Whether you are in Howard Beach or Bayside, Astoria or Jamaica — your chauffeur
                comes to your front door. No walking to a corner or dealing with a pin that drops
                on the wrong block.
              </li>
              <li>
                <strong className="text-brand-black">60 minutes of complimentary wait time after landing.</strong>{' '}
                Baggage claim takes time. Customs can take longer. Your chauffeur waits up to 60
                minutes after your wheels-down time at no extra charge — giving you the freedom
                to collect your bags without anxiety.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Eagle Eye Benefits ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Eagle Eye for Queens to JFK
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The difference between a professional black car and other options is most visible on
            an early morning airport run. Here is what Eagle Eye delivers every time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed the moment you book — 5am costs the same as 2pm, every day, with no surprises.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
              { title: 'Door-to-Door from Any Queens Address', body: 'Your driver comes to your front door — from Howard Beach to Bayside, Astoria to Jamaica.' },
              { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before — full certainty for an early morning flight.' },
              { title: '60 Minutes Complimentary Wait', body: 'Baggage claim takes time. Your chauffeur waits up to 60 minutes after landing at no extra charge.' },
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
          <p className="text-sm text-brand-grey mt-4">
            Ready to book with confidence?{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get a flat-rate quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Queens to JFK Black Car — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions about booking a Queens to JFK airport black car service.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Related Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Explore our full range of Queens and JFK airport transportation.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/airport/jfk"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">
                All JFK routes, terminals, and service details from any NYC origin.
              </div>
            </Link>
            <Link
              href="/services/areas/queens"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Queens Chauffeur Service</div>
              <div className="text-sm text-brand-grey">
                All Queens rides, hourly chauffeur, and neighborhood coverage.
              </div>
            </Link>
            <Link
              href="/services/routes/jfk-to-queens-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">JFK to Queens</div>
              <div className="text-sm text-brand-grey">
                Arriving at JFK? Meet &amp; greet service to any Queens neighborhood.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Queens to JFK Black Car Service
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. No surge pricing. Professional TLC-licensed chauffeur at your Queens
            door — door-to-terminal, 24 hours a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-10 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Reserve Now
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
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="underline hover:text-brand-white transition-colors"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
            {' '}·{' '}
            <a
              href={`mailto:${CONTACT_EMAIL_BOOKINGS}`}
              className="underline hover:text-brand-white transition-colors"
            >
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
