import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'beyond', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Beyond Tech', href: '#beyond', id: 'beyond' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-100 glass shadow-lg border-b border-white/5' : 'opacity-0'}`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-black tracking-tighter relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                P
              </span>
              <span className="text-textMain group-hover:text-primary transition-colors">G.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 glass px-2 py-1 rounded-full border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id ? 'text-textMain' : 'text-textMuted hover:text-textMain'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textMuted hover:text-primary p-2 glass rounded-full focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.id 
                      ? 'bg-primary/20 text-primary border border-primary/20' 
                      : 'text-textMuted hover:bg-white/5 hover:text-textMain'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
