import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessStepCard = ({ step, isLast }) => {
  const { number, icon, title, description, duration, documents } = step;
  
  return (
    <div className="relative">
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-medium">
            <Icon name={icon} size={28} className="text-white" />
          </div>
          {!isLast && (
            <div className="w-0.5 h-full bg-gradient-to-b from-primary to-muted mt-4"></div>
          )}
        </div>
        
        <div className="flex-1 pb-12">
          <div className="bg-card rounded-xl border border-border p-6 hover:shadow-medium transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Step {number}</span>
                <h3 className="text-xl font-semibold text-foreground mt-1">{title}</h3>
              </div>
              <div className="px-3 py-1 bg-secondary/10 rounded-full">
                <span className="text-xs font-medium text-secondary">{duration}</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">{description}</p>
            
            {documents && documents?.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Required Documents:</p>
                <ul className="space-y-1">
                  {documents?.map((doc, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="FileText" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStepCard;