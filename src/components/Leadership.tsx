import { LEADERSHIP_INFO } from '../data/portfolioData';
import { Users, CheckCircle2 } from 'lucide-react';

export const Leadership = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#07090e] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        <div className="bg-[#0d1017] rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase">
                <Users className="w-3.5 h-3.5" />
                <span>LEADERSHIP EXPERIENCE</span>
              </div>

              <h2 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {LEADERSHIP_INFO.role}
              </h2>

              <p className="text-base text-slate-300 font-medium">
                {LEADERSHIP_INFO.scope}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  Inter-College Projects
                </div>
                <div className="px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-mono text-amber-400 font-bold">
                  20+ Members Led
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {LEADERSHIP_INFO.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3.5 hover:bg-white/[0.06] transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
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
