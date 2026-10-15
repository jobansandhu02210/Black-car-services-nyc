import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Teterboro Airport Car Service | Private Jet FBO',
  description:
    'Teterboro Airport (TEB) black car service — FBO meet & greet, private jet transfers, flat rates from Manhattan, NJ & tri-state area. TLC-licensed.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/teb-airport` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/teb-airport` },
  keywords: 'teterboro airport car service, TEB airport car service, teterboro private jet car service, teterboro FBO car service, car service to teterboro airport NJ',
};

const faqs = [
  {
    q: 'Where does my driver meet me at Teterboro Airport?',
    a: 'Your chauffeur meets you inside the FBO lobby — Signature Aviation, Atlantic Aviation, or Meridian, depending on which FBO your aircraft uses. We coordinate directly with you and the FBO in advance so your driver is positioned and waiting when you step off the aircraft. No curbside confusion — lobby meet and greet, every time.',
  },
  {
    q: 'How is TEB different from commercial airports like JFK or EWR?',
    a: 'Teterboro Airport is 100% private aviation — no commercial flights, no TSA lines, no crowded terminals. Every aircraft using TEB is a private jet or charter. Ground transportation is handled through FBO lobbies, not public terminal curbs. Our drivers are experienced with FBO protocol, direct-to-client coordination, and the discreet service that private aviation passengers expect.',
  },
  {
    q: 'Can you accommodate larger groups and heavy luggage from private jets?',
    a: 'Yes. Private jet passengers often travel with substantial luggage — golf equipment, ski bags, oversized cases, or multiple bags per person. Our SUV fleet (Cadillac Escalade and similar) handles large loads comfortably. For larger groups, we coordinate multiple vehicles that arrive together. Specify your group size and luggage count at booking.',
  },
  {
    q: 'Do you serve all FBOs at Teterboro Airport?',
    a: 'Yes — Eagle Eye covers Signature Aviation North, Signature Aviation South, Atlantic Aviation, and Meridian. Your driver is assigned based on your FBO, not a generic pickup zone. We confirm the FBO location with you at booking and coordinate directly so there is no ambiguity on arrival.',
  },
  {
    q: 'How far is Teterboro Airport from Manhattan?',
    a: 'Teterboro is approximately 12 miles from Midtown Manhattan. Drive time is typically 15–25 minutes without traffic via the George Washington Bridge or Lincoln Tunnel corridor. With traffic, allow 25–40 minutes. We schedule departures with appropriate buffer time — your chauffeur will advise based on current conditions.',
  },
  {
    q: 'Can you handle early morning departures from TEB?',
    a: 'Absolutely. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Pre-dawn departures — even 3am or 4am — are fully supported. Private jet schedules do not follow commercial hours, and neither do we. Your driver is confirmed the evening before with vehicle details and a direct contact number.',
  },
];

const fbos = [
  {
    name: 'Signature Aviation North',
    detail: "Signature's northern terminal at TEB — your driver meets you in the FBO lobby. We confirm the exact entrance with you at booking.",
  },
  {
    name: 'Signature Aviation South',
    detail: "Signature's southern facility at TEB. Your chauffeur is positioned in the lobby prior to your aircraft's arrival.",
  },
  {
    name: 'Atlantic Aviation',
    detail: 'Atlantic Aviation at Teterboro — lobby meet and greet. Driver coordinates directly with the FBO when needed.',
  },
  {
    name: 'Meridian',
    detail: 'Meridian FBO at TEB — discreet, professional service. Driver is inside the lobby with a name sign upon your arrival.',
  },
];

const whatsIncluded = [
  'FBO lobby meet & greet — driver inside with name sign, not at curbside',
  'Flat-rate pricing locked at booking — no surge, no itemized extras',
  'Door-to-door service from your origin address to the FBO, or FBO to destination',
  'Luggage assistance — full help with bags at pickup, FBO, and drop-off',
  '30 minutes complimentary wait time at the FBO',
  'Direct coordination with you and the FBO — no guesswork on arrival',
  '24/7 support via phone or WhatsApp throughout your journey',
];

const popularRoutes = [
  { label: 'Midtown Manhattan → TEB', time: '15–25 min' },
  { label: 'Financial District → TEB', time: '20–30 min' },
  { label: 'Upper Manhattan → TEB', time: '15–25 min' },
  { label: 'Hoboken → TEB', time: '10–20 min' },
  { label: 'Jersey City → TEB', time: '10–20 min' },
  { label: 'Westchester → TEB', time: '20–35 min' },
  { label: 'Greenwich, CT → TEB', time: '30–45 min' },
  { label: 'Long Island → TEB', time: '45–75 min' },
];

const benefits = [
  { title: 'FBO-experienced chauffeurs', desc: 'Our drivers understand private aviation protocol — FBO access, discreet lobby wait, and direct client coordination. No learning curve on arrival.' },
  { title: 'Service built for private jet clients', desc: 'Executives, hedge fund managers, and high-profile travelers trust Eagle Eye at TEB because we match the standard that private aviation demands.' },
  { title: 'Flat rate locked at booking', desc: 'Your price is confirmed when you reserve — tolls included. The rate never changes due to traffic, time of day, or demand.' },
  { title: 'All four FBOs covered', desc: 'Signature Aviation (North & South), Atlantic Aviation, and Meridian — full TEB coverage. Your driver is assigned to your specific FBO.' },
  { title: 'Flexible vehicle selection', desc: 'Luxury sedan for solo travelers. Cadillac Escalade for groups or heavy luggage. Multiple vehicles coordinated simultaneously for large parties.' },
  { title: "Pre-confirmed driver the night before", desc: "You receive your chauffeur's name, direct contact, and vehicle details the evening before your trip. No last-minute assignment." },
];

