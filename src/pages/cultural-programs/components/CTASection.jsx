import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = ({ onGetStarted, onLearnMore }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-brand-teal to-brand-forest text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Icon name="Sparkles" size={32} color="#FFFFFF" />
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-accent">
          Ready to Begin Your Cultural Journey?
        </h2>

        <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Join thousands of community members who are celebrating their heritage, learning new traditions, and building lasting connections through our diverse cultural programs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={onGetStarted}
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Started Today
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="BookOpen"
            iconPosition="left"
            onClick={onLearnMore}
            className="border-white text-white hover:bg-white/10"
          >
            Browse Programs
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-white/80">Active Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">25</div>
            <div className="text-white/80">Cultural Communities</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <div className="text-white/80">Happy Participants</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;