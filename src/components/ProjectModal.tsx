import { X, ExternalLink, CheckCircle2, Factory, Music, ShieldAlert, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory':
        return <Factory className="w-8 h-8 text-blue-600" />;
      case 'Music':
        return <Music className="w-8 h-8 text-purple-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 text-cyan-600" />;
      default:
        return <Layers className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold font-mono">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {project.statusText}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 text-white flex items-center gap-4 shadow-md">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md shrink-0">
              {renderIcon(project.iconName)}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-400 font-mono font-semibold mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Overview & Architecture
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Key Technical Features
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-blue-600 transition-colors shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Site</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-900"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
