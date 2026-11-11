import { CERTIFICATIONS, EDUCATION, EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

export const About = () => (
  <section id="about" className="pt-20 pb-4">
    <div className="grid md:grid-cols-[1fr_1.6fr] gap-10">
      <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight">About</h2>
      <div>
        <p className="text-lg leading-relaxed text-neutral-300">
          Final-year {PERSONAL_INFO.degree} student at {PERSONAL_INFO.university} (CGPA {PERSONAL_INFO.cgpa}).
          I learn by shipping — a live community platform, a released browser extension, and a production site for a real client came out of that, not coursework alone.
        </p>
        <h3 className="font-mono-d text-xs uppercase tracking-widest gold mt-12 mb-4">Experience</h3>
        <p className="text-[16px] leading-relaxed text-neutral-200"><span className="font-semibold text-white">{EXPERIENCE.role}</span> — {EXPERIENCE.detail}</p>
        <h3 className="font-mono-d text-xs uppercase tracking-widest gold mt-12 mb-4">Education & training</h3>
        <div>
          {EDUCATION.map(e => (
            <div key={e.place} className="flex flex-wrap items-baseline justify-between gap-x-6 border-b rule py-3.5">
              <p className="text-[15.5px]"><span className="font-semibold text-white">{e.place}</span> <span className="text-neutral-400">— {e.what}</span></p>
              <span className="font-mono-d text-xs text-neutral-500">{e.when}</span>
            </div>
          ))}
        </div>
        <h3 className="font-mono-d text-xs uppercase tracking-widest gold mt-12 mb-4">Certifications</h3>
        <ul className="space-y-2.5 text-[15.5px] text-neutral-300">
          {CERTIFICATIONS.map(c => (
            <li key={c.id} className="flex gap-3"><span className="gold">—</span><span>{c.title} <span className="text-neutral-500">({c.issuer}{c.year ? `, ${c.year}` : ''})</span></span></li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
