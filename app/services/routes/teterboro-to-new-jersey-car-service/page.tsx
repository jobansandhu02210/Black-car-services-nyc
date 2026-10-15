import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Teterboro Airport to New Jersey Car Service',
  description:
    'Teterboro Airport (TEB) to New Jersey black car service — FBO arrivals to Hoboken, Jersey City, Morristown, Short Hills, Princeton & all NJ. Flat.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/teterboro-to-new-jersey-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/teterboro-to-new-jersey-car-service` },
  keywords: 'teterboro airport to new jersey car service, TEB to NJ car service, teterboro to hoboken, teterboro to jersey city',
};

const faqs = [
  {
    q: 'How does arrival pickup work at TEB when heading to NJ?',
    a: 'Your driver is inside the FBO lobby before your aircraft arrives — name sign ready, vehicle positioned outside. You step off the jet, walk through the FBO, and your chauffeur is there. We confirm the FBO with you at booking (Signature Aviation, Atlantic Aviation, or Meridian) and coordinate your estimated arrival time directly. No public tracking — we work from your flight schedule.',
  },
  {
    q: 'Are flat rates available to NJ suburbs from TEB?',
    a: 'Yes — all Eagle Eye rates are flat and confirmed at booking. Whether you are heading to Fort Lee (10–15 minutes away) or Princeton (over an hour), your rate is locked the moment you reserve. No surge pricing, no traffic premiums, no surprises.',
  },
  {
    q: 'Do you handle corporate accounts for recurring TEB to NJ transfers?',
    a: 'Yes. We work with NJ-based corporations whose executives arrive regularly at Teterboro. Corporate accounts with recurring arrival pickups can be arranged directly with our team — consistent service, consistent standards, streamlined booking.',
  },
  {
    q: 'Can you handle group arrivals from TEB to NJ?',
    a: 'Absolutely. Corporate groups, management teams, and multi-passenger private jet arrivals are a regular part of our TEB service. We coordinate multiple vehicles to meet simultaneously at the FBO so every passenger has a car waiting. Specify your headcount and destination zones at booking.',
  },
  {
    q: 'How far is Teterboro Airport from various NJ cities?',
    a: 'TEB is exceptionally well-located within New Jersey. Fort Lee is 10–15 minutes. Hoboken is 10–20 minutes. Jersey City is 15–25 minutes. Morristown is 30–45 minutes via I-287. Short Hills is 35–50 minutes. Princeton is 55–75 minutes. These times make TEB the fastest private aviation option for most NJ travelers.',
  },
];

