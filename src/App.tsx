import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { SeriesModal } from './components/SeriesModal';
import { BottomNav } from './components/BottomNav';
import { Hero } from './components/Hero';
import { Apartment } from './components/Apartment';
import { About } from './components/About';
import { Contact } from './components/Contact';

type Panel = 'about' | 'contact' | null;
type View = 'home' | 'apartment';

export function App() {
  const [screen, setScreen] = useState<'intro' | 'site'>('intro');
  const [series, setSeries] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    const onUi = (e: Event) => {
      const d = (e as CustomEvent).detail;
      if (d?.type === 'series') setSeries(true);
      if (d?.type === 'panel') {
        if (d.name === 'home') { setView('home'); setPanel(null); }
        else if (d.name === 'originals') { setView('apartment'); setPanel(null); }
        else setPanel(d.name);
      }
    };
    window.addEventListener('ui', onUi);
    return () => window.removeEventListener('ui', onUi);
  }, []);

  const seriesOpen = screen === 'intro' ? false : series;
  return (
    <div className="h-[100dvh] overflow-hidden flex flex-col relative pb-14 sm:pb-0">
      <Intro show={screen === 'intro'} onPlay={() => { setScreen('site'); setSeries(true); }} />
      <SeriesModal
        open={seriesOpen}
        onPlay={() => setSeries(false)}
        onClose={() => setSeries(false)}
      />
      <Navbar />
      {view === 'home' ? (
        <main className="flex-1 min-h-0 flex flex-col w-full">
          <Hero />
          <div className="flex-1 min-h-0 flex items-center justify-center px-5 pb-4">
            <button onClick={() => setView('apartment')} className="group w-full max-w-3xl text-left rounded-2xl border rule bg-gradient-to-b from-[#131c3f] to-[#0a0f26] px-6 py-6 sm:py-8 hover:border-white/35 transition-colors shadow-[0_24px_60px_rgba(0,0,0,.45)]">
              <p className="font-mono-d text-[10px] uppercase tracking-[.3em] text-neutral-400">Now showing — the Originals</p>
              <p className="mt-2 font-display font-extrabold text-2xl sm:text-4xl tracking-tight">🏢 Four projects. Four floors. <span className="text-[#7dd3fc]">One apartment.</span></p>
              <p className="mt-2 text-sm text-neutral-400 max-w-xl">Shirts on the terrace fly you straight to each live project. Step into a floor and the hall furniture tells you its features.</p>
              <span className="mt-4 inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full group-hover:bg-neutral-200 transition-colors">Visit the apartment <ArrowRight className="w-4 h-4" /></span>
            </button>
          </div>
        </main>
      ) : (
        <main className="flex-1 min-h-0 overflow-y-auto w-full px-4 sm:px-6 pt-[84px] pb-20 sm:pb-10">
          <Apartment />
        </main>
      )}
      <BottomNav />
      <AnimatePresence>
        {panel && (
          <motion.div className="fixed inset-0 z-[80] bg-black/75 backdrop-blur-sm flex items-start sm:items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPanel(null)}>
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              className="relative w-[min(860px,95vw)] max-h-[86dvh] overflow-y-auto bg-[#0a0f26] border rule rounded-2xl shadow-2xl [&_section]:!pt-10 [&_section]:!pb-10"
              role="dialog" aria-modal="true"
            >
              <button onClick={() => setPanel(null)} aria-label="Close" className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/85 transition-colors"><X className="w-5 h-5" /></button>
              {panel === 'about' ? <About /> : <Contact />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default App;
