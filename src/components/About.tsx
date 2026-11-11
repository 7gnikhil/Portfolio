import { CERTIFICATIONS, EDUCATION, EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

export const About = () => (
  <section id="about" className="py-14 border-t rule">
    <h2 className="font-serif-d text-3xl mb-6">About</h2>
    <p className="text-[16.5px] leading-relaxed text-neutral-800 max-w-xl">
      Final-year {PERSONAL_INFO.degree} student at {PERSONAL_INFO.university} (CGPA {PERSONAL_INFO.cgpa}).
      I learn by shipping — a live community platform, a released browser extension, and a production site for a real client came out of that, not coursework alone.
    </p>

    <h3 className="font-mono-d text-xs uppercase text-neutral-500 mt-10 mb-3">Experience</h3>
    <p className="text-[15.5px]"><span className="font-semibold">{EXPERIENCE.role}</span> — {EXPERIENCE.detail}</p>

    <h3 className="font-mono-d text-xs uppercase text-neutral-500 mt-10 mb-3">Education & training</h3>
    <div className="space-y-3">
      {EDUCATION.map(e => (
        <div key={e.place} className="flex flex-wrap items-baseline justify-between gap-x-6 border-b rule pb-3">
          <p className="text-[15.5px]"><span className="font-semibold">{e.place}</span> — {e.what}</p>
          <span className="text-sm text-neutral-500">{e.when}</span>
        </div>
      ))}
    </div>

    <h3 className="font-mono-d text-xs uppercase text-neutral-500 mt-10 mb-3">Certifications</h3>
    <ul className="space-y-2.5 text-[15.5px]">
      {CERTIFICATIONS.map(c => (
        <li key={c.id} className="flex gap-2.5"><span className="text-neutral-400">—</span><span><span className="font-medium">{c.title}</span> <span className="text-neutral-500">({c.issuer}{c.year ? `, ${c.year}` : ''})</span></span></li>
      ))}
    </ul>
  </section>
);
