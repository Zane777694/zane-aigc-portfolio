'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import AppLaunchCard, { type AppWork } from './AppLaunchCard';
import WorkLightbox from './WorkLightbox';

export const appWorks: AppWork[] = [
  { id: 'app-01', number: '01', image: '/works/app/app-01.png', title: '妙启', category: 'APP LAUNCH SCREEN', featured: false, orientation: 'portrait', layout: 'third', width: 941, height: 1672 },
  { id: 'app-02', number: '02', image: '/works/app/app-02.png', title: 'ECHOTALK', category: 'APP LAUNCH SCREEN', featured: false, orientation: 'portrait', layout: 'third', width: 941, height: 1672 },
  { id: 'app-03', number: '03', image: '/works/app/app-03.png', title: 'LOOPCAST', category: 'APP LAUNCH SCREEN', featured: false, orientation: 'portrait', layout: 'third', width: 941, height: 1672 },
  { id: 'app-04', number: '04', image: '/works/app/app-04.png', title: 'GEOTRACE', category: 'APP LAUNCH SCREEN', featured: true, orientation: 'portrait', layout: 'half', width: 941, height: 1672 },
  { id: 'app-05', number: '05', image: '/works/app/app-05.png', title: '童绘故事', category: 'APP LAUNCH SCREEN', featured: true, orientation: 'portrait', layout: 'half', width: 941, height: 1672 },
  { id: 'app-06', number: '06', image: '/works/app/app-06.png', title: 'SPORTEK', category: 'APP LAUNCH SCREEN', featured: false, orientation: 'portrait', layout: 'closing', width: 853, height: 1844 },
];

export default function AppLaunchSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section className="poster-page-hero app-launch-page-hero" aria-labelledby="app-launch-page-title">
        <div className="poster-page-hero-inner">
          <AnimatedElement className="poster-page-hero-copy">
            <p className="poster-page-eyebrow">AI VISUAL DESIGN / 04</p>
            <h1 id="app-launch-page-title"><span>APP LAUNCH</span><span>SCREEN</span></h1>
            <div className="poster-page-meta"><p>STARTUP VISUAL / APP OPENING / VISUAL DESIGN</p><span>{appWorks.length} WORKS</span></div>
          </AnimatedElement>
        </div>
      </section>

      <section className="portfolio-section app-launch-section" aria-label="App launch screen works">
        <div className="app-launch-section-inner">
          <div className="app-launch-gallery">
            {appWorks.map((work, index) => (
              <AnimatedElement key={work.id} delay={Math.min(80 + index * 80, 480)} className={`app-launch-item app-launch-item-${work.layout}`}>
                <AppLaunchCard work={work} onOpen={() => setActiveIndex(index)} />
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="app-launch-end-reveal">
            <div className="app-launch-end-navigation">
              <Link className="poster-next-category poster-back-categories" href="/visual">
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>BACK TO</small><strong>AI VISUAL DESIGN</strong><em>VIEW ALL CATEGORIES</em></span>
              </Link>
              <Link className="poster-next-category poster-back-categories" href="/visual/ipvi">
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>PREVIOUS CATEGORY</small><strong>IP &amp; VI</strong><em>VIEW IP &amp; VI PROJECTS</em></span>
              </Link>
              <div className="poster-next-category poster-next-category-disabled" aria-disabled="true">
                <span><small>NEXT CATEGORY</small><strong>TYPOGRAPHY</strong><em>COMING NEXT</em></span>
                <ArrowRight size={24} strokeWidth={1.4} aria-hidden="true" />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <WorkLightbox works={appWorks} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onChange={setActiveIndex} />
    </>
  );
}
