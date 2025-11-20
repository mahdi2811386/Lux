import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import SectionHeading from './SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('همه');

  const categories = useMemo(() => {
    const allCats = PORTFOLIO_ITEMS.map(item => item.category);
    return ['همه', ...Array.from(new Set(allCats))];
  }, []);

  const filteredItems = useMemo(() => {
    if (filter === 'همه') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="نمونه کارهای برگزیده" 
          subtitle="گالری تصاویر"
          align="center"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gold-500 text-dark-900 font-bold' 
                  : 'bg-transparent text-gray-400 border border-dark-700 hover:border-gold-500 hover:text-gold-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`relative group overflow-hidden cursor-pointer ${
                  item.size === 'tall' ? 'row-span-2' : 'row-span-1'
                } ${item.size === 'large' ? 'col-span-2 row-span-2' : ''}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-gold-400 text-xs tracking-widest uppercase mb-1">{item.category}</span>
                  <h3 className="text-white text-xl font-serif font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;