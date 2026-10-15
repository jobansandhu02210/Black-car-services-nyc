import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  WHATSAPP_BOOKING_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  CONTACT_EMAIL_BOOKINGS,
} from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'JFK Car Service NYC | Black Car Airport Transfers',
  description:
    'JFK car service NYC — flat-rate black car airport transfers, meet & greet all terminals, real-time flight tracking. No surge pricing, ever.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/jfk` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/airport/jfk` },
};

const jfkFaqs = [
  {
    q: 'How much is a black car service from JFK to Manhattan?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering your pickup and drop-off.',
  },
  {
    q: 'How is JFK black car service different from other options?',
    a: 'Our black car service is flat-rate, confirmed at booking — your final cost is known before you travel. You also get a professional chauffeur, meet & greet at arrivals, and real-time flight tracking — with guaranteed luggage assistance and a luxury vehicle every time.',
  },
  {
    q: 'Do you monitor flight delays at JFK?',
    a: 'Yes. We track your flight in real-time so we adjust pickup timing automatically. No extra charge for delays.',
  },
  {
    q: 'Where does the chauffeur meet me at JFK?',
    a: 'Your chauffeur meets you at the arrivals level with a name sign, just past baggage claim. You also get a WhatsApp message with the exact meeting spot before landing.',
  },
  {
    q: 'Which JFK terminals do you serve?',
    a: 'We serve all JFK terminals — T1, T2, T4, T5, T7, and T8. Your driver will be at the correct terminal based on your flight information.',
  },
  {
    q: 'Do you offer child seats for JFK transfers?',
    a: "Yes. Let us know when booking and we'll have a car seat ready at no extra charge.",
  },
  {
    q: 'How early should I book JFK airport service?',
    a: 'We recommend booking at least 24 hours in advance to guarantee your preferred vehicle. Same-day bookings are possible subject to availability — call or WhatsApp us directly for same-day requests.',
  },
  {
    q: 'Do you handle multiple passengers or groups at JFK?',
    a: 'Yes. Our business sedans comfortably seat up to 3 passengers with luggage, and our SUVs accommodate 5–7 passengers. For larger groups, contact us and we will arrange multiple vehicles.',
  },
  {
    q: 'What is a Kennedy car service and how does it work?',
    a: '"Kennedy car service" refers to professional black car and chauffeur service to and from John F. Kennedy International Airport (JFK). Eagle Eye provides private, door-to-door Kennedy car service with a flat rate confirmed at booking — no meter, no surge pricing. Your chauffeur meets you at arrivals with a name sign and drives you directly to your destination.',
  },
  {
    q: 'How do I book a private transfer from JFK to Manhattan?',
    a: 'Book online at /book or WhatsApp us with your flight details and Manhattan destination. Your private transfer from JFK is confirmed at a flat rate instantly — limousine sedan or luxury SUV, professional chauffeur, meet & greet at your terminal. We cover all Manhattan neighborhoods: Midtown, FiDi, Upper East Side, Upper West Side, and more.',
  },
];


const jfkTerminals = [
  {
    terminal: 'Terminal 1',
    airlines: 'Lufthansa, Air France, Korean Air, Turkish Airlines, Finnair',
    pickup: 'Arrivals level, Ground Floor — your driver waits past baggage claim with a name sign.',
  },
  {
    terminal: 'Terminal 2',
    airlines: 'Delta Air Lines (some flights)',
    pickup: 'Arrivals level — driver meets you just past customs with a name sign.',
  },
  {
    terminal: 'Terminal 4',
    airlines: 'Delta, Air France (some), international carriers — the largest terminal at JFK',
    pickup: 'Ground level arrivals — driver holds name sign past baggage claim.',
  },
  {
    terminal: 'Terminal 5',
    airlines: 'JetBlue Airways (main hub)',
    pickup: 'Arrivals level, Ground Floor — driver at the exit from baggage claim with name sign.',
  },
  {
    terminal: 'Terminal 7',
    airlines: 'British Airways, Iberia',
    pickup: 'Ground level arrivals — driver meets you past baggage claim.',
  },
  {
    terminal: 'Terminal 8',
    airlines: 'American Airlines (main hub)',
    pickup: 'Arrivals level — driver waits with name sign past baggage claim and customs.',
  },
];

