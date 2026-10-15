import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhattan to Connecticut Car Service',
  description:
    'Manhattan to Connecticut car service — flat-rate black car to Greenwich, Stamford, Westport, Fairfield & all CT. All tolls included. Professional.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-connecticut-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/manhattan-to-connecticut-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from Manhattan to Connecticut?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, no hidden fees. Your rate is the same whether you travel on a weekday morning or a Friday evening during peak hours. All Connecticut tolls are included in your flat rate. Get an instant quote on our booking page by entering your Manhattan address and your Connecticut destination.',
  },
  {
    q: 'How long does it take from NYC to Greenwich, CT?',
    a: 'Greenwich is approximately 45–60 minutes from Midtown Manhattan under normal traffic conditions. During Friday afternoon rush hour or on holiday weekends, travel time can extend to 70–90 minutes due to I-95 and Merritt Parkway congestion. Your chauffeur monitors live traffic and takes the most efficient route available.',
  },
  {
    q: 'Are Connecticut highway tolls included in the rate?',
    a: 'Yes. All tolls on I-95 and the Merritt Parkway through Connecticut are included in your flat rate. Eagle Eye Chauffeur does not add toll charges after the fact — the number you confirm at booking is the number on your receipt. There are no additional fees at the end of the journey.',
  },
  {
    q: 'Do you offer hourly hire for Connecticut day trips?',
    a: 'Yes. Eagle Eye Chauffeur offers hourly hire for Connecticut day trips, multi-stop visits, and business appointments. Your driver waits between stops and is available throughout your day in Connecticut without requiring a separate return booking. Hourly hire is popular for Fairfield County corporate visits and Greenwich business meetings.',
  },
  {
    q: 'Can you pick up from JFK or LGA and drive to Connecticut?',
    a: 'Yes. Airport-to-Connecticut transfers are a popular route with Eagle Eye Chauffeur. We provide meet & greet at JFK or LGA arrivals and drive directly to any Connecticut destination — Greenwich, Stamford, Westport, Fairfield, New Haven, and beyond. All tolls are included in the flat rate for airport-to-CT journeys.',
  },
];


