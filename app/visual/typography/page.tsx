import type { Metadata } from 'next';
import SecondaryHeader from '../../components/SecondaryHeader';
import SiteFooter from '../../components/SiteFooter';
import TypographySection from '../../components/TypographySection';

export const metadata: Metadata = {
  title: 'Typography — ZANE / 武子尧',
  description: 'Selected typography and graphic experiment works by ZANE.',
  openGraph: { title: 'Typography — ZANE / 武子尧', description: 'Selected typography and graphic experiment works.', images: [] },
  twitter: { card: 'summary', title: 'Typography — ZANE / 武子尧', description: 'Selected typography and graphic experiment works.', images: [] },
};

export default function TypographyPage() {
  return <main className="secondary-page-shell typography-page-shell"><SecondaryHeader backHref="/visual" /><TypographySection /><SiteFooter /></main>;
}
