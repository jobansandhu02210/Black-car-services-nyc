import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Hampton Bays Car Service | NYC & JFK Hamptons Transfers',
  description:
    'Hampton Bays NY black car service — flat-rate transfers from NYC, JFK, LGA & ISP to the Hamptons’ western gateway. Ponquogue Beach & Shinnecock Canal. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hampton-bays` },
  openGraph: {
    ...ogDefaults,
    title: 'Hampton Bays Car Service | NYC & JFK Hamptons Transfers | Eagle Eye',
    description:
      'Hampton Bays NY black car service — flat-rate NYC and airport transfers to the Hamptons’ western gateway, plus local beach and event runs. No surge. Book 24/7.',
    url: `${getSiteUrl()}/services/areas/hampton-bays`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from NYC to Hampton Bays?',
    a: 'Manhattan to Hampton Bays is roughly 85–95 miles — typically 2 to 2.5 hours via the Long Island Expressway (LIE) to Sunrise Highway (Route 27), and longer on summer Friday afternoons. As the first Hamptons hamlet coming from the west, Hampton Bays is one of the shorter East End runs, and your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'Do you provide airport transfers from JFK, LGA, or ISP to Hampton Bays?',
    a: 'Yes. We run flat-rate transfers from JFK, LaGuardia, and Newark to Hampton Bays, plus Long Island MacArthur (ISP) in Ronkonkoma, which is about 45–55 minutes west and a popular arrival point for the East End. Every arrival includes meet-and-greet and real-time flight tracking.',
  },
  {
    q: 'Can you take me to Ponquogue Beach and the local beaches?',
    a: 'Yes. We provide flat-rate drop-off and timed pickups for Ponquogue Beach and the Ponquogue Bridge, Meschutt Beach, and Tiana Beach — with room for beach gear and coolers. A relaxed way to enjoy the day without parking-permit headaches.',
  },
  {
    q: 'Do you serve the Shinnecock Canal and the marinas?',
    a: 'Yes. The Shinnecock Canal and its marinas are central to Hampton Bays, and we handle flat-rate runs to the canal locks, waterfront restaurants, and boat charters — plus the reopened Canoe Place Inn for events and weddings.',
  },
  {
    q: 'Is there car service from Hampton Bays deeper into the Hamptons?',
    a: 'Yes. From Hampton Bays we run flat-rate point-to-point service east to Southampton, Bridgehampton, East Hampton, Sag Harbor, and Montauk, and west to Westhampton and Quogue — ideal for dinners, share-house weekends, and multi-stop East End itineraries.',
  },
  {
    q: 'Which nearby East End communities do you serve?',
    a: 'We cover Hampton Bays and the surrounding East End — Westhampton, Westhampton Beach, Quogue, East Quogue, Shinnecock Hills, Flanders, and Riverhead — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Hampton Bays fare is locked before you travel — no summer-weekend surge on the Route 27 corridor, no holiday premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the LIE, Sunrise Highway, and the East End back roads that beat the Route 27 crawl.',
  },
  {
    title: 'The Hamptons’ western gateway',
    desc: 'Hampton Bays is the first Hamptons hamlet from the west — one of the shortest East End runs from NYC and the airports.',
  },
  {
    title: 'Beaches, canal & events ready',
    desc: 'Drop-off and timed pickups for Ponquogue Beach, the Shinnecock Canal marinas, and Canoe Place Inn weddings and events.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early departures and share-house weekends.',
  },
  {
    title: 'All tolls included',
    desc: 'LIE, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'NYC to Hampton Bays',
    desc: 'Flat-rate transfers from Manhattan and the boroughs to Hampton Bays — roughly 2–2.5 hours via the LIE and Sunrise Highway, door-to-door.',
  },
  {
    title: 'Airport Transfers (JFK, LGA, EWR, ISP)',
    desc: 'Meet-and-greet transfers from all NYC-area airports plus MacArthur (ISP), with flight tracking and room for luggage.',
  },
  {
    title: 'Hamptons Point-to-Point',
    desc: 'East to Southampton, Bridgehampton, East Hampton, Sag Harbor, and Montauk; west to Westhampton and Quogue — flat rate, on your schedule.',
  },
  {
    title: 'Beach & Canal Runs',
    desc: 'Ponquogue Beach, Meschutt, Tiana Beach, and the Shinnecock Canal marinas — flat-rate drop-off with timed return pickups.',
  },
  {
    title: 'Weddings & Events',
    desc: 'Canoe Place Inn, waterfront venues, and East End celebrations — sedans, SUVs, and Sprinter vans with hourly coverage.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'By-the-hour chauffeur for East End business travel, multi-stop days, and full-weekend coverage.',
  },
];

