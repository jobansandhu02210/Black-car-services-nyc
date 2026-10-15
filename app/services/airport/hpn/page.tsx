import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'HPN Car Service | Westchester Airport Transfers',
  description:
    'HPN Westchester County Airport car service — flat rates from Manhattan, Westchester & Fairfield County CT. Meet & greet, professional chauffeur. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/hpn` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/airport/hpn` },
};

const hpnFaqs = [
  {
    q: 'What airlines fly from Westchester Airport (HPN)?',
    a: 'American Airlines operates scheduled commercial service from HPN to major hubs including Philadelphia (PHL) and Charlotte (CLT). The airport also has significant private jet and charter activity via multiple FBO facilities on the field.',
  },
  {
    q: 'How do I get from White Plains to HPN?',
    a: "HPN is located directly in White Plains — if you are a local resident, your driver can be at your door in minutes. If you are coming from Manhattan or Fairfield County, allow 45–65 minutes for the drive depending on traffic and your exact pickup location.",
  },
  {
    q: 'Is HPN better than JFK or LGA for Westchester residents?',
    a: 'Often yes. HPN eliminates the long highway drive to JFK or LGA, typically has minimal security lines, and fast boarding. For Westchester County, Greenwich, Stamford, and Fairfield County travelers connecting via American Airlines hubs, HPN is frequently the most time-efficient option.',
  },
  {
    q: 'Do you provide car service to HPN FBO and private terminals?',
    a: 'Yes. Eagle Eye serves all HPN terminals including the commercial arrivals building and all private FBO and charter facilities. Specify your terminal type — commercial or private/FBO — at booking so your driver goes directly to the correct location.',
  },
  {
    q: 'How much wait time is included for HPN pickups?',
    a: 'For HPN arrivals, 30 minutes complimentary wait time is included after your flight lands. HPN is a compact airport with quick baggage claim and no long customs lines for domestic arrivals, so 30 minutes is typically more than enough time to get to your driver.',
  },
];


const popularRoutes = [
  { label: 'HPN → Midtown Manhattan', time: '45–65 min' },
  { label: 'HPN → White Plains / Westchester', time: '10–20 min' },
  { label: 'HPN → Stamford, CT', time: '30–45 min' },
  { label: 'HPN → Greenwich, CT', time: '35–50 min' },
  { label: 'HPN → Upper East Side / Upper West Side', time: '45–65 min' },
  { label: 'Manhattan → HPN', time: '45–65 min' },
  { label: 'Fairfield County, CT → HPN', time: '25–45 min' },
  { label: 'Brooklyn → HPN', time: '65–85 min' },
];

const whatsIncluded = [
  'Real-time flight tracking — driver adjusts for delays at no extra charge',
  'Meet & greet at arrivals with name sign',
  'Flat-rate pricing locked at booking — no surge pricing',
  'Door-to-door pickup at your exact address',
  '30 minutes complimentary wait time after landing (HPN has fast baggage claim)',
  'Luggage assistance at pickup and terminal',
  '24/7 support via phone or WhatsApp',
];

const terminalInfo = [
  {
    name: 'Commercial Terminal',
    airlines: 'American Airlines to Philadelphia (PHL) and Charlotte (CLT)',
    detail:
      'Compact single terminal building. Arrivals exit directly into a small ground transportation area. Your driver waits with a name sign — visible immediately upon exiting baggage claim. No long walks, no confusing multi-level parking structures.',
  },
  {
    name: 'Private / FBO Terminals',
    airlines: 'Private jets, charter flights, corporate aviation',
    detail:
      'HPN has multiple FBO facilities handling private and charter traffic. Eagle Eye serves all FBOs. Specify your FBO name or indicate private terminal at booking. Your driver will be positioned at the correct facility before you land.',
  },
];

