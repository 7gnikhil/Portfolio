import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  { icon: '📺', label: 'The TV', style: { left: '6%', top: '43%' } },
  { icon: '💻', label: 'The laptop', style: { right: '8%', top: '54%' } },
  { icon: '🖼️', label: 'The wall frame', style: { left: '45%', top: '15%' } },
  { icon: '🛋️', label: 'The sofa', style: { left: '28%', top: '60%' } },
  { icon: '🪴', label: 'The plant corner', style: { right: '27%', top: '66%' } },
];

const FLOOR_ORDER = ['oneuco', 'fraud-detection', 'maruthi-toolings', 'musicmitra'];
const SHORT: Record<string, string> = { oneuco: 'OneUco', 'fraud-detection': 'Fraud Detector', 'maruthi-toolings': 'Maruthi Toolings', musicmitra: 'MusicMitra' };
const byId = (id: string) => PROJECTS.find(p => p.id === id)!;

/** A T-shirt on the terrace line — clicking goes STRAIGHT to the live site / GitHub. */
function Shirt({ proj, i }: { proj: Project; i: number }) {
  const clipId = `shirt-${proj.id}`;
  const href = proj.liveUrl ?? proj.githubUrl;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="sway group relative w-[72px] sm:w-28 shrink-0" style={{ animationDelay: `${i * 0.7}s` }} aria-label={`${proj.title} — open ${proj.liveUrl ? 'live site' : 'GitHub'}`}>
      <svg viewBox="0 0 100 96" className="w-full drop-shadow-[0_10px_16px_rgba(0,0,0,.45)] group-hover:scale-105 transition-transform">
        <defs>
          <clipPath id={clipId}><path d="M36 12 L14 26 L24 42 L31 38 L31 88 L69 88 L69 38 L76 42 L86 26 L64 12 Q50 24 36 12 Z" /></clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <rect width="100" height="96" fill="#f4f4f5" />
          <image href={GALLERY[proj.id][0]} x="21" y="27" width="58" height="61" preserveAspectRatio="xMidYMid slice" />
          <rect width="100" height="96" fill="black" opacity="0.06" />
        </g>
        <path d="M36 12 L14 26 L24 42 L31 38 L31 88 L69 88 L69 38 L76 42 L86 26 L64 12 Q50 24 36 12 Z" fill="none" stroke="rgba(0,0,0,.35)" strokeWidth="1.6" />
        <circle cx="36" cy="11" r="2.4" fill="#cbd5e1" stroke="rgba(0,0,0,.4)" />
        <circle cx="64" cy="11" r="2.4" fill="#cbd5e1" stroke="rgba(0,0,0,.4)" />
      </svg>
      <span className="mt-1 block text-center font-display font-bold text-[10px] sm:text-xs text-white leading-tight whitespace-nowrap">{SHORT[proj.id]}</span>
      <span className="block text-center font-mono-d text-[8.5px] sm:text-[9.5px] uppercase tracking-wider text-[#7dd3fc]">{proj.liveUrl ? 'Live site ↗' : 'GitHub ↗'}</span>
    </a>
  );
}

