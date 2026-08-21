import { LEADERSHIP_INFO } from '../data/portfolioData';
import { Users, CheckCircle2 } from 'lucide-react';

export const Leadership = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bento-card-dark p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider font-mono">
                <Users className="w-3.5 h-3.5" />
                <span>Leadership Experience</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {LEADERSHIP_INFO.role}
              </h2>

              <p className="text-base text-blue-200/90 font-medium">
                {LEADERSHIP_INFO.scope}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white/80">
                  Inter-College Projects
                </div>
                <div className="px-4 py-2 rounded-full bg-blue-600/40 border border-blue-400/40 text-xs font-mono text-blue-200 font-bold">
                  20+ Members Led
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {LEADERSHIP_INFO.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start gap-3 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
