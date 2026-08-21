import { ArrowRight, Mail, Code2, Brain, Sparkles, Terminal, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 md:pb-28 overflow-hidden bg-radial-gradient min-h-[92vh] flex items-center"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[400px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-xs backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 tracking-wide uppercase font-mono">
                AI/ML • Full Stack • Software Development
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-gradient block sm:inline">
                Nikhil Chowdhary.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl font-medium text-blue-900/90 leading-snug">
              AI & ML Engineer | Full-Stack Developer | Building Practical Technology Solutions
            </p>

            {/* Bio paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Call to action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 text-center"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-all duration-300 shadow-xs hover:border-slate-400 hover:-translate-y-0.5 text-center"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Highlights & Socials footer line */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 shadow-xs"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-blue-600 hover:text-blue-700 hover:border-blue-300 transition-all duration-200 shadow-xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200">
                  <Brain className="w-3.5 h-3.5 text-purple-600" /> AI & ML Focus
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" /> React & Express
                </span>
              </div>
            </div>

          </div>

          {/* Right Hero Avatar Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
            
            {/* Pulsing Aura */}
            <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-blue-400/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
            
            {/* Avatar Component */}
            <div className="relative">
              <ProfileAvatar size="lg" showStatusBadge={true} />
            </div>

            {/* Quick Metrics Bar below avatar */}
            <div className="mt-8 grid grid-cols-3 gap-2.5 w-full max-w-sm">
              <div className="glass-card p-3 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <div className="text-[10px] text-slate-400 font-mono uppercase">University</div>
                <div className="text-xs font-bold text-slate-800 mt-0.5">Anurag</div>
              </div>

              <div className="glass-card p-3 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <div className="text-[10px] text-slate-400 font-mono uppercase">CGPA</div>
                <div className="text-xs font-bold text-emerald-600 mt-0.5">6.65 / 10</div>
              </div>

              <div className="glass-card p-3 rounded-xl border border-slate-200/80 text-center shadow-2xs">
                <div className="text-[10px] text-slate-400 font-mono uppercase">Graduation</div>
                <div className="text-xs font-bold text-blue-600 mt-0.5">2027</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
