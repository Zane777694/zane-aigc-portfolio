'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const seriesProjects = [
  { number: '01', title: '边军之王', subtitle: 'AI SERIES / VISUAL DEVELOPMENT' },
  { number: '02', title: 'LOVE AND REGRET', subtitle: 'AI SERIES / VISUAL DEVELOPMENT' },
];

function SeriesReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

  return <div ref={ref} className={`reveal reveal-up ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function SeriesLanding() {
  return (
    <section className="series-landing" aria-labelledby="series-page-title">
      <div className="series-landing-inner">
        <SeriesReveal>
          <header className="series-page-heading">
            <p>AI FILM / CHARACTER / ENVIRONMENT / PROPS</p>
            <h1 id="series-page-title">AI SERIES</h1>
            <span>AI 剧集</span>
          </header>
        </SeriesReveal>

        <div className="series-project-grid">
          {seriesProjects.map((project, index) => (
            <SeriesReveal key={project.number} delay={160 + index * 140}>
              <article className="series-project-card">
                <div className="series-project-visual" aria-hidden="true"><span>{project.number}</span></div>
                <div className="series-project-content">
                  <span>{project.number}</span>
                  <div><h2>{project.title}</h2><p>{project.subtitle}</p></div>
                  <span className="series-project-arrow"><ArrowRight size={19} strokeWidth={1.5} /></span>
                </div>
              </article>
            </SeriesReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
