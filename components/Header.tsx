import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import Button from './Button';
import { NAV_ITEMS } from '../constants';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Check if the current path matches the link
  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== '/' ? 'bg-dark-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
        }`}
      >
        {/* Added relative to ensure header content sits above the mobile menu overlay if needed, though z-index handles it */}
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          
          {/* CTA Button - Left (Persian RTL context) */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button size="sm" variant="outline">رزرو وقت</Button>
            </Link>
          </div>

          {/* Desktop Nav - Center */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.href) ? 'text-gold-500' : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 right-0 h-0.5 bg-gold-500 transition-all ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </nav>

          {/* Logo - Right */}
          <Link to="/" className="flex items-center gap-2 text-white">
             <span className="text-xl font-serif font-bold tracking-widest text-gold-500">LUX</span>
             <Camera className="w-6 h-6 text-white" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white hover:text-gold-500 transition-colors z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved OUTSIDE the header tag */}
      <div 
        className={`fixed inset-0 bg-dark-900 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <Link 
            key={item.href}
            to={item.href}
            className={`text-2xl font-serif ${isActive(item.href) ? 'text-gold-500' : 'text-white hover:text-gold-500'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
          <Button variant="primary" size="lg">
            رزرو آنلاین نوبت
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Header;