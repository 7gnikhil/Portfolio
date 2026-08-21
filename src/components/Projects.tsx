import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Factory, Music, ShieldAlert, Layers, ArrowUpRight, CheckCircle2, Star, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'All' | 'Full-Stack' | 'AI/ML' | 'Web Audio & AI'>('All');

  const filteredProjects =
    activeTab === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  const primaryFeatured = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const secondaryProjects = filteredProjects.filter((p) => p.id !== primaryFeatured.id);

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
    <section id="projects" className="py-24 sm:py-32 bg-[#07090e] text-white relative overflow-hidden">
      {/* Glow Spotlight */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-gradient-to-br from-blue-600/15 via-amber-500/10 to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / FEATURED WORK</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Selected Engineering <br />
            <span className="font-serif-accent italic font-normal text-amber-400">
              Projects & Platforms
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Real-world production client platforms, AI audio systems, and machine learning models built with practical engineering focus.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 mb-12 flex-wrap">
          {(['All', 'Full-Stack', 'AI/ML', 'Web Audio & AI'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider font-bold transition-all duration-200 uppercase cursor-pointer ${
                activeTab === tab
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab === 'All' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        {/* PRIMARY FEATURED PROJECT (MARUTHI TOOLINGS) */}
        {(activeTab === 'All' || activeTab === 'Full-Stack') && (
          <div className="mb-10">
            <div className="bg-[#0d1017] rounded-3xl p-7 sm:p-10 border border-amber-400/40 relative overflow-hidden group shadow-2xl">
              
              {/* Top Banner Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30 text-xs font-mono font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    PRIMARY PRODUCTION CLIENT PLATFORM
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-400/30">
                    LIVE ENTERPRISE APP
                  </span>
                </div>

                <a
                  href={primaryFeatured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:underline"
                >
                  <span>maruthitools-1.onrender.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {primaryFeatured.title}
                      </h3>
                      <p className="text-xs font-mono font-bold text-amber-400 mt-0.5 uppercase tracking-wider">
                        {primaryFeatured.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {primaryFeatured.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {primaryFeatured.highlights.slice(0, 4).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {primaryFeatured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/5 text-slate-200 text-xs font-mono border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={primaryFeatured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Repo</span>
                    </a>

                    <a
                      href={primaryFeatured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Site</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(primaryFeatured)}
                      className="inline-flex items-center gap-1 px-4 py-3 rounded-full bg-white/10 text-white font-mono text-xs uppercase font-bold hover:bg-white/20 border border-white/15 transition-colors cursor-pointer"
                    >
                      <span>Specs</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Dark Visual Feature */}
                <div className="lg:col-span-5">
                  <div className="bg-[#07090e] rounded-2xl p-6 border border-white/10 space-y-4 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/10">
                      <span>CLIENT: Maruthi Toolings</span>
                      <span className="text-emerald-400 font-bold">● Deployed Live</span>
                    </div>

                    <div className="space-y-2.5 py-1">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
                        <span className="text-amber-400 font-mono font-bold">● 3D Mould Component Showcase</span>
                        <p className="text-slate-300">Custom 3D mould visualizer with dynamic lightbox gallery.</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
                        <span className="text-amber-400 font-mono font-bold">● AI Chatbot Assistant</span>
                        <p className="text-slate-300">Interactive conversational customer support & enquiry engine.</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
                        <span className="text-amber-400 font-mono font-bold">● Express & MongoDB Stack</span>
                        <p className="text-slate-300">REST APIs with MongoDB Atlas cloud database integration.</p>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <button
                        onClick={() => setSelectedProject(primaryFeatured)}
                        className="text-xs text-amber-400 hover:text-amber-300 underline font-mono cursor-pointer uppercase tracking-wider"
                      >
                        Explore Complete Specs →
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* SECONDARY PROJECTS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0d1017] rounded-3xl p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-amber-400 text-xs font-mono font-bold border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.statusText}
                  </span>
                </div>

                {/* Title & Icon Header */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                    {getProjectIcon(project.iconName)}
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-[11px] font-mono border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 cursor-pointer uppercase tracking-wider"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
