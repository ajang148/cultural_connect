import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFeatureCard = ({ feature }) => {
  const { icon, title, description, benefits } = feature;
  
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-medium transition-all duration-300">
      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-4">
        <Icon name={icon} size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits?.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <Icon name="CheckCircle2" size={16} className="text-success mt-1 flex-shrink-0" />
            <span className="text-sm text-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceFeatureCard;