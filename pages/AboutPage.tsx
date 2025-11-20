import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TrustSection from '../components/TrustSection';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="container mx-auto px-6 pb-20">
        <SectionHeading 
          title="درباره آتلیه لوکس" 
          subtitle="داستان ما"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500 z-0" />
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Studio Team" 
              className="relative z-10 w-full h-auto shadow-2xl filter sepia-[0.2]"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-white font-bold">ثبت لحظات با نگاهی متفاوت</h3>
            <p className="text-gray-300 leading-loose text-justify">
              آتلیه لوکس در سال ۱۳۹۵ با هدف ایجاد تحولی در صنعت عکاسی پرتره و عروسی تاسیس شد. ما معتقدیم هر عکس یک داستان است که باید با ظرافت، دقت و هنر روایت شود. تیم ما متشکل از هنرمندان جوان و خلاقی است که با بهره‌گیری از جدیدترین تکنولوژی‌های روز دنیا، سعی در خلق آثاری ماندگار دارند.
            </p>
            <p className="text-gray-300 leading-loose text-justify">
              تفاوت ما در جزئیات است. از نورپردازی‌های سینمایی گرفته تا روتوش‌های طبیعی که بافت پوست را حفظ می‌کنند، همه چیز در آتلیه لوکس برای درخشش شما طراحی شده است.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center border-l border-gold-500/30">
                <span className="block text-4xl font-bold text-gold-500 mb-2">۵۰۰+</span>
                <span className="text-sm text-gray-400">پروژه موفق</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-gold-500 mb-2">۸</span>
                <span className="text-sm text-gray-400">سال تجربه</span>
              </div>
            </div>
          </motion.div>
        </div>

        <TrustSection />
      </div>
    </div>
  );
};

export default AboutPage;