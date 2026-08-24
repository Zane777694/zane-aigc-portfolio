import type { Metadata } from 'next';
import IllustrationSection from '../../components/IllustrationSection';
import SecondaryHeader from '../../components/SecondaryHeader';
import SiteFooter from '../../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Illustration — ZANE / 武子尧',
  description: 'Selected AI illustration and art direction works by ZANE.',
  openGraph: { title: 'Illustration — ZANE / 武子尧', description: 'Selected AI illustration and art direction works.', images: [] },
  twitter: { card: 'summary', title: 'Illustration — ZANE / 武子尧', description: 'Selected AI illustration and art direction works.', images: [] },
};

export default function IllustrationPage() {
  return <main className="secondary-page-shell illustration-page-shell"><SecondaryHeader siblingHref="/visual" siblingLabel="AI VISUAL DESIGN" /><IllustrationSection /><SiteFooter /></main>;
}
