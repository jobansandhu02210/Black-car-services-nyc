import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Hauppauge Car Service | Corporate, JFK & ISP Transfers',
  description:
    'Hauppauge NY black car service — flat-rate JFK, LGA, EWR & MacArthur (ISP) transfers and corporate accounts for the Hauppauge Industrial Park. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hauppauge` },
  openGraph: {
    ...ogDefaults,
    title: 'Hauppauge Car Service | Corporate, JFK & ISP Transfers | Eagle Eye',
    description:
      'Hauppauge NY black car service — flat-rate airport transfers and corporate accounts for the Hauppauge Industrial Park and central Suffolk. No surge. Book 24/7.',
    url: `${getSiteUrl()}/services/areas/hauppauge`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you serve the Hauppauge Industrial Park for corporate travel?',
    a: 'Yes — the Hauppauge Industrial Park is one of the largest business parks in the country, and it is a core part of our Hauppauge service. We provide corporate accounts with consolidated monthly billing, priority scheduling, and reliable airport runs for visiting executives and clients along Motor Parkway, Marcus Boulevard, and the surrounding corridors.',
  },
  {
    q: 'Is MacArthur Airport (ISP) close to Hauppauge?',
    a: 'Yes. Long Island MacArthur Airport (ISP) in Ronkonkoma is only about 10–15 minutes from Hauppauge via Veterans Memorial Highway (Route 454) — one of the fastest airport runs in central Suffolk. We also provide flat-rate transfers to JFK, LGA, and EWR.',
  },
  {
    q: 'How long is the drive from Hauppauge to JFK Airport?',
    a: 'Hauppauge to JFK is typically 50–65 minutes via the Long Island Expressway (LIE) and the Belt Parkway, depending on traffic. For international departures we recommend a 3-hour buffer and track your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Do you handle the Suffolk County government center in Hauppauge?',
    a: 'Yes. The H. Lee Dennison Building and the surrounding county offices generate steady business and official travel, and we provide flat-rate, on-time car service for meetings, airport runs, and multi-stop days across the county seat area.',
  },
  {
    q: 'Is there executive car service from Hauppauge to Manhattan?',
    a: 'Yes. Hauppauge to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 60–80 minutes via the LIE — a comfortable door-to-door option for corporate travelers who would rather work than drive or transfer at Penn Station.',
  },
  {
    q: 'Which nearby central-Suffolk communities do you serve?',
    a: 'We cover Hauppauge and the surrounding communities — Smithtown, Islandia, Ronkonkoma, Nesconset, Central Islip, and Commack — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Corporate accounts & monthly billing',
    desc: 'Built for the Hauppauge Industrial Park — one invoice, priority scheduling, and a dedicated coordinator for frequent business travel.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the LIE, Motor Parkway, and Veterans Memorial Highway routing across central Suffolk.',
  },
  {
    title: 'MacArthur (ISP) about 10–15 minutes',
    desc: 'One of the quickest airport runs in the county — plus flat-rate transfers to all three NYC-area airports.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Hauppauge fare is locked before you travel — no LIE rush-hour surcharge, no last-minute changes.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early corporate departures.',
  },
  {
    title: 'All tolls included',
    desc: 'LIE, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'Corporate Car Service',
    desc: 'Dedicated chauffeur service and monthly-billed accounts for the Hauppauge Industrial Park and central-Suffolk businesses — client visits, roadshows, and airport runs.',
  },
  {
    title: 'MacArthur (ISP) Transfers',
    desc: 'Hauppauge to Long Island MacArthur Airport in about 10–15 minutes — the fast, local option for the domestic routes it serves.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Hauppauge to JFK via the LIE — flat-rate, all tolls included, meet-and-greet at every terminal with real-time flight tracking.',
  },
  {
    title: 'LGA & EWR Transfers',
    desc: 'Flat-rate transfers to LaGuardia and Newark Liberty, all tolls included, for the routes those airports serve best.',
  },
  {
    title: 'Hauppauge to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — flat rate, productive time on the road instead of a Penn Station transfer.',
  },
  {
    title: 'Hourly & Point-to-Point',
    desc: 'By-the-hour chauffeur for multi-stop days across Long Island, plus direct transfers to Smithtown, Commack, and the North Shore.',
  },
];

