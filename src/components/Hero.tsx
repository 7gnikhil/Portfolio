import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 320, y: 140 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const lensSize = isMobile ? 150 : 230;

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 320, y: 140 });
      }}
      className="relative min-h-screen bg-editorial-dark text-white pt-24 pb-12 px-4 sm:px-8 lg:px-16 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Background Atmosphere Lights */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-orange-500/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Subtle Matrix Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 my-auto py-8 max-w-7xl mx-auto w-full flex flex-col justify-center">
        
        {/* Top Status Ribbon */}
        <div className="mb-6 sm:mb-8 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
              AI / ML ENTHUSIAST & FULL-STACK DEVELOPER
            </span>
          </div>
          <span className="hidden sm:inline text-xs font-mono text-slate-500">
            / HYDERABAD, IN
          </span>
        </div>

        {/* Dynamic Interactive Typography Showcase */}
        <div className="relative py-4 sm:py-6">
          
          {/* Main Typography Base Layer */}
          <div className="relative z-10">
            {/* Top Line: Creative + AI & ML */}
            <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-8 md:gap-x-10 leading-[0.9]">
              <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-bold text-white tracking-tight">
                Creative
              </h1>
              <span className="font-serif-accent italic text-4xl sm:text-7xl md:text-8xl lg:text-[125px] font-normal text-amber-400 tracking-normal">
                AI & ML
              </span>
            </div>

            {/* Bottom Line: Full-Stack Engineer */}
            <div className="flex flex-wrap items-baseline justify-start sm:justify-end gap-x-4 sm:gap-x-6 mt-1 sm:mt-2 md:-mt-4">
              <span className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[130px] font-extrabold text-white tracking-tight leading-[0.88]">
                Full-Stack
              </span>
              <span className="font-serif-accent italic text-5xl sm:text-7xl md:text-8xl lg:text-[130px] font-normal text-amber-400 tracking-tight leading-[0.88]">
                Engineer
              </span>
            </div>
          </div>

          {/* Floating Magnifier Circle Lens Effect */}
          <div
            className="magnifier-lens hidden sm:block pointer-events-none transition-all duration-75 ease-out"
            style={{
              width: `${lensSize}px`,
              height: `${lensSize}px`,
              left: `${mousePos.x - lensSize / 2}px`,
              top: `${mousePos.y - lensSize / 2}px`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            {/* Refracted & Zoomed Text Duplicate Inside the Lens */}
            <div
              className="absolute pointer-events-none w-[1300px] select-none"
              style={{
                left: `-${mousePos.x - lensSize / 2}px`,
                top: `-${mousePos.y - lensSize / 2}px`,
                transform: 'scale(1.15)',
                transformOrigin: `${mousePos.x}px ${mousePos.y}px`,
              }}
            >
              <div className="relative">
                <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-8 md:gap-x-10 leading-[0.9]">
                  <span className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-bold text-white tracking-tight chromatic-text">
                    Creative
                  </span>
                  <span className="font-serif-accent italic text-4xl sm:text-7xl md:text-8xl lg:text-[125px] font-normal text-amber-300 tracking-normal chromatic-text">
                    AI & ML
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline justify-start sm:justify-end gap-x-4 sm:gap-x-6 mt-1 sm:mt-2 md:-mt-4">
                  <span className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[130px] font-extrabold text-white tracking-tight leading-[0.88] chromatic-text">
                    Full-Stack
                  </span>
                  <span className="font-serif-accent italic text-5xl sm:text-7xl md:text-8xl lg:text-[130px] font-normal text-amber-300 tracking-tight leading-[0.88] chromatic-text">
                    Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bio Subtitle & Quick CTA Buttons */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          
          <div className="md:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              <span className="text-white font-semibold">{PERSONAL_INFO.name}</span> — Final-Year B.Tech AI & ML Student at Anurag University. AI enthusiast & full-stack developer dedicated to building practical technology, machine learning models, and real-world web software.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all duration-300 shadow-lg hover:shadow-amber-400/20"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-300 backdrop-blur-md"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Get In Touch</span>
              </a>

              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-start md:justify-end">
            <div className="flex items-center gap-6 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">3+</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Live Projects</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">6.65</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">CGPA (AI & ML)</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">2027</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Grad Class</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Editorial Bottom Metadata Footer Bar */}
      <div className="relative z-10 pt-8 border-t border-white/10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-12 gap-6 text-xs text-slate-400 font-mono tracking-wider">
        
        {/* Column 1: Core Specialties */}
        <div className="md:col-span-4 space-y-1">
          <div className="text-white font-bold uppercase tracking-widest text-[11px]">
            AI & ML / FULL-STACK / WEB AUDIO
          </div>
          <div className="text-slate-500 text-[10px] uppercase">
            AVAILABLE FOR AI & SOFTWARE ENGINEERING ROLES
          </div>
        </div>

        {/* Column 2: Location & Education */}
        <div className="md:col-span-4 space-y-1">
          <div className="text-white font-bold uppercase tracking-widest text-[11px]">
            BASED IN HYDERABAD, INDIA
          </div>
          <div className="text-slate-500 text-[10px] uppercase">
            STUDYING AT ANURAG UNIVERSITY
          </div>
        </div>

        {/* Column 3: Scroll Indicator */}
        <div className="col-span-2 md:col-span-4 flex items-center justify-end gap-3 text-slate-400">
          <span className="hidden sm:inline uppercase text-[10px] tracking-widest text-slate-500">
            SCROLL DOWN
          </span>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[1px] h-6 bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
            <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>

      </div>

    </section>
  );
};
