import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { email, github, linkedin } = portfolioData.personal;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
          <p className="text-textMuted max-w-2xl mx-auto font-light">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href={`mailto:${email}`}
            className="text-2xl md:text-5xl font-bold text-textMain hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 mb-16 pb-2 text-center break-all relative group"
          >
            {email}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 rounded-full" />
          </a>

          <div className="flex gap-8 md:gap-12">
            {[
              { icon: <Github size={32} />, url: github, label: "GitHub" },
              { icon: <Linkedin size={32} />, url: linkedin, label: "LinkedIn" },
              { icon: <Mail size={32} />, url: `mailto:${email}`, label: "Email" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.url} 
                target={social.url.startsWith('http') ? "_blank" : undefined}
                rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-4 text-textMuted hover:text-primary transition-colors group"
                whileHover={{ y: -8 }}
              >
                <div className="p-5 glass rounded-full group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <div className="relative z-10">{social.icon}</div>
                </div>
                <span className="font-medium tracking-wide text-sm">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
