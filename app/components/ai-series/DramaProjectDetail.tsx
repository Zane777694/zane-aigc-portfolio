'use client';

import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import { useState } from 'react';
import type { AIDramaProject } from '../../data/aiSeries';
import AssetGallery from './AssetGallery';
import AISeriesCategoryNav from './AISeriesCategoryNav';

function getBilibiliEmbedUrl(url: string, autoplay = false) {
  const bvid = url.match(/\/video\/(BV[a-zA-Z0-9]+)/)?.[1];
  return bvid ? `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&autoplay=${autoplay ? '1' : '0'}` : '';
}

function EpisodePreview({ episode, portrait = false }: { episode: AIDramaProject['episodes'][number]; portrait?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = getBilibiliEmbedUrl(episode.bilibiliUrl, playing);
  return (
    <article className={`ai-episode-card ${portrait ? 'is-portrait' : ''}`}>
      <div className="ai-episode-media">
        {episode.poster && !playing ? (
          <button className="ai-episode-poster" type="button" onClick={() => setPlaying(true)} aria-label={`播放 ${episode.title}`}>
            <Image className="ai-episode-poster-backdrop" src={episode.poster.src} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" aria-hidden="true" />
            <Image className="ai-episode-poster-image" src={episode.poster.src} alt={episode.poster.alt} fill sizes="(max-width: 760px) 100vw, 50vw" priority={false} />
            <span className="ai-episode-poster-shade" aria-hidden="true" />
            <span className="ai-episode-play"><Play size={24} fill="currentColor" /><small>PLAY / 点击播放</small></span>
          </button>
        ) : embedUrl ? (
          <iframe src={embedUrl} title={`${episode.title} 视频预览`} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
        ) : (
          <div className="ai-episode-placeholder"><Play size={28} strokeWidth={1.2} /><span>VIDEO PREVIEW</span><small>LINK PENDING</small></div>
        )}
      </div>
      {episode.bilibiliUrl ? (
        <a className="ai-episode-meta" href={episode.bilibiliUrl} target="_blank" rel="noreferrer noopener"><span>{episode.number}</span><strong>{episode.title}</strong><small>WATCH ON BILIBILI</small><ArrowUpRight size={17} /></a>
      ) : (
        <div className="ai-episode-meta is-pending"><span>{episode.number}</span><strong>{episode.title}</strong><small>LINK PENDING</small></div>
      )}
    </article>
  );
}

export default function DramaProjectDetail({ project, projectIndex }: { project: AIDramaProject; projectIndex: number }) {
  const assetCount = project.assetGroups.reduce((sum, group) => sum + group.items.length, 0);
  const portraitEpisodes = project.episodeLayout === 'portrait';
  return (
    <div className="series-landing ai-series-subpage">
      <div className="series-landing-inner">
        <AISeriesCategoryNav active="drama" />
        <header className="ai-detail-heading">
          <p>AI DRAMA / PROJECT {String(projectIndex + 1).padStart(2, '0')}</p>
          <h1>{project.title}</h1>
          <div><span>{project.episodes.length} EPISODES</span><span>{assetCount} ASSETS</span></div>
        </header>
        <section className="ai-detail-episodes" aria-label={`${project.title} 剧集`}>
          <div className="ai-detail-section-heading"><span>01</span><div><p>WATCH / PREVIEW</p><h2>EPISODES</h2></div></div>
          <div className={`ai-episode-list ${portraitEpisodes ? 'is-portrait' : ''}`}>{project.episodes.map((episode) => <EpisodePreview key={episode.number} episode={episode} portrait={portraitEpisodes} />)}</div>
        </section>
        <section className="ai-detail-assets" aria-label={`${project.title} 资产`}>
          <div className="ai-detail-section-heading"><span>02</span><div><p>VISUAL DEVELOPMENT</p><h2>ASSETS</h2></div></div>
          <AssetGallery groups={project.assetGroups} emptyBehavior="placeholder" />
        </section>
      </div>
    </div>
  );
}
