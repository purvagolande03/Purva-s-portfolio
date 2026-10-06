import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-textMuted text-sm">
          {portfolioData.personal.footerText}
        </p>
        
        <div className="flex items-center gap-6 text-sm text-textMuted">
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-primary transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
