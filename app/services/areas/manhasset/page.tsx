import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhasset Car Service | LGA & JFK Transfers North Shore',
  description:
    'Manhasset NY black car service — flat-rate LGA, JFK & EWR airport transfers from Nassau’s North Shore. Americana Manhasset & Miracle Mile. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/manhasset` },
  openGraph: {
    ...ogDefaults,
    title: 'Manhasset Car Service | LGA & JFK Transfers North Shore | Eagle Eye',
    description:
      'Manhasset NY black car service — flat-rate airport transfers plus Americana Manhasset shopping and North Shore Hospital runs. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/manhasset`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Manhasset to LaGuardia (LGA)?',
    a: 'Manhasset to LaGuardia is typically 20–30 minutes via the Long Island Expressway (LIE) or Northern Boulevard and the Grand Central Parkway. LGA is the closest major airport to Manhasset, making it the preferred choice for most domestic travelers on the North Shore. Your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'How far is Manhasset from JFK Airport?',
    a: 'Manhasset to JFK is typically 35–50 minutes via the LIE and Van Wyck Expressway, depending on traffic. We recommend a 3-hour buffer for international departures and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Do you provide car service to Americana Manhasset and the Miracle Mile?',
    a: 'Yes. We provide flat-rate drop-off and pickup along the Miracle Mile — the Americana Manhasset luxury shopping district on Northern Boulevard — with a chauffeur who waits or returns on your schedule, so there is no parking or valet wait between stores.',
  },
  {
    q: 'Do you serve North Shore University Hospital?',
    a: 'Yes. We provide reliable, flat-rate car service to and from North Shore University Hospital (Northwell) in Manhasset for appointments, discharges, and family visits — door-to-door, with your driver confirmed the night before.',
  },
  {
    q: 'Is there executive car service from Manhasset to Manhattan?',
    a: 'Yes. Manhasset to Midtown or Downtown Manhattan is typically 35–50 minutes via the LIE and Midtown Tunnel or 59th Street Bridge — a popular door-to-door alternative to the LIRR Port Washington branch for executives who want to work en route.',
  },
  {
    q: 'Which nearby North Shore communities do you serve?',
    a: 'We cover Manhasset and the surrounding North Shore villages — Great Neck, Port Washington, Roslyn, Munsey Park, Plandome, and North Hills — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Manhasset fare is locked before you travel — no Northern Boulevard rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, discreet and experienced with the North Shore’s estates, villages, and the Miracle Mile.',
  },
  {
    title: 'LGA is the closest airport',
    desc: 'From Manhasset, LaGuardia is often just 20–30 minutes — the fastest airport run on this stretch of the North Shore.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model luxury vehicles, always clean and inspected before every trip — the vehicle class you booked, every time.',
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
    desc: 'Manhasset to LaGuardia — 20–30 minutes via the LIE and Grand Central Parkway. The fastest, most popular airport option from the North Shore.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Manhasset to JFK — flat-rate, all tolls included, meet-and-greet at every terminal with real-time flight tracking for international departures.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Manhasset to Newark Liberty — flat-rate, approximately 50–65 minutes, for transatlantic and select international routes.',
  },
  {
    title: 'Miracle Mile & Errand Service',
    desc: 'Americana Manhasset shopping, appointments, and North Shore University Hospital runs — with a chauffeur on your schedule.',
  },
  {
    title: 'Manhasset to Manhattan',
    desc: 'Daily executive car service to Midtown or Downtown — 35–50 minutes, flat rate, a refined alternative to the LIRR.',
  },
  {
    title: 'Corporate, Events & Hourly',
    desc: 'Dedicated chauffeur by the hour for North Shore businesses, galas, and weddings — multi-stop itineraries and full-day coverage.',
  },
];

const routes = [
  { label: 'Manhasset → LaGuardia (LGA)', time: '20–30 min' },
  { label: 'Manhasset → JFK Airport', time: '35–50 min' },
  { label: 'Manhasset → Newark (EWR)', time: '50–65 min' },
  { label: 'Manhasset → Manhattan (Midtown)', time: '35–50 min' },
  { label: 'Manhasset → Manhattan (Downtown)', time: '40–55 min' },
  { label: 'Manhasset → Great Neck', time: '8–12 min' },
  { label: 'Manhasset → Roslyn', time: '8–12 min' },
];

export default function ManhassetPage() {
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
          { name: 'Manhasset', url: `${siteUrl}/services/areas/manhasset` },
        ]}
      />
      <ServiceJsonLd
        name="Manhasset Car Service"
        description="Premium black car service in Manhasset, Nassau County. Flat-rate airport transfers to LGA, JFK, and EWR from the North Shore, plus Miracle Mile and hospital service. 24/7 availability."
        areaServed="Manhasset, Nassau County, NY"
        url={`${siteUrl}/services/areas/manhasset`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · North Shore · The Miracle Mile</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Manhasset Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Manhasset, one of Nassau&apos;s premier North
              Shore communities. LGA is 20–30 minutes, Manhattan is 35–50, and all three major NYC
              airports are covered. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the luxury boutiques of Americana Manhasset and the Miracle Mile to the villages of
              Munsey Park and Plandome and North Shore University Hospital, Eagle Eye Chauffeur
              delivers a confirmed driver the night before, a flat rate locked at booking, and a
              late-model luxury vehicle at your door — for an early LGA departure, a day of shopping,
              or a commute into Manhattan.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Manhasset', label: 'North Shore' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~25 min', label: 'To LGA' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Manhasset Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From LGA and JFK airport transfers to Miracle Mile shopping and daily Manhattan
              commutes, Eagle Eye delivers the full ground-transportation suite for Manhasset. Every
              booking includes a flat rate with all tolls, a TLC-licensed chauffeur, and your driver
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Manhasset Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Manhasset via the LIE and Northern Boulevard. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Manhasset Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Manhasset&apos;s Gold Coast estates and luxury-retail corridor expect discretion and
              polish on every trip. A flat rate confirmed at booking, a chauffeur confirmed the night
              before, and a late-model luxury vehicle at the door is the standard Eagle Eye delivers
              on every Manhasset pickup.
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
              Eagle Eye covers all of Manhasset and extends across Nassau County&apos;s North Shore.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Great Neck', 'Port Washington', 'Roslyn', 'Munsey Park',
                'Plandome', 'North Hills', 'Albertson', 'Searingtown',
                'Flower Hill', 'Sands Point', 'Mineola', 'New Hyde Park',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Manhasset Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Fastest airport from Manhasset</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/great-neck" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Great Neck Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring North Shore peninsula</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Manhasset Ride</h2>
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
