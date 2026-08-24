'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links=['Work','About','Experiments','Contact'];

export default function MobileMenu(){
  const[open,setOpen]=useState(false);
  useEffect(()=>{const close=(event:KeyboardEvent)=>event.key==='Escape'&&setOpen(false);window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);
  const scrollToAbout=()=>{setOpen(false);window.history.replaceState(null,'','#about');window.setTimeout(()=>{const about=document.getElementById('about');if(about)window.scrollTo({top:about.offsetTop,behavior:'smooth'})},520)};
  return <div className="md:hidden">
    <button type="button" onClick={()=>setOpen(v=>!v)} className="liquid-glass relative z-50 grid size-11 place-items-center rounded-full" aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>
      <AnimatePresence mode="wait" initial={false}>{open?<motion.span key="x" initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:.3}}><X size={18} strokeWidth={1.5}/></motion.span>:<motion.span key="menu" initial={{rotate:90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:.3}}><Menu size={18} strokeWidth={1.5}/></motion.span>}</AnimatePresence>
    </button>
    <AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.45}} className="fixed inset-0 z-40 flex items-center bg-black/70 px-7 backdrop-blur-2xl">
      <nav className="flex flex-col items-start gap-2" aria-label="Mobile navigation">{links.map((link,index)=>link==='About'?<motion.button key={link} type="button" role="link" onClick={scrollToAbout} initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.12+index*.08,duration:.7,ease:[.22,1,.36,1]}} className="cursor-pointer border-0 bg-transparent p-0 text-left font-display text-[clamp(3.5rem,17vw,5.5rem)] leading-[.95] tracking-[-.05em] text-white">{link}</motion.button>:<motion.a key={link} href={`#${link.toLowerCase()}`} onClick={()=>setOpen(false)} initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.12+index*.08,duration:.7,ease:[.22,1,.36,1]}} className="font-display text-[clamp(3.5rem,17vw,5.5rem)] leading-[.95] tracking-[-.05em]">{link}</motion.a>)}</nav>
      <p className="absolute bottom-8 left-7 text-[9px] uppercase tracking-[.22em] text-white/45">Independent visual designer · 2026</p>
    </motion.div>}</AnimatePresence>
  </div>;
}
