import React from 'react';
import { Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-8 border-t border-dark-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-serif text-white mb-6 tracking-widest">ATELIER <span className="text-gold-500">LUX</span></h2>
            <p className="text-sm leading-relaxed mb-6">
              ما در آتلیه لوکس متعهد به ثبت زیبایی و احساسات واقعی شما در قاب تصویر هستیم. تجربه‌ای متفاوت از عکاسی حرفه‌ای.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-gold-500 transition-colors">صفحه اصلی</a></li>
              <li><a href="#portfolio" className="hover:text-gold-500 transition-colors">نمونه کارها</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">خدمات و تعرفه‌ها</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition-colors">درباره ما</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6">تماس با ما</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <span>تهران، زعفرانیه، خیابان مقدس اردبیلی، پلاک ۱۲، واحد ۵</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <span dir="ltr">+98 21 2200 0000</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-gold-500 shrink-0" size={20} />
                <span dir="ltr">info@atelierlux.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 text-center text-xs flex flex-col md:flex-row justify-between items-center">
          <p>© ۱۴۰۳ آتلیه لوکس. تمامی حقوق محفوظ است.</p>
          <p className="mt-2 md:mt-0">Designed with <span className="text-gold-500">♥</span> for Art</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;