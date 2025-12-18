import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EventDetailsModal = ({ event, isOpen, onClose, onRSVP, onShare }) => {
  if (!isOpen || !event) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-64 md:h-80">
          <Image
            src={event?.image}
            alt={event?.imageAlt}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-background/90 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              {event?.cultureName}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-secondary/10 text-secondary">
              {event?.eventType}
            </span>
            {event?.isFree && (
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-success/10 text-success">
                Free Event
              </span>
            )}
            {event?.isVirtual && (
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-accent/10 text-accent">
                Virtual
              </span>
            )}
            {event?.familyFriendly && (
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-trust/10 text-trust">
                Family Friendly
              </span>
            )}
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-4">
            {event?.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Calendar" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="text-base font-medium text-foreground">{formatDate(event?.date)}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="text-base font-medium text-foreground">
                    {formatTime(event?.startTime)} - {formatTime(event?.endTime)}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={event?.isVirtual ? "Video" : "MapPin"} size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-base font-medium text-foreground">{event?.location}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Attendees</p>
                  <p className="text-base font-medium text-foreground">{event?.attendeeCount} people attending</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="DollarSign" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="text-base font-medium text-foreground">
                    {event?.isFree ? 'Free' : event?.price}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Organizer</p>
                  <p className="text-base font-medium text-foreground">{event?.organizer}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">About This Event</h3>
            <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {event?.fullDescription}
            </p>
          </div>

          {event?.highlights && event?.highlights?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Event Highlights</h3>
              <ul className="space-y-2">
                {event?.highlights?.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon name="Check" size={20} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!event?.isVirtual && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Location Map</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={event?.location}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${event?.coordinates?.lat},${event?.coordinates?.lng}&z=14&output=embed`}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="default"
              size="lg"
              fullWidth
              iconName="Calendar"
              iconPosition="left"
              onClick={() => onRSVP(event)}
            >
              RSVP to Event
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Share2"
              iconPosition="left"
              onClick={() => onShare(event)}
            >
              Share
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
            >
              Add to Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;