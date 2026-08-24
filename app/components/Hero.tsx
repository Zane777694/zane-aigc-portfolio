'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Navbar from './Navbar';
import VideoBackground,{type VideoItem} from './VideoBackground';
import VideoSwitcher from './VideoSwitcher';

const videos:VideoItem[]=[
  {label:'Visual',src:'/videos/visual.mp4',tone:'radial-gradient(circle at 68% 28%,#51545a 0%,#1b1d20 35%,#08090b 78%)'},
  {label:'Motion',src:'/videos/motion.mp4',tone:'radial-gradient(circle at 30% 48%,#55524e 0%,#20201f 37%,#08090b 80%)'},
  {label:'Digital',src:'/videos/digital.mp4',tone:'radial-gradient(circle at 62% 58%,#3e484f 0%,#171b1e 38%,#08090b 80%)'},
  {label:'AI',src:'/videos/ai.mp4',tone:'radial-gradient(ellipse at 72% 38%,#59636c 0%,#262c31 26%,#101316 54%,#08090b 82%)'},
];
const reveal=(delay:number)=>({initial:{opacity:0,y:28},animate:{opacity:1,y:0},transition:{duration:1.15,delay,ease:[.22,1,.36,1] as [number,number,number,number]}});

export default function Hero(){
  const[activeIndex,setActiveIndex]=useState(3);const transitioning=useRef(false);
  const pointerX=useMotionValue(0),pointerY=useMotionValue(0);const smoothX=useSpring(pointerX,{stiffness:35,damping:24}),smoothY=useSpring(pointerY,{stiffness:35,damping:24});
  const contentX=useTransform(smoothX,v=>v*-.45),contentY=useTransform(smoothY,v=>v*-.45);
  const selectVideo=(index:number)=>{if(transitioning.current||index===activeIndex)return;transitioning.current=true;setActiveIndex(index);window.setTimeout(()=>{transitioning.current=false},1000)};
  const move=(event:React.PointerEvent<HTMLElement>)=>{if(event.pointerType==='touch')return;pointerX.set((event.clientX/window.innerWidth-.5)*8);pointerY.set((event.clientY/window.innerHeight-.5)*8)};
  return <section className="relative h-screen w-full overflow-hidden bg-black text-[#f1f0eb]" onPointerMove={move} onPointerLeave={()=>{pointerX.set(0);pointerY.set(0)}}>
    <VideoBackground videos={videos} activeIndex={activeIndex} x={smoothX} y={smoothY}/><Navbar/>
    <motion.div className="absolute inset-x-0 top-[25.5%] z-20 px-5 sm:top-[27%] sm:px-8 lg:top-[24%] lg:px-12" style={{x:contentX,y:contentY}}>
      <motion.p {...reveal(.42)} className="mb-4 text-[8px] font-medium uppercase tracking-[.24em] text-white/60 sm:mb-5 sm:text-[9px]">Independent Visual Designer / 2026</motion.p>
      <motion.h1 {...reveal(.56)} className="font-display text-[clamp(6.2rem,18.5vw,20rem)] leading-[.68] tracking-[-.065em]">ZANE</motion.h1>
      <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-[minmax(280px,1fr)_250px] sm:items-end lg:mt-12 lg:grid-cols-[minmax(420px,1fr)_280px_1fr]">
        <motion.h2 {...reveal(.72)} className="font-display text-[clamp(2rem,4vw,4.1rem)] leading-[.92] tracking-[-.04em]">AIGC Visual Designer<br/><span className="italic text-white/72">&amp; Creative Artist</span></motion.h2>
        <motion.div {...reveal(.88)} className="sm:pb-1 lg:col-start-2"><p className="max-w-[235px] text-[11px] leading-[1.65] text-white/58 sm:text-xs">Exploring the intersection of<br/>artificial intelligence,<br/>visual storytelling<br/>and digital culture.</p>
          <motion.div {...reveal(1.02)} className="mt-6 flex items-center gap-2 sm:mt-7"><a href="#work" className="rounded-full bg-[#f1f0eb] px-4 py-3 text-[9px] font-semibold text-[#08090b] transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-[10px]">View Selected Work</a><a href="#about" className="liquid-glass rounded-full px-4 py-3 text-[9px] font-medium text-white/80 hover:text-white sm:px-5 sm:text-[10px]">About Me</a></motion.div>
        </motion.div>
      </div>
    </motion.div>
    <div className="absolute inset-x-0 bottom-5 z-30 px-5 sm:bottom-7 sm:px-8 lg:px-12"><div className="flex items-end justify-between"><VideoSwitcher videos={videos} activeIndex={activeIndex} onSelect={selectVideo}/>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.5}} className="hidden items-center gap-3 text-[8px] uppercase tracking-[.18em] text-white/60 lg:flex">{['Visual Design','AI','Film','Digital Experiences'].map((item,index)=><span key={item} className="flex items-center gap-3">{index>0&&<i className="size-0.5 rounded-full bg-white/45"/>}{item}</span>)}</motion.div>
    </div></div>
  </section>;
}
