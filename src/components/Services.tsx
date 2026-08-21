import { SERVICES } from '../data/portfolioData';
import { Layout, Brain, Sparkles, Server, Rocket, ArrowUpRight } from 'lucide-react';

export const Services = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-600" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-600" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-rose-600" />;
      default:
        return <Layout className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider font-mono">
            <Rocket className="w-3.5 h-3.5" />
            <span>Capabilities & Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What I Can Build & Deliver
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Technical competencies focused on delivering production-grade web systems and intelligent AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span>Discuss a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
