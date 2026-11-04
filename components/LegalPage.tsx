import Link from 'next/link';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export type LegalSection = { h: string; body: string[]; list?: string[] };

/** Shared layout for /privacy and /terms. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
  contactLead,
  seeAlso,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  contactLead: string;
  seeAlso: { href: string; label: string };
}) {
  return (
    <>
      <section className="bg-brand-tint py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">Legal</p>
          <h1 className="mt-3 text-5xl text-brand-ink sm:text-6xl">{title}</h1>
          <p className="mt-4 text-brand-muted">Last updated: {updated}</p>
        </div>
      </section>

      <section className="bg-brand-white py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 leading-relaxed text-brand-muted">{intro}</p>

          {sections.map((s) => (
            <div key={s.h} className="mb-10">
              <h2 className="mb-3 text-2xl text-brand-ink lg:text-3xl">{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mb-3 leading-relaxed text-brand-muted">{p}</p>
              ))}
              {s.list && (
                <ul className="mb-3 list-disc space-y-1 pl-6 text-brand-muted">
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h2 className="mb-3 text-2xl text-brand-ink lg:text-3xl">Contact</h2>
            <p className="leading-relaxed text-brand-muted">
              {contactLead} Email{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="font-semibold text-brand-accent hover:underline">{CONTACT_EMAIL_BOOKINGS}</a>{' '}
              or call{' '}
              <a href={`tel:${CONTACT_PHONE_E164}`} className="font-semibold text-brand-accent hover:underline">{CONTACT_PHONE_DISPLAY}</a>.
            </p>
          </div>

          <p className="mt-10 text-sm text-brand-muted">
            See also our{' '}
            <Link href={seeAlso.href} className="font-semibold text-brand-accent hover:underline">{seeAlso.label}</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
