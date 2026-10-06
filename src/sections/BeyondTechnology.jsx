import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, TrendingUp, Music, Map, BookHeart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('management')) return <Users size={28} />;
  if (t.includes('leadership')) return <TrendingUp size={28} />;
  if (t.includes('entrepreneurship')) return <Lightbulb size={28} />;
  if (t.includes('dance')) return <Music size={28} />;
  if (t.includes('exploring')) return <Map size={28} />;
  if (t.includes('teaching')) return <BookHeart size={28} />;
  return <Lightbulb size={28} />;
};

const BeyondTechnology = () => {
  return (
    <section id="beyond" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Technology</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
          <p className="text-textMuted max-w-2xl mx-auto font-light">
            Interests and activities that help me grow, build perspective, and approach problem-solving creatively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.beyondTechnology.map((item, index) => (
            <motion.div 
              key={index} 
              className="glass p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 border border-white/5 hover:border-white/20 group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                {getIcon(item.title)}
              </div>
              
              <div className="p-4 bg-surface/50 rounded-xl inline-block mb-6 border border-white/5 text-primary group-hover:text-secondary group-hover:shadow-[0_0_15px_rgba(129,140,248,0.3)] transition-all duration-300">
                {getIcon(item.title)}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-textMain group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-textMain group-hover:to-textMuted transition-all">
                {item.title}
              </h3>
              <p className="text-textMuted leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondTechnology;
