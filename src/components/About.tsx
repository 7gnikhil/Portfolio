import { CERTIFICATIONS, EDUCATION, EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const About = () => (
  <section id="about" className="pt-20">
    <div className="grid md:grid-cols-[1fr_1.6fr] gap-10">
      <Reveal><h2 className="text-4xl sm:text-5xl font-bold tracking-tight">About</h2></Reveal>
      <div>
        <Reveal>
          <p className="text-lg leading-relaxed text-neutral-700">
            Final-year {PERSONAL_INFO.degree} student at {PERSONAL_INFO.university} (CGPA {PERSONAL_INFO.cgpa}).
            I learn by shipping — a live community platform, a released browser extension, and a production site for a real client came out of that, not coursework alone.
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h3 className="font-mono-d text-xs uppercase tracking-widest accent mt-12 mb-4">Experience</h3>
          <p className="text-[16px] leading-relaxed"><span className="font-semibold">{EXPERIENCE.role}</span> — {EXPERIENCE.detail}</p>
        </Reveal>
        <Reveal delay={60}>
          <h3 className="font-mono-d text-xs uppercase tracking-widest accent mt-12 mb-4">Education & training</h3>
          {EDUCATION.map(e => (
            <div key={e.place} className="flex flex-wrap items-baseline justify-between gap-x-6 border-b rule py-3.5">
              <p className="text-[15.5px]"><span className="font-semibold">{e.place}</span> <span className="text-neutral-500">— {e.what}</span></p>
              <span className="font-mono-d text-xs text-neutral-500">{e.when}</span>
            </div>
          ))}
        </Reveal>
        <Reveal delay={60}>
          <h3 className="font-mono-d text-xs uppercase tracking-widest accent mt-12 mb-4">Certifications</h3>
          <ul className="space-y-2.5 text-[15.5px] text-neutral-700">
            {CERTIFICATIONS.map(c => (
              <li key={c.id} className="flex gap-3"><span className="accent">—</span><span>{c.title} <span className="text-neutral-500">({c.issuer}{c.year ? `, ${c.year}` : ''})</span></span></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);