export default function TEBAirportAreaPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Teterboro Airport', url: `${getSiteUrl()}/services/areas/teb-airport` },
        ]}
      />
      <ServiceJsonLd
        name="Teterboro Airport Black Car Service"
        description="Luxury black car service to and from Teterboro Airport (TEB). FBO meet & greet at Signature Aviation, Atlantic Aviation, and Meridian. Flat-rate private jet transfers from Manhattan, New Jersey, and the tri-state area."
        areaServed="Teterboro Airport, Bergen County, New Jersey"
        url={`${getSiteUrl()}/services/areas/teb-airport`}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Teterboro Airport · Private Aviation · Bergen County, NJ</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
            Teterboro Airport (TEB) Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-4">
            Teterboro Airport is the premier private aviation gateway to New York City — 100% private jets, no commercial traffic, and 12 miles from Midtown Manhattan. Eagle Eye Chauffeur provides FBO lobby meet &amp; greet, flat-rate transfers, and professional chauffeurs who understand the standard that private aviation demands.
          </p>
          <p className="text-brand-silver max-w-2xl mb-8">
            Whether you&apos;re departing from Signature Aviation, Atlantic Aviation, or Meridian, your driver is already inside the lobby. No curbside pickup. No guessing. Door-to-door service for every TEB transfer.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Private Aviation Only' },
              { label: '12 Miles to Midtown' },
              { label: '24/7 Service' },
              { label: 'TLC Licensed' },
            ].map((stat) => (
              <div key={stat.label} className="border border-brand-silver/30 px-4 py-3 text-center">
                <span className="text-sm font-medium text-brand-white">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book TEB Transfer
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FBO Section */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            All Teterboro FBOs Covered
          </h2>
          <p className="text-brand-grey mb-8">
            Teterboro Airport operates entirely through Fixed Base Operators (FBOs) — there are no public terminals. Every arrival and departure is handled through an FBO lobby. Eagle Eye drivers are assigned to your specific FBO and meet you inside, with a name sign, before your aircraft arrives at the gate.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {fbos.map((fbo) => (
              <div key={fbo.name} className="bg-brand-white border border-brand-light p-5">
                <div className="font-semibold text-brand-black mb-2">{fbo.name}</div>
                <p className="text-sm text-brand-grey">{fbo.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-6">
            FBO assignments are confirmed with you at booking. Your driver&apos;s name, direct number, and vehicle details are sent the evening before your transfer.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included with Every TEB Ride
          </h2>
          <p className="text-brand-grey mb-8">
            No add-ons. No upsells. Everything below is standard on every Eagle Eye booking at Teterboro.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-6 lg:p-8">
            <ul className="space-y-4">
              {whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-grey">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book TEB Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Popular Routes To &amp; From TEB
          </h2>
          <p className="text-brand-grey mb-8">
            Estimated drive times under normal traffic conditions. Teterboro&apos;s location in Bergen County, NJ places it closer to Manhattan than JFK or Newark Liberty. Your driver monitors real-time conditions and selects the optimal route.
          </p>
          <div className="space-y-3">
            {popularRoutes.map((route) => (
              <div
                key={route.label}
                className="flex justify-between items-center bg-brand-white border border-brand-light p-4"
              >
                <span className="font-medium text-brand-black">{route.label}</span>
                <span className="text-brand-grey text-sm">{route.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your Route
            </Link>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Why Eagle Eye for Teterboro Airport
          </h2>
          <p className="text-brand-grey mb-8">
            Private aviation passengers have higher expectations — and rightfully so. Eagle Eye&apos;s TEB service is built around FBO protocol, discreet professionalism, and the reliability that executives, investors, and high-profile travelers require.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-brand-offwhite border border-brand-light p-4">
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <h3 className="font-semibold text-brand-black text-sm">{benefit.title}</h3>
                </div>
                <p className="text-brand-grey text-sm pl-6">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            Teterboro Airport Car Service — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-5 lg:p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Routes */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            TEB Routes &amp; Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/manhattan-to-teterboro-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Manhattan → TEB</div>
              <div className="text-sm text-brand-grey">Door-to-FBO service from any Manhattan address</div>
            </Link>
            <Link
              href="/services/routes/teterboro-to-manhattan-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">TEB → Manhattan</div>
              <div className="text-sm text-brand-grey">FBO arrivals to any Manhattan destination</div>
            </Link>
            <Link
              href="/services/routes/new-jersey-to-teterboro-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">New Jersey → TEB</div>
              <div className="text-sm text-brand-grey">Hoboken, Jersey City, Morristown &amp; all NJ</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
            Ready to Book Your Teterboro Transfer?
          </h2>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Lock in your flat rate now. Confirmation within minutes. Your driver will be inside the FBO lobby when your aircraft arrives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book TEB Transfer
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Questions? Call{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline">
              {CONTACT_PHONE_DISPLAY}
            </a>{' '}
            or email{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
