'use client';
import { motion, type MotionValue } from 'framer-motion';

export type VideoItem={label:string;src:string;tone:string};

export default function VideoBackground({videos,activeIndex,x,y}:{videos:VideoItem[];activeIndex:number;x:MotionValue<number>;y:MotionValue<number>}){
  return <motion.div className="absolute -inset-2" style={{x,y}} aria-hidden="true">
    {videos.map((video,index)=><div key={video.label} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{opacity:activeIndex===index?1:0,background:video.tone}}>
      <video className="absolute inset-0 size-full object-cover" src={video.src} autoPlay muted loop playsInline preload={index===activeIndex?'auto':'metadata'}/>
    </div>)}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_34%,transparent_0%,rgba(3,4,5,.08)_34%,rgba(3,4,5,.67)_100%),linear-gradient(180deg,rgba(4,5,6,.42)_0%,rgba(4,5,6,.04)_38%,rgba(4,5,6,.58)_100%)]"/>
    <div className="film-grain absolute inset-0 opacity-[.055]"/>
  </motion.div>;
}
