import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Hempstead Car Service | JFK & LGA Transfers Nassau',
  description:
    'Hempstead NY black car service — flat-rate JFK, LGA & EWR airport transfers, Hofstra University & Nassau Coliseum runs. Central Nassau County. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hempstead` },
  openGraph: {
    ...ogDefaults,
    title: 'Hempstead Car Service | JFK & LGA Transfers Nassau | Eagle Eye',
    description:
      'Hempstead NY black car service — flat-rate airport transfers plus Hofstra University and Nassau Coliseum event runs. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/hempstead`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Hempstead to JFK Airport?',
    a: 'Hempstead to JFK is typically 25–35 minutes via the Southern State Parkway and Belt Parkway under normal conditions. As a central Nassau hub, Hempstead has quick access to all three NYC airports, and your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'Do you provide car service to Hofstra University?',
    a: 'Yes. We serve Hofstra University for campus arrivals and departures, parent visits, move-in and move-out, and airport runs at semester breaks. Flat-rate, door-to-door, with your driver confirmed the night before — a reliable option for students and families.',
  },
  {
    q: 'Can you take us to events at Nassau Coliseum?',
    a: 'Yes. Nassau Coliseum in neighboring Uniondale is minutes from Hempstead, and we provide flat-rate drop-off with pre-scheduled return pickups for concerts, games, and shows — so you skip the parking-lot exit crawl afterward.',
  },
  {
    q: 'How far is Hempstead from LaGuardia (LGA)?',
    a: 'Hempstead to LaGuardia is usually 30–40 minutes via the Meadowbrook and Grand Central Parkways. We track your flight in real time so pickups line up with your arrival, and all parkway tolls are included in your flat rate.',
  },
  {
    q: 'Is there flat-rate car service from Hempstead to Manhattan?',
    a: 'Yes. Hempstead to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 45–60 minutes via the Southern State Parkway and Belt Parkway — a comfortable door-to-door alternative to the LIRR Hempstead branch, which terminates in the village.',
  },
  {
    q: 'Which nearby central-Nassau communities do you serve?',
    a: 'We cover Hempstead and the surrounding communities — West Hempstead, Uniondale, Garden City, Roosevelt, East Meadow, and Franklin Square — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Hempstead fare is locked before you travel — no rush-hour parkway surcharge, no event-night premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Southern State, Meadowbrook, and Hempstead Turnpike routing across central Nassau.',
  },
  {
    title: 'Quick to all three airports',
    desc: 'From central Nassau, JFK is 25–35 minutes and LGA is 30–40 — a genuine advantage for early departures.',
  },
  {
    title: 'Hofstra & Nassau Coliseum ready',
    desc: 'Campus runs for Hofstra University and pre-scheduled event pickups at Nassau Coliseum, minutes away in Uniondale.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early airport departures.',
  },
  {
    title: 'All tolls included',
    desc: 'Southern State, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Hempstead to JFK — 25–35 minutes via the Belt Parkway. Flat-rate, all tolls included, meet-and-greet at every terminal with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Hempstead to LaGuardia — 30–40 minutes via the Meadowbrook and Grand Central Parkways. Flat rate, no surge.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Hempstead to Newark Liberty — flat-rate, roughly 50–70 minutes across the city, for transatlantic and select international routes.',
  },
  {
    title: 'Hofstra & Nassau Coliseum',
    desc: 'Campus arrivals and departures for Hofstra University, plus flat-rate drop-off and pickup for Nassau Coliseum events.',
  },
  {
    title: 'Hempstead to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — 45–60 minutes, flat rate, a relaxed alternative to the LIRR.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for central-Nassau businesses and the county-seat area — client meetings and multi-stop NYC runs.',
  },
];

const routes = [
  { label: 'Hempstead → JFK Airport', time: '25–35 min' },
  { label: 'Hempstead → LaGuardia (LGA)', time: '30–40 min' },
  { label: 'Hempstead → Newark (EWR)', time: '50–70 min' },
  { label: 'Hempstead → Manhattan (Midtown)', time: '45–60 min' },
  { label: 'Hempstead → Manhattan (Downtown)', time: '40–55 min' },
  { label: 'Hempstead → Nassau Coliseum', time: '5–10 min' },
  { label: 'Hempstead → Garden City', time: '5–10 min' },
];

export default function HempsteadPage() {
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
          { name: 'Hempstead', url: `${siteUrl}/services/areas/hempstead` },
        ]}
      />
      <ServiceJsonLd
        name="Hempstead Car Service"
        description="Premium black car service in Hempstead, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR, plus Hofstra University and Nassau Coliseum event service. 24/7 availability."
        areaServed="Hempstead, Nassau County, NY"
        url={`${siteUrl}/services/areas/hempstead`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Central Hub · Hofstra &amp; the Coliseum</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Hempstead Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Hempstead, the busy heart of central Nassau
              County. JFK is 25–35 minutes, LGA is 30–40, and Manhattan is 45–60. Flat rates, all
              tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the Hofstra University campus and the Nassau Coliseum in neighboring Uniondale to
              the Hempstead Transit Center and the Hempstead Turnpike corridor, Eagle Eye Chauffeur
              delivers a confirmed driver the night before, a flat rate locked at booking, and a
              late-model luxury vehicle at your door — for an early flight, a campus run, or a night
              at the Coliseum.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Hempstead', label: 'Village' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~30 min', label: 'To JFK' },
                { stat: 'Hofstra', label: 'University' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hempstead Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to Hofstra campus runs and Nassau Coliseum events,
              Eagle Eye delivers the full ground-transportation suite for Hempstead. Every booking
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hempstead Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Hempstead via the Southern State, Meadowbrook, and Belt Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Hempstead Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              As a central Nassau hub with a major university and a neighboring arena, Hempstead sees
              constant airport, campus, and event travel. A flat rate confirmed at booking, a
              chauffeur confirmed the night before, and a luxury vehicle at the door is the standard
              Eagle Eye delivers on every Hempstead pickup.
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
              Eagle Eye covers all of Hempstead and extends across central Nassau County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'West Hempstead', 'Uniondale', 'Garden City', 'Roosevelt',
                'East Meadow', 'Franklin Square', 'Rockville Centre', 'Mineola',
                'Westbury', 'Freeport', 'Levittown', 'Elmont',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hempstead Car Service — FAQ</h2>
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
              <Link href="/services/airport/jfk" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">25–35 min from Hempstead</div>
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
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Hempstead Ride</h2>
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
