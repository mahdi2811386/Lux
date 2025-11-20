import React from 'react';
import Services from '../components/Services';
import SecondaryCTA from '../components/SecondaryCTA';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-10">
       {/* Added padding to top to account for fixed header, though the component has its own padding */}
      <Services />
      
      {/* Additional Content specific to Services Page could go here */}
      <div className="container mx-auto px-6 pb-20">
         <div className="bg-dark-800 p-10 border border-dark-700 text-center">
            <h3 className="text-2xl font-serif text-white mb-4">مشاوره رایگان قبل از عکاسی</h3>
            <p className="text-gray-400 mb-6">
                نمی‌دانید کدام پکیج برای شما مناسب است؟ کارشناسان ما آماده راهنمایی شما هستند.
            </p>
         </div>
      </div>

      <SecondaryCTA />
    </div>
  );
};

export default ServicesPage;