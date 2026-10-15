import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Elmont Car Service | JFK Transfers & UBS Arena',
  description:
    'Elmont NY black car service — flat-rate JFK transfers in 15–25 min, UBS Arena & Belmont Park event rides. Nassau County\'s closest town to JFK. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/elmont` },
  openGraph: {
    ...ogDefaults,
    title: 'Elmont Car Service | JFK Transfers & UBS Arena | Eagle Eye',
    description:
      'Elmont NY black car service — flat-rate JFK, LGA & EWR transfers plus UBS Arena and Belmont Park event rides. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/elmont`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How close is Elmont to JFK Airport?',
    a: 'Elmont is one of the closest Nassau County communities to JFK — typically just 15–25 minutes via the Belt Parkway or Cross Island Parkway. Sitting right on the Queens/Nassau border along the Southern State Parkway, it is among the shortest airport runs in all of Nassau, which makes it a popular base for early-morning departures.',
  },
  {
    q: 'Do you provide car service to and from UBS Arena in Elmont?',
    a: 'Yes. We run event car service to and from UBS Arena at Belmont Park — home of the New York Islanders — for hockey games, concerts, and every arena event. Your chauffeur drops you at the entrance and is pre-arranged for a set pickup point afterward, so you skip the post-event parking-lot gridlock on Hempstead Turnpike and the Cross Island Parkway.',
  },
  {
    q: 'Can you handle Belmont Park and the Belmont Stakes?',
    a: 'Yes. Belmont Park racetrack sits in Elmont, and Belmont Stakes weekend is one of our busiest local dates. We provide flat-rate drop-off and pre-scheduled return pickups for race days, corporate hospitality, and group bookings — hourly and Sprinter-van options are available for larger parties.',
  },
  {
    q: 'Is there a flat-rate car service from Elmont to Manhattan?',
    a: 'Yes. Door-to-door from Elmont to any Manhattan destination — Midtown, the Financial District, or anywhere else — is a flat rate confirmed when you book, typically 40–55 minutes via the Cross Island Parkway and Midtown Tunnel. It is a common alternative to driving to the LIRR Elmont–UBS Arena or Bellerose stations and transferring at the far end.',
  },
  {
    q: 'Which neighborhoods and nearby areas around Elmont do you serve?',
    a: 'We cover all of Elmont — including Alden Manor, Argo Village, and Gotham Gardens — plus the surrounding west-Nassau communities of Franklin Square, Floral Park, Stewart Manor, and Valley Stream, and the neighboring Queens Village/Bellerose line, all under the same flat-rate standard.',
  },
  {
    q: 'Do you offer corporate accounts for Elmont businesses?',
    a: 'Yes. Businesses along the Hempstead Turnpike and Elmont Road corridors use Eagle Eye for consolidated monthly billing, priority scheduling, and airport runs for visiting staff and clients. Your driver is confirmed the night before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Elmont fare is locked before you travel — no surge for early JFK departures, race days, or arena-event nights.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked, professionally trained, and fluent in the Belt Parkway, Cross Island, and Southern State routing that keeps Elmont pickups on time.',
  },
  {
    title: 'Closest Nassau town to JFK',
    desc: 'From Elmont, JFK is often 15–25 minutes door-to-door — one of the shortest airport runs anywhere in Nassau County.',
  },
  {
    title: 'UBS Arena & Belmont ready',
    desc: 'Pre-arranged drop-off and pickup for Islanders games, concerts, and Belmont Park race days — no parking-lot wait afterward.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for pre-dawn JFK and LGA departures.',
  },
  {
    title: 'All tolls included',
    desc: 'Belt Parkway, Cross Island, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Elmont to JFK in as little as 15–25 minutes via the Belt Parkway — flat-rate, all tolls included, meet-and-greet at every terminal with real-time flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Elmont to LaGuardia — typically 30–40 minutes via the Cross Island Parkway and Grand Central Parkway. Flat rate, no surge.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Elmont to Newark Liberty — flat-rate, roughly 50–65 minutes across the city. A practical option for transatlantic and select international routes.',
  },
  {
    title: 'UBS Arena & Belmont Events',
    desc: 'Drop-off and pre-scheduled return for Islanders games, concerts, and Belmont Stakes race days — sedans, SUVs, and Sprinter vans for groups.',
  },
  {
    title: 'Elmont to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — 40–55 minutes, flat rate, a comfortable alternative to the LIRR and a Penn Station transfer.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Hempstead Turnpike and Elmont Road businesses — client visits, multi-stop NYC runs, and event travel.',
  },
];

const routes = [
  { label: 'Elmont → JFK Airport', time: '15–25 min' },
  { label: 'Elmont → LaGuardia (LGA)', time: '30–40 min' },
  { label: 'Elmont → Newark (EWR)', time: '50–65 min' },
  { label: 'Elmont → Manhattan (Midtown)', time: '40–55 min' },
  { label: 'Elmont → Manhattan (Downtown)', time: '35–50 min' },
  { label: 'Elmont → Brooklyn', time: '25–40 min' },
  { label: 'Elmont → UBS Arena / Belmont Park', time: '5–10 min' },
];

export default function ElmontPage() {
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
          { name: 'Elmont', url: `${siteUrl}/services/areas/elmont` },
        ]}
      />
      <ServiceJsonLd
        name="Elmont Car Service"
        description="Premium black car service in Elmont, Nassau County. JFK airport transfers in as little as 15 minutes, plus UBS Arena and Belmont Park event service. TLC-licensed, 24/7 availability."
        areaServed="Elmont, Nassau County, NY"
        url={`${siteUrl}/services/areas/elmont`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Closest to JFK · UBS Arena</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Elmont Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Elmont, on the Nassau/Queens border. JFK is
              often just 15–25 minutes away, Manhattan is 40–55 minutes, and both UBS Arena and
              Belmont Park are minutes from your door. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the residential streets of Alden Manor and Argo Village to the Hempstead Turnpike
              business corridor, Eagle Eye Chauffeur delivers a confirmed driver the night before, a
              flat rate locked at booking, and a late-model luxury vehicle at your door — whether it
              is a pre-dawn JFK departure, an Islanders game at UBS Arena, or a Belmont Stakes race day.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Elmont', label: 'Community' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~15 min', label: 'To JFK' },
                { stat: 'UBS Arena', label: 'At Belmont' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Elmont Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK airport transfers in under half an hour to UBS Arena events and daily Manhattan
              commutes, Eagle Eye delivers the full ground-transportation suite for Elmont. Every
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Elmont Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Elmont via the Belt Parkway, Cross Island, and Southern State Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Elmont Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Elmont blends close-knit residential neighborhoods with two of Long Island&apos;s
              biggest venues, so the town&apos;s travel needs swing from quiet early-morning airport
              runs to high-volume event nights. A flat rate confirmed at booking, a chauffeur
              confirmed the night before, and a luxury vehicle at the door is the standard Eagle Eye
              delivers on every Elmont pickup.
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
              Eagle Eye covers all of Elmont and extends seamlessly across western Nassau County and
              the neighboring Queens line.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Franklin Square', 'Floral Park', 'Stewart Manor', 'Valley Stream',
                'Alden Manor', 'Bellerose', 'Queens Village', 'New Hyde Park',
                'West Hempstead', 'Malverne', 'Lynbrook', 'Garden City',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Elmont Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">15–25 min from Elmont</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/valley-stream" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Valley Stream Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring community near JFK</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Elmont Ride</h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">JFK in 15 minutes. UBS Arena &amp; Belmont service. Flat rates. No surge pricing, ever.</p>
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
