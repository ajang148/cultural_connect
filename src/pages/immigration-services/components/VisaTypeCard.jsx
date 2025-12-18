import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VisaTypeCard = ({ visaType, onLearnMore }) => {
  const { id, icon, title, description, processingTime, successRate, features, popular } = visaType;
  
  return (
    <div className="relative bg-card rounded-xl border border-border p-6 hover:shadow-medium transition-all duration-300 group">
      {popular && (
        <div className="absolute -top-3 right-6 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
          Most Popular
        </div>
      )}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon name={icon} size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-y border-border">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Processing Time</p>
          <p className="text-sm font-semibold text-foreground">{processingTime}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Success Rate</p>
          <p className="text-sm font-semibold text-success">{successRate}</p>
        </div>
      </div>
      <ul className="space-y-2 mb-6">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant="outline" 
        fullWidth
        iconName="ArrowRight"
        iconPosition="right"
        onClick={() => onLearnMore(id)}
      >
        Learn More
      </Button>
    </div>
  );
};

export default VisaTypeCard;