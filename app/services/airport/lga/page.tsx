import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'LGA Car Service NYC | Black Car Airport Transfers',
  description:
    'LGA car service — flat-rate LaGuardia airport pickup, meet & greet at Terminal B & C. Real-time flight tracking. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/lga` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/airport/lga` },
};

const faqs = [
  {
    q: 'How much is a black car from LGA to Manhattan?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Your price is locked the moment you book, regardless of traffic or time of day. Get an instant quote at /book by entering your pickup and drop-off.',
  },
  {
    q: 'Where do I meet my chauffeur at LaGuardia?',
    a: 'Your chauffeur meets you at the arrivals level with a name sign — at Terminal B or Terminal C depending on your airline. You will receive a WhatsApp message with the exact meeting point before you land so there is zero confusion.',
  },
  {
    q: 'Do you track my flight for LGA arrivals?',
    a: 'Yes. We monitor your LGA flight in real-time and adjust your driver\'s timing automatically. If your flight lands early or is delayed, your chauffeur adjusts — no extra charge, no phone calls needed from you.',
  },
  {
    q: 'Which LGA terminal does my airline use?',
    a: 'Terminal B (opened 2022): American Airlines, United Airlines, and Southwest Airlines. Terminal C (opened 2023): Delta Air Lines domestic flights. If you are unsure, check your boarding pass — the terminal is printed on it, and we will confirm when you book.',
  },
  {
    q: 'Is LGA car service available early morning or late night?',
    a: 'Yes — Eagle Eye operates 24 hours a day, 7 days a week, including holidays. Early morning departures, red-eye arrivals, and last-minute bookings are all covered.',
  },
  {
    q: 'How long does LGA to Manhattan take?',
    a: 'LaGuardia is only 9 miles from Midtown — off-peak, expect 20 to 30 minutes. During rush hour (7–10 am and 4–7 pm), allow 30 to 45 minutes. Your chauffeur knows LGA routes well and will choose the fastest path.',
  },
  {
    q: 'How does LGA airport pickup work with Eagle Eye?',
    a: 'We monitor your flight live and time your LGA airport pickup to your actual landing — not your scheduled arrival. Your chauffeur is waiting at the arrivals level of your terminal with a name sign. You receive a WhatsApp message with the exact meeting spot before you land. Walk out, spot your name, and your luggage is loaded. That is it.',
  },
  {
    q: 'What is the best airport transfer service at LaGuardia?',
    a: 'The best airport transfer service at LGA is one that offers a flat rate confirmed at booking, real-time flight tracking, and a professional chauffeur waiting inside the terminal. Eagle Eye provides all three — no surge pricing, no meter surprises, and no waiting at the curb for a driver to show up.',
  },
];


