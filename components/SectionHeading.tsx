/** Eyebrow + H2 (+ optional intro) used at the top of content sections. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl mb-10 lg:mb-12">
      <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-accent mb-3">{eyebrow}</p>
      <h2 id={id} className="text-4xl lg:text-5xl text-brand-ink text-balance">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base text-brand-muted leading-relaxed">{intro}</p>}
    </div>
  );
}
