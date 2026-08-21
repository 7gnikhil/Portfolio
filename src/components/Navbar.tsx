import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'What I Build', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-md'
          : 'bg-slate-50/70 backdrop-blur-xs py-4 border-b border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Text Branding without NCG Icon Box */}
          <a
            href="#home"
            className="flex items-center gap-2 group transition-transform duration-200 focus:outline-none"
          >
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
                <span>{PERSONAL_INFO.shortName}</span>
                <span className="h-2 w-2 rounded-full bg-blue-600 inline-block group-hover:scale-125 transition-transform"></span>
                <Sparkles className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide font-mono">
                AI & ML • Full Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/90 font-bold shadow-xs border border-blue-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 focus:outline-none shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[62px] bg-slate-900/60 backdrop-blur-md z-40 transition-all duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pb-2 border-b border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>NAVIGATION MENU</span>
              <span className="text-blue-600 font-semibold">Class of 2027</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-blue-50 text-blue-600 font-bold border border-blue-200/60'
                    : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-md"
              >
                <span>Explore Featured Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
