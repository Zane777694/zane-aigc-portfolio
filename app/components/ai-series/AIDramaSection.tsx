import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers3 } from 'lucide-react';
import AnimatedElement from '../AnimatedElement';
import type { AIDramaProject } from '../../data/aiSeries';

function AIDramaIndexCard({ project, index }: { project: AIDramaProject; index: number }) {
  const assetCount = project.assetGroups.reduce((total, group) => total + group.items.length, 0);

  return (
    <AnimatedElement delay={index * 80}>
      <Link className="ai-drama-index-card" href={`/series/drama/${project.slug}`}>
        {project.cover ? (
          <Image
            className="ai-drama-index-cover"
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 767px) 100vw, 33vw"
          />
        ) : null}
        <span className="ai-drama-index-shade" aria-hidden="true" />
        <div className="ai-drama-index-top">
          <span>PROJECT {String(index + 1).padStart(2, '0')}</span>
          <ArrowRight size={20} strokeWidth={1.4} />
        </div>
        <h3>{project.title}</h3>
        <div className="ai-drama-episode-chips">
          {project.episodes.map((episode) => <span key={episode.number}>{episode.number} · {episode.title}</span>)}
        </div>
        <div className="ai-drama-index-footer"><Layers3 size={16} /><span>{assetCount ? `${assetCount} ASSETS` : 'ASSETS PENDING'}</span><strong>VIEW PROJECT</strong></div>
      </Link>
    </AnimatedElement>
  );
}

export default function AIDramaSection({ projects }: { projects: AIDramaProject[] }) {
  return (
    <section className="ai-series-block" id="ai-drama" aria-labelledby="ai-drama-title">
      <AnimatedElement className="ai-block-heading">
        <span>01</span><div><p>NARRATIVE / EPISODIC</p><h2 id="ai-drama-title">AI DRAMA</h2><small>AI 漫剧</small></div>
      </AnimatedElement>
      <div className="ai-drama-index-grid">{projects.map((project, index) => <AIDramaIndexCard key={project.slug} project={project} index={index} />)}</div>
    </section>
  );
}
