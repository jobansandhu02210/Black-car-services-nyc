import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Scarsdale NY Black Car Service | Airport & NYC',
  description:
    'Scarsdale black car service — flat-rate airport transfers to HPN, JFK & LGA. Door-to-door to NYC Midtown. Executive chauffeur for Scarsdale estates &.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/scarsdale` },
  openGraph: {
    ...ogDefaults,
    title: 'Scarsdale NY Black Car Service | Airport & NYC | Eagle Eye',
    description:
      'Scarsdale black car service — flat-rate airport transfers to HPN, JFK & LGA. Door-to-door to NYC Midtown. Executive chauffeur for Scarsdale estates &.',
    url: `${getSiteUrl()}/services/areas/scarsdale`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How far is Scarsdale from HPN (Westchester County Airport)?',
    a: 'Scarsdale to Westchester County Airport (HPN) in White Plains is typically 10–18 minutes, making it one of the most convenient suburban positions in the region for private or commercial HPN departures. Eagle Eye handles door-to-door pickup from your Scarsdale home or estate — no parking, no hassle.',
  },
  {
    q: 'How long does it take from Scarsdale to JFK Airport?',
    a: 'Scarsdale to JFK Airport is typically 45–65 minutes via the Hutchinson River Parkway and the Belt Parkway. For international departures, we recommend booking with a 3-hour lead time. Your flat rate is confirmed at booking — no changes for traffic or time of day.',
  },
  {
    q: 'Do you offer Scarsdale to LGA Airport car service?',
    a: 'Yes. Scarsdale to LaGuardia Airport is approximately 35–50 minutes, making LGA a strong option for domestic flights — American, Delta, and United all have significant LGA operations. All tolls are included in your flat rate, and your chauffeur is confirmed the evening before.',
  },
  {
    q: 'Can I get executive black car service from my Scarsdale home to Manhattan?',
    a: 'Absolutely. Scarsdale to Midtown Manhattan is a classic commuter route — typically 40–55 minutes by car via I-87 or the Bronx River Parkway. Eagle Eye provides door-to-door service from your driveway or estate gate to any Manhattan address, with a professional chauffeur and flat rate locked at booking.',
  },
  {
    q: 'Do you provide executive and corporate chauffeur service in Scarsdale?',
    a: 'Yes. Scarsdale has one of the most concentrated executive and finance communities in the tri-state area. Eagle Eye works with Scarsdale residents who need reliable transportation for daily NYC commutes, frequent JFK and HPN airport runs, and corporate events. Ask about monthly account arrangements.',
  },
  {
    q: 'Can I hire a chauffeur by the hour in Scarsdale for shopping or events?',
    a: 'Yes. Hourly hire is available for Scarsdale residents who need a chauffeur on call — whether for city shopping trips, social events, medical appointments, or multi-stop executive days. Your vehicle and driver remain at your disposal for the full booked period. Contact us to arrange.',
  },
  {
    q: 'How far is Scarsdale from the NYC airports?',
    a: 'From Scarsdale in Westchester County, Westchester County Airport (HPN) is the closest at about 8 miles (15–25 minutes). LaGuardia (LGA) is about 20 miles (35–55 minutes), Newark (EWR) about 30 miles (45–70 minutes), and JFK about 30 miles (50–75 minutes). Midtown Manhattan is roughly 22 miles.',
  },
  {
    q: 'How much does a car service from Scarsdale cost?',
    a: 'Scarsdale transfers are billed as a flat rate confirmed at booking, based on your address and destination, with all tolls included and no surge. Enter your trip on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Scarsdale residents know the value of certainty. Your rate is locked before you book — no Hutchinson River Parkway traffic surcharge, no demand pricing.',
  },
  {
    title: 'TLC-licensed executive chauffeur',
    desc: 'Background-checked, NYC TLC licensed, and experienced with the professional discretion that Scarsdale&apos;s executive community expects.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model luxury vehicles in immaculate condition — always the class you booked, confirmed before your pickup.',
  },
  {
    title: 'Estate and residence pickup',
    desc: 'Your chauffeur arrives at your home, estate entrance, or building lobby — anywhere in Scarsdale, including private roads.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — so you sleep knowing every detail is arranged.',
  },
  {
    title: '24/7 availability for early flights',
    desc: 'Pre-dawn HPN and JFK departures are standard. No premium for early morning. Your chauffeur is ready when you are.',
  },
];

const routes = [
  { label: 'Scarsdale → HPN Airport', time: '10–18 min' },
  { label: 'Scarsdale → JFK Airport', time: '45–65 min' },
  { label: 'Scarsdale → LGA Airport', time: '35–50 min' },
  { label: 'Scarsdale → EWR Airport', time: '60–80 min' },
  { label: 'Scarsdale → Midtown Manhattan', time: '40–55 min' },
  { label: 'Scarsdale → Grand Central Terminal', time: '40–55 min' },
  { label: 'Scarsdale → White Plains', time: '8–15 min' },
  { label: 'Scarsdale → Greenwich, CT', time: '20–35 min' },
];

