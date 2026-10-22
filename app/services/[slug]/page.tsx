import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

type ServiceEntry = {
  title: string;
  h1: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  heroSubtitle: string;
  includes: string[];
  useCases: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string; sub: string }[];
  ctaHeading: string;
  ctaSubline: string;
};

const services: Record<string, ServiceEntry> = {
  'long-distance': {
    title: 'Long-Distance Car Service',
    h1: 'Long-Distance Car Service NYC | Luxury Out-of-State Black Car Transfers',
    seoTitle: 'Long-Distance Car Service NYC | Hamptons, CT, NJ | Eagle Eye',
    description: 'Luxury long-distance car service from NYC to the Hamptons, Connecticut, New Jersey, Philadelphia, Washington D.C., and beyond.',
    metaDescription:
      'Long-distance car service from NYC — flat-rate to the Hamptons, Greenwich, Stamford, Princeton, Philadelphia & DC. No surge pricing. Book 24/7.',
    keywords: [
      'long distance car service nyc',
      'nyc to hamptons car service',
      'nyc to connecticut car service',
      'long distance chauffeur service new york',
      'nyc to philadelphia car service',
      'nyc to washington dc car service',
      'luxury out of state car service nyc',
    ],
    image: '/service-long-distance.jpg',
    heroSubtitle: 'Comfortable, flat-rate long-distance black car transfers from New York City to the Hamptons, Connecticut, New Jersey, Philadelphia, and beyond — no surprise fees, no surge pricing.',
    includes: [
      'Flat-rate pricing confirmed at booking — no surprises at drop-off',
      'Luxury sedan or full-size SUV for extended comfort',
      'Professional TLC-licensed chauffeur for the full journey',
      'Complimentary bottled water and luggage assistance',
      'Tolls and highway fees included in quoted rate',
      'Real-time traffic routing for fastest, smoothest route',
      '24/7 support via phone or WhatsApp throughout your journey',
    ],
    useCases: [
      { title: 'NYC to the Hamptons', desc: 'Flat-rate transfers to East Hampton, Southampton, Bridgehampton, Sag Harbor, and Montauk. No Uber surge on summer Fridays — ever.' },
      { title: 'NYC to Greenwich & Stamford', desc: 'Corporate and residential transfers to Greenwich, Stamford, Westport, Norwalk, and the Gold Coast of Connecticut.' },
      { title: 'NYC to Princeton & Morristown NJ', desc: 'Executive transfers to Princeton, Morristown, Parsippany, and the NJ pharma corridor — flat rate, no detours.' },
      { title: 'NYC to Philadelphia', desc: 'Direct luxury sedan or SUV service between Manhattan and Philadelphia — 95 miles, no stops, door-to-door comfort.' },
      { title: 'NYC to Washington D.C.', desc: 'Long-haul executive transfers to D.C. for federal meetings, lobbying, and government affairs. Discretion guaranteed.' },
      { title: 'NYC to Boston', desc: 'Door-to-door transfers from Manhattan or the airports to Boston — business class comfort the entire way.' },
    ],
    faqs: [
      {
        q: 'How is long-distance pricing calculated?',
        a: 'All long-distance rates are flat and confirmed at booking. You enter your pickup and destination, see the quote, and that price is locked in — no tolls added at the end, no surge for Friday evenings or holiday weekends.',
      },
      {
        q: 'What is the most popular long-distance route from NYC?',
        a: 'NYC to the Hamptons is our most popular long-distance route, especially during summer. We cover all Hamptons destinations — East Hampton, Southampton, Bridgehampton, Sag Harbor, Westhampton, and Montauk.',
      },
      {
        q: 'Can I make stops along the way on a long-distance trip?',
        a: 'Yes. Additional stops can be added to your booking. For multiple stops or a full-day itinerary, our hourly chauffeur service may be more cost-effective — contact us to discuss the best option.',
      },
      {
        q: 'Do you include tolls in your long-distance rates?',
        a: 'Yes. Our quoted flat rates include expected tolls and highway fees for the journey. There are no add-ons at drop-off.',
      },
      {
        q: 'Can I book a round-trip long-distance transfer?',
        a: 'Yes. Round-trip bookings are available and can be scheduled in advance. Your return driver will be confirmed separately so you have full coverage both ways.',
      },
    ],
    relatedLinks: [
      { label: 'NYC to Hamptons', href: '/services/routes/manhattan-to-hamptons-car-service', sub: 'Summer & year-round' },
      { label: 'NYC to Connecticut', href: '/services/routes/manhattan-to-connecticut-car-service', sub: 'Greenwich, Stamford & beyond' },
      { label: 'NYC to Philadelphia', href: '/services/routes/nyc-to-philadelphia', sub: 'Flat-rate direct transfer' },
    ],
    ctaHeading: 'Book Your Long-Distance Car Service',
    ctaSubline: 'Flat rate, confirmed at booking. No surge — ever.',
  },

};

