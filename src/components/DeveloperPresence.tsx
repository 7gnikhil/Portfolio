import { ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const DeveloperPresence = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#07090e] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        <div className="bg-[#0d1017] rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(245,158,11,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase">
                <GithubIcon className="w-4 h-4" />
                <span>DEVELOPER PROFILE</span>
              </div>

              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Explore My Code & Repositories
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                I regularly commit code for full-stack applications, machine learning models, and real-world client systems. Discover my repositories and live projects on GitHub.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4 text-slate-950" />
                  <span>github.com/7gnikhil</span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#07090e] border border-white/10 p-6 shadow-2xl space-y-3 font-mono text-xs text-slate-300">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold">7gnikhil / developer-terminal</span>
                </div>

                <div className="space-y-2.5 pt-1 text-slate-300">
                  <div className="flex items-center justify-between text-amber-400">
                    <span>$ git status</span>
                    <span className="text-emerald-400 text-[10px] font-bold">● Active</span>
                  </div>
                  <div className="text-slate-400">
                    &gt; Main repos: <span className="text-white">MaruthiTOOLS</span>, <span className="text-white">MusicMitra</span>
                  </div>
                  <div className="text-slate-400">
                    &gt; Primary tech: <span className="text-amber-400">Python (AI/ML)</span>, <span className="text-blue-400">TypeScript</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="font-bold text-amber-400">feat: MaruthiTOOLS full-stack platform</span>
                      <span className="text-[10px] text-slate-400">Verified</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Added MongoDB Atlas, Express backend & live Render deployment.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="font-bold text-amber-400">feat: MusicMitra Gemini AI lyrics sync</span>
                      <span className="text-[10px] text-slate-400">Verified</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Added Demucs vocal isolation & real-time recorder.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
