export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

type Row = {
  id: string;
  name: string;
  code: string;
  createdAt: string;
  referrals: number;
  bookings: number;
};

async function getStats(): Promise<Row[]> {
  const h = await headers();
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? '';
  const proto = h.get('x-forwarded-proto') ?? 'https';
  const base = host ? `${proto}://${host}` : (process.env.NEXT_PUBLIC_SITE_URL ?? '');

  const res = await fetch(`${base}/api/referrals/stats`, { cache: 'no-store' });
  const json = (await res.json()) as { ok: boolean; rows?: Row[] };
  return json.rows ?? [];
}

export default async function AdminReferralsPage() {
  const rows = await getStats();

  return (
    <div className="bg-brand-offwhite min-h-screen py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
            Driver Referrals
          </h1>
          <p className="mt-2 text-brand-grey">
            Promo codes, referral events, and booking counts.
          </p>
        </div>

        <div className="bg-brand-white border border-brand-light overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-brand-offwhite">
                <tr className="text-left text-brand-grey">
                  <th className="px-5 py-3 font-medium">Driver</th>
                  <th className="px-5 py-3 font-medium">Code</th>
                  <th className="px-5 py-3 font-medium">Referrals</th>
                  <th className="px-5 py-3 font-medium">Bookings</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td className="px-5 py-6 text-brand-grey" colSpan={4}>
                      No data yet. Run `npx prisma migrate dev` and `npx prisma db seed`, then use a promo code on a booking.
                    </td>
                  </tr>
                ) : (
                  rows.map((r) => (
                    <tr key={r.id} className="border-t border-brand-light">
                      <td className="px-5 py-4 text-brand-black font-medium">{r.name}</td>
                      <td className="px-5 py-4 font-mono">{r.code}</td>
                      <td className="px-5 py-4 tabular-nums">{r.referrals}</td>
                      <td className="px-5 py-4 tabular-nums">{r.bookings}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

