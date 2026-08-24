'use client';

import { useEffect, useRef, useState } from 'react';
import WorkCategoryCard, { type WorkCategory } from './WorkCategoryCard';

const categories: WorkCategory[] = [
  {
    number: '01',
    title: 'POSTER DESIGN',
    subtitle: 'Commercial / Concept / AI Visual',
    image: '/works/poster-cover.jpg',
    href: '/visual/poster',
    featured: true,
  },
  {
    number: '02',
    title: 'BANNER DESIGN',
    subtitle: 'Digital Campaign / Promotion',
    image: '/works/banner-cover.jpg',
    href: '/visual/banner',
  },
  {
    number: '03',
    title: 'IP & VI',
    subtitle: 'Character / Brand Extension',
    image: '/works/ipvi-cover.jpg',
    href: '/visual/ipvi',
  },
  {
    number: '04',
    title: 'APP LAUNCH SCREEN',
    subtitle: 'Interface / Visual Experience',
    image: '/works/app-cover.jpg',
    href: '/visual/app',
  },
  {
    number: '05',
    title: 'TYPOGRAPHY',
    subtitle: 'Type / Graphic Experiment',
    image: '/works/type-cover.jpg',
    href: '/visual/typography',
  },
  {
    number: '06',
    title: 'ILLUSTRATION',
    subtitle: 'AI Illustration / Art Direction',
    image: '/works/illustration-cover.jpg',
    href: '/visual/illustration',
  },
];

function VisualReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
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
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-up ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function VisualDesignSection() {
  return (
    <section id="visual-design" className="portfolio-section visual-design-section" aria-labelledby="visual-design-title">
      <div className="visual-design-inner">
        <VisualReveal className="visual-design-header">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div>
              <p className="section-kicker">SELECTED VISUAL WORKS</p>
              <h2 id="visual-design-title">AI VISUAL DESIGN</h2>
              <p className="visual-design-chinese">AI视觉设计</p>
            </div>
          </div>
        </VisualReveal>

        <div className="visual-cards-grid">
          {categories.map((category, index) => (
            <VisualReveal
              key={category.title}
              delay={(index + 1) * 100}
              className={`visual-card-reveal visual-card-${category.number}`}
            >
              <WorkCategoryCard category={category} />
            </VisualReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
