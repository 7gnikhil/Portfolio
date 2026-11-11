import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
const LINKS = [
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#faf6ef]/90 backdrop-blur-sm border-b rule">
      <div className="mx-auto max-w-6xl px-5 sm:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="w-8 h-8 bg-[#c2410c] text-white font-bold flex items-center justify-center text-sm">NG</span>
          <span className="font-mono-d text-xs uppercase tracking-widest text-neutral-500 hidden md:inline">Portfolio — 2026</span>
        </a>
        <nav className="hidden sm:flex items-center gap-8 font-mono-d text-xs uppercase tracking-widest text-neutral-600">
          {LINKS.map(l => <a key={l.name} href={l.href} className="hover:text-[#c2410c] transition-colors">{l.name}</a>)}
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#1c1913] border border-[#d8cdb2] px-3.5 py-2 hover:border-[#c2410c] hover:text-[#c2410c] transition-colors">GitHub ↗</a>
        </nav>
        <button className="sm:hidden font-mono-d text-xs uppercase tracking-widest" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <nav className="sm:hidden border-t rule px-5 py-4 flex flex-col gap-4 font-mono-d text-xs uppercase tracking-widest">
          {LINKS.map(l => <a key={l.name} href={l.href} onClick={() => setOpen(false)}>{l.name}</a>)}
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      )}
    </header>
  );
};
