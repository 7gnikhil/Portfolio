import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, BookOpen, CheckCircle } from 'lucide-react';

export const Certifications = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-400" />;
      default:
        return <Award className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-[#07090e] text-white relative overflow-hidden">
      {/* Background Atmosphere Light */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-blue-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <Award className="w-3.5 h-3.5" />
            <span>04 / PROFESSIONAL CREDENTIALS</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Verified Training & <br />
            <span className="font-serif-accent italic font-normal text-amber-400">
              Certifications
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Verified credentials from Wipro-NASSCOM, Cisco Networking Academy, and NPTEL IIT.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#0d1017] rounded-3xl p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {cert.year}
                  </span>
                  {cert.badge && (
                    <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-[11px] font-bold font-mono">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <h3 className="font-syne text-base font-bold text-white leading-snug mt-0.5">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.details}
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    Core Modules Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs font-mono font-medium"
                      >
                        <CheckCircle className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{topic}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>VERIFICATION</span>
                <span className="text-emerald-400 font-bold">● ACTIVE CREDENTIAL</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
