import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { PORTRAIT } from '../assets/portrait';

export const SeriesModal = ({ open, onPlay, onClose }: { open: boolean; onPlay: () => void; onClose: () => void }) => (
  <AnimatePresence>
    {open && (
      <motion.div className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ type: 'spring', stiffness: 210, damping: 24 }}
          className="relative mx-auto my-[4dvh] w-[min(680px,94vw)] bg-[#0a0f26] border rule rounded-2xl overflow-hidden shadow-2xl"
          role="dialog" aria-modal="true" aria-label="Nikhil — An AI Developer Series"
        >
          <div className="relative h-60 sm:h-72">
            <img src={PORTRAIT} alt="Nikhil Chowdhary Ghanta" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f26] via-[#0a0f26]/25 to-transparent" />
            <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/85 transition-colors"><X className="w-5 h-5" /></button>
            <div className="absolute bottom-4 left-6 right-6">
              <p className="font-mono-d text-[10px] uppercase tracking-[.35em] text-[#7dd3fc] font-semibold">An AI Developer Series</p>
              <h2 className="font-display mt-1.5 text-4xl sm:text-5xl font-extrabold uppercase tracking-tight">Nikhil</h2>
            </div>
            <button onClick={onPlay} aria-label="Play" className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/95 text-black flex items-center justify-center text-2xl shadow-[0_12px_40px_rgba(0,0,0,.5)] hover:scale-110 transition-transform">▶</button>
          </div>
          <div className="px-6 py-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-neutral-300">
              <span className="text-emerald-400 font-semibold">New Season</span>
              <span>2026</span><span className="text-neutral-600">•</span>
              <span className="border border-white/40 rounded px-1.5 py-0.5 font-semibold text-white text-xs">AI / ML</span>
              <span>B.Tech, Class of 2027</span><span className="text-neutral-600">•</span>
              <span>{PROJECTS.length} Originals</span><span className="text-neutral-600">•</span>
              <span>Hyderabad</span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-200">
              He doesn&rsquo;t just study AI — he ships it. A student platform people use every day, a fraud detector that lives in your browser, and a website a real business runs on. {PERSONAL_INFO.status}.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Starring Nikhil Chowdhary Ghanta — software engineer, AI/ML builder and Tech Lead Intern at VISWAM.AI, where he leads a team of 20+ students.
            </p>
            <div className="mt-6 flex flex-wrap gap-3.5">
              <button onClick={onPlay} className="inline-flex items-center gap-2.5 bg-white text-black font-semibold px-7 py-3 rounded-md hover:bg-neutral-200 transition-colors">▶ Play</button>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 bg-white/12 font-semibold px-6 py-3 rounded-md hover:bg-white/22 transition-colors">GitHub ↗</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
