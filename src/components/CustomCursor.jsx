import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if it's a touch device or mobile
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile || shouldReduceMotion) return null;

  return (
    <>
      {/* Main tiny dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      {/* Follower circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-secondary/50 rounded-full pointer-events-none z-[99] mix-blend-screen flex items-center justify-center"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(56, 189, 248, 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(56, 189, 248, 0.8)" : "rgba(129, 140, 248, 0.5)",
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
