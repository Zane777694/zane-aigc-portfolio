'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import IpViFeaturedStage from './IpViFeaturedStage';
import IpViProjectCard, { type IpViProject } from './IpViProjectCard';

export const ipviProjects: IpViProject[] = [
  {
    id: 'qihang-bear',
    title: '启航熊',
    subtitle: '宇宙探索家 / 梦想启航官',
    image: '/works/ipvi/qihang-bear.webp',
    category: 'IP DESIGN / VISUAL EXTENSION',
    description: '宇宙探索主题角色设定与品牌视觉延展。',
    href: '/visual/ipvi/qihang-bear',
    featured: true,
    extensions: ['/works/ipvi/qihang-bear/vi-01.webp', '/works/ipvi/qihang-bear/vi-02.webp', '/works/ipvi/qihang-bear/vi-03.webp'],
  },
  {
    id: 'baby-shark',
    title: '宝宝鲨',
    subtitle: '海洋探险家',
    image: '/works/ipvi/baby-shark.webp',
    category: 'IP DESIGN / VI EXTENSION',
    description: '海洋探险主题 IP 形象与 VI 应用体系。',
    href: '/visual/ipvi/baby-shark',
    featured: false,
    extensions: ['/works/ipvi/baby-shark/vi-01.webp', '/works/ipvi/baby-shark/vi-02.webp', '/works/ipvi/baby-shark/vi-03.webp'],
  },
  {
    id: 'pingsheng',
    title: '平生',
    subtitle: '自然观察者',
    image: '/works/ipvi/pingsheng.webp',
    category: 'IP DESIGN / BRAND VISUAL',
    description: '以自然观察与平和生活为核心的熊猫角色视觉。',
    href: '/visual/ipvi/pingsheng',
    featured: false,
    extensions: [],
  },
  {
    id: 'spark-ko',
    title: '拳闪',
    subtitle: '街头拳击潮玩 IP',
    image: '/works/ipvi/spark-ko.webp',
    category: 'IP DESIGN / CHARACTER SYSTEM',
    description: '街头拳击主题角色设定、动作与表情系统。',
    href: '/visual/ipvi/spark-ko',
    featured: false,
    extensions: [],
  },
  {
    id: 'honey-pup',
    title: '蜜小汪',
    subtitle: '花蜜使者',
    image: '/works/ipvi/honey-pup.webp',
    category: 'IP DESIGN / BRAND VISUAL',
    description: '花蜜使者主题角色设定与温暖品牌视觉。',
    href: '/visual/ipvi/honey-pup',
    featured: false,
    extensions: [],
  },
];

export default function IpViSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [extensionIndex, setExtensionIndex] = useState(0);
  const activeProject = ipviProjects[activeProjectIndex];
  const selectorProjects = ipviProjects.map((project, index) => ({ project, index })).filter(({ index }) => index !== activeProjectIndex);

  const selectProject = (index: number) => {
    setActiveProjectIndex(index);
    setFlipped(false);
    setExtensionIndex(0);
  };

  const showPreviousExtension = () => {
    setExtensionIndex((value) => (value - 1 + activeProject.extensions.length) % activeProject.extensions.length);
  };

  const showNextExtension = () => {
    setExtensionIndex((value) => (value + 1) % activeProject.extensions.length);
  };

  return (
    <>
      <section className="poster-page-hero ipvi-page-hero" aria-labelledby="ipvi-page-title">
        <div className="poster-page-hero-inner">
          <AnimatedElement className="poster-page-hero-copy">
            <p className="poster-page-eyebrow">AI VISUAL DESIGN / 03</p>
            <h1 id="ipvi-page-title"><span>IP &amp; VI</span></h1>
            <div className="poster-page-meta ipvi-page-meta">
              <p>IP DESIGN / BRAND VISUAL / VISUAL IDENTITY</p>
              <span>PROJECT INDEX</span>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="portfolio-section ipvi-section" aria-label="IP and visual identity projects">
        <div className="ipvi-section-inner">
          <div className="ipvi-desktop-showcase">
            <AnimatedElement className="ipvi-featured-reveal">
              <IpViFeaturedStage
                project={activeProject}
                projectIndex={activeProjectIndex}
                flipped={flipped}
                extensionIndex={extensionIndex}
                onFlip={() => { if (activeProject.extensions.length) setFlipped((value) => !value); }}
                onClose={() => setFlipped(false)}
                onPrevious={showPreviousExtension}
                onNext={showNextExtension}
                onSelectExtension={setExtensionIndex}
              />
            </AnimatedElement>

            <div className="ipvi-project-grid" aria-label="Choose another IP and VI project">
              {selectorProjects.map(({ project, index }, selectorIndex) => (
                <AnimatedElement key={project.id} delay={Math.min(80 + selectorIndex * 100, 380)}>
                  <IpViProjectCard project={project} index={index} onSelect={() => selectProject(index)} />
                </AnimatedElement>
              ))}
            </div>
          </div>

          <div className="ipvi-mobile-project-list">
            {ipviProjects.map((project, index) => (
              <AnimatedElement key={project.id} delay={Math.min(80 + index * 80, 400)}>
                <IpViProjectCard project={project} index={index} />
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement className="ipvi-end-reveal">
            <div className="ipvi-end-navigation">
              <Link className="poster-next-category poster-back-categories" href="/visual">
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>BACK TO</small><strong>AI VISUAL DESIGN</strong><em>VIEW ALL CATEGORIES</em></span>
              </Link>
              <Link className="poster-next-category poster-back-categories" href="/visual/banner">
                <ArrowLeft size={24} strokeWidth={1.4} aria-hidden="true" />
                <span><small>PREVIOUS CATEGORY</small><strong>BANNER DESIGN</strong><em>VIEW BANNER WORKS</em></span>
              </Link>
              <Link className="poster-next-category" href="/visual/app">
                <span><small>NEXT CATEGORY</small><strong>APP LAUNCH SCREEN</strong><em>VIEW STARTUP VISUALS</em></span>
                <ArrowRight size={24} strokeWidth={1.4} aria-hidden="true" />
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
}

