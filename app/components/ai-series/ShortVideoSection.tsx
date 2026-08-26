'use client';

import Image from 'next/image';
import { PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import AnimatedElement from '../AnimatedElement';
import AssetGallery from './AssetGallery';
import type { AssetGroup, ShortVideoProject } from '../../data/aiSeries';

type ShortVideoCardProps = {
  project: ShortVideoProject;
  index: number;
  registerVideo: (slug: string, node: HTMLVideoElement | null) => void;
  assetExpanded?: boolean;
  suppressed?: boolean;
  onAssetToggle?: () => void;
};

function getBilibiliEmbedUrl(url: string, autoplay = false) {
  const bvid = url.match(/BV[0-9A-Za-z]{10}/)?.[0];
  return bvid ? `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&danmaku=0&autoplay=${autoplay ? '1' : '0'}` : '';
}

function AssetSidePanel({ side, groups, open, onToggle }: { side: 'left' | 'right'; groups: AssetGroup[]; open: boolean; onToggle: () => void }) {
  const isLeft = side === 'left';
  const Icon = isLeft ? (open ? PanelLeftClose : PanelLeftOpen) : (open ? PanelRightClose : PanelRightOpen);

  return (
    <aside className={`ai-short-side-panel is-${side} ${open ? 'is-open' : 'is-collapsed'}`} aria-label={`${isLeft ? '左侧' : '右侧'}项目资产`}>
      <button className="ai-short-drawer-toggle" type="button" onClick={onToggle} aria-expanded={open} aria-label={open ? '收起资产' : '展开资产'}>
        <Icon size={18} strokeWidth={1.5} />
        <span>{open ? 'ASSETS / 资产' : '展开资产'}</span>
        <small>{open ? '收起' : '展开'}</small>
      </button>
      <div className="ai-short-drawer-body" aria-hidden={!open}>
        <AssetGallery groups={groups} emptyBehavior="hide" compact />
      </div>
    </aside>
  );
}

function ShortVideoCard({ project, index, registerVideo, assetExpanded = false, suppressed = false, onAssetToggle }: ShortVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [remotePlaying, setRemotePlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const bilibiliEmbedUrl = getBilibiliEmbedUrl(project.bilibiliUrl, remotePlaying);
  const projectAssetGroups = project.assetGroups ?? [];
  const isLandscape = project.format === 'landscape';
  const portraitAssetSide = index % 2 === 1 ? 'left' : 'right';
  const leftAssetGroups = !isLandscape && portraitAssetSide === 'left' ? projectAssetGroups : [];
  const rightAssetGroups = !isLandscape && portraitAssetSide === 'right' ? projectAssetGroups : [];

  const setVideoRef = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node;
    registerVideo(project.slug, node);
  }, [project.slug, registerVideo]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play(); else video.pause();
  };

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <AnimatedElement className={`ai-short-reveal ${isLandscape ? 'is-featured' : ''} ${assetExpanded ? 'is-assets-expanded' : ''} ${suppressed ? 'is-suppressed' : ''}`}>
      <article className={`ai-short-card ${isLandscape ? 'is-landscape' : `has-assets-${portraitAssetSide}`}`}>
        <div className="ai-short-stage">
          {leftAssetGroups.length ? <AssetSidePanel side="left" groups={leftAssetGroups} open={assetExpanded} onToggle={onAssetToggle ?? (() => undefined)} /> : null}
          <div className="ai-short-main">
            <div className="ai-short-media">
          {project.videoSrc ? (
            <video ref={setVideoRef} data-short-video muted autoPlay loop playsInline poster={project.poster?.src} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
              <source src={project.videoSrc} type="video/mp4" />
            </video>
          ) : project.poster && !remotePlaying ? (
            <button className="ai-short-poster" type="button" onClick={() => setRemotePlaying(true)} aria-label={`播放 ${project.title}`}>
              <Image src={project.poster.src} alt={project.poster.alt} fill sizes="(max-width: 720px) 100vw, 420px" />
              <span className="ai-short-poster-shade" aria-hidden="true" />
              <span className="ai-short-poster-play"><Play size={22} fill="currentColor" /><small>PLAY / 点击播放</small></span>
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
            <div className="ai-video-placeholder"><Play size={28} strokeWidth={1.2} /><span>{String(index + 1).padStart(2, '0')}</span><small>LOCAL VIDEO SLOT</small></div>
          )}
          {project.videoSrc && (
            <div className="ai-video-controls">
              <button type="button" onClick={togglePlayback} aria-label={playing ? '暂停视频' : '播放视频'}>{playing ? <Pause size={17} /> : <Play size={17} />}</button>
              <button type="button" onClick={toggleMuted} aria-label={muted ? '打开声音' : '静音'}>{muted ? <VolumeX size={17} /> : <Volume2 size={17} />}</button>
            </div>
          )}
            </div>
            <div className="ai-short-caption">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{project.title}</h3><p>SHORT FORM / VERTICAL FILM</p></div>
              {project.bilibiliUrl ? (
                <a className="ai-short-source-link" href={project.bilibiliUrl} target="_blank" rel="noreferrer noopener">WATCH ON BILIBILI ↗</a>
              ) : <small>{project.videoSrc ? 'PLAYING LOCALLY' : 'MEDIA PENDING'}</small>}
            </div>
          </div>
          {rightAssetGroups.length ? <AssetSidePanel side="right" groups={rightAssetGroups} open={assetExpanded} onToggle={onAssetToggle ?? (() => undefined)} /> : null}
        </div>
        {isLandscape && projectAssetGroups.length ? (
          <div className="ai-short-landscape-assets">
            <AssetGallery groups={projectAssetGroups} emptyBehavior="hide" compact />
          </div>
        ) : null}
      </article>
    </AnimatedElement>
  );
}

