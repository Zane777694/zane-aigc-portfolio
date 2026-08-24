'use client';

import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, HelpCircle } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const tickerItems = Array.from({ length: 60 }, (_, index) => index);
const tickerWords = ['AIGC', 'VISUAL', 'MOTION', 'DESIGN', 'STORYTELLING'];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ArrowButton({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-[3px] sm:size-10 ${
        dark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      aria-hidden="true"
    >
      <ArrowRight size={17} strokeWidth={1.6} />
    </span>
  );
}

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [motionExpanded, setMotionExpanded] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] xl:h-screen" aria-labelledby="hero-title">
      <div className="hero-cinematic-fallback absolute inset-0 z-0" aria-hidden="true">
        <span />
        <span />
      </div>
      <video
        className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onCanPlay={() => setVideoReady(true)}
        aria-hidden="true"
      >
        {/* Replace this file while keeping the cinematic fallback behind it. */}
        <source src="/videos/home-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-black/60" aria-hidden="true" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_68%_33%,rgba(239,206,150,0.08),transparent_34%)]" aria-hidden="true" />

      <header className="relative z-10 flex items-start justify-between px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12">
        <AnimatedElement delay={100} direction="down">
          <a href="#top" className="block text-white" aria-label="ZANE home">
            <span className="block text-xl font-semibold tracking-tight sm:text-2xl">ZANE</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.22em] text-white/50 sm:text-[10px]">AIGC Visual Designer</span>
          </a>
        </AnimatedElement>

        <AnimatedElement className="absolute left-1/2 top-8 -translate-x-1/2 sm:top-10" delay={160} direction="down">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/15 sm:size-10"
            aria-label="Go to About"
          >
            <HelpCircle size={18} strokeWidth={1.5} />
          </button>
        </AnimatedElement>

        <AnimatedElement className="hidden md:block" delay={200} direction="down">
          <button type="button" onClick={() => scrollToSection('about')} className="group flex items-center gap-4 text-right">
            <span className="text-xl font-bold leading-[0.95] text-white sm:text-3xl lg:text-[42px]">
              武子尧<br />ZANE
            </span>
            <span className="hero-avatar block size-11 rounded-full border border-white/20 bg-cover bg-center sm:size-16 lg:size-[72px]" role="img" aria-label="Portrait of ZANE" />
          </button>
        </AnimatedElement>
      </header>

      <div id="top" className="relative z-[2] flex flex-col gap-10 px-5 pb-6 pt-28 sm:px-8 sm:pb-8 sm:pt-32 lg:px-12 lg:pb-12 xl:absolute xl:inset-x-0 xl:bottom-0 xl:flex-row xl:items-end xl:justify-between xl:gap-8 xl:pt-0">
        <div className="w-full sm:w-[520px] lg:w-[620px]">
          <AnimatedElement delay={300}>
            <div className="relative h-[420px] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#151412] shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:h-[500px] sm:rounded-[32px] lg:h-[550px] lg:rounded-[40px]">
              <div className="hero-orb animate-spin-bg absolute inset-[-18%] bg-cover bg-center" aria-hidden="true" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_8%,rgba(4,4,4,0.24)_55%,rgba(4,4,4,0.75)_100%)]" aria-hidden="true" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
                <AnimatedElement delay={600}>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/65 sm:text-base">Personal Portfolio</p>
                </AnimatedElement>
                <AnimatedElement delay={800}>
                  <h1 id="hero-title" className="mt-6 text-[72px] font-semibold leading-[0.85] tracking-[-0.07em] sm:text-[100px] lg:text-[132px]">AIGC</h1>
                  <p className="mt-4 whitespace-nowrap font-chinese text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">个人作品集</p>
                </AnimatedElement>
                <AnimatedElement delay={900}>
                  <p className="mt-7 text-[9px] font-medium uppercase tracking-[0.2em] text-white/55 sm:text-[10px]">ZANE / AIGC Visual Designer</p>
                </AnimatedElement>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement className="mt-4" delay={1000}>
            <div className="flex justify-center">
              <span className="rounded-full border border-[#EFCE96]/50 bg-[#EFCE96]/20 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-md sm:px-6 sm:text-sm">AIGC VISUAL DESIGNER</span>
            </div>
            <div className="ticker-mask relative mt-3 h-12 overflow-hidden" aria-hidden="true">
              <div className="animate-ticker absolute inset-y-0 left-0 flex w-max items-center gap-4 pr-4">
                {[0, 1].map((group) => (
                  <div key={group} className="flex items-center gap-4">
                    {tickerItems.map((item) => (
                      <span key={`${group}-${item}`} className={`block w-px bg-[rgba(239,206,150,0.5)] ${item % 5 === 0 ? 'h-7' : item % 2 === 0 ? 'h-4' : 'h-2.5'}`} />
                    ))}
                    {tickerWords.map((word) => <span key={`${group}-${word}`} className="text-[8px] tracking-[0.22em] text-[#EFCE96]/45">{word}</span>)}
                  </div>
                ))}
              </div>
              <span className="absolute left-1/2 top-1/2 h-10 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-[#EFCE96]" />
            </div>
          </AnimatedElement>
        </div>

        <nav className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:w-[540px]" aria-label="Portfolio sections">
          <AnimatedElement delay={500} direction="left">
            <button type="button" onClick={() => scrollToSection('about')} className="group flex h-[130px] w-full flex-col justify-between rounded-[16px] border border-white/10 bg-[#2F2F2F]/60 p-4 text-left text-white backdrop-blur-[52px] transition-colors duration-300 hover:bg-[#383838]/70 sm:h-36 sm:rounded-[20px] sm:p-5">
              <span><strong className="block text-xl font-semibold tracking-tight">About Me</strong><small className="mt-1 block font-chinese text-xs text-white/55">个人介绍</small></span>
              <span className="flex items-center justify-between text-xs text-white/60"><span>Profile</span><ArrowButton dark /></span>
            </button>
          </AnimatedElement>

          <AnimatedElement delay={650} direction="left">
            <button type="button" onClick={() => scrollToSection('visual')} className="hero-visual-card group relative flex h-[130px] w-full flex-col justify-between overflow-hidden rounded-[16px] border border-white/10 bg-cover bg-center p-4 text-left text-white transition-[filter] duration-300 hover:brightness-110 sm:h-36 sm:rounded-[20px] sm:p-5">
              <span className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/65" />
              <span className="relative"><strong className="block text-xl font-semibold tracking-tight">AI Visual</strong><small className="mt-1 block font-chinese text-xs text-white/65">海报 / Banner / IP / APP</small></span>
              <span className="relative flex items-center justify-between text-xs text-white/75"><span>Explore</span><ArrowButton /></span>
            </button>
          </AnimatedElement>

          <AnimatedElement delay={800} direction="left">
            <button
              type="button"
              id="motion"
              onMouseEnter={() => setMotionExpanded(true)}
              onMouseLeave={() => setMotionExpanded(false)}
              onClick={() => setMotionExpanded((expanded) => !expanded)}
              aria-expanded={motionExpanded}
              className={`group flex w-full flex-col justify-between overflow-hidden rounded-[16px] border p-4 text-left transition-[height,background-color,color,border-color] duration-300 ease-in-out sm:rounded-[20px] sm:p-5 ${motionExpanded ? 'h-[280px] border-white bg-white text-black' : 'h-[130px] border-white/10 bg-[#2F2F2F]/60 text-white backdrop-blur-[52px] sm:h-36'}`}
            >
              <span><strong className="block text-xl font-semibold tracking-tight">Motion</strong><small className={`mt-1 block text-xs ${motionExpanded ? 'text-black/55' : 'text-white/55'}`}>AI Video &amp; Moving Image</small></span>
              {motionExpanded && <p className="max-w-[210px] text-sm leading-relaxed text-black/65">AI-generated moving images, commercial video experiments, cinematic visual storytelling and motion design.</p>}
              <span className="flex items-end justify-between text-[10px] font-medium uppercase tracking-[0.16em] opacity-60"><span>{motionExpanded ? 'Close' : 'AI Video'}</span><span className={`grid size-9 place-items-center rounded-full ${motionExpanded ? 'bg-[#ededed]' : 'bg-black'}`}>{motionExpanded ? <ArrowDown size={17} strokeWidth={1.6} /> : <ArrowUp size={17} strokeWidth={1.6} />}</span></span>
            </button>
          </AnimatedElement>

          <AnimatedElement delay={950} direction="left">
            <button type="button" onClick={() => scrollToSection('storyboard')} className="hero-storyboard-card group relative flex h-[130px] w-full flex-col justify-between overflow-hidden rounded-[16px] border border-white/10 bg-cover bg-center p-4 text-left text-white transition-[filter] duration-300 hover:brightness-110 sm:h-36 sm:rounded-[20px] sm:p-5">
              <span className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/70" />
              <span className="relative"><strong className="block text-xl font-semibold tracking-tight">Storyboard</strong><small className="mt-1 block font-chinese text-xs text-white/65">分镜 / AI剧集</small></span>
              <span className="relative flex items-center justify-between text-xs text-white/75"><span>View</span><ArrowButton /></span>
            </button>
          </AnimatedElement>
        </nav>
      </div>
    </section>
  );
}
