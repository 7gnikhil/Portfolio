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
        return <Factory className="w-6 h-6 text-blue-600" />;
      case 'Music':
        return <Music className="w-6 h-6 text-purple-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-cyan-600" />;
      default:
        return <Layers className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider font-mono border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects & Live Platforms
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Real-world client platforms, AI audio software, and machine learning models built with practical engineering focus.
          </p>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {(['All', 'Full-Stack', 'AI/ML', 'Web Audio & AI'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/60'
              }`}
            >
              {tab === 'All' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        {/* PRIMARY FEATURED PROJECT BENTO CARD (MARUTHI TOOLINGS) */}
        {(activeTab === 'All' || activeTab === 'Full-Stack') && (
          <div className="mb-10">
            <div className="bento-card p-6 sm:p-8 lg:p-10 border-2 border-blue-200/80 relative overflow-hidden group">
              
              {/* Top Banner Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 text-xs font-bold font-mono">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    Primary Production Client Platform
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold font-mono border border-emerald-200">
                    Live Enterprise App
                  </span>
                </div>

                <a
                  href={primaryFeatured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold font-mono text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>maruthitools-1.onrender.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {primaryFeatured.title}
                      </h3>
                      <p className="text-xs font-bold text-blue-600 font-mono mt-0.5">
                        {primaryFeatured.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {primaryFeatured.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {primaryFeatured.highlights.slice(0, 4).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {primaryFeatured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold font-mono border border-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={primaryFeatured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-blue-600 transition-all shadow-md"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>

                    <a
                      href={primaryFeatured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Site</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(primaryFeatured)}
                      className="inline-flex items-center gap-1 px-4 py-3 rounded-full bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      <span>System Specs</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Dark Card Visual Feature */}
                <div className="lg:col-span-5">
                  <div className="bento-card-dark p-6 text-white space-y-4 shadow-xl relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800">
                      <span>CLIENT: Maruthi Toolings</span>
                      <span className="text-emerald-400 font-bold">● Deployed Live</span>
                    </div>

                    <div className="space-y-2.5 py-1">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                        <span className="text-blue-400 font-mono font-bold">● 3D Mould Component Showcase</span>
                        <p className="text-slate-300">Custom 3D mould visualizer with dynamic lightbox gallery.</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                        <span className="text-purple-400 font-mono font-bold">● AI Chatbot Assistant</span>
                        <p className="text-slate-300">Interactive conversational customer support & enquiry engine.</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-1">
                        <span className="text-cyan-400 font-mono font-bold">● Express & MongoDB Stack</span>
                        <p className="text-slate-300">REST APIs with MongoDB Atlas cloud database integration.</p>
                      </div>
                    </div>

                    <div className="pt-2 text-center">
                      <button
                        onClick={() => setSelectedProject(primaryFeatured)}
                        className="text-xs text-blue-400 hover:text-blue-300 underline font-mono cursor-pointer"
                      >
                        Explore Complete Architecture Specs →
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
              className="bento-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    {project.statusText}
                  </span>
                </div>

                {/* Title & Icon Header */}
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/80">
                    {getProjectIcon(project.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Highlights Bullet Points */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
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
