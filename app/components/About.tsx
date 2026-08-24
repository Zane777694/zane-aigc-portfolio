'use client';

import { motion } from 'framer-motion';

const focusItems = [
  'AIGC Visual Design',
  'Visual Direction',
  'Image Generation',
  'Video Generation',
  'IP Design',
  'Digital Design',
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-30 -mt-8 scroll-mt-0 overflow-hidden rounded-t-[24px] bg-[#f1efe9] text-[#111111] sm:rounded-t-[32px]"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 pb-20 pt-6 sm:px-8 sm:pb-24 sm:pt-8 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-16 lg:px-12 lg:pb-28 xl:gap-24 xl:px-16">
        <motion.figure
          initial={{ opacity: 0, y: 48, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 1.25, ease }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-cover bg-center sm:rounded-[22px]"
          style={{ backgroundImage: "url('/images/about/zane.jpg'), radial-gradient(circle at 58% 28%, #ddd9d0 0%, #c8c4bb 38%, #aaa69f 100%)" }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(145deg,transparent_35%,rgba(20,20,20,.13)_100%)]" />
          <figcaption className="absolute bottom-5 left-5 text-[8px] font-medium uppercase tracking-[.22em] text-black/45 sm:bottom-6 sm:left-6">
            Portrait / Zane · 2026
          </figcaption>
        </motion.figure>

        <div className="flex min-w-0 flex-col lg:pt-3 xl:pt-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.85, ease }}
            className="text-[9px] font-semibold uppercase tracking-[.22em] text-[#777777]"
          >
            02 / About Me
          </motion.p>

          <div className="mt-8 overflow-hidden sm:mt-10">
            <motion.h2
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 1, delay: 0.08, ease }}
              className="flex flex-wrap items-end gap-x-5 gap-y-1"
            >
              <span lang="zh-CN" className="font-chinese text-[clamp(3rem,5.2vw,5.8rem)] font-medium leading-none tracking-[-.055em]">武子尧</span>
              <span className="font-display text-[clamp(2.6rem,4.2vw,4.9rem)] italic leading-none tracking-[-.045em] text-black/78">ZANE</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.85, delay: 0.18, ease }}
            className="mt-5 text-[10px] font-semibold uppercase tracking-[.22em] text-[#777777]"
          >
            AIGC Visual Designer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1, delay: 0.24, ease }}
            lang="zh-CN"
            className="font-chinese mt-9 max-w-[620px] space-y-5 text-[13px] font-medium leading-[1.9] text-black/68 sm:mt-11 sm:text-[14px]"
          >
            <p>专注于 AIGC 视觉设计与内容创作，<br className="hidden sm:block" />探索 AI 图像、动态影像、品牌视觉<br className="hidden sm:block" />以及叙事内容之间的结合。</p>
            <p>从视觉概念到角色、场景、分镜与成片，<br className="hidden sm:block" />尝试建立完整的 AI 视觉生产流程。</p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, delay: 0.34 }}
            className="font-display mt-10 max-w-[470px] text-[clamp(1.65rem,2.5vw,2.75rem)] italic leading-[1.05] tracking-[-.025em] text-black/88 sm:mt-12"
          >
            Creating visual worlds through AI,<br />design and moving images.
          </motion.blockquote>

          <div className="mt-12 border-t border-black/12 pt-7 sm:mt-14 sm:pt-8">
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.22em] text-[#777777]">Focus</p>
            <div className="flex flex-wrap gap-x-2 gap-y-2.5">
              {focusItems.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.65, delay: index * 0.055, ease }}
                  className="rounded-full border border-black/15 px-3.5 py-2 text-[9px] font-medium uppercase tracking-[.11em] text-black/70"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.dl
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.85, delay: 0.15, ease }}
            className="mt-10 grid grid-cols-2 gap-6 border-t border-black/12 pt-7 sm:mt-12 sm:pt-8"
          >
            <div><dt className="text-[8px] font-semibold uppercase tracking-[.2em] text-[#777777]">Experience</dt><dd className="mt-2 text-[10px] font-medium uppercase tracking-[.12em] text-black/80">2024 — Present</dd></div>
            <div><dt className="text-[8px] font-semibold uppercase tracking-[.2em] text-[#777777]">Education</dt><dd className="mt-2 text-[10px] font-medium uppercase tracking-[.12em] text-black/80">E-Commerce / Bachelor</dd></div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
