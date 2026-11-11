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
    <header className="sticky top-0 z-40 bg-[#fbfaf7]/90 backdrop-blur-sm border-b rule">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-[15px]">Nikhil Ghanta</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
          {LINKS.map(l => <a key={l.name} href={l.href} className="hover:text-black transition-colors">{l.name}</a>)}
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
        </nav>
        <button className="sm:hidden text-sm" onClick={() => setOpen(!open)} aria-label="Menu">{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <nav className="sm:hidden border-t rule px-5 py-3 flex flex-col gap-3 text-[15px]">
          {LINKS.map(l => <a key={l.name} href={l.href} onClick={() => setOpen(false)}>{l.name}</a>)}
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      )}
    </header>
  );
};
