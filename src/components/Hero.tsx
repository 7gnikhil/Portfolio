import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => (
  <section id="top" className="pt-14 sm:pt-24 pb-0">
    <div className="flex flex-wrap justify-between gap-3 font-mono-d text-[11px] uppercase tracking-widest text-neutral-500">
      <span>{PERSONAL_INFO.location}</span>
      <span className="gold">● {PERSONAL_INFO.status}</span>
    </div>
    <h1 className="mt-8 font-bold uppercase leading-[0.95] tracking-tight text-[13.5vw] sm:text-[92px] lg:text-[112px]">
      Nikhil<br />Chowdhary <span className="font-serif-d italic normal-case font-normal gold">Ghanta</span>
    </h1>
    <div className="mt-10 grid md:grid-cols-[1fr_1.4fr] gap-8 items-start">
      <p className="font-mono-d text-xs uppercase tracking-widest text-neutral-400 leading-loose">
        AI / ML Engineer<br />& Software Developer<br />B.Tech, Class of 2027
      </p>
      <div>
        <p className="text-lg sm:text-xl leading-relaxed text-neutral-300 max-w-2xl">{PERSONAL_INFO.bio}</p>
        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
          <a href="#projects" className="font-semibold bg-[#d4af37] text-[#0c0b09] px-5 py-2.5 hover:bg-[#e5c65c] transition-colors">See the work</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-2.5 hover:text-[#d4af37] transition-colors"><GithubIcon className="w-4 h-4" /> GitHub</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-2.5 hover:text-[#d4af37] transition-colors"><LinkedinIcon className="w-4 h-4" /> LinkedIn</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="py-2.5 hover:text-[#d4af37] transition-colors">{PERSONAL_INFO.email}</a>
        </div>
      </div>
    </div>
    <div className="mt-16 border-y rule py-3.5 flex flex-wrap gap-x-8 gap-y-2 font-mono-d text-[11px] uppercase tracking-widest text-neutral-500">
      <span>2 live products</span><span className="gold">/</span>
      <span>1 released browser extension</span><span className="gold">/</span>
      <span>1 production client site</span><span className="gold">/</span>
      <span>Python · TypeScript · ML</span>
    </div>
  </section>
);
