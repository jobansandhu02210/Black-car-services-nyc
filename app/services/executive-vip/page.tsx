import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'Executive VIP Car Service NYC | Private Chauffeur | Eagle Eye',
  },
  description:
    'Executive VIP chauffeur service NYC — discreet black car for C-suite executives, celebrities & private clients. NDA available. 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/executive-vip` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/executive-vip`,
    title: 'Executive VIP Car Service NYC | Private Chauffeur | Eagle Eye',
    description:
      'Executive VIP chauffeur service NYC — discreet black car for C-suite executives, celebrities & private clients. NDA available. 24/7.',
  },
};

const vipStandards = [
  {
    title: 'Complete Discretion',
    desc: 'Every driver is trained in executive protocol — no unsolicited conversation, no phone use during your ride, and full confidentiality guaranteed on every journey.',
  },
  {
    title: 'NDA &amp; Confidentiality Agreements',
    desc: 'We sign NDAs for clients who require formal documentation. Reach out before your first booking to arrange a confidentiality agreement.',
  },
  {
    title: 'Pre-Stocked Vehicle',
    desc: 'Still water, newspapers, phone chargers, and any personal preferences noted on your account — your vehicle is prepared before you step in.',
  },
  {
    title: 'Named Driver Consistency',
    desc: 'For recurring VIP clients, we assign the same trusted chauffeur to your account. No surprises, no re-introductions — just a reliable professional who knows your expectations.',
  },
  {
    title: 'First Class Fleet Only',
    desc: 'VIP service means First Class Sedan and First Class SUV — always immaculate, late-model vehicles. We never downgrade for a VIP booking.',
  },
  {
    title: '24/7 Dedicated Contact',
    desc: 'A direct line to your account manager — not a call center, not a queue. Reach a real person before, during, and after every VIP journey.',
  },
];

const vipClients = [
  { type: 'C-Suite Executives', desc: 'CEOs, CFOs, and senior leadership requiring discretion, punctuality, and a consistent premium experience.' },
  { type: 'Celebrities &amp; Entertainment', desc: 'Talent, artists, and entertainment professionals — studio arrivals, premiere nights, and low-profile movements across the city.' },
  { type: 'Visiting Dignitaries', desc: 'Government officials, diplomatic visitors, and heads of delegation requiring coordinated, confidential ground transport.' },
  { type: 'Private Equity Principals', desc: 'Fund managers and deal principals moving between Midtown, FiDi, Greenwich, and TEB private aviation terminals.' },
  { type: 'Legal &amp; Finance VIPs', desc: 'Senior partners, in-house counsel, and banking executives requiring absolute discretion and reliable scheduling.' },
  { type: 'High-Net-Worth Families', desc: 'Private clients and their families — school runs, medical appointments, shopping, and personal travel handled with care.' },
];

const arrivalSteps = [
  { step: '1', title: 'Driver Confirmed 24 Hours in Advance', body: 'Your named chauffeur is confirmed the day before your journey — name, vehicle, and direct contact number provided.' },
  { step: '2', title: 'Vehicle Pre-Checked &amp; Pre-Stocked', body: 'The vehicle is inspected, cleaned, and stocked to your account preferences before departure from our facility.' },
  { step: '3', title: 'Pickup at Exact Door — Not Curb', body: 'Your driver arrives at the building entrance or residence door — not a general pickup zone. No waiting, no searching.' },
  { step: '4', title: 'Route Pre-Planned for Privacy &amp; Speed', body: 'Routes are selected in advance to avoid media, traffic, or unnecessary exposure — adjusted in real time if conditions change.' },
  { step: '5', title: 'FBO &amp; Terminal Private Aviation Coordination', body: 'For private flights, we coordinate directly with the FBO — your driver meets you airside or in the FBO lobby, never at a public terminal.' },
  { step: '6', title: 'Discreet Drop-Off', body: 'Arrivals are handled with the same care as departures — quiet, efficient, and without any unnecessary public profile.' },
];

const faqs = [
  {
    q: 'Do you sign NDAs for VIP clients?',
    a: 'Yes — we provide confidentiality agreements for clients who require formal documentation. Contact us before your first booking to arrange the paperwork.',
  },
  {
    q: 'Can I request the same driver every time?',
    a: 'Yes — for recurring VIP clients, we assign a preferred named driver to your account. Your driver will be familiar with your expectations and preferences from the first journey.',
  },
  {
    q: 'What vehicles are available for VIP service?',
    a: 'First Class Sedan and First Class SUV only — never downgraded, always immaculate. VIP bookings are never assigned to Business Class vehicles without explicit client approval.',
  },
  {
    q: 'How do you handle airport arrivals for VIP clients?',
    a: 'For private aviation, your driver meets you in the FBO lobby — coordinated silently with the terminal. For commercial arrivals, we meet at the arrivals area with a name sign, never causing a public scene.',
  },
  {
    q: 'Do you coordinate multi-vehicle VIP movements?',
    a: 'Yes — we coordinate fleet movements for security details, principal plus support staff, and multi-vehicle event arrivals. Contact us to discuss the specifics of your operation.',
  },
  {
    q: 'Is VIP service available 24/7?',
    a: 'Yes. Pre-dawn departures, late-night arrivals, same-day requests — contact us directly for urgent VIP bookings. A real person is available around the clock.',
  },
];

