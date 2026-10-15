import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tip Your Eagle Eye Chauffeur | NYC Black Car Service',
  description: 'Leave a tip for your Eagle Eye Chauffeur driver. Quick and easy — enter your ride amount and select a percentage.',
  robots: { index: false, follow: false },
};

export default function TipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
