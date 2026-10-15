import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Westhampton Beach Car Service | NYC & Hamptons Transfers',
  description:
    'Westhampton Beach NY black car service — flat-rate NYC, JFK & Gabreski (FOK) transfers to the westernmost Hamptons village. Dune Road beaches. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/westhampton-beach` },
  openGraph: {
    ...ogDefaults,
    title: 'Westhampton Beach Car Service | NYC & Hamptons Transfers | Eagle Eye',
    description:
      'Westhampton Beach NY black car service — flat-rate NYC and airport transfers to the Hamptons’ westernmost village, plus Gabreski jet and Dune Road runs. Book 24/7.',
    url: `${getSiteUrl()}/services/areas/westhampton-beach`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from NYC to Westhampton Beach?',
    a: 'Manhattan to Westhampton Beach is roughly 80–90 miles — typically 1.75 to 2.5 hours via the Long Island Expressway (LIE) to Sunrise Highway (Route 27), and longer on summer Friday afternoons. As the westernmost of the Hamptons villages, Westhampton Beach is one of the shorter East End runs, and your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'Do you provide airport transfers from JFK, ISP, or Gabreski to Westhampton Beach?',
    a: 'Yes. We run flat-rate transfers from JFK, LaGuardia, and Newark, plus Long Island MacArthur (ISP), which is about 40–50 minutes west. We also serve Francis S. Gabreski Airport (FOK) in Westhampton Beach directly — a common arrival point for private jets and charters to the East End.',
  },
  {
    q: 'Can you take me to the Dune Road beaches?',
    a: 'Yes. We provide flat-rate drop-off and pickup along Dune Road, including Rogers Beach and the oceanfront homes and clubs, with room for beach gear — a relaxed way to reach the ocean without the summer parking scramble.',
  },
  {
    q: 'Do you serve the Main Street shops and the Performing Arts Center?',
    a: 'Yes. We provide flat-rate rides to the upscale Main Street shopping and dining and to shows at the Westhampton Beach Performing Arts Center (WHBPAC), with a chauffeur confirmed for a set pickup point afterward.',
  },
  {
    q: 'Is there car service from Westhampton Beach deeper into the Hamptons?',
    a: 'Yes. From Westhampton Beach we run flat-rate point-to-point service east to Hampton Bays, Southampton, Bridgehampton, East Hampton, and Montauk, and to nearby Quogue and Remsenburg — ideal for dinners, share-house weekends, and multi-stop East End itineraries.',
  },
  {
    q: 'Which nearby East End communities do you serve?',
    a: 'We cover Westhampton Beach and the surrounding communities — Westhampton, Quogue, Quiogue, Remsenburg, Speonk, East Quogue, and Hampton Bays — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Westhampton Beach fare is locked before you travel — no summer-weekend surge on the Route 27 corridor, no holiday premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked, professionally trained, and discreet — experienced with the LIE, Sunrise Highway, and the East End back roads.',
  },
  {
    title: 'The westernmost Hamptons village',
    desc: 'Westhampton Beach is the first oceanfront Hamptons village from the west — one of the shorter East End runs from NYC and the airports.',
  },
  {
    title: 'Gabreski jet & Dune Road ready',
    desc: 'Direct service to Gabreski Airport (FOK) for private-jet arrivals and flat-rate runs to the Dune Road beaches and clubs.',
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
    title: 'NYC to Westhampton Beach',
    desc: 'Flat-rate transfers from Manhattan and the boroughs — roughly 1.75–2.5 hours via the LIE and Sunrise Highway, door-to-door.',
  },
  {
    title: 'Airport Transfers (JFK, LGA, EWR, ISP)',
    desc: 'Meet-and-greet transfers from all NYC-area airports plus MacArthur (ISP), with flight tracking and room for luggage.',
  },
  {
    title: 'Gabreski (FOK) Private-Jet Service',
    desc: 'Direct flat-rate transfers to and from Francis S. Gabreski Airport in Westhampton Beach for jet and charter arrivals.',
  },
  {
    title: 'Dune Road & Beach Runs',
    desc: 'Flat-rate drop-off and timed pickups for Rogers Beach and the Dune Road oceanfront, with room for gear.',
  },
  {
    title: 'Hamptons Point-to-Point',
    desc: 'East to Hampton Bays, Southampton, Bridgehampton, East Hampton, and Montauk; plus Quogue and Remsenburg — flat rate, on your schedule.',
  },
  {
    title: 'Weddings, Events & Hourly',
    desc: 'WHBPAC nights, Main Street dinners, and East End weddings — sedans, SUVs, and Sprinter vans with hourly coverage.',
  },
];

