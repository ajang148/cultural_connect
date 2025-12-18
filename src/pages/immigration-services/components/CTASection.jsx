import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = ({ onGetStarted, onContactSupport }) => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Rocket" size={40} className="text-white" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Start Your Immigration Journey?
        </h2>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Take the first step towards your immigration goals. Our expert team is ready to guide you through every step of the process with personalized support and proven strategies.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            variant="secondary" 
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={onGetStarted}
          >
            Start Free Assessment
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={onContactSupport}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Talk to an Expert
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-8 mt-8 text-white/90">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={20} />
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={20} />
            <span className="text-sm">Secure & Confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Award" size={20} />
            <span className="text-sm">98% Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;