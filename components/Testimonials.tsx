import React from 'react';
import { TESTIMONIALS } from '../constants';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="نظرات مشتریان" 
          subtitle="اعتماد شما، افتخار ماست"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-dark-900 p-8 relative border border-dark-700 rounded-sm">
              <Quote className="absolute top-8 left-8 text-dark-700 w-12 h-12 rotate-180" />
              
              <p className="text-gray-300 mb-6 relative z-10 leading-loose text-justify italic font-serif">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-dark-700 pt-4">
                <div>
                  <h5 className="text-white font-bold">{t.name}</h5>
                  <span className="text-gold-600 text-xs">{t.role}</span>
                </div>
                <div className="mr-auto text-xs text-gray-500">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;