import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  CONTACT_EMAIL_BOOKINGS,
  WHATSAPP_BOOKING_URL,
} from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'About Eagle Eye Chauffeur | TLC Licensed NYC Luxury Car Service',
  },
  description:
    'Eagle Eye Chauffeur — NYC\'s TLC-licensed black car service. JFK, LGA, EWR & HPN airport transfers, all 5 boroughs. Professional chauffeurs, flat rates, 24/7.',
  alternates: { canonical: `${getSiteUrl()}/about` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/about`,
    title: 'About Eagle Eye Chauffeur | TLC Licensed NYC Luxury Car Service',
    description:
      'Eagle Eye Chauffeur — NYC\'s TLC-licensed black car service. JFK, LGA, EWR & HPN airport transfers, all 5 boroughs. Professional chauffeurs, flat rates, 24/7.',
  },
};

const stats = [
  { label: 'TLC Licensed', sub: 'Every chauffeur & vehicle' },
  { label: '4 Airports', sub: 'JFK · LGA · EWR · HPN' },
  { label: 'Tri-State Coverage', sub: 'NY · NJ · CT' },
  { label: '24/7 Service', sub: 'Always available' },
];

const values = [
  {
    symbol: '✓',
    title: 'TLC Licensed & Fully Insured',
    body: 'Every chauffeur holds a valid NYC Taxi & Limousine Commission license and undergoes background screening. Our vehicles carry full commercial insurance so you ride with complete peace of mind.',
  },
  {
    symbol: '✓',
    title: 'Professional Training',
    body: 'Our chauffeurs are trained in client protocol, personal presentation, discretion, and defensive driving. They arrive uniformed, prepared, and focused solely on your experience.',
  },
  {
    symbol: '✓',
    title: 'Real-Time Flight Tracking',
    body: 'We monitor every inbound flight using live data. If your flight is delayed or arrives early, your driver adjusts automatically — at no extra charge. You never wait, we do.',
  },
  {
    symbol: '✓',
    title: 'Flat-Rate Pricing',
    body: 'Your fare is locked at the moment you book. No surge pricing, no hidden fees, no meter ticking. What you see is what you pay — always.',
  },
  {
    symbol: '✓',
    title: 'All Boroughs & Tri-State Area',
    body: 'We serve Manhattan, Brooklyn, Queens, the Bronx, and Staten Island, plus Long Island, Westchester, New Jersey, and Connecticut. One service, every corner of the region.',
  },
  {
    symbol: '✓',
    title: 'White-Glove Service',
    body: 'Meet and greet at arrivals, name-sign pickup, luggage assistance, door-to-door care. Every ride receives the same elevated standard — regardless of distance or vehicle class.',
  },
];

const serviceAreas = [
  {
    heading: 'NYC Boroughs',
    places: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'],
  },
  {
    heading: 'Airports',
    places: [
      'John F. Kennedy (JFK)',
      'LaGuardia (LGA)',
      'Newark Liberty (EWR)',
      'Westchester County (HPN)',
    ],
  },
  {
    heading: 'Surrounding Regions',
    places: [
      'Long Island (Nassau & Suffolk)',
      'Westchester County',
      'Fairfield County, CT',
      'New Jersey (Newark, Hoboken, Jersey City, and beyond)',
    ],
  },
];

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: getSiteUrl() },
    { name: 'About', url: `${getSiteUrl()}/about` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[380px] bg-brand-black">
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1400&q=80"
          alt="Professional Eagle Eye Chauffeur standing beside a luxury black sedan in New York City"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black/70" />
        <div className="absolute inset-0 flex items-end pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <p className="text-brand-silver text-sm tracking-widest uppercase mb-3 font-medium">
              TLC Licensed · NYC-Based · Tri-State Service
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-white leading-tight max-w-3xl">
              About Eagle Eye Chauffeur
            </h1>
            <p className="mt-4 text-brand-silver text-lg max-w-2xl leading-relaxed">
              NYC's premier luxury chauffeur service — TLC licensed, professionally trained, serving the tri-state area 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <section className="bg-brand-white border-b border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-light">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="py-8 px-6 text-center"
              >
                <p className="font-serif text-xl font-semibold text-brand-black">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-brand-grey">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────────── */}
      <section className="bg-brand-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-silver text-sm tracking-widest uppercase mb-3 font-medium">
                Our Story
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-8 leading-snug">
                Built Around the Standard NYC Deserves
              </h2>
              <div className="space-y-6 text-brand-grey leading-relaxed">
                <p>
                  Eagle Eye Chauffeur was founded by <strong className="text-brand-black">Joban Sandhu</strong>, a New Hyde Park native who built this service on a conviction: that every client — executive, family, or event planner — deserves access to truly professional ground transportation in New York City. A real chauffeur service, TLC licensed, commercially insured, and held to the highest standard on every single ride.
                </p>
                <p>
                  We know New York the way only locals do. Our chauffeurs navigate JFK's terminal maze, LGA's perpetual construction, EWR's international arrivals corridors, and HPN's private terminal with the confidence of drivers who have done it hundreds of times. We know which routes through the Bronx avoid the morning bottleneck, which tunnel to take from Midtown at 6 PM, and how early to leave Brooklyn before a 7 AM departure. That local intelligence is built into every trip we plan.
                </p>
                <p>
                  What began as a focused airport transfer service has grown into a full-service operation covering corporate travel, event transportation, long-distance rides to Connecticut and New Jersey, and on-demand hourly hire across the entire tri-state area. Through every stage of growth, the principle has stayed the same: show up on time, in a spotless vehicle, with a professional chauffeur — and get you there without stress.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80"
                alt="New York City skyline — Eagle Eye Chauffeur serves all five boroughs and the tri-state area"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
      <section className="bg-brand-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-silver text-sm tracking-widest uppercase mb-3 font-medium">
              Why Eagle Eye
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-brand-grey max-w-xl mx-auto leading-relaxed">
              Six commitments that define every ride — from the moment you book to the moment you arrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-brand-light bg-brand-offwhite p-8 hover:border-brand-dark transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-black text-brand-white flex items-center justify-center text-sm font-bold">
                    {v.symbol}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-brand-black mb-2">
                      {v.title}
                    </h3>
                    <p className="text-brand-grey text-sm leading-relaxed">{v.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ──────────────────────────────────────────────── */}
      <section className="bg-brand-charcoal py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver text-sm tracking-widest uppercase mb-4 font-medium">
            Our Mission
          </p>
          <blockquote className="font-serif text-2xl lg:text-3xl text-brand-white leading-relaxed font-medium">
            "To be the most trusted name in NYC ground transportation — by earning it on every ride, with every client, without exception."
          </blockquote>
          <p className="mt-6 text-brand-silver leading-relaxed max-w-2xl mx-auto">
            Reliability is not a marketing claim — it is a daily discipline. We invest in our chauffeurs' training, maintain our vehicles meticulously, and hold ourselves accountable to the same standard we'd expect for our own family.
          </p>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────────────── */}
      <section className="bg-brand-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-silver text-sm tracking-widest uppercase mb-3 font-medium">
              Coverage
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
              Where We Serve
            </h2>
            <p className="mt-4 text-brand-grey max-w-xl mx-auto leading-relaxed">
              From the tip of Staten Island to Greenwich, Connecticut — we cover the full tri-state region with the same professional standard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div
                key={area.heading}
                className="bg-brand-white border border-brand-light p-8"
              >
                <h3 className="font-serif text-lg font-semibold text-brand-black mb-5 pb-4 border-b border-brand-light">
                  {area.heading}
                </h3>
                <ul className="space-y-3">
                  {area.places.map((place) => (
                    <li key={place} className="flex items-start gap-3 text-brand-grey text-sm leading-relaxed">
                      <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-brand-black" />
                      {place}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-grey text-sm mt-8">
            Need service to a destination not listed?{' '}
            <Link href="/contact" className="text-brand-black underline hover:no-underline font-medium">
              Contact us
            </Link>{' '}
            — we regularly handle long-distance and custom routes.
          </p>
        </div>
      </section>

      {/* ── TRUST SIGNALS ────────────────────────────────────────────── */}
      <section className="bg-brand-white py-16 lg:py-20 border-y border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-silver text-sm tracking-widest uppercase mb-3 font-medium">
                Credentials
              </p>
              <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
                Fully Licensed, Insured & Accountable
              </h2>
              <div className="space-y-5 text-brand-grey leading-relaxed">
                <p>
                  Eagle Eye Chauffeur operates under full NYC Taxi & Limousine Commission (TLC) licensing. Every chauffeur in our fleet holds an active TLC driver's license — a credential that requires a background check, drug screening, defensive driving certification, and ongoing compliance.
                </p>
                <p>
                  Our vehicles carry commercial livery insurance that meets and exceeds NYC requirements. You are protected from the moment you step in until the moment you arrive at your destination.
                </p>
                <p>
                  We are not a technology platform dispatching independent contractors. We are a professional chauffeur company — and that distinction matters for your safety, your reliability, and your experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'TLC Driver Licensing', detail: 'Background checked & certified' },
                { label: 'Commercial Insurance', detail: 'Full livery coverage on every vehicle' },
                { label: 'Vehicle Standards', detail: 'Late-model luxury fleet, regularly serviced' },
                { label: 'Privacy & Discretion', detail: 'Client confidentiality on every booking' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-brand-offwhite border border-brand-light p-6"
                >
                  <p className="font-serif font-semibold text-brand-black text-sm mb-1">{item.label}</p>
                  <p className="text-brand-grey text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver text-sm tracking-widest uppercase mb-4 font-medium">
            Ready to Book
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Experience the Eagle Eye Standard
          </h2>
          <p className="text-brand-silver leading-relaxed max-w-xl mx-auto mb-10">
            Book your ride online in minutes, reach us on WhatsApp, or call direct. Our team is available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-silver transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-brand-white text-brand-white font-medium hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-light text-brand-silver font-medium hover:border-brand-white hover:text-brand-white transition-colors"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>

          <p className="text-brand-silver text-sm">
            Or email us at{' '}
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