const routes = [
  { label: 'Westhampton Beach → Manhattan (Midtown)', time: '1.75–2.5 hrs' },
  { label: 'Westhampton Beach → JFK Airport', time: '85–110 min' },
  { label: 'Westhampton Beach → MacArthur (ISP)', time: '40–50 min' },
  { label: 'Westhampton Beach → Gabreski (FOK)', time: '5–10 min' },
  { label: 'Westhampton Beach → Hampton Bays', time: '15–20 min' },
  { label: 'Westhampton Beach → Southampton', time: '25–35 min' },
  { label: 'Westhampton Beach → East Hampton', time: '45–60 min' },
];

export default function WesthamptonBeachPage() {
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
          { name: 'Westhampton Beach', url: `${siteUrl}/services/areas/westhampton-beach` },
        ]}
      />
      <ServiceJsonLd
        name="Westhampton Beach Car Service"
        description="Premium black car service to Westhampton Beach, the westernmost Hamptons village. Flat-rate transfers from NYC, JFK, LGA, EWR, ISP, and Gabreski (FOK), plus Dune Road beach runs. 24/7 availability."
        areaServed="Westhampton Beach, Suffolk County, NY"
        url={`${siteUrl}/services/areas/westhampton-beach`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · East End · Westernmost Hamptons Village</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Westhampton Beach Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service to and around Westhampton Beach, the first oceanfront
              village of the Hamptons. NYC is about 1.75–2.5 hours, MacArthur Airport is 40–50
              minutes, and Gabreski Airport is minutes from the village. Flat rates, all tolls
              included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the boutiques of Main Street and the Westhampton Beach Performing Arts Center to
              the Dune Road oceanfront and Gabreski Airport, Eagle Eye Chauffeur delivers a confirmed
              driver the night before, a flat rate locked at booking, and a late-model luxury vehicle
              at your door — for a jet arrival, a share-house weekend, or a night deeper in the
              Hamptons.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Westhampton Beach', label: 'Village' },
                { stat: 'The Hamptons', label: 'East End' },
                { stat: '~80 mi', label: 'From NYC' },
                { stat: 'Gabreski', label: 'Jet Airport' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Westhampton Beach Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From NYC and airport transfers to Gabreski jet arrivals and Dune Road beach runs, Eagle
              Eye delivers the full ground-transportation suite for Westhampton Beach. Every booking
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Westhampton Beach Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times to and from Westhampton Beach via the LIE and Sunrise Highway (Route 27). Summer weekends run longer. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Westhampton Beach Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              As the western anchor of the Hamptons, Westhampton Beach blends private-jet arrivals at
              Gabreski with summer share-house weekends and a walkable village. A flat rate confirmed
              at booking, a chauffeur confirmed the night before, and a late-model luxury vehicle at
              the door is the standard Eagle Eye delivers on every Westhampton Beach pickup.
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
              Eagle Eye covers all of Westhampton Beach and extends across the East End of Suffolk
              County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Westhampton', 'Quogue', 'Quiogue', 'Remsenburg',
                'Speonk', 'East Quogue', 'Hampton Bays', 'Southampton',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Westhampton Beach Car Service — FAQ</h2>
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
              <Link href="/services/areas/hampton-bays" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hampton Bays Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring Hamptons gateway</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Westhampton Beach Ride</h2>
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
