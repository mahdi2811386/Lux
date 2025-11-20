import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      >
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Cinematic Studio Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-dark-900/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-500 tracking-[0.3em] text-sm md:text-lg mb-6 font-medium uppercase"
        >
          عکاسی تخصصی عروس، مد و پرتره
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8"
        >
          جایی که داستان شما
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
            جاودانه می‌شود
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button variant="primary" size="lg">رزرو آنلاین نوبت</Button>
          <Button variant="outline" size="lg">مشاهده گالری</Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;