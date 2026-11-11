import { useEffect, useState } from 'react';
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
        <h2 className="text-2xl sm:text-[28px] font-semibold">Continue Exploring</h2>
        <p className="text-sm text-neutral-400 mt-1">Tap a poster — details open like a title page. No resume, promise.</p>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-6 grid grid-cols-2 xl:grid-cols-4 gap-4">
          {PROJECTS.map((proj, i) => (
            <button key={proj.id} onClick={() => setSel(i)} className={`poster relative text-left aspect-[16/10] xl:aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br ${ART[i % 4]} p-5 flex flex-col justify-end w-full`}>
              <span className="absolute top-4 left-5 font-mono-d text-[10px] uppercase tracking-[.25em] text-white/70">N Originals</span>
              <span className="absolute top-3.5 right-5 font-serif-d italic text-2xl text-white/60">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-xl font-bold leading-tight drop-shadow">{proj.title}</h3>
              <p className="text-[13px] text-white/85 mt-1">{proj.subtitle}</p>
              <p className="font-mono-d text-[10px] uppercase tracking-widest text-white/70 mt-2.5">{proj.statusText ?? proj.category}</p>
            </button>
          ))}
        </div>
      </Reveal>

      {p && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6">
          <div className="fade-in absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setSel(null)} />
          <div className="modal-in relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-[#0b1128] border rule">
            <div className={`relative bg-gradient-to-br ${ART[sel! % 4]} px-7 pt-10 pb-8`}>
              <button onClick={() => setSel(null)} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/55 text-white text-lg leading-none hover:bg-black/80 transition-colors">×</button>
              <p className="font-mono-d text-[10px] uppercase tracking-[.25em] text-white/75">N Originals · {p.year}</p>
              <h3 className="mt-2.5 text-3xl sm:text-4xl font-bold leading-tight">{p.title}</h3>
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
          </div>
        </div>
      )}
    </section>
  );
};
