'use client';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const links = ['Work', 'About', 'Experiments', 'Contact'];

export default function Navbar() {
  const scrollToAbout = () => {
    const about = document.getElementById('about');
    if (!about) return;
    window.history.replaceState(null, '', '#about');
    window.scrollTo({ top: about.offsetTop, behavior: 'smooth' });
  };

  return <motion.header initial={{opacity:0,y:-18}} animate={{opacity:1,y:0}} transition={{duration:1.15,delay:.15,ease:[.22,1,.36,1]}} className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 text-[#f1f0eb] sm:px-8 sm:py-7 lg:px-12">
    <a href="#" className="font-display text-[2rem] italic leading-none tracking-[-.04em]" aria-label="Zane home">Zane</a>
    <div className="hidden items-center gap-2.5 md:flex">
      <nav className="liquid-glass flex items-center rounded-full p-1.5 shadow-[0_10px_38px_rgba(0,0,0,.18)]" aria-label="Primary navigation">
        {links.map(link=>link==='About'?<button key={link} type="button" role="link" onClick={scrollToAbout} className="cursor-pointer rounded-full border-0 bg-transparent px-3.5 py-2 text-[10px] font-medium tracking-[.045em] text-white/78 transition-colors duration-300 hover:bg-white/[.065] hover:text-white">{link}</button>:<a key={link} href={`#${link.toLowerCase()}`} className="rounded-full px-3.5 py-2 text-[10px] font-medium tracking-[.045em] text-white/78 transition-colors duration-300 hover:bg-white/[.065] hover:text-white">{link}</a>)}
      </nav>
      <a href="#contact" className="rounded-full border border-white/20 bg-[#f1f0eb] px-4.5 py-[12px] text-[10px] font-semibold tracking-[.05em] text-[#08090b] shadow-[0_10px_38px_rgba(0,0,0,.16)] transition-all duration-300 hover:-translate-y-px hover:bg-white">Let&apos;s Talk</a>
    </div>
    <MobileMenu />
  </motion.header>;
}
