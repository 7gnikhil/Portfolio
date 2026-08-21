import { useState, useEffect } from 'react';
import { AiBackgroundCanvas } from './components/AiBackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { DeveloperPresence } from './components/DeveloperPresence';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Background Interactive Neural Canvas */}
      <AiBackgroundCanvas />

      {/* Main Content Wrappers */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <DeveloperPresence />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
