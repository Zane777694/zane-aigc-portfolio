'use client';
import { motion } from 'framer-motion';
import type { VideoItem } from './VideoBackground';

export default function VideoSwitcher({videos,activeIndex,onSelect}:{videos:VideoItem[];activeIndex:number;onSelect:(index:number)=>void}){
  return <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.3,ease:[.22,1,.36,1]}} className="grid w-full grid-cols-4 gap-3 sm:w-auto sm:gap-8 lg:gap-12" aria-label="Background film selector">
    {videos.map((video,index)=>{const active=activeIndex===index;return <button type="button" key={video.label} onClick={()=>onSelect(index)} className={`group relative flex min-w-0 items-center gap-2 pb-3 text-left text-[9px] uppercase tracking-[.16em] transition-opacity duration-500 sm:text-[10px] ${active?'opacity-100':'opacity-45 hover:opacity-75'}`} aria-pressed={active}>
      <span className={active?'text-[#b9c7d3]':'text-white/60'}>0{index+1}</span><span className="truncate text-[#f1f0eb]">{video.label}</span>
      <span className="absolute inset-x-0 bottom-0 h-px bg-white/15">{active&&<motion.span layoutId="active-video" className="block h-px w-full origin-left bg-[#b9c7d3]" initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:1,ease:'easeInOut'}}/>}</span>
    </button>})}
  </motion.div>;
}
