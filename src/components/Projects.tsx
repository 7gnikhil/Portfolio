import { PROJECTS } from '../data/portfolioData';

export const Projects = () => (
  <section id="projects" className="py-14 border-t rule">
    <div className="flex items-baseline justify-between mb-2">
      <h2 className="font-serif-d text-3xl">Work</h2>
      <span className="font-mono-d text-xs text-neutral-500">{PROJECTS.length} projects</span>
    </div>
    <div>
      {PROJECTS.map((p, i) => (
        <article key={p.id} className="py-8 border-b rule last:border-b-0">
          <div className="flex items-baseline gap-4">
            <span className="font-mono-d text-xs text-neutral-400">{String(i + 1).padStart(2, '0')}</span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <span className="text-sm text-neutral-500">{p.subtitle}</span>
              </div>
              <p className="font-mono-d text-[11px] uppercase text-neutral-500 mt-1.5">{p.category} · {p.year}{p.statusText ? ` · ${p.statusText}` : ''}</p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-neutral-800">{p.shortDescription}</p>
              <ul className="mt-3 space-y-1.5 text-[15px] text-neutral-700">
                {p.highlights.map(h => <li key={h} className="flex gap-2.5"><span className="text-neutral-400">—</span><span>{h}</span></li>)}
              </ul>
              <p className="mt-4 text-sm text-neutral-500">{p.technologies.join(' · ')}</p>
              <div className="mt-4 flex gap-5 text-sm font-medium">
                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="link-u">Live site ↗</a>}
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="link-u">GitHub ↗</a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
