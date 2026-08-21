import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ShieldCheck, BookOpen, CheckCircle } from 'lucide-react';

export const Certifications = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-emerald-600" />;
      default:
        return <Award className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider font-mono border border-amber-200/60">
            <Award className="w-3.5 h-3.5" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Verified credentials from Wipro-NASSCOM, Cisco Networking Academy, and NPTEL IIT.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bento-card p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {cert.year}
                  </span>
                  {cert.badge && (
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 text-[11px] font-bold font-mono">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/80">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug mt-0.5">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.details}
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">
                    Core Modules Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span>{topic}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verification</span>
                <span className="text-emerald-600 font-bold">● Active Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
