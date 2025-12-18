import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExpertCard = ({ expert, onBookConsultation }) => {
  const { id, name, image, imageAlt, title, specialization, experience, successRate, languages, rating, reviewCount } = expert;
  
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-medium transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
            <Image 
              src={image} 
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{title}</p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)]?.map((_, index) => (
                <Icon 
                  key={index}
                  name="Star" 
                  size={14} 
                  className={index < Math.floor(rating) ? "text-secondary fill-secondary" : "text-muted"}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">({reviewCount})</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <Icon name="Briefcase" size={16} className="text-primary" />
            <span className="text-sm text-foreground">{specialization}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Award" size={16} className="text-primary" />
            <span className="text-sm text-foreground">{experience} years experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" size={16} className="text-success" />
            <span className="text-sm text-foreground">{successRate} success rate</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Languages" size={16} className="text-primary" />
            <span className="text-sm text-foreground">{languages?.join(', ')}</span>
          </div>
        </div>
        
        <Button 
          variant="default" 
          fullWidth
          iconName="Calendar"
          iconPosition="left"
          onClick={() => onBookConsultation(id)}
        >
          Book Consultation
        </Button>
      </div>
    </div>
  );
};

export default ExpertCard;