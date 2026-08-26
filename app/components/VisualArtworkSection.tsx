'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import VisualArtworkCard, { type VisualArtwork } from './VisualArtworkCard';
import WorkLightbox from './WorkLightbox';

type CategoryLink = { href: string; label: string; detail: string };

type VisualArtworkSectionProps = {
  sectionNumber: string;
  title: string;
  titleLines: string[];
  subtitle: string;
  description: string;
  className: string;
  works: VisualArtwork[];
  previous: CategoryLink;
  next?: CategoryLink;
};

export default function VisualArtworkSection({ sectionNumber, title, titleLines, subtitle, description, className, works, previous, next }: VisualArtworkSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section className={`poster-page-hero visual-collection-page-hero ${className}-page-hero`} aria-labelledby={`${className}-page-title`}>
        <div className="poster-page-hero-inner">
          <AnimatedElement className="poster-page-hero-copy">
            <p className="poster-page-eyebrow">AI VISUAL DESIGN / {sectionNumber}</p>
            <h1 id={`${className}-page-title`}>{titleLines.map((line) => <span key={line}>{line}</span>)}</h1>
            <div className="poster-page-meta"><p>{subtitle}</p><span>{works.length} WORKS</span></div>
          </AnimatedElement>
        </div>
      </section>

      <section className={`portfolio-section visual-collection-section ${className}-section`} aria-label={`${title} works`}>
        <div className="visual-collection-section-inner">
          <AnimatedElement className="visual-collection-intro">
            <span>{subtitle}</span>
            <p>{description}</p>
          </AnimatedElement>

          <div className={`visual-collection-gallery ${className}-gallery`}>
            {works.map((work, index) => (
              <AnimatedElement key={work.id} delay={Math.min(80 + index * 80, 480)} className={`visual-collection-item visual-collection-item-${work.layout}`}>
                <VisualArtworkCard work={work} onOpen={() => setActiveIndex(index)} />
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="visual-collection-end-reveal">
            <div className={`visual-collection-end-navigation ${next ? '' : 'is-complete'}`}>
              <Link className="poster-next-category poster-back-categories" href="/visual">
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>BACK TO</small><strong>AI VISUAL DESIGN</strong><em>VIEW ALL CATEGORIES</em></span>
              </Link>
              <Link className="poster-next-category poster-back-categories" href={previous.href}>
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>PREVIOUS CATEGORY</small><strong>{previous.label}</strong><em>{previous.detail}</em></span>
              </Link>
              {next && (
                <Link className="poster-next-category" href={next.href}>
                  <span><small>NEXT CATEGORY</small><strong>{next.label}</strong><em>{next.detail}</em></span>
                  <ArrowRight size={24} strokeWidth={1.4} aria-hidden="true" />
                </Link>
              )}
            </div>
          </AnimatedElement>
        </div>
      </section>

      <WorkLightbox works={works} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
    </>
  );
}
