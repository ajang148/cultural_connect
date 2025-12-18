import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SuccessStoryCard = ({ story, onClick }) => {
  return (
    <button
      onClick={() => onClick(story)}
      className="w-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-medium transition-all duration-300 text-left group"
    >
      <div className="h-56 overflow-hidden">
        <Image 
          src={story?.image} 
          alt={story?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
            <Image 
              src={story?.authorAvatar} 
              alt={story?.authorAvatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-foreground">
              {story?.authorName}
            </h4>
            <p className="text-xs text-muted-foreground">
              {story?.authorOrigin}
            </p>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {story?.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {story?.excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="Heart" size={14} />
            <span>{story?.likeCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="MessageSquare" size={14} />
            <span>{story?.commentCount}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Share2" size={14} />
            <span>{story?.shareCount}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SuccessStoryCard;