const popularRoutes = [
  {
    name: 'JFK to Manhattan',
    description: 'Arrivals meet & greet, flat rate',
    href: '/services/routes/jfk-to-manhattan-black-car-service',
  },
  {
    name: 'Manhattan to JFK',
    description: 'Door-to-terminal departures',
    href: '/services/routes/manhattan-to-jfk-black-car-service',
  },
  {
    name: 'JFK to Brooklyn',
    description: 'Direct to all Brooklyn neighborhoods',
    href: '/services/routes/jfk-to-brooklyn',
  },
  {
    name: 'Brooklyn to JFK',
    description: 'Via Belt Parkway, on-time guarantee',
    href: '/services/routes/brooklyn-to-jfk-black-car-service',
  },
  {
    name: 'JFK to Queens',
    description: 'Short-haul, flat rate, no surge',
    href: '/services/routes/jfk-to-queens-black-car-service',
  },
  {
    name: 'Midtown to JFK',
    description: 'Hotel & corporate office pickup',
    href: '/services/routes/midtown-to-jfk-black-car-service',
  },
  {
    name: 'Upper East Side to JFK',
    description: 'Residential & luxury building pickup',
    href: '/services/routes/upper-east-side-to-jfk-black-car-service',
  },
  {
    name: 'JFK to Westchester',
    description: 'White Plains, Scarsdale & beyond',
    href: '/services/routes/jfk-to-westchester-car-service',
  },
  {
    name: 'JFK to Long Island',
    description: 'Nassau & Suffolk County, flat rate',
    href: '/services/routes/jfk-to-long-island-car-service',
  },
  {
    name: 'Bronx to JFK',
    description: 'All Bronx neighborhoods, on-time',
    href: '/services/routes/bronx-to-jfk-black-car-service',
  },
];

const whatsIncluded = [
  'Meet & greet at arrivals with name sign',
  'Real-time flight tracking — no charge for delays',
  '60 minutes complimentary wait time after landing',
  'Luggage assistance from baggage claim to vehicle',
  'All tolls and bridge fees included',
  'No surge pricing — rate locked at booking',
  'Child seats available upon request at no extra charge',
];

const howItWorks = [
  {
    step: '1',
    heading: 'Book online or WhatsApp',
    body: 'Reserve in minutes with your flight details. Your rate is confirmed instantly — no price changes later.',
  },
  {
    step: '2',
    heading: 'Your driver monitors your flight live',
    body: 'We track your inbound flight in real-time. If it is delayed or early, we adjust automatically.',
  },
  {
    step: '3',
    heading: 'Meet & greet at arrivals with name sign',
    body: 'Your chauffeur is waiting at the arrivals hall — name sign in hand — as you exit baggage claim.',
  },
  {
    step: '4',
    heading: 'Chauffeur drives you direct to your door',
    body: 'Straight to your hotel, home, or office. No stops, no detours — a direct, comfortable ride to your destination.',
  },
];

