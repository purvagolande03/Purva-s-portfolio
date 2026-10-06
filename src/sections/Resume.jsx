import React from 'react';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-12 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
        </motion.div>
        
        <motion.div 
          className="glass-card p-12 max-w-2xl mx-auto flex flex-col items-center relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-20 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
          
          <motion.div 
            className="w-24 h-24 bg-surface rounded-full border border-primary/20 flex items-center justify-center mb-8 relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full border border-primary/40 animate-[spin_4s_linear_infinite]" />
            <FileText size={40} className="text-primary relative z-10" />
          </motion.div>
          
          <h3 className="text-2xl font-semibold mb-4 text-textMain">Curriculum Vitae</h3>
          <p className="text-textMuted mb-10 leading-relaxed max-w-md font-light">
            Review my full academic and professional details, technical skills, and project experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-10">
            <a 
              href={portfolioData.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center justify-center gap-2 bg-primary text-background px-8 py-3 rounded-full font-semibold overflow-hidden shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
              <FileText size={18} className="relative" />
              <span className="relative">View Resume</span>
            </a>
            
            <a 
              href={portfolioData.personal.resumePath}
              download
              className="group/btn flex items-center justify-center gap-2 border border-white/20 hover:border-primary/50 hover:bg-primary/10 text-textMain px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              <Download size={18} className="group-hover/btn:animate-bounce" />
              <span>Download</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
