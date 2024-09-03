import React from 'react';
import HeroSection from '../components/pages/HeroSection';
import FeaturesSection from './pages/FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default HomePage;
