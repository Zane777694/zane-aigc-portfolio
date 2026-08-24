'use client';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const links = ['Work', 'About', 'Experiments', 'Contact'];

export default function Navbar() {
  return <motion.header initial={{opacity:0,y:-18}} animate={{opacity:1,y:0}} transition={{duration:1.15,delay:.15,ease:[.22,1,.36,1]}} className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 text-[#f1f0eb] sm:px-8 sm:py-7 lg:px-12">
    <a href="#" className="font-display text-[2rem] italic leading-none tracking-[-.04em]" aria-label="Zane home">Zane</a>
    <div className="hidden items-center gap-3 md:flex">
      <nav className="liquid-glass flex items-center rounded-full p-2" aria-label="Primary navigation">
        {links.map(link=><a key={link} href={`#${link.toLowerCase()}`} className="rounded-full px-4 py-2 text-[11px] font-medium tracking-[.04em] text-white/70 transition-colors duration-300 hover:bg-white/[.06] hover:text-white">{link}</a>)}
      </nav>
      <a href="#contact" className="rounded-full border border-white/30 bg-[#f1f0eb] px-5 py-[13px] text-[11px] font-semibold tracking-[.04em] text-[#08090b] transition-colors hover:bg-white">Let&apos;s Talk</a>
    </div>
    <MobileMenu />
  </motion.header>;
}
