import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills = () => (
  <section id="skills" className="py-14 border-t rule">
    <h2 className="font-serif-d text-3xl mb-6">Skills</h2>
    <div>
      {SKILL_CATEGORIES.map(c => (
        <div key={c.category} className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-4 border-b rule last:border-b-0">
          <h3 className="font-mono-d text-xs uppercase pt-1 text-neutral-500">{c.category}</h3>
          <p className="text-[15.5px] leading-relaxed">{c.skills.join(', ')}</p>
        </div>
      ))}
    </div>
  </section>
);
