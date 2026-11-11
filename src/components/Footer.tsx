import { PERSONAL_INFO } from '../data/portfolioData';
export const Footer = () => (
  <footer className="border-t rule">
    <div className="mx-auto max-w-7xl px-5 sm:px-10 py-8 flex flex-wrap justify-between gap-3 text-[13px] text-neutral-500">
      <span className="font-semibold text-neutral-300">Nikhil<span className="accent">+</span></span>
      <span>© 2026 {PERSONAL_INFO.name} · {PERSONAL_INFO.location}</span>
      <a href="#top" className="hover:text-white transition-colors">Back to top ↑</a>
    </div>
  </footer>
);
