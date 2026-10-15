import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getDriverBySlug, TRACKING_COOKIE } from '@/lib/tracking';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function GoSlugPage({ params }: { params: { slug: string } }) {
  const driver = getDriverBySlug(params.slug);

  if (!driver) {
    return redirect('/book?ref=unknown');
  }

  // Set cookie so booking form knows who referred this visitor
  cookies().set(TRACKING_COOKIE, driver.slug, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
    sameSite: 'lax',
    secure: true,
  });

  // Redirect to booking page
  return redirect(`/book?ref=${driver.slug}`);
}
