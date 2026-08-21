import React from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, Factory, Music, ShieldAlert, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory':
        return <Factory className="w-6 h-6 text-amber-400" />;
      case 'Music':
        return <Music className="w-6 h-6 text-amber-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      default:
        return <Layers className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#07090e]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#0d1017] rounded-3xl border border-white/10 max-w-3xl w-full p-6 sm:p-9 shadow-2xl relative space-y-6 text-white my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              {getProjectIcon(project.iconName)}
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                {project.category} • {project.statusText}
              </span>
              <h2 className="font-syne text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>
          <p className="text-xs font-mono text-slate-400">{project.subtitle}</p>
        </div>

        {/* Full Description */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            System Overview & Architecture
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            Key Architecture Deliverables:
          </h4>
          <div className="space-y-2">
            {project.highlights.map((hl, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Technologies & Frameworks:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
