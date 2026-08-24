import type { Metadata } from 'next';
import IpViSection from '../../components/IpViSection';
import SecondaryHeader from '../../components/SecondaryHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'IP & VI — ZANE / 武子尧',
  description: 'Selected IP design, brand visual, and visual identity projects by ZANE.',
  openGraph: { title: 'IP & VI — ZANE / 武子尧', description: 'Selected IP and visual identity projects.', images: [] },
  twitter: { card: 'summary', title: 'IP & VI — ZANE / 武子尧', description: 'Selected IP and visual identity projects.', images: [] },
};

export default function IpViPage() {
  return (
    <main className="secondary-page-shell ipvi-page-shell">
      <SecondaryHeader siblingHref="/visual" siblingLabel="AI VISUAL DESIGN" />
      <IpViSection />
      <SiteFooter />
    </main>
  );
}
