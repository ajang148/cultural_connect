import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import QuickAccessPortals from './components/QuickAccessPortals';
import CulturalSpotlight from './components/CulturalSpotlight';
import SuccessStories from './components/SuccessStories';
import RealtimeActivity from './components/RealtimeActivity';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="main-content">
        <HeroSection />
        <QuickAccessPortals />
        <CulturalSpotlight />
        <SuccessStories />
        <RealtimeActivity />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;