import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SafeFleetImage } from '@/components/SafeFleetImage';
import { getSiteUrl } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute:
      'NYC Luxury Fleet | Black Cars, SUVs & Sprinter Vans | Eagle Eye',
  },
  description:
    "Eagle Eye Chauffeur's NYC fleet — Cadillac, Mercedes & Lincoln sedans, Suburban, Escalade & Sprinter vans. Professional chauffeurs. Book now.",
  alternates: { canonical: `${getSiteUrl()}/fleet` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/fleet`,
    title:
      'NYC Luxury Fleet | Black Cars, SUVs & Sprinter Vans | Eagle Eye',
    description:
      "Eagle Eye Chauffeur's luxury fleet — Business Class Cadillac & Mercedes Sedans, Chevrolet Suburban & GMC Yukon XL, First Class Cadillac Escalade & Lincoln Navigator, Mercedes-Benz S-Class & BMW 7 Series. Professional chauffeurs. Book NYC's finest black car service.",
    images: [{ url: `${getSiteUrl()}/og-image.jpg`, width: 1200, height: 630, alt: 'Eagle Eye Chauffeur NYC luxury fleet — black cars, SUVs & Sprinter vans' }],
  },
};

const vehicles = [
  {
    name: 'Business Class Sedan',
    subtitle: 'Cadillac CT6',
    category: 'Sedan',
    capacity: '3 passengers',
    luggage: '3 bags',
    local: '/fleet-business-sedan.png',
    fallback: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    features: ['Leather interior', 'Climate control', 'USB charging', 'Premium sound'],
    description:
      'The Cadillac CT6 delivers a smooth, confident ride with an upscale cabin. Ideal for business travel and point-to-point transfers—discreet, comfortable, and professional.',
    bestFor: 'Corporate airport transfers, solo executive travel',
  },
  {
    name: 'Business Class Sedan',
    subtitle: 'Mercedes-Benz E-Class',
    category: 'Sedan',
    capacity: '3 passengers',
    luggage: '3 bags',
    local: '/fleet-business-sedan-eclass.png',
    fallback: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    features: ['Leather interior', 'Climate control', 'USB charging', 'Premium sound'],
    description:
      'The Mercedes-Benz E-Class blends classic Mercedes refinement with a comfortable, business-ready cabin. A dependable choice for everyday corporate travel.',
    bestFor: 'Corporate airport transfers, solo executive travel',
  },
  {
    name: 'Business Class Sedan',
    subtitle: 'Cadillac XT6',
    category: 'Sedan',
    capacity: '3 passengers',
    luggage: '3 bags',
    local: '/fleet-business-sedan-xt6.png',
    fallback: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    features: ['Leather interior', 'Climate control', 'USB charging', 'Premium sound'],
    description:
      'The Cadillac XT6 pairs a commanding presence with a comfortable, well-appointed cabin. A versatile choice for business travel with a bit more road presence.',
    bestFor: 'Corporate airport transfers, solo executive travel',
  },
  {
    name: 'Business Class Sedan',
    subtitle: 'Cadillac Lyriq',
    category: 'Sedan',
    capacity: '3 passengers',
    luggage: '3 bags',
    local: '/fleet-business-sedan-lyriq.png',
    fallback: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    features: ['Leather interior', 'Climate control', 'USB charging', 'Premium sound'],
    description:
      'The Cadillac Lyriq brings a quiet, all-electric ride with a modern, tech-forward cabin. A refined option for clients who prefer a sustainable choice.',
    bestFor: 'Corporate airport transfers, solo executive travel',
  },
  {
    name: 'Business Class SUV',
    subtitle: 'Chevrolet Suburban',
    category: 'SUV',
    capacity: '5–7 passengers',
    luggage: '5+ bags',
    local: '/fleet-business-suv.jpg',
    fallback: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    features: ['Spacious cabin', 'Premium sound', 'Rear climate', 'All-wheel drive'],
    description:
      'The Chevrolet Suburban offers extra space and presence for executives and small groups. Perfect for airport runs and corporate travel.',
    bestFor: 'Group airport runs, family transfers, corporate groups',
  },
  {
    name: 'Business Class SUV',
    subtitle: 'GMC Yukon XL',
    category: 'SUV',
    capacity: '5–7 passengers',
    luggage: '5+ bags',
    local: '/fleet-business-suv-yukon.png',
    fallback: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    features: ['Spacious cabin', 'Premium sound', 'Rear climate', 'All-wheel drive'],
    description:
      'The GMC Yukon XL offers a bold, upscale interior with generous cargo room. A great alternative for executives and small groups.',
    bestFor: 'Group airport runs, family transfers, corporate groups',
  },
  {
    name: 'First Class SUV',
    subtitle: 'Cadillac Escalade',
    category: 'SUV',
    capacity: '5–7 passengers',
    luggage: '6+ bags',
    local: '/fleet-first-suv.png',
    fallback: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    features: ['Full-size luxury', 'Premium interior', 'Chrome accents', 'Tinted privacy glass'],
    description:
      'The Cadillac Escalade defines first-class SUV travel. Sophisticated, spacious, and built for executives who expect the best.',
    bestFor: 'High-profile arrivals, VIP group travel, executive presence',
  },
  {
    name: 'First Class SUV',
    subtitle: 'Lincoln Navigator',
    category: 'SUV',
    capacity: '5–7 passengers',
    luggage: '6+ bags',
    local: '/fleet-first-suv-navigator.png',
    fallback: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    features: ['Full-size luxury', 'Premium interior', 'Chrome accents', 'Tinted privacy glass'],
    description:
      'The Lincoln Navigator delivers a commanding presence with a serene, tech-forward cabin. A refined choice for executives who expect the best.',
    bestFor: 'High-profile arrivals, VIP group travel, executive presence',
  },
  {
    name: 'First Class Sedan',
    subtitle: 'Mercedes-Benz S-Class',
    category: 'Sedan',
    capacity: '3 passengers',
    luggage: '3 bags',
    local: '/fleet-first-sedan.png',
    fallback: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
    features: ['Executive rear seating', 'Premium interior', 'Ambient lighting', 'Refreshments'],
    description:
      'The Mercedes-Benz S-Class sets the standard for luxury sedans. Maximum comfort and refinement for high-profile and corporate travel.',
    bestFor: 'C-suite travel, roadshows, VIP client transport',
  },
  {
    name: 'First Class Sedan',
    subtitle: 'BMW 7 Series',
    category: 'Sedan',
    capacity: '3 passengers',
    luggage: '3 bags',
    local: '/fleet-first-sedan-bmw.png',
    fallback: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    features: ['Executive rear seating', 'Premium interior', 'Ambient lighting', 'Refreshments'],
    description:
      'The BMW 7 Series pairs commanding presence with a refined, tech-forward cabin. An equally exceptional choice for executives who value modern luxury.',
    bestFor: 'C-suite travel, roadshows, VIP client transport',
  },
];

const vehicleGroups = Object.entries(
  vehicles.reduce<Record<string, typeof vehicles>>((acc, v) => {
    (acc[v.name] ??= []).push(v);
    return acc;
  }, {})
);

const sprinters = [
  {
    name: 'Executive Sprinter',
    capacity: 'Up to 14 passengers',
    luggage: '14 standard bags',
    rate: '$175/hr',
    local: '/fleet-sprinter-executive.png',
    description:
      'Our most versatile group vehicle — forward-facing seating and generous luggage room make it the go-to choice for corporate groups, conference shuttles, and roadshows.',
    bestFor: 'Corporate groups, conference shuttles, roadshows',
  },
  {
    name: 'Limo Sprinter',
    capacity: 'Up to 18 passengers',
    luggage: 'Limited luggage space',
    rate: '$200/hr',
    local: '/fleet-sprinter-limo.png',
    description:
      'A limo-style lounge interior with bar seating, built for the party, not the packing list — the pick for nights out, bachelor/bachelorette parties, and celebrations.',
    bestFor: 'Nightlife, bachelor/bachelorette parties, celebrations',
  },
  {
    name: 'Jet Sprinter',
    capacity: 'Up to 13 passengers',
    luggage: 'Limited luggage space',
    rate: '$250/hr',
    local: '/fleet-sprinter-jet.png',
    description:
      'Our most exclusive ride — a private-jet-inspired lounge cabin for clients who want the ultimate in privacy and presence for VIP travel and special occasions.',
    bestFor: 'VIP travel, celebrity clients, special occasions',
  },
];

const selectionGuide = [
  {
    title: 'Solo Executive or Couple',
    recommendation: 'Business Class Sedan',
    vehicle: 'Cadillac CT6, E-Class, XT6 or Lyriq',
    icon: '👤',
    forList: [
      'Corporate rides & airport transfers',
      '1–2 passengers',
      'Up to 3 bags',
      'Discreet, professional service',
    ],
  },
  {
    title: 'Small Group or Family',
    recommendation: 'Business Class SUV',
    vehicle: 'Chevrolet Suburban or GMC Yukon XL',
    icon: '👨‍👩‍👧‍👦',
    forList: [
      '3–6 passengers',
      'Large luggage loads',
      'Group airport runs',
      'Spacious & comfortable',
    ],
  },
  {
    title: 'VIP Group Travel',
    recommendation: 'First Class SUV',
    vehicle: 'Cadillac Escalade or Lincoln Navigator',
    icon: '⭐',
    forList: [
      'Executive presence required',
      '3–6 passengers',
      'High-profile arrivals',
      'Premium SUV experience',
    ],
  },
  {
    title: 'Maximum Luxury, Solo or Couple',
    recommendation: 'First Class Sedan',
    vehicle: 'Mercedes-Benz S-Class or BMW 7 Series',
    icon: '💎',
    forList: [
      'C-suite & executive travel',
      'Roadshows & investor meetings',
      'VIP client transport',
      'Finest sedan available',
    ],
  },
];

const standardAmenities = [
  'TLC-licensed & commercially insured',
  'Professionally cleaned before every trip',
  'Climate-controlled interior',
  'USB charging ports',
  'Wi-Fi available on request',
  'Bottled water provided',
  'Complimentary luggage assistance',
];

const faqs = [
  {
    question: 'What is the difference between Business Class and First Class?',
    answer:
      'Business Class delivers professional luxury comfort at a high standard — ideal for corporate travel and airport transfers. First Class adds premium vehicle brands (Mercedes-Benz S-Class, BMW 7 Series, Cadillac Escalade, Lincoln Navigator) and an elevated interior quality for VIP and executive clients who require the very best.',
  },
  {
    question: 'How many passengers fit in each vehicle?',
    answer:
      'Sedans comfortably hold up to 3 passengers with 3 bags. SUVs accommodate 5 to 7 passengers with 5 or more bags. If you have an unusually large group or oversized luggage, contact us before booking and we will advise the right vehicle.',
  },
  {
    question: 'Can I request a specific vehicle?',
    answer:
      'Yes. You select your vehicle class when booking. Subject to availability — we recommend booking at least 24 hours in advance to guarantee your preferred class, especially for airport pickups and special events.',
  },
  {
    question: 'Are your vehicles available 24/7?',
    answer:
      'Yes. All vehicle classes are available around the clock, 365 days a year — including early morning airport runs, late-night pickups, and holiday travel. Our dispatch team monitors every trip in real time.',
  },
  {
    question: 'Do your vehicles have car seats for children?',
    answer:
      'Yes. Simply request a child seat when booking and it will be provided at no extra charge. We want every passenger — regardless of age — to travel safely and comfortably.',
  },
];

export default function FleetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Fleet', url: `${getSiteUrl()}/fleet` },
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative bg-brand-black text-brand-white overflow-hidden">
        <div className="relative h-[62vh] min-h-[460px] max-h-[720px] w-full">
          <Image
            src="/fleet-hero.jpg"
            alt="Eagle Eye Chauffeur's full luxury fleet — Sprinter vans, Cadillac Escalades, and Mercedes-Benz sedans lined up against the New York City skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/55 via-brand-black/5 to-transparent" />

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 w-full">
              <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4">
                Our Fleet
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-brand-white leading-tight max-w-3xl text-balance">
                The Eagle Eye Collection
              </h1>
              <p className="mt-6 text-lg text-brand-silver max-w-2xl leading-relaxed">
                Executive sedans, premium SUVs, and VIP Sprinter vans — every vehicle
                professionally maintained, TLC-compliant, and paired with a trained chauffeur.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-silver transition-colors"
                >
                  Book Now
                </Link>
                <a
                  href="#fleet"
                  className="inline-flex items-center justify-center px-8 py-4 border border-brand-white/40 text-brand-white font-medium backdrop-blur-sm hover:border-brand-white/70 transition-colors"
                >
                  View Vehicles
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-brand-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-white/10">
              {[
                { stat: '4 Vehicle Classes', sub: 'Sedan & SUV options' },
                { stat: 'Spotless & Inspected', sub: 'Before every trip' },
                { stat: 'TLC Compliant', sub: 'Fully licensed & insured' },
                { stat: 'Professional Chauffeurs', sub: 'Trained & vetted drivers' },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-brand-black px-6 py-8 text-center"
                >
                  <p className="font-serif text-xl font-semibold text-brand-white">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-brand-silver">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEET GALLERY ── */}
      <section id="fleet" className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              The Fleet
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              Choose Your Ride
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              Four distinct vehicle classes — all maintained to an uncompromising standard
              and driven by Eagle Eye&apos;s professional chauffeurs.
            </p>
          </div>

          {vehicleGroups.map(([groupName, group]) => (
            <div key={groupName} className="mb-14 last:mb-0">
              <div className="flex items-baseline gap-6 mb-5">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-black shrink-0">
                  {groupName}
                </h3>
                <div className="flex-1 h-px bg-brand-light" />
                <span className="text-xs text-brand-silver uppercase tracking-wide shrink-0">
                  {group.length} {group.length === 1 ? 'option' : 'options'}
                </span>
              </div>

              <div className="border border-brand-light divide-y divide-brand-light">
                {group.map((v, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 hover:bg-brand-offwhite transition-colors"
                  >
                    <div className="relative w-full sm:w-32 aspect-[3/2] shrink-0 bg-brand-offwhite">
                      <SafeFleetImage
                        localSrc={v.local}
                        fallbackSrc={v.fallback}
                        alt={`${v.subtitle} — ${v.name} | Eagle Eye Chauffeur NYC`}
                        className="absolute inset-0 w-full h-full object-contain p-2"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-lg font-semibold text-brand-black">
                        {v.subtitle}
                      </p>
                      <p className="text-xs font-medium text-brand-silver uppercase tracking-wide mt-0.5">
                        {v.name}
                      </p>
                      <p className="mt-2 text-sm text-brand-grey hidden sm:block truncate">
                        {v.bestFor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-10 shrink-0">
                      <p className="text-sm text-brand-grey whitespace-nowrap">
                        <span className="text-brand-black font-medium">{v.capacity}</span>
                      </p>
                      <Link
                        href="/book"
                        className="text-sm font-medium text-brand-black underline underline-offset-4 hover:text-brand-charcoal transition-colors whitespace-nowrap"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPRINTER VANS ── */}
      <section className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              Group & Specialty Travel
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              Sprinter Vans
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              For groups, nights out, and clients who want something beyond a sedan or SUV —
              three Sprinter builds, each for a different purpose. Priced hourly with a 2-hour
              minimum; contact us for a custom quote.
            </p>
          </div>

          <div className="flex items-baseline gap-6 mb-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-black shrink-0">
              Sprinters
            </h3>
            <div className="flex-1 h-px bg-brand-light" />
            <span className="text-xs text-brand-silver uppercase tracking-wide shrink-0">
              {sprinters.length} options
            </span>
          </div>

          <div className="border border-brand-light divide-y divide-brand-light">
            {sprinters.map((s, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 hover:bg-brand-offwhite transition-colors"
              >
                <div className="relative w-full sm:w-32 aspect-[3/2] shrink-0 bg-brand-offwhite">
                  <SafeFleetImage
                    localSrc={s.local}
                    fallbackSrc={s.local}
                    alt={`${s.name} — Eagle Eye Chauffeur NYC`}
                    className="absolute inset-0 w-full h-full object-contain p-2"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-serif text-lg font-semibold text-brand-black">
                    {s.name}
                  </p>
                  <p className="text-xs font-medium text-brand-silver uppercase tracking-wide mt-0.5">
                    Sprinter · {s.rate}
                  </p>
                  <p className="mt-2 text-sm text-brand-grey hidden sm:block truncate">
                    {s.bestFor}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-10 shrink-0">
                  <p className="text-sm text-brand-grey whitespace-nowrap">
                    <span className="text-brand-black font-medium">{s.capacity}</span>
                  </p>
                  <a
                    href={WHATSAPP_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-black underline underline-offset-4 hover:text-brand-charcoal transition-colors whitespace-nowrap"
                  >
                    Request a Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTION GUIDE ── */}
      <section className="bg-brand-offwhite py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              Vehicle Guide
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              How to Choose Your Vehicle Class
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              Not sure which vehicle fits your trip? Use this quick guide to match your
              passenger count, luggage, and occasion to the right class.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {selectionGuide.map((card) => (
              <div
                key={card.title}
                className="bg-brand-white border border-brand-light p-8 flex flex-col"
              >
                <span className="text-3xl mb-4" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="font-serif text-xl font-semibold text-brand-black">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-silver uppercase tracking-wide">
                  Recommended:{' '}
                  <span className="text-brand-black normal-case tracking-normal font-semibold">
                    {card.recommendation}
                  </span>
                </p>
                <p className="mt-0.5 text-sm text-brand-grey">{card.vehicle}</p>
                <ul className="mt-5 space-y-2">
                  {card.forList.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-grey">
                      <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="mt-6 text-sm font-medium text-brand-black underline underline-offset-4 hover:text-brand-charcoal transition-colors self-start"
                >
                  Book this class →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARD AMENITIES ── */}
      <section className="bg-brand-offwhite py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              Every Vehicle
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              Standard Across Our Entire Fleet
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              Regardless of which class you choose, these amenities and standards come
              with every Eagle Eye booking — no exceptions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {standardAmenities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-brand-white border border-brand-light px-6 py-5"
              >
                <span className="text-brand-black font-bold text-lg shrink-0 mt-0.5" aria-hidden="true">
                  ✓
                </span>
                <p className="text-brand-black font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-brand-grey max-w-xl">
            All Eagle Eye vehicles are TLC-licensed and commercially insured in accordance
            with New York City regulations. Our chauffeurs hold valid TLC licenses and
            undergo ongoing training.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              Fleet Questions Answered
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              Common questions about our vehicles, classes, and booking process.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-brand-light bg-brand-white p-7"
              >
                <h3 className="font-serif text-lg font-semibold text-brand-black">
                  {faq.question}
                </h3>
                <p className="mt-3 text-brand-grey leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-brand-grey text-sm max-w-xl">
            Have a question not covered here?{' '}
            <Link
              href="/contact"
              className="text-brand-black font-medium underline underline-offset-4 hover:text-brand-charcoal transition-colors"
            >
              Contact our team
            </Link>{' '}
            or reach us directly on WhatsApp — we respond promptly.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4">
            Ready to Ride
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-white">
            Ready to Choose Your Vehicle?
          </h2>
          <p className="mt-5 text-lg text-brand-silver max-w-xl mx-auto">
            Book online in minutes or reach us on WhatsApp. Our team is available
            around the clock.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-silver transition-colors w-full sm:w-auto"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-white/30 text-brand-white font-medium hover:border-brand-white/70 transition-colors w-full sm:w-auto"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-white/30 text-brand-white font-medium hover:border-brand-white/70 transition-colors w-full sm:w-auto"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
