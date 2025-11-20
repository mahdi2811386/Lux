import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustSection from '../components/TrustSection';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import SecondaryCTA from '../components/SecondaryCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <TrustSection />
      <Portfolio />
      <Testimonials />
      <SecondaryCTA />
    </>
  );
};

export default Home;