import { GraduationCap, Cpu, Code, Lightbulb, Target } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Aspiring Software & AI Engineer
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Dedicated to combining artificial intelligence with practical full-stack software development to build intuitive, real-world solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 border border-slate-200 shadow-md relative overflow-hidden group hover:border-blue-300 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider font-mono">
                    Education
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {PERSONAL_INFO.degree}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">
                    {PERSONAL_INFO.university}
                  </p>
                  
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold font-mono">
                      2023 — 2027
                    </span>
                    <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-semibold">
                      CGPA: {PERSONAL_INFO.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Practical Real-World Focus</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Building tools that serve real user needs, like production industrial platforms and AI audio translation systems.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">AI & Full-Stack Synergy</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Merging modern Machine Learning algorithms, LLMs, and RAG architectures with responsive web UIs.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4 text-base leading-relaxed">
              <p>
                I am a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Anurag University, Hyderabad. With expected graduation in 2027, my academic journey has provided me with a strong mathematical and computational foundation in AI/ML algorithms, data structures, and software engineering principles.
              </p>
              <p>
                Beyond coursework, I actively apply my skills by building full-stack applications and experimenting with state-of-the-art AI frameworks. I believe software engineering is most impactful when combined with machine learning to solve authentic operational challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Software Engineering</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Clean code practices, object-oriented design, RESTful APIs, and responsive React frontend development.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Continuous Learning</h4>
                <p className="text-xs text-slate-600 leading-normal">
                  Constantly exploring emerging AI models, LLM integrations, vector storage, and modern cloud deployment pipelines.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
