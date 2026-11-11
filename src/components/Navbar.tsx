import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
const LINKS = [
  { name: 'Home', href: '#top' },
  { name: 'Originals', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#about' },
  { name: 'Top Picks', href: '#picks' },
  { name: 'Contact', href: '#contact' },
];
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/85 to-transparent">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 h-[72px] flex items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight">Nikhil<span className="accent">+</span></a>
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide text-neutral-300">
          {LINKS.map(l => <a key={l.name} href={l.href} className="hover:text-white transition-colors uppercase">{l.name}</a>)}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[13px] font-semibold bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full">GitHub</a>
          <a href="#contact" className="text-[13px] font-semibold bg-[#1f80e0] hover:bg-[#3fa9f5] transition-colors px-4 py-2 rounded-full">Let&rsquo;s Build</a>
        </div>
        <button className="lg:hidden font-mono-d text-xs uppercase tracking-widest" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <nav className="lg:hidden bg-[#040714]/97 border-t rule px-5 py-4 flex flex-col gap-4 text-sm uppercase tracking-wide">
          {LINKS.map(l => <a key={l.name} href={l.href} onClick={() => setOpen(false)}>{l.name}</a>)}
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      )}
    </header>
  );
};
