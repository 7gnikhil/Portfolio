import { ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090e] text-white py-16 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-syne font-bold text-xl text-white tracking-wider uppercase">
                {PERSONAL_INFO.name}
              </span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-xs text-slate-400 font-mono">
              AI & ML Enthusiast • Full-Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} NIKHIL CHOWDHARY GHANTA. ALL RIGHTS RESERVED.
          </span>
          <span className="text-slate-400">
            ANURAG UNIVERSITY • B.TECH AI & ML (2027)
          </span>
        </div>
      </div>
    </footer>
  );
};
