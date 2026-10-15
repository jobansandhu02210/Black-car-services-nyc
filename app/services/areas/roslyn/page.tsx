import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Roslyn Car Service | LGA & JFK Transfers Nassau',
  description:
    'Roslyn NY black car service — flat-rate JFK, LGA & EWR airport transfers from Nassau County\'s North Shore. Roslyn Village, Roslyn Harbor & Roslyn.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/roslyn` },
  openGraph: {
    ...ogDefaults,
    title: 'Roslyn Car Service | LGA & JFK Transfers Nassau | Eagle Eye',
    description:
      'Roslyn NY black car service — flat-rate JFK, LGA & EWR airport transfers from Nassau County\'s North Shore. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/roslyn`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Roslyn to LaGuardia Airport (LGA)?',
    a: 'Roslyn to LaGuardia is typically 25–40 minutes via the Northern State Parkway and Grand Central Parkway under normal conditions. LGA is the closest major airport to Roslyn, making it the preferred choice for most domestic travelers on the North Shore. Your flat rate is confirmed at booking, with all parkway tolls included.',
  },
  {
    q: 'Do you serve Roslyn Village, Roslyn Harbor, and Roslyn Heights?',
    a: 'Yes. We cover all of the Roslyn area including Roslyn Village, Roslyn Harbor, Roslyn Heights, and Roslyn Estates — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
  {
    q: 'How far is Roslyn from JFK Airport?',
    a: 'Roslyn to JFK is typically 45–60 minutes via the Long Island Expressway and Van Wyck Expressway, depending on traffic. We recommend a 3-hour buffer for international departures and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Is there executive car service from Roslyn to Manhattan?',
    a: 'Yes. Roslyn is one of the most requested North Shore routes into Midtown and Downtown Manhattan — typically 40–55 minutes via the Northern State and Midtown Tunnel or 59th Street Bridge. A popular alternative to the LIRR for executives who want door-to-door service without a transfer at Penn Station.',
  },
  {
    q: 'Do you offer corporate accounts for Roslyn businesses?',
    a: 'Yes. Roslyn and the surrounding Northern Boulevard corridor are home to numerous corporate offices and medical practices. Eagle Eye offers consolidated monthly billing, priority scheduling, and dedicated support for businesses with frequent travel needs.',
  },
  {
    q: 'Do you provide black car service for Roslyn events and weddings?',
    a: 'Yes. We serve events, galas, weddings, and special occasions throughout Roslyn and Nassau County, including venues around Roslyn Harbor. Hourly packages are available for multi-stop itineraries and full-day coverage.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Roslyn fare is locked before you travel — no Northern State Parkway rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with Roslyn\'s village roads, private estates, and gated communities.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model luxury vehicles, always clean and inspected before every trip — the vehicle class you booked, every time.',
  },
  {
    title: 'Door-to-door across Roslyn',
    desc: 'From Roslyn Harbor waterfront homes to Roslyn Village and Roslyn Heights — your chauffeur arrives at your exact address.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early LGA and JFK departures from the North Shore.',
  },
  {
    title: 'All tolls included',
    desc: 'Northern State, LIE, Grand Central Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'LGA Airport Transfers',
    desc: 'Roslyn to LaGuardia — 25–40 minutes via the Northern State and Grand Central Parkway. The fastest, most popular airport option from Roslyn.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Roslyn to JFK — flat-rate, all tolls included, meet-and-greet at every terminal. Ideal for international departures with real-time flight tracking.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Roslyn to Newark Liberty — flat-rate, approximately 60–80 minutes. A practical choice for transatlantic routes and select international carriers.',
  },
  {
    title: 'Roslyn to Manhattan',
    desc: 'Daily executive car service for Roslyn professionals commuting to Midtown or Downtown NYC offices. Flat rate, door-to-door, 40–55 minutes.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Roslyn and Northern Boulevard corridor businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
  {
    title: 'North Shore Point-to-Point',
    desc: 'Direct transfers between Roslyn and neighboring North Shore communities — Port Washington, Great Neck, Manhasset, and Sands Point.',
  },
];

const routes = [
  { label: 'Roslyn → LaGuardia (LGA)', time: '25–40 min' },
  { label: 'Roslyn → JFK Airport', time: '45–60 min' },
  { label: 'Roslyn → Newark (EWR)', time: '60–80 min' },
  { label: 'Roslyn → Manhattan (Midtown)', time: '40–55 min' },
  { label: 'Roslyn → Manhattan (Downtown)', time: '50–65 min' },
  { label: 'Roslyn → Brooklyn', time: '50–65 min' },
  { label: 'Roslyn → Westchester (HPN)', time: '45–60 min' },
  { label: 'Roslyn → Port Washington', time: '10–15 min' },
];

export default function RoslynPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Nassau County', url: `${siteUrl}/services/areas/nassau-county` },
          { name: 'Roslyn', url: `${siteUrl}/services/areas/roslyn` },
        ]}
      />
      <ServiceJsonLd
        name="Roslyn Car Service"
        description="Premium black car and chauffeur service in Roslyn, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from the North Shore. Corporate travel and 24/7 availability."
        areaServed="Roslyn, Nassau County, NY"
        url={`${siteUrl}/services/areas/roslyn`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · North Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Roslyn Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Roslyn, Nassau County&apos;s North Shore
              village. LGA is 25–40 minutes, Manhattan is 40–55 minutes, and all three major NYC
              airports are covered. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the historic homes overlooking Hempstead Harbor in Roslyn Harbor to the shops
              and restaurants of Roslyn Village, Eagle Eye Chauffeur provides the North Shore
              standard of ground transportation: a confirmed driver the night before, a flat rate
              locked at booking, and a late-model luxury vehicle at your door — for an early LGA
              departure or a daily commute into Manhattan.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Roslyn', label: 'Village' },
                { stat: 'Nassau County', label: 'County' },
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
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Roslyn Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From LGA and JFK airport transfers to daily Manhattan commutes and hourly hire,
              Eagle Eye delivers the full ground transportation suite for Roslyn. Every booking
              includes a flat rate with all tolls, a TLC-licensed chauffeur, and your driver
              confirmed the night before.
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Roslyn Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Roslyn via the Northern State Parkway and LIE. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Roslyn Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Roslyn&apos;s mix of historic waterfront estates and North Shore commuter households
              expects discretion and reliability in equal measure. A flat rate confirmed at
              booking, a chauffeur confirmed the night before, and a luxury vehicle at the door is
              the standard Eagle Eye delivers on every Roslyn pickup.
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
              Eagle Eye covers all of Roslyn and extends seamlessly across Nassau County&apos;s
              North Shore.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Roslyn Harbor', 'Roslyn Heights', 'Roslyn Estates', 'Port Washington',
                'Great Neck', 'Manhasset', 'Sands Point', 'Albertson',
                'Mineola', 'Garden City', 'Huntington', 'New Hyde Park',
              ].map((city) => (
                <div key={city} className="p-3 bg-brand-offwhite border border-brand-light text-sm text-brand-black text-center font-medium">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Full Nassau County coverage.{' '}
              <Link href="/services/areas/nassau-county" className="underline">See all Nassau County service areas →</Link>
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Roslyn Car Service — FAQ</h2>
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
              <Link href="/services/airport/lga" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">Fastest airport from Roslyn</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/manhasset" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhasset Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring North Shore community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Roslyn Ride</h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">Flat rates confirmed at booking. Available 24/7. No surge pricing, ever.</p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate accounts available. For priority scheduling and monthly billing, contact us at{' '}
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
