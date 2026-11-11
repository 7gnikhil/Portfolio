import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { openPanel } from '../lib/ui';

const LINKS = [
  { name: 'Home', panel: 'home' as const },
  { name: 'Originals', panel: 'originals' as const },
  { name: 'About', panel: 'about' as const },
  { name: 'Contact', panel: 'contact' as const },
];
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const go = (panel: 'home' | 'originals' | 'about' | 'contact') => { openPanel(panel); setOpen(false); };
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/85 to-transparent">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 h-[72px] flex items-center justify-between">
        <button onClick={() => go('home')} className="font-display text-xl font-extrabold tracking-tight">Nikhil<span className="accent">+</span></button>
        <nav className="hidden lg:flex items-center gap-8 font-mono-d text-xs font-medium tracking-widest text-neutral-300">
          {LINKS.map(l => <button key={l.name} onClick={() => go(l.panel)} className="hover:text-white transition-colors uppercase">{l.name}</button>)}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[13px] font-semibold bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full">GitHub</a>
          <button onClick={() => go('contact')} className="text-[13px] font-semibold bg-[#1f80e0] hover:bg-[#3fa9f5] transition-colors px-4 py-2 rounded-full">Let&rsquo;s Build</button>
        </div>
        <button className="lg:hidden font-mono-d text-xs uppercase tracking-widest" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <nav className="lg:hidden bg-[#040714]/97 border-t rule px-5 py-4 flex flex-col gap-4 text-sm uppercase tracking-wide">
          {LINKS.map(l => <button key={l.name} onClick={() => go(l.panel)} className="text-left">{l.name}</button>)}
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      )}
    </header>
  );
};
