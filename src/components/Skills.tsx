import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, BrainCircuit, Cpu, Layers, Database, Wrench, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-rose-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider font-mono border border-indigo-200/60">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            A structured breakdown of programming languages, machine learning frameworks, databases, and software engineering tools.
          </p>
        </div>

        {/* Filter Tabs with Touch-scroll on Mobile */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar scroll-smooth gap-2 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200 shadow-2xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(catGroup.icon)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {catGroup.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-100">
                    {catGroup.skills.length} Skills
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {catGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-medium shadow-2xs hover:border-blue-400 hover:text-blue-600 transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Accent */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Core Competency</span>
                <span className="text-blue-600 font-semibold">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
