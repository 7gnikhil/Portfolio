import { GraduationCap, Cpu, Code, Lightbulb, Target, Award, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider font-mono border border-blue-200/60">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>About & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Aspiring Software & AI Engineer
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Dedicated to combining artificial intelligence with practical full-stack software development to build intuitive, real-world solutions.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Card 1: Education Spotlight (5 Cols) */}
          <div className="md:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono block mb-1">
                  Academic Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {PERSONAL_INFO.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-600 mt-1">
                  {PERSONAL_INFO.university}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Final-year undergraduate pursuing Artificial Intelligence & Machine Learning specialization with strong coursework in algorithm design, neural networks, and software engineering.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold font-mono">
                Class of 2027
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-bold font-mono">
                CGPA: {PERSONAL_INFO.cgpa}
              </span>
            </div>
          </div>

          {/* Bento Card 2: Bio & Philosophy (7 Cols) */}
          <div className="md:col-span-7 bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold font-mono">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI + Software Engineering Synergy</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Bridging Machine Learning Models with Real-World Full-Stack Web Applications.
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-100">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
                <Target className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Practical Focus</h4>
                  <p className="text-[11px] text-slate-500">Real-world production tools & AI audio web systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
                <MapPin className="w-4.5 h-4.5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Location</h4>
                  <p className="text-[11px] text-slate-500">Hyderabad, Telangana, India.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
