import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'New Rochelle NY Black Car Service | Airport & NYC',
  description:
    'New Rochelle black car service — flat-rate airport transfers to LGA, JFK & EWR. Door-to-door from New Rochelle to Manhattan. TLC-licensed chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/new-rochelle` },
  openGraph: {
    ...ogDefaults,
    title: 'New Rochelle NY Black Car Service | Airport & NYC | Eagle Eye',
    description:
      'New Rochelle black car service — flat-rate airport transfers to LGA, JFK & EWR. Door-to-door from New Rochelle to Manhattan. TLC-licensed chauffeur.',
    url: `${getSiteUrl()}/services/areas/new-rochelle`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from New Rochelle to LaGuardia Airport (LGA)?',
    a: 'New Rochelle to LaGuardia Airport is typically 30–45 minutes via the New England Thruway (I-95) and the Whitestone or Throgs Neck Bridge route. LGA is the most convenient major airport for most New Rochelle addresses, especially for domestic flights. Your flat rate is confirmed at booking — no surge pricing.',
  },
  {
    q: 'Do you offer New Rochelle to JFK Airport black car service?',
    a: 'Yes. New Rochelle to JFK Airport is approximately 40–55 minutes via the Hutchinson River Parkway and the Belt Parkway. JFK is the preferred choice for international travel and for airlines with limited LGA presence. All tolls are included in your flat rate, and your chauffeur is confirmed the evening before.',
  },
  {
    q: 'Can I get a black car from New Rochelle to Manhattan?',
    a: 'Absolutely. New Rochelle to Midtown Manhattan is typically 30–50 minutes via I-95 through the Bronx. Eagle Eye provides daily executive car service from New Rochelle to any Manhattan destination — Financial District, Midtown, Tribeca, or the Upper East Side. Door-to-door, flat rate, no surprises.',
  },
  {
    q: 'Do you offer corporate black car accounts for New Rochelle businesses?',
    a: 'Yes. New Rochelle hosts a growing corporate and professional community — including Iona University, major healthcare employers, and established law and finance firms. Eagle Eye offers corporate account arrangements with consolidated monthly billing and priority scheduling. Contact us to discuss your company&apos;s travel needs.',
  },
  {
    q: 'Can Eagle Eye handle event transportation in New Rochelle?',
    a: 'Yes. Eagle Eye provides event transportation throughout New Rochelle and Westchester County — for weddings, corporate dinners, gala events, and private occasions. Multiple vehicles available for group events, with professional chauffeurs experienced in managing timed event logistics.',
  },
  {
    q: 'Do you handle early morning flight pickups from New Rochelle?',
    a: 'Yes. Pre-dawn airport pickups are standard — no premium charge for early departures. Many New Rochelle residents have early LGA and JFK flights. Your chauffeur is confirmed the evening before with their name and vehicle details. We recommend a 3-hour lead for international JFK departures.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate locked at booking',
    desc: 'Your confirmed price never changes for I-95 congestion, Cross Bronx traffic, or peak demand. What you see is what you pay.',
  },
  {
    title: 'TLC-licensed New Rochelle chauffeur',
    desc: 'Background-checked, NYC TLC licensed, and trained to the professional standard that Sound Shore executives expect.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model black car in the class you booked — clean, maintained, and confirmed before your pickup, not on arrival.',
  },
  {
    title: 'Door-to-door across New Rochelle',
    desc: 'From the waterfront neighborhoods to North End residences, your chauffeur meets you at your exact address.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'You receive your chauffeur&apos;s name and vehicle details the evening before — complete peace of mind before an early flight.',
  },
  {
    title: '24/7 availability',
    desc: 'Early morning LGA departures and late-night JFK arrivals are standard. No premium for off-hours service.',
  },
];

const routes = [
  { label: 'New Rochelle → LGA Airport', time: '30–45 min' },
  { label: 'New Rochelle → JFK Airport', time: '40–55 min' },
  { label: 'New Rochelle → EWR Airport', time: '55–75 min' },
  { label: 'New Rochelle → HPN Airport', time: '25–40 min' },
  { label: 'New Rochelle → Midtown Manhattan', time: '30–50 min' },
  { label: 'New Rochelle → Downtown Manhattan', time: '40–60 min' },
  { label: 'New Rochelle → White Plains', time: '20–30 min' },
  { label: 'New Rochelle → Greenwich, CT', time: '15–25 min' },
];

const services = [
  {
    title: 'LGA Airport Transfers',
    desc: 'New Rochelle&apos;s Sound Shore location gives strong LGA access via I-95. Typically 30–45 minutes — the most efficient airport for domestic flights.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate black car from New Rochelle to JFK, all terminals. Recommended for international departures — approximately 40–55 minutes via the Hutch and Belt Parkway.',
  },
  {
    title: 'New Rochelle to Manhattan',
    desc: 'Door-to-door executive car service from New Rochelle to any Manhattan destination — Midtown, Downtown, the Upper East Side. 30–50 minutes, flat rate.',
  },
  {
    title: 'HPN Airport Transfers',
    desc: 'New Rochelle to Westchester County Airport in White Plains — 25–40 minutes. A convenient option for business travelers using HPN for connecting or regional flights.',
  },
  {
    title: 'Event & Group Transportation',
    desc: 'Professional chauffeur service for New Rochelle events — weddings, corporate dinners, galas. Multiple vehicles, timed coordination, experienced drivers.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'New Rochelle to Newark Liberty Airport — flat-rate, all tolls included. Practical for transatlantic departures and flights not available from the NYC-area airports.',
  },
];

