import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_URL } from '@/lib/contact';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { PageHero } from '@/components/PageHero';
import { InfoCards, RelatedLinks } from '@/components/AirportSections';
import { ogDefaults } from '@/lib/og';

const path = '/about';
const title = 'About Us | Black Car Service — NYC Airports & Long Distance';
const description =
  'Black Car Service is a New York City car service for airport transfers and long-distance rides to New Jersey, Connecticut, Philadelphia and Washington, DC.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const focus = [
  { title: 'Airports', body: 'JFK, LaGuardia and Newark, in both directions, for any address in New York City, New Jersey and Connecticut.' },
  { title: 'Long distance', body: 'Door-to-door rides to Philadelphia, Washington, DC and towns across New Jersey and Connecticut.' },
  { title: 'Rides that need to happen on time', body: 'Early flights, client pickups, hospital appointments, move-in days — trips where a late or missing car is not an option.' },
];

// TODO(owner): confirm each working principle matches how you run the business.
const principles = [
  { title: 'The fare is confirmed before the ride', body: 'You see an estimate when you book, and we confirm the fare with you before the car is dispatched. Tolls and fees are listed on your invoice.' },
  { title: 'We follow your flight', body: 'Give us a flight number and the pickup moves with the real landing time. Early or late, the car is there when you are.' },
  { title: 'A person answers', body: 'Call or WhatsApp at any hour and you reach someone who can change the booking, not a menu.' },
  { title: 'We say what we do not know', body: 'Airports change terminals and traffic changes plans. Our pages say when information is approximate, and we check the details of your trip before it happens.' },
];

// TODO(owner): confirm — remove any line for a service you do offer.
const notFor = [
  'Party buses, stretch limousines or Sprinter vans',
  'Shared rides — every car is booked by one party',
  'Rides booked through an app marketplace — you book with us directly',
];

const related = [
  { href: '/fleet', title: 'Our fleet', body: 'Sedans and SUVs, Business and First Class.' },
  { href: '/services/airport', title: 'Airport car service', body: 'JFK, LaGuardia and Newark compared.' },
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'Philadelphia, DC, New Jersey and Connecticut.' },
  { href: '/contact', title: 'Contact us', body: 'Phone, WhatsApp and email, 24/7.' },
];

export default function AboutPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'About', url: `${site}${path}` },
        ]}
      />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]}
        eyebrow="About us"
        idPrefix="about"
        h1={`About ${SITE_NAME}`}
        answer={`${SITE_NAME} is a New York City car service built around two kinds of trip: getting to and from the airport, and getting to the next city without a train. We do those well, and we keep the rest of the business simple.`}
        ctaHref="/book"
        ctaLabel="Book a ride"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Focus */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="focus-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="focus-heading"
            eyebrow="What we do"
            title="A New York car service for airports and long trips"
            intro="We are a service-area business: our cars come to you anywhere in New York City and the surrounding states. There is no walk-in office — you book online, by phone or on WhatsApp."
          />
          <InfoCards items={focus} />
        </div>
      </section>

      {/* Principles */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="how-heading" eyebrow="How we work" title="How we run every booking" />
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl bg-brand-white p-6 ring-1 ring-brand-line">
                <h3 className="text-xl text-brand-ink">{p.title}</h3>
                <p className="mt-3 text-brand-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't do */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="not-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">Keeping it focused</p>
            <h2 id="not-heading" className="text-3xl lg:text-[2.5rem] leading-tight text-brand-ink text-balance">
              What we don’t do
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-muted">
              Saying no to some work is how we stay good at the rest. If you need one of these, we are happy to point you in
              the right direction.
            </p>
          </div>
          <ul className="space-y-4 self-center">
            {notFor.map((n) => (
              <li key={n} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
                <span className="text-brand-ink">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*
        TODO(owner): add before launch, from real paperwork only —
        - "Who we are": owner/team names and short bios (E-E-A-T), with photos if available
        - "Licensing and insurance": TLC base name and license number, insurance carrier
        - Year founded
        Do not publish placeholder or estimated values for any of these.
      */}

      {/* Where */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="where-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="where-heading"
            eyebrow="Where we drive"
            title="New York City, New Jersey, Connecticut, Philadelphia and DC"
            intro="Pickups anywhere in the five boroughs and the nearby states, with regular routes to the cities below."
          />
          <RelatedLinks
            links={[
              { href: '/services/areas/new-jersey', title: 'New Jersey', body: 'Hoboken and Jersey City to Princeton and the Shore.' },
              { href: '/services/areas/connecticut', title: 'Connecticut', body: 'Greenwich and Stamford to New Haven and Hartford.' },
              { href: '/services/routes/nyc-to-philadelphia', title: 'Philadelphia', body: 'About two hours from Midtown.' },
              { href: '/services/routes/nyc-to-washington-dc', title: 'Washington, DC', body: 'About four to four and a half hours.' },
            ]}
          />
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-brand-ink py-16 text-brand-white lg:py-20" aria-label="Get in touch">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-3xl font-bold tracking-tight lg:text-4xl">Questions before you book?</p>
          <p className="mt-4 text-lg text-brand-silver">Call, WhatsApp or send us a message — any time.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`tel:${CONTACT_PHONE_E164}`} className="rounded-lg bg-brand-white px-6 py-3 font-display font-bold text-brand-ink hover:bg-brand-sky">
              Call {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-3 font-display font-bold text-brand-white ring-1 ring-brand-white/40 hover:bg-brand-white/10"
            >
              WhatsApp us
            </a>
            <Link href="/contact" className="rounded-lg px-6 py-3 font-display font-bold text-brand-white ring-1 ring-brand-white/40 hover:bg-brand-white/10">
              Contact page
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep exploring" title="More about our service" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