const slugs = Object.keys(services);

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = services[params.slug];
  if (!s) return { title: 'Service' };
  const base = getSiteUrl();
  const path = `${base}/services/${params.slug}`;
  return {
    title: { absolute: s.seoTitle },
    description: s.metaDescription,
    keywords: [...siteKeywords, ...s.keywords],
    alternates: { canonical: path },
    openGraph: {
      ...ogDefaults,
      url: path,
      title: s.seoTitle,
      description: s.metaDescription,
      images: [{ url: s.image, width: 1200, height: 630, alt: `${s.title} — Eagle Eye Chauffeur NYC` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.seoTitle,
      description: s.metaDescription,
      images: [s.image],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services[params.slug];
  if (!s) notFound();

  const base = getSiteUrl();
  const path = `${base}/services/${params.slug}`;

  return (
    <>
      <FaqJsonLd faqs={s.faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: base },
        { name: 'Services', url: `${base}/services` },
        { name: s.title, url: path },
      ]} />
      <ServiceJsonLd name={s.title} description={s.metaDescription} url={path} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] bg-brand-black">
        <Image
          src={s.image}
          alt={s.title}
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/80" />
        <div className="absolute inset-0 flex items-end pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-3">
              {s.h1}
            </h1>
            <p className="text-brand-silver max-w-2xl leading-relaxed">{s.heroSubtitle}</p>
          </div>
        </div>
      </section>

      <div className="bg-brand-offwhite">

        {/* CTAs */}
        <section className="py-8 bg-brand-white border-b border-brand-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3">
            <Link href="/book" className="inline-flex items-center justify-center px-7 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-sm">
              Book Now — Instant Quote
            </Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 border border-brand-black text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                  What&rsquo;s Included in Every Booking
                </h2>
                <ul className="space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-brand-grey text-sm">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                  When to Book {s.title}
                </h2>
                <div className="space-y-4">
                  {s.useCases.map((uc) => (
                    <div key={uc.title} className="bg-brand-white border border-brand-light p-4">
                      <h3 className="font-semibold text-brand-black text-sm mb-1">{uc.title}</h3>
                      <p className="text-brand-grey text-sm">{uc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eagle Eye Benefits */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              The Eagle Eye Chauffeur Difference
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises at the end of the ride.' },
                { title: 'TLC-Licensed Professional Driver', body: 'Every chauffeur is TLC-licensed, background-checked, and trained to a professional hospitality standard.' },
                { title: 'Luxury Sedan or SUV — Guaranteed', body: 'You travel in a premium, clean, maintained black car every time — confirmed before your trip.' },
                { title: 'Exact Door Pickup', body: 'Your driver comes to your building entrance, hotel lobby, or terminal — not a nearby corner.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before — not minutes beforehand.' },
                { title: '24/7 Phone & WhatsApp Support', body: 'Real support before, during, and after your trip — by phone or WhatsApp, any hour of the day.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              {s.title} — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {s.faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {s.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                  <div className="font-semibold text-brand-black">{link.label}</div>
                  <div className="text-sm text-brand-grey mt-1">{link.sub}</div>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-brand-grey">
              <Link href="/services" className="hover:text-brand-black underline">
                ← View all services
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                {s.ctaHeading}
              </h2>
              <p className="text-brand-silver mb-6">{s.ctaSubline}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/book" className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                  Book Now
                </Link>
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
