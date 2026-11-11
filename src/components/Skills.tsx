import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills = () => (
  <section id="skills" className="pt-20 pb-4">
    <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-8">Skills</h2>
    <div className="grid md:grid-cols-2 gap-px bg-[#262219] border rule">
      {SKILL_CATEGORIES.map((c, i) => (
        <div key={c.category} className="bg-[#0c0b09] p-6 sm:p-8">
          <div className="flex items-baseline justify-between">
            <h3 className="font-mono-d text-xs uppercase tracking-widest gold">{c.category}</h3>
            <span className="font-mono-d text-[11px] text-neutral-600">0{i + 1}</span>
          </div>
          <p className="mt-4 text-[16px] leading-relaxed text-neutral-200">{c.skills.join(', ')}</p>
        </div>
      ))}
    </div>
  </section>
);
