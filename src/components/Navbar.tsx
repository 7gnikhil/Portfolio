import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 pt-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 rounded-full bg-[#07090e]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
        
        {/* Brand Name Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="font-syne font-bold text-white text-sm sm:text-base tracking-widest uppercase group-hover:text-amber-400 transition-colors">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
        </a>

        {/* Desktop Editorial Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 font-mono text-xs tracking-widest text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-200 uppercase relative py-1 ${
                  isActive
                    ? 'text-amber-400 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/10 hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full text-xs font-mono font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            CONNECT
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[75px] bg-[#07090e]/90 backdrop-blur-2xl z-40 px-4 pt-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="max-w-md mx-auto bg-[#0d1017] rounded-3xl border border-white/10 p-6 space-y-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pb-2 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>NAVIGATION SECTIONS</span>
              <span className="text-amber-400 font-semibold">● Open for Work</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-mono tracking-wider transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-amber-400/10 text-amber-400 font-bold border border-amber-400/20'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
