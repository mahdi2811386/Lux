import React from 'react';
import { SERVICES } from '../constants';
import SectionHeading from './SectionHeading';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="تخصص‌های ما" 
          subtitle="هنر به تصویر کشیدن شما" 
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-dark-800 p-8 border border-dark-700 hover:border-gold-600/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6 text-gold-500 group-hover:text-white transition-colors duration-300">
                <service.icon size={48} strokeWidth={1} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-serif">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <a href={service.link} className="inline-flex items-center text-gold-500 text-sm hover:text-white transition-colors group-hover:translate-x-[-5px]">
                اطلاعات بیشتر <ArrowLeft size={16} className="mr-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;