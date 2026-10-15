import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'New Hyde Park Car Service | JFK Airport Transfers NYC',
  description:
    'New Hyde Park black car service — flat-rate JFK, LGA & EWR airport transfers from central Nassau County. Locally based chauffeur company. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/new-hyde-park` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/new-hyde-park` },
};

const faqs = [
  {
    q: 'How long is the drive from New Hyde Park to JFK Airport?',
    a: 'Typically 20–30 minutes via the Belt Parkway. New Hyde Park is centrally located in Nassau County with direct access to the Southern State Parkway and the LIE — one of the most convenient Nassau communities for JFK transfers.',
  },
  {
    q: 'Is Eagle Eye Chauffeur based in New Hyde Park?',
    a: 'Yes — Eagle Eye Chauffeur is locally based in New Hyde Park, Nassau County. That means faster response times, drivers who know every local street, and genuine local service rather than a dispatch center hundreds of miles away.',
  },
  {
    q: 'Do you offer New Hyde Park to Manhattan corporate car service?',
    a: 'Yes. Daily corporate car service from New Hyde Park to Midtown Manhattan, the Financial District, and all NYC destinations. Flat rates, professional driver, and door-to-door service — no LIRR connections or transfers.',
  },
  {
    q: 'What areas near New Hyde Park do you serve?',
    a: 'We serve all of New Hyde Park including North New Hyde Park and the surrounding communities of Floral Park, Garden City, Mineola, Albertson, and Williston Park — all under the same flat-rate standard.',
  },
  {
    q: 'How far is New Hyde Park from JFK and LaGuardia?',
    a: 'New Hyde Park sits right on the Queens/Nassau border, so it is one of the closest Nassau communities to the airports — about 13 miles from JFK (roughly 20–30 minutes via the Belt Parkway) and about 11 miles from LaGuardia (25–35 minutes).',
  },
  {
    q: 'How much does a car service from New Hyde Park cost?',
    a: 'New Hyde Park transfers are billed as a flat rate confirmed at booking. Because it is so close to the airports, the JFK and LGA rates are among the lowest in Nassau County — all tolls included, no surge. Enter your trip for an exact quote.',
  },
  {
    q: 'What is the best way to get from New Hyde Park to a NYC airport?',
    a: 'A private car service is the easiest option — a short, direct run door to door with a guaranteed pre-dawn pickup, no AirTrain transfer at Jamaica, and no early-morning rideshare uncertainty. As a locally based service, our drivers know every street in the area.',
  },
];

const routes = [
  { label: 'New Hyde Park to LaGuardia (LGA)', miles: '~11 miles', time: '25–35 min' },
  { label: 'New Hyde Park to JFK Airport', miles: '~13 miles', time: '20–30 min' },
  { label: 'New Hyde Park to Manhattan (Midtown)', miles: '~18 miles', time: '35–60 min' },
  { label: 'New Hyde Park to Brooklyn', miles: '~16 miles', time: '40–55 min' },
  { label: 'New Hyde Park to Newark (EWR)', miles: '~28 miles', time: '55–75 min' },
  { label: 'New Hyde Park to HPN (Westchester)', miles: '~25 miles', time: '50–65 min' },
];

export default function NewHydeParkPage() {
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
          { name: 'New Hyde Park', url: `${siteUrl}/services/areas/new-hyde-park` },
        ]}
      />
      <ServiceJsonLd
        name="New Hyde Park Car Service"
        description="Locally based black car and chauffeur service in New Hyde Park, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR. Corporate travel and 24/7 availability."
        areaServed="New Hyde Park, Nassau County, NY"
        url={`${siteUrl}/services/areas/new-hyde-park`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Locally Based</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">New Hyde Park Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Eagle Eye Chauffeur is based right here in New Hyde Park, Nassau County. Flat-rate airport transfers to JFK in as little as 20 minutes, executive rides into Manhattan, and local drivers who know every route — no surge pricing, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">New Hyde Park Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from New Hyde Park. All rates are flat and confirmed at booking — tolls included.</p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div key={r.label} className="bg-brand-offwhite border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-brand-black text-sm">{r.label}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4"><Link href="/book" className="underline">Get a flat-rate quote →</Link></p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Locally Based in New Hyde Park</h2>
            <p className="text-brand-grey mb-6">
              Because Eagle Eye Chauffeur is headquartered in New Hyde Park, your driver knows the local streets, the best routes to JFK and LGA under different traffic conditions, and how to plan around LIRR and LIE congestion. This is not a dispatch app — it is a local professional service.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat rate — confirmed at booking', body: 'No surprises. Your price is locked the moment you book and never changes.' },
                { title: 'Local drivers who know Nassau', body: 'Your chauffeur lives and works here — every shortcut and alternate route is familiar.' },
                { title: 'Driver confirmed the evening before', body: 'You know who is picking you up before the morning of — not a last-minute assignment.' },
                { title: 'Flight tracking included', body: 'We monitor your flight and adjust pickup timing automatically — no charge for tracked delays.' },
                { title: 'Luxury sedan or SUV', body: 'Clean, premium vehicles on every booking — the class you chose, confirmed beforehand.' },
                { title: '24/7 availability', body: 'Pre-dawn JFK departures and late-night LGA arrivals are everyday runs for us.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-brand-black font-bold mt-0.5">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">New Hyde Park Car Service — FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/areas/nassau-county" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities covered</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">20 min from New Hyde Park</div>
              </Link>
              <Link href="/services/areas/long-island" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Long Island Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Nassau & Suffolk Counties</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your New Hyde Park Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Local service, flat rates, and a driver confirmed before your trip. Available 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors">
                Call {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
