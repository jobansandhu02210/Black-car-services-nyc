import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SafeFleetImage } from '@/components/SafeFleetImage';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';
import { FaqJsonLd, SpeakableJsonLd } from '@/components/JsonLd';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute:
      'NYC Black Car Service | JFK LGA EWR Airport Transfers | Eagle Eye',
  },
  description:
    'NYC black car service & airport transfers to JFK, LGA & EWR. Executive chauffeur, corporate accounts, flat rates, no surge. TLC-licensed. Book 24/7.',
  keywords: siteKeywords,
  alternates: { canonical: getSiteUrl() },
  openGraph: {
    ...ogDefaults,
    url: getSiteUrl(),
    title: 'NYC Black Car Service | JFK LGA EWR Airport Transfers | Eagle Eye',
    description:
      'Eagle Eye Chauffeur — NYC black car service. Airport transfers to JFK, LGA & EWR. Corporate chauffeur, hourly hire & point-to-point. Flat rates, no surge pricing. Book 24/7.',
    images: [{ url: `${getSiteUrl()}/og-image.jpg`, width: 1200, height: 630, alt: 'Eagle Eye Chauffeur NYC Black Car Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NYC Black Car Service | JFK LGA EWR Airport Transfers | Eagle Eye',
    description: 'Eagle Eye Chauffeur — NYC black car service. Airport transfers to JFK, LGA & EWR. Flat rates, no surge pricing. Book 24/7.',
  },
};

// Fleet
const fleet = [
  {
    title: 'Luxury Black Car',
    badge: 'Business Class Sedan',
    capacity: 'Up to 3 passengers',
    luggage: '2–3 bags',
    desc: 'Late-model executive sedan — spotless interior, climate controlled, ideal for solo and duo airport transfers and corporate rides.',
    driver: 'TLC Licensed · Uniformed · Background Checked',
    alt: 'Luxury black car sedan chauffeur service NYC',
    local: '/fleet-business-sedan.png',
    fallback: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
  },
  {
    title: 'Luxury Black SUV',
    badge: 'Business Class SUV',
    capacity: 'Up to 6 passengers',
    luggage: '5–6 bags',
    desc: 'Full-size luxury SUV for groups, families, and executives who need extra space without compromising on comfort.',
    driver: 'TLC Licensed · Uniformed · Background Checked',
    alt: 'Luxury black SUV chauffeur service NYC',
    local: '/fleet-business-suv.jpg',
    fallback: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
  },
  {
    title: 'First Class SUV',
    badge: 'Premium SUV',
    capacity: 'Up to 6 passengers',
    luggage: '5–6 bags',
    desc: 'Top-tier SUV with premium leather, extended legroom, and maximum luggage capacity. The choice for VIP clients and roadshows.',
    driver: 'TLC Licensed · Executive Chauffeur · NDA Available',
    alt: 'First class premium SUV chauffeur service New York City',
    local: '/fleet-first-suv.png',
    fallback: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
  },
  {
    title: 'First Class Sedan',
    badge: 'Premium Sedan',
    capacity: 'Up to 3 passengers',
    luggage: '2–3 bags',
    desc: 'The pinnacle of executive sedan travel — reserved for C-suite, VIP, and clients who demand the absolute best.',
    driver: 'TLC Licensed · Executive Chauffeur · NDA Available',
    alt: 'First class executive sedan luxury car service NYC',
    local: '/fleet-first-sedan.png',
    fallback: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
  },
  {
    title: 'Sprinter Van',
    badge: 'Luxury Sprinter',
    capacity: 'Up to 14 passengers',
    luggage: '10+ bags',
    desc: 'Mercedes-Benz Sprinter for large groups, corporate events, airport shuttles, and multi-stop team travel across the tri-state area.',
    driver: 'TLC Licensed · Professional Driver · Event Coordination',
    alt: 'Luxury sprinter van group transport NYC chauffeur service',
    local: '/fleet-sprinter-executive.png',
    fallback: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  },
];

const HERO_IMAGE = '/hero.jpg';

const faqs = [
  {
    q: 'Which airports does Eagle Eye Chauffeur serve in NYC?',
    a: 'We serve all four major New York airports: JFK (John F. Kennedy), LGA (LaGuardia), EWR (Newark Liberty), and HPN (Westchester County Airport). Private terminals and Teterboro (TEB) are available on request.',
  },
  {
    q: 'Do you track flights for airport pickups?',
    a: 'Yes — we monitor every flight in real time. If your plane is delayed or arrives early, your driver adjusts automatically at no extra charge. You will never be left waiting at the curb.',
  },
  {
    q: 'What is included in the flat-rate price?',
    a: 'Your quoted price includes the ride, tolls, and meet-and-greet service. No surge pricing, no hidden fees. Gratuity is optional and appreciated. Your final invoice is always transparent before you pay.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend at least 24 hours for standard rides. For corporate events, weddings, or group travel, 48–72 hours is preferred. Last-minute bookings are accepted based on availability — contact us directly for urgent requests.',
  },
  {
    q: 'What areas do you serve beyond Manhattan?',
    a: 'We cover all five NYC boroughs (Manhattan, Brooklyn, Queens, the Bronx, Staten Island), Long Island (Nassau & Suffolk Counties), Westchester, New Jersey, Connecticut, the Hamptons, and upstate New York. If you are unsure, just ask.',
  },
  {
    q: 'Can I book a black car for someone else — a client or guest?',
    a: 'Absolutely. Book a ride for a client, family member, or VIP guest. Provide the passenger name and flight details and we will meet them at arrivals with a name sign and deliver the same premium experience.',
  },
  {
    q: 'Do you offer corporate accounts and regular billing?',
    a: 'Yes. We work with executives, corporate travel managers, and executive assistants on ongoing accounts with consolidated invoicing. Contact us to set up a corporate account.',
  },
  {
    q: 'What vehicles are available for large groups?',
    a: 'Our Business Class and First Class SUVs accommodate up to 6 passengers with luggage. For larger groups or multi-vehicle events, contact us for a custom quote and coordination plan.',
  },
  {
    q: 'What is the difference between a black car service and a chauffeur service?',
    a: 'A black car service and a chauffeur service are closely related. Black car service refers to the vehicle category — a luxury sedan or SUV, typically black. Chauffeur service emphasizes the professional driver experience: a uniformed, background-checked chauffeur who handles luggage, opens doors, and provides a premium experience. Eagle Eye offers both — a luxury black car with a professional executive chauffeur on every booking.',
  },
  {
    q: 'Do you offer hourly chauffeur service in NYC?',
    a: 'Yes. Hourly chauffeur hire is available for half-day and full-day bookings — ideal for executives with multiple stops, roadshows, corporate events, or clients who want a dedicated driver available throughout the day. Book by the hour with a professional chauffeur and a luxury vehicle of your choice.',
  },
];

const testimonials = [
  {
    quote: 'Impeccable service every time. The team is professional, discreet, and the vehicles are always spotless. My go-to for every business trip out of JFK.',
    author: 'James R.',
    role: 'Corporate Executive, Midtown Manhattan',
  },
  {
    quote: 'Used Eagle Eye for our entire wedding day — on time, elegant, and completely stress-free. Our guests were blown away. Could not recommend more highly.',
    author: 'Sarah & Michael',
    role: 'Wedding Clients, Long Island',
  },
  {
    quote: 'Best airport transfer I\'ve had in New York. Flight was delayed two hours — they tracked it and the driver was right there when I landed. No calls, no confusion.',
    author: 'David L.',
    role: 'Frequent Traveler, EWR to Manhattan',
  },
];

export default function HomePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <SpeakableJsonLd cssSelectors={['h1', '.speakable-intro', '.speakable-service']} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-black text-brand-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Luxury black car chauffeur service in New York City"
            fill
            className="object-cover opacity-45"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver text-sm font-medium tracking-widest uppercase mb-4">New York City · 24/7 Service</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            <span className="block text-brand-white">NYC</span>
            <AnimatedHeadline />
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-silver max-w-2xl mx-auto leading-relaxed">
            Professional black car and chauffeur service across New York City. JFK, LGA, EWR &amp; HPN airport transfers. Executive chauffeur hire, corporate car service &amp; hourly. Flat rates — no surge pricing, ever.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-semibold hover:bg-brand-offwhite transition-colors text-base"
            >
              Book Your Ride
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="bg-brand-charcoal text-brand-white py-5" aria-label="Service highlights">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: '4 Airports', label: 'JFK · LGA · EWR · HPN' },
              { stat: '24/7', label: 'Always Available' },
              { stat: '5★ Rated', label: 'Google Reviews' },
              { stat: 'TLC Licensed', label: 'Certified & Insured' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="font-serif text-2xl font-semibold text-brand-white">{item.stat}</div>
                <div className="text-brand-silver text-xs mt-1 tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-grey text-xs font-medium tracking-widest uppercase text-center mb-3">What We Offer</p>
          <h2 id="services-heading" className="font-serif text-3xl lg:text-4xl text-brand-black text-center mb-3">
            Black Car &amp; Chauffeur Services
          </h2>
          <p className="text-brand-grey text-center max-w-2xl mx-auto mb-14">
            Professional chauffeurs, luxury vehicles, and seamless service — across NYC and beyond.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Chauffeur Service',
                desc: 'Professional, background-checked chauffeurs for door-to-door transfers across all five NYC boroughs, Long Island, NJ, and CT.',
                href: '/services/chauffeur-service',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                title: 'Airport Car Service',
                desc: 'Seamless airport transfers to JFK, LGA, EWR & HPN with real-time flight tracking, meet-and-greet, and flat rates. No surge pricing.',
                href: '/services/airport',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
              },
              {
                title: 'Long-Distance Car Service',
                desc: 'Comfortable long-distance travel from NYC to the Hamptons, Boston, Philadelphia, Washington D.C., and beyond. Flat rates, no surprises.',
                href: '/services/long-distance',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
              },
              {
                title: 'Hourly Chauffeur Service',
                desc: 'Flexible private chauffeur service tailored to your schedule. Book by the hour for meetings, events, roadshows, or a full day of travel.',
                href: '/services/hourly',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Corporate Car Service',
                desc: 'Executive transportation solutions for businesses, roadshows, investor tours, and corporate accounts. Discreet, punctual, and professional.',
                href: '/services/corporate',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: 'Limousine Service',
                desc: 'Premium NYC limousine service for special occasions, galas, weddings, and VIP nights out. Arrive in elegance — limo and luxury sedan available.',
                href: '/services/limousine-service',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
              {
                title: 'Sprinter Van Service',
                desc: 'Luxury group transportation for up to 14 passengers. Corporate shuttles, conference transfers, airport groups, and event coordination across NYC.',
                href: '/services/sprinter-van-service',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17H5a2 2 0 01-2-2V7a2 2 0 012-2h11l4 4v6a2 2 0 01-2 2h-1m-6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                ),
              },
              {
                title: 'Wedding Car Service',
                desc: 'Arrive in style on your most important day. Weddings, proms, anniversaries, and milestone celebrations with coordinated luxury vehicle logistics.',
                href: '/services/wedding',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col bg-brand-white border border-brand-light p-6 hover:border-brand-dark hover:shadow-sm transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-brand-offwhite flex items-center justify-center text-brand-charcoal mb-5 group-hover:bg-brand-black group-hover:text-brand-white transition-colors duration-200">
                  {s.icon}
                </div>
                <h3 className="font-serif text-lg text-brand-black group-hover:text-brand-charcoal mb-2">
                  {s.title}
                </h3>
                <p className="text-brand-grey text-sm leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-5 text-xs font-medium tracking-widest uppercase text-brand-black group-hover:tracking-wider transition-all duration-200">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="font-medium text-brand-black hover:underline text-sm">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FLEET ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-offwhite" aria-labelledby="fleet-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-grey text-xs font-medium tracking-widest uppercase text-center mb-3">The Eagle Eye Fleet</p>
          <h2 id="fleet-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-3">
            Luxury Black Cars, SUVs &amp; Sprinter Vans
          </h2>
          <p className="text-brand-grey text-center max-w-2xl mx-auto mb-12">
            Every vehicle is late-model, immaculately maintained, and paired with a TLC-licensed professional chauffeur — uniformed, background-checked, and trained to executive standards.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleet.map((v) => (
              <Link
                key={v.title}
                href="/fleet"
                className="group block bg-brand-white border border-brand-light overflow-hidden hover:border-brand-dark transition-colors"
              >
                <div className="aspect-[16/9] relative">
                  <SafeFleetImage
                    localSrc={v.local}
                    fallbackSrc={v.fallback}
                    alt={v.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-brand-black text-brand-white text-xs font-medium px-2 py-1">
                    {v.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-brand-black group-hover:underline mb-1">
                    {v.title}
                  </h3>
                  <div className="flex gap-4 text-xs text-brand-silver mb-3">
                    <span>👤 {v.capacity}</span>
                    <span>🧳 {v.luggage}</span>
                  </div>
                  <p className="text-brand-grey text-xs leading-relaxed mb-3">{v.desc}</p>
                  <div className="border-t border-brand-light pt-3">
                    <p className="text-xs text-brand-charcoal font-medium">{v.driver}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/fleet" className="font-medium text-brand-black hover:underline text-sm">
              View full fleet details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ───────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-brand-offwhite" aria-labelledby="routes-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="routes-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            Popular NYC Black Car Routes
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Flat-rate black car service on every route — no surge pricing. Click any route for details and to get a quote.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { route: 'JFK Airport → Manhattan', href: '/services/routes/jfk-to-manhattan-black-car-service' },
              { route: 'Manhattan → JFK Airport', href: '/services/routes/manhattan-to-jfk-black-car-service' },
              { route: 'LGA Airport → Manhattan', href: '/services/routes/lga-to-manhattan-black-car-service' },
              { route: 'Manhattan → LGA Airport', href: '/services/routes/manhattan-to-lga-black-car-service' },
              { route: 'Newark Airport → Manhattan', href: '/services/routes/ewr-to-manhattan-black-car-service' },
              { route: 'Manhattan → Newark Airport', href: '/services/routes/manhattan-to-ewr-black-car-service' },
              { route: 'Brooklyn → JFK Airport', href: '/services/routes/brooklyn-to-jfk-black-car-service' },
              { route: 'Queens → JFK Airport', href: '/services/routes/queens-to-jfk-black-car-service' },
              { route: 'JFK Airport → Long Island', href: '/services/routes/jfk-to-long-island-car-service' },
              { route: 'Manhattan → Hamptons', href: '/services/routes/manhattan-to-hamptons-car-service' },
              { route: 'NYC → Westchester', href: '/services/routes/nyc-to-westchester-car-service' },
              { route: 'Manhattan → Connecticut', href: '/services/routes/manhattan-to-connecticut-car-service' },
            ].map((r) => (
              <Link
                key={r.route}
                href={r.href}
                className="flex items-center justify-between bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors group"
              >
                <span className="font-medium text-brand-black text-sm">{r.route}</span>
                <span className="text-brand-grey group-hover:text-brand-black transition-colors text-sm">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-brand-grey">
            <Link href="/services/routes" className="underline text-brand-black">View all 35+ routes →</Link>
            <Link href="/book" className="underline text-brand-black">Get instant quote →</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-brand-white" aria-labelledby="areas-quick-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="areas-quick-heading" className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-2">
            Black Car Service Across the NYC Area
          </h2>
          <p className="text-brand-grey text-sm mb-8 max-w-2xl">
            We serve all five boroughs, Long Island, Westchester, New Jersey, and Connecticut — flat-rate pricing everywhere.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
            {[
              { label: 'Manhattan', href: '/services/areas/manhattan' },
              { label: 'Brooklyn', href: '/services/areas/brooklyn' },
              { label: 'Queens', href: '/services/areas/queens' },
              { label: 'Bronx', href: '/services/areas/bronx' },
              { label: 'Staten Island', href: '/services/areas/staten-island' },
              { label: 'Long Island', href: '/services/areas/long-island' },
              { label: 'Westchester', href: '/services/areas/westchester' },
              { label: 'New Jersey', href: '/services/areas/new-jersey' },
              { label: 'Connecticut', href: '/services/areas/connecticut' },
              { label: 'Hamptons', href: '/services/areas/hamptons' },
              { label: 'Nassau County', href: '/services/areas/nassau-county' },
              { label: 'All Areas →', href: '/services/areas' },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="bg-brand-offwhite border border-brand-light px-4 py-3 text-brand-black hover:border-brand-dark hover:bg-brand-white transition-colors text-center font-medium"
              >
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="trust-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white text-center mb-3">
            Why Choose Eagle Eye Chauffeur?
          </h2>
          <p className="text-brand-silver text-center max-w-2xl mx-auto mb-14">
            We set the standard for professional black car service in New York City — trusted by executives, frequent travelers, and families across all five boroughs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                title: 'TLC Licensed & Fully Insured',
                desc: 'Every vehicle and driver is TLC-licensed and fully insured. We operate as a professional black car service under NYC regulations.',
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: '24/7 Availability',
                desc: 'Pre-dawn flights, late-night arrivals, weekend events — we operate around the clock, 365 days a year. No surcharges for early mornings.',
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
                title: 'Real-Time Flight Tracking',
                desc: 'We monitor every flight live. Delays, early arrivals, gate changes — your driver adjusts. Zero extra charges for tracked delays.',
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                title: 'Professional Chauffeurs',
                desc: 'Background-checked, professionally trained drivers. Discreet, punctual, and knowledgeable about NYC routes. Confirmed the evening before your trip.',
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>,
                title: 'No Surge Pricing — Ever',
                desc: 'Your price is locked at booking. Rain, rush hour, major events, holidays — the rate you see is the rate you pay. Always.',
              },
              {
                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
                title: 'Meet & Greet + 24/7 Support',
                desc: 'Your driver waits at arrivals with a name sign and helps with luggage. Reach us anytime by call or WhatsApp — before, during, or after your ride.',
              },
            ].map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 mt-1 text-brand-silver">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-brand-white mb-1">{f.title}</h3>
                  <p className="text-brand-silver text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORPORATE SECTION ────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-black" aria-labelledby="corporate-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — copy */}
            <div>
              <p className="text-brand-silver text-xs font-medium tracking-widest uppercase mb-4">Corporate &amp; Business</p>
              <h2 id="corporate-heading" className="font-serif text-3xl lg:text-4xl text-brand-white mb-6 leading-snug">
                Corporate Car Service &amp; Executive Chauffeur Hire
              </h2>
              <div className="w-12 h-px bg-brand-silver mb-6" />
              <p className="text-brand-silver leading-relaxed mb-8">
                From single executive chauffeur transfers to multi-vehicle roadshows and board meeting logistics, Eagle Eye Chauffeur delivers corporate car service and professional chauffeur hire with discretion, punctuality, and a consistent premium standard — every trip, every time.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Corporate accounts with consolidated monthly invoicing',
                  'Dedicated driver relationships for recurring clients',
                  'Multi-vehicle coordination for roadshows and events',
                  'Executive assistants and travel managers — we handle the details',
                  'Strict confidentiality and professional conduct',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-silver">
                    <svg className="w-4 h-4 shrink-0 mt-0.5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/services/corporate" className="inline-flex items-center justify-center px-6 py-3 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-sm">
                  Corporate Services
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-brand-white/30 text-brand-white font-medium hover:border-brand-white/70 transition-colors text-sm">
                  Set Up an Account
                </Link>
              </div>
            </div>

            {/* Right — service cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  label: 'Roadshows & Investor Tours',
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                },
                {
                  label: 'Board Meeting Transfers',
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                },
                {
                  label: 'Client & VIP Airport Pickups',
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
                },
                {
                  label: 'Executive Day Drivers',
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                },
                {
                  label: 'Conference & Event Shuttles',
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                },
                {
                  label: 'Corporate Account Billing',
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                },
              ].map((item) => (
                <div key={item.label} className="border border-brand-white/10 p-5 hover:border-brand-white/30 transition-colors group">
                  <div className="text-brand-silver mb-3 group-hover:text-brand-white transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-brand-white text-sm font-medium leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-brand-offwhite" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="areas-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-3">
            Service Areas — NYC &amp; Beyond
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Eagle Eye Chauffeur serves New York City and the entire surrounding region. Click your area for dedicated service information.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Manhattan', href: '/services/areas/manhattan', sub: 'All neighborhoods, 24/7' },
              { label: 'Brooklyn', href: '/services/areas/brooklyn', sub: 'Williamsburg, DUMBO, Park Slope' },
              { label: 'Queens', href: '/services/areas/queens', sub: 'LIC, Astoria, Flushing' },
              { label: 'The Bronx', href: '/services/areas/bronx', sub: 'Riverdale, Fordham, Pelham Bay' },
              { label: 'Staten Island', href: '/services/areas/staten-island', sub: 'St. George, Tottenville' },
              { label: 'Long Island', href: '/services/areas/long-island', sub: 'Nassau & Suffolk Counties' },
              { label: 'Westchester', href: '/services/areas/westchester', sub: 'White Plains, Yonkers, Scarsdale' },
              { label: 'New Jersey', href: '/services/areas/new-jersey', sub: 'Hoboken, Jersey City, Newark' },
              { label: 'Connecticut', href: '/services/areas/connecticut', sub: 'Greenwich, Stamford, Hartford' },
              { label: 'The Hamptons', href: '/services/areas/hamptons', sub: 'East Hampton, Southampton' },
              { label: 'JFK Airport', href: '/services/airport/jfk', sub: 'All terminals, 24/7 service' },
              { label: 'LaGuardia (LGA)', href: '/services/airport/lga', sub: 'Terminals B, C & D' },
              { label: 'Newark (EWR)', href: '/services/airport/ewr', sub: 'Terminals A, B & C, tolls included' },
              { label: 'HPN Airport', href: '/services/airport/hpn', sub: 'Westchester County Airport' },
              { label: 'Nassau County', href: '/services/areas/nassau-county', sub: 'Garden City, Great Neck' },
              { label: 'Suffolk County', href: '/services/areas/suffolk-county', sub: 'Huntington, Babylon, Brentwood' },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="block bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors group"
              >
                <div className="font-semibold text-brand-black group-hover:underline text-sm">{area.label}</div>
                <div className="text-brand-grey text-xs mt-1">{area.sub}</div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services/areas" className="font-medium text-brand-black hover:underline text-sm">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-white" aria-labelledby="how-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Book Online or WhatsApp', body: 'Enter your pickup, destination, and trip date. Get an instant flat-rate quote — no account needed.' },
              { step: '2', title: 'Receive Confirmation', body: 'Your booking is confirmed immediately. Driver details are sent to you the evening before your trip.' },
              { step: '3', title: 'We Track Your Flight', body: 'For airport rides, we monitor your flight live. Delays or early arrivals — your driver adapts automatically.' },
              { step: '4', title: 'Enjoy a Premium Ride', body: 'Luxury vehicle, professional chauffeur, door-to-door service. Meet-and-greet at arrivals. Luggage handled.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-brand-black text-brand-white flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-semibold text-brand-black mb-2">{item.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
              Book Your Ride Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ──────────────────────────── */}
      <section className="py-16 lg:py-20 bg-brand-white" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="industries-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-3">
            Industries We Serve
          </h2>
          <p className="text-brand-grey text-center max-w-2xl mx-auto mb-10">
            Eagle Eye Chauffeur is the preferred black car service for professionals across New York&apos;s leading industries.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Finance &amp; Investment Banking',
                desc: 'Roadshows, investor meetings, airport transfers and daily executive travel for Wall Street firms.',
              },
              {
                title: 'Law Firms',
                desc: 'Depositions, client meetings, courthouse transfers and partner-level discretion across Manhattan.',
              },
              {
                title: 'Management Consulting',
                desc: 'Multi-stop client visits, office-to-airport, and hourly hire for consulting teams in NYC.',
              },
              {
                title: 'Entertainment &amp; Media',
                desc: 'Studio arrivals, set transfers, premiere nights and celebrity-level discretion guaranteed.',
              },
              {
                title: 'Healthcare &amp; Pharma',
                desc: 'Executive travel across the NYC-NJ pharma corridor — Princeton, Parsippany, Morristown.',
              },
              {
                title: 'Real Estate',
                desc: 'Client site tours, closing-day transfers and high-net-worth residential clients across the tri-state area.',
              },
              {
                title: 'Technology',
                desc: 'Hudson Yards, Midtown, and downtown NYC tech offices — executive and team travel, 24/7.',
              },
              {
                title: 'Private Equity &amp; Hedge Funds',
                desc: 'Greenwich, Midtown, and FiDi fund managers — TEB private aviation and Manhattan transfers.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-light p-5">
                <p
                  className="font-semibold text-brand-black text-sm"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-xs text-brand-grey mt-1 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/corporate-accounts" className="text-sm font-medium text-brand-black underline hover:no-underline">
              Set up a corporate account →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-offwhite" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-3">
            What Our Clients Say
          </h2>
          <p className="text-brand-grey text-center mb-12">5-star reviews from executives, travelers, and families across New York.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-brand-white p-8 border border-brand-light">
                <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-dark italic mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <cite className="not-italic font-semibold text-brand-black">{t.author}</cite>
                  <span className="text-brand-grey text-sm block">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brand-offwhite border border-brand-light p-6">
                <dt className="font-semibold text-brand-black mb-2">{faq.q}</dt>
                <dd className="text-brand-grey text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA + CONTACT ────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Ready to Book Your NYC Black Car?
          </h2>
          <p className="text-brand-silver mb-8 leading-relaxed">
            Get an instant quote in seconds. Professional chauffeur confirmed. Flat rate — no surge, no surprises. Available 24/7 across New York City.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-semibold hover:bg-brand-offwhite transition-colors"
            >
              Book Now — Instant Quote
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
          </div>
          <div className="pt-8 border-t border-brand-dark flex flex-wrap justify-center gap-x-8 gap-y-2 text-brand-silver text-sm">
            <a href={`tel:${CONTACT_PHONE_E164}`} className="hover:text-brand-white transition-colors">{CONTACT_PHONE_DISPLAY}</a>
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="hover:text-brand-white transition-colors">{CONTACT_EMAIL_BOOKINGS}</a>
          </div>
        </div>
      </section>
    </>
  );
}
