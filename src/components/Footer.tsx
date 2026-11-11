import { PERSONAL_INFO } from '../data/portfolioData';
export const Footer = () => (
  <footer className="border-t rule">
    <div className="mx-auto max-w-6xl px-5 sm:px-10 py-7 flex flex-wrap justify-between gap-3 font-mono-d text-[11px] uppercase tracking-widest text-neutral-500">
      <span>© 2026 {PERSONAL_INFO.name}</span>
      <span>{PERSONAL_INFO.location}</span>
      <a href="#top" className="hover:text-[#c2410c]">Top ↑</a>
    </div>
  </footer>
);
