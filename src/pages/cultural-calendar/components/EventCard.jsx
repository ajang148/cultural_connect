import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EventCard = ({ event, onViewDetails, onRSVP }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`)?.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getCultureColor = (culture) => {
    const colors = {
      indian: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      chinese: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      mexican: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      african: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      'middle-eastern': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      european: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'latin-american': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
      asian: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
    };
    return colors?.[event?.culture] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event?.image}
          alt={event?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCultureColor(event?.culture)}`}>
            {event?.cultureName}
          </span>
          {event?.isFree && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-success text-success-foreground">
              Free
            </span>
          )}
          {event?.isVirtual && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground">
              Virtual
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-foreground line-clamp-2">
            {event?.title}
          </h3>
          <button
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label="Add to favorites"
          >
            <Icon name="Heart" size={18} />
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {event?.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Icon name="Calendar" size={16} color="var(--color-primary)" />
            <span>{formatDate(event?.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Icon name="Clock" size={16} color="var(--color-primary)" />
            <span>{formatTime(event?.startTime)} - {formatTime(event?.endTime)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Icon name={event?.isVirtual ? "Video" : "MapPin"} size={16} color="var(--color-primary)" />
            <span className="truncate">{event?.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {event?.attendees?.slice(0, 3)?.map((attendee, idx) => (
                <Image
                  key={idx}
                  src={attendee?.avatar}
                  alt={attendee?.avatarAlt}
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {event?.attendeeCount} attending
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(event)}
            >
              Details
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => onRSVP(event)}
            >
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;