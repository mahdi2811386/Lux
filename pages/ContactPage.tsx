import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="تماس با ما" 
          subtitle="برای خلق خاطرات با ما در ارتباط باشید"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-dark-800 p-8 border border-dark-700 rounded-sm">
              <h3 className="text-2xl font-serif text-white mb-6">اطلاعات تماس</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-700 rounded-full text-gold-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">آدرس آتلیه</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      تهران، زعفرانیه، خیابان مقدس اردبیلی، پلاک ۱۲، ساختمان الماس، واحد ۵
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-700 rounded-full text-gold-500 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">تلفن تماس</h4>
                    <p className="text-gray-400 text-sm" dir="ltr">+98 21 2200 0000</p>
                    <p className="text-gray-400 text-sm" dir="ltr">+98 912 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-700 rounded-full text-gold-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">ایمیل</h4>
                    <p className="text-gray-400 text-sm" dir="ltr">info@atelierlux.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-700 rounded-full text-gold-500 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">ساعات کاری</h4>
                    <p className="text-gray-400 text-sm">شنبه تا پنجشنبه: ۱۰ صبح تا ۸ شب</p>
                    <p className="text-gray-400 text-sm">جمعه‌ها: با تعیین وقت قبلی</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-dark-700 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-dark-900 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800 p-8 border border-dark-700 rounded-sm"
          >
            <h3 className="text-2xl font-serif text-white mb-6">ارسال پیام</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">نام و نام خانوادگی</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark-900 border border-dark-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">شماره تماس</label>
                  <input 
                    type="tel" 
                    dir="ltr"
                    className="w-full bg-dark-900 border border-dark-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-right"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">موضوع</label>
                <select className="w-full bg-dark-900 border border-dark-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all">
                  <option>رزرو وقت عکاسی</option>
                  <option>مشاوره قبل از قرارداد</option>
                  <option>پیگیری سفارش</option>
                  <option>سایر موارد</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">پیام شما</label>
                <textarea 
                  rows={5}
                  className="w-full bg-dark-900 border border-dark-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                ></textarea>
              </div>

              <Button variant="primary" className="w-full">
                ارسال پیام
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;