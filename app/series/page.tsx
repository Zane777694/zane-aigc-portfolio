import type { Metadata } from 'next';
import SecondaryHeader from '../components/SecondaryHeader';
import SeriesLanding from '../components/SeriesLanding';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'AI Series — ZANE / 武子尧',
  description: 'AI film and visual development projects by ZANE / 武子尧.',
  openGraph: { title: 'AI Series — ZANE / 武子尧', description: 'AI film and visual development projects.', images: [] },
  twitter: { card: 'summary', title: 'AI Series — ZANE / 武子尧', description: 'AI film and visual development projects.', images: [] },
};

export default function SeriesPage() {
  return (
    <main className="secondary-page-shell">
      <SecondaryHeader />
      <SeriesLanding />
      <SiteFooter />
    </main>
  );
}
