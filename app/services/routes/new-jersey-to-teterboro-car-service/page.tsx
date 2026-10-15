import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'New Jersey to Teterboro Airport Car Service',
  description:
    'New Jersey to Teterboro Airport (TEB) black car service — Hoboken, Jersey City, Newark, Princeton, Morristown, Short Hills & all NJ. Flat-rate.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/new-jersey-to-teterboro-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/new-jersey-to-teterboro-car-service` },
  keywords: 'new jersey to teterboro airport car service, NJ to TEB car service, hoboken to teterboro, jersey city to teterboro, newark to teterboro',
};

const faqs = [
  {
    q: 'Do you serve all New Jersey cities for TEB transfers?',
    a: 'Yes — Eagle Eye provides black car service to Teterboro Airport from across New Jersey, including Hoboken, Jersey City, Fort Lee, Newark, Morristown, Short Hills, Summit, Parsippany, Princeton, and beyond. If you are in NJ and flying private from TEB, we can get you there.',
  },
  {
    q: 'Can you handle early morning departures from NJ suburbs to TEB?',
    a: 'Absolutely. Private jet schedules often mean 5am or 6am airport arrivals, especially for executives departing from suburban NJ. Eagle Eye operates 24/7 — early morning pickups from Morristown, Short Hills, Princeton, or any NJ location are fully covered. Your driver is confirmed the evening before.',
  },
  {
    q: 'Do you handle corporate executive travel from NJ offices to TEB?',
    a: 'Yes — corporate NJ-to-TEB transfers are a significant part of our service. We work with finance, pharma, media, and technology companies across New Jersey whose executives travel regularly by private jet. Corporate accounts with recurring TEB bookings can be arranged directly through our team.',
  },
  {
    q: 'Can you coordinate group travel from NJ to TEB?',
    a: 'Yes. For corporate groups, management teams, or multiple passengers departing the same location, we coordinate multiple vehicles to arrive at the FBO together. Specify your group size, headcount, and luggage details at booking — we handle the logistics.',
  },
  {
    q: 'Are flat rates available from different NJ cities to TEB?',
    a: 'Yes — all Eagle Eye rates are flat and confirmed at booking, regardless of your NJ origin. Whether you are departing from Fort Lee (10 minutes away) or Princeton (over an hour), your rate is locked the moment you reserve. No surge pricing, no traffic premiums.',
  },
];

export default function NewJerseyToTeterboroCarServicePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'New Jersey to Teterboro Car Service', url: `${getSiteUrl()}/services/routes/new-jersey-to-teterboro-car-service` },
      ]} />
      <ServiceJsonLd
        name="New Jersey to Teterboro Airport Car Service"
        description="Luxury black car service from across New Jersey to Teterboro Airport (TEB). Hoboken, Jersey City, Newark, Morristown, Short Hills, Princeton and all NJ. Flat rates, FBO delivery, 24/7."
        areaServed="New Jersey, NY Metro Area"
        url={`${getSiteUrl()}/services/routes/new-jersey-to-teterboro-car-service`}
      />

      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-grey text-sm uppercase tracking-widest mb-3">Private Jet Departures · New Jersey to TEB</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              New Jersey to Teterboro Airport Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-4">
              Teterboro Airport sits in the heart of Bergen County — making it the natural departure point for New Jersey&apos;s private aviation travelers. Eagle Eye Chauffeur provides flat-rate black car service to TEB from Hoboken, Jersey City, Fort Lee, Newark, Morristown, Short Hills, Princeton, and every corner of NJ.
            </p>
            <p className="text-brand-grey mb-8">
              Your driver picks you up at your NJ address — home, office, or hotel — and delivers you directly to your FBO entrance at Teterboro. Flat rate. No surge. Door-to-FBO, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book NJ to TEB
              </Link>
              <Link href="/services/areas/teb-airport" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All TEB Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Route Times: New Jersey Locations to TEB
            </h2>
            <p className="text-brand-grey mb-6">
              Teterboro&apos;s Bergen County location gives NJ travelers an unusually short airport transfer compared to Newark Liberty or JFK. These are typical estimates under normal traffic conditions.
            </p>
            <div className="space-y-3">
              {[
                { from: 'Hoboken → TEB', time: '10–20 min' },
                { from: 'Jersey City → TEB', time: '15–25 min' },
                { from: 'Newark → TEB', time: '25–35 min' },
                { from: 'Fort Lee → TEB', time: '10–15 min' },
                { from: 'Morristown → TEB', time: '30–45 min' },
                { from: 'Short Hills → TEB', time: '35–50 min' },
                { from: 'Princeton → TEB', time: '55–75 min' },
                { from: 'Parsippany → TEB', time: '30–45 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              All rates are flat and confirmed at booking — no surge, no traffic premiums.{' '}
              <Link href="/book" className="underline">Get your rate →</Link>
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                What&apos;s Included in Every NJ to TEB Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur comes to your NJ address: home, corporate office, or hotel.</li>
                <li><strong className="text-brand-black">Direct FBO delivery</strong> — we drive to your specific TEB FBO entrance. Confirmed at booking — no confusion on arrival.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — locked when you book. Distance, traffic, and time of day never change your rate.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — full help with bags at your NJ pickup and at the FBO.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — chauffeur name, contact, and vehicle details sent the evening before.</li>
                <li><strong className="text-brand-black">24/7 availability</strong> — early morning, late night, and weekend TEB departures fully covered.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for NJ to Teterboro
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'NJ Suburb Coverage', body: 'From urban Hoboken to the far reaches of Princeton — we cover NJ comprehensively. No zone restrictions or coverage gaps.' },
                { title: 'FBO-Ready Chauffeurs', body: 'Our drivers know Teterboro\'s FBO layout — correct entrance, proper lobby protocol. No commercial airport habits applied to private aviation.' },
                { title: 'Flat Rate — Locked at Booking', body: 'Your rate is set when you book and never changes. No surge pricing during commute hours or peak travel periods.' },
                { title: 'Corporate NJ Accounts', body: 'We support recurring corporate bookings for NJ-based executives flying private regularly. Reach out for tailored arrangements.' },
                { title: 'Group Coordination', body: 'Multiple passengers departing from one NJ location? We coordinate arrival times and vehicle count so the whole group arrives at the FBO together.' },
                { title: 'Pre-Dawn & Weekend Departures', body: 'Private jet departures do not follow 9-to-5 hours. Eagle Eye is available whenever your aircraft is scheduled — day, night, or weekend.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-4">
                  <div className="flex items-start gap-3 mb-1">
                    <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              NJ to TEB — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              Teterboro Airport is located in Bergen County, NJ — making it the shortest airport transfer in the region for most New Jersey private aviation travelers. Fort Lee is under 15 minutes away. Hoboken is 10–20 minutes. Even from Morristown or Parsippany, you are looking at 30–45 minutes on Route 287 or I-80.
            </p>
            <p className="text-brand-grey mb-4">
              Unlike EWR or JFK, there are no commercial terminals, no check-in queues, and no TSA lines at TEB. Your driver pulls directly to the FBO entrance — Signature Aviation, Atlantic Aviation, or Meridian — and you walk in. The private aviation experience starts the moment you step into your black car.
            </p>
            <p className="text-brand-grey">
              We recommend scheduling pickup 30–45 minutes before your intended wheels-up time from most NJ locations. For Princeton or farther points south, allow additional margin. Your driver will confirm timing the evening before.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              New Jersey to TEB — FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related TEB Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/teterboro-to-new-jersey-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">TEB to New Jersey</div>
                <div className="text-sm text-brand-grey mt-1">FBO arrivals to all NJ destinations</div>
              </Link>
              <Link href="/services/areas/teb-airport" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">TEB Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All Teterboro routes &amp; FBOs</div>
              </Link>
              <Link href="/services/routes/manhattan-to-teterboro-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to TEB</div>
                <div className="text-sm text-brand-grey mt-1">Door-to-FBO from any Manhattan address</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Book Your NJ to TEB Black Car
              </h2>
              <p className="text-brand-silver mb-6">
                Flat rate. FBO delivery. Door-to-door from anywhere in New Jersey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book" className="inline-flex items-center justify-center px-8 py-3 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                  Reserve Now
                </Link>
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
                >
                  Book on WhatsApp
                </a>
              </div>
              <p className="text-brand-silver text-sm mt-6">
                Questions? Call{' '}
                <a href={`tel:${CONTACT_PHONE_E164}`} className="underline">
                  {CONTACT_PHONE_DISPLAY}
                </a>{' '}
                or email{' '}
                <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
                  {CONTACT_EMAIL_BOOKINGS}
                </a>
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
