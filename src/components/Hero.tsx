import { ArrowUpRight, Mail, Code2, Brain, Sparkles, FolderGit2, Star, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-radial-gradient min-h-[92vh] flex flex-col justify-center"
    >
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-blue-400/10 via-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Bento Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Greeting Badge (Ahmad Faizien style) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs backdrop-blur-md">
              <span className="text-sm">👋</span>
              <span className="text-xs font-bold text-slate-800 tracking-wider uppercase font-mono">
                AI & FULL-STACK SOFTWARE ENGINEER
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Architecting{' '}
              <span className="text-gradient block sm:inline">
                Intelligent & Full-Stack
              </span>{' '}
              Digital Products.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg font-semibold text-blue-900/90 leading-snug">
              Nikhil Chowdhary Ghanta — Final-Year B.Tech AI & ML Student at Anurag University
            </p>

            {/* Bio summary */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Specializing in artificial intelligence, machine learning, and production full-stack web applications. Experienced in developing real-world client platforms, AI audio systems, and predictive models.
            </p>

            {/* Action CTA Pill Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-slate-900 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-all duration-300 shadow-2xs hover:border-slate-400 hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links & Quick Tags */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 shadow-2xs"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-slate-200 text-blue-600 hover:text-blue-700 hover:border-blue-300 transition-all duration-200 shadow-2xs"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold font-mono text-slate-500">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                  <Brain className="w-3.5 h-3.5 text-purple-600" /> Machine Learning
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                  <Code2 className="w-3.5 h-3.5 text-blue-600" /> React & Node.js
                </span>
              </div>
            </div>

          </div>

          {/* Right Column Bento Avatar Showcase (Ahmad Faizien style) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
            
            {/* Soft Ambient Radial Background */}
            <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-2xl -z-10 animate-pulse"></div>

            {/* Avatar Container */}
            <div className="relative">
              <ProfileAvatar size="lg" showStatusBadge={true} />
            </div>

            {/* Dribbble Style Micro Highlight Floating Cards */}
            <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-sm">
              <div className="bento-card p-3.5 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Education</span>
                </div>
                <div className="text-xs font-bold text-slate-900 mt-1 font-mono">
                  Anurag Univ
                </div>
              </div>

              <div className="bento-card p-3.5 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>CGPA</span>
                </div>
                <div className="text-xs font-bold text-emerald-600 mt-1 font-mono">
                  6.65 / 10
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Metrics Ribbon Bar (Ahmad Faizien Style) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bento-card p-4 sm:p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                  3+
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  Featured Projects
                </div>
              </div>
            </div>

            <div className="bento-card p-4 sm:p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                  20+
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  Engineers Mentored
                </div>
              </div>
            </div>

            <div className="bento-card p-4 sm:p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                  6.65
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  CGPA (AI & ML)
                </div>
              </div>
            </div>

            <div className="bento-card p-4 sm:p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                  2027
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  Graduation Class
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
