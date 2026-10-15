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
  title: 'Corporate Roadshow Car Service NYC | Executive',
  description:
    'Corporate roadshow car service NYC — dedicated executive chauffeur for IPO roadshows, investor meetings, and multi-stop corporate travel.',
  keywords: [
    'roadshow car service NYC',
    'corporate roadshow chauffeur New York',
    'IPO roadshow car service Manhattan',
    'executive roadshow transportation NYC',
    'investor meeting car service New York',
    'corporate roadshow black car NYC',
    'Wall Street roadshow chauffeur',
    'executive multi-stop car service NYC',
    'roadshow driver NYC',
    'investment bank roadshow car service',
  ],
  alternates: { canonical: `${getSiteUrl()}/services/corporate-roadshow` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/corporate-roadshow`,
    title: 'Corporate Roadshow Car Service NYC | Eagle Eye Chauffeur',
    description:
      'Dedicated executive chauffeur for IPO roadshows, investor meetings, and multi-stop corporate travel in NYC. Flat-rate, confidential, 24/7.',
  },
};

const roadshowFeatures = [
  {
    title: 'Dedicated All-Day Chauffeur',
    body: 'Your driver stays with your team for the full roadshow day — no re-booking between meetings, no handoffs. One professional, one vehicle, available from first meeting to last.',
  },
  {
    title: 'Multi-Stop Itinerary Coordination',
    body: 'We receive your roadshow schedule in advance and coordinate timing across every meeting location — banks, fund managers, law firms, and corporate offices across Manhattan and beyond.',
  },
  {
    title: 'Confidentiality & Discretion',
    body: 'Roadshow travel requires complete confidentiality. Eagle Eye chauffeurs are trained in executive protocol — no conversation, no phone use, no disclosure of passengers or destinations.',
  },
  {
    title: 'Flat-Rate Billing for Finance Teams',
    body: 'All roadshow charges are flat-rate, invoiced cleanly for expense reporting. No surge pricing, no metered unknowns. Monthly corporate accounts available with consolidated invoicing.',
  },
  {
    title: 'Premium Fleet for Executives',
    body: 'First Class sedans and SUVs for principals, Business Class for support teams. All vehicles are late-model, immaculate, and stocked per your preferences — water, chargers, newspapers.',
  },
  {
    title: 'Airport Integration',
    body: 'Roadshows frequently involve same-day flights. We coordinate seamlessly with your travel team for JFK, LGA, EWR, HPN, and Teterboro (TEB) — meet-and-greet arrivals, direct to first meeting.',
  },
];

const roadshowTypes = [
  { type: 'IPO Roadshows', desc: 'Multi-day schedules across Manhattan\'s financial district — Goldman, JPMorgan, Morgan Stanley, Blackstone, and hundreds of asset managers. We know the routes and the parking.' },
  { type: 'Debt & Equity Offerings', desc: 'High-volume meeting days with tight between-meeting windows. Your chauffeur monitors the schedule in real time and repositions before you exit each building.' },
  { type: 'Investor Day Transportation', desc: 'Transport for the management team, board members, and institutional investor guests on single-day investor events — hotel to venue and back.' },
  { type: 'Analyst Meetings', desc: 'Ongoing investor relations travel — quarterly earnings season, analyst site visits, and one-on-one investor meetings throughout the year.' },
  { type: 'M&A Due Diligence Travel', desc: 'Confidential multi-party meetings across multiple law firms and advisory offices. Discretion and timing precision are paramount.' },
  { type: 'Conference & Summit Transport', desc: 'Milken, SALT, Davos delegations, and private equity conferences — executive transport from hotel to venue with on-call standby.' },
];

const faqs = [
  {
    q: 'What is a roadshow car service?',
    a: 'A roadshow car service provides a dedicated executive chauffeur and vehicle for the duration of a corporate roadshow — typically an IPO, debt offering, or investor relations tour. The driver stays with the executive team all day, coordinating between multiple meeting locations across the city without re-booking between stops.',
  },
  {
    q: 'How do you handle tight roadshow schedules?',
    a: 'You provide your meeting itinerary in advance and we build the day around it. Your chauffeur monitors meeting timing in real time, repositions between locations, and communicates directly with the banker or IR team on any schedule adjustments. We plan buffer time between meetings to account for overruns.',
  },
  {
    q: 'Can you handle multi-city roadshow legs?',
    a: 'Yes. For multi-city roadshows, we coordinate the NYC leg and can connect you with vetted partners in other cities. Many roadshow teams use Eagle Eye exclusively for New York and rely on us to recommend ground transport in Boston, Chicago, and San Francisco.',
  },
  {
    q: 'Do you offer corporate billing for roadshow clients?',
    a: 'Yes. Corporate accounts receive consolidated monthly invoicing, clean expense reporting with trip-by-trip breakdowns, and a dedicated account manager. Rates are flat and agreed in advance — no surprises at month end.',
  },
  {
    q: 'How confidential is your roadshow service?',
    a: 'Complete confidentiality is non-negotiable for Eagle Eye roadshow clients. Drivers do not discuss passengers, routes, or meeting locations. No conversation is initiated with passengers. All records are handled with full discretion.',
  },
  {
    q: 'Do you serve Teterboro Airport for roadshow travel?',
    a: 'Yes. Teterboro (TEB) is the primary private aviation gateway for New York and we provide FBO-to-office transfers for executives arriving by private jet. We also serve all commercial airports — JFK, LGA, EWR, and HPN.',
  },
  {
    q: 'How far in advance should I book roadshow car service?',
    a: 'For standard roadshow days, 24–48 hours is sufficient. For high-volume periods like earnings season or market debuts with multiple vehicles, we recommend booking 3–5 days in advance to ensure your preferred vehicle class and driver assignment.',
  },
];

export default function CorporateRoadshowPage() {
  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Services', url: `${siteUrl}/services` },
    { name: 'Corporate Roadshow', url: `${siteUrl}/services/corporate-roadshow` },
  ];

  return (
    <>
      <ServiceJsonLd
        name="Corporate Roadshow Car Service NYC"
        description="Dedicated executive chauffeur for IPO roadshows, investor meetings, and multi-stop corporate travel in New York City. TLC licensed, confidential, flat-rate billing, 24/7."
        areaServed="New York City, NY"
        url={`${siteUrl}/services/corporate-roadshow`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-4">
            IPO Roadshows · Investor Meetings · Executive Travel · NYC
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Corporate Roadshow Car Service NYC
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Dedicated executive chauffeur for IPO roadshows, investor day travel, and multi-stop corporate meetings across Manhattan. One driver, one vehicle, your full schedule — flat-rate, confidential, and always on time.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-10">
            <span>✓ Dedicated all-day driver</span>
            <span>✓ Multi-stop itinerary</span>
            <span>✓ Complete confidentiality</span>
            <span>✓ Corporate billing</span>
            <span>✓ Teterboro (TEB) covered</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Roadshow Transport
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors text-center"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL_BOOKINGS}`}
              className="inline-block border border-brand-dark text-brand-silver font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-silver transition-colors text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-brand-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
              What's Included in Roadshow Car Service
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadshowFeatures.map((f) => (
              <div key={f.title} className="border border-brand-light bg-brand-offwhite p-6">
                <h3 className="font-semibold text-brand-black mb-2">{f.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADSHOW TYPES */}
      <section className="bg-brand-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-semibold text-brand-black">
              Types of Roadshow Travel We Handle
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadshowTypes.map((r) => (
              <div key={r.type} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{r.type}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            Roadshow Car Service FAQ
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

      {/* RELATED */}
      <section className="bg-brand-offwhite py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-semibold text-brand-black mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { label: 'Corporate Car Service', href: '/services/corporate' },
              { label: 'Hourly Chauffeur Hire', href: '/services/hourly' },
              { label: 'Airport Transfers', href: '/services/airport' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors font-medium text-brand-black">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="font-serif text-xl font-semibold text-brand-white mb-6">Corporate Travel Guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: '/blog/nyc-roadshow-car-service-guide-investment-banking', title: 'NYC Roadshow Car Service Guide' },
              { href: '/blog/nyc-corporate-car-service-executive-travel', title: 'Corporate Car Service for Executives' },
              { href: '/blog/corporate-black-car-service-nyc-executive-guide-2026', title: 'Corporate Black Car Service Guide 2026' },
              { href: '/blog/best-car-service-for-wall-street-executives-nyc', title: 'Black Car for Wall Street Executives' },
              { href: '/blog/executive-chauffeur-vs-rideshare-for-business-travel', title: 'Executive Chauffeur vs Rideshare' },
              { href: '/blog/corporate-car-service-account-nyc-guide', title: 'Corporate Account Setup Guide' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group border border-brand-silver hover:border-brand-white transition-colors p-4 text-sm text-brand-silver hover:text-brand-white">
                {l.title} →
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Book Your Roadshow Chauffeur
          </h2>
          <p className="text-brand-silver mb-3">
            Share your roadshow schedule and we'll confirm availability, vehicle class, and flat-rate pricing.
          </p>
          <p className="text-brand-silver text-sm mb-8">
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-white">{CONTACT_EMAIL_BOOKINGS}</a>
            {' · '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white">{CONTACT_PHONE_DISPLAY}</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors">
              Book Now
            </Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
