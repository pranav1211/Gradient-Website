import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollTop = ({ 
  showAfter = 400, 
  position = 'bottom-right', 
  gradient = 'from-purple-600 to-pink-600', 
  size = 'medium' 
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > showAfter);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  };

  const sizeClasses = {
    'small': 'p-2',
    'medium': 'p-3',
    'large': 'p-4'
  };

  const iconSizes = {
    'small': 20,
    'medium': 24,
    'large': 28
  };

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className={`
            fixed ${positionClasses[position]} z-50 
            bg-gradient-to-r ${gradient} 
            ${sizeClasses[size]} 
            rounded-full shadow-lg hover:shadow-purple-500/25 
            transition-all duration-300 backdrop-blur-sm
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={iconSizes[size]} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;