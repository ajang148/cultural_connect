import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon'; // ADD THIS IMPORT
import Button from '../../../components/ui/Button';

const ThreadReply = ({ reply, onLike, onReply }) => {
  const getTimeAgo = React.useCallback((date) => {
    if (!date) return '';
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
          <Image 
            src={reply?.authorAvatar} 
            alt={reply?.authorAvatarAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-sm font-semibold text-foreground">
              {reply?.authorName}
            </span>
            {reply?.badges && reply?.badges?.map((badge, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-md"
              >
                {badge}
              </span>
            ))}
            <span className="text-xs text-muted-foreground">
              {getTimeAgo(reply?.timestamp)}
            </span>
          </div>
          <p className="text-sm text-foreground mb-4 whitespace-pre-line">
            {reply?.content}
          </p>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              iconName="ThumbsUp"
              iconPosition="left"
              onClick={() => onLike(reply)}
            >
              {reply?.likeCount || 0}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="MessageSquare"
              iconPosition="left"
              onClick={() => onReply(reply)}
            >
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadReply;