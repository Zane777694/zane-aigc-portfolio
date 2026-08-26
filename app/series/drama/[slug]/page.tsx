import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SecondaryHeader from '../../../components/SecondaryHeader';
import SiteFooter from '../../../components/SiteFooter';
import DramaProjectDetail from '../../../components/ai-series/DramaProjectDetail';
import { aiDramaProjects } from '../../../data/aiSeries';

type DramaPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return aiDramaProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: DramaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = aiDramaProjects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} — AI Series — ZANE / 武子尧`, description: `${project.title} AI drama episodes and visual development assets.` } : {};
}

export default async function DramaPage({ params }: DramaPageProps) {
  const { slug } = await params;
  const projectIndex = aiDramaProjects.findIndex((item) => item.slug === slug);
  if (projectIndex < 0) notFound();
  return <main className="secondary-page-shell"><SecondaryHeader backHref="/series" /><DramaProjectDetail project={aiDramaProjects[projectIndex]} projectIndex={projectIndex} /><SiteFooter /></main>;
}
