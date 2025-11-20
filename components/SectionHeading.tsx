import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'right' | 'left';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  const alignmentClass = {
    center: 'text-center items-center',
    right: 'text-right items-start',
    left: 'text-left items-end'
  };

  return (
    <div className={`flex flex-col mb-16 ${alignmentClass[align]}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-500 text-sm tracking-widest uppercase mb-2 font-medium"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-5xl font-serif text-white font-bold relative pb-4"
      >
        {title}
        <span className={`absolute bottom-0 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'right-0'} w-20 h-1 bg-gold-500 mt-4 block`} />
      </motion.h2>
    </div>
  );
};

export default SectionHeading;