import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCard = ({ resource, onDownload }) => {
  const { id, icon, title, description, type, size, downloads, language } = resource;
  
  const getTypeColor = (type) => {
    switch(type) {
      case 'PDF Guide': return 'bg-error/10 text-error';
      case 'Checklist': return 'bg-success/10 text-success';
      case 'Template': return 'bg-primary/10 text-primary';
      case 'Video': return 'bg-secondary/10 text-secondary';
      default: return 'bg-muted text-muted-foreground';
    }
  };
  
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-medium transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={icon} size={24} className="text-primary" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <div className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(type)}`}>
              {type}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Icon name="FileText" size={14} />
          <span>{size}</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="Download" size={14} />
          <span>{downloads} downloads</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon name="Globe" size={14} />
          <span>{language}</span>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        fullWidth
        iconName="Download"
        iconPosition="left"
        onClick={() => onDownload(id)}
      >
        Download Resource
      </Button>
    </div>
  );
};

export default ResourceCard;