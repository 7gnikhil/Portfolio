import { CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Skills = () => (
  <>
    <section id="skills" className="mx-auto max-w-7xl px-5 sm:px-10 pt-20">
      <Reveal><h2 className="text-2xl sm:text-[28px] font-semibold">Skills, by Category</h2></Reveal>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {SKILL_CATEGORIES.map((c, i) => (
          <Reveal key={c.category} delay={i * 70}>
            <div className="h-full rounded-xl bg-[#0b1128] border rule p-6 hover:border-[#3fa9f5]/50 transition-colors">
              <h3 className="font-mono-d text-xs uppercase tracking-widest accent">{c.category}</h3>
              <p className="mt-3.5 text-[15.5px] leading-relaxed text-neutral-200">{c.skills.join(', ')}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
    <section id="picks" className="mx-auto max-w-7xl px-5 sm:px-10 pt-16">
      <Reveal>
        <h2 className="text-2xl sm:text-[28px] font-semibold">Top Picks for Recruiters</h2>
        <p className="text-sm text-neutral-400 mt-1">Certifications, verified.</p>
      </Reveal>
      <Reveal delay={90}>
        <div className="mt-6 flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-5 px-5 sm:mx-0 sm:px-0">
          {CERTIFICATIONS.map(c => (
            <div key={c.id} className="poster shrink-0 w-[260px] rounded-xl bg-gradient-to-br from-[#131c3f] to-[#0a0f26] border rule p-5">
              <p className="font-mono-d text-[10px] uppercase tracking-[.25em] text-neutral-400">{c.issuer}</p>
              <p className="mt-3 font-semibold leading-snug">{c.title}</p>
              {c.year && <p className="mt-3 text-sm text-neutral-400">{c.year}</p>}
            </div>
          ))}
          <div className="poster shrink-0 w-[260px] rounded-xl bg-gradient-to-br from-[#12283f] to-[#0a1626] border rule p-5">
            <p className="font-mono-d text-[10px] uppercase tracking-[.25em] text-neutral-400">Experience</p>
            <p className="mt-3 font-semibold leading-snug">Tech Lead Intern — VISWAM.AI, leading 20+ students</p>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);
