import type { Metadata } from 'next';
import SecondaryHeader from '../components/SecondaryHeader';
import SiteFooter from '../components/SiteFooter';
import VisualDesignSection from '../components/VisualDesignSection';

export const metadata: Metadata = {
  title: 'AI Visual Design — ZANE / 武子尧',
  description: 'Selected visual works across poster, banner, IP & VI, launch screen, typography, and illustration.',
  openGraph: { title: 'AI Visual Design — ZANE / 武子尧', description: 'Selected visual works.', images: [] },
  twitter: { card: 'summary', title: 'AI Visual Design — ZANE / 武子尧', description: 'Selected visual works.', images: [] },
};

export default function VisualPage() {
  return (
    <main className="secondary-page-shell">
      <SecondaryHeader siblingHref="/series" siblingLabel="AI SERIES" />
      <VisualDesignSection />
      <SiteFooter />
    </main>
  );
}
