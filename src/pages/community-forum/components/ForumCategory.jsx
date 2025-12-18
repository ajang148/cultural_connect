import React from 'react';
import Icon from '../../../components/AppIcon';

const ForumCategory = ({ category, onClick }) => {

    const iconStyle = React.useMemo(() => ({ 
    backgroundColor: category?.color 
  }), [category?.color]);

  return (
    <button
      onClick={() => onClick(category)}
      className="w-full bg-card hover:bg-muted border border-border rounded-xl p-6 transition-all duration-300 text-left group"
    >
      <div className="flex items-start gap-4">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          aria-label={`Browse ${category?.name} community with ${category?.threadCount} threads`}
        >
          <Icon name={category?.icon} size={24} color="#FFFFFF" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {category?.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {category?.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="MessageSquare" size={14} />
              <span>{category?.threadCount} threads</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Users" size={14} />
              <span>{category?.memberCount} members</span>
            </div>
          </div>
        </div>
        <Icon 
          name="ChevronRight" 
          size={20} 
          className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" 
        />
      </div>
    </button>
  );
};

export default ForumCategory;