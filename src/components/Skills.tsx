import { SKILL_CATEGORIES } from '../data/portfolioData';

const ALL = Array.from(new Set(SKILL_CATEGORIES.flatMap(c => c.skills)));

export const Skills = () => (
  <section aria-label="Skills" className="mt-14 border-y rule py-4 overflow-hidden">
    <div className="marquee-track">
      {[0, 1].map(copy => (
        <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
          {ALL.map(s => <span key={s + copy} className="flex items-center font-mono-d text-xs uppercase tracking-widest text-neutral-400"><span className="px-5">{s}</span><span className="accent">✦</span></span>)}
        </div>
      ))}
    </div>
  </section>
);
