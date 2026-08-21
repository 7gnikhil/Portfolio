import { GraduationCap, Cpu, Target, MapPin, Sparkles, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#07090e] text-white relative overflow-hidden">
      {/* Background Soft Glow Spotlight */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-blue-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>01 / ABOUT & BACKGROUND</span>
          </div>
          
          <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Aspiring AI & ML Enthusiast <br />
            <span className="font-serif-accent italic font-normal text-amber-400">
              & Full-Stack Engineer
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Combining machine learning models with practical full-stack software development to build intuitive, real-world solutions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Academic Education Spotlight (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0d1017] rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="space-y-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  ACADEMIC DEGREE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {PERSONAL_INFO.degree}
                </h3>
                <p className="text-sm font-mono text-slate-400 mt-1">
                  {PERSONAL_INFO.university}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Final-year undergraduate specializing in Artificial Intelligence & Machine Learning. Coursework includes machine learning algorithms, deep neural networks, web engineering, and software architecture.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                CLASS OF 2027
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-mono font-bold">
                CGPA: {PERSONAL_INFO.cgpa}
              </span>
            </div>
          </div>

          {/* Bento Card 2: Bio & Philosophy (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0d1017] rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-2xl">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-amber-400 text-xs font-mono border border-white/10">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI + SOFTWARE ENGINEERING SYNERGY</span>
              </div>

              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Bridging Machine Learning Models with Real-World Full-Stack Web Applications.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/10">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">Practical Engineering</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Real-world production tools, AI audio systems & predictive ML models.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider">Location</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Hyderabad, Telangana, India.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
