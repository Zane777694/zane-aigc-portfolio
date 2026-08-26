import type { Metadata } from 'next';
import PosterSection from '../../components/PosterSection';
import SecondaryHeader from '../../components/SecondaryHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Poster Design — ZANE / 武子尧',
  description: 'Twelve selected poster and AI visual design works by ZANE.',
  openGraph: { title: 'Poster Design — ZANE / 武子尧', description: 'Twelve selected poster and AI visual design works.', images: [] },
  twitter: { card: 'summary', title: 'Poster Design — ZANE / 武子尧', description: 'Twelve selected poster and AI visual design works.', images: [] },
};

export default function PosterPage() {
  return (
    <main className="secondary-page-shell poster-page-shell">
      <SecondaryHeader backHref="/visual" />
      <PosterSection />
      <SiteFooter />
    </main>
  );
}
