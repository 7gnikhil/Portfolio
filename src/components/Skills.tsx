import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Skills = () => (
  <section id="skills" className="pt-20">
    <Reveal><h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">What I <span className="font-serif-d italic font-normal accent">work with</span></h2></Reveal>
    <div>
      {SKILL_CATEGORIES.map((c, i) => (
        <Reveal key={c.category} delay={i * 80}>
          <div className="grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-6 py-5 border-b rule">
            <h3 className="font-mono-d text-xs uppercase tracking-widest accent pt-1.5">{c.category}</h3>
            <div>
              <p className="text-[16px] leading-relaxed">{c.skills.join(', ')}</p>
              <div className="mt-3 h-[3px] bg-[#ece3cd] overflow-hidden"><div className="bar-anim h-full bg-[#c2410c]" style={{ width: `${92 - i * 9}%` }} /></div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