export default function NewRochellePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Westchester', url: `${siteUrl}/services/areas/westchester` },
          { name: 'New Rochelle', url: `${siteUrl}/services/areas/new-rochelle` },
        ]}
      />
      <ServiceJsonLd
        name="New Rochelle Black Car Service"
        description="Premium black car and chauffeur service in New Rochelle, NY. Flat-rate airport transfers to LGA, JFK, EWR, and HPN. Executive car service to Manhattan. TLC-licensed chauffeurs, 24/7 availability."
        areaServed="New Rochelle, Westchester County, New York, NY"
        url={`${siteUrl}/services/areas/new-rochelle`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Westchester County · Sound Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              New Rochelle Black Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car and chauffeur service in New Rochelle, NY — Westchester&apos;s
              waterfront city on Long Island Sound. LaGuardia is 30–45 minutes, Manhattan
              is 30–50 minutes. Flat rates, TLC-licensed chauffeurs, 24/7 availability.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              New Rochelle sits at the crossroads of Westchester and Connecticut — on Long Island
              Sound, just off I-95, with quick access to LGA via the Whitestone Bridge and to
              Manhattan via the Major Deegan. Eagle Eye Chauffeur serves every New Rochelle
              neighborhood from the waterfront to the North End with a consistent flat-rate,
              professional standard. Your chauffeur is confirmed the evening before. Your rate
              is locked at booking.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'New Rochelle', label: 'City' },
                { stat: 'Westchester', label: 'County' },
                { stat: '24/7', label: 'Availability' },
                { stat: 'TLC Licensed', label: 'Chauffeurs' },
              ].map((item) => (
                <div key={item.label} className="border border-brand-charcoal p-4 text-center">
                  <div className="font-serif text-xl font-semibold text-brand-white">{item.stat}</div>
                  <div className="text-brand-silver text-xs uppercase tracking-widest mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                Get an Instant Quote
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

        {/* Services grid */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              New Rochelle Black Car Services
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers the full range of professional ground transportation
              for New Rochelle — airport transfers at LGA, JFK, and EWR, daily Manhattan commutes,
              and event transportation. Every booking includes a flat rate, all tolls, and your
              driver confirmed in advance.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.title} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-semibold text-brand-black mb-2">{s.title}</h3>
                  <p className="text-sm text-brand-grey">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular routes */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              New Rochelle Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times from New Rochelle under normal conditions via I-95 and the
              Hutchinson River Parkway. All routes are flat-rate with all tolls included.
            </p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div
                  key={r.label}
                  className="bg-brand-offwhite border border-brand-light p-4 flex justify-between items-center"
                >
                  <span className="font-medium text-brand-black text-sm">{r.label}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              All rates are flat. All tolls included.{' '}
              <Link href="/book" className="underline">
                Get an instant quote →
              </Link>
            </p>
          </div>
        </section>

        {/* Why Eagle Eye */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Why New Rochelle Chooses Eagle Eye
            </h2>
            <p className="text-brand-grey mb-8">
              New Rochelle commuters have options — the Metro-North New Haven Line stops at New
              Rochelle station, and I-95 connects quickly south. But for airport runs, early flights,
              and professional door-to-door service, a confirmed black car at a flat rate delivers
              something the train simply cannot.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {eaglEyeBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-brand-white border border-brand-light p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{benefit.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Nearby Areas We Also Serve
            </h2>
            <p className="text-brand-grey mb-6">
              New Rochelle connects east to Port Chester and Greenwich, west toward Yonkers, and
              north through Westchester. Eagle Eye serves the full region.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Larchmont', 'Mamaroneck', 'Pelham', 'Pelham Manor',
                'Scarsdale', 'Eastchester', 'Tuckahoe', 'Bronxville',
                'Port Chester', 'Rye', 'Greenwich, CT', 'Yonkers',
              ].map((city) => (
                <div
                  key={city}
                  className="p-3 bg-brand-offwhite border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Full Westchester and Sound Shore coverage.{' '}
              <Link href="/services/areas/westchester" className="underline">
                See all Westchester service areas →
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              New Rochelle Car Service — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/services/airport/lga"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">LaGuardia (LGA) Transfers</div>
                <div className="text-sm text-brand-grey mt-1">30–45 min from New Rochelle — closest major airport</div>
              </Link>
              <Link
                href="/services/airport/jfk"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">40–55 min flat-rate from New Rochelle</div>
              </Link>
              <Link
                href="/services/areas/westchester"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Westchester Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Full county coverage from Yonkers to Chappaqua</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your New Rochelle Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every New Rochelle neighborhood. Flat rates confirmed at booking.
              Driver confirmed the evening before. No surge pricing, no hidden fees.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate and event accounts available. Reach us at{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
                {CONTACT_EMAIL_BOOKINGS}
              </a>{' '}
              for account setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                Get an Instant Quote
              </Link>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                Book on WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_PHONE_E164}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
              >
                Call {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
