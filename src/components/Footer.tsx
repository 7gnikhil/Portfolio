import { PERSONAL_INFO } from '../data/portfolioData';
export const Footer = () => (
  <footer className="border-t rule">
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-8 flex flex-wrap justify-between gap-3 text-sm text-neutral-500">
      <span>© 2026 {PERSONAL_INFO.name}</span>
      <span>{PERSONAL_INFO.location}</span>
      <a href="#top" className="hover:text-black">Back to top ↑</a>
    </div>
  </footer>
);
