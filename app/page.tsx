'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, HelpCircle } from 'lucide-react';
import Image from 'next/image';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_044635_8daabe05-1a5c-491c-920f-4b0bd8f04812.mp4';
const LOGO_URL =
  'https://polo-pecan-73837341.figma.site/_assets/v11/f73360d8fc2d33f2b5a4bfb1fa4935fca355946f.svg';
const AVATAR_URL =
  'https://polo-pecan-73837341.figma.site/_assets/v11/745de561b3ebfa8634a3483efc95f21feedd96c9.png';
const AGE_TEXTURE_URL =
  'https://polo-pecan-73837341.figma.site/_assets/v11/d8d9bd498347ea96ca4d675a624c8d90e06786e7.png';
const INSIGHTS_URL =
  'https://polo-pecan-73837341.figma.site/_assets/v11/94903fdf21e145cd4ba873c15fc03251c0600ee5.png';
const ACTION_URL =
  'https://polo-pecan-73837341.figma.site/_assets/v11/0c38fdb8a933b0da384a5a3f8b0d9986bb919838.png';

function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
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

function AgeCounter() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const startedAt = performance.now();
    let frame = 0;
    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / 1800, 1);
      setAge(Math.round(progress * 28));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    const increment = window.setInterval(() => setAge((value) => value + 1), 6000);
    return () => {
      cancelAnimationFrame(frame);
      clearInterval(increment);
    };
  }, []);

  return <span className="age-number">{age}</span>;
}

function RoundArrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`round-arrow ${dark ? 'round-arrow-dark' : ''}`} aria-hidden="true">
      <ArrowRight size={17} strokeWidth={1.7} />
    </span>
  );
}

function HealthSnapshot() {
  const [expanded, setExpanded] = useState(false);
  return (
    <article
      className={`info-card health-card ${expanded ? 'expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <button
        type="button"
        className="health-button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
      >
        <span className="card-title">Your Health Snapshot</span>
        <span className="health-copy">
          With a biological age of 28, your body is performing like a young, energetic you. Keep fueling it
          with movement, nourishing food, quality rest, and a calm mind — so you can stay strong, sharp, and
          unstoppable.
        </span>
        <span className="card-bottom">
          <span className="muted-label">Recommendations</span>
          <span className="round-arrow round-arrow-dark" aria-hidden="true">
            {expanded ? <ArrowDown size={17} /> : <ArrowUp size={17} />}
          </span>
        </span>
      </button>
    </article>
  );
}

export default function Home() {
  const ticks = Array.from({ length: 61 }, (_, index) => index);

  return (
    <main className="dashboard-shell">
      <video className="background-video" src={VIDEO_URL} autoPlay loop muted playsInline aria-hidden="true" />
      <div className="video-shade" aria-hidden="true" />

      <nav className="top-nav" aria-label="Primary navigation">
        <Reveal delay={100} direction="left" className="brand-wrap">
          <Image className="brand-logo" src={LOGO_URL} alt="Health dashboard" width={160} height={40} unoptimized />
        </Reveal>
        <Reveal delay={150} direction="down" className="help-wrap">
          <button className="help-button" type="button" aria-label="Open help">
            <HelpCircle size={18} strokeWidth={1.5} />
          </button>
        </Reveal>
        <Reveal delay={200} direction="right" className="profile-wrap">
          <span className="profile-name">Benjamin Carter</span>
          <Image className="avatar" src={AVATAR_URL} alt="Benjamin Carter" width={72} height={72} unoptimized />
        </Reveal>
      </nav>

      <section className="content-wrap" aria-label="Health overview">
        <div className="age-section">
          <Reveal delay={300} direction="scale">
            <article className="age-card">
              <div className="age-texture animate-spin-bg" style={{ backgroundImage: `url(${AGE_TEXTURE_URL})` }} aria-hidden="true" />
              <div className="age-card-shade" aria-hidden="true" />
              <div className="age-content">
                <Reveal delay={600} direction="up"><p className="age-eyebrow">Estimated<br />Biological Age</p></Reveal>
                <Reveal delay={800} direction="up"><AgeCounter /></Reveal>
              </div>
            </article>
          </Reveal>

          <Reveal delay={1000} direction="up" className="age-footer">
            <span className="younger-badge">3 Years Younger</span>
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

        <div className="cards-grid">
          <div className="card-column">
            <Reveal delay={500} direction="right">
              <article className="info-card glass-card">
                <h2 className="card-title">Upcoming Activities</h2>
                <div className="card-bottom"><span className="muted-label">4 events</span><RoundArrow dark /></div>
              </article>
            </Reveal>
            <Reveal delay={800} direction="right"><HealthSnapshot /></Reveal>
          </div>
          <div className="card-column">
            <Reveal delay={650} direction="right">
              <article className="info-card image-card" style={{ backgroundImage: `url(${INSIGHTS_URL})` }}>
                <h2 className="card-title">Your Insights</h2>
                <div className="card-bottom"><span className="detail-pill">8 Risks</span><RoundArrow /></div>
              </article>
            </Reveal>
            <Reveal delay={950} direction="right">
              <article className="info-card image-card" style={{ backgroundImage: `url(${ACTION_URL})` }}>
                <h2 className="card-title">Action Plan</h2>
                <div className="card-bottom"><span className="detail-pill">Details</span><RoundArrow /></div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
