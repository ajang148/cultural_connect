import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onSearchClick, onFilterClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-brand-teal to-brand-forest text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" size={24} color="#FFFFFF" />
            </div>
            <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Discover Your Cultural Journey
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-accent">
            Explore Rich Cultural Programs & Events
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Join workshops, attend festivals, and connect with your heritage through our diverse range of cultural programs. From traditional dance classes to language workshops, find experiences that celebrate your roots.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="default"
              size="lg"
              iconName="Search"
              iconPosition="left"
              onClick={onSearchClick}
              className="bg-white text-primary hover:bg-white/90"
            >
              Browse All Programs
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Filter"
              iconPosition="left"
              onClick={onFilterClick}
              className="border-white text-white hover:bg-white/10"
            >
              Filter by Culture
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm text-white/80">Active Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold">25</div>
              <div className="text-sm text-white/80">Cultural Communities</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-sm text-white/80">Happy Participants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;