export default function HPNPage() {
  return (
    <>
      <FaqJsonLd faqs={hpnFaqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
          { name: 'HPN Airport', url: `${getSiteUrl()}/services/airport/hpn` },
        ]}
      />
      <ServiceJsonLd
        name="HPN Westchester County Airport Car Service"
        description="Premium black car service to and from Westchester County Airport (HPN). Commercial and private FBO terminals served. Flat-rate pricing, meet & greet, real-time flight tracking. Serving Manhattan, Westchester, and Fairfield County CT."
        areaServed="New York City, NY; Westchester County, NY; Fairfield County, CT"
        url={`${getSiteUrl()}/services/airport/hpn`}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-grey text-sm uppercase tracking-widest mb-3">HPN · Westchester County Airport</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-5">
            HPN Car Service — Westchester Airport Transfers
          </h1>
          <p className="text-lg text-brand-grey mb-4">
            Westchester County Airport (HPN) is the smart alternative to JFK and LGA for travelers in Westchester, Fairfield County Connecticut, and northern Manhattan. Shorter security lines, faster boarding, and easy access from major parkways make HPN the preferred airport for those who value their time.
          </p>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Eagle Eye Chauffeur provides professional black car service to and from HPN — both the commercial terminal for American Airlines passengers and all private/FBO terminals for charter and private jet travelers. Flat rate. Meet &amp; greet. Real-time flight tracking. No surge pricing, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book HPN Transfer
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Terminal Info */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            HPN Terminal Guide — Commercial &amp; Private
          </h2>
          <p className="text-brand-grey mb-8">
            Unlike JFK&apos;s sprawling 8-terminal layout, HPN has one compact commercial terminal and several adjacent private FBO facilities. Your driver is assigned to the correct location at booking — there is no ambiguity at pickup.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {terminalInfo.map((t) => (
              <div key={t.name} className="bg-brand-offwhite border border-brand-light p-5 lg:p-6">
                <div className="font-semibold text-brand-black text-lg mb-1">{t.name}</div>
                <div className="text-sm text-brand-charcoal font-medium mb-3">{t.airlines}</div>
                <p className="text-sm text-brand-grey leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand-offwhite border border-brand-light p-5">
            <p className="text-sm text-brand-grey">
              <strong className="text-brand-black">Quick HPN Fact:</strong> The commercial terminal at HPN is one of the smallest and most efficient commercial airport terminals in the New York region. From gate to ground transportation is often under 10 minutes for domestic arrivals.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Popular HPN Routes
          </h2>
          <p className="text-brand-grey mb-8">
            Route times below are typical estimates under normal traffic conditions. HPN&apos;s location in northern Westchester gives it a natural advantage for CT and Westchester travelers compared to driving all the way to JFK or LGA.
          </p>
          <div className="space-y-3">
            {popularRoutes.map((route) => (
              <div
                key={route.label}
                className="flex justify-between items-center bg-brand-white border border-brand-light p-4"
              >
                <span className="font-medium text-brand-black">{route.label}</span>
                <span className="text-brand-grey text-sm">{route.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your HPN Route
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included with Every HPN Booking
          </h2>
          <p className="text-brand-grey mb-8">
            Eagle Eye&apos;s full service is standard on every HPN booking. Nothing is optional. Nothing is extra.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-6 lg:p-8">
            <ul className="space-y-4">
              {whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-grey">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book HPN Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why HPN */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Why Westchester &amp; Connecticut Travelers Choose HPN
          </h2>
          <p className="text-brand-grey mb-8">
            For residents of Westchester County and Fairfield County CT, flying from HPN instead of JFK or LGA saves not just driving time but overall stress. Here is what that advantage looks like in practice.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-brand-white border border-brand-light p-5">
              <div className="font-semibold text-brand-black mb-2">Shorter Drive to the Airport</div>
              <p className="text-sm text-brand-grey">
                A Greenwich or White Plains resident might spend 25–45 minutes reaching HPN versus 75–90 minutes fighting traffic to JFK. That time adds up across frequent travel.
              </p>
            </div>
            <div className="bg-brand-white border border-brand-light p-5">
              <div className="font-semibold text-brand-black mb-2">Minimal Security Lines</div>
              <p className="text-sm text-brand-grey">
                HPN processes far fewer passengers per day than JFK or LGA. Security lines move quickly, and you rarely need more than 30–45 minutes before your gate.
              </p>
            </div>
            <div className="bg-brand-white border border-brand-light p-5">
              <div className="font-semibold text-brand-black mb-2">Easy Pickup &amp; Drop-Off</div>
              <p className="text-sm text-brand-grey">
                HPN&apos;s compact layout means your driver can be right at the door, not circling a multi-mile loop. Arrivals are fast and uncongested compared to major airports.
              </p>
            </div>
            <div className="bg-brand-white border border-brand-light p-5">
              <div className="font-semibold text-brand-black mb-2">Corporate &amp; Private Aviation</div>
              <p className="text-sm text-brand-grey">
                HPN is a significant private aviation hub. Corporate travelers and executives frequently choose HPN for its efficiency, and Eagle Eye is the professional ground transport partner to match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Why Eagle Eye Black Car at HPN
          </h2>
          <p className="text-brand-grey mb-8">
            Pre-booking a professional black car eliminates all uncertainty — your driver, vehicle,
            and rate are all confirmed before your travel day begins.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Tolls & Fees Included', body: 'Your price is confirmed at booking and never changes. All tolls and airport fees are included — nothing added at the end.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every Eagle Eye driver holds a NYC TLC license and carries commercial insurance. A professional standard on every booking.' },
              { title: 'Luxury Sedan or SUV — Guaranteed', body: 'You travel in a premium, clean, well-maintained black car — confirmed before every trip, not assigned at the last minute.' },
              { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign at the arrivals area — visible the moment you exit baggage claim.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your flight and adjust your driver automatically for delays or early arrivals — at no extra charge.' },
              { title: 'No Hidden Fees', body: 'All tolls are built into your flat rate. The price you confirm is the price you pay — every time.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-light p-5">
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

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            HPN Airport Car Service — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {hpnFaqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-5 lg:p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/areas/westchester"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Westchester Service</div>
              <div className="text-sm text-brand-grey">All Westchester neighborhoods, corporate and residential</div>
            </Link>
            <Link
              href="/services/areas/connecticut"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Connecticut Service</div>
              <div className="text-sm text-brand-grey">Greenwich, Stamford, Darien, Fairfield County and beyond</div>
            </Link>
            <Link
              href="/services/airport/jfk"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">All JFK terminals, meet & greet, flat rates</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
            Book Your HPN Airport Transfer
          </h2>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Commercial or private terminal. Flat rate confirmed instantly. Professional chauffeur tracking your flight before you land.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book HPN Transfer
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
