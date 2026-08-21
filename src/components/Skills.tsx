import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, BrainCircuit, Cpu, Layers, Database, Wrench, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#07090e] text-white relative overflow-hidden">
      {/* Soft Ambient Light Spotlight */}
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>02 / TECHNICAL MATRIX</span>
          </div>
          
          <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Skills & Core <br />
            <span className="font-serif-accent italic font-normal text-amber-400">
              Technical Expertise
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured breakdown of programming languages, machine learning frameworks, databases, and software engineering tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start overflow-x-auto pb-4 mb-10 no-scrollbar gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider font-bold shrink-0 transition-all duration-200 uppercase cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Bento Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="bg-[#0d1017] rounded-3xl p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                      {getCategoryIcon(catGroup.icon)}
                    </div>
                    <h3 className="text-lg font-bold font-syne text-white">
                      {catGroup.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {catGroup.skills.length} Items
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {catGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-mono font-medium hover:border-amber-400/50 hover:text-amber-400 transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>VERIFIED TECH</span>
                <span className="text-amber-400 font-bold">PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
