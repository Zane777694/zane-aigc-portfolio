import type { Metadata } from 'next';
import AppLaunchSection from '../../components/AppLaunchSection';
import SecondaryHeader from '../../components/SecondaryHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'App Launch Screen — ZANE / 武子尧',
  description: 'Six selected app launch screen visual design works by ZANE.',
  openGraph: { title: 'App Launch Screen — ZANE / 武子尧', description: 'Six selected startup visual and app opening works.', images: [] },
  twitter: { card: 'summary', title: 'App Launch Screen — ZANE / 武子尧', description: 'Six selected startup visual and app opening works.', images: [] },
};

export default function AppLaunchPage() {
  return (
    <main className="secondary-page-shell app-launch-page-shell">
      <SecondaryHeader backHref="/visual" />
      <AppLaunchSection />
      <SiteFooter />
    </main>
  );
}
