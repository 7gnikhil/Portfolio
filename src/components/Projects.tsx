import { PROJECTS } from '../data/portfolioData';
import { Reveal } from './Reveal';

const PANELS = ['bg-[#1c1913] text-[#faf6ef]', 'bg-[#fffdf8] text-[#1c1913]', 'bg-[#c2410c] text-[#fff7ed]', 'bg-[#efe7d3] text-[#1c1913]'];
const SUB = ['text-neutral-400', 'text-neutral-500', 'text-orange-100', 'text-neutral-500'];

export const Projects = () => (
  <section id="projects" className="pt-20">
    <Reveal>
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Selected <span className="font-serif-d italic font-normal accent">work</span></h2>
        <span className="font-mono-d text-xs text-neutral-500">Scroll — the panels stack</span>
      </div>
    </Reveal>
    <div className="pb-10">
      {PROJECTS.map((p, i) => (
        <article key={p.id} className={`stack-card ${PANELS[i % 4]} rounded-2xl px-6 py-9 sm:px-10 sm:py-12 mb-8 border border-black/10`}>
          <div className="flex items-start justify-between gap-6">
            <span className="font-serif-d italic text-5xl sm:text-6xl opacity-90">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-mono-d text-[11px] uppercase tracking-widest opacity-70 text-right">{p.category}<br />{p.year}</span>
          </div>
          <h3 className="mt-5 text-3xl sm:text-[40px] font-semibold tracking-tight leading-tight">{p.title}</h3>
          <p className={`mt-1.5 text-[16px] ${SUB[i % 4]}`}>{p.subtitle}{p.statusText ? <> — <span className="font-medium">{p.statusText}</span></> : null}</p>
          <p className="mt-5 text-[16.5px] leading-relaxed max-w-3xl opacity-92">{p.shortDescription}</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[14.5px] max-w-4xl">
            {p.highlights.map(h => <li key={h} className="flex gap-2.5"><span>—</span><span className="opacity-85">{h}</span></li>)}
          </ul>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-current/15 pt-5">
            <p className="font-mono-d text-[11px] uppercase tracking-wider opacity-70">{p.technologies.join('  ·  ')}</p>
            <div className="flex gap-6 text-sm font-semibold">
              {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Live site ↗</a>}
              <a href={p.githubUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">GitHub ↗</a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
