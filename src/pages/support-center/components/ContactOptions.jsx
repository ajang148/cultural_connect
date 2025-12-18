import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactOptions = () => {
  const contactMethods = [
    {
      icon: 'MessageCircle',
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: 'Mail',
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'bg-secondary/10 text-secondary'
    },
    {
      icon: 'Phone',
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri, 9 AM - 6 PM EST',
      action: 'Call Now',
      color: 'bg-trust/10 text-trust'
    },
    {
      icon: 'Video',
      title: 'Video Consultation',
      description: 'Schedule a video call with experts',
      availability: 'Book appointment',
      action: 'Schedule Call',
      color: 'bg-accent/10 text-accent'
    }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred way to reach us. We're here to help in multiple languages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${method?.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon name={method?.icon} size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {method?.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {method?.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Icon name="Clock" size={16} />
                <span>{method?.availability}</span>
              </div>
              
              <Button variant="outline" fullWidth size="sm">
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-brand-teal/10 to-trust/10 rounded-2xl p-8 border border-border">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Multi-Language Support
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Our support team speaks your language. Get assistance in English, Spanish, Mandarin, Hindi, Arabic, and French. Select your preferred language when starting a conversation.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {languages?.map((lang) => (
                  <button
                    key={lang?.code}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="text-2xl">{lang?.flag}</span>
                    <span className="font-medium text-foreground">{lang?.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-white/50 rounded-2xl flex items-center justify-center">
                <Icon name="Languages" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              95% Satisfaction Rate
            </h4>
            <p className="text-sm text-muted-foreground">
              Based on 10,000+ support interactions
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-warning/10 text-warning rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              &lt;2 Min Response Time
            </h4>
            <p className="text-sm text-muted-foreground">
              Average live chat response time
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              50+ Support Experts
            </h4>
            <p className="text-sm text-muted-foreground">
              Multilingual team ready to help
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;