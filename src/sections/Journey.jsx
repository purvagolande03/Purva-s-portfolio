import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Journey = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="journey" className="py-24 relative bg-surface/20 overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-primary shadow-[0_0_10px_rgba(56,189,248,1)]"
              style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

          <div className="space-y-16">
            {portfolioData.journey.map((item, index) => (
              <JourneyItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const JourneyItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      className={`relative flex items-center justify-between md:justify-normal ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Node */}
      <div className={`absolute left-0 md:left-1/2 flex items-center justify-center w-10 h-10 -ml-5 md:-ml-5 rounded-full border-4 border-background bg-surface z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300`}>
        <div className="w-2 h-2 bg-textMuted rounded-full group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(56,189,248,1)] transition-all duration-300" />
      </div>

      {/* Content */}
      <div className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-3rem)] glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-500 relative overflow-hidden`}>
        <div className="absolute -inset-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        <span className="text-sm font-bold text-primary mb-2 block tracking-widest uppercase opacity-80">
          Phase {item.id}
        </span>
        <h3 className="font-bold text-xl mb-3 text-textMain group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-textMuted leading-relaxed font-light">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default Journey;
