import React from 'react';
import Button from '../components/Button';
import { Lock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientPanelPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden z-0">
        <img 
           src="https://picsum.photos/1920/1080?grayscale&blur=4" 
           className="w-full h-full object-cover opacity-20"
           alt="Background"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-dark-800/80 backdrop-blur-md p-8 md:p-12 rounded-sm border border-dark-700 w-full max-w-md relative z-10 shadow-2xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-white font-bold mb-2">پنل مشتریان</h2>
          <p className="text-gold-500 text-sm tracking-widest uppercase">ATELIER LUX</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-300 flex items-center gap-2">
              <User size={16} className="text-gold-500" />
              نام کاربری یا شماره پرونده
            </label>
            <input 
              type="text" 
              dir="ltr"
              className="w-full bg-dark-900/50 border border-dark-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-center tracking-wider"
              placeholder="ex: user-1024"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-300 flex items-center gap-2">
              <Lock size={16} className="text-gold-500" />
              رمز عبور
            </label>
            <input 
              type="password" 
              dir="ltr"
              className="w-full bg-dark-900/50 border border-dark-600 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-center"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-gold-500" />
              مرا به خاطر بسپار
            </label>
            <a href="#" className="hover:text-gold-500 transition-colors">فراموشی رمز عبور؟</a>
          </div>

          <Button variant="primary" className="w-full shadow-xl shadow-gold-900/20">
            ورود به پنل
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            جهت دریافت نام کاربری و رمز عبور با پشتیبانی تماس بگیرید.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ClientPanelPage;