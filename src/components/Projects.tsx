import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Factory, Music, ShieldAlert, Layers, ArrowRight, CheckCircle2, Star } from 'lucide-react';
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
        return <Factory className="w-6 h-6 text-white" />;
      case 'Music':
        return <Music className="w-6 h-6 text-white" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-white" />;
      default:
        return <Layers className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects & Engineering Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real-world full-stack web platforms, AI audio systems, and machine learning models built for actual companies and practical applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {(['All', 'Full-Stack', 'AI/ML', 'Web Audio & AI'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab === 'All' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        {/* PRIMARY FEATURED PROJECT BANNER CARD (MARUTHI TOOLINGS) */}
        {(activeTab === 'All' || activeTab === 'Full-Stack') && (
          <div className="mb-12">
            <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-blue-200 shadow-xl relative overflow-hidden group hover:border-blue-400 transition-all duration-300">
              
              {/* Top Featured Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold font-mono">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    Primary Featured Production Platform
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold font-mono border border-emerald-200">
                    Real-World Client App
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-500 font-medium">
                  Deployed on Vercel & Render
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side Info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                      <Factory className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {primaryFeatured.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 font-mono">
                        {primaryFeatured.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {primaryFeatured.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {primaryFeatured.highlights.slice(0, 4).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-3 flex flex-wrap gap-2">
                    {primaryFeatured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold font-mono border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a
                      href={primaryFeatured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-blue-600 transition-colors shadow-md"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>github.com/7gnikhil/MaruthiTOOLS</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(primaryFeatured)}
                      className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-blue-50 text-blue-700 font-semibold text-sm hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer"
                    >
                      <span>View Full System Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Side Visual Showcase Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl p-6 bg-slate-900 text-white space-y-4 shadow-2xl relative overflow-hidden border border-slate-800">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800">
                      <span>CLIENT: Maruthi Toolings</span>
                      <span className="text-emerald-400">● Live Platform</span>
                    </div>

                    <div className="space-y-3 py-2">
                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs space-y-1">
                        <span className="text-blue-400 font-mono font-semibold">● 3D Mould Showcase & Lightbox</span>
                        <p className="text-slate-300">Custom 3D tool visualizations and product galleries.</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs space-y-1">
                        <span className="text-purple-400 font-mono font-semibold">● AI Chatbot Assistance</span>
                        <p className="text-slate-300">Conversational AI customer support & enquiry routing.</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs space-y-1">
                        <span className="text-cyan-400 font-mono font-semibold">● Production Cloud Stack</span>
                        <p className="text-slate-300">Express REST APIs with MongoDB Atlas cloud database.</p>
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

        {/* SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold font-mono">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500 font-mono">
                    {project.statusText}
                  </span>
                </div>

                {/* Title & Icon Header */}
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                    {getProjectIcon(project.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Key Highlights Quick List */}
                <div className="space-y-1.5 pt-1">
                  {project.highlights.slice(0, 3).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold font-mono"
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
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
