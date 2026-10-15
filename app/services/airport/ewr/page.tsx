import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'EWR Car Service NYC | Black Car Airport Transfers',
  description:
    'Newark car service EWR — all NJ tolls included, meet & greet Terminals A, B & C. NJ to JFK transfers available. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/ewr` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/airport/ewr` },
};

const faqs = [
  {
    q: 'How much is a car service from EWR to Manhattan?',
    a: 'All rates are flat and confirmed at booking — all tolls included, no hidden fees. Your price covers the NJ Turnpike, Lincoln Tunnel or Holland Tunnel, and airport fees. Get an instant quote at /book.',
  },
  {
    q: 'Are NJ Turnpike tolls included in the EWR car service rate?',
    a: 'Yes. Every toll on the route — NJ Turnpike, Lincoln Tunnel, Holland Tunnel, and any bridge or tunnel — is included in your flat rate. What you see at booking is the final amount. Nothing is added at the end of your ride.',
  },
  {
    q: 'Where does the driver meet me at Newark Airport?',
    a: 'Your chauffeur meets you at the arrivals level of your terminal — Terminal A, B, or C — with a name sign. You receive a WhatsApp message confirming the exact meeting spot before you land. We know all EWR terminals and where each airline exits.',
  },
  {
    q: 'How long does Newark Airport to Manhattan take?',
    a: 'Off-peak, expect 30 to 45 minutes from EWR to Midtown Manhattan. During heavy traffic — weekday mornings and late afternoons — allow 45 to 65 minutes. Your chauffeur monitors traffic and picks the fastest tunnel or bridge route.',
  },
  {
    q: 'Is EWR car service available late at night?',
    a: 'Yes — Eagle Eye operates 24 hours a day, 7 days a week. Late-night arrivals, red-eye departures, and early morning flights are all fully covered. No minimum notice required for standard bookings.',
  },
  {
    q: 'Do you track flights for EWR arrivals?',
    a: 'Yes. We monitor your EWR flight in real-time and update your driver automatically if there are delays, early arrivals, or gate changes. No extra charge, no phone calls needed. Your chauffeur is always timed to your actual landing.',
  },
  {
    q: 'Do you provide car service from New Jersey to JFK airport?',
    a: 'Yes. Eagle Eye provides car service from New Jersey to JFK Airport — including from Newark, Hoboken, Jersey City, Princeton, and all NJ locations. Flat rate confirmed at booking, all tolls included (Lincoln Tunnel, Holland Tunnel, or Goethals Bridge). Book online or WhatsApp us with your NJ pickup address and JFK terminal.',
  },
  {
    q: 'Can I book a car service from JFK to Newark Airport?',
    a: 'Yes. We run direct JFK to Newark (EWR) transfers — a common route for travelers with connections at different airports. Flat rate, one pickup, door-to-door. JFK to Newark takes approximately 40–60 minutes depending on traffic and which terminals you are using.',
  },
];


