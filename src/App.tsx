import { useState, useEffect } from 'react';
import { AiBackgroundCanvas } from './components/AiBackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Leadership } from './components/Leadership';
import { Services } from './components/Services';
import { DeveloperPresence } from './components/DeveloperPresence';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'services', 'contact'];
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
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Background Interactive Neural Canvas */}
      <AiBackgroundCanvas />

      {/* Main Content Wrappers */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Leadership />
          <Services />
          <DeveloperPresence />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
