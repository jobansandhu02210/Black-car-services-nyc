import Link from 'next/link';

const routes = [
  { slug: 'lga-to-us-open', label: 'LaGuardia (LGA) to US Open', note: '~15–20 min · closest airport' },
  { slug: 'jfk-to-us-open', label: 'JFK to US Open', note: '~20–30 min · international arrivals' },
  { slug: 'ewr-to-us-open', label: 'Newark (EWR) to US Open', note: '~45–60 min · direct transfer' },
  { slug: 'manhattan-to-us-open', label: 'Manhattan to US Open', note: '~30–45 min · Midtown & downtown' },
  { slug: 'nyc-hotel-to-us-open', label: 'NYC Hotel to US Open', note: 'Concierge-style hotel pickup' },
  { slug: 'long-island-to-us-open', label: 'Long Island to US Open', note: 'Nassau & Suffolk pickups' },
];

/** Cross-links the US Open 2026 route pages so each one is reachable from its siblings, not just the hub. */
export default function UsOpenRelatedRoutes({ current }: { current: string }) {
  const others = routes.filter((r) => r.slug !== current);
  return (
    <section className="bg-brand-white py-14 border-t border-brand-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">More US Open 2026 Car Service Routes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((r) => (
            <Link
              key={r.slug}
              href={`/us-open-2026/${r.slug}`}
              className="bg-brand-offwhite border border-brand-light p-4 hover:border-brand-dark transition-colors group"
            >
              <div className="font-medium text-brand-black group-hover:underline text-sm">{r.label}</div>
              <div className="text-xs text-brand-grey mt-1">{r.note}</div>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/us-open-2026" className="text-sm text-brand-grey hover:text-brand-black underline">
            US Open 2026 transportation overview
          </Link>
        </div>
      </div>
    </section>
  );
}