export default function JFKPage() {
  return (
    <>
      <FaqJsonLd faqs={jfkFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
          { name: 'JFK Airport', url: `${getSiteUrl()}/services/airport/jfk` },
        ]}
      />
      <ServiceJsonLd
        name="JFK Airport Black Car Service"
        description="Premium JFK airport black car service. Flat rates, real-time flight tracking, meet & greet at arrivals. All terminals. 24/7 availability."
        areaServed="New York City, NY"
        url={`${getSiteUrl()}/services/airport/jfk`}
      />

      {/* 1. Dark Hero */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4">
            Airport Service
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-6">
            JFK Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-10">
            New York&apos;s busiest airport — flat-rate black car and chauffeur service, private transfers JFK to Manhattan, meet &amp; greet at every terminal. Professional Kennedy car service, no surge pricing, 24/7.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'All 8 Terminals', sub: 'Covered' },
              { label: '60-Min Free Wait', sub: 'After landing' },
              { label: '24/7', sub: 'Available' },
              { label: 'TLC Licensed', sub: 'Every driver' },
            ].map((stat) => (
              <div key={stat.label} className="border border-brand-charcoal p-4 text-center">
                <div className="font-semibold text-brand-white text-sm">{stat.label}</div>
                <div className="text-brand-silver text-xs mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Your JFK Transfer
            </Link>
            <Link
              href={WHATSAPP_BOOKING_URL}
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              WhatsApp to Book
            </Link>
          </div>
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-10">
            How JFK Car Service Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 bg-brand-black text-brand-white font-semibold text-sm flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-black mb-1">{item.heading}</h3>
                  <p className="text-sm text-brand-grey">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. JFK Terminals */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
            JFK Terminal Coverage
          </h2>
          <p className="text-brand-grey mb-8">
            We meet arrivals at every active JFK terminal. Your driver is assigned to the correct
            terminal automatically based on your flight details.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {jfkTerminals.map((t) => (
              <div key={t.terminal} className="border border-brand-light bg-brand-offwhite p-5">
                <h3 className="font-semibold text-brand-black mb-1">{t.terminal}</h3>
                <p className="text-xs text-brand-silver uppercase tracking-wide mb-2">
                  {t.airlines}
                </p>
                <p className="text-sm text-brand-grey">{t.pickup}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Popular JFK Routes */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">
            Popular JFK Routes
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {popularRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="group flex items-start justify-between gap-2 bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div>
                  <div className="font-semibold text-brand-black group-hover:text-brand-charcoal transition-colors">
                    {route.name}
                  </div>
                  <div className="text-sm text-brand-grey mt-1">{route.description}</div>
                </div>
                <span className="text-brand-grey mt-0.5 shrink-0 text-lg leading-none">→</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-6">
            All rates are flat. Tolls included. No surge pricing.{' '}
            <Link href="/book" className="underline text-brand-black">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* 5. Why Eagle Eye */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">
            Why Choose Eagle Eye Black Car at JFK
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Confirmed at Booking', body: 'Your price is locked the moment you book and never changes — no surprises at the end of the ride.' },
              { title: 'Meet & Greet at Every Terminal', body: 'Your chauffeur waits at the arrivals hall with a name sign, just past baggage claim. All JFK terminals covered.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your flight live. Early landing or delay — your driver adjusts automatically at no extra charge.' },
              { title: 'Luggage Assistance', body: 'Your chauffeur assists with all bags from baggage claim to the vehicle — door to door.' },
              { title: 'Luxury Sedan or SUV', body: 'Travel in a premium, late-model black car every time. Clean, maintained, and guaranteed before every trip.' },
              { title: 'TLC Licensed & Insured', body: 'Every Eagle Eye driver holds a NYC TLC license and operates under full commercial insurance.' },
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
        </div>
      </section>

      {/* 6. What's Included */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-white border border-brand-light p-8 lg:p-10">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              What&apos;s Included With Every JFK Transfer
            </h2>
            <ul className="space-y-4">
              {whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-grey">
                  <span className="mt-0.5 shrink-0 text-brand-black font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book JFK Transfer
              </Link>
              <Link
                href={`tel:${CONTACT_PHONE_E164}`}
                className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                Call {CONTACT_PHONE_DISPLAY}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">
            JFK Airport Car Service — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {jfkFaqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Related Airport Pages */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Other NYC Airport Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/airport/lga"
              className="group bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-brand-black group-hover:text-brand-charcoal transition-colors">
                  LaGuardia (LGA)
                </span>
                <span className="text-brand-grey shrink-0 text-lg leading-none">→</span>
              </div>
              <p className="text-sm text-brand-grey mt-2">
                Flat rate black car service, all LGA terminals
              </p>
            </Link>
            <Link
              href="/services/airport/ewr"
              className="group bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-brand-black group-hover:text-brand-charcoal transition-colors">
                  Newark (EWR)
                </span>
                <span className="text-brand-grey shrink-0 text-lg leading-none">→</span>
              </div>
              <p className="text-sm text-brand-grey mt-2">
                NYC to Newark Airport, flat rate, no tolls surprise
              </p>
            </Link>
            <Link
              href="/services/airport/hpn"
              className="group bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-semibold text-brand-black group-hover:text-brand-charcoal transition-colors">
                  Westchester (HPN)
                </span>
                <span className="text-brand-grey shrink-0 text-lg leading-none">→</span>
              </div>
              <p className="text-sm text-brand-grey mt-2">
                White Plains Airport transfers, NYC and beyond
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Blog Articles */}
      <section className="bg-brand-offwhite py-12 border-t border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-semibold text-brand-black mb-6">JFK Airport Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: '/blog/jfk-to-manhattan-best-car-service-airport-transfer', title: 'JFK to Manhattan: Best Car Service Guide' },
              { href: '/blog/jfk-airport-pickup-meet-and-greet-service', title: 'JFK Meet & Greet: How It Works' },
              { href: '/blog/jfk-travel-tips-checklist-professional-travelers', title: 'JFK Airport Tips for Professional Travelers' },
              { href: '/blog/jfk-to-times-square-cheapest-best-way', title: 'JFK to Times Square: Best Ways' },
              { href: '/blog/jfk-to-wall-street-financial-district-car-service', title: 'JFK to Wall Street Car Service' },
              { href: '/blog/how-far-is-jfk-from-manhattan-travel-times-guide', title: 'How Far Is JFK from Manhattan?' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group bg-brand-white border border-brand-light hover:border-brand-black transition-colors p-4 text-sm font-medium text-brand-black">
                {l.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="bg-brand-black py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-white mb-4">
            Book Your JFK Airport Transfer
          </h2>
          <p className="text-brand-silver mb-8">
            Flat rate. Flight tracking included. Meet &amp; greet at every terminal.
            Available 24/7 — book online or reach us instantly on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <Link
              href={WHATSAPP_BOOKING_URL}
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              WhatsApp to Book
            </Link>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Or call us:{' '}
            <Link href={`tel:${CONTACT_PHONE_E164}`} className="underline text-brand-white">
              {CONTACT_PHONE_DISPLAY}
            </Link>
            {' · '}
            <Link href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline text-brand-white">
              {CONTACT_EMAIL_BOOKINGS}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