export default function ManhattanToConnecticutPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to Connecticut Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-connecticut-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to Connecticut Car Service"
        description="Flat-rate black car service from Manhattan to all Connecticut destinations — Greenwich, Stamford, Westport, Fairfield, New Haven, and beyond. All tolls included. TLC licensed. 24/7."
        areaServed="Connecticut, Fairfield County, CT"
        url={`${getSiteUrl()}/services/routes/manhattan-to-connecticut-car-service`}
      />

      {/* ── DARK HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Manhattan to Connecticut Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from Manhattan to Greenwich, Stamford, Westport, Fairfield,
            and all of Connecticut. All I-95 and Merritt Parkway tolls included. No surge pricing —
            ever. Professional TLC-licensed chauffeur, door-to-door, 24/7.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['All Tolls Included', 'Flat Rate', '24/7', 'TLC Licensed'].map((s) => (
              <div key={s} className="border border-brand-charcoal p-3 text-center text-sm font-medium">{s}</div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium"
            >
              WhatsApp Booking
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-5">
            Or call us:{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      {/* ── ROUTES TABLE ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Manhattan to Connecticut — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Travel times are estimates from Midtown Manhattan under normal traffic conditions.
            Friday afternoons and holiday weekends add 20–40 minutes on I-95 and the Merritt Parkway.
            Your chauffeur monitors live traffic and takes the fastest available route.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Manhattan → Greenwich, CT', time: '45–60 min' },
              { from: 'Manhattan → Stamford, CT', time: '55–70 min' },
              { from: 'Manhattan → Darien, CT', time: '60–75 min' },
              { from: 'Manhattan → New Canaan, CT', time: '65–80 min' },
              { from: 'Manhattan → Westport, CT', time: '70–85 min' },
              { from: 'Manhattan → Norwalk, CT', time: '65–80 min' },
              { from: 'Manhattan → Fairfield, CT', time: '75–90 min' },
              { from: 'Manhattan → Bridgeport, CT', time: '80–95 min' },
              { from: 'Manhattan → New Haven, CT', time: '100–120 min' },
              { from: 'Manhattan → Danbury, CT', time: '90–110 min' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <span className="font-semibold text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm font-medium whitespace-nowrap">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-5">
            All rates flat and confirmed at booking. All CT tolls included.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            What&apos;s Included in Every Booking
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Every Manhattan to Connecticut booking with Eagle Eye Chauffeur includes the following as
            standard — not an add-on, not an upgrade. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Real-Time Traffic Monitoring',
                body: 'Your chauffeur monitors live traffic on I-95 and the Merritt Parkway throughout the journey. Route adjustments are made automatically to avoid accidents, construction, and congestion without any action required from you.',
              },
              {
                title: 'All Tolls Included (I-95 / Merritt Pkwy)',
                body: 'Every toll from Manhattan to your Connecticut destination is included in your flat rate. I-95 and Merritt Parkway tolls are covered — no additions after the trip, no surprise line items on your receipt.',
              },
              {
                title: 'Flat Rate Confirmed at Booking',
                body: 'Your rate is locked the moment you book. Friday evening Connecticut runs do not cost more than Tuesday mornings. There is no peak pricing, no dynamic pricing, and no re-pricing after the journey is complete.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Business-class sedan or premium SUV — always clean, professionally maintained, and fully private. Select your vehicle class at booking based on your group size and luggage.',
              },
              {
                title: 'Professional TLC-Licensed Chauffeur',
                body: 'Every Eagle Eye driver holds a New York City TLC license. Your chauffeur is a professional, not a part-time gig worker. Manhattan to Connecticut routes require comfort with I-95 traffic and Fairfield County geography — our drivers know both.',
              },
              {
                title: 'Door-to-Door from Any Manhattan Address',
                body: 'Pickup from your home, office, hotel, or any Manhattan address — delivered directly to your Connecticut destination. No walking to a corner, no pin drops, no shared stops.',
              },
              {
                title: '24/7 Availability',
                body: 'Connecticut service is available around the clock — early morning commutes, late-night returns, and same-day bookings. Whether you need a 5am departure or a midnight pickup, Eagle Eye is available.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-brand-black font-bold text-xl mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <div className="font-semibold text-brand-black">{item.title}</div>
                  <div className="text-brand-grey text-sm mt-1 leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Choose Eagle Eye for Manhattan to Connecticut
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Fairfield County is one of the most active corporate corridors in the Northeast.
            Eagle Eye Chauffeur serves the full range of Connecticut destinations from Manhattan —
            from Greenwich to New Haven.
          </p>
          <div className="space-y-7">
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">All Connecticut tolls included</strong> — I-95 and Merritt Parkway tolls are part of your flat rate, no surprise charges at the end of the journey. The price you confirm is the price you pay, regardless of which route your driver takes.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">No surge pricing for CT commuters</strong> — Our rate is fixed at the time of booking and never changes, even when demand spikes at the end of the work week. Commuters and executives traveling between NYC and Fairfield County offices get the same rate every trip.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Hourly hire for CT day trips</strong> — keep your driver for multi-stop Connecticut visits. Whether you have a series of Greenwich meetings or are visiting multiple Fairfield County locations, your chauffeur waits and is available throughout your day without requiring a new booking for each leg.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Executive standard</strong> — professionals commuting between NYC and Connecticut&apos;s Fairfield County offices choose black car for the consistency, the privacy, and the professional standard it delivers. Your vehicle and driver are confirmed the night before.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Airport connections</strong> — JFK or LGA pickup directly to any CT destination. If you are flying into New York and continuing on to Connecticut, Eagle Eye handles the full journey from the airport terminal to your Connecticut door, all tolls included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Eagle Eye for Manhattan to Connecticut
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Connecticut runs — especially to Fairfield County on weekday evenings — reward a pre-booked
            professional service with a confirmed flat rate and an expert driver.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — All CT Tolls Included', body: 'I-95 and Merritt Parkway tolls are included in your flat rate. The price you confirm is the price you pay.' },
              { title: 'No Surge on Busy Evenings', body: 'Our rate is fixed at booking and never changes — even on Friday evenings when Connecticut demand peaks.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver is licensed, background-checked, and trained to a professional standard on every trip.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — confirmed before your trip, not assigned at the last minute.' },
              { title: 'Hourly Hire for Multi-Stop Days', body: 'Keep your driver for multi-stop Connecticut visits. Your chauffeur waits between appointments without re-booking.' },
              { title: 'Driver Confirmed the Night Before', body: 'You receive your chauffeur\'s name, vehicle, and contact details before your travel day begins.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-light p-4">
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

      {/* ── FAQ ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Manhattan to Connecticut Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about booking your Manhattan to Connecticut black car service.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-6">
            More questions? Email{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-black transition-colors">
              {CONTACT_EMAIL_BOOKINGS}
            </a>{' '}
            or call{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-black transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>.
          </p>
        </div>
      </section>

      {/* ── RELATED LINKS ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Related Routes &amp; Services
          </h2>
          <p className="text-brand-grey mb-8">
            Explore other Eagle Eye Chauffeur services you may need.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/areas/connecticut"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Connecticut Service Area</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                All CT cities &amp; towns covered
              </div>
            </Link>
            <Link
              href="/services/routes/nyc-to-westchester-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">NYC to Westchester</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Westchester County service
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Corporate Car Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Monthly accounts &amp; invoicing
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your Manhattan to Connecticut Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. All tolls included. No Friday surge. Greenwich to New Haven —
            Eagle Eye covers all of Connecticut from Manhattan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-4 px-12 bg-brand-white text-brand-black font-semibold hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-4 px-12 border border-brand-white text-brand-white font-semibold hover:bg-brand-charcoal transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Call or text:{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
