'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import PosterCard, { type PosterWork } from './PosterCard';
import WorkLightbox from './WorkLightbox';

const posterWorks: PosterWork[] = [
  { id: 'poster-01', number: '01', title: 'ENIGMA', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-01.jpg', orientation: 'portrait', layout: 'featured' },
  { id: 'poster-02', number: '02', title: 'YORMY G', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-02.jpg', orientation: 'portrait', layout: 'half' },
  { id: 'poster-03', number: '03', title: 'HYPE CREW', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-03.jpg', orientation: 'portrait', layout: 'half' },
  { id: 'poster-04', number: '04', title: 'BREAK THROUGH', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-04.jpg', orientation: 'portrait', layout: 'wide' },
  { id: 'poster-05', number: '05', title: 'DREAM GARDEN', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-05.jpg', orientation: 'portrait', layout: 'half' },
  { id: 'poster-06', number: '06', title: 'NEXT LEVEL', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-06.jpg', orientation: 'portrait', layout: 'half' },
  { id: 'poster-07', number: '07', title: 'IN BLOOM, IN SHADOW', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-07.jpg', orientation: 'portrait', layout: 'wide' },
  { id: 'poster-08', number: '08', title: 'DESTINY', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-08.jpg', orientation: 'portrait', layout: 'half' },
  { id: 'poster-09', number: '09', title: 'CYBER MUSE', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-09.jpg', orientation: 'portrait', layout: 'half' },
  { id: 'poster-10', number: '10', title: 'STAR DUST', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-10.jpg', orientation: 'portrait', layout: 'wide' },
  { id: 'poster-11', number: '11', title: 'VELVET BLOOM', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-11.jpg', orientation: 'portrait', layout: 'half' },
  { id: 'poster-12', number: '12', title: 'STREET MODE', category: 'AI VISUAL / POSTER DESIGN', image: '/works/poster/poster-12.jpg', orientation: 'portrait', layout: 'half' },
];

function PosterReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal reveal-up ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function PosterSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section className="poster-page-hero" aria-labelledby="poster-page-title">
        <div className="poster-page-hero-inner">
          <PosterReveal className="poster-page-hero-copy">
            <p className="poster-page-eyebrow">AI VISUAL DESIGN / 01</p>
            <h1 id="poster-page-title"><span>POSTER</span><span>DESIGN</span></h1>
            <div className="poster-page-meta">
              <p>SELECTED VISUAL WORKS</p>
              <span>12 WORKS</span>
            </div>
          </PosterReveal>
        </div>
      </section>

      <section id="poster-works" className="portfolio-section poster-section" aria-label="Poster design works">
        <div className="poster-section-inner">
          <div className="poster-gallery">
            {posterWorks.map((work, index) => (
              <PosterReveal key={work.id} delay={Math.min(100 + index * 80, 600)} className={`poster-item poster-item-${work.layout}`}>
                <PosterCard work={work} onOpen={() => setActiveIndex(index)} />
              </PosterReveal>
            ))}
          </div>

          <PosterReveal className="poster-end-reveal">
            <div className="poster-end-navigation">
              <Link className="poster-next-category poster-back-categories" href="/visual">
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>BACK TO</small><strong>AI VISUAL DESIGN</strong><em>VIEW ALL CATEGORIES</em></span>
              </Link>
              <Link className="poster-next-category" href="/visual/banner">
                <span><small>NEXT CATEGORY</small><strong>BANNER DESIGN</strong><em>VIEW BANNER WORKS</em></span>
                <ArrowRight size={24} strokeWidth={1.4} aria-hidden="true" />
              </Link>
            </div>
          </PosterReveal>
        </div>
      </section>

      <WorkLightbox works={posterWorks} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
    </>
  );
}
