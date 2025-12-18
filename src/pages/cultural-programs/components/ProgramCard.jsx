import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProgramCard = ({ program, onRegister, onViewDetails }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      dance: 'Music',
      music: 'Mic2',
      language: 'Languages',
      cooking: 'ChefHat',
      art: 'Palette',
      festival: 'PartyPopper',
      workshop: 'GraduationCap',
      storytelling: 'BookOpen'
    };
    return icons?.[category] || 'Calendar';
  };

  const getLevelColor = (level) => {
    const colors = {
      beginner: 'bg-success/10 text-success',
      intermediate: 'bg-warning/10 text-warning',
      advanced: 'bg-error/10 text-error',
      'all-levels': 'bg-primary/10 text-primary'
    };
    return colors?.[level] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={program?.image}
          alt={program?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {program?.isNew && (
            <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
              New
            </span>
          )}
          {program?.isFeatured && (
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
            <Icon name="Heart" size={20} color="var(--color-error)" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={getCategoryIcon(program?.category)} size={16} color="var(--color-primary)" />
          </div>
          <span className="text-sm font-medium text-primary">{program?.culture}</span>
          <span className={`ml-auto text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(program?.level)}`}>
            {program?.level}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {program?.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {program?.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Calendar" size={16} />
            <span>{program?.schedule}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="MapPin" size={16} />
            <span>{program?.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>{program?.participants} participants</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-2xl font-bold text-foreground">${program?.price}</div>
            <div className="text-xs text-muted-foreground">{program?.duration}</div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(program)}
            >
              Details
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => onRegister(program)}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;