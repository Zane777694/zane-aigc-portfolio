import type { Metadata } from 'next';
import SecondaryHeader from '../../components/SecondaryHeader';
import SiteFooter from '../../components/SiteFooter';
import AISeriesCategoryNav from '../../components/ai-series/AISeriesCategoryNav';
import ShortVideoSection from '../../components/ai-series/ShortVideoSection';
import { shortVideoProjects } from '../../data/aiSeries';

export const metadata: Metadata = { title: 'Short Video — AI Series — ZANE / 武子尧', description: 'AI short-form video projects by ZANE / 武子尧.' };

export default function ShortVideoPage() {
  return <main className="secondary-page-shell"><SecondaryHeader backHref="/series" /><div className="series-landing ai-series-subpage"><div className="series-landing-inner"><AISeriesCategoryNav active="short-video" /><ShortVideoSection projects={shortVideoProjects} /></div></div><SiteFooter /></main>;
}
