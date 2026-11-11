import { motion } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { PORTRAIT } from '../assets/portrait';
import { openPanel, openSeries } from '../lib/ui';

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } } };

export const Hero = () => (
  <section id="top" className="hero-glow relative shrink-0">
    <div className="mx-auto max-w-6xl px-5 sm:px-10 pt-[84px] sm:pt-[92px] pb-3 grid grid-cols-[1fr_auto] gap-4 sm:gap-8 items-center">
      <motion.div variants={parent} initial="hidden" animate="show" className="min-w-0">
        <motion.p variants={item} className="font-mono-d text-[10px] sm:text-xs uppercase tracking-[.3em] text-neutral-300">
          <span className="accent font-bold">N</span> Series <span className="text-neutral-500 normal-case tracking-normal">— an original portfolio</span>
        </motion.p>
        <motion.h1 variants={item} className="font-display mt-2 font-extrabold uppercase leading-[.95] tracking-tight text-[13.5vw] sm:text-[64px] lg:text-[76px]">
          Nik<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f80e0] to-[#7dd3fc]">h</span>il
        </motion.h1>
        <motion.p variants={item} className="mt-1.5 font-mono-d text-[11px] sm:text-sm uppercase tracking-[.45em] text-[#7dd3fc] font-semibold">An AI Developer Series</motion.p>
        <motion.div variants={item} className="mt-3 hidden sm:flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-neutral-300">
          <span className="border border-white/40 rounded px-1.5 py-0.5 font-semibold text-white">AI / ML</span>
          <span>B.Tech, Class of 2027</span><span className="text-neutral-600">•</span>
          <span>{PROJECTS.length} Originals</span><span className="text-neutral-600">•</span>
          <span>2 Live Products</span>
        </motion.div>
        <motion.p variants={item} className="mt-3 hidden md:block text-[14.5px] leading-relaxed text-neutral-300 max-w-xl">
          He doesn&rsquo;t just study AI — he ships it. A student platform people use every day, a fraud detector that lives in your browser, and a website a real business runs on.
        </motion.p>
        <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-3">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={openSeries} className="inline-flex items-center justify-center gap-2.5 bg-white text-black font-semibold px-5 py-2.5 rounded-md text-sm sm:text-base">▶ Play Intro</motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => openPanel('about')} className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur font-semibold px-5 py-2.5 rounded-md text-sm sm:text-base">↓ About</motion.button>
          <motion.p variants={item} className="hidden lg:flex font-mono-d text-[11px] text-neutral-400 items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot inline-block" /> {PERSONAL_INFO.status}
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative w-[104px] sm:w-[168px] lg:w-[196px]">
        <div className="relative rounded-xl overflow-hidden border border-white/15 aspect-[4/5] bg-[#0a0f26] shadow-[0_18px_44px_rgba(0,0,0,.5)]">
          <img src={PORTRAIT} alt="Nikhil Chowdhary Ghanta" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#040714]/85 to-transparent" />
          <span className="absolute bottom-2 left-0 right-0 text-center font-mono-d text-[8px] sm:text-[9px] uppercase tracking-[.25em] text-white/85 px-1">Nikhil Chowdhary Ghanta</span>
        </div>
        <div className="float-y absolute -left-3 sm:-left-5 top-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg px-2.5 py-1.5 text-[10px] sm:text-xs">
          <p className="font-bold">OneUco</p><p className="text-neutral-400">Live — built solo</p>
        </div>
        <div className="float-y absolute -right-2 sm:-right-4 bottom-8 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg px-2.5 py-1.5 text-[10px] sm:text-xs" style={{ animationDelay: '1.2s' }}>
          <p className="font-bold">Hyderabad</p><p className="text-neutral-400">Class of 2027</p>
        </div>
      </motion.div>
    </div>
  </section>
);
