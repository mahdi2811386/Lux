import React from 'react';
import Button from './Button';

const SecondaryCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Background with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/600?grayscale&blur=2" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gold-900/20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          کیفیت، شایسته خاطرات شماست
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          با انتخاب پکیج‌های اختصاصی ما، از خدمات VIP، چاپ فاین آرت و تحویل فوری بهره‌مند شوید.
        </p>
        <Button variant="primary" size="lg">
          مشاهده پکیج‌های لوکس ما
        </Button>
      </div>
    </section>
  );
};

export default SecondaryCTA;