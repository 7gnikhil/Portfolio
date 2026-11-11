import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { openPanel, openSeries } from '../lib/ui';
import { PORTRAIT } from '../assets/portrait';

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } } };

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.25]);
  return (
    <section id="top" ref={ref} className="hero-glow relative overflow-hidden">
      <motion.div style={{ opacity: textOpacity }} className="mx-auto max-w-7xl px-5 sm:px-10 pt-[84px] sm:pt-24 pb-4 grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-12 items-center">
        <motion.div variants={parent} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono-d text-xs uppercase tracking-[.3em] text-neutral-300">
            <span className="accent font-bold">N</span> Series <span className="text-neutral-500 normal-case tracking-normal">— an original portfolio</span>
          </motion.p>
          <motion.h1 variants={item} className="font-display mt-3 font-extrabold uppercase leading-[.95] tracking-tight text-[15vw] sm:text-[76px] lg:text-[96px]">
            Nik<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f80e0] to-[#7dd3fc]">h</span>il
          </motion.h1>
          <motion.p variants={item} className="mt-2 font-mono-d text-sm sm:text-base uppercase tracking-[.55em] text-[#7dd3fc] font-semibold">An AI Developer Series</motion.p>
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-neutral-300">
            <span className="border border-white/40 rounded px-1.5 py-0.5 font-semibold text-white">AI / ML</span>
            <span>B.Tech, Class of 2027</span><span className="text-neutral-600">•</span>
            <span>{PROJECTS.length} Originals</span><span className="text-neutral-600">•</span>
            <span>2 Live Products</span>
          </motion.div>
          <motion.p variants={item} className="mt-4 font-semibold tracking-wide text-[15px]">SOFTWARE ENGINEER &nbsp;•&nbsp; AI / ML &nbsp;•&nbsp; PYTHON &nbsp;•&nbsp; FULL-STACK</motion.p>
          <motion.p variants={item} className="mt-4 hidden md:block text-[16px] leading-relaxed text-neutral-300 max-w-xl">
            He doesn&rsquo;t just study AI — he ships it. A student platform people use every day, a fraud detector that lives in your browser, and a website a real business runs on.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={openSeries} className="inline-flex items-center justify-center gap-2.5 bg-white text-black font-semibold px-6 py-3 rounded-md w-full sm:w-auto">▶ Play Intro</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => openPanel('about')} className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur font-semibold px-6 py-3 rounded-md">↓ About</motion.button>
            <motion.button whileHover={{ scale: 1.1, rotate: 6 }} onClick={() => openPanel('contact')} aria-label="Contact" className="w-11 h-11 rounded-full border-2 border-white/50 flex items-center justify-center font-serif-d italic text-lg">i</motion.button>
          </motion.div>
          <motion.p variants={item} className="mt-6 font-mono-d text-xs text-neutral-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot inline-block" /> {PERSONAL_INFO.status}
          </motion.p>
        </motion.div>
        <motion.div style={{ y: portraitY, scale: portraitScale }} initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[320px] sm:max-w-[300px] hidden md:block">
          <div className="relative rounded-2xl overflow-hidden border border-white/12 aspect-[4/5] bg-[#0a0f26]">
            <img src={PORTRAIT} alt="Nikhil Chowdhary Ghanta" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#040714]/85 to-transparent" />
            <span className="absolute bottom-4 left-0 right-0 text-center font-mono-d text-[10px] uppercase tracking-[.3em] text-white/85">Nikhil Chowdhary Ghanta</span>
          </div>
          <div className="float-y absolute left-2 sm:-left-4 top-8 sm:top-10 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg px-3.5 py-2.5 text-xs">
            <p className="font-bold">OneUco</p><p className="text-neutral-400">Live — built solo</p>
          </div>
          <div className="float-y absolute right-2 sm:-right-3 bottom-14 sm:bottom-16 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg px-3.5 py-2.5 text-xs" style={{ animationDelay: '1.2s' }}>
            <p className="font-bold">Hyderabad</p><p className="text-neutral-400">Class of 2027</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