export default function ExecutiveVipPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Executive VIP', url: `${getSiteUrl()}/services/executive-vip` },
        ]}
      />
      <ServiceJsonLd
        name="Executive VIP Chauffeur Service"
        description="Discreet, professional black car for C-suite executives, celebrities, dignitaries, and private clients in New York City. NDA available. 24/7."
        areaServed="New York City"
      />
      <FaqJsonLd faqs={faqs} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver text-xs font-medium tracking-widest uppercase mb-4">
            New York City · Private VIP Ground Transport
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-tight">
            Executive VIP Chauffeur Service — New York City
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-silver max-w-2xl mx-auto leading-relaxed">
            White-glove ground transport for principals who require absolute discretion, a named driver, and a vehicle that reflects their standard. Available 24/7 — NDA available on request.
          </p>

          {/* 4-stat bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-brand-charcoal pt-10">
            {[
              { stat: 'NDA Available', label: 'Formal confidentiality agreements' },
              { stat: '24/7 Dedicated Line', label: 'Account manager, not a call center' },
              { stat: 'First Class Fleet', label: 'Sedan &amp; SUV — never downgraded' },
              { stat: 'TLC Licensed', label: 'Certified &amp; fully insured' },
            ].map((item) => (
              <div key={item.stat}>
                <div className="font-serif text-lg font-semibold text-brand-white" dangerouslySetInnerHTML={{ __html: item.stat }} />
                <div className="text-brand-silver text-xs mt-1 leading-snug" dangerouslySetInnerHTML={{ __html: item.label }} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-semibold hover:bg-brand-offwhite transition-colors text-base"
            >
              Book VIP Service
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5d] transition-colors text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── VIP SERVICE STANDARDS ────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-white" aria-labelledby="standards-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="standards-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-3">
            VIP Service Standards
          </h2>
          <p className="text-brand-grey text-center max-w-2xl mx-auto mb-12">
            Every element of our VIP service is designed for clients who accept nothing less than perfect execution.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vipStandards.map((item, i) => (
              <div key={i} className="bg-brand-offwhite border border-brand-light p-6">
                <h3
                  className="font-semibold text-brand-black mb-2"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="text-brand-grey text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO USES VIP SERVICE ─────────────────────────── */}
      <section className="py-16 lg:py-20 bg-brand-offwhite" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="clients-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-3">
            Who Uses VIP Chauffeur Service
          </h2>
          <p className="text-brand-grey text-center max-w-2xl mx-auto mb-12">
            Eagle Eye VIP service is retained by a discreet clientele across business, entertainment, government, and private life.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vipClients.map((client, i) => (
              <div key={i} className="bg-brand-white border border-brand-light p-6">
                <h3
                  className="font-semibold text-brand-black mb-2"
                  dangerouslySetInnerHTML={{ __html: client.type }}
                />
                <p
                  className="text-brand-grey text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: client.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIP ARRIVAL & DEPARTURE PROTOCOL ────────────── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white" aria-labelledby="protocol-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="protocol-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white text-center mb-3">
            VIP Arrival &amp; Departure Protocol
          </h2>
          <p className="text-brand-silver text-center max-w-2xl mx-auto mb-14">
            Every VIP journey follows a structured protocol — nothing is left to chance.
          </p>
          <div className="space-y-6">
            {arrivalSteps.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 bg-brand-white text-brand-black flex items-center justify-center font-serif font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3
                    className="font-semibold text-brand-white mb-1"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className="text-brand-silver text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVATE AVIATION INTEGRATION ─────────────────── */}
      <section className="py-16 lg:py-20 bg-brand-white" aria-labelledby="aviation-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="aviation-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-5">
            Private Aviation Integration
          </h2>
          <p className="text-brand-grey leading-relaxed mb-4">
            Eagle Eye Chauffeur coordinates directly with private FBOs across the New York metropolitan area. Whether your principal is arriving at Teterboro (TEB), Westchester (HPN), or another private terminal, we handle ground transport with the same discretion as the flight itself.
          </p>
          <p className="text-brand-grey leading-relaxed mb-6">
            Our drivers meet VIP clients in the FBO lobby — never at a public terminal curb. Flight coordination is handled silently: no unnecessary calls, no public signage, no delays. Pre-cleared with the FBO on arrival time and tail number where required.
          </p>
          <Link
            href="/services/areas/teb-airport"
            className="inline-block text-sm font-medium text-brand-black underline hover:no-underline"
          >
            Teterboro Airport (TEB) private aviation transfers →
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-offwhite" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-12">
            VIP Service — Frequently Asked Questions
          </h2>
          <dl className="space-y-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brand-white border border-brand-light p-6">
                <dt className="font-semibold text-brand-black mb-2">{faq.q}</dt>
                <dd className="text-brand-grey text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white" aria-labelledby="vip-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="vip-cta-heading" className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Book VIP Service — Discreet &amp; Professional
          </h2>
          <p className="text-brand-silver mb-8 leading-relaxed">
            Contact us to arrange your VIP account, request a confidentiality agreement, or book a single journey. We are available 24/7 — a real person will respond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-semibold hover:bg-brand-offwhite transition-colors"
            >
              Book VIP Service
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
              WhatsApp Us
            </a>
          </div>
          <div className="pt-8 border-t border-brand-charcoal flex flex-wrap justify-center gap-x-8 gap-y-2 text-brand-silver text-sm">
            <a href={`tel:${CONTACT_PHONE_E164}`} className="hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="hover:text-brand-white transition-colors">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
