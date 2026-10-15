import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'NYC Black Car Services | Airport, Corporate & Hourly | Eagle Eye',
  },
  description:
    "Eagle Eye Chauffeur's NYC black car services: airport transfers (JFK, LGA, EWR), corporate, hourly hire & events. Flat rates, no surge. Book 24/7.",
  keywords: siteKeywords,
  alternates: { canonical: `${getSiteUrl()}/services` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services`,
    title: 'NYC Black Car Services | Airport, Corporate & Hourly | Eagle Eye',
    description:
      "Eagle Eye Chauffeur's full range of NYC black car services: airport transfers (JFK, LGA, EWR), corporate chauffeur, hourly hire, point-to-point, and special events. Book 24/7.",
  },
};

const services = [
  {
    title: 'Chauffeur Service',
    slug: 'chauffeur-service',
    description: 'Professional, uniformed chauffeurs for door-to-door transfers across all five NYC boroughs, Long Island, New Jersey, and Connecticut. Flat rates, 24/7.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    tags: ['Door-to-Door', 'Professional', '24/7'],
  },
  {
    title: 'Airport Car Service',
    slug: 'airport',
    description: 'JFK, LGA, EWR & HPN — meet-and-greet with name sign, real-time flight tracking, and flat rates. No surge pricing on delays or early arrivals.',
    image: '/service-airport.jpg',
    tags: ['JFK', 'LGA', 'EWR', 'HPN'],
  },
  {
    title: 'Corporate Car Service',
    slug: 'corporate',
    description: 'Executive transfers, roadshows, board meetings, and corporate accounts with consolidated invoicing. Discreet, punctual, and professionally trained chauffeurs.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    tags: ['Roadshows', 'Corporate Accounts', 'Executive'],
  },
  {
    title: 'Hourly Chauffeur Service',
    slug: 'hourly',
    description: 'Flexible hourly hire for meetings, events, roadshows, or city tours. Your driver stays with you for the full booking — no re-booking between stops.',
    image: '/service-hourly.jpg',
    tags: ['By the Hour', 'Meetings', 'Full Day'],
  },
  {
    title: 'Limousine Service',
    slug: 'limousine-service',
    description: 'Premium NYC limousine service for galas, VIP occasions, corporate events, and airport transfers. Luxury vehicles, professional chauffeurs, flat rates.',
    image: '/service-limousine.jpg',
    tags: ['Galas', 'VIP', 'Special Occasions'],
  },
  {
    title: 'Sprinter Van Service',
    slug: 'sprinter-van-service',
    description: 'Mercedes-Benz Sprinter for groups of up to 14. Corporate shuttles, airport group transfers, conference transportation, and event coordination.',
    image: '/service-sprinter-van.jpg',
    tags: ['Up to 14 Passengers', 'Groups', 'Corporate Shuttles'],
  },
  {
    title: 'Long-Distance Car Service',
    slug: 'long-distance',
    description: 'Flat-rate luxury transfers from NYC to the Hamptons, Connecticut, New Jersey, Philadelphia, Washington D.C., and beyond. No surprises.',
    image: '/service-long-distance.jpg',
    tags: ['Hamptons', 'Connecticut', 'Philadelphia'],
  },
  {
    title: 'Wedding Car Service',
    slug: 'wedding',
    description: 'Elegant luxury vehicles for your most important day. Coordinated bridal party transportation, rehearsal dinners, and guest shuttles across NYC.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    tags: ['Weddings', 'Bridal Party', 'Celebrations'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
      ]} />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
              NYC Black Car Services
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl leading-relaxed mb-8">
              From airport transfers and executive corporate travel to weddings and hourly chauffeur hire — Eagle Eye delivers premium black car service across New York City. Flat rates, professional drivers, no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-7 py-3 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-sm">
                Book Now — Instant Quote
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block bg-brand-white border border-brand-light overflow-hidden hover:border-brand-dark transition-colors"
                >
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={s.image}
                      alt={`${s.title} — Eagle Eye Chauffeur NYC`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {s.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-brand-offwhite border border-brand-light px-2 py-0.5 text-brand-grey">{tag}</span>
                      ))}
                    </div>
                    <h2 className="font-serif text-xl font-semibold text-brand-black group-hover:underline mb-2">
                      {s.title}
                    </h2>
                    <p className="text-brand-grey text-sm leading-relaxed">{s.description}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-brand-black">
                      View service details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Airport Services Grid */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
                NYC Airport Black Car Services
              </h2>
              <p className="text-brand-grey mb-6 max-w-2xl text-sm">
                Dedicated pages for every airport — meet-and-greet, flight tracking, and flat rates to and from any NYC neighborhood.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'JFK Airport', href: '/services/airport/jfk', sub: 'All terminals, meet & greet' },
                  { label: 'LaGuardia (LGA)', href: '/services/airport/lga', sub: 'Terminals B, C & D' },
                  { label: 'Newark (EWR)', href: '/services/airport/ewr', sub: 'Tolls included, all terminals' },
                  { label: 'Westchester (HPN)', href: '/services/airport/hpn', sub: 'Private & commercial terminal' },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="block bg-brand-offwhite border border-brand-light p-4 hover:border-brand-dark transition-colors">
                    <div className="font-semibold text-brand-black text-sm">{a.label}</div>
                    <div className="text-brand-grey text-xs mt-1">{a.sub}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Black Car Routes
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { label: 'Manhattan → JFK', href: '/services/routes/manhattan-to-jfk-black-car-service' },
                { label: 'JFK → Manhattan', href: '/services/routes/jfk-to-manhattan-black-car-service' },
                { label: 'Manhattan → LGA', href: '/services/routes/manhattan-to-lga-black-car-service' },
                { label: 'LGA → Manhattan', href: '/services/routes/lga-to-manhattan-black-car-service' },
                { label: 'Manhattan → Newark (EWR)', href: '/services/routes/manhattan-to-ewr-black-car-service' },
                { label: 'Newark (EWR) → Manhattan', href: '/services/routes/ewr-to-manhattan-black-car-service' },
                { label: 'Brooklyn → JFK', href: '/services/routes/brooklyn-to-jfk-black-car-service' },
                { label: 'JFK → Brooklyn', href: '/services/routes/jfk-to-brooklyn' },
                { label: 'Midtown → JFK', href: '/services/routes/midtown-to-jfk-black-car-service' },
                { label: 'Upper East Side → JFK', href: '/services/routes/upper-east-side-to-jfk-black-car-service' },
                { label: 'Manhattan → Brooklyn', href: '/services/routes/manhattan-to-brooklyn' },
                { label: 'JFK → Manhattan (Arrivals)', href: '/services/routes/jfk-to-manhattan-black-car-service' },
              ].map((r) => (
                <Link key={r.href} href={r.href} className="flex items-center justify-between bg-brand-white border border-brand-light p-3 hover:border-brand-dark transition-colors group">
                  <span className="text-brand-black text-sm font-medium">{r.label}</span>
                  <span className="text-brand-grey group-hover:text-brand-black text-sm">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
                NYC Areas We Serve
              </h2>
              <p className="text-brand-grey max-w-3xl text-sm mb-6">
                All five NYC boroughs plus Long Island, Westchester, New Jersey, Connecticut, and the Hamptons. Click any area for dedicated service details.
              </p>
              <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'Manhattan', href: '/services/areas/manhattan' },
                  { label: 'Brooklyn', href: '/services/areas/brooklyn' },
                  { label: 'Queens', href: '/services/areas/queens' },
                  { label: 'The Bronx', href: '/services/areas/bronx' },
                  { label: 'Staten Island', href: '/services/areas/staten-island' },
                  { label: 'Long Island', href: '/services/areas/long-island' },
                  { label: 'Westchester', href: '/services/areas/westchester' },
                  { label: 'New Jersey', href: '/services/areas/new-jersey' },
                  { label: 'Connecticut', href: '/services/areas/connecticut' },
                  { label: 'The Hamptons', href: '/services/areas/hamptons' },
                  { label: 'Nassau County', href: '/services/areas/nassau-county' },
                  { label: 'Suffolk County', href: '/services/areas/suffolk-county' },
                ].map((a) => (
                  <Link key={a.href} href={a.href} className="block bg-brand-offwhite border border-brand-light p-3 hover:border-brand-dark transition-colors text-sm font-medium text-brand-black">
                    {a.label} →
                  </Link>
                ))}
              </div>
              <Link href="/services/areas" className="text-sm font-medium text-brand-black hover:underline">
                View all service areas →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Ready to Book?
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. Professional chauffeur. No surge pricing — ever.</p>
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Book Now — Instant Quote
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