export default function EWRPage() {
  return (
    <>
      <ServiceJsonLd
        name="Newark Airport Black Car Service"
        description="Premium Newark Liberty Airport car service to Manhattan, Brooklyn, Queens, and New Jersey. Flat rates, all tolls included, real-time flight tracking, meet & greet at Terminals A, B, and C."
        areaServed="New York City, NY; Newark, NJ"
        url={`${getSiteUrl()}/services/airport/ewr`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
          { name: 'Newark Airport', url: `${getSiteUrl()}/services/airport/ewr` },
        ]}
      />

      {/* HERO */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs font-medium tracking-widest uppercase mb-4">
            Airport Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-6 leading-tight">
            Newark Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Newark Liberty is one of NYC&apos;s three main airports — all tolls included in your
            flat rate, real-time flight tracking, and meet &amp; greet at every terminal.
          </p>

          {/* Stat bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            {[
              { label: 'Toll Coverage', value: 'All Tolls Included' },
              { label: 'Airport Wait Time', value: '60-Min Free Wait' },
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
              Book Your EWR Transfer
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
            How EWR Car Service Works
          </h2>
          <p className="text-brand-grey mb-12 max-w-xl">
            Every step is handled — from a toll-inclusive quote to your chauffeur waiting
            at arrivals. Here is what happens when you book.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Book Online — Tolls Included Upfront',
                body: 'Enter your EWR flight and destination at /book. Your flat rate is confirmed instantly — NJ Turnpike, Lincoln Tunnel, and all other tolls are built in. No add-ons at the end.',
              },
              {
                step: '02',
                title: 'Driver Monitors Your EWR Flight',
                body: 'We track your Newark flight live from departure. Delays, early arrivals, and gate changes are handled automatically — your chauffeur is always timed to your actual landing.',
              },
              {
                step: '03',
                title: 'Meet & Greet at Arrivals',
                body: 'Your driver waits at the arrivals level of your terminal with a name sign — inside Terminal A, B, or C. A WhatsApp message confirms the exact meeting spot before you land.',
              },
              {
                step: '04',
                title: 'Door-to-Door — No Toll Surprises',
                body: 'Bags loaded, you head straight to your destination. No tunnel toll added at the end, no surge, no meter. The price you saw at booking is the price you pay.',
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
            EWR Terminal Guide
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Newark Liberty has three active terminals connected by the AirTrain. Your chauffeur
            knows exactly where to wait in each one — so you walk straight to your car.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                terminal: 'Terminal A',
                airlines: 'United Airlines (domestic) · Some international',
                detail:
                  'Terminal A handles United Airlines domestic routes and select international flights. Arrivals exit onto the ground floor — your chauffeur waits past baggage claim with your name sign. Terminal A is the nearest to the AirTrain station, but your driver handles the whole journey.',
                note: 'United domestic and some United Express routes arrive here.',
              },
              {
                terminal: 'Terminal B',
                airlines: 'United Airlines (international) · British Airways · Lufthansa · Air Canada',
                detail:
                  'Terminal B is United\'s international terminal at EWR and also handles major international carriers. Customs and baggage claim exit onto the arrivals hall — your chauffeur is waiting with a name sign. A WhatsApp message confirms the meeting point before you clear customs.',
                note: 'International arrivals — allow extra time for customs clearance.',
              },
              {
                terminal: 'Terminal C',
                airlines: 'United Express · Regional carriers · Some international',
                detail:
                  'Terminal C serves United Express regional routes and additional international flights. Ground level arrivals are well-signed — your driver waits at the exit from baggage claim. If your flight is on a regional jet through Newark, it likely arrives at Terminal C.',
                note: 'United Express and regional connections use Terminal C.',
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
            <h3 className="font-semibold text-brand-black mb-2">Toll Routes from EWR</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-brand-grey">
              <div>
                <span className="font-medium text-brand-black">To Midtown &amp; Upper Manhattan:</span>{' '}
                NJ Turnpike → Lincoln Tunnel. All tolls included in your flat rate.
              </div>
              <div>
                <span className="font-medium text-brand-black">To Lower Manhattan &amp; Brooklyn:</span>{' '}
                NJ Turnpike → Holland Tunnel or Goethals Bridge. All tolls included.
              </div>
            </div>
            <p className="text-xs text-brand-silver mt-4">
              Route may vary based on real-time traffic. All toll options are covered — your quoted
              price does not change based on which route your driver takes.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            Popular EWR Routes
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            We run these routes every day. Flat rates with all NJ Turnpike and tunnel
            tolls already included.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'EWR to Manhattan',
                time: '30–45 min',
                href: '/services/routes/ewr-to-manhattan-black-car-service',
              },
              {
                label: 'Manhattan to EWR',
                time: '30–45 min',
                href: '/services/routes/manhattan-to-ewr-black-car-service',
              },
              {
                label: 'EWR to Brooklyn',
                time: '40–55 min',
                href: '/services/routes/ewr-to-brooklyn-black-car-service',
              },
              {
                label: 'EWR to Queens',
                time: '40–55 min',
                href: '/book',
              },
              {
                label: 'EWR to Westchester',
                time: '50–70 min',
                href: '/book',
              },
              {
                label: 'EWR to Long Island',
                time: '50–70 min',
                href: '/book',
              },
              {
                label: 'EWR to Upper East Side',
                time: '35–50 min',
                href: '/book',
              },
              {
                label: 'EWR to Midtown',
                time: '30–45 min',
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
            Travel times are estimates and vary with traffic. All tolls are included in your flat
            rate regardless of route.{' '}
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
            Why Eagle Eye Black Car at EWR
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            Professional black car service from Newark means every toll is included, your rate
            is locked at booking, and your chauffeur is confirmed before you travel.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'All Tolls Included', body: 'NJ Turnpike, Lincoln Tunnel, Holland Tunnel — every toll on the route is built into your flat rate. Nothing is added at the end.' },
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed the moment you book and never changes — regardless of traffic, time of day, or conditions.' },
              { title: 'Meet & Greet at Terminals A, B & C', body: 'Your chauffeur waits at the arrivals level of your terminal with a name sign. All three EWR terminals covered.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your EWR flight and update your driver automatically for delays or early arrivals — no calls needed.' },
              { title: 'Luggage Assistance', body: 'Your chauffeur loads and unloads all bags — no carrying luggage through a train platform or loading it yourself.' },
              { title: 'TLC Licensed & Insured', body: 'Every Eagle Eye driver holds a NYC TLC license and operates under commercial insurance on every booking.' },
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
            for your confirmed flat rate with all tolls included.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            What&apos;s Included with Every EWR Transfer
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            Every item below is covered in your flat rate. No hidden charges, no toll surprises,
            no tip not included.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Real-Time Flight Tracking',
                body: 'We monitor your EWR flight from departure. Delays and early arrivals trigger automatic driver adjustments — no calls needed from you.',
              },
              {
                title: 'Meet & Greet at Terminals A, B & C',
                body: 'Your chauffeur waits inside your terminal at the arrivals level with a name sign. All three EWR terminals are covered.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your driver handles bags at pickup and drop-off. No carrying heavy luggage to a train platform or loading it yourself.',
              },
              {
                title: 'All Bridge & Tunnel Tolls Included',
                body: 'NJ Turnpike, Lincoln Tunnel, Holland Tunnel — every toll on the route to your destination is already built into your flat rate.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'You travel in a premium black car, not whatever happens to be available nearby. All vehicles are clean, late-model, and TLC inspected.',
              },
              {
                title: '24/7 Availability',
                body: 'Newark has early departures, red-eye arrivals, and overnight international landings. Eagle Eye is available every hour of every day, including holidays.',
              },
              {
                title: 'TLC Licensed & Fully Insured',
                body: 'Every Eagle Eye driver holds a NYC TLC license and operates under commercial insurance — not a personal auto policy.',
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
            EWR Car Service — Frequently Asked Questions
          </h2>
          <p className="text-brand-grey mb-10 max-w-xl">
            Common questions about booking Newark Airport transfers with Eagle Eye.
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
            Flying through a different airport? Eagle Eye covers all three major NYC airports
            plus Westchester.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                code: 'JFK',
                name: 'John F. Kennedy International',
                detail:
                  'NYC\'s largest international airport — 4 active terminals. All major international carriers plus JetBlue\'s domestic hub. Flat-rate service from all terminals.',
                href: '/services/airport/jfk',
              },
              {
                code: 'LGA',
                name: 'LaGuardia Airport',
                detail:
                  'NYC\'s most-used domestic airport — newly rebuilt Terminal B and Terminal C. Just 9 miles from Midtown, ideal for American, United, Delta, and Southwest.',
                href: '/services/airport/lga',
              },
              {
                code: 'HPN',
                name: 'Westchester County Airport',
                detail:
                  'Smaller regional airport north of the city with shorter security lines — popular with business travelers heading to Westchester, Connecticut, or Hudson Valley.',
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
          <h2 className="font-serif text-xl font-semibold text-brand-black mb-6">Newark Airport Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: '/blog/newark-airport-car-service-ewr-to-manhattan', title: 'Newark Airport Car Service: EWR to Manhattan' },
              { href: '/blog/ewr-newark-airport-guide-car-service', title: 'Newark Airport (EWR) Complete Guide' },
              { href: '/blog/jfk-to-newark-airport-transfer-options', title: 'JFK to Newark Airport Transfer Options' },
              { href: '/blog/laguardia-to-newark-airport-transfer-guide', title: 'LGA to Newark Airport Transfer' },
              { href: '/blog/best-airport-to-fly-into-nyc-jfk-lga-ewr-guide', title: 'JFK vs LGA vs EWR: Which to Choose?' },
              { href: '/blog/black-car-service-vs-taxi-nyc-which-is-better', title: 'Black Car vs Taxi NYC: Which Wins?' },
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
            Book Your EWR Transfer Today
          </h2>
          <p className="text-brand-silver text-lg mb-10 max-w-xl mx-auto">
            Flat rate confirmed at booking — all NJ Turnpike and tunnel tolls included.
            Your chauffeur waiting at arrivals in your terminal, name sign at ready.
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
