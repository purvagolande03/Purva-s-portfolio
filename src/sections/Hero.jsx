import React, { Suspense } from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Canvas3D from '../components/Canvas3D';

const Hero = () => {
  const { name, role, description, github, linkedin, email } = portfolioData.personal;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* 3D Background / Right side object */}
      <div className="absolute inset-0 md:inset-y-0 md:right-0 md:w-[60%] z-0">
        <Suspense fallback={null}>
          <Canvas3D />
        </Suspense>
      </div>

      {/* Subtle digital grid background overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-background/80 md:bg-background/40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-0 pointer-events-none hidden md:block" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col justify-center text-center md:text-left pt-10 md:pt-0">
          <motion.div variants={itemVariants} className="relative inline-block w-max mx-auto md:mx-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-textMain to-textMuted drop-shadow-sm">
                {name}
              </span>
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-20 -z-10 rounded-full" />
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-primary font-medium mb-6 max-w-2xl mx-auto md:mx-0 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
            {role}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-textMuted mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
            {description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <a
              href="#projects"
              className="group relative flex items-center gap-2 bg-primary text-background px-8 py-3 rounded-full font-semibold overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">View Projects</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resume"
              className="flex items-center gap-2 glass hover:bg-white/10 text-textMain px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              View Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-6">
            {[
              { icon: <Github size={22} />, url: github, label: "GitHub" },
              { icon: <Linkedin size={22} />, url: linkedin, label: "LinkedIn" },
              { icon: <Mail size={22} />, url: `mailto:${email}`, label: "Email" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target={social.url.startsWith('http') ? "_blank" : undefined}
                rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-3 glass rounded-full text-textMuted hover:text-primary hover:scale-110 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300 relative group"
                aria-label={social.label}
              >
                {social.icon}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity text-primary pointer-events-none">
                  {social.label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
