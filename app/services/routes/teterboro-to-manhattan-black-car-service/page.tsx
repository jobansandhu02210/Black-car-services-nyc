import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Teterboro Airport to Manhattan Car Service',
  description:
    'Teterboro Airport (TEB) to Manhattan black car service — FBO lobby pickup, flat rates, door-to-door delivery. Private jet arrivals to any Manhattan.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/teterboro-to-manhattan-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/teterboro-to-manhattan-black-car-service` },
  keywords: 'teterboro airport to manhattan car service, TEB to manhattan black car, teterboro to NYC car service',
};

const faqs = [
  {
    q: 'How does arrival pickup work at a TEB FBO?',
    a: "Your driver arrives at the FBO lobby before your aircraft taxis in — whether that's Signature Aviation, Atlantic Aviation, or Meridian. You step off the jet, walk through the FBO, and your chauffeur is standing inside the lobby with a name sign. No curbside hunting. No delay. We coordinate directly with you in advance so the driver knows exactly which FBO and when.",
  },
  {
    q: 'Is wait time included for TEB arrivals?',
    a: 'Yes — 30 minutes of complimentary wait time is included from your scheduled arrival. Private jet schedules sometimes shift, and we account for that. If your arrival is significantly delayed, just contact us and we will adjust. No penalty for reasonable changes.',
  },
  {
    q: 'Can you handle large luggage and group arrivals from private jets?',
    a: 'Absolutely. Private jet passengers frequently travel with substantial baggage — oversized cases, golf equipment, ski gear, or multiple bags per person. Our Cadillac Escalade SUV handles large loads comfortably. For groups, we coordinate multiple vehicles arriving together at the FBO. Specify your headcount and luggage at booking.',
  },
  {
    q: 'Can my driver track my private jet arrival at TEB?',
    a: 'Private jet manifests are not publicly tracked the way commercial flights are. We coordinate directly with you — not through third-party apps. You or your flight ops contact lets us know your estimated arrival, and we position the driver accordingly. This is standard private aviation ground transport protocol.',
  },
  {
    q: 'Can I book a TEB to Manhattan transfer for someone else arriving on a private jet?',
    a: "Yes. Many of our TEB bookings are made by assistants, chiefs of staff, or flight ops teams on behalf of the passenger. Provide the traveler's name, FBO, and estimated arrival. Your driver will be in the lobby with a name sign. You can receive status updates directly if needed.",
  },
];

