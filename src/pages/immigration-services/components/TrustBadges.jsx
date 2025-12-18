import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBadges = () => {
  const badges = [
    {
      icon: "Shield",
      title: "USCIS Accredited",
      description: "Officially recognized by U.S. Citizenship and Immigration Services"
    },
    {
      icon: "Award",
      title: "ISO 9001 Certified",
      description: "International quality management standards compliance"
    },
    {
      icon: "Lock",
      title: "GDPR Compliant",
      description: "Full data protection and privacy compliance"
    },
    {
      icon: "CheckCircle2",
      title: "BBB A+ Rating",
      description: "Better Business Bureau highest accreditation"
    }
  ];
  
  return (
    <section className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Trusted & Accredited</h2>
          <p className="text-muted-foreground">Recognized by leading immigration authorities and organizations</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges?.map((badge, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={badge?.icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{badge?.title}</h3>
              <p className="text-xs text-muted-foreground">{badge?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;