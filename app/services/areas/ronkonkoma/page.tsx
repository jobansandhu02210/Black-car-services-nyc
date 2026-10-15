import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Ronkonkoma Car Service | MacArthur (ISP), JFK & LIRR',
  description:
    'Ronkonkoma NY black car service — flat-rate MacArthur (ISP), JFK, LGA & EWR transfers and LIRR-hub connections in central Suffolk. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/ronkonkoma` },
  openGraph: {
    ...ogDefaults,
    title: 'Ronkonkoma Car Service | MacArthur (ISP), JFK & LIRR | Eagle Eye',
    description:
      'Ronkonkoma NY black car service — MacArthur (ISP) minutes away, plus flat-rate JFK, LGA & EWR transfers and LIRR-hub connections. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/ronkonkoma`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How close is Ronkonkoma to Long Island MacArthur Airport (ISP)?',
    a: 'Very close — Long Island MacArthur Airport (ISP) is in Ronkonkoma, typically just 5–10 minutes from most addresses in town via Veterans Memorial Highway or Johnson Avenue. It is the most convenient airport run anywhere on Long Island, and we provide flat-rate transfers with meet-and-greet and flight tracking.',
  },
  {
    q: 'How long is the drive from Ronkonkoma to JFK Airport?',
    a: 'Ronkonkoma to JFK is typically 55–75 minutes via the Long Island Expressway (LIE) and the Belt Parkway, depending on traffic. For international departures we recommend a 3-hour buffer and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Do you connect with the Ronkonkoma LIRR station?',
    a: 'Yes. Ronkonkoma is the terminus of the LIRR’s busiest branch and one of the largest park-and-ride hubs on Long Island. We provide flat-rate connections for travelers who prefer a door-to-door car, or a reliable pickup meeting an arriving train at the Ronkonkoma Hub.',
  },
  {
    q: 'Do you serve Lake Ronkonkoma and the surrounding area?',
    a: 'Yes. We cover all of Ronkonkoma — from the shores of Lake Ronkonkoma and the Portion Road corridor to the neighborhoods around the airport and the LIRR hub — under the same flat-rate standard, with your driver confirmed the night before.',
  },
  {
    q: 'Is there executive car service from Ronkonkoma to Manhattan?',
    a: 'Yes. Ronkonkoma to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 75–95 minutes via the LIE — a comfortable door-to-door alternative to driving in and parking, or to the LIRR from the Ronkonkoma hub.',
  },
  {
    q: 'Which nearby central-Suffolk communities do you serve?',
    a: 'We cover Ronkonkoma and the surrounding communities — Lake Ronkonkoma, Bohemia, Holbrook, Holtsville, Islandia, and Hauppauge — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'MacArthur (ISP) minutes away',
    desc: 'The airport is in Ronkonkoma — usually 5–10 minutes door-to-door, the most convenient airport run on Long Island.',
  },
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Ronkonkoma fare is locked before you travel — no LIE rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the LIE, Veterans Memorial Highway, and the airport and LIRR hub.',
  },
  {
    title: 'A reliable LIRR alternative',
    desc: 'Skip the park-and-ride crush at the Ronkonkoma Hub — a door-to-door car with your driver confirmed the night before.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early flights out of ISP.',
  },
  {
    title: 'All tolls included',
    desc: 'LIE, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'MacArthur (ISP) Transfers',
    desc: 'Ronkonkoma to Long Island MacArthur Airport in 5–10 minutes — the most convenient airport run on the Island, flat-rate with meet-and-greet.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Ronkonkoma to JFK via the LIE — flat-rate, all tolls included, meet-and-greet at every terminal with real-time flight tracking.',
  },
  {
    title: 'LGA & EWR Transfers',
    desc: 'Flat-rate transfers to LaGuardia and Newark Liberty, all tolls included, for the routes those airports serve best.',
  },
  {
    title: 'LIRR Hub Connections',
    desc: 'Door-to-door connections to and from the Ronkonkoma LIRR station and park-and-ride hub, on your schedule.',
  },
  {
    title: 'Ronkonkoma to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — flat rate, a relaxed alternative to the LIRR or driving in.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for central-Suffolk businesses — client meetings, multi-stop days, and event travel.',
  },
];

const routes = [
  { label: 'Ronkonkoma → MacArthur (ISP)', time: '5–10 min' },
  { label: 'Ronkonkoma → JFK Airport', time: '55–75 min' },
  { label: 'Ronkonkoma → LaGuardia (LGA)', time: '60–80 min' },
  { label: 'Ronkonkoma → Newark (EWR)', time: '85–110 min' },
  { label: 'Ronkonkoma → Manhattan (Midtown)', time: '75–95 min' },
  { label: 'Ronkonkoma → Hauppauge', time: '10–15 min' },
  { label: 'Ronkonkoma → Patchogue', time: '15–20 min' },
];

export default function RonkonkomaPage() {
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
          { name: 'Ronkonkoma', url: `${siteUrl}/services/areas/ronkonkoma` },
        ]}
      />
      <ServiceJsonLd
        name="Ronkonkoma Car Service"
        description="Premium black car service in Ronkonkoma, Suffolk County. Flat-rate transfers to MacArthur (ISP), JFK, LGA, and EWR, plus LIRR-hub connections in central Long Island. 24/7 availability."
        areaServed="Ronkonkoma, Suffolk County, NY"
        url={`${siteUrl}/services/areas/ronkonkoma`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · MacArthur Airport · LIRR Hub</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Ronkonkoma Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Ronkonkoma, the transportation hub of central
              Long Island. MacArthur Airport is 5–10 minutes away, the LIRR terminus is here, and JFK
              is 55–75 minutes. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From Long Island MacArthur Airport and the Ronkonkoma Hub to the shores of Lake
              Ronkonkoma, Eagle Eye Chauffeur delivers a confirmed driver the night before, a flat
              rate locked at booking, and a late-model luxury vehicle at your door — for a quick hop to
              ISP, a run into the city, or a connection at the rail hub.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Ronkonkoma', label: 'Hamlet' },
                { stat: 'Suffolk County', label: 'County' },
                { stat: '~5 min', label: 'To ISP' },
                { stat: 'LIRR Hub', label: 'Terminus' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Ronkonkoma Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From a five-minute hop to MacArthur Airport to JFK transfers, LIRR-hub connections, and
              Manhattan runs, Eagle Eye delivers the full ground-transportation suite for Ronkonkoma.
              Every booking includes a flat rate with all tolls, a TLC-licensed chauffeur, and your
              driver confirmed the night before.
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Ronkonkoma Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Ronkonkoma via the LIE and Veterans Memorial Highway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Ronkonkoma Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              With the airport and the LIRR terminus both in town, Ronkonkoma is where central Long
              Island connects to everywhere else. A flat rate confirmed at booking, a chauffeur
              confirmed the night before, and a luxury vehicle at the door is the standard Eagle Eye
              delivers on every Ronkonkoma pickup.
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
              Eagle Eye covers all of Ronkonkoma and extends across central Suffolk County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Lake Ronkonkoma', 'Bohemia', 'Holbrook', 'Holtsville',
                'Islandia', 'Hauppauge', 'Sayville', 'Lake Grove',
                'Farmingville', 'Patchogue', 'Central Islip', 'Nesconset',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Ronkonkoma Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Flat-rate from Ronkonkoma</div>
              </Link>
              <Link href="/services/areas/suffolk-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
              </Link>
              <Link href="/services/areas/hauppauge" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hauppauge Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring central-Suffolk hub</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Ronkonkoma Ride</h2>
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
