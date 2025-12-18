import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { isLoggedIn } from '../../../utils/auth';
import { useNavigate } from 'react-router-dom';

const MeetupCard = ({ meetup, onJoin }) => {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true
    });
  };

  const handleJoin = () => {
    if (!loggedIn) {
      if (window.confirm('Login to join this meetup?')) {
        navigate('/login');
      }
      return;
    }
    onJoin(meetup);
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-medium transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <Image 
          src={meetup?.image} 
          alt={meetup?.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-foreground line-clamp-2">
            {meetup?.title}
          </h3>
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md flex-shrink-0">
            {meetup?.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {meetup?.description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span>{formatDate(meetup?.date)} at {formatTime(meetup?.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span className="line-clamp-1">{meetup?.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Icon name="Users" size={16} className="text-primary" />
            <span>{meetup?.attendeeCount} attending · {meetup?.spotsLeft} spots left</span>
          </div>
        </div>
        <Button 
          variant="default" 
          fullWidth
          iconName="Calendar"
          iconPosition="left"
          onClick={handleJoin}
        >
          {loggedIn ? 'Join Meetup' : 'Login to Join'}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(MeetupCard);