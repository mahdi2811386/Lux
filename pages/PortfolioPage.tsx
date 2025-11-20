import React from 'react';
import Portfolio from '../components/Portfolio';
import SecondaryCTA from '../components/SecondaryCTA';

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-10">
      <Portfolio />
      <SecondaryCTA />
    </div>
  );
};

export default PortfolioPage;