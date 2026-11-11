import { PROJECTS } from '../data/portfolioData';
import { Reveal } from './Reveal';

const ART = [
  'from-[#101d42] to-[#2563eb]',
  'from-[#3b0764] to-[#7c3aed]',
  'from-[#082f2e] to-[#0d9488]',
  'from-[#431407] to-[#ea580c]',
];

export const Projects = () => (
  <section id="projects" className="mx-auto max-w-7xl px-5 sm:px-10 pt-16">
    <Reveal>
      <h2 className="text-2xl sm:text-[28px] font-semibold">Continue Exploring</h2>
      <p className="text-sm text-neutral-400 mt-1">The Originals — every one built end to end, most of them live.</p>
    </Reveal>
    <Reveal delay={100}>
      <div className="mt-6 flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5 sm:mx-0 sm:px-0">
        {PROJECTS.map((p, i) => (
          <a key={p.id} href={`#original-${p.id}`} className={`poster relative shrink-0 w-[270px] sm:w-[320px] aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br ${ART[i % 4]} p-5 flex flex-col justify-end`}>
            <span className="absolute top-4 left-5 font-mono-d text-[10px] uppercase tracking-[.25em] text-white/70">N Originals</span>
            <span className="absolute top-4 right-5 font-serif-d italic text-2xl text-white/60">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="text-xl font-bold leading-tight drop-shadow">{p.title}</h3>
            <p className="text-[13px] text-white/85 mt-1 line-clamp-2">{p.subtitle}</p>
            <p className="font-mono-d text-[10px] uppercase tracking-widest text-white/70 mt-2.5">{p.category} · {p.year}</p>
          </a>
        ))}
      </div>
    </Reveal>

    <div className="pt-10 space-y-6">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.id}>
          <article id={`original-${p.id}`} className="rounded-2xl bg-[#0b1128] border rule p-6 sm:p-10 scroll-mt-24">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{p.title}</h3>
              <span className="font-mono-d text-[11px] uppercase tracking-widest text-neutral-400">{p.category} · {p.year}{p.statusText ? ` · ${p.statusText}` : ''}</span>
            </div>
            <p className="mt-1.5 text-neutral-400">{p.subtitle}</p>
            <p className="mt-4 text-[16px] leading-relaxed text-neutral-200 max-w-3xl">{p.shortDescription}</p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[14.5px] text-neutral-300 max-w-4xl">
              {p.highlights.map(h => <li key={h} className="flex gap-2.5"><span className="accent">—</span><span>{h}</span></li>)}
            </ul>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t rule pt-5">
              <p className="font-mono-d text-[11px] uppercase tracking-wider text-neutral-500">{p.technologies.join('  ·  ')}</p>
              <div className="flex gap-4 text-sm font-semibold">
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="bg-white text-black px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors">▶ Live Site</a>}
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="bg-white/12 px-4 py-2 rounded-md hover:bg-white/22 transition-colors">GitHub ↗</a>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
);
