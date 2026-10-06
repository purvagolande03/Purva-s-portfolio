import React from 'react';
import { BookOpen, Code2, Cpu, Rocket, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const FloatingIcon = ({ icon, delay, yOffset, xOffset }) => {
  return (
    <motion.div
      className="absolute glass p-4 rounded-2xl border border-primary/20 text-primary shadow-[0_0_15px_rgba(56,189,248,0.2)]"
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      style={{ top: yOffset, left: xOffset }}
    >
      {icon}
    </motion.div>
  );
};

const About = () => {
  const highlights = [
    { icon: <Code2 size={24} className="text-primary" />, text: "Learning through projects" },
    { icon: <BookOpen size={24} className="text-secondary" />, text: "Continuous improvement" },
    { icon: <Cpu size={24} className="text-primary" />, text: "Building practical systems" },
    { icon: <Rocket size={24} className="text-secondary" />, text: "Exploring cloud tech" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            className="relative h-[400px] hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="text-center z-10 glass-card p-6 border border-primary/30 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
              <span className="text-2xl font-bold gradient-text block mb-2">CS Student</span>
              <span className="text-sm text-textMuted uppercase tracking-widest">VIT Chennai</span>
            </div>

            <FloatingIcon icon={<Code2 size={28} />} delay={0} yOffset="10%" xOffset="15%" />
            <FloatingIcon icon={<Cloud size={28} />} delay={1.5} yOffset="20%" xOffset="70%" />
            <FloatingIcon icon={<Database size={28} />} delay={0.8} yOffset="70%" xOffset="20%" />
            <FloatingIcon icon={<Cpu size={28} />} delay={2.2} yOffset="60%" xOffset="75%" />
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              className="glass-card p-8 md:p-10 relative group hover:border-primary/40 transition-colors duration-500"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center gap-3">
                My Background
              </h3>
              <p className="text-textMuted leading-relaxed text-lg font-light relative z-10">
                {portfolioData.personal.about}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-white/[0.03] transition-colors border border-white/5 hover:border-white/20 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="p-3 bg-surface rounded-xl shadow-inner group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all">
                    {item.icon}
                  </div>
                  <span className="font-medium text-textMain text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
