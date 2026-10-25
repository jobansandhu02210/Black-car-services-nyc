import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl, SITE_NAME } from '@/lib/site';
import {
  CONTACT_EMAIL_BOOKINGS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  WHATSAPP_BOOKING_URL,
} from '@/lib/contact';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { SectionHeading } from '@/components/SectionHeading';
import { FaqList } from '@/components/AirportSections';
import { ContactForm } from '@/components/ContactForm';
import { ogDefaults } from '@/lib/og';

const path = '/contact';
const title = 'Contact Us | Black Car Service — Call or WhatsApp 24/7';
const description =
  'Call, WhatsApp or email Black Car Service any time to book an airport or long-distance ride, change a booking, or ask a question before you travel.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${getSiteUrl()}${path}` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}${path}`, title, description },
  twitter: { card: 'summary_large_image', title, description },
};

const channels = [
  {
    label: 'Phone',
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_E164}`,
    note: 'Fastest for same-day rides and changes on the day.',
    external: false,
  },
  {
    label: 'WhatsApp',
    value: 'Message us',
    href: WHATSAPP_BOOKING_URL,
    note: 'Handy from abroad, and for sending flight details or screenshots.',
    external: true,
  },
  {
    label: 'Email',
    value: CONTACT_EMAIL_BOOKINGS,
    href: `mailto:${CONTACT_EMAIL_BOOKINGS}`,
    note: 'Best for company travel, receipts and trips planned weeks ahead.',
    external: false,
  },
];

const include = [
  'Pickup and drop-off addresses (or the airport)',
  'Date and time — and the flight number for an arrival',
  'Number of passengers and suitcases',
  'Whether it is one way or a round trip',
];

// TODO(owner): confirm response-time wording.
const faqs = [
  {
    q: 'What is the quickest way to book?',
    a: 'Online, on our booking page, takes a couple of minutes and shows an estimate as you go. For a ride in the next two hours, call or WhatsApp us — online bookings need at least two hours’ notice.',
  },
  {
    q: 'Can I change or cancel a booking?',
    a: 'Yes. Call or message us with your name and trip date as early as you can, and we will update the booking.',
  },
  {
    q: 'Do you have an office I can visit?',
    a: `No. ${SITE_NAME} is a service-area business — our cars come to you, and booking happens online, by phone or on WhatsApp.`,
  },
  {
    q: 'Can my company set up regular bookings?',
    a: 'Yes. Email us with roughly how often you travel and who will be booking, and we will set things up so assistants can book for travelers and receive an invoice for each ride.',
  },
];

export default function ContactPage() {
  const site = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: site },
          { name: 'Contact', url: `${site}${path}` },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <section className="bg-gradient-to-b from-brand-tint to-brand-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brand-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-brand-accent">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-brand-ink">Contact</li>
            </ol>
          </nav>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-accent mb-4">24 hours a day, 7 days a week</p>
              <h1 className="text-5xl sm:text-6xl lg:text-[72px] text-brand-ink text-balance">Contact {SITE_NAME}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-muted">
                Book a ride, change one, or ask a question before you travel. A person answers the phone and WhatsApp at any
                hour.
              </p>
              <ul className="mt-10 space-y-4">
                {channels.map((c) => (
                  <li key={c.label} className="rounded-2xl bg-brand-white p-5 ring-1 ring-brand-line">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">{c.label}</p>
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="mt-1 block break-all font-display text-xl font-bold text-brand-accent hover:underline"
                    >
                      {c.value}
                    </a>
                    <p className="mt-1 text-sm text-brand-muted">{c.note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-white p-6 sm:p-8 ring-1 ring-brand-line self-start">
              <h2 className="text-2xl text-brand-ink">Send us a message</h2>
              <p className="mt-2 mb-6 text-sm text-brand-muted">
                We reply by email. For a ride today, calling or WhatsApp is faster.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20" aria-labelledby="include-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="include-heading"
            eyebrow="Getting a quote"
            title="What to include when you ask for a quote"
            intro="With these four things we can give you an accurate fare in one reply — or you can enter them yourself on the booking page."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {include.map((item, i) => (
              <li key={item} className="rounded-xl bg-brand-tint p-5">
                <span className="font-display text-sm font-bold text-brand-accent">{i + 1}</span>
                <p className="mt-2 text-brand-ink">{item}</p>
              </li>
            ))}
          </ol>
          <Link href="/book" className="mt-8 inline-flex rounded-lg bg-brand-accent px-6 py-3 font-display text-sm font-bold text-brand-white hover:bg-brand-accent-hover">
            Or book online now
          </Link>
        </div>
      </section>

      <section className="bg-brand-tint py-16 lg:py-20" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Contact and booking questions" />
          <FaqList faqs={faqs} />
        </div>
      </section>
    </>
  );
}
