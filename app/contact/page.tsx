import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { ContactForm } from '@/components/ContactForm';
import {
  CONTACT_EMAIL_BOOKINGS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  CONTACT_PHONE_2_DISPLAY,
  CONTACT_PHONE_2_E164,
  WHATSAPP_BOOKING_URL,
} from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact NYC Car Service | Book a Chauffeur | Eagle Eye',
  },
  description:
    'Contact Eagle Eye Chauffeur for NYC black car & airport transfers. Call, WhatsApp, or email 24/7 for JFK, LGA, EWR quotes. Flat rates, fast response.',
  alternates: { canonical: `${getSiteUrl()}/contact` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/contact`,
    title: 'Contact Eagle Eye Chauffeur | NYC Car Service',
    description:
      'Reach Eagle Eye Chauffeur 24/7 by phone, WhatsApp, or email for NYC black car and airport transfer bookings.',
  },
};

const reasons = [
  { t: 'Instant flat-rate quotes', d: 'Tell us your pickup, drop-off, and date — we confirm a flat rate with no surge pricing.' },
  { t: 'Airport transfers', d: 'JFK, LGA, EWR, HPN, and Teterboro (TEB) — meet & greet and real-time flight tracking.' },
  { t: 'Corporate & hourly', d: 'Executive travel, roadshows, hourly chauffeur hire, and monthly corporate accounts.' },
  { t: 'Special occasions', d: 'Weddings, events, nights out, and long-distance trips across the Northeast.' },
];

const faqs = [
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'We typically respond within a few hours, and much faster by phone or WhatsApp. For urgent or same-day rides, calling or texting is the fastest way to reach us — our booking line is available 24/7.',
  },
  {
    q: 'What is the fastest way to book a car service in NYC?',
    a: 'Call or WhatsApp us for an immediate response, or use our online booking form to get an instant flat-rate quote. For airport transfers, weddings, and corporate travel, we recommend booking in advance to guarantee your preferred vehicle.',
  },
  {
    q: 'Which areas does Eagle Eye Chauffeur serve?',
    a: 'We serve all five NYC boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island — plus Long Island, Westchester, New Jersey, and Connecticut. We cover all major airports: JFK, LaGuardia (LGA), Newark (EWR), Westchester (HPN), and Teterboro (TEB).',
  },
  {
    q: 'Do you offer 24/7 service?',
    a: 'Yes. Our chauffeur service operates 24 hours a day, 7 days a week, including holidays and overnight airport pickups. Early-morning and red-eye flights are no problem.',
  },
  {
    q: 'Can I get a quote before booking?',
    a: 'Absolutely. Every quote is a flat rate confirmed before your trip — no meters, no surge pricing, and tolls included. Contact us with your trip details or use the online booking form for an instant estimate.',
  },
];

export default function ContactPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Contact', url: `${siteUrl}/contact` },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-xs uppercase tracking-widest mb-3">24/7 Reservations</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Contact NYC Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl">
              Book a chauffeur, request a flat-rate airport transfer quote, or ask us anything. Reach Eagle Eye
              Chauffeur by phone, WhatsApp, or email — we respond fast, day or night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Call {CONTACT_PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Get in Touch</h2>
                <ul className="space-y-4 text-brand-grey">
                  <li>
                    <span className="text-brand-silver block text-sm font-medium">Phone</span>
                    <a href={`tel:${CONTACT_PHONE_E164}`} className="text-brand-black hover:underline block">{CONTACT_PHONE_DISPLAY}</a>
                    <a href={`tel:${CONTACT_PHONE_2_E164}`} className="text-brand-black hover:underline block">{CONTACT_PHONE_2_DISPLAY}</a>
                  </li>
                  <li>
                    <span className="text-brand-silver block text-sm font-medium">Email</span>
                    <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="text-brand-black hover:underline">{CONTACT_EMAIL_BOOKINGS}</a>
                  </li>
                  <li>
                    <span className="text-brand-silver block text-sm font-medium">Service Area</span>
                    <span className="text-brand-black">New York City &amp; the tri-state area</span>
                  </li>
                  <li>
                    <span className="text-brand-silver block text-sm font-medium">Hours</span>
                    <span className="text-brand-black">24/7 for bookings and urgent requests</span>
                  </li>
                </ul>

                <h3 className="font-serif text-xl font-semibold text-brand-black mt-10 mb-4">Why Contact Eagle Eye</h3>
                <div className="space-y-4">
                  {reasons.map((r) => (
                    <div key={r.t} className="border-l-2 border-brand-light pl-4">
                      <p className="font-medium text-brand-black">{r.t}</p>
                      <p className="text-sm text-brand-grey">{r.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-white border border-brand-light p-8">
                <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Send a Message</h2>
                <p className="text-brand-grey text-sm mb-6">
                  Share your trip details and we&apos;ll reply with a flat-rate quote. For same-day rides, call or WhatsApp for the fastest response.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8 text-center">
              Contact &amp; Booking FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-brand-grey mt-8">
              Ready to book? <Link href="/book" className="text-brand-black underline">Get an instant quote →</Link>
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">Serving New York City &amp; Beyond</h2>
            <div className="aspect-[21/9] min-h-[280px] bg-brand-light">
              <iframe
                title="Eagle Eye Chauffeur NYC service area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830883528!2d-74.11976373946234!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className="min-h-[280px]"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
