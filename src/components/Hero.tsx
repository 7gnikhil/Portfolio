import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => (
  <section id="top" className="pt-14 sm:pt-20 pb-14">
    <p className="font-mono-d text-xs text-neutral-500 mb-5">{PERSONAL_INFO.location} — {PERSONAL_INFO.status}</p>
    <h1 className="font-serif-d text-5xl sm:text-6xl leading-[1.05] tracking-tight">
      Nikhil Chowdhary<br />Ghanta
    </h1>
    <p className="mt-4 text-lg text-neutral-600">{PERSONAL_INFO.title}</p>
    <p className="mt-6 text-[17px] leading-relaxed text-neutral-800 max-w-xl">{PERSONAL_INFO.bio}</p>
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
      <a href="#projects" className="font-medium border-b-2 border-black pb-0.5">See the work</a>
      <a href={`mailto:${PERSONAL_INFO.email}`} className="link-u">{PERSONAL_INFO.email}</a>
      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 link-u"><GithubIcon className="w-4 h-4" /> GitHub</a>
      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 link-u"><LinkedinIcon className="w-4 h-4" /> LinkedIn</a>
    </div>
    <dl className="mt-12 grid grid-cols-3 gap-4 border-t rule pt-6 max-w-xl">
      <div><dt className="font-mono-d text-[11px] uppercase text-neutral-500">Shipping</dt><dd className="mt-1 font-semibold">2 live products</dd></div>
      <div><dt className="font-mono-d text-[11px] uppercase text-neutral-500">Focus</dt><dd className="mt-1 font-semibold">AI / ML + software</dd></div>
      <div><dt className="font-mono-d text-[11px] uppercase text-neutral-500">Graduating</dt><dd className="mt-1 font-semibold">2027, Anurag Univ.</dd></div>
    </dl>
  </section>
);
