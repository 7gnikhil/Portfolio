import { ExternalLink, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const DeveloperPresence = () => {
  return (
    <section className="py-20 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bento-card-dark p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider font-mono">
                <GithubIcon className="w-4 h-4" />
                <span>Developer Profile</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
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
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-slate-950 bg-white hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  <GithubIcon className="w-5 h-5 text-slate-900" />
                  <span>github.com/7gnikhil</span>
                  <ExternalLink className="w-4 h-4 text-slate-700" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-2xl space-y-3 font-mono text-xs text-slate-300">
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-bold">7gnikhil / developer-terminal</span>
                </div>

                <div className="space-y-2 pt-1 text-slate-300">
                  <div className="flex items-center justify-between text-blue-400">
                    <span>$ git status</span>
                    <span className="text-emerald-400 text-[10px] font-bold">● Active</span>
                  </div>
                  <div className="text-slate-400">
                    &gt; Main repos: <span className="text-white">MaruthiTOOLS</span>, <span className="text-white">MusicMitra</span>
                  </div>
                  <div className="text-slate-400">
                    &gt; Primary languages: <span className="text-blue-300">TypeScript</span>, <span className="text-purple-300">Python</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="font-bold text-emerald-400">feat: MaruthiTOOLS full-stack platform</span>
                      <span className="text-[10px] text-slate-400">Verified</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Added MongoDB Atlas, Express backend & live Render deployment.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="font-bold text-purple-400">feat: MusicMitra Gemini AI lyrics sync</span>
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
