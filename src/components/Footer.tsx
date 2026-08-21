import { ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-xs text-slate-400 font-mono">
              AI & ML Engineer • Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 text-blue-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} Nikhil Chowdhary Ghanta. All rights reserved.
          </span>
          <span className="text-slate-400">
            Anurag University • Class of 2027
          </span>
        </div>
      </div>
    </footer>
  );
};
