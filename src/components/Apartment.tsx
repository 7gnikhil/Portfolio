import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { GALLERY } from '../assets/gallery';
import { PORTRAIT } from '../assets/portrait';
import { openPanel } from '../lib/ui';

const THEMES: Record<string, { wall: string; floor: string; accent: string; glow: string; view: string }> = {
  oneuco: { wall: 'linear-gradient(180deg,#232c52 0%,#171f3d 78%,#141a33 100%)', floor: '#3a2c1c', accent: '#d4af37', glow: 'rgba(212,175,55,.35)', view: '🌃' },
  'fraud-detection': { wall: 'linear-gradient(180deg,#37255c 0%,#241740 78%,#1d1233 100%)', floor: '#2e2138', accent: '#a78bfa', glow: 'rgba(167,139,250,.35)', view: '🌆' },
  'maruthi-toolings': { wall: 'linear-gradient(180deg,#173f42 0%,#0f2b2e 78%,#0b2124 100%)', floor: '#33302a', accent: '#2dd4bf', glow: 'rgba(45,212,191,.32)', view: '🏭' },
  musicmitra: { wall: 'linear-gradient(180deg,#4a2430 0%,#33161f 78%,#2a1219 100%)', floor: '#3a2a20', accent: '#fbbf24', glow: 'rgba(251,191,36,.32)', view: '🌇' },
};

const SLOTS = [
  { icon: '📺', label: 'The TV', style: { left: '6%', top: '34%' } },
  { icon: '💻', label: 'The laptop', style: { right: '8%', top: '52%' } },
  { icon: '🖼️', label: 'The wall frame', style: { left: '44%', top: '16%' } },
  { icon: '🛋️', label: 'The sofa', style: { left: '30%', top: '58%' } },
  { icon: '🪴', label: 'The plant corner', style: { right: '26%', top: '64%' } },
];

const FLOOR_ORDER = ['oneuco', 'fraud-detection', 'maruthi-toolings', 'musicmitra'];

function Shirt({ proj, i, onOpen }: { proj: Project; i: number; onOpen: () => void }) {
  const clipId = `shirt-${proj.id}`;
  return (
    <button onClick={onOpen} className="sway group relative w-16 sm:w-24 shrink-0" style={{ animationDelay: `${i * 0.7}s` }} aria-label={`${proj.title} — open project`}>
      <svg viewBox="0 0 100 96" className="w-full drop-shadow-[0_10px_16px_rgba(0,0,0,.45)] group-hover:scale-105 transition-transform">
        <defs>
          <clipPath id={clipId}><path d="M36 12 L14 26 L24 42 L31 38 L31 88 L69 88 L69 38 L76 42 L86 26 L64 12 Q50 24 36 12 Z" /></clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect width="100" height="96" fill="#f4f4f5" />
          <image href={GALLERY[proj.id][0]} x="24" y="30" width="52" height="58" preserveAspectRatio="xMidYMid slice" />
          <rect width="100" height="96" fill="black" opacity="0.06" />
        </g>
        <path d="M36 12 L14 26 L24 42 L31 38 L31 88 L69 88 L69 38 L76 42 L86 26 L64 12 Q50 24 36 12 Z" fill="none" stroke="rgba(0,0,0,.35)" strokeWidth="1.6" />
        <circle cx="36" cy="11" r="2.4" fill="#cbd5e1" stroke="rgba(0,0,0,.4)" />
        <circle cx="64" cy="11" r="2.4" fill="#cbd5e1" stroke="rgba(0,0,0,.4)" />
      </svg>
      <span className="mt-1 block text-center font-mono-d text-[9px] sm:text-[10px] uppercase tracking-wider text-white/85 leading-tight">{proj.title}</span>
    </button>
  );
}

