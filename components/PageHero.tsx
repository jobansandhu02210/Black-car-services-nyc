import Link from 'next/link';
import { SkylineArt } from '@/components/SkylineArt';

export type Crumb = { name: string; href?: string };

/**
 * Inner-page hero: visible breadcrumb, eyebrow, the page's single H1, an answer-first intro
 * (both targeted by SpeakableJsonLd via `${idPrefix}-title` / `${idPrefix}-answer`) and two CTAs.
 */
export function PageHero({
  crumbs,
  eyebrow,
  idPrefix,
  h1,
  answer,
  ctaHref,
  ctaLabel,
  phoneDisplay,
  phoneE164,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  idPrefix: string;
  h1: string;
  answer: string;
  ctaHref: string;
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
            {crumbs.map((c, i) => (
              <li key={c.name} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-blue">{c.name}</Link>
                ) : (
                  <span aria-current="page" className="font-semibold text-brand-ink">{c.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-4">{eyebrow}</p>
        <h1 id={`${idPrefix}-title`} className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-brand-ink text-balance">
          {h1}
        </h1>
        <p id={`${idPrefix}-answer`} className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">
          {answer}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={ctaHref}
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

/** Plain data table: first column is a row header. */
export function TextTable({ caption, head, rows }: { caption: string; head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-brand-line bg-brand-white">
      <table className="w-full min-w-[560px] text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-brand-tint font-display text-brand-ink">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-5 py-4 font-bold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-line">
          {rows.map(([first, ...rest]) => (
            <tr key={first}>
              <th scope="row" className="px-5 py-3.5 font-semibold text-brand-ink">{first}</th>
              {rest.map((cell, i) => (
                <td key={head[i + 1]} className="px-5 py-3.5 text-brand-muted">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
