import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { PageHero, TextTable } from '@/components/PageHero';
import { FaqList, RelatedLinks } from '@/components/AirportSections';
import { VehiclePhoto } from '@/components/VehiclePhoto';
import { FLEET_CLASSES, SPRINTERS } from '@/lib/fleet';
import { ogDefaults } from '@/lib/og';

const path = '/fleet';
const title = 'Our Fleet: Sedans, SUVs & Sprinter Vans | Black Car Service';
const description =
  'Mercedes, BMW, Cadillac, Lincoln and Chevrolet sedans and SUVs, plus Sprinter vans for groups. See what each class seats and pick the right car.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const chooser: string[][] = [
  ['1–2 people, carry-ons or one suitcase each', 'Business Sedan'],
  ['3 people with one suitcase each', 'Business Sedan (tight) or Business SUV'],
  ['4–6 people', 'Business SUV'],
  ['Strollers, car seats, skis, golf bags', 'Business SUV'],
  ['Visiting client or senior executive', 'First Class Sedan or SUV'],
  ['Four-hour trip to Washington, DC', 'SUV or First Class for the legroom'],
  ['7 or more people', 'A Sprinter van, or two cars timed to travel together'],
];

// TODO(owner): confirm child-seat policy and anything else you provide on request.
const faqs = [
  {
    q: 'How many suitcases fit in a black car sedan?',
    a: 'A Business or First Class Sedan takes up to three bags — typically two large suitcases and a carry-on. For more than that, choose an SUV.',
  },
  {
    q: 'What is the difference between Business and First Class?',
    a: 'The same capacity, but First Class cars are newer, top-trim vehicles with quieter cabins and more legroom. Business Class is the everyday choice.',
  },
  {
    q: 'How many passengers fit in a black SUV?',
    a: 'Up to six passengers with up to six bags. If everyone has a large suitcase, five people is more comfortable.',
  },
  {
    q: 'Can I get a car seat for my child?',
    a: 'Tell us your child’s age and weight when you book, in the special requests box, and we will confirm what we can arrange before the ride.',
  },
  {
    q: 'What if our group is too big for one car?',
    a: 'Book a Sprinter — they seat 13 to 18 depending on the build — or we send two or more cars timed to travel together. Call or message us for a Sprinter quote.',
  },
  {
    q: 'Can I request a specific vehicle?',
    a: 'You choose the class when you book. If you need something particular — a specific model or color for an occasion — ask in special requests and we will tell you whether we can do it.',
  },
];

const related = [
  { href: '/services/airport', title: 'Airport car service', body: 'JFK, LaGuardia and Newark compared.' },
  { href: '/services/long-distance', title: 'Long-distance car service', body: 'Philadelphia, DC, New Jersey and Connecticut.' },
  { href: '/about', title: 'About us', body: 'Who we are and how we work.' },
  { href: '/book', title: 'Book a ride', body: 'Pick your car and see an estimate.' },
];

export default function FleetPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Fleet', url: `${site}${path}` },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Fleet' }]}
        eyebrow="Sedans · SUVs · Sprinter vans"
        idPrefix="fleet"
        h1="Our Fleet: Sedans, SUVs and Sprinter Vans"
        answer={`${SITE_NAME} runs four classes of car — Business and First Class, each as a sedan for up to three people or an SUV for up to six — plus three Sprinter vans for groups of up to 18. Every car takes as many bags as it does passengers, so choosing is mostly about counting suitcases.`}
        ctaHref="/book"
        ctaLabel="Choose a car and book"
        phoneDisplay={CONTACT_PHONE_DISPLAY}
        phoneE164={CONTACT_PHONE_E164}
      />

      {/* Classes */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="classes-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="classes-heading"
            eyebrow="Vehicle classes"
            title="Business and First Class, sedan or SUV"
            intro="You book a class, not a specific car. The models below are what each class looks like on the day."
          />
          <div className="space-y-12">
            {FLEET_CLASSES.map((c) => (
              <div key={c.id} className="rounded-2xl border border-brand-line p-6 lg:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl text-brand-ink">{c.name}</h3>
                  <p className="text-sm font-semibold text-brand-accent">
                    Up to {c.passengers} passengers · {c.bags} bags
                  </p>
                </div>
                <p className="mt-2 max-w-3xl text-brand-muted leading-relaxed">{c.body}</p>
                <p className="mt-2 text-sm text-brand-ink">
                  <span className="font-semibold">Best for:</span> {c.bestFor}
                </p>
                <ul className={`mt-6 grid gap-4 sm:grid-cols-2 ${c.models.length > 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-2'}`}>
                  {c.models.map((m) => (
                    <li key={m.name} className="rounded-xl ring-1 ring-brand-line">
                      <VehiclePhoto src={m.image} alt={`${m.name} — ${c.name}`} />
                      <p className="px-4 pb-4 pt-1 font-display font-semibold text-brand-ink">{m.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sprinters */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="sprinter-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="sprinter-heading"
            eyebrow="Groups"
            title="Sprinter vans for groups of up to 18"
            intro="When the group is too big for one SUV. Sprinters are quoted per trip — call, WhatsApp or send us a message with the date, times and head count."
          />
          <ul className="grid gap-5 md:grid-cols-3">
            {SPRINTERS.map((v) => (
              <li key={v.name} className="rounded-2xl bg-brand-white p-5 ring-1 ring-brand-line">
                <VehiclePhoto src={v.image} alt={v.name} />
                <h3 className="mt-4 text-xl text-brand-ink">{v.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-accent">{v.seats}</p>
                <p className="mt-3 text-brand-muted leading-relaxed">{v.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-lg bg-brand-accent px-6 py-3 text-center font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
              Ask for a Sprinter quote
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="rounded-lg bg-brand-white px-6 py-3 text-center font-display text-sm font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-accent"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Chooser */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="choose-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="choose-heading"
            eyebrow="Choosing"
            title="Which car fits your trip?"
            intro="Count people and big suitcases, then read across. When in doubt between two, take the bigger car — nobody enjoys a suitcase on their lap to JFK."
          />
          <TextTable caption="Which vehicle class to choose for your group and luggage" head={['Your group', 'Book']} rows={chooser} />
        </div>
      </section>

      {/* Every car */}
      <section className="bg-brand-tint py-16 lg:py-24" aria-labelledby="every-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="every-heading" eyebrow="Every ride" title="What comes with every car" />
          {/* TODO(owner): confirm each item before launch. */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Clean, black, unmarked', 'A plain black car — no signage or branding on the outside.'],
              ['Help with luggage', 'Your driver loads and unloads your bags at both ends.'],
              ['Driver details ahead', 'Name, car and plate are sent to your phone before pickup.'],
              ['Flights followed', 'For airport pickups, the car is timed to your actual landing.'],
            ].map(([t, b]) => (
              <li key={t}>
                <h3 className="text-lg text-brand-ink">{t}</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">{b}</p>
              </li>
            ))}
          </ul>
          <Link href="/book" className="mt-10 inline-flex rounded-lg bg-brand-accent px-6 py-3 font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
            Book your car
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Fleet and luggage FAQs" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      {/* Related */}
      <section className="bg-brand-tint py-16 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="related-heading" eyebrow="Keep planning" title="Where our cars go" />
          <RelatedLinks links={related} />
        </div>
      </section>
    </>
  );
}
