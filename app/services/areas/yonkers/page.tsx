import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Yonkers NY Car Service | NYC & Airport Transfers',
  description:
    'Yonkers black car and chauffeur service — flat-rate airport transfers to LGA, JFK & EWR. Yonkers to Manhattan door-to-door. TLC-licensed. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/yonkers` },
  openGraph: {
    ...ogDefaults,
    title: 'Yonkers NY Car Service | NYC & Airport Transfers | Eagle Eye',
    description:
      'Yonkers black car and chauffeur service — flat-rate airport transfers to LGA, JFK & EWR. Yonkers to Manhattan door-to-door. TLC-licensed. No surge.',
    url: `${getSiteUrl()}/services/areas/yonkers`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Yonkers to LaGuardia Airport (LGA)?',
    a: 'Yonkers to LaGuardia Airport is typically 25–40 minutes via the Saw Mill River Parkway and I-87. LGA is the closest major airport to Yonkers, making it the most efficient choice for domestic flights on American, Delta, and United. Your rate is flat and confirmed at booking regardless of traffic.',
  },
  {
    q: 'Do you offer Yonkers to JFK Airport black car service?',
    a: 'Yes. Yonkers to JFK Airport is typically 45–60 minutes via the Cross Bronx Expressway and the Belt Parkway. JFK is the preferred choice for international departures from Yonkers. Flat rate, all tolls included, TLC-licensed chauffeur picks you up at your door.',
  },
  {
    q: 'How far is Yonkers from Manhattan and what does a black car cost?',
    a: 'Yonkers sits directly on the Bronx border, making it one of the closest Westchester communities to Manhattan — typically 20–35 minutes to Midtown via the Major Deegan Expressway or the Saw Mill River Parkway. For pricing, visit our booking page for a flat-rate quote confirmed before you travel.',
  },
  {
    q: 'Can I book an early morning airport pickup from Yonkers?',
    a: 'Absolutely. Early morning airport departures are standard for Eagle Eye — no surcharge for pre-dawn pickups. Your chauffeur is confirmed the evening before with their name and details. Whether your flight is at 6am or earlier, your driver will be at your door on time.',
  },
  {
    q: 'Do you offer corporate travel accounts for Yonkers businesses?',
    a: 'Yes. Yonkers has a growing business community along the Saw Mill Parkway corridor and near the Hudson riverfront. Eagle Eye offers corporate accounts with consolidated billing, priority scheduling, and dedicated support for companies whose executives travel regularly into NYC or to the airports.',
  },
  {
    q: 'Do you serve residential neighborhoods throughout all of Yonkers?',
    a: 'Yes. Eagle Eye serves all Yonkers neighborhoods — from Riverdale-adjacent Southwest Yonkers and Nodine Hill to Park Hill, Crestwood, Dunwoodie, and the Hudson River waterfront communities including the new Ridge Hill area. Your address is your pickup point.',
  },
  {
    q: 'How far is Yonkers from the NYC airports?',
    a: 'Yonkers, in southern Westchester County, is about 15 miles from LaGuardia (30–50 minutes), 25 miles from JFK (45–70 minutes), and 20 miles from Newark (EWR) (35–55 minutes). Westchester County Airport (HPN) is closer at about 12 miles, and Midtown Manhattan is roughly 15 miles.',
  },
  {
    q: 'How much does a car service from Yonkers cost?',
    a: 'Yonkers transfers are billed as a flat rate confirmed at booking, based on your address and destination, with all tolls included and no surge. Enter your trip on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate locked at booking',
    desc: 'Your confirmed price never changes for Saw Mill Parkway traffic, Cross Bronx congestion, or peak demand — ever.',
  },
  {
    title: 'TLC-licensed Yonkers chauffeur',
    desc: 'Background-checked, NYC TLC licensed, and trained to professional service standards — not an app driver.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Clean, late-model black car in the vehicle class you selected — always confirmed before your pickup.',
  },
  {
    title: 'Door-to-door across Yonkers',
    desc: 'Your chauffeur arrives at your exact address — apartment building, house, or hotel. Not a street corner.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name and vehicle details sent to you the evening before every trip — complete peace of mind before bed.',
  },
  {
    title: '24/7 phone & WhatsApp support',
    desc: 'Contact us by phone or WhatsApp any time — including 4am pickups for early LGA departures.',
  },
];

