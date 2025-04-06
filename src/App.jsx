import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import SkillGrid from './sections/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  return (
    <div className="overflow-x-hidden">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <section id="home" className="relative h-screen flex justify-center items-center custom-gradient-bg">
        <div className="absolute inset-0 custom-gradient-overlay z-[-1]"></div>
        <Home />
      </section>

      <section
        id="about"
        className="relative min-h-screen text-white custom-gradient-bg pt-16 sm:pt-20 px-4 scroll-mt-16"
      >
        <div className="absolute inset-0 custom-gradient-overlay z-[-1]"></div>
        <About />
      </section>

      <section id="skills" className="min-h-screen py-20 text-White custom-gradient-bg mt-[-100px] ">
        <div className="absolute inset-0 custom-gradient-overlay z-[-1] "></div>
        <Skills />
      </section>
      <section id="experience" className="min-h-screen py-20 text-White custom-gradient-bg">
        <div className="absolute inset-0 custom-gradient-overlay z-[-1]"></div>
        <WorkExperience />
      </section>
      <section id="projects" className="min-h-screen py-20 text-White custom-gradient-bg">
        <div className="absolute inset-0 custom-gradient-overlay z-[-1]"></div>
        <Projects />
      </section>
      <section id="contact" className="min-h-screen py-20 text-White custom-gradient-bg">
        <div className="absolute inset-0 custom-gradient-overlay z-[-1]"></div>
        <Contact />
      </section>
    </div>
  );
}


export default App;
