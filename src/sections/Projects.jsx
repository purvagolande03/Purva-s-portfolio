import React, { useRef, useState } from 'react';
import { ExternalLink, Github, Leaf, Battery, BarChart3, ChevronRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Assign an icon based on project title
  let ProjectIcon = BarChart3;
  let iconColor = "text-primary";
  if (project.title.toLowerCase().includes("kisan")) {
    ProjectIcon = Leaf;
    iconColor = "text-emerald-400";
  } else if (project.title.toLowerCase().includes("battery")) {
    ProjectIcon = Battery;
    iconColor = "text-yellow-400";
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full perspective-[1000px] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <div 
        className="glass-card flex flex-col h-full overflow-hidden group hover:border-primary/50 transition-colors duration-300 relative bg-surface/50"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

        <div className="p-8 flex-grow relative z-10 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className={`p-4 bg-background/50 rounded-2xl border border-white/5 shadow-inner ${iconColor}`}>
              <ProjectIcon size={28} />
            </div>
            <span className="text-xs font-mono text-textMuted tracking-wider bg-surface px-3 py-1 rounded-full border border-white/10">
              0{index + 1}
            </span>
          </div>
          
          <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-textMuted mb-8 leading-relaxed font-light flex-grow">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs font-medium px-3 py-1.5 bg-secondary/10 border border-secondary/20 text-secondary rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="px-8 py-6 border-t border-white/5 bg-background/40 flex justify-between items-center mt-auto relative z-10 group/bottom">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-textMuted hover:text-textMain transition-colors text-sm font-medium"
            >
              <Github size={18} />
              Code
            </a>
          )}
          {project.demoUrl && project.demoUrl !== '#' ? (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium ml-auto"
            >
              Live Demo
              <ExternalLink size={18} />
            </a>
          ) : (
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium ml-auto group-hover/bottom:translate-x-1 duration-300">
              Project Details
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 perspective-[2000px]">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