const routes = [
  { label: 'Hampton Bays → Manhattan (Midtown)', time: '2–2.5 hrs' },
  { label: 'Hampton Bays → JFK Airport', time: '90–120 min' },
  { label: 'Hampton Bays → MacArthur (ISP)', time: '45–55 min' },
  { label: 'Hampton Bays → Southampton', time: '15–20 min' },
  { label: 'Hampton Bays → Westhampton Beach', time: '15–20 min' },
  { label: 'Hampton Bays → East Hampton', time: '35–45 min' },
  { label: 'Hampton Bays → Montauk', time: '55–70 min' },
];

export default function HamptonBaysPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'The Hamptons', url: `${siteUrl}/services/areas/hamptons` },
          { name: 'Hampton Bays', url: `${siteUrl}/services/areas/hampton-bays` },
        ]}
      />
      <ServiceJsonLd
        name="Hampton Bays Car Service"
        description="Premium black car service to Hampton Bays, the western gateway to the Hamptons. Flat-rate transfers from NYC, JFK, LGA, EWR, and ISP, plus beach runs and East End point-to-point. 24/7 availability."
        areaServed="Hampton Bays, Suffolk County, NY"
        url={`${siteUrl}/services/areas/hampton-bays`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · East End · Hamptons Gateway</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Hampton Bays Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service to and around Hampton Bays, the first hamlet of the
              Hamptons coming from the west. NYC is about 2–2.5 hours, MacArthur Airport is 45–55
              minutes, and Southampton is 15–20. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From Ponquogue Beach and the Ponquogue Bridge to the Shinnecock Canal marinas and the
              Canoe Place Inn, Eagle Eye Chauffeur delivers a confirmed driver the night before, a
              flat rate locked at booking, and a late-model luxury vehicle at your door — for an
              airport transfer, a share-house weekend, or a night deeper in the Hamptons.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Hampton Bays', label: 'Hamlet' },
                { stat: 'The Hamptons', label: 'East End' },
                { stat: '~85 mi', label: 'From NYC' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hampton Bays Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From NYC and airport transfers to beach runs and East End point-to-point, Eagle Eye
              delivers the full ground-transportation suite for Hampton Bays. Every booking includes a
              flat rate with all tolls, a TLC-licensed chauffeur, and your driver confirmed the night
              before.
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hampton Bays Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times to and from Hampton Bays via the LIE and Sunrise Highway (Route 27). Summer weekends run longer. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Hampton Bays Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              As the western gateway to the Hamptons, Hampton Bays sees everything from summer
              share-house weekends to quiet off-season getaways. A flat rate confirmed at booking, a
              chauffeur confirmed the night before, and a luxury vehicle at the door is the standard
              Eagle Eye delivers on every Hampton Bays pickup.
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
              Eagle Eye covers all of Hampton Bays and extends across the East End of Suffolk County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Westhampton', 'Westhampton Beach', 'Quogue', 'East Quogue',
                'Shinnecock Hills', 'Southampton', 'Flanders', 'Riverhead',
                'Bridgehampton', 'Sag Harbor', 'East Hampton', 'Montauk',
              ].map((city) => (
                <div key={city} className="p-3 bg-brand-offwhite border border-brand-light text-sm text-brand-black text-center font-medium">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Full Hamptons &amp; East End coverage.{' '}
              <Link href="/services/areas/hamptons" className="underline">See all Hamptons service areas →</Link>
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hampton Bays Car Service — FAQ</h2>
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
              <Link href="/services/areas/hamptons" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hamptons Car Service</div>
                <div className="text-sm text-brand-grey mt-1">All East End destinations</div>
              </Link>
              <Link href="/services/routes/manhattan-to-hamptons-car-service" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to Hamptons</div>
                <div className="text-sm text-brand-grey mt-1">Flat-rate NYC → East End</div>
              </Link>
              <Link href="/services/areas/westhampton-beach" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Westhampton Beach Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring East End village</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Hampton Bays Ride</h2>
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
