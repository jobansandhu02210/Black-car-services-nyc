import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Floral Park Car Service | JFK & LGA Transfers Nassau',
  description:
    'Floral Park NY black car service — flat-rate JFK, LGA & EWR airport transfers from western Nassau. Tulip Ave, Covert Ave & Bellerose area. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/floral-park` },
  openGraph: {
    ...ogDefaults,
    title: 'Floral Park Car Service | JFK & LGA Transfers Nassau | Eagle Eye',
    description:
      'Floral Park NY black car service — flat-rate JFK, LGA & EWR airport transfers from western Nassau County. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/floral-park`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Floral Park to JFK Airport?',
    a: 'Floral Park to JFK is typically 20–30 minutes via the Cross Island Parkway and Belt Parkway. As one of the westernmost villages in Nassau County, right on the Queens border, Floral Park has one of the shorter JFK runs in the county — ideal for early departures.',
  },
  {
    q: 'How far is Floral Park from LaGuardia (LGA)?',
    a: 'Floral Park to LaGuardia is usually 25–35 minutes via the Cross Island Parkway and Grand Central Parkway. LGA is the closest option for most domestic flights, and your flat rate is confirmed at booking with all parkway tolls included.',
  },
  {
    q: 'Do you serve the Tulip Avenue and Covert Avenue business districts?',
    a: 'Yes. We provide door-to-door pickup throughout Floral Park Village, including the Tulip Avenue and Covert Avenue shopping corridors, plus the residential streets around Floral Park Centre. Corporate accounts are available for local businesses and professional offices.',
  },
  {
    q: 'Is there executive car service from Floral Park to Manhattan?',
    a: 'Yes. Floral Park to Midtown or Downtown Manhattan is typically 40–55 minutes via the Cross Island Parkway and Midtown Tunnel — a comfortable, door-to-door alternative to the LIRR Main Line and Hempstead branch that both stop at Floral Park station.',
  },
  {
    q: 'Do you cover Bellerose, Stewart Manor, and New Hyde Park nearby?',
    a: 'Yes. We serve Floral Park and the adjacent communities of Bellerose, Bellerose Terrace, Stewart Manor, New Hyde Park, and Elmont — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
  {
    q: 'Can you handle Belmont Park and UBS Arena events near Floral Park?',
    a: 'Yes. Belmont Park and UBS Arena sit just south in neighboring Elmont, minutes from Floral Park. We provide flat-rate drop-off and pre-scheduled return pickups for Islanders games, concerts, and Belmont Stakes race days.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Floral Park fare is locked before you travel — no rush-hour surcharge on the Cross Island Parkway, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Jericho Turnpike, Cross Island, and village-street routing around Floral Park.',
  },
  {
    title: 'One of the shortest JFK runs',
    desc: 'On the western edge of Nassau, Floral Park sits 20–30 minutes from JFK — a genuine advantage for early departures.',
  },
  {
    title: 'Door-to-door across the village',
    desc: 'From Floral Park Centre and Tulip Avenue to the Bellerose and Stewart Manor lines — your chauffeur arrives at your exact address.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early LGA and JFK departures.',
  },
  {
    title: 'All tolls included',
    desc: 'Cross Island Parkway, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Floral Park to JFK — 20–30 minutes via the Cross Island and Belt Parkway. Flat-rate, all tolls included, meet-and-greet at every terminal with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Floral Park to LaGuardia — 25–35 minutes via the Grand Central Parkway. The closest airport for most domestic flights.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Floral Park to Newark Liberty — flat-rate, approximately 55–70 minutes across the city. Practical for transatlantic and select international routes.',
  },
  {
    title: 'Floral Park to Manhattan',
    desc: 'Daily executive car service to Midtown or Downtown — 40–55 minutes, flat rate, door-to-door. A comfortable alternative to the LIRR from Floral Park station.',
  },
  {
    title: 'Belmont & UBS Arena Events',
    desc: 'Flat-rate drop-off and pre-scheduled return for Islanders games, concerts, and Belmont Stakes race days minutes away in Elmont.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Tulip Avenue and Covert Avenue businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
];

const routes = [
  { label: 'Floral Park → JFK Airport', time: '20–30 min' },
  { label: 'Floral Park → LaGuardia (LGA)', time: '25–35 min' },
  { label: 'Floral Park → Newark (EWR)', time: '55–70 min' },
  { label: 'Floral Park → Manhattan (Midtown)', time: '40–55 min' },
  { label: 'Floral Park → Manhattan (Downtown)', time: '40–55 min' },
  { label: 'Floral Park → Brooklyn', time: '30–45 min' },
  { label: 'Floral Park → Belmont Park / UBS Arena', time: '5–10 min' },
];

export default function FloralParkPage() {
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
          { name: 'Floral Park', url: `${siteUrl}/services/areas/floral-park` },
        ]}
      />
      <ServiceJsonLd
        name="Floral Park Car Service"
        description="Premium black car service in Floral Park, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from western Nassau. Corporate travel and 24/7 availability."
        areaServed="Floral Park, Nassau County, NY"
        url={`${siteUrl}/services/areas/floral-park`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Western Border Village</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Floral Park Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Floral Park, one of Nassau County&apos;s
              westernmost villages on the Queens border. JFK is 20–30 minutes, LGA is 25–35, and
              Manhattan is 40–55. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the shops of Tulip Avenue and Covert Avenue to the tree-lined streets around
              Floral Park Centre, Eagle Eye Chauffeur delivers the western-Nassau standard of ground
              transportation: a confirmed driver the night before, a flat rate locked at booking,
              and a late-model luxury vehicle at your door — for an early JFK departure, a daily
              Manhattan commute, or an event next door at Belmont Park.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Floral Park', label: 'Village' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~25 min', label: 'To JFK' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Floral Park Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to daily Manhattan commutes and hourly hire, Eagle
              Eye delivers the full ground-transportation suite for Floral Park. Every booking
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Floral Park Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Floral Park via the Cross Island Parkway and Jericho Turnpike. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Floral Park Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Floral Park&apos;s commuter households and Tulip Avenue businesses expect punctuality
              and a professional standard on every trip. A flat rate confirmed at booking, a
              chauffeur confirmed the night before, and a luxury vehicle at the door is what Eagle
              Eye delivers on every Floral Park pickup.
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
              Eagle Eye covers all of Floral Park and extends seamlessly across western Nassau County
              and the neighboring Queens line.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Bellerose', 'Stewart Manor', 'New Hyde Park', 'Elmont',
                'Franklin Square', 'Garden City', 'Mineola', 'Bellerose Terrace',
                'West Hempstead', 'Williston Park', 'Queens Village', 'Valley Stream',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Floral Park Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">20–30 min from Floral Park</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/new-hyde-park" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">New Hyde Park Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring western Nassau village</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Floral Park Ride</h2>
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