const services = [
  {
    title: 'HPN Airport Transfers',
    desc: 'Scarsdale&apos;s proximity to HPN in White Plains makes Westchester County Airport the premier choice for regional and connecting flights — 10–18 minutes door-to-terminal.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate black car from Scarsdale to JFK, all terminals. Your rate is confirmed at booking — typically 45–65 minutes via the Hutch and Belt Parkway.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Scarsdale to LaGuardia — typically 35–50 minutes. A strong domestic option, especially for morning departures before the Cross Bronx congests.',
  },
  {
    title: 'Scarsdale to Manhattan',
    desc: 'Door-to-door executive car service from Scarsdale to Midtown, the Financial District, or any Manhattan destination. A Metro-North alternative with door-to-door convenience.',
  },
  {
    title: 'Hourly Hire & Standby',
    desc: 'Chauffeur on call by the hour for Scarsdale social events, shopping, medical, or multi-stop executive days in Manhattan or Westchester.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Scarsdale to Newark Liberty — flat-rate, all tolls included. A practical option for Continental corridor and transatlantic departures.',
  },
];

export default function ScarsdakPage() {
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
          { name: 'Scarsdale', url: `${siteUrl}/services/areas/scarsdale` },
        ]}
      />
      <ServiceJsonLd
        name="Scarsdale Black Car Service"
        description="Premium black car and chauffeur service in Scarsdale, NY. Flat-rate airport transfers to HPN, JFK, LGA, and EWR. Executive door-to-door car service to Manhattan. TLC-licensed chauffeurs for Scarsdale's finance and executive community. Available 24/7."
        areaServed="Scarsdale, Westchester County, New York, NY"
        url={`${siteUrl}/services/areas/scarsdale`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Westchester County · Scarsdale, NY</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Scarsdale Black Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car and chauffeur service in Scarsdale, NY — Westchester&apos;s
              most prestigious address. HPN Airport is 10–18 minutes away. Manhattan is 40–55
              minutes. Flat rates, TLC-licensed chauffeurs, 24/7 availability.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Scarsdale draws one of the most accomplished executive communities in the New York
              metro — finance professionals, senior executives, and business founders who
              travel constantly between their homes and the airports, and between Westchester and
              Manhattan. Eagle Eye Chauffeur provides the professional ground transportation this
              community expects: discreet, punctual, flat-rate, with a chauffeur confirmed the
              night before and a luxury vehicle at your door.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Scarsdale', label: 'Village' },
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
              Scarsdale Black Car Services
            </h2>
            <p className="text-brand-grey mb-8">
              From HPN airport transfers to daily Manhattan runs and hourly hire, Eagle Eye delivers
              the complete professional ground transportation suite for Scarsdale residents. Every
              booking includes a flat rate, all tolls, and a confirmed chauffeur — no variables.
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
              Scarsdale Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times from Scarsdale under normal conditions. All routes are
              flat-rate with all tolls included. We monitor live traffic and build appropriate
              buffer time into every airport booking.
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
              Why Scarsdale Chooses Eagle Eye
            </h2>
            <p className="text-brand-grey mb-8">
              The Scarsdale executive community has high standards — and the right ground
              transportation service meets them without exception. Flat rates mean no surprises
              on expensed travel. Confirmed chauffeurs mean no morning uncertainty. Luxury
              vehicles mean a seamless transition from home to airport to boardroom.
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
              Eagle Eye covers all of Westchester County and connects seamlessly into Manhattan,
              Connecticut, and the tri-state airport network.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'White Plains', 'Hartsdale', 'Greenburgh', 'Edgemont',
                'Ardsley', 'Eastchester', 'Tuckahoe', 'Bronxville',
                'New Rochelle', 'Larchmont', 'Greenwich, CT', 'Yonkers',
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
              Full Westchester coverage.{' '}
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
              Scarsdale Car Service — Frequently Asked Questions
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
                href="/services/airport/hpn"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">HPN Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">10–18 min from Scarsdale — closest airport</div>
              </Link>
              <Link
                href="/services/airport/jfk"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">Flat-rate, 45–65 min from Scarsdale</div>
              </Link>
              <Link
                href="/services/areas/westchester"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Westchester Car Service</div>
                <div className="text-sm text-brand-grey mt-1">All Westchester communities covered</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Scarsdale Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from Scarsdale and all Westchester villages. Flat rates confirmed at
              booking. Your driver confirmed the evening before. No surge pricing, no surprises.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              For executive account inquiries, monthly billing, or group travel, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
                {CONTACT_EMAIL_BOOKINGS}
              </a>.
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
