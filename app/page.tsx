'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AboutSection from './components/AboutSection';
import SiteFooter from './components/SiteFooter';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_044635_8daabe05-1a5c-491c-920f-4b0bd8f04812.mp4';
const HERO_TEXTURE_URL = '/hero-golden-spiral.png';
const SERIES_IMAGE_URL =
  'https://polo-pecan-73837341.figma.site/_assets/v11/94903fdf21e145cd4ba873c15fc03251c0600ee5.png';
const CONTACT_IMAGE_URL =
  'https://polo-pecan-73837341.figma.site/_assets/v11/0c38fdb8a933b0da384a5a3f8b0d9986bb919838.png';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
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
      className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function PortfolioCard({
  title,
  chineseTitle,
  subtitle,
  href,
  delay,
  image,
  tone,
}: {
  title: string;
  chineseTitle: string;
  subtitle: string;
  href?: string;
  delay: number;
  image?: string;
  tone?: 'gold' | 'slate';
}) {
  const className = `info-card ${image ? 'image-card' : 'glass-card'} ${tone ? `info-card-${tone}` : ''} ${href ? '' : 'info-card-disabled'}`;
  const isExternal = href?.startsWith('http');
  const content = (
    <>
      <span className="card-title-wrap">
        <span className="card-title">{title}</span>
        <span className="card-title-chinese">{chineseTitle}</span>
      </span>
      <span className="card-bottom">
        <span className="card-subtitle">{subtitle}</span>
        <span className="round-arrow" aria-hidden="true">
          <ArrowRight size={17} strokeWidth={1.7} />
        </span>
      </span>
    </>
  );

  return (
    <Reveal delay={delay} direction="right">
      {href ? (
        <a
          className={className}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer noopener' : undefined}
          style={image ? { backgroundImage: `url(${image})` } : undefined}
        >
          {content}
        </a>
      ) : (
        <div className={className} style={image ? { backgroundImage: `url(${image})` } : undefined} aria-disabled="true">
          {content}
        </div>
      )}
    </Reveal>
  );
}

export default function Home() {
  const ticks = Array.from({ length: 61 }, (_, index) => index);

  return (
    <main className="portfolio-page">
      <section id="home" className="dashboard-shell" aria-label="Home">
        <video className="background-video" src={VIDEO_URL} autoPlay loop muted playsInline aria-hidden="true" />
        <div className="video-shade" aria-hidden="true" />

        <nav className="top-nav" aria-label="Primary navigation">
          <Reveal delay={100} direction="left" className="brand-wrap">
            <Link className="brand-wordmark" href="/" aria-label="ZANE home">ZANE</Link>
          </Reveal>
          <Reveal delay={180} direction="down" className="nav-reveal">
            <div className="nav-links">
              <Link href="/visual">WORK</Link>
              <Link href="/#about">ABOUT</Link>
              <Link href="/series">AI SERIES</Link>
              <Link href="/#contact">CONTACT</Link>
            </div>
          </Reveal>
        </nav>

        <div className="content-wrap">
          <div className="hero-section">
            <Reveal delay={300} direction="scale">
              <article className="hero-card">
                <div
                  className="hero-texture animate-spin-bg"
                  style={{ backgroundImage: `url(${HERO_TEXTURE_URL})` }}
                  aria-hidden="true"
                />
                <div className="hero-card-shade" aria-hidden="true" />
                <div className="hero-content">
                  <Reveal delay={560} direction="up">
                    <p className="hero-english">AIGC PERSONAL PORTFOLIO</p>
                  </Reveal>
                  <Reveal delay={720} direction="up">
                    <h1>AIGC个人作品集</h1>
                  </Reveal>
                  <Reveal delay={880} direction="up">
                    <p className="designer-name">ZANE / 武子尧</p>
                  </Reveal>
                </div>
              </article>
            </Reveal>

            <Reveal delay={1000} direction="up" className="hero-footer">
              <div className="ruler ticker-mask" aria-hidden="true">
                <div className="ruler-track animate-ticker">
                  {[...ticks, ...ticks].map((tick, index) => (
                    <span key={`${tick}-${index}`} className={`ruler-tick ${tick % 5 === 0 ? 'ruler-tick-tall' : ''}`} />
                  ))}
                </div>
                <span className="ruler-center" />
              </div>
            </Reveal>
          </div>

          <div className="cards-grid" aria-label="Portfolio sections">
            <div className="card-column">
              <PortfolioCard title="AI VISUAL DESIGN" chineseTitle="AI视觉设计" subtitle="Poster / Banner / Illustration" href="/visual" delay={500} tone="gold" />
              <PortfolioCard title="ABOUT ME" chineseTitle="个人简介" subtitle="Profile / Experience" href="#about" delay={800} tone="slate" />
            </div>
            <div className="card-column">
              <PortfolioCard title="AI SERIES" chineseTitle="AI剧集" subtitle="Character / Scene / Props" href="/series" delay={650} image={SERIES_IMAGE_URL} />
              <PortfolioCard title="APP DESIGN WEBSITE" chineseTitle="APP设计官网" subtitle="Product / Interface / Experience" href="https://zane777694.github.io/shiguang-food-memories/" delay={950} image={CONTACT_IMAGE_URL} />
            </div>
          </div>

        </div>
      </section>

      <AboutSection />
      <SiteFooter />
    </main>
  );
}
