import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import { isLoggedIn } from '../../../utils/auth';
import { useNavigate } from 'react-router-dom';

const DiscussionThread = ({ thread, onClick }) => {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  const getTimeAgo = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

const handleClick = () => {
  if (!loggedIn) {
    // If not logged in, still allow viewing but show a message
    if (window.confirm('You can view this thread, but will need to login to reply. Continue?')) {
      navigate(`/community-forum/thread/${thread.id}`);
    }
  } else {
    navigate(`/community-forum/thread/${thread.id}`);
  }
};

  return (
    <button
      onClick={handleClick}
      className="w-full bg-card hover:bg-muted border border-border rounded-xl p-6 transition-all duration-300 text-left group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
          <Image 
            src={thread?.authorAvatar} 
            alt={thread?.authorAvatarAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {thread?.title}
            </h3>
            {thread?.isPinned && (
              <Icon name="Pin" size={16} className="text-accent flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {thread?.preview}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
            <span className="font-medium text-foreground">{thread?.authorName}</span>
            <div className="flex items-center gap-1">
              <Icon name="MessageSquare" size={14} />
              <span>{thread?.replyCount} replies</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Eye" size={14} />
              <span>{thread?.viewCount} views</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="ThumbsUp" size={14} />
              <span>{thread?.likeCount}</span>
            </div>
            <span>{getTimeAgo(thread?.lastActivity)}</span>
            {!loggedIn && (
              <span className="text-xs text-muted-foreground italic">
                (Login to reply)
              </span>
            )}
          </div>
          {thread?.tags && thread?.tags?.length > 0 && (
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {thread?.tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default DiscussionThread;