'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type AboutRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left';
};

function AboutReveal({ children, className = '', delay = 0, direction = 'up' }: AboutRevealProps) {
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

const focusItems = ['AI Visual Design', 'AI Series', 'Brand Visual', 'Creative Production'];
const experienceItems = ['AIGC Visual Design', 'Advertising Production', 'Visual Design', 'AI Content Production'];
const toolItems = ['ComfyUI', 'Midjourney', 'Seedance', 'Minimax', 'Photoshop', 'Illustrator', 'Figma'];

function ListCard({ title, items, className = '' }: { title: string; items: string[]; className?: string }) {
  return (
    <article className={`about-info-card ${className}`}>
      <div className="about-card-heading">
        <span>{title}</span>
        <span className="about-card-dot" aria-hidden="true" />
      </div>
      <div className="about-keywords">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  );
}

export default function AboutSection() {
  const [photoAvailable, setPhotoAvailable] = useState(true);

  return (
    <section id="about" className="portfolio-section about-section" aria-labelledby="about-title">
      <div className="about-section-inner">
        <AboutReveal delay={40} className="about-section-header">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <p className="section-kicker">PROFILE / EXPERIENCE / SKILLS</p>
              <h2 id="about-title">ABOUT ME</h2>
              <p className="about-chinese-title">个人简介</p>
            </div>
          </div>
        </AboutReveal>

        <div className="about-layout">
          <AboutReveal delay={100} direction="left" className="about-photo-column">
            <article className="about-photo-card">
              <div className="about-photo-media">
                {photoAvailable && (
                  <Image
                    src="/profile.jpg"
                    alt="ZANE / 武子尧 portrait"
                    fill
                    sizes="(min-width: 1180px) 38vw, 100vw"
                    className="about-photo-image"
                    onError={() => setPhotoAvailable(false)}
                    unoptimized
                    priority={false}
                  />
                )}
                <div className="about-photo-placeholder" aria-hidden="true">
                  <span>PORTRAIT</span>
                  <small>/public/profile.jpg</small>
                </div>
                <div className="about-photo-overlay" aria-hidden="true" />
              </div>
              <div className="about-identity">
                <div>
                  <strong>ZANE</strong>
                  <span>武子尧</span>
                </div>
                <p>AIGC VISUAL DESIGNER</p>
              </div>
            </article>
          </AboutReveal>

          <div className="about-content-column">
            <AboutReveal delay={220} className="about-profile-reveal">
              <article className="about-info-card about-profile-card">
                <div className="about-card-heading">
                  <span>PROFILE</span>
                  <span className="about-card-index">01</span>
                </div>
                <div className="about-profile-copy">
                  <p>专注于 AIGC 视觉设计与 AI 内容创作，具备广告视觉、品牌设计、AI 剧集资产制作与生成式内容工作流经验。</p>
                  <p>擅长将传统视觉设计方法与 AIGC 工具结合，完成从创意构思、视觉资产生成到最终内容落地的完整流程。</p>
                </div>
              </article>
            </AboutReveal>
          </div>

          <div className="about-small-grid">
            <AboutReveal delay={360}><ListCard title="FOCUS" items={focusItems} /></AboutReveal>
            <AboutReveal delay={480}><ListCard title="EXPERIENCE" items={experienceItems} /></AboutReveal>
            <AboutReveal delay={600}><ListCard title="TOOLS" items={toolItems} className="about-tools-card" /></AboutReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