export default function ShortVideoSection({ projects }: { projects: ShortVideoProject[] }) {
  const videos = useRef(new Map<string, HTMLVideoElement>());
  const [expandedProjectSlug, setExpandedProjectSlug] = useState<string | null>(null);
  const registerVideo = useCallback((slug: string, node: HTMLVideoElement | null) => {
    if (node) videos.current.set(slug, node); else videos.current.delete(slug);
  }, []);

  useEffect(() => {
    const nodes = Array.from(videos.current.values());
    if (!nodes.length) return;
    const visibility = new Map<HTMLVideoElement, number>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibility.set(entry.target as HTMLVideoElement, entry.intersectionRatio));
      const active = nodes.reduce<HTMLVideoElement | null>((best, video) => !best || (visibility.get(video) ?? 0) > (visibility.get(best) ?? 0) ? video : best, null);
      nodes.forEach((video) => {
        if (video === active && (visibility.get(video) ?? 0) >= .45) void video.play().catch(() => undefined);
        else video.pause();
      });
    }, { threshold: [0, .25, .45, .65, .85, 1] });
    nodes.forEach((video) => observer.observe(video));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <section className="ai-series-block ai-short-section" id="short-video" aria-labelledby="short-video-title">
      <AnimatedElement className="ai-block-heading"><span>03</span><div><p>SHORT FORM / VERTICAL</p><h2 id="short-video-title">SHORT VIDEO</h2><small>短视频</small></div></AnimatedElement>
      <div className="ai-short-feed">{projects.map((project, index) => {
        const expandedIndex = expandedProjectSlug ? projects.findIndex((item) => item.slug === expandedProjectSlug) : -1;
        const projectPair = index > 0 ? Math.floor((index - 1) / 2) : -1;
        const expandedPair = expandedIndex > 0 ? Math.floor((expandedIndex - 1) / 2) : -1;
        const assetExpanded = project.slug === expandedProjectSlug;
        const suppressed = project.format !== 'landscape' && expandedPair === projectPair && expandedProjectSlug !== null && !assetExpanded;

        return (
          <ShortVideoCard
            key={project.slug}
            project={project}
            index={index}
            registerVideo={registerVideo}
            assetExpanded={assetExpanded}
            suppressed={suppressed}
            onAssetToggle={() => setExpandedProjectSlug((current) => current === project.slug ? null : project.slug)}
          />
        );
      })}</div>
    </section>
  );
}