export default function TeterboroToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Teterboro to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/teterboro-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Teterboro Airport to Manhattan Black Car Service"
        description="Premium black car service from Teterboro Airport (TEB) to any Manhattan address. FBO lobby pickup at Signature Aviation, Atlantic Aviation, and Meridian. Flat rates, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/teterboro-to-manhattan-black-car-service`}
      />

      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-grey text-sm uppercase tracking-widest mb-3">Private Jet Arrivals · TEB to Manhattan</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Teterboro Airport to Manhattan Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-4">
              Step off your private jet and into a luxury black car — no terminal chaos, no curbside search, no wait. Eagle Eye Chauffeur provides FBO lobby pickup at Teterboro Airport (TEB) with flat-rate service to any Manhattan address, 24 hours a day.
            </p>
            <p className="text-brand-grey mb-8">
              Your driver is already inside the FBO lobby — name sign in hand — when your aircraft arrives. Whether you land at Signature Aviation, Atlantic Aviation, or Meridian, the transition from jet to car is seamless. The private aviation experience continues to your destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book TEB to Manhattan
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
              Route Times: TEB to Manhattan Destinations
            </h2>
            <p className="text-brand-grey mb-6">
              Teterboro&apos;s location in Bergen County, NJ puts it remarkably close to Manhattan. Most TEB to Manhattan trips land you at your destination in 15–30 minutes — far shorter than any commercial airport transfer.
            </p>
            <div className="space-y-3">
              {[
                { from: 'TEB → Midtown Manhattan', time: '15–25 min' },
                { from: 'TEB → Financial District', time: '20–30 min' },
                { from: 'TEB → Upper East Side', time: '20–30 min' },
                { from: 'TEB → Tribeca', time: '20–30 min' },
                { from: 'TEB → Chelsea', time: '18–28 min' },
                { from: 'TEB → Upper West Side', time: '20–30 min' },
                { from: 'TEB → Times Square', time: '20–30 min' },
                { from: 'TEB → Brooklyn', time: '30–45 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              All rates are flat and confirmed at booking. No surge pricing — ever.{' '}
              <Link href="/book" className="underline">Get your rate →</Link>
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                What&apos;s Included in Every TEB to Manhattan Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">FBO lobby meet &amp; greet</strong> — driver inside with a name sign, positioned before your aircraft arrives. No curbside confusion.</li>
                <li><strong className="text-brand-black">Direct coordination</strong> — we work with you directly on your arrival time. No reliance on public flight tracking.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — locked at booking. The time your jet lands, traffic conditions, and demand never change your rate.</li>
                <li><strong className="text-brand-black">30 minutes complimentary wait time</strong> — included from your estimated arrival. No rush, no penalties for minor delays.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — full help at the FBO and at your Manhattan drop-off address.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time during your travel.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for TEB Arrivals
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Inside FBO — Not at the Curb', body: 'Your driver is in the lobby with a name sign. Walk off the jet, through the FBO, and into your car. No searching, no waiting outside.' },
                { title: 'Private Jet Protocol', body: 'Our drivers understand TEB\'s FBO environment and private aviation etiquette — discreet, composed, and ready before you arrive.' },
                { title: 'Flat Rate to Any Manhattan Address', body: 'Hotel lobby, residential building, or office — your flat rate covers door-to-door delivery to any Manhattan destination.' },
                { title: 'All TEB FBOs Covered', body: 'Signature Aviation North & South, Atlantic Aviation, and Meridian — you tell us the FBO at booking, your driver is assigned accordingly.' },
                { title: 'Luxury Sedan or SUV', body: 'Business sedan for solo arrivals. Cadillac Escalade for groups or heavy luggage. Always clean and premium.' },
                { title: 'Third-Party Booking Welcome', body: 'Assistants and ops teams frequently book TEB arrivals on behalf of executives. We coordinate with you, and the passenger walks out to their driver.' },
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
              TEB to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              When you land at Teterboro, your aircraft taxis to your FBO. Once parked, you walk through the terminal briefly. Your Eagle Eye chauffeur is already in the lobby — name sign up, vehicle waiting outside the FBO door. No waiting on the tarmac, no searching for a car on the curb.
            </p>
            <p className="text-brand-grey mb-4">
              The drive from TEB to Manhattan typically takes 15–25 minutes via the Lincoln Tunnel or George Washington Bridge depending on your Manhattan destination and traffic. Your driver selects the optimal route in real-time.
            </p>
            <p className="text-brand-grey">
              Private jet passengers arriving at TEB frequently find this transfer one of the smoothest parts of their trip. The lack of commercial airport infrastructure — no terminals, no queues — keeps the pace entirely on your schedule.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Teterboro to Manhattan — FAQ
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
              <Link href="/services/routes/manhattan-to-teterboro-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to TEB</div>
                <div className="text-sm text-brand-grey mt-1">Departures — door-to-FBO service</div>
              </Link>
              <Link href="/services/areas/teb-airport" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">TEB Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All Teterboro routes &amp; FBOs</div>
              </Link>
              <Link href="/services/routes/teterboro-to-new-jersey-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">TEB to New Jersey</div>
                <div className="text-sm text-brand-grey mt-1">FBO arrivals to all NJ destinations</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Book Your TEB to Manhattan Transfer
              </h2>
              <p className="text-brand-silver mb-6">
                Driver in the FBO lobby. Flat rate. Door-to-door delivery in Manhattan.
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
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
