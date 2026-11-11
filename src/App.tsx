import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { SeriesModal } from './components/SeriesModal';
import { BottomNav } from './components/BottomNav';
import { Hero } from './components/Hero';
import { Apartment } from './components/Apartment';
import { About } from './components/About';
import { Contact } from './components/Contact';

type Panel = 'about' | 'contact' | null;

export function App() {
  const [screen, setScreen] = useState<'intro' | 'site'>('intro');
  const [series, setSeries] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);

  useEffect(() => {
    const onUi = (e: Event) => {
      const d = (e as CustomEvent).detail;
      if (d?.type === 'series') setSeries(true);
      if (d?.type === 'panel') setPanel(d.name === 'home' ? null : d.name);
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
      <main className="flex-1 min-h-0 flex flex-col w-full">
        <Hero />
        <Apartment />
      </main>
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