const routes = [
  { label: 'Hauppauge → MacArthur (ISP)', time: '10–15 min' },
  { label: 'Hauppauge → JFK Airport', time: '50–65 min' },
  { label: 'Hauppauge → LaGuardia (LGA)', time: '55–75 min' },
  { label: 'Hauppauge → Newark (EWR)', time: '80–105 min' },
  { label: 'Hauppauge → Manhattan (Midtown)', time: '60–80 min' },
  { label: 'Hauppauge → Smithtown', time: '6–10 min' },
  { label: 'Hauppauge → Commack', time: '8–12 min' },
];

export default function HauppaugePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Suffolk County', url: `${siteUrl}/services/areas/suffolk-county` },
          { name: 'Hauppauge', url: `${siteUrl}/services/areas/hauppauge` },
        ]}
      />
      <ServiceJsonLd
        name="Hauppauge Car Service"
        description="Premium black car and corporate car service in Hauppauge, Suffolk County. Flat-rate airport transfers to ISP, JFK, LGA, and EWR, plus corporate accounts for the Hauppauge Industrial Park. 24/7 availability."
        areaServed="Hauppauge, Suffolk County, NY"
        url={`${siteUrl}/services/areas/hauppauge`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · Central LI · Corporate Hub</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Hauppauge Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and corporate chauffeur service throughout Hauppauge, home to one of the
              largest industrial parks in the country. MacArthur Airport is 10–15 minutes away, JFK is
              50–65, and Manhattan is 60–80. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the offices of the Hauppauge Industrial Park along Motor Parkway and Marcus
              Boulevard to the H. Lee Dennison county government center, Eagle Eye Chauffeur delivers a
              confirmed driver the night before, a flat rate locked at booking, and a late-model
              luxury vehicle at your door — for an executive airport run, a client roadshow, or a
              meeting in the city.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Hauppauge', label: 'Hamlet' },
                { stat: 'Suffolk County', label: 'County' },
                { stat: '~12 min', label: 'To ISP' },
                { stat: 'Corporate', label: 'Accounts' },
              ].map((item) => (
                <div key={item.label} className="border border-brand-charcoal p-4 text-center">
                  <div className="font-serif text-xl font-semibold text-brand-white">{item.stat}</div>
                  <div className="text-brand-silver text-xs uppercase tracking-widest mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hauppauge Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From corporate accounts for the Industrial Park to MacArthur and JFK airport transfers
              and executive Manhattan runs, Eagle Eye delivers the full ground-transportation suite for
              Hauppauge. Every booking includes a flat rate with all tolls, a TLC-licensed chauffeur,
              and your driver confirmed the night before.
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

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hauppauge Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Hauppauge via the LIE, Motor Parkway, and Veterans Memorial Highway. All tolls included. Flat rates confirmed at booking.</p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div key={r.label} className="bg-brand-offwhite border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black text-sm">{r.label}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4"><Link href="/book" className="underline">Get a flat-rate quote →</Link></p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Hauppauge Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Hauppauge runs on business travel — thousands of companies, a county government center,
              and executives who need to be at the airport or in the city on schedule. A flat rate
              confirmed at booking, a chauffeur confirmed the night before, and a luxury vehicle at the
              door is the standard Eagle Eye delivers on every Hauppauge pickup.
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

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Nearby Areas We Also Serve</h2>
            <p className="text-brand-grey mb-6">
              Eagle Eye covers all of Hauppauge and extends across central Suffolk County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Smithtown', 'Islandia', 'Ronkonkoma', 'Nesconset',
                'Central Islip', 'Commack', 'Bohemia', 'Brentwood',
                'Kings Park', 'Lake Grove', 'Holbrook', 'St. James',
              ].map((city) => (
                <div key={city} className="p-3 bg-brand-offwhite border border-brand-light text-sm text-brand-black text-center font-medium">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Full Suffolk County coverage.{' '}
              <Link href="/services/areas/suffolk-county" className="underline">See all Suffolk County service areas →</Link>
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hauppauge Car Service — FAQ</h2>
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

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/corporate-accounts" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Corporate Accounts</div>
                <div className="text-sm text-brand-grey mt-1">Monthly billing for the Industrial Park</div>
              </Link>
              <Link href="/services/areas/suffolk-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
              </Link>
              <Link href="/services/areas/smithtown" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Smithtown Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring central-Suffolk town</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Hauppauge Ride</h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">Flat rates confirmed at booking. Available 24/7. No surge pricing, ever.</p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate accounts available for the Hauppauge Industrial Park. For priority scheduling and monthly billing, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">{CONTACT_EMAIL_BOOKINGS}</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors">Call {CONTACT_PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
