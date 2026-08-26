import type { Metadata } from 'next';
import SecondaryHeader from '../../components/SecondaryHeader';
import SiteFooter from '../../components/SiteFooter';
import AISeriesCategoryNav from '../../components/ai-series/AISeriesCategoryNav';
import TVCSection from '../../components/ai-series/TVCSection';
import { tvcProjects } from '../../data/aiSeries';

export const metadata: Metadata = { title: 'TVC — AI Series — ZANE / 武子尧', description: 'AI commercial film projects by ZANE / 武子尧.' };

export default function TVCPage() {
  return <main className="secondary-page-shell"><SecondaryHeader backHref="/series" /><div className="series-landing ai-series-subpage"><div className="series-landing-inner"><AISeriesCategoryNav active="tvc" /><TVCSection projects={tvcProjects} /></div></div><SiteFooter /></main>;
}
