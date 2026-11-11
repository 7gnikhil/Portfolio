import { EDUCATION, EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const About = () => (
  <section id="about" className="mx-auto max-w-7xl px-5 sm:px-10 pt-20">
    <Reveal><h2 className="text-2xl sm:text-[28px] font-semibold">The Journey</h2></Reveal>
    <div className="mt-8 grid lg:grid-cols-[1.2fr_1fr] gap-10">
      <Reveal>
        <div className="space-y-0">
          <div className="relative pl-8 pb-9 border-l border-[#232c4d]">
            <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-[#1f80e0]" />
            <p className="font-mono-d text-xs uppercase tracking-widest text-neutral-400">Now · Class of 2027</p>
            <h3 className="mt-2 font-semibold text-lg">{PERSONAL_INFO.university}</h3>
            <p className="text-neutral-400 text-[15px] mt-1">{PERSONAL_INFO.degree} — CGPA {PERSONAL_INFO.cgpa}. Shipping OneUco and the Fraud Detector extension alongside final-year coursework.</p>
          </div>
          <div className="relative pl-8 pb-9 border-l border-[#232c4d]">
            <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-white/70" />
            <p className="font-mono-d text-xs uppercase tracking-widest text-neutral-400">Experience</p>
            <h3 className="mt-2 font-semibold text-lg">{EXPERIENCE.role}</h3>
            <p className="text-neutral-400 text-[15px] mt-1">{EXPERIENCE.detail}</p>
          </div>
          <div className="relative pl-8 border-l border-transparent">
            <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-white/40" />
            <p className="font-mono-d text-xs uppercase tracking-widest text-neutral-400">Training · Apr – Nov 2025</p>
            <h3 className="mt-2 font-semibold text-lg">Codegnan, Hyderabad</h3>
            <p className="text-neutral-400 text-[15px] mt-1">Python Full Stack Development Trainee.</p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="rounded-2xl bg-[#0b1128] border rule p-7">
          <h3 className="font-mono-d text-xs uppercase tracking-widest accent">About this series</h3>
          <p className="mt-4 text-[16px] leading-relaxed text-neutral-200">
            I learn by shipping. A live community platform used by real students, a browser extension released to the public, and a production website for a real manufacturing client — that&rsquo;s the story so far. Next season: a fresher role in software or AI/ML, anywhere in India or remote.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div><dt className="text-neutral-500">Based in</dt><dd className="mt-0.5 font-medium">{PERSONAL_INFO.location}</dd></div>
            <div><dt className="text-neutral-500">Graduating</dt><dd className="mt-0.5 font-medium">{PERSONAL_INFO.graduationYear}</dd></div>
            <div><dt className="text-neutral-500">Degree</dt><dd className="mt-0.5 font-medium">B.Tech, AI &amp; ML</dd></div>
            <div><dt className="text-neutral-500">Open to</dt><dd className="mt-0.5 font-medium">Pan-India · Remote · Hybrid</dd></div>
          </dl>
        </div>
      </Reveal>
    </div>
  </section>
);
