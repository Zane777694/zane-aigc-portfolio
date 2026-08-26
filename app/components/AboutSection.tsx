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
const toolItems = ['ComfyUI', 'Midjourney', 'Seedance', 'Minimax', 'Photoshop', 'Illustrator', 'Figma'];

const workExperience = [
  {
    period: '2025.07 — 2026.08',
    company: '北京喷火龙文化传播有限公司',
    role: 'AIGC 创意创作',
    detail: '负责品牌广告、产品宣传与短视频视觉内容的创意策划、风格设定及分镜设计；使用 Seedance、MiniMax、ComfyUI、ChatGPT 完成人物、产品、场景与 AI 视频生成，搭建角色、表情、服装、动作及场景资产，并优化人物一致性与镜头连贯性。',
  },
  {
    period: '2024.11 — 2025.06',
    company: '北京喷火龙文化传播有限公司',
    role: '广告制作',
    detail: '参与社交媒体与品牌广告制作，根据品牌定位、产品卖点及目标受众完成视觉方案；负责人物、产品、场景和道具素材整理与视觉处理，配合剪辑、调色及成片优化。',
  },
];

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
                    src="/profile.png"
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
                  <small>/public/profile.png</small>
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

                <section className="about-experience" aria-labelledby="experience-title">
                  <div className="about-card-heading about-experience-heading">
                    <div>
                      <span id="experience-title">WORK EXPERIENCE</span>
                      <small>工作经历</small>
                    </div>
                    <span className="about-card-index">02</span>
                  </div>
                  <div className="about-experience-list">
                    {workExperience.map((item) => (
                      <div className="about-experience-item" key={`${item.period}-${item.role}`}>
                        <time>{item.period}</time>
                        <div>
                          <strong>{item.company}</strong>
                          <span className="about-experience-role">{item.role}</span>
                          <p>{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </article>
            </AboutReveal>

            <AboutReveal delay={320} className="about-contact-reveal">
              <article id="contact" className="about-info-card about-contact-card" aria-labelledby="contact-title">
                <div className="about-card-heading about-contact-heading">
                  <span id="contact-title">CONTACT</span>
                  <span className="about-card-index">03</span>
                </div>
                <div className="about-contact-fields" aria-label="Contact information">
                  <div><small>NAME / 姓名</small><strong>武子尧</strong></div>
                  <a href="mailto:1413159905@qq.com"><small>EMAIL / 邮箱</small><strong>1413159905@qq.com</strong></a>
                  <a href="tel:13844067883"><small>PHONE / 电话</small><strong>13844067883</strong></a>
                  <div><small>WECHAT / 微信</small><strong>13844067883</strong></div>
                </div>
                <span className="about-contact-cta">OPEN TO COLLABORATION / 欢迎联系</span>
              </article>
            </AboutReveal>
          </div>

          <div className="about-small-grid">
            <AboutReveal delay={440}><ListCard title="FOCUS" items={focusItems} /></AboutReveal>
            <AboutReveal delay={560}><ListCard title="TOOLS" items={toolItems} className="about-tools-card" /></AboutReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
