import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { BottomNav } from './components/BottomNav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <Intro />
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 sm:px-10">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
export default App;
