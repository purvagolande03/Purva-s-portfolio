import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-textMain"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="max-w-md w-full px-8 font-mono">
        <div className="mb-4 text-primary text-sm tracking-widest">INITIALIZING...</div>
        <div className="mb-8 text-xl font-bold tracking-widest text-textMain">PURVA.PORTFOLIO</div>
        
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-surface rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="text-sm font-bold text-secondary w-12 text-right">
            {progress}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
