import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface/30 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
          <p className="text-textMuted max-w-2xl mx-auto font-light">
            I am continuously learning and developing my proficiency in these technologies, building a strong foundation for solving complex engineering problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-8 group hover:border-primary/40 transition-colors duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="absolute -inset-20 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
              
              <h3 className="text-xl font-semibold mb-8 text-primary relative z-10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(129,140,248,0.8)] animate-pulse" />
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-4 relative z-10">
                {skillGroup.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="px-4 py-2 bg-surface/80 border border-white/5 rounded-xl text-sm font-medium text-textMain shadow-sm cursor-default flex items-center gap-2"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.05,
                      borderColor: "rgba(56, 189, 248, 0.5)",
                      boxShadow: "0 10px 20px -10px rgba(56, 189, 248, 0.3)"
                    }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 },
                      hover: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
