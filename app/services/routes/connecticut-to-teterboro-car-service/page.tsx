import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Connecticut to Teterboro Airport Car Service | TEB',
  description:
    'Connecticut to Teterboro Airport (TEB) car service — Greenwich, Stamford, Westport, Norwalk, Darien & all CT. Flat-rate private jet transfers to.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/connecticut-to-teterboro-car-service` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/connecticut-to-teterboro-car-service`,
    title: 'Connecticut to Teterboro Airport Car Service | TEB | Eagle Eye',
    description:
      'Connecticut to Teterboro Airport (TEB) car service — Greenwich, Stamford, Westport, Norwalk, Darien & all CT. Flat-rate private jet transfers to.',
  },
};

const faqs = [
  {
    q: 'How long does it take from Greenwich, CT to Teterboro Airport (TEB)?',
    a: 'Greenwich to Teterboro Airport typically takes 30–45 minutes under normal traffic conditions. The route runs west on I-95 or the Merritt Parkway to the Hutchinson River Parkway, crossing into New York and then into New Jersey via the George Washington Bridge or the Cross Bronx Expressway, continuing to Route 17 and TEB. On congested mornings — particularly weekday rush hours — budget 45–60 minutes from Greenwich. Your chauffeur monitors live traffic from the moment of dispatch.',
  },
  {
    q: 'Why do Fairfield County executives use Teterboro Airport for private aviation?',
    a: 'Fairfield County is home to one of the highest concentrations of hedge funds, private equity firms, and financial industry executives in the United States. TEB is the New York metro area&apos;s dominant private jet hub — 100% private aviation, no commercial traffic — and its FBO facilities (Signature Aviation, Atlantic Aviation, Meridian) are built around the expectations of institutional clients. The proximity to Fairfield County — under an hour from most CT towns — combined with TEB&apos;s operational infrastructure makes it the default choice for private aviation departures from the Greenwich and Stamford corridor.',
  },
  {
    q: 'Is the rate from Connecticut to TEB a flat rate with tolls included?',
    a: 'Yes. All Eagle Eye Chauffeur rates are flat and confirmed at booking — no surge pricing. Connecticut I-95 tolls and any New York/New Jersey crossings are included in your flat rate. The number you confirm when you book is the number you pay — no additions after the ride. Different Connecticut origins carry different flat rates based on distance; get an instant quote on our booking page.',
  },
  {
    q: 'Can you pick me up from Connecticut very early for a TEB private jet departure?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Early morning departures from Fairfield County to TEB are among our most common runs — hedge fund managers, investment bankers, and corporate executives regularly book 4am and 5am pickups from Greenwich, Darien, and Westport. Your driver is confirmed the evening before with full details. Pre-dawn I-95 from Connecticut is typically clear, making these among our most reliable transfer windows.',
  },
  {
    q: 'Do you offer corporate accounts for Connecticut companies traveling to TEB regularly?',
    a: 'Yes. Eagle Eye Chauffeur works with Connecticut-based firms and family offices on recurring TEB transfers. Corporate accounts can include consolidated monthly billing, consistent vehicle and driver assignment, and direct coordination with an executive assistant or travel manager. If your organization has regular private aviation needs from Connecticut to TEB, contact us to discuss a corporate account arrangement.',
  },
];

export default function ConnecticutToTeterboroPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Connecticut to Teterboro Airport Car Service', url: `${getSiteUrl()}/services/routes/connecticut-to-teterboro-car-service` },
      ]} />
      <ServiceJsonLd
        name="Connecticut to Teterboro Airport Car Service"
        description="Flat-rate black car service from Connecticut to Teterboro Airport (TEB). Serves Greenwich, Stamford, Darien, Norwalk, Westport, Fairfield, New Canaan, and Ridgefield. All CT tolls included. FBO meet & greet. 24/7."
        areaServed="Fairfield County, Connecticut"
        url={`${getSiteUrl()}/services/routes/connecticut-to-teterboro-car-service`}
      />

      {/* ── HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Private Jet Transfer</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Connecticut to Teterboro Airport Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from Greenwich, Stamford, Westport, Darien, and all of
            Connecticut to Teterboro Airport (TEB) — the New York metro area&apos;s premier private
            jet hub. All CT tolls included. FBO meet &amp; greet at Signature Aviation, Atlantic
            Aviation, or Meridian. Door-to-door, 24/7. The transfer of choice for Fairfield County&apos;s
            private aviation community.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['All CT Tolls Included', 'FBO Meet & Greet', 'Fairfield County', '24/7'].map((s) => (
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
            Connecticut to Teterboro Airport — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Travel times are estimates under normal conditions via I-95 or the Merritt Parkway
            westbound into New York and then into New Jersey toward TEB. Weekday morning I-95
            congestion from Stamford and Norwalk can add 15–30 minutes. All pickups depart with
            buffer time built in.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Greenwich, CT → Teterboro Airport (TEB)', time: '30–45 min' },
              { from: 'Stamford, CT → Teterboro Airport (TEB)', time: '35–50 min' },
              { from: 'New Canaan, CT → Teterboro Airport (TEB)', time: '35–50 min' },
              { from: 'Darien, CT → Teterboro Airport (TEB)', time: '40–55 min' },
              { from: 'Ridgefield, CT → Teterboro Airport (TEB)', time: '40–55 min' },
              { from: 'Norwalk, CT → Teterboro Airport (TEB)', time: '45–60 min' },
              { from: 'Westport, CT → Teterboro Airport (TEB)', time: '45–60 min' },
              { from: 'Fairfield, CT → Teterboro Airport (TEB)', time: '55–70 min' },
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
            All rates flat and confirmed at booking. All CT tolls included. No surge pricing — ever.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAIRFIELD COUNTY ANGLE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Fairfield County&apos;s Gateway to Private Aviation
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Teterboro Airport is the primary private jet gateway for Fairfield County&apos;s finance
            and hedge fund community. Here is why TEB is the standard for Connecticut&apos;s most
            frequent private aviation travelers.
          </p>
          <div className="space-y-5">
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">100% private aviation</strong> — Teterboro
                handles no commercial traffic. Every aircraft at TEB is private. Greenwich and
                Darien clients arriving from a New York City charter flight or fractional ownership
                program step directly from the aircraft into the FBO lounge — no security lines,
                no baggage carousels, no crowds.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">The hedge fund and finance corridor</strong> —
                Fairfield County is home to some of the largest hedge funds and asset management
                firms in the world, including major players in Greenwich and Westport. TEB is their
                standard departure point for New York-area private aviation — for domestic routes,
                Caribbean travel, and transatlantic charter flights on large-cabin aircraft.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">FBO facilities</strong> — TEB&apos;s FBOs
                include Signature Aviation (North &amp; South terminals), Atlantic Aviation, and
                Meridian. Each offers private lounges, catering, and full ground services. Eagle
                Eye Chauffeur confirms your FBO assignment and delivers you to the correct lobby.
                On arrivals, your driver is inside the FBO with a name sign when you land.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">No standard app-based tracking</strong> —
                Private jet schedules are not published in commercial flight databases. Eagle Eye
                Chauffeur coordinates directly with you to confirm departure and arrival times. If
                your schedule shifts — as private aviation schedules often do — contact us directly
                and your driver adjusts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            What&apos;s Included in Every Booking
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Every Connecticut to TEB transfer includes the following as standard — not an upgrade,
            not an add-on. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Door-to-Door from Your Connecticut Address',
                body: 'Pickup from your Greenwich estate, Darien home, Westport office, or any CT address — direct to the correct TEB FBO. No shared stops, no pin drops.',
              },
              {
                title: 'All Connecticut Tolls Included',
                body: 'I-95 and Merritt Parkway tolls through Connecticut are included in your flat rate. No toll additions after the trip — the price you confirm is the price you pay.',
              },
              {
                title: 'FBO Meet & Greet at TEB',
                body: 'On arrivals, your driver waits in the FBO lobby with a name sign. Step off the jet and walk directly to your waiting car.',
              },
              {
                title: 'Flat Rate — Confirmed at Booking',
                body: 'Your rate is locked the moment you book. Rush hour I-95 congestion does not change the price you confirmed at reservation.',
              },
              {
                title: 'Professional TLC-Licensed Chauffeur',
                body: 'Every Eagle Eye driver holds a NYC TLC license and knows the Connecticut to TEB corridor — I-95, Merritt Parkway, GWB — by heart.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Business-class sedan or premium SUV, always clean, maintained, and fully private. The vehicle standard that matches your private aviation experience.',
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

      {/* ── BENEFITS CARDS ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Choose Eagle Eye for Connecticut to Teterboro
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Connecticut private aviation clients expect the same standard from their ground
            transfer as from their aircraft. Eagle Eye delivers that from your front door to
            the FBO lobby.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'All CT Tolls Included — No Surprise Charges', body: 'I-95 and Merritt Parkway tolls are part of your flat rate. The price you confirm is the price you pay.' },
              { title: 'Fairfield County Private Aviation Specialist', body: 'We know the FBOs, the corridor, and the standard expected by Greenwich and Darien private aviation clients.' },
              { title: 'Corporate Accounts for CT Firms', body: 'Monthly billing, consistent driver assignment, and travel manager coordination for Fairfield County companies with recurring TEB travel.' },
              { title: 'Early Morning — 24/7 Availability', body: 'Pre-dawn I-95 pickups are standard for our Connecticut clients. Driver confirmed the night before — no uncertainty.' },
              { title: 'No Surge Pricing', body: 'Weekday morning I-95 congestion and rush hour do not change your rate. Flat rate, locked at booking, always.' },
              { title: 'Direct Driver Communication', body: 'If your jet time changes, contact your driver directly. No app, no call center — your driver is reachable at all times.' },
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
            Connecticut to Teterboro — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about Connecticut to TEB private jet car service.
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
            Explore other Eagle Eye Chauffeur routes for Connecticut travelers.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/manhattan-to-connecticut-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Manhattan to Connecticut</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                NYC to Greenwich, Stamford &amp; all CT
              </div>
            </Link>
            <Link
              href="/services/routes/westchester-to-teterboro-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Westchester to TEB</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                White Plains &amp; Westchester to Teterboro
              </div>
            </Link>
            <Link
              href="/services/areas/teb-airport"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">All TEB Services</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Every Teterboro Airport route &amp; FBO
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your Connecticut to TEB Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. All CT tolls included. FBO meet &amp; greet. Greenwich to Fairfield —
            Eagle Eye covers all of Connecticut to Teterboro Airport.
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
