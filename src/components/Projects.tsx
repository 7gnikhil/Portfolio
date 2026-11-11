import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, type Project } from '../data/portfolioData';
import { Reveal } from './Reveal';

const ART = [
  'from-[#101d42] to-[#2563eb]',
  'from-[#3b0764] to-[#7c3aed]',
  'from-[#082f2e] to-[#0d9488]',
  'from-[#431407] to-[#ea580c]',
];

export const Projects = () => {
  const [sel, setSel] = useState<number | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSel(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const p: Project | null = sel !== null ? PROJECTS[sel] : null;
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 sm:px-10 pt-16 pb-4">
      <Reveal>
        <h2 className="font-display text-2xl sm:text-[28px] font-bold">Continue Exploring</h2>
        <p className="text-sm text-neutral-400 mt-1">Tap a poster — details open like a title page. No resume, promise.</p>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-6 flex xl:grid xl:grid-cols-4 gap-4 overflow-x-auto xl:overflow-visible no-scrollbar snap-x snap-mandatory xl:snap-none -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 xl:pb-0">
          {PROJECTS.map((proj, i) => (
            <motion.button key={proj.id} onClick={() => setSel(i)} whileHover={{ scale: 1.07, y: -6 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 320, damping: 22 }} className={`poster relative text-left aspect-[16/10] xl:aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br ${ART[i % 4]} p-5 flex flex-col justify-end shrink-0 snap-start w-[80vw] min-[520px]:w-[320px] xl:w-auto`}>
              <span className="poster-shade absolute inset-0 pointer-events-none" />
              <span className="absolute top-4 left-5 font-mono-d text-[10px] uppercase tracking-[.25em] text-white/70">N Originals</span>
              <span className="absolute top-3.5 right-5 font-serif-d italic text-2xl text-white/60">{String(i + 1).padStart(2, '0')}</span>
              <span className="poster-title relative">
                <h3 className="font-display text-xl font-bold leading-tight drop-shadow">{proj.title}</h3>
                <p className="text-[13px] text-white/85 mt-1">{proj.subtitle}</p>
                <p className="font-mono-d text-[10px] uppercase tracking-widest text-white/70 mt-2.5">{proj.statusText ?? proj.category}</p>
              </span>
              <span className="poster-actions relative mt-4 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">▶</span>
                <span className="text-xs font-semibold bg-black/45 border border-white/35 rounded-full px-3 py-1.5">Details ⓘ</span>
                {proj.liveUrl && <span className="text-xs font-semibold bg-black/45 border border-white/35 rounded-full px-3 py-1.5">Live ↗</span>}
              </span>
            </motion.button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
      {p && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setSel(null)} />
          <motion.div initial={{ opacity: 0, y: 46, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.98 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }} className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#0b1128] border rule">
            <div className={`relative bg-gradient-to-br ${ART[sel! % 4]} px-7 pt-10 pb-8`}>
              <button onClick={() => setSel(null)} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/55 text-white text-lg leading-none hover:bg-black/80 transition-colors">×</button>
              <p className="font-mono-d text-[10px] uppercase tracking-[.25em] text-white/75">N Originals · {p.year}</p>
              <h3 className="font-display mt-2.5 text-3xl sm:text-4xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-1.5 text-white/85">{p.subtitle}{p.statusText ? ` — ${p.statusText}` : ''}</p>
              <div className="mt-6 flex flex-wrap gap-3.5">
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="bg-white text-black font-semibold px-5 py-2.5 rounded-md hover:bg-neutral-200 transition-colors">▶ Live Site</a>}
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="bg-black/35 font-semibold px-5 py-2.5 rounded-md hover:bg-black/55 transition-colors">GitHub ↗</a>
              </div>
            </div>
            <div className="px-7 py-7">
              <p className="text-[16px] leading-relaxed text-neutral-200">{p.shortDescription}</p>
              <ul className="mt-5 space-y-2 text-[14.5px] text-neutral-300">
                {p.highlights.map(h => <li key={h} className="flex gap-2.5"><span className="accent">—</span><span>{h}</span></li>)}
              </ul>
              <p className="mt-6 font-mono-d text-[11px] uppercase tracking-wider text-neutral-500">{p.technologies.join('  ·  ')}</p>
            </div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
    </section>
  );
};
