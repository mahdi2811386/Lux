import React from 'react';
import { TRUST_FACTORS } from '../constants';
import { motion } from 'framer-motion';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800 border-y border-dark-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TRUST_FACTORS.map((factor, index) => (
            <motion.div 
              key={factor.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-dark-700 rounded-full text-gold-500 shrink-0">
                <factor.icon size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{factor.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {factor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;