/** Full-page interior of one flat — the project's features live in the hall furniture. */
function InteriorPage({ proj, onBack }: { proj: Project; onBack: () => void }) {
  const theme = THEMES[proj.id];
  const items = [
    ...proj.highlights.map((h, i) => ({ ...SLOTS[i % SLOTS.length], text: h })),
    { icon: '📚', label: 'The bookshelf — tech stack', style: { right: '6%', top: '13%' }, text: proj.technologies.join('  ·  ') },
  ];
  const [active, setActive] = useState(0);
  const cur = items[active];
  return (
    <motion.div initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center gap-3">
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 transition-colors px-3.5 py-2 rounded-full"><ArrowLeft className="w-3.5 h-3.5" /> The Apartment</button>
        <div className="min-w-0">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl leading-tight">{proj.title}</h2>
          <p className="text-xs sm:text-sm text-neutral-400">{proj.subtitle} · {proj.statusText} · {proj.year}</p>
        </div>
        <div className="ml-auto flex gap-2 shrink-0">
          {proj.liveUrl && <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-[13px] font-semibold bg-white text-black px-4 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">▶ Live Site</a>}
          <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-[13px] font-semibold bg-white/12 px-4 py-2.5 rounded-full hover:bg-white/22 transition-colors">GitHub ↗</a>
        </div>
      </div>

      {/* The hall */}
      <div className="relative h-[54dvh] min-h-[300px] sm:h-[46dvh] mt-4 sm:mt-5 rounded-2xl overflow-hidden border border-white/12 shadow-[0_24px_60px_rgba(0,0,0,.5)]" style={{ background: theme.wall }}>
        <div className="absolute inset-x-0 bottom-0 h-[24%]" style={{ background: `linear-gradient(180deg, ${theme.floor}, #17110b)` }} />
        <div className="absolute inset-x-0 bottom-[24%] h-[3px] bg-black/35" />
        <div className="absolute left-[5%] top-[8%] w-24 h-28 sm:w-36 sm:h-40 rounded-md border-4 border-[#0c1226] bg-gradient-to-b from-sky-300/50 to-sky-600/30 flex items-center justify-center text-4xl sm:text-5xl shadow-inner">{theme.view}</div>
        {items.map((it, i) => (
          <button key={it.label} onClick={() => setActive(i)} style={it.style} aria-label={it.label}
            className={`absolute flex flex-col items-center gap-1 transition-all duration-300 ${active === i ? 'scale-125' : 'hover:scale-110 opacity-90'}`}>
            <span className="text-[34px] sm:text-6xl" style={active === i ? { filter: `drop-shadow(0 0 16px ${theme.glow})` } : undefined}>{it.icon}</span>
            <span className={`font-mono-d text-[8.5px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${active === i ? 'bg-white text-black font-bold' : 'bg-black/45 text-white/80 hidden sm:block'}`}>{it.label}</span>
          </button>
        ))}
        <span className="absolute bottom-[3%] left-1/2 -translate-x-1/2 font-mono-d text-[9px] sm:text-[10px] uppercase tracking-[.3em] text-white/45 whitespace-nowrap">Tap an item in the hall</span>
      </div>

      {/* Selected feature */}
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="mt-5 bg-white/5 border rule rounded-2xl px-5 py-5">
          <p className="font-mono-d text-[10px] uppercase tracking-[.3em]" style={{ color: theme.accent }}>{cur.icon} {cur.label}</p>
          <p className="mt-2 text-base sm:text-lg leading-relaxed text-neutral-50">{cur.text}</p>
        </motion.div>
      </AnimatePresence>

      {/* All features, plain to read */}
      <h3 className="mt-7 font-display font-bold text-lg">Everything in this flat</h3>
      <div className="mt-3 grid sm:grid-cols-2 gap-3 pb-4">
        {items.map((it, i) => (
          <button key={it.label} onClick={() => setActive(i)} className={`text-left bg-[#0b1128] border rounded-xl px-4 py-3.5 transition-colors ${active === i ? 'border-white/50' : 'rule hover:border-white/30'}`}>
            <p className="text-sm font-semibold">{it.icon} {it.label}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-neutral-400">{it.text}</p>
          </button>
        ))}
      </div>
      <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-400 border-t rule pt-4 pb-2">{proj.shortDescription}</p>
    </motion.div>
  );
}

export const Apartment = () => {
  const [inside, setInside] = useState<Project | null>(null);
  return (
    <AnimatePresence mode="wait">
      {inside ? (
        <InteriorPage key={inside.id} proj={inside} onBack={() => setInside(null)} />
      ) : (
        <motion.section key="building" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }} aria-label="Originals — the apartment" className="w-full max-w-3xl mx-auto">
          <div className="flex items-end justify-between gap-3 flex-wrap">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">The Originals Apartment</h2>
              <p className="mt-1 text-sm text-neutral-400">Four projects, four floors. The shirts on the terrace jump straight to the live site — step into a floor to see its features.</p>
            </div>
            <button onClick={() => openPanel('home')} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 transition-colors px-3.5 py-2 rounded-full shrink-0"><ArrowLeft className="w-3.5 h-3.5" /> Home</button>
          </div>

          {/* Terrace + clothesline */}
          <div className="relative mt-6">
            <div className="flex items-end justify-between px-1 sm:px-4">
              <span className="font-mono-d text-[9px] sm:text-[10px] uppercase tracking-[.3em] text-neutral-400">The Terrace — dandem</span>
              <span className="font-mono-d text-[9px] sm:text-[10px] uppercase tracking-[.3em] text-neutral-500">Shirt = live ↗</span>
            </div>
            <div className="relative mt-1 h-[124px] sm:h-[168px]">
              <svg className="absolute inset-x-0 top-0 w-full h-9" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden>
                <path d="M0 2 Q50 12 100 2" fill="none" stroke="#94a3b8" strokeWidth="0.7" />
              </svg>
              <div className="absolute inset-x-0 top-0 flex justify-between px-0.5 sm:px-4">
                {FLOOR_ORDER.map((id, i) => <Shirt key={id} proj={byId(id)} i={i} />)}
              </div>
            </div>
          </div>

          {/* The building */}
          <div className="relative rounded-t-xl overflow-hidden border-x border-t border-white/12 shadow-[0_24px_60px_rgba(0,0,0,.5)]" style={{ background: 'linear-gradient(90deg,#1c2447,#27335f 18%,#27335f 82%,#1a2242)' }}>
            <button onClick={() => openPanel('about')} className="group relative w-full min-h-[72px] flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-black/40 hover:bg-white/6 transition-colors text-left">
              <span className="font-mono-d text-[11px] text-neutral-400 w-7">5F</span>
              <span className="hidden sm:flex gap-1.5">{[0, 1].map(w => <span key={w} className="w-6 h-9 rounded-[3px] bg-amber-200/85 border border-black/40 shadow-[0_0_10px_rgba(251,191,36,.35)]" />)}</span>
              <span className="mx-auto sm:mx-0 flex items-center gap-3 bg-black/40 border border-white/15 rounded-full pl-1.5 pr-5 py-1.5 group-hover:border-[#d4af37]/60 transition-colors">
                <img src={PORTRAIT} alt="" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover object-top border border-white/30" />
                <span className="font-display font-bold text-sm sm:text-base tracking-wide">The Penthouse · Nikhil</span>
              </span>
              <span className="ml-auto font-mono-d text-[10px] uppercase tracking-widest text-neutral-400 hidden sm:block">About me <ArrowRight className="inline w-3.5 h-3.5" /></span>
            </button>
            {FLOOR_ORDER.map((id, i) => {
              const proj = byId(id);
              const theme = THEMES[id];
              return (
                <button key={id} onClick={() => setInside(proj)} className="group relative w-full min-h-[68px] sm:min-h-[84px] flex items-center gap-2.5 sm:gap-3 px-3 sm:px-6 py-3 border-b border-black/40 hover:bg-white/6 transition-colors text-left">
                  <span className="font-mono-d text-[11px] text-neutral-400 w-7">{4 - i}F</span>
                  <span className="hidden sm:flex gap-1.5">
                    <span className="w-6 h-9 rounded-[3px] bg-amber-200/85 border border-black/40" style={{ boxShadow: `0 0 12px ${theme.glow}` }} />
                    <span className="w-6 h-9 rounded-[3px] bg-sky-200/20 border border-black/40" />
                    <span className="w-6 h-9 rounded-[3px] bg-amber-100/70 border border-black/40" />
                  </span>
                  <span className="mx-auto sm:mx-0 text-center sm:text-left">
                    <span className="block bg-black/40 border border-white/15 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 font-display font-bold text-[15px] sm:text-xl tracking-wide group-hover:border-white/45 transition-colors">{proj.title}</span>
                    <span className="mt-1 block text-[11px] sm:text-xs text-neutral-400">{proj.subtitle}</span>
                  </span>
                  <span className="ml-auto font-mono-d text-[10px] uppercase tracking-widest hidden sm:block" style={{ color: theme.accent }}>Step inside <ArrowRight className="inline w-3.5 h-3.5" /></span>
                  <span className="absolute inset-x-0 bottom-0 h-[6px] opacity-50" style={{ background: 'repeating-linear-gradient(90deg, rgba(255,255,255,.28) 0 2px, transparent 2px 9px)' }} />
                </button>
              );
            })}
            <div className="h-2.5 bg-black/50" />
          </div>
          <p className="mt-4 text-center font-mono-d text-[10px] uppercase tracking-[.25em] text-neutral-500 pb-2">Ground floor down · terrace up · every floor is a project</p>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
