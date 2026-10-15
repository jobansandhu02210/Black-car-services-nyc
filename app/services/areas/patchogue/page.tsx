import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Patchogue Car Service | JFK, ISP & Fire Island Ferry',
  description:
    'Patchogue NY black car service — flat-rate JFK, LGA & ISP airport transfers, Fire Island ferry runs & Patchogue Theatre nights. South Shore Suffolk. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/patchogue` },
  openGraph: {
    ...ogDefaults,
    title: 'Patchogue Car Service | JFK, ISP & Fire Island Ferry | Eagle Eye',
    description:
      'Patchogue NY black car service — flat-rate airport transfers, Fire Island ferry connections, and Patchogue Theatre event rides. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/patchogue`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Patchogue to JFK Airport?',
    a: 'Patchogue to JFK is typically 55–75 minutes via Sunrise Highway (Route 27) and the Belt Parkway, depending on traffic. For international departures we recommend a generous buffer and monitor your flight in real time, so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Do you serve Long Island MacArthur Airport (ISP) from Patchogue?',
    a: 'Yes — and it is often the smart choice. MacArthur Airport (ISP) in Ronkonkoma is only about 15–20 minutes from Patchogue via Route 112 and the LIE, making it a fast, low-stress option for the domestic routes it serves. We provide flat-rate transfers to ISP, JFK, LGA, and EWR alike.',
  },
  {
    q: 'Can you take me to the Fire Island ferries in Patchogue?',
    a: 'Yes. The Davis Park and Watch Hill ferries to Fire Island National Seashore leave from Patchogue, and we run flat-rate drop-offs to the ferry terminals with room for beach luggage and coolers. We can also arrange your return pickup timed to the ferry schedule.',
  },
  {
    q: 'Do you provide car service for Patchogue Theatre events?',
    a: 'Yes. We provide drop-off and pre-scheduled return for shows at the Patchogue Theatre for the Performing Arts and nights out along the revived Main Street. No parking search, no waiting for a ride afterward — your chauffeur is confirmed for a set pickup point.',
  },
  {
    q: 'Is there flat-rate car service from Patchogue to Manhattan?',
    a: 'Yes. Patchogue to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 75–95 minutes via Sunrise Highway and the LIE or Southern State Parkway. A popular door-to-door alternative to driving in and parking, or to the LIRR Montauk branch with a change at Babylon or Jamaica.',
  },
  {
    q: 'Which nearby South Shore communities do you serve?',
    a: 'We cover Patchogue and the surrounding South Shore — Blue Point, Bayport, Sayville, Bellport, East Patchogue, Holbrook, and Medford — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Patchogue fare is locked before you travel — no summer-weekend surcharge on ferry runs, no surge for early airport departures.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with Sunrise Highway, Montauk Highway, and the LIE routing that keeps South Shore trips on schedule.',
  },
  {
    title: 'ISP, JFK, LGA & EWR covered',
    desc: 'MacArthur (ISP) is about 15–20 minutes away; we also run flat-rate transfers to all three NYC-area airports.',
  },
  {
    title: 'Fire Island ferry connections',
    desc: 'Drop-off at the Davis Park and Watch Hill ferry terminals with room for luggage — and a return pickup timed to your boat.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early departures and ferry mornings.',
  },
  {
    title: 'All tolls included',
    desc: 'Belt Parkway, Southern State, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Patchogue to JFK — flat-rate via Sunrise Highway and the Belt Parkway, meet-and-greet at every terminal with real-time flight tracking.',
  },
  {
    title: 'MacArthur (ISP) Transfers',
    desc: 'Patchogue to Long Island MacArthur Airport in about 15–20 minutes — the fast, local option for the domestic routes it serves.',
  },
  {
    title: 'LGA & EWR Transfers',
    desc: 'Flat-rate transfers to LaGuardia and Newark Liberty, all tolls included — a comfortable ride for the routes those airports serve.',
  },
  {
    title: 'Fire Island Ferry Runs',
    desc: 'Drop-off at the Davis Park and Watch Hill ferry terminals in Patchogue, with return pickups timed to the ferry schedule.',
  },
  {
    title: 'Patchogue to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — flat rate, a relaxed alternative to driving in or the LIRR Montauk branch.',
  },
  {
    title: 'Events, Corporate & Hourly',
    desc: 'Patchogue Theatre nights, Main Street outings, weddings, and by-the-hour hire for South Shore businesses and multi-stop itineraries.',
  },
];