export default function LGAPage() {
  return (
    <>
      <ServiceJsonLd
        name="LaGuardia Airport Black Car Service"
        description="Premium LaGuardia Airport car service. Flat rates, real-time flight tracking, meet & greet at Terminal B and Terminal C. All TLC licensed. 24/7 availability."
        areaServed="New York City, NY"
        url={`${getSiteUrl()}/services/airport/lga`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
          { name: 'LaGuardia Airport', url: `${getSiteUrl()}/services/airport/lga` },
        ]}
      />

      {/* HERO */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs font-medium tracking-widest uppercase mb-4">
            Airport Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-6 leading-tight">
            LGA Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            NYC&apos;s most-used airport for domestic flights — flat-rate black car service,
            real-time flight tracking, and meet &amp; greet at newly rebuilt Terminal B and
            Terminal C.
          </p>

          {/* Stat bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            {[
              { label: 'Terminals Served', value: 'Terminal B & C' },
              { label: 'Wait Time', value: 'Free Wait Time' },
              { label: 'Availability', value: '24/7' },
              { label: 'Licensing', value: 'TLC Licensed' },
            ].map((stat) => (
              <div key={stat.label} className="bg-brand-black px-6 py-5">
                <div className="text-brand-white font-semibold text-sm mb-1">{stat.value}</div>
                <div className="text-brand-silver text-xs tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-silver transition-colors text-center"
            >
              Book Your LGA Transfer
            </Link>
            <Link
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-center"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            How LGA Car Service Works
          </h2>
          <p className="text-brand-grey mb-12 max-w-xl">
            From booking to arrival, every step is handled for you. Here is what to expect.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Book Online in Minutes',
                body: 'Enter your flight details and destination at /book. Your flat rate is confirmed instantly — no account needed, no back-and-forth.',
              },
              {
                step: '02',
                title: 'Driver Monitors Your Flight',
                body: 'We track your LGA flight live from departure. If it lands early or is delayed, your chauffeur adjusts automatically with no action required from you.',
              },
              {
                step: '03',
                title: 'Meet Your Chauffeur at Arrivals',
                body: 'Your driver waits at the arrivals level with a name sign — inside Terminal B or Terminal C. A WhatsApp message confirms the exact spot.',
              },
              {
                step: '04',
                title: 'Straight to Your Destination',
                body: 'Luggage loaded, you are on your way. No transfers, no meter running, no surprises. Just a direct, comfortable ride to wherever you are going.',
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col">
                <div className="font-serif text-4xl font-semibold text-brand-black opacity-20 mb-4 leading-none">
                  {s.step}
                </div>
                <h3 className="font-semibold text-brand-black mb-2">{s.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMINAL GUIDE */}
      <section className="bg-brand-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            LGA Terminal Guide
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            LaGuardia has two active terminals following its multi-billion-dollar renovation.
            Both offer streamlined arrivals flows — your chauffeur knows both well.
          </p>
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {[
              {
                terminal: 'Terminal B — Rebuilt 2022',
                airlines: 'American Airlines · United Airlines · Southwest Airlines',
                detail:
                  'Terminal B is the primary domestic hub at LGA and home to the award-winning new facility that opened in 2022. Arrivals exit onto a modern ground-level hall with clear signage. Your chauffeur waits past baggage claim with your name on a sign.',
                note: 'American, United, and Southwest depart and arrive here.',
              },
              {
                terminal: 'Terminal C — Opened 2023',
                airlines: 'Delta Air Lines (domestic)',
                detail:
                  'Terminal C is the newest terminal at LaGuardia, opened in 2023 exclusively for Delta Air Lines domestic operations. The arrivals level is compact and efficient — easy to navigate. Your driver will be waiting at the base of the escalators with a name sign as you exit baggage claim.',
                note: 'All Delta domestic flights use Terminal C.',
              },
            ].map((t) => (
              <div key={t.terminal} className="border border-brand-light p-6">
                <h3 className="font-serif text-xl font-semibold text-brand-black mb-1">
                  {t.terminal}
                </h3>
                <p className="text-sm text-brand-silver mb-4">{t.airlines}</p>
                <p className="text-brand-grey text-sm leading-relaxed mb-3">{t.detail}</p>
                <p className="text-xs text-brand-silver border-t border-brand-light pt-3">
                  {t.note}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-brand-offwhite border border-brand-light p-6">
            <h3 className="font-semibold text-brand-black mb-2">Carrier Quick Reference</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-brand-grey">
              <div>
                <span className="font-medium text-brand-black">Terminal B:</span> American Airlines,
                United Airlines, Southwest Airlines, and most domestic carriers
              </div>
              <div>
                <span className="font-medium text-brand-black">Terminal C:</span> Delta Air Lines —
                all domestic Delta flights including Delta Connection
              </div>
            </div>
            <p className="text-xs text-brand-silver mt-4">
              Terminal assignments can change. Always verify on your boarding pass. When you book
              with Eagle Eye, we confirm your terminal at dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            Popular LGA Routes
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            We run these routes every day. Flat rates, no surge, no meter surprises.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'LGA to Manhattan',
                time: '20–30 min',
                href: '/services/routes/lga-to-manhattan-black-car-service',
              },
              {
                label: 'Manhattan to LGA',
                time: '20–30 min',
                href: '/services/routes/manhattan-to-lga-black-car-service',
              },
              {
                label: 'LGA to Brooklyn',
                time: '25–40 min',
                href: '/services/routes/lga-to-brooklyn-black-car-service',
              },
              {
                label: 'Queens to LGA',
                time: '10–25 min',
                href: '/services/routes/queens-to-lga-black-car-service',
              },
              {
                label: 'LGA to Upper East Side',
                time: '15–25 min',
                href: '/book',
              },
              {
                label: 'LGA to Midtown',
                time: '20–30 min',
                href: '/book',
              },
              {
                label: 'LGA to Financial District',
                time: '25–40 min',
                href: '/book',
              },
              {
                label: 'LGA to Westchester',
                time: '50–65 min',
                href: '/book',
              },
              {
                label: 'LGA Airport Pickup — Long Island',
                time: '35–60 min',
                href: '/services/areas/long-island',
              },
              {
                label: 'LGA to New Jersey',
                time: '35–55 min',
                href: '/book',
              },
            ].map((route) => (
              <Link
                key={route.label}
                href={route.href}
                className="group bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black text-sm mb-2 group-hover:underline">
                  {route.label}
                </div>
                <div className="text-brand-grey text-xs">{route.time} off-peak</div>
              </Link>
            ))}
          </div>
          <p className="text-xs text-brand-silver mt-6">
            All travel times are estimates and vary with traffic. Flat rate is confirmed at booking
            regardless of actual travel time.{' '}
            <Link href="/book" className="underline">
              Get your quote →
            </Link>
          </p>
        </div>
      </section>

      {/* WHY EAGLE EYE */}
      <section className="bg-brand-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            Why Eagle Eye Black Car at LGA
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            Professional black car service is built around reliability, comfort, and total
            transparency — from the moment you book to the moment you arrive.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — regardless of traffic, time of day, or demand.' },
              { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits inside Terminal B or C with a name sign, past baggage claim — no searching required.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your flight automatically. If it lands early or is delayed, your driver adjusts at no extra charge.' },
              { title: 'Luggage Assistance', body: 'Your chauffeur loads and unloads all bags — from baggage claim straight to the vehicle.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a premium, late-model black car — clean, maintained, and guaranteed before every trip.' },
              { title: 'TLC Licensed & Insured', body: 'Every Eagle Eye driver holds a NYC TLC license and carries commercial insurance on every booking.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-light p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-brand-black font-bold mt-0.5">✓</span>
                  <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                </div>
                <p className="text-brand-grey text-sm pl-6">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-brand-silver mt-6">
            Visit{' '}
            <Link href="/book" className="underline">
              /book
            </Link>{' '}
            for your confirmed flat rate.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            What&apos;s Included with Every LGA Transfer
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            Your flat rate covers everything below — no line-item surprises at the end.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Real-Time Flight Tracking',
                body: 'We monitor your LGA flight from departure and adjust your driver automatically — delays, early arrivals, gate changes.',
              },
              {
                title: 'Meet & Greet at Terminal B or C',
                body: 'Your chauffeur waits inside the terminal at the arrivals level with a name sign — not at a parking lot or app pin.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your driver loads your bags and handles them at drop-off. No wrestling bags onto a train or loading them yourself.',
              },
              {
                title: 'Flat Rate — No Surge Pricing',
                body: 'Your price is locked at booking. No multipliers for rush hour, storms, or high demand on a Friday evening.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Travel in a premium black car — not whatever happens to be nearby. All vehicles are clean, late-model, and TLC inspected.',
              },
              {
                title: '24/7 Availability',
                body: 'LGA has early morning and late-night departures. We are available every hour, every day — including holidays.',
              },
              {
                title: 'TLC Licensed & Fully Insured',
                body: 'Every Eagle Eye driver holds a NYC TLC license. You are covered by commercial insurance, not a personal auto policy.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-white border border-brand-light p-6">
                <div className="flex items-start gap-3 mb-3">
                  <span className="mt-0.5 text-brand-black" aria-hidden="true">
                    ✓
                  </span>
                  <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                </div>
                <p className="text-brand-grey text-sm leading-relaxed pl-6">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            LGA Car Service — Frequently Asked Questions
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            Common questions about booking LaGuardia Airport transfers with Eagle Eye.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-3">{faq.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-brand-grey text-sm mb-4">
              Have a question not answered here? Contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`tel:${CONTACT_PHONE_E164}`}
                className="inline-block py-2 px-6 border border-brand-light text-brand-black text-sm hover:border-brand-dark transition-colors"
              >
                Call {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL_BOOKINGS}`}
                className="inline-block py-2 px-6 border border-brand-light text-brand-black text-sm hover:border-brand-dark transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED AIRPORTS */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            Other NYC Area Airports
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            Flying in or out of a different airport? Eagle Eye covers all three major NYC airports
            plus Westchester.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                code: 'JFK',
                name: 'John F. Kennedy International',
                detail:
                  'NYC\'s largest international airport — 4 active terminals. All international carriers plus JetBlue\'s domestic hub.',
                href: '/services/airport/jfk',
              },
              {
                code: 'EWR',
                name: 'Newark Liberty International',
                detail:
                  'Serving New Jersey and Manhattan — all NJ Turnpike and tunnel tolls included in your flat rate.',
                href: '/services/airport/ewr',
              },
              {
                code: 'HPN',
                name: 'Westchester County Airport',
                detail:
                  'Smaller regional airport with shorter security lines — popular with business travelers heading to Westchester and Connecticut.',
                href: '/services/airport/hpn',
              },
            ].map((airport) => (
              <Link
                key={airport.code}
                href={airport.href}
                className="group bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
              >
                <div className="font-serif text-2xl font-semibold text-brand-black mb-1 group-hover:underline">
                  {airport.code}
                </div>
                <div className="text-sm font-medium text-brand-black mb-3">{airport.name}</div>
                <p className="text-brand-grey text-xs leading-relaxed">{airport.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Articles */}
      <section className="bg-brand-offwhite py-12 border-t border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-semibold text-brand-black mb-6">LaGuardia Airport Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: '/blog/lga-car-service-best-airport-transfer-nyc', title: 'LaGuardia Car Service: Best LGA Transfers' },
              { href: '/blog/lga-to-brooklyn-car-service-guide', title: 'LGA to Brooklyn Car Service Guide' },
              { href: '/blog/lga-to-queens-jfk-car-service-guide', title: 'LGA to Queens & JFK Guide' },
              { href: '/blog/jfk-to-laguardia-transfer-distance-options', title: 'JFK to LaGuardia Transfer Options' },
              { href: '/blog/laguardia-to-newark-airport-transfer-guide', title: 'LGA to Newark Airport Transfer' },
              { href: '/blog/best-airport-to-fly-into-nyc-jfk-lga-ewr-guide', title: 'JFK vs LGA vs EWR: Best NYC Airport' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group bg-brand-white border border-brand-light hover:border-brand-black transition-colors p-4 text-sm font-medium text-brand-black">
                {l.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-brand-white mb-6 leading-tight">
            Book Your LGA Transfer Today
          </h2>
          <p className="text-brand-silver text-lg mb-10 max-w-xl mx-auto">
            Flat rate confirmed at booking. Flight tracking included. Your chauffeur waiting at
            arrivals with a name sign — whether you land at Terminal B or Terminal C.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="inline-block py-4 px-10 bg-brand-white text-brand-black font-medium hover:bg-brand-silver transition-colors"
            >
              Get an Instant Quote
            </Link>
            <Link
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-4 px-10 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              WhatsApp a Booking
            </Link>
          </div>
          <p className="text-brand-silver text-sm mt-8">
            Or call us at{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline">
              {CONTACT_PHONE_DISPLAY}
            </a>{' '}
            — available 24/7.
          </p>
        </div>
      </section>
    </>
  );
}
