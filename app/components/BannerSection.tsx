'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import BannerCard, { type BannerWork } from './BannerCard';
import WorkLightbox from './WorkLightbox';

const bannerWorks: BannerWork[] = [
  { id: 'banner-01', number: '01', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-01.png', width: 2172, height: 724, featured: true },
  { id: 'banner-02', number: '02', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-02.png', width: 2172, height: 724, featured: true },
  { id: 'banner-03', number: '03', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-03.png', width: 2172, height: 724, featured: true },
  { id: 'banner-04', number: '04', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-04.png', width: 2066, height: 761 },
  { id: 'banner-05', number: '05', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-05.png', width: 1907, height: 825 },
  { id: 'banner-06', number: '06', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-06.png', width: 1774, height: 887 },
  { id: 'banner-07', number: '07', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-07.png', width: 1774, height: 887 },
  { id: 'banner-08', number: '08', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-08.png', width: 1983, height: 793 },
  { id: 'banner-09', number: '09', title: '', category: 'BANNER / VISUAL DESIGN', image: '/works/banner/banner-09.png', width: 1983, height: 793 },
];

export default function BannerSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section className="poster-page-hero banner-page-hero" aria-labelledby="banner-page-title">
        <div className="poster-page-hero-inner">
          <AnimatedElement className="poster-page-hero-copy">
            <p className="poster-page-eyebrow">AI VISUAL DESIGN / 02</p>
            <h1 id="banner-page-title"><span>BANNER</span><span>DESIGN</span></h1>
            <div className="poster-page-meta">
              <p>SELECTED VISUAL WORKS</p>
              <span>{bannerWorks.length} WORKS</span>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="portfolio-section banner-section" aria-label="Banner design works">
        <div className="banner-section-inner">
          <div className="banner-gallery">
            {bannerWorks.map((work, index) => (
              <AnimatedElement key={work.id} delay={Math.min(80 + index * 70, 500)} className={work.featured ? 'banner-item-featured' : ''}>
                <BannerCard work={work} onOpen={() => setActiveIndex(index)} />
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="banner-end-reveal">
            <div className="banner-end-navigation">
              <Link className="poster-next-category poster-back-categories" href="/visual">
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>BACK TO</small><strong>AI VISUAL DESIGN</strong><em>VIEW ALL CATEGORIES</em></span>
              </Link>
              <Link className="poster-next-category poster-back-categories" href="/visual/poster">
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>PREVIOUS CATEGORY</small><strong>POSTER DESIGN</strong><em>VIEW POSTER WORKS</em></span>
              </Link>
              <Link className="poster-next-category" href="/visual/ipvi">
                <span><small>NEXT CATEGORY</small><strong>IP &amp; VI</strong><em>VIEW IP &amp; VI PROJECTS</em></span>
                <ArrowRight size={24} strokeWidth={1.4} aria-hidden="true" />
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <WorkLightbox works={bannerWorks} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} variant="wide" />
    </>
  );
}
