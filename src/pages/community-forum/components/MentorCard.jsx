import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { isLoggedIn } from '../../../utils/auth';
import { useNavigate } from 'react-router-dom';

const MentorCard = ({ mentor, onConnect }) => {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  const handleConnect = () => {
    if (!loggedIn) {
      if (window.confirm('Login to connect with this mentor?')) {
        navigate('/login');
      }
      return;
    }
    onConnect(mentor);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
          <Image 
            src={mentor?.avatar} 
            alt={mentor?.avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {mentor?.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {mentor?.expertise}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-warning">
              <Icon name="Star" size={14} fill="currentColor" />
              <span className="font-medium">{mentor?.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {mentor?.menteeCount} mentees
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {mentor?.bio}
      </p>
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {mentor?.languages?.map((lang, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-muted text-foreground text-xs rounded-md"
          >
            {lang}
          </span>
        ))}
      </div>
      <Button 
        variant="default" 
        fullWidth
        iconName="UserPlus"
        iconPosition="left"
        onClick={handleConnect}
      >
        {loggedIn ? 'Connect' : 'Login to Connect'}
      </Button>
    </div>
  );
};

export default MentorCard;