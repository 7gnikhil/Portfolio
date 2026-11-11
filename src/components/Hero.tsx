import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const TICKER = ['OneUco — live', 'Fraud Detector Extension v1.3', 'Maruthi Toolings — client site', 'MusicMitra', 'Python', 'TypeScript', 'Machine Learning', 'Hyderabad'];

export const Hero = () => (
  <section id="top" className="pt-14 sm:pt-20">
    <p className="rise font-mono-d text-[11px] uppercase tracking-widest text-neutral-500" style={{ animationDelay: '.05s' }}>
      {PERSONAL_INFO.location} <span className="accent">·</span> <span className="accent">{PERSONAL_INFO.status}</span>
    </p>
    <h1 className="mt-7 font-bold leading-[0.98] tracking-tight text-[12.5vw] sm:text-[84px] lg:text-[104px]">
      <span className="rise block" style={{ animationDelay: '.15s' }}>Nikhil</span>
      <span className="rise block" style={{ animationDelay: '.28s' }}>Chowdhary <span className="font-serif-d italic font-normal accent">Ghanta</span></span>
    </h1>
    <div className="grow-x mt-8 h-[3px] bg-[#c2410c] w-40" />
    <div className="mt-9 grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
      <p className="rise font-mono-d text-xs uppercase tracking-widest text-neutral-500 leading-loose" style={{ animationDelay: '.4s' }}>
        AI / ML Engineer<br />& Software Developer<br />B.Tech — Class of 2027
      </p>
      <div className="rise" style={{ animationDelay: '.5s' }}>
        <p className="text-lg sm:text-xl leading-relaxed text-neutral-700 max-w-2xl">{PERSONAL_INFO.bio}</p>
        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
          <a href="#projects" className="font-semibold bg-[#1c1913] text-[#faf6ef] px-5 py-2.5 hover:bg-[#c2410c] transition-colors">See the work ↓</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-2.5 hover:text-[#c2410c] transition-colors"><GithubIcon className="w-4 h-4" /> GitHub</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-2.5 hover:text-[#c2410c] transition-colors"><LinkedinIcon className="w-4 h-4" /> LinkedIn</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="py-2.5 hover:text-[#c2410c] transition-colors">{PERSONAL_INFO.email}</a>
        </div>
      </div>
    </div>
    <div className="mt-16 border-y rule py-3 overflow-hidden" aria-hidden="true">
      <div className="marquee-track gap-0">
        {[0, 1].map(copy => (
          <div key={copy} className="flex shrink-0 items-center">
            {TICKER.map(t => <span key={t + copy} className="flex items-center font-mono-d text-xs uppercase tracking-widest text-neutral-500"><span className="px-5">{t}</span><span className="accent">✦</span></span>)}
          </div>
        ))}
      </div>
    </div>
  </section>
);
