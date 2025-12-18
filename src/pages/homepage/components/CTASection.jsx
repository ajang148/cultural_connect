import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CTASection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-brand-teal flex items-center justify-center mb-3">
                    <Icon name="Globe" size={24} color="#FFFFFF" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Represented</div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success to-brand-forest flex items-center justify-center mb-3">
                    <Icon name="Award" size={24} color="#FFFFFF" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-brand-gold flex items-center justify-center mb-3">
                    <Icon name="Users" size={24} color="#FFFFFF" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">10K+</div>
                  <div className="text-sm text-muted-foreground">Community Members</div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-brand-terracotta flex items-center justify-center mb-3">
                    <Icon name="Calendar" size={24} color="#FFFFFF" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Events Annually</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Start Your Journey Today</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Ready to Begin Your Cultural Journey?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of community members who have successfully navigated their immigration journey while celebrating their cultural heritage. Get expert guidance, connect with your community, and access resources that make your transition seamless.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: "CheckCircle",
                  text: "Expert immigration consultation with 95% success rate"
                },
                {
                  icon: "Users",
                  text: "Connect with 10,000+ community members worldwide"
                },
                {
                  icon: "Calendar",
                  text: "Access 200+ cultural events and programs annually"
                },
                {
                  icon: "Shield",
                  text: "Secure document management and application tracking"
                }
              ]?.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={feature?.icon} size={14} className="text-success" />
                  </div>
                  <span className="text-foreground">{feature?.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                ]?.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Community member ${index + 1} profile photo showing diverse cultural representation`}
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Join 10,000+ members</div>
                <div className="text-xs text-muted-foreground">Trusted by communities worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;