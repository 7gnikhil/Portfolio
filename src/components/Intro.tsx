import { motion, AnimatePresence } from 'framer-motion';

export const Intro = ({ show, onPlay }: { show: boolean; onPlay: () => void }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#040714] flex flex-col items-center justify-center px-6"
          exit={{ y: '-100%', transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
          aria-label="Intro"
        >
          <motion.div initial={{ scale: 0.82, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative flex flex-col items-center">
            <svg width="240" height="86" viewBox="0 0 240 86" fill="none" className="-mb-3 max-w-[70vw]">
              <defs>
                <linearGradient id="arcg" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1f80e0" /><stop offset="0.55" stopColor="#7dd3fc" /><stop offset="1" stopColor="#f9f9f9" />
                </linearGradient>
              </defs>
              <motion.path d="M14 78 Q120 -34 226 78" stroke="url(#arcg)" strokeWidth="4" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.15, ease: 'easeInOut', delay: 0.15 }} />
              <motion.path d="M226 62 L229.5 73 L241 76.5 L229.5 80 L226 91 L222.5 80 L211 76.5 L222.5 73 Z" fill="#f9f9f9"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.25, duration: 0.35, ease: 'backOut' }} style={{ originX: '226px', originY: '76px' }} />
            </svg>
            <span className="font-display font-extrabold text-5xl sm:text-6xl tracking-tight text-white">Nikhil<span className="text-[#3fa9f5]">+</span></span>
            <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }} className="mt-3 font-mono-d text-[11px] uppercase tracking-[.45em] text-neutral-400 text-center">
              An AI Developer Series
            </motion.span>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45, duration: 0.5 }}
            whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}
            onClick={onPlay}
            className="mt-12 inline-flex items-center gap-3 bg-white text-black font-semibold text-lg px-9 py-3.5 rounded-full shadow-[0_10px_36px_rgba(63,169,245,.35)]"
          >
            ▶ Play
          </motion.button>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.55 }} transition={{ delay: 1.8 }} className="mt-5 font-mono-d text-[10px] uppercase tracking-widest text-neutral-500">
            Press play to enter
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
