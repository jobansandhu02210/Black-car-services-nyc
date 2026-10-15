import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Port Washington Car Service | LGA & JFK North Shore',
  description:
    'Port Washington NY black car service — flat-rate LGA, JFK & EWR airport transfers from Nassau’s North Shore. Manhasset Bay & Sands Point area. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/port-washington` },
  openGraph: {
    ...ogDefaults,
    title: 'Port Washington Car Service | LGA & JFK North Shore | Eagle Eye',
    description:
      'Port Washington NY black car service — flat-rate airport transfers plus Manhasset Bay and Sands Point runs from the North Shore. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/port-washington`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Port Washington to LaGuardia (LGA)?',
    a: 'Port Washington to LaGuardia is typically 25–35 minutes via the LIE or Northern Boulevard and the Grand Central Parkway. LGA is the closest major airport to Port Washington, making it the preferred choice for most domestic travelers on the North Shore. Your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'How far is Port Washington from JFK Airport?',
    a: 'Port Washington to JFK is typically 40–55 minutes via the LIE and Van Wyck Expressway, depending on traffic. We recommend a 3-hour buffer for international departures and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Do you serve the whole Port Washington peninsula, including Sands Point?',
    a: 'Yes. We cover the entire Cow Neck peninsula — Port Washington, Sands Point, Manorhaven, Baxter Estates, and Flower Hill — from the Main Street shops and the Town Dock on Manhasset Bay to the estates near the Sands Point Preserve, all under the same flat-rate standard.',
  },
  {
    q: 'Is there executive car service from Port Washington to Manhattan?',
    a: 'Yes. Port Washington to Midtown or Downtown Manhattan is typically 40–55 minutes via the LIE and Midtown Tunnel or 59th Street Bridge — a refined door-to-door alternative to the LIRR Port Washington branch, which terminates in the village.',
  },
  {
    q: 'Do you provide car service for the marinas, yacht clubs, and events?',
    a: 'Yes. Port Washington is a sailing town on Manhasset Bay, and we provide flat-rate service to the marinas, yacht clubs, and waterfront venues, plus weddings and galas at the Sands Point Preserve mansions — hourly and Sprinter-van options available.',
  },
  {
    q: 'Which nearby North Shore communities do you serve?',
    a: 'We cover Port Washington and the surrounding North Shore — Manhasset, Sands Point, Great Neck, Roslyn, Manorhaven, and Flower Hill — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Port Washington fare is locked before you travel — no Northern Boulevard rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, discreet and experienced with the peninsula’s village roads and waterfront estates.',
  },
  {
    title: 'LGA is the closest airport',
    desc: 'From Port Washington, LaGuardia is often just 25–35 minutes — the fastest airport run on this stretch of the North Shore.',
  },
  {
    title: 'Marinas, estates & events ready',
    desc: 'Service to the Manhasset Bay marinas, yacht clubs, and Sands Point Preserve venues, with hourly and group options.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early LGA and JFK departures.',
  },
  {
    title: 'All tolls included',
    desc: 'LIE, Grand Central Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'LGA Airport Transfers',
    desc: 'Port Washington to LaGuardia — 25–35 minutes via the LIE and Grand Central Parkway. The fastest, most popular airport option from the North Shore.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Port Washington to JFK — flat-rate, all tolls included, meet-and-greet at every terminal with real-time flight tracking for international departures.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Port Washington to Newark Liberty — flat-rate, approximately 55–70 minutes, for transatlantic and select international routes.',
  },
  {
    title: 'Marina & Sands Point Events',
    desc: 'Manhasset Bay marinas, yacht clubs, and Sands Point Preserve weddings and galas — with a chauffeur on your schedule.',
  },
  {
    title: 'Port Washington to Manhattan',
    desc: 'Daily executive car service to Midtown or Downtown — 40–55 minutes, flat rate, a refined alternative to the LIRR.',
  },
  {
    title: 'Corporate, Events & Hourly',
    desc: 'Dedicated chauffeur by the hour for North Shore businesses and celebrations — multi-stop itineraries and full-day coverage.',
  },
];

const routes = [
  { label: 'Port Washington → LaGuardia (LGA)', time: '25–35 min' },
  { label: 'Port Washington → JFK Airport', time: '40–55 min' },
  { label: 'Port Washington → Newark (EWR)', time: '55–70 min' },
  { label: 'Port Washington → Manhattan (Midtown)', time: '40–55 min' },
  { label: 'Port Washington → Manhattan (Downtown)', time: '45–60 min' },
  { label: 'Port Washington → Manhasset', time: '8–12 min' },
  { label: 'Port Washington → Great Neck', time: '10–15 min' },
];

export default function PortWashingtonPage() {
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
          { name: 'Port Washington', url: `${siteUrl}/services/areas/port-washington` },
        ]}
      />
      <ServiceJsonLd
        name="Port Washington Car Service"
        description="Premium black car service in Port Washington, Nassau County. Flat-rate airport transfers to LGA, JFK, and EWR from the North Shore, plus marina and Sands Point event service. 24/7 availability."
        areaServed="Port Washington, Nassau County, NY"
        url={`${siteUrl}/services/areas/port-washington`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · North Shore · Manhasset Bay</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Port Washington Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout the Port Washington peninsula, on Nassau&apos;s
              North Shore. LGA is 25–35 minutes, Manhattan is 40–55, and all three major NYC airports
              are covered. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the Main Street shops and the Town Dock on Manhasset Bay to the sailing marinas and
              the estates near the Sands Point Preserve, Eagle Eye Chauffeur delivers a confirmed
              driver the night before, a flat rate locked at booking, and a late-model luxury vehicle
              at your door — for an early LGA departure, a day on the water, or a commute into
              Manhattan.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Port Washington', label: 'North Shore' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~30 min', label: 'To LGA' },
                { stat: '24/7', label: 'Availability' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Port Washington Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From LGA and JFK airport transfers to marina events and daily Manhattan commutes, Eagle
              Eye delivers the full ground-transportation suite for Port Washington. Every booking
              includes a flat rate with all tolls, a TLC-licensed chauffeur, and your driver confirmed
              the night before.
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Port Washington Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Port Washington via the LIE and Northern Boulevard. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Port Washington Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Port Washington&apos;s waterfront estates and sailing community expect discretion and
              reliability in equal measure. A flat rate confirmed at booking, a chauffeur confirmed the
              night before, and a late-model luxury vehicle at the door is the standard Eagle Eye
              delivers on every Port Washington pickup.
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
              Eagle Eye covers the whole Port Washington peninsula and extends across Nassau County&apos;s
              North Shore.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Manhasset', 'Sands Point', 'Great Neck', 'Roslyn',
                'Manorhaven', 'Baxter Estates', 'Flower Hill', 'Port Washington North',
                'Plandome', 'Munsey Park', 'Albertson', 'Mineola',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Port Washington Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Fastest airport from Port Washington</div>
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
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Port Washington Ride</h2>
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