export default function TeterboroToNewJerseyCarServicePage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Teterboro to New Jersey Car Service', url: `${getSiteUrl()}/services/routes/teterboro-to-new-jersey-car-service` },
      ]} />
      <ServiceJsonLd
        name="Teterboro Airport to New Jersey Car Service"
        description="Luxury black car service from Teterboro Airport (TEB) to destinations across New Jersey. FBO lobby pickup at Signature Aviation, Atlantic Aviation, and Meridian. Flat rates to Hoboken, Jersey City, Morristown, Short Hills, Princeton, and all NJ. 24/7."
        areaServed="New Jersey, NY Metro Area"
        url={`${getSiteUrl()}/services/routes/teterboro-to-new-jersey-car-service`}
      />

      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-grey text-sm uppercase tracking-widest mb-3">Private Jet Arrivals · TEB to New Jersey</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Teterboro Airport to New Jersey Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-4">
              Land at Teterboro and be home in NJ in minutes. Eagle Eye Chauffeur provides FBO lobby pickup at TEB with flat-rate black car service to Hoboken, Jersey City, Fort Lee, Morristown, Short Hills, Princeton, and every New Jersey destination — 24 hours a day.
            </p>
            <p className="text-brand-grey mb-8">
              Your driver is inside the FBO lobby before your jet arrives. You walk off the aircraft, through the terminal, and straight to your chauffeur — name sign up, vehicle ready at the door. The private aviation experience does not stop at the FBO entrance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book TEB to NJ
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
              Route Times: TEB to New Jersey Destinations
            </h2>
            <p className="text-brand-grey mb-6">
              Teterboro&apos;s Bergen County location makes it the fastest private aviation option for most NJ travelers. These estimates reflect typical conditions — your driver will confirm timing based on current traffic at the time of your arrival.
            </p>
            <div className="space-y-3">
              {[
                { from: 'TEB → Hoboken', time: '10–20 min' },
                { from: 'TEB → Jersey City', time: '15–25 min' },
                { from: 'TEB → Fort Lee', time: '10–15 min' },
                { from: 'TEB → Newark', time: '25–35 min' },
                { from: 'TEB → Morristown', time: '30–45 min' },
                { from: 'TEB → Short Hills', time: '35–50 min' },
                { from: 'TEB → Princeton', time: '55–75 min' },
                { from: 'TEB → Parsippany', time: '30–45 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              All rates are flat and confirmed at booking — no surge pricing, ever.{' '}
              <Link href="/book" className="underline">Get your rate →</Link>
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                What&apos;s Included in Every TEB to NJ Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">FBO lobby meet &amp; greet</strong> — driver inside with name sign before your aircraft arrives. No curbside search.</li>
                <li><strong className="text-brand-black">Direct coordination</strong> — we work from your flight schedule, not public tracking. You or your flight ops team keeps us updated.</li>
                <li><strong className="text-brand-black">Flat-rate pricing to any NJ address</strong> — locked at booking. Time of arrival, traffic, and demand never change it.</li>
                <li><strong className="text-brand-black">30 minutes complimentary wait time</strong> — built in from your estimated arrival. Reasonable schedule shifts are accommodated.</li>
                <li><strong className="text-brand-black">Door-to-door NJ delivery</strong> — your driver takes you all the way to your home, hotel, or office — not just to a general zone.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time during your transfer.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for TEB to New Jersey
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'FBO Lobby Pickup — Not Curbside', body: 'Your driver is inside the FBO when you arrive — not waiting on a public curb. The service matches the level of private aviation.' },
                { title: 'Full NJ Coverage', body: 'From Hoboken to Princeton, from Fort Lee to the Jersey Shore — we cover New Jersey comprehensively. No service gaps, no zone limitations.' },
                { title: 'Flat Rate to Any NJ Address', body: 'Your rate to your specific NJ address is locked at booking. Distance and traffic never trigger additional charges.' },
                { title: 'Corporate Arrival Service', body: 'We support recurring corporate bookings for NJ executives arriving at TEB. Consistent drivers, consistent standards, streamlined coordination.' },
                { title: 'Group Arrival Coordination', body: 'Multiple passengers? We position multiple vehicles at the FBO simultaneously so no one waits. Specify headcount at booking.' },
                { title: 'All TEB FBOs', body: 'Signature Aviation North & South, Atlantic Aviation, and Meridian — your driver is at the right FBO, every time.' },
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
              TEB to NJ — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              When your aircraft lands at TEB and taxis to the FBO, your Eagle Eye chauffeur is already inside the lobby. After deplaning, you pass through the FBO briefly — no immigration, no baggage carousels, no commercial terminal crowds — and your driver greets you with a name sign.
            </p>
            <p className="text-brand-grey mb-4">
              From TEB, reaching most NJ destinations is straightforward. Northern NJ cities like Fort Lee, Hoboken, and Jersey City are 10–25 minutes via the Palisades Interstate Parkway or NJ-3. Morris County destinations (Morristown, Parsippany) are 30–45 minutes via I-287. Points farther south like Short Hills or Princeton require 40–75 minutes depending on conditions.
            </p>
            <p className="text-brand-grey">
              Your driver is confirmed the evening before your arrival with vehicle details and a direct contact number — useful for assistants or flight ops teams coordinating the pickup.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              TEB to New Jersey — FAQ
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
              <Link href="/services/routes/new-jersey-to-teterboro-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">NJ to TEB</div>
                <div className="text-sm text-brand-grey mt-1">Departures from all NJ locations</div>
              </Link>
              <Link href="/services/areas/teb-airport" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">TEB Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All Teterboro routes &amp; FBOs</div>
              </Link>
              <Link href="/services/routes/teterboro-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">TEB to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">FBO arrivals to any Manhattan address</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Book Your TEB to New Jersey Transfer
              </h2>
              <p className="text-brand-silver mb-6">
                Driver in the FBO lobby. Flat rate. Door-to-door delivery anywhere in NJ.
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
