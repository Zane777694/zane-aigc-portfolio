'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight, Clapperboard, Play } from 'lucide-react';
import AnimatedElement from '../AnimatedElement';
import type { TVCProject } from '../../data/aiSeries';
import AssetGallery from './AssetGallery';

function getBilibiliEmbedUrl(url: string, autoplay = false) {
  const bvid = url.match(/BV[0-9A-Za-z]{10}/)?.[0];
  return bvid ? `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&danmaku=0&autoplay=${autoplay ? '1' : '0'}` : '';
}

function TVCCard({ project, index }: { project: TVCProject; index: number }) {
  const [playing, setPlaying] = useState(false);
  const bilibiliEmbedUrl = getBilibiliEmbedUrl(project.bilibiliUrl, playing);
  const heading = <><div><p>TVC / {String(index + 1).padStart(2, '0')}</p><h3>{project.title}</h3></div><ArrowUpRight size={22} /></>;
  return (
    <AnimatedElement delay={index * 100}>
      <article className="ai-project-card ai-tvc-card">
        <div className="ai-project-cover ai-tvc-cover">
          {project.cover && !playing ? (
            <button className="ai-tvc-poster" type="button" onClick={() => setPlaying(true)} aria-label={`播放 ${project.title}`}>
              <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(max-width: 900px) 100vw, 46vw" priority={false} />
              <span className="ai-tvc-poster-shade" aria-hidden="true" />
              <span className="ai-tvc-play"><Play size={24} fill="currentColor" /><small>PLAY / 点击播放</small></span>
            </button>
          ) : bilibiliEmbedUrl ? (
            <iframe
              src={bilibiliEmbedUrl}
              title={`${project.title} — Bilibili video`}
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="ai-cover-placeholder"><Clapperboard size={26} strokeWidth={1.2} /><span>{String(index + 1).padStart(2, '0')}</span><small>COMMERCIAL COVER SLOT</small></div>
          )}
        </div>
        {project.bilibiliUrl ? <a className="ai-tvc-title" href={project.bilibiliUrl} target="_blank" rel="noreferrer noopener">{heading}</a> : <div className="ai-tvc-title is-pending">{heading}<small>VIDEO LINK PENDING</small></div>}
        <AssetGallery groups={project.assetGroups} emptyBehavior="hide" compact />
      </article>
    </AnimatedElement>
  );
}

export default function TVCSection({ projects }: { projects: TVCProject[] }) {
  return (
    <section className="ai-series-block" id="tvc" aria-labelledby="tvc-title">
      <AnimatedElement className="ai-block-heading"><span>02</span><div><p>COMMERCIAL / CAMPAIGN</p><h2 id="tvc-title">TVC</h2><small>商业广告</small></div></AnimatedElement>
      <div className="ai-tvc-grid">{projects.map((project, index) => <TVCCard key={project.slug} project={project} index={index} />)}</div>
    </section>
  );
}
