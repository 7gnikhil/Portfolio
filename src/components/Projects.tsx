import { PROJECTS } from '../data/portfolioData';

export const Projects = () => (
  <section id="projects" className="pt-20 pb-4">
    <div className="flex items-end justify-between mb-4">
      <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight">Work</h2>
      <span className="font-mono-d text-xs text-neutral-500">2025 — 2026</span>
    </div>
    <div className="border-t rule">
      {PROJECTS.map((p, i) => (
        <article key={p.id} className="hover-row border-b rule py-9 sm:py-11 px-2 sm:px-4 -mx-2 sm:-mx-4">
          <div className="grid md:grid-cols-[70px_1fr] gap-4">
            <span className="font-serif-d italic text-3xl gold">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-2xl sm:text-[32px] font-semibold tracking-tight leading-tight">{p.title}</h3>
                <span className="font-mono-d text-[11px] uppercase tracking-widest text-neutral-500">{p.category} · {p.year}</span>
              </div>
              <p className="mt-1 text-neutral-400">{p.subtitle}{p.statusText ? <span className="gold"> — {p.statusText}</span> : null}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-neutral-300 max-w-3xl">{p.shortDescription}</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-[14.5px] text-neutral-400 max-w-4xl">
                {p.highlights.map(h => <li key={h} className="flex gap-2.5"><span className="gold">—</span><span>{h}</span></li>)}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono-d text-[11px] uppercase tracking-wider text-neutral-500">{p.technologies.join('  ·  ')}</p>
                <div className="flex gap-6 text-sm font-semibold">
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="gold hover:underline underline-offset-4">Live site ↗</a>}
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="hover:text-[#d4af37] transition-colors">GitHub ↗</a>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
