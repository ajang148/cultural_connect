import React from 'react';
import Icon from '../../../components/AppIcon';

const SupportHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-brand-teal to-brand-forest py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Icon name="Headphones" size={40} color="#FFFFFF" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How Can We Help You Today?
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Get instant support through our multi-language help center, live chat, or community-driven Q&A. We're here to assist you 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <Icon name="Clock" size={20} color="#FFFFFF" />
              <span className="text-white font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <Icon name="Globe" size={20} color="#FFFFFF" />
              <span className="text-white font-medium">Multi-Language</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <Icon name="Users" size={20} color="#FFFFFF" />
              <span className="text-white font-medium">Community Driven</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;