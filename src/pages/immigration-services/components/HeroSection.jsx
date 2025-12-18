import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onGetStarted, onBookConsultation }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="Shield" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Trusted Immigration Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Immigration Journey,
              <span className="text-primary"> Expertly Guided</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Navigate complex visa processes with confidence. Our comprehensive immigration services combine expert guidance, secure document management, and personalized support to help you achieve your immigration goals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={onGetStarted}
              >
                Start Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={onBookConsultation}
              >
                Book Consultation
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="text-success" />
                <span className="text-sm text-foreground">98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-success" />
                <span className="text-sm text-foreground">10,000+ Clients Served</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-medium p-8 border border-border">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4 p-4 bg-success/10 rounded-xl">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <Icon name="FileCheck" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Application Approved</p>
                    <p className="text-sm text-muted-foreground">Processing time: 45 days</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fast Processing</p>
                    <p className="text-sm text-muted-foreground">Average 30-60 days</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-xl">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Expert Support</p>
                    <p className="text-sm text-muted-foreground">Licensed professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;