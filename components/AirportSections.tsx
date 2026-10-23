import Link from 'next/link';
import { SkylineArt } from '@/components/SkylineArt';
import { formatRange, type Airport } from '@/lib/airports';

/**
 * Building blocks for the /services/airport/* pages. Layout is shared; every page passes
 * its own copy so the three airport pages never read as templates of each other.
 */

export function airportBookHref(airport: Airport): string {
  return `/book?service=airport&airport=${encodeURIComponent(airport.bookValue)}`;
}

export function AirportHero({
  airport,
  idPrefix,
  h1,
  answer,
  ctaLabel,
  phoneDisplay,
  phoneE164,
}: {
  airport: Airport;
  idPrefix: string;
  h1: string;
  answer: string;
  ctaLabel: string;
  phoneDisplay: string;
  phoneE164: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint to-brand-sky/60">
      <SkylineArt className="pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full text-brand-blue/20 lg:h-44" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-brand-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-brand-blue">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services/airport" className="hover:text-brand-blue">Airports</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-semibold text-brand-ink">{airport.code}</li>
          </ol>
        </nav>
        <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-4">{airport.name}</p>
        <h1 id={`${idPrefix}-title`} className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-brand-ink text-balance">
          {h1}
        </h1>
        <p id={`${idPrefix}-answer`} className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">
          {answer}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={airportBookHref(airport)}
            className="rounded-lg bg-brand-blue px-6 py-3 text-center font-display font-bold text-brand-white hover:bg-brand-blue-hover"
          >
            {ctaLabel}
          </Link>
          <a
            href={`tel:${phoneE164}`}
            className="rounded-lg bg-brand-white px-6 py-3 text-center font-display font-bold text-brand-ink ring-1 ring-brand-line hover:ring-brand-blue"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export function FactorTable({ caption, rows }: { caption: string; rows: { factor: string; detail: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-brand-line">
      <table className="w-full min-w-[560px] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-brand-tint font-display text-brand-ink">
          <tr>
            <th scope="col" className="w-1/4 px-5 py-4 font-bold">Factor</th>
            <th scope="col" className="px-5 py-4 font-bold">What it means for your fare</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-line">
          {rows.map((f) => (
            <tr key={f.factor}>
              <th scope="row" className="px-5 py-4 align-top font-semibold text-brand-ink">{f.factor}</th>
              <td className="px-5 py-4 leading-relaxed text-brand-muted">{f.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TerminalCards({ airport, fallbackTitle, fallbackBody }: { airport: Airport; fallbackTitle: string; fallbackBody: string }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {airport.terminals.map((t) => (
        <div key={t.name} className="rounded-2xl border border-brand-line p-6">
          <h3 className="text-xl text-brand-ink">{t.name}</h3>
          <p className="mt-2 text-sm font-semibold text-brand-blue">{t.airlines}</p>
          <p className="mt-3 text-brand-muted leading-relaxed">{t.note}</p>
        </div>
      ))}
      <div className="rounded-2xl bg-brand-tint p-6">
        <h3 className="text-xl text-brand-ink">{fallbackTitle}</h3>
        <p className="mt-3 text-brand-muted leading-relaxed">{fallbackBody}</p>
      </div>
    </div>
  );
}

export function DriveTimeTable({ airport }: { airport: Airport }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-brand-line bg-brand-white">
      <table className="w-full min-w-[560px] text-left text-sm">
        <caption className="sr-only">
          Approximate distance and drive time between {airport.shortName} and nearby neighborhoods and cities
        </caption>
        <thead className="bg-brand-tint font-display text-brand-ink">
          <tr>
            <th scope="col" className="px-5 py-4 font-bold">To or from</th>
            <th scope="col" className="px-5 py-4 font-bold">Distance</th>
            <th scope="col" className="px-5 py-4 font-bold">Off-peak</th>
            <th scope="col" className="px-5 py-4 font-bold">Rush hour</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-line">
          {airport.driveTimes.map((d) => (
            <tr key={d.place}>
              <th scope="row" className="px-5 py-3.5 font-semibold text-brand-ink">{d.place}</th>
              <td className="px-5 py-3.5 text-brand-muted">{d.miles} mi</td>
              <td className="px-5 py-3.5 text-brand-muted">{formatRange(d.off)}</td>
              <td className="px-5 py-3.5 text-brand-muted">{formatRange(d.peak)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function InfoCards({ items, tone = 'white' }: { items: { title: string; spec?: string; body: string }[]; tone?: 'white' | 'tint' }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((v) => (
        <div key={v.title} className={tone === 'tint' ? 'rounded-2xl bg-brand-white p-6 ring-1 ring-brand-line' : 'rounded-2xl border border-brand-line p-6'}>
          <h3 className="text-xl text-brand-ink">{v.title}</h3>
          {v.spec && <p className="mt-1 text-sm font-semibold text-brand-blue">{v.spec}</p>}
          <p className="mt-3 text-brand-muted leading-relaxed">{v.body}</p>
        </div>
      ))}
    </div>
  );
}

export function StepsList({ steps }: { steps: { name: string; text: string }[] }) {
  return (
    <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.name}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue font-display font-bold text-brand-white">
            {i + 1}
          </span>
          <h3 className="mt-4 text-lg text-brand-ink">{s.name}</h3>
          <p className="mt-2 text-brand-muted leading-relaxed">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-brand-line border-y border-brand-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <h3 className="text-lg text-brand-ink">{f.q}</h3>
            <span aria-hidden="true" className="mt-1 font-display text-xl text-brand-blue transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-brand-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedLinks({ links }: { links: { href: string; title: string; body: string }[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((r) => (
        <li key={r.href}>
          <Link href={r.href} className="block h-full rounded-xl bg-brand-white p-5 ring-1 ring-brand-line hover:ring-brand-blue">
            <span className="font-display font-bold text-brand-ink">{r.title} →</span>
            <span className="mt-1 block text-sm text-brand-muted">{r.body}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