function Interior({ proj, onClose }: { proj: Project; onClose: () => void }) {
  const theme = THEMES[proj.id];
  const items = [
    ...proj.highlights.map((h, i) => ({ ...SLOTS[i % SLOTS.length], text: h })),
    { icon: '📚', label: 'The bookshelf — tech stack', style: { right: '6%', top: '14%' }, text: proj.technologies.join('  ·  ') },
  ];
  const [active, setActive] = useState(0);
  const cur = items[active];
  return (
    <motion.div className="fixed inset-0 z-[85] bg-black/78 backdrop-blur-sm overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div onClick={e => e.stopPropagation()} initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 12 }} transition={{ type: 'spring', stiffness: 210, damping: 24 }}
        className="relative mx-auto my-[3dvh] w-[min(760px,95vw)] bg-[#0a0f26] border rule rounded-2xl overflow-hidden shadow-2xl" role="dialog" aria-modal="true" aria-label={`${proj.title} — inside the apartment`}>
        <div className="flex items-center gap-3 px-5 pt-4 pb-3">
          <button onClick={onClose} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 transition-colors px-3 py-2 rounded-full"><ArrowLeft className="w-3.5 h-3.5" /> Building</button>
          <div className="min-w-0">
            <h3 className="font-display font-extrabold text-lg sm:text-2xl leading-tight truncate">{proj.title}</h3>
            <p className="text-[11px] sm:text-xs text-neutral-400 truncate">{proj.subtitle} · {proj.statusText}</p>
          </div>
          <div className="ml-auto flex gap-2 shrink-0">
            {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold bg-white text-black px-3.5 py-2 rounded-full hover:bg-neutral-200 transition-colors">Live ↗</a>}
            <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold bg-white/12 px-3.5 py-2 rounded-full hover:bg-white/22 transition-colors">GitHub ↗</a>
          </div>
        </div>
        {/* The hall */}
        <div className="relative h-[340px] sm:h-[400px] mx-4 rounded-xl overflow-hidden border border-white/10" style={{ background: theme.wall }}>
          <div className="absolute inset-x-0 bottom-0 h-[24%]" style={{ background: `linear-gradient(180deg, ${theme.floor}, #17110b)` }} />
          <div className="absolute inset-x-0 bottom-[24%] h-[3px] bg-black/35" />
          <div className="absolute left-[6%] top-[10%] w-24 h-28 sm:w-28 sm:h-32 rounded-md border-4 border-[#0c1226] bg-gradient-to-b from-sky-300/50 to-sky-600/30 flex items-center justify-center text-3xl sm:text-4xl shadow-inner">{theme.view}</div>
          <span className="absolute right-[5%] top-[6%] text-xl opacity-80">🖼️</span>
          {items.map((it, i) => (
            <button key={it.label} onClick={() => setActive(i)} style={it.style} aria-label={it.label}
              className={`absolute flex flex-col items-center gap-0.5 transition-all duration-300 ${active === i ? 'scale-125' : 'hover:scale-110 opacity-90'}`}>
              <span className="text-4xl sm:text-5xl" style={active === i ? { filter: `drop-shadow(0 0 14px ${theme.glow})` } : undefined}>{it.icon}</span>
              <span className={`font-mono-d text-[8px] sm:text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full ${active === i ? 'bg-white text-black font-bold' : 'bg-black/45 text-white/80'}`}>{it.label}</span>
            </button>
          ))}
          <span className="absolute bottom-[3%] left-1/2 -translate-x-1/2 font-mono-d text-[9px] uppercase tracking-[.3em] text-white/40">Tap an item in the hall</span>
        </div>
        <div className="px-5 py-5">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
              <p className="font-mono-d text-[10px] uppercase tracking-[.3em]" style={{ color: theme.accent }}>{cur.icon} {cur.label}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-100">{cur.text}</p>
            </motion.div>
          </AnimatePresence>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400 border-t rule pt-4">{proj.shortDescription}</p>
        </div>
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 hidden"><X className="w-5 h-5" /></button>
      </motion.div>
    </motion.div>
  );
}

export const Apartment = () => {
  const [inside, setInside] = useState<Project | null>(null);
  const byId = (id: string) => PROJECTS.find(p => p.id === id)!;
  return (
    <section id="projects" aria-label="Originals — the apartment" className="w-full max-w-2xl mx-auto flex flex-col min-h-0 flex-1 px-1">
      {/* Terrace + clothesline */}
      <div className="relative pt-1">
        <div className="flex items-end justify-between px-2 sm:px-6">
          <span className="font-mono-d text-[9px] sm:text-[10px] uppercase tracking-[.3em] text-neutral-400">The Terrace — dandem</span>
          <span className="font-mono-d text-[9px] sm:text-[10px] uppercase tracking-[.3em] text-neutral-500">Tap a shirt or a floor</span>
        </div>
        <div className="relative mt-1 h-[104px] sm:h-[132px]">
          <svg className="absolute inset-x-0 top-0 w-full h-8" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden>
            <path d="M0 2 Q50 12 100 2" fill="none" stroke="#94a3b8" strokeWidth="0.7" />
          </svg>
          <div className="absolute inset-x-0 top-0 flex justify-between px-1 sm:px-4">
            {FLOOR_ORDER.map((id, i) => <Shirt key={id} proj={byId(id)} i={i} onOpen={() => setInside(byId(id))} />)}
          </div>
        </div>
      </div>
      {/* Building */}
      <div className="relative flex-1 min-h-0 flex flex-col rounded-t-lg overflow-hidden border-x border-t border-white/12 shadow-[0_24px_60px_rgba(0,0,0,.5)]" style={{ background: 'linear-gradient(90deg,#1c2447,#27335f 18%,#27335f 82%,#1a2242)' }}>
        {/* Penthouse */}
        <button onClick={() => openPanel('about')} className="group relative flex-1 min-h-[46px] flex items-center gap-3 px-3 sm:px-5 border-b border-black/40 hover:bg-white/6 transition-colors text-left">
          <span className="font-mono-d text-[10px] text-neutral-400 w-6">5F</span>
          <span className="hidden sm:flex gap-1.5">{[0, 1].map(w => <span key={w} className="w-5 h-7 rounded-[3px] bg-amber-200/85 border border-black/40 shadow-[0_0_10px_rgba(251,191,36,.35)]" />)}</span>
          <span className="relative mx-auto sm:mx-0 flex items-center gap-2.5 bg-black/40 border border-white/15 rounded-full pl-1 pr-4 py-1 group-hover:border-[#d4af37]/60 transition-colors">
            <img src={PORTRAIT} alt="" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover object-top border border-white/30" />
            <span className="font-display font-bold text-[13px] sm:text-sm tracking-wide">The Penthouse · Nikhil</span>
          </span>
          <span className="ml-auto font-mono-d text-[9px] uppercase tracking-widest text-neutral-400 hidden sm:block">About me →</span>
          <span className="hidden sm:flex gap-1.5"><span className="w-5 h-7 rounded-[3px] bg-sky-200/25 border border-black/40" /></span>
        </button>
        {/* Project floors, top to bottom */}
        {FLOOR_ORDER.map((id, i) => {
          const proj = byId(id);
          const floorNo = 4 - i;
          const theme = THEMES[id];
          return (
            <button key={id} onClick={() => setInside(proj)} className="group relative flex-1 min-h-[46px] flex items-center gap-3 px-3 sm:px-5 border-b border-black/40 hover:bg-white/6 transition-colors text-left">
              <span className="font-mono-d text-[10px] text-neutral-400 w-6">{floorNo}F</span>
              <span className="hidden sm:flex gap-1.5">
                <span className="w-5 h-7 rounded-[3px] bg-amber-200/85 border border-black/40" style={{ boxShadow: `0 0 10px ${theme.glow}` }} />
                <span className="w-5 h-7 rounded-[3px] bg-sky-200/20 border border-black/40" />
              </span>
              <span className="mx-auto sm:mx-0 bg-black/40 border border-white/15 rounded-md px-3.5 py-1.5 font-display font-bold text-[13px] sm:text-[15px] tracking-wide group-hover:border-white/45 transition-colors" style={{ textShadow: '0 1px 6px rgba(0,0,0,.6)' }}>
                {proj.title}
              </span>
              <span className="ml-auto font-mono-d text-[9px] uppercase tracking-widest hidden sm:block" style={{ color: theme.accent }}>Step inside →</span>
              <span className="hidden md:flex gap-1.5"><span className="w-5 h-7 rounded-[3px] bg-amber-100/70 border border-black/40" /></span>
              <span className="absolute inset-x-0 bottom-0 h-[5px] opacity-50" style={{ background: 'repeating-linear-gradient(90deg, rgba(255,255,255,.28) 0 2px, transparent 2px 9px)' }} />
            </button>
          );
        })}
        <div className="h-[6px] bg-black/50" />
      </div>
      <AnimatePresence>{inside && <Interior proj={inside} onClose={() => setInside(null)} />}</AnimatePresence>
    </section>
  );
};
