import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SuccessStoryCard = ({ story }) => {
  const { name, image, imageAlt, country, visaType, processingTime, testimonial, date } = story;
  
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-medium transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-success/20">
          <Image 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{country}</p>
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-success/10 rounded text-xs font-medium text-success">
              {visaType}
            </div>
            <span className="text-xs text-muted-foreground">{processingTime}</span>
          </div>
        </div>
        
        <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
          <Icon name="CheckCircle2" size={20} className="text-success" />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)]?.map((_, index) => (
            <Icon 
              key={index}
              name="Star" 
              size={14} 
              className="text-secondary fill-secondary"
            />
          ))}
        </div>
        <p className="text-sm text-foreground leading-relaxed italic">"{testimonial}"</p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">{date}</span>
        <div className="flex items-center gap-1 text-success">
          <Icon name="ThumbsUp" size={14} />
          <span className="text-xs font-medium">Verified Success</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;