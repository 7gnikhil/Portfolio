import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = () => (
  <section id="contact" className="pt-24 pb-20">
    <p className="font-mono-d text-xs uppercase tracking-widest text-neutral-500">{PERSONAL_INFO.status}</p>
    <a href={`mailto:${PERSONAL_INFO.email}`} className="block mt-5 font-serif-d italic text-[11vw] sm:text-7xl lg:text-8xl leading-none hover:text-[#d4af37] transition-colors">
      Let&rsquo;s talk
    </a>
    <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-[16px]">
      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold underline underline-offset-4 decoration-[#d4af37]">{PERSONAL_INFO.email}</a>
      <a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="hover:text-[#d4af37] transition-colors">{PERSONAL_INFO.phone}</a>
      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#d4af37] transition-colors"><GithubIcon className="w-4 h-4" /> {PERSONAL_INFO.githubDisplay}</a>
      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#d4af37] transition-colors"><LinkedinIcon className="w-4 h-4" /> {PERSONAL_INFO.linkedinDisplay}</a>
    </div>
  </section>
);
