import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  WHATSAPP_BOOKING_URL,
  CONTACT_EMAIL_BOOKINGS,
} from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Wedding Car Service NYC | Luxury Bridal Chauffeur',
  description:
    'Wedding car service NYC — luxury black car and chauffeur for the bride, groom, bridal party, and guests. Flat-rate pricing, TLC licensed, available.',
  keywords: [
    'wedding car service NYC',
    'wedding chauffeur New York',
    'bridal car service Manhattan',
    'wedding limo NYC alternative',
    'wedding black car service New York',
    'luxury wedding transportation NYC',
    'wedding party car service NYC',
    'bride chauffeur service New York',
    'wedding day car service Manhattan',
    'wedding transportation Long Island',
  ],
  alternates: { canonical: `${getSiteUrl()}/services/wedding` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/wedding`,
    title: 'Wedding Car Service NYC | Luxury Bridal Chauffeur | Eagle Eye',
    description:
      'Luxury wedding car service in NYC — bride, groom, bridal party, and guest transportation. Flat-rate, TLC licensed, 24/7. Book Eagle Eye Chauffeur.',
  },
};

const packages = [
  {
    name: 'Bride & Groom Transfer',
    desc: 'Point-to-point luxury transfer from getting-ready location to ceremony venue to reception. Your chauffeur is on standby throughout.',
    icon: '💍',
  },
  {
    name: 'Bridal Party Fleet',
    desc: 'Multiple Business Class and First Class SUVs for the full bridal party. Coordinated departure times and matched vehicles.',
    icon: '👰',
  },
  {
    name: 'Guest Shuttle Service',
    desc: 'Reliable transportation for out-of-town guests — hotel to ceremony, ceremony to reception, reception to hotel. Pre-arranged and on-time.',
    icon: '🎊',
  },
  {
    name: 'All-Day Hourly Hire',
    desc: 'A dedicated chauffeur and vehicle on standby for the entire wedding day. Morning preparation through late-night send-off.',
    icon: '⏱',
  },
  {
    name: 'Airport Transfers for Guests',
    desc: 'Meet-and-greet service at JFK, LGA, EWR, and HPN for out-of-state and international guests arriving for the wedding.',
    icon: '✈️',
  },
  {
    name: 'Rehearsal Dinner Transport',
    desc: 'Car service for the evening before — rehearsal dinner transfers, family pickups, and multi-stop evening coordination.',
    icon: '🥂',
  },
];

const reasons = [
  {
    title: 'No Surge Pricing on Your Wedding Day',
    body: 'Your wedding day rate is confirmed at booking and never changes. No last-minute surge, no weather premium. What you agreed to is what you pay.',
  },
  {
    title: 'TLC Licensed — Every Driver',
    body: 'Every Eagle Eye chauffeur holds a valid NYC Taxi & Limousine Commission license and passes a background check. Professional, uniformed, and discreet.',
  },
  {
    title: 'Fleet Coordination for Parties',
    body: 'Multiple vehicles coordinated as a fleet with synced arrival and departure times. Your wedding planner gets a single point of contact for all transport.',
  },
  {
    title: 'Premium Vehicles, Immaculate Condition',
    body: 'Luxury sedans and SUVs — spotless, late-model, and presented to the standard the day demands. Every vehicle is prepared and inspected before wedding-day service.',
  },
  {
    title: 'All NYC Venues Covered',
    body: 'Manhattan rooftops, Brooklyn warehouses, Long Island estates, New Jersey waterfront venues — we know them all and plan pickup/drop-off logistics accordingly.',
  },
  {
    title: 'Dedicated Wedding Coordinator',
    body: 'Your booking includes direct contact with our team for all logistics — timing, multiple stops, last-minute changes, and day-of coordination.',
  },
];

const faqs = [
  {
    q: 'How far in advance should I book wedding car service in NYC?',
    a: 'We recommend booking at least 4–8 weeks in advance for wedding-day service, especially during peak wedding season (May–October). Popular dates in summer and fall fill quickly. The earlier you book, the better the vehicle selection and the more time we have to coordinate logistics with your planner.',
  },
  {
    q: 'Can you handle transportation for the full bridal party?',
    a: 'Yes. We coordinate fleets of multiple vehicles for bridal parties of any size. Business Class SUVs seat 5–6 passengers with luggage. First Class SUVs seat 6–7. For larger parties, we assign multiple matched vehicles with coordinated timing.',
  },
  {
    q: 'Do you serve wedding venues outside Manhattan?',
    a: 'Yes. Eagle Eye Chauffeur serves wedding venues across all five boroughs, Long Island (including the Hamptons and North Fork), Westchester, New Jersey, and Connecticut. We work with venues across the full tri-state area.',
  },
  {
    q: 'Can you coordinate guest transportation from multiple hotels?',
    a: 'Yes. We handle multi-hotel pickup itineraries and coordinate guest shuttles from any number of origins to the ceremony and reception venues. We provide a single point of contact for all guest transport logistics.',
  },
  {
    q: 'What vehicles do you use for wedding service?',
    a: 'We offer Business Class sedans (Lincoln Continental, Cadillac CT6), Business Class SUVs, and First Class SUVs (Cadillac Escalade, Lincoln Navigator). All vehicles are late-model, immaculate, and presented specifically for wedding-day service.',
  },
  {
    q: 'Do you offer hourly hire for the full wedding day?',
    a: 'Yes. Hourly hire assigns a dedicated chauffeur and vehicle to you for the full day — morning preparation, ceremony, reception, and send-off. The driver is on standby throughout and moves with your schedule, not a fixed itinerary.',
  },
  {
    q: 'Can you pick up guests arriving at JFK, LGA, or EWR for the wedding?',
    a: 'Yes. We offer meet-and-greet airport transfers at all four NYC-area airports for out-of-town and international wedding guests. Flight tracking is included — your guest\'s driver adjusts automatically for delays.',
  },
  {
    q: 'How is wedding car service different from a traditional limo?',
    a: 'Eagle Eye Chauffeur provides a premium black car experience — professional chauffeurs, flat-rate pricing, modern luxury vehicles, and a higher standard of service — without the party-bus feel of traditional limos. Our service is designed for discerning clients who want elegance over entertainment.',
  },
];

export default function WeddingCarServicePage() {
  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Services', url: `${siteUrl}/services` },
    { name: 'Wedding Car Service', url: `${siteUrl}/services/wedding` },
  ];

  return (
    <>
      <ServiceJsonLd
        name="Wedding Car Service NYC"
        description="Luxury wedding car service in New York City — bride, groom, bridal party, and guest transportation. TLC licensed chauffeurs, flat-rate pricing, fleet coordination for any wedding size. Serving all NYC boroughs, Long Island, Westchester, and New Jersey."
        areaServed="New York City, NY"
        url={`${siteUrl}/services/wedding`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-4">
            NYC Wedding Transportation · TLC Licensed · Flat-Rate
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Wedding Car Service NYC
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Luxury chauffeur service for your wedding day — bride and groom transfers, bridal party coordination, and guest transportation across New York City and the tri-state area. Flat-rate pricing confirmed at booking, no surprises.
          </p>
          <p className="text-brand-silver text-sm mb-10 max-w-xl">
            Serving Manhattan, Brooklyn, Queens, Long Island, Westchester, New Jersey, and Connecticut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Wedding Transport
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors text-center"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-dark text-brand-silver font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-silver transition-colors text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-brand-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
              Wedding Transportation Packages
            </h2>
            <p className="mt-4 text-brand-grey max-w-xl mx-auto text-sm leading-relaxed">
              From the bride and groom transfer to full guest logistics — we handle every movement of your wedding day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="border border-brand-light bg-brand-offwhite p-7">
                <div className="text-2xl mb-4">{pkg.icon}</div>
                <h3 className="font-semibold text-brand-black mb-3">{pkg.name}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EAGLE EYE */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
              Why NYC Couples Choose Eagle Eye
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{r.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUES SECTION */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-10 text-center">
            Wedding Venues We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { area: 'Manhattan', venues: 'The Plaza, Cipriani, The Rainbow Room, Tribeca Rooftop, The Glasshouses, 620 Loft & Garden' },
              { area: 'Brooklyn', venues: 'Green Building, Liberty Warehouse, Frankies 457, The Foundry LIC, DUMBO loft venues' },
              { area: 'Long Island', venues: 'Oheka Castle, East Wind, Fox Hollow, Inn at New Hyde Park, Hamptons estate venues' },
              { area: 'New Jersey', venues: 'The Madison Hotel, Park Chateau, Shadowbrook, The Grove, Liberty House, Nanina\'s in the Park' },
            ].map((v) => (
              <div key={v.area} className="border border-brand-light bg-brand-offwhite p-5">
                <h3 className="font-semibold text-brand-black mb-2 text-sm">{v.area}</h3>
                <p className="text-brand-grey text-xs leading-relaxed">{v.venues}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-brand-silver text-xs">
            Don't see your venue? We serve all venues across the tri-state area — contact us with your location.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            Wedding Car Service FAQ
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-brand-light pb-8">
                <h3 className="font-semibold text-brand-black mb-3">{faq.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Plan Your Wedding Day Transport
          </h2>
          <p className="text-brand-silver mb-3 leading-relaxed">
            Share your wedding date, venue, and guest count — we'll put together a transport plan.
          </p>
          <p className="text-brand-silver text-sm mb-8">
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-white transition-colors">{CONTACT_EMAIL_BOOKINGS}</a>
            {' · '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">{CONTACT_PHONE_DISPLAY}</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors">
              Book Now
            </Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
