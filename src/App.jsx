import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import BeyondTechnology from './sections/BeyondTechnology';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30 text-textMain overflow-x-hidden">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Journey />
              <BeyondTechnology />
              <Resume />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
