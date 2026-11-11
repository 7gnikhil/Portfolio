import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Reveal } from './Reveal';

export const Contact = () => (
  <section id="contact" className="mx-auto max-w-7xl px-5 sm:px-10 pt-24 pb-20 text-center">
    <Reveal>
      <p className="font-mono-d text-xs uppercase tracking-[.3em] text-neutral-400">Final episode — for now</p>
      <h2 className="font-display mt-5 text-4xl sm:text-6xl font-bold tracking-tight">Your team could be <span className="font-serif-d italic font-normal accent">next</span></h2>
      <p className="mt-5 text-neutral-300 max-w-xl mx-auto leading-relaxed">{PERSONAL_INFO.status}. Email is fastest — I reply.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-white text-black font-semibold px-5 sm:px-7 py-3.5 rounded-md hover:bg-neutral-200 transition-colors text-sm sm:text-base break-all">▶ {PERSONAL_INFO.email}</a>
        <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="bg-white/12 font-semibold px-7 py-3.5 rounded-md hover:bg-white/22 transition-colors">{PERSONAL_INFO.phone}</a>
      </div>
      <div className="mt-8 flex justify-center gap-7 text-sm text-neutral-300">
        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors"><GithubIcon className="w-4 h-4" /> {PERSONAL_INFO.githubDisplay}</a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors"><LinkedinIcon className="w-4 h-4" /> {PERSONAL_INFO.linkedinDisplay}</a>
      </div>
    </Reveal>
  </section>
);
