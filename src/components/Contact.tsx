import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = () => (
  <section id="contact" className="py-14 border-t rule">
    <h2 className="font-serif-d text-3xl mb-4">Contact</h2>
    <p className="text-[16.5px] leading-relaxed text-neutral-800 max-w-xl">
      {PERSONAL_INFO.status}. The fastest way to reach me is email — I reply.
    </p>
    <div className="mt-7 space-y-3 text-[16px]">
      <p><a href={`mailto:${PERSONAL_INFO.email}`} className="link-u font-medium">{PERSONAL_INFO.email}</a></p>
      <p><a href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} className="link-u">{PERSONAL_INFO.phone}</a></p>
      <p className="flex gap-6 pt-2">
        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 link-u"><GithubIcon className="w-4 h-4" /> {PERSONAL_INFO.githubDisplay}</a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 link-u"><LinkedinIcon className="w-4 h-4" /> {PERSONAL_INFO.linkedinDisplay}</a>
      </p>
    </div>
  </section>
);
