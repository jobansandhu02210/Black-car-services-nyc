import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Mineola Car Service | LGA & JFK Transfers Nassau',
  description:
    'Mineola NY black car service — flat-rate LGA, JFK & EWR airport transfers from the Nassau county seat. Courthouse, NYU Langone hospital & LIRR hub. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/mineola` },
  openGraph: {
    ...ogDefaults,
    title: 'Mineola Car Service | LGA & JFK Transfers Nassau | Eagle Eye',
    description:
      'Mineola NY black car service — flat-rate airport transfers plus courthouse, hospital, and LIRR-hub connections in the Nassau county seat. No surge. Book 24/7.',
    url: `${getSiteUrl()}/services/areas/mineola`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Mineola to LaGuardia (LGA)?',
    a: 'Mineola to LaGuardia is typically 25–35 minutes via the Northern State Parkway and Grand Central Parkway. LGA is the closest major airport to Mineola, making it the go-to for most domestic travelers, and your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'How far is Mineola from JFK Airport?',
    a: 'Mineola to JFK is typically 35–50 minutes via the LIE and Van Wyck Expressway, depending on traffic. We recommend a 3-hour buffer for international departures and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Do you serve the Nassau County courthouse and government offices?',
    a: 'Yes. Mineola is the Nassau County seat, and we provide flat-rate, on-time car service to and from the county courthouse complex and the government offices along Old Country Road — for attorneys, jurors, and official business, with your driver confirmed the night before.',
  },
  {
    q: 'Do you provide car service to NYU Langone Hospital–Long Island in Mineola?',
    a: 'Yes. We provide reliable, flat-rate car service to and from NYU Langone Hospital–Long Island (formerly Winthrop) in Mineola for appointments, discharges, and family visits — door-to-door, with a professional chauffeur.',
  },
  {
    q: 'Is there executive car service from Mineola to Manhattan?',
    a: 'Yes. Mineola to Midtown or Downtown Manhattan is typically 40–55 minutes via the LIE and Midtown Tunnel — a comfortable door-to-door alternative to the LIRR Main Line, which runs through the busy Mineola station.',
  },
  {
    q: 'Which nearby central-Nassau communities do you serve?',
    a: 'We cover Mineola and the surrounding communities — Garden City, Williston Park, Carle Place, Westbury, Roslyn, and Albertson — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Mineola fare is locked before you travel — no Northern State rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Northern State, LIE, and Old Country Road routing across the county seat.',
  },
  {
    title: 'LGA is the closest airport',
    desc: 'From Mineola, LaGuardia is often just 25–35 minutes — the fastest airport run for most domestic travelers.',
  },
  {
    title: 'Courthouse & hospital ready',
    desc: 'Dependable, on-time service for the Nassau County courthouse complex and NYU Langone Hospital–Long Island.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early LGA and JFK departures.',
  },
  {
    title: 'All tolls included',
    desc: 'Northern State, LIE, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'LGA Airport Transfers',
    desc: 'Mineola to LaGuardia — 25–35 minutes via the Northern State and Grand Central Parkway. The fastest, most popular airport option.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Mineola to JFK — flat-rate, all tolls included, meet-and-greet at every terminal with real-time flight tracking for international departures.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Mineola to Newark Liberty — flat-rate, approximately 50–65 minutes, for transatlantic and select international routes.',
  },
  {
    title: 'Courthouse & Hospital Service',
    desc: 'Reliable, flat-rate car service for the Nassau County courthouse complex and NYU Langone Hospital–Long Island appointments.',
  },
  {
    title: 'Mineola to Manhattan',
    desc: 'Daily executive car service to Midtown or Downtown — 40–55 minutes, flat rate, a comfortable alternative to the LIRR.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for central-Nassau businesses and legal professionals — client meetings and multi-stop NYC runs.',
  },
];

const routes = [
  { label: 'Mineola → LaGuardia (LGA)', time: '25–35 min' },
  { label: 'Mineola → JFK Airport', time: '35–50 min' },
  { label: 'Mineola → Newark (EWR)', time: '50–65 min' },
  { label: 'Mineola → Manhattan (Midtown)', time: '40–55 min' },
  { label: 'Mineola → Manhattan (Downtown)', time: '45–60 min' },
  { label: 'Mineola → Garden City', time: '5–10 min' },
  { label: 'Mineola → Westbury', time: '8–12 min' },
];

export default function MineolaPage() {
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
          { name: 'Mineola', url: `${siteUrl}/services/areas/mineola` },
        ]}
      />
      <ServiceJsonLd
        name="Mineola Car Service"
        description="Premium black car service in Mineola, the Nassau County seat. Flat-rate airport transfers to LGA, JFK, and EWR, plus courthouse and hospital service. 24/7 availability."
        areaServed="Mineola, Nassau County, NY"
        url={`${siteUrl}/services/areas/mineola`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · County Seat · Courthouse &amp; Hospital Hub</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Mineola Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Mineola, the seat of Nassau County. LGA is
              25–35 minutes, Manhattan is 40–55, and all three major NYC airports are covered. Flat
              rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the county courthouse complex and government offices on Old Country Road to NYU
              Langone Hospital–Long Island and the busy Mineola LIRR station, Eagle Eye Chauffeur
              delivers a confirmed driver the night before, a flat rate locked at booking, and a
              late-model luxury vehicle at your door — for an early flight, a court date, or a
              commute into the city.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Mineola', label: 'County Seat' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Mineola Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From LGA and JFK airport transfers to courthouse and hospital runs and daily Manhattan
              commutes, Eagle Eye delivers the full ground-transportation suite for Mineola. Every
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Mineola Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Mineola via the Northern State Parkway and LIE. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Mineola Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              As the Nassau County seat, Mineola runs on courthouse business, hospital visits, and
              commuter travel — all of which demand punctuality. A flat rate confirmed at booking, a
              chauffeur confirmed the night before, and a luxury vehicle at the door is the standard
              Eagle Eye delivers on every Mineola pickup.
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
              Eagle Eye covers all of Mineola and extends across central Nassau County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Garden City', 'Williston Park', 'Carle Place', 'Westbury',
                'Roslyn', 'Albertson', 'East Williston', 'New Hyde Park',
                'Old Westbury', 'Hicksville', 'Manhasset', 'Franklin Square',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Mineola Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Fastest airport from Mineola</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/garden-city" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Garden City Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring central-Nassau village</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Mineola Ride</h2>
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
