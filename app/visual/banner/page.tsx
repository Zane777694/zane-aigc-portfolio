import type { Metadata } from 'next';
import BannerSection from '../../components/BannerSection';
import SecondaryHeader from '../../components/SecondaryHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Banner Design — ZANE / 武子尧',
  description: 'Nine selected banner and AI visual design works by ZANE.',
  openGraph: { title: 'Banner Design — ZANE / 武子尧', description: 'Nine selected banner and AI visual design works.', images: [] },
  twitter: { card: 'summary', title: 'Banner Design — ZANE / 武子尧', description: 'Nine selected banner and AI visual design works.', images: [] },
};

export default function BannerPage() {
  return (
    <main className="secondary-page-shell banner-page-shell">
      <SecondaryHeader siblingHref="/visual" siblingLabel="AI VISUAL DESIGN" />
      <BannerSection />
      <SiteFooter />
    </main>
  );
}