const routes = [
  { label: 'Yonkers → LGA Airport', time: '25–40 min' },
  { label: 'Yonkers → JFK Airport', time: '45–60 min' },
  { label: 'Yonkers → EWR Airport', time: '40–60 min' },
  { label: 'Yonkers → HPN Airport', time: '20–35 min' },
  { label: 'Yonkers → Midtown Manhattan', time: '20–35 min' },
  { label: 'Yonkers → Downtown Manhattan', time: '30–45 min' },
  { label: 'Yonkers → White Plains', time: '15–25 min' },
  { label: 'Yonkers → Bronx', time: '10–20 min' },
];

const services = [
  {
    title: 'LGA Airport Transfers',
    desc: 'Yonkers is positioned for quick LaGuardia access — via the Saw Mill or I-87. The closest major airport for most Yonkers addresses.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate black car from Yonkers to JFK, all terminals. All tolls included. For international flights, allow 3 hours before departure.',
  },
  {
    title: 'Yonkers to Manhattan',
    desc: 'Daily executive car service from Yonkers to Midtown and Downtown Manhattan. Door-to-door in 20–35 minutes with a professional chauffeur.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Yonkers to Newark Liberty via the Cross Bronx and Goethals or via I-87 south. All bridge and tunnel tolls included in your flat rate.',
  },
  {
    title: 'HPN Airport Transfers',
    desc: 'For Westchester County Airport departures — Yonkers to HPN in 20–35 minutes, ideal for business travelers using the private terminal.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Yonkers business travel, corporate events, or multi-stop executive days in the metro region.',
  },
];

export default function YonkersPage() {
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
          { name: 'Yonkers', url: `${siteUrl}/services/areas/yonkers` },
        ]}
      />
      <ServiceJsonLd
        name="Yonkers Black Car Service"
        description="Premium black car and chauffeur service in Yonkers, NY. Flat-rate airport transfers to LGA, JFK, EWR, and HPN. Executive car service to Manhattan. TLC-licensed chauffeurs, 24/7 availability. Westchester's largest city."
        areaServed="Yonkers, Westchester County, New York, NY"
        url={`${siteUrl}/services/areas/yonkers`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">South Westchester · Yonkers, NY</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Yonkers Black Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car and chauffeur service in Yonkers — Westchester County&apos;s
              largest city. LaGuardia is 25–40 minutes away. Manhattan is just across the
              Bronx border. Flat rates, TLC-licensed chauffeurs, no surge pricing, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Yonkers occupies a unique position at the southern tip of Westchester County —
              close enough to the Bronx and Manhattan to be genuinely convenient, with the
              Saw Mill River Parkway corridor providing quick access north to HPN and south
              to the city. Eagle Eye Chauffeur serves every Yonkers neighborhood with the
              same flat-rate, professional standard — your driver confirmed the night before,
              your rate locked in at booking.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Yonkers', label: 'City' },
                { stat: 'South Westchester', label: 'Region' },
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
              Yonkers Black Car Services
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur provides the complete range of professional ground transportation
              for Yonkers — from airport transfers at LGA and JFK to daily Manhattan commutes and
              corporate hourly hire. Every booking includes a flat rate with all tolls, a
              TLC-licensed chauffeur, and your driver confirmed in advance.
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
              Yonkers Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times from Yonkers under normal conditions via the Saw Mill River
              Parkway, Cross Bronx Expressway, and I-87. We monitor live traffic and build buffer
              time into all airport bookings.
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
              Why Yonkers Residents Choose Eagle Eye
            </h2>
            <p className="text-brand-grey mb-8">
              Yonkers travelers know their commute options — the 1 and 4 trains, Metro-North at
              Getty Square, or a car. When time and comfort matter, Eagle Eye delivers a
              professional service that the subway and rideshares simply can&apos;t match:
              a confirmed driver, a flat rate, and a luxury vehicle waiting at your door.
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
              Yonkers neighbors the Bronx to the south and connects quickly to White Plains,
              Scarsdale, and the broader Westchester region.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'White Plains', 'Scarsdale', 'Bronxville', 'Tuckahoe',
                'Hastings-on-Hudson', 'Dobbs Ferry', 'Ardsley', 'Greenburgh',
                'Bronx', 'Upper Manhattan', 'Pelham', 'New Rochelle',
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
              Full Westchester and NYC coverage.{' '}
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
              Yonkers Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">Closest major airport for Yonkers — 25–40 min</div>
              </Link>
              <Link
                href="/services/airport/jfk"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">45–60 min flat-rate from Yonkers</div>
              </Link>
              <Link
                href="/services/areas/westchester"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Westchester Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Full county coverage, all communities</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Yonkers Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Yonkers neighborhood. Flat rates confirmed at booking.
              Your driver confirmed the evening before. No surge pricing, ever.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate accounts available for Yonkers businesses. Reach us at{' '}
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