const routes = [
  { label: 'Patchogue → MacArthur (ISP)', time: '15–20 min' },
  { label: 'Patchogue → JFK Airport', time: '55–75 min' },
  { label: 'Patchogue → LaGuardia (LGA)', time: '60–80 min' },
  { label: 'Patchogue → Newark (EWR)', time: '90–115 min' },
  { label: 'Patchogue → Manhattan (Midtown)', time: '75–95 min' },
  { label: 'Patchogue → Fire Island Ferries', time: '5–10 min' },
  { label: 'Patchogue → Sayville', time: '10–15 min' },
];

export default function PatchoguePage() {
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
          { name: 'Patchogue', url: `${siteUrl}/services/areas/patchogue` },
        ]}
      />
      <ServiceJsonLd
        name="Patchogue Car Service"
        description="Premium black car service in Patchogue, Suffolk County. Flat-rate airport transfers to ISP, JFK, LGA, and EWR, plus Fire Island ferry runs and Patchogue Theatre event service. 24/7 availability."
        areaServed="Patchogue, Suffolk County, NY"
        url={`${siteUrl}/services/areas/patchogue`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · South Shore · Fire Island Gateway</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Patchogue Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Patchogue, the South Shore&apos;s liveliest
              village. MacArthur Airport is 15–20 minutes away, the Fire Island ferries leave from
              downtown, and all three NYC airports are covered. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the Patchogue Theatre and the Main Street restaurants to the Davis Park and Watch
              Hill ferry docks on the Great South Bay, Eagle Eye Chauffeur delivers a confirmed
              driver the night before, a flat rate locked at booking, and a late-model luxury vehicle
              at your door — for an early flight out of ISP, a summer ferry morning, or a night at the
              theatre.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Patchogue', label: 'Village' },
                { stat: 'Suffolk County', label: 'County' },
                { stat: '~15 min', label: 'To ISP' },
                { stat: 'Fire Island', label: 'Ferry Gateway' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Patchogue Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From MacArthur and JFK airport transfers to Fire Island ferry runs and nights at the
              Patchogue Theatre, Eagle Eye delivers the full ground-transportation suite for the
              South Shore. Every booking includes a flat rate with all tolls, a TLC-licensed
              chauffeur, and your driver confirmed the night before.
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Patchogue Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Patchogue via Sunrise Highway, the LIE, and the Southern State Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Patchogue Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Patchogue&apos;s mix of a revived downtown, summer ferry crowds, and everyday commuters
              means travel needs that shift by the season and the hour. A flat rate confirmed at
              booking, a chauffeur confirmed the night before, and a luxury vehicle at the door is
              the standard Eagle Eye delivers on every Patchogue pickup.
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
              Eagle Eye covers all of Patchogue and extends across the surrounding South Shore of
              Suffolk County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Blue Point', 'Bayport', 'Sayville', 'Bellport',
                'East Patchogue', 'Holbrook', 'Medford', 'Holtsville',
                'Ronkonkoma', 'Bohemia', 'Oakdale', 'Farmingville',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Patchogue Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Flat-rate from Patchogue</div>
              </Link>
              <Link href="/services/areas/suffolk-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
              </Link>
              <Link href="/services/areas/ronkonkoma" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Ronkonkoma Service</div>
                <div className="text-sm text-brand-grey mt-1">MacArthur Airport &amp; LIRR hub</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Patchogue Ride</h2>
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
