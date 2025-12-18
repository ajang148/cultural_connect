import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const UpcomingEvents = ({ events, onEventClick }) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <Icon name="Calendar" size={20} color="var(--color-accent)" />
              </div>
              <h2 className="text-3xl font-bold text-foreground font-accent">Upcoming Events</h2>
            </div>
            <p className="text-muted-foreground">Don't miss these exciting cultural celebrations</p>
          </div>
          <Button variant="outline" iconName="ArrowRight" iconPosition="right">
            View Calendar
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events?.map((event) => (
            <div
              key={event?.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onEventClick(event)}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden">
                  <Image
                    src={event?.image}
                    alt={event?.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg p-3 text-center shadow-lg">
                    <div className="text-2xl font-bold text-primary">{event?.date}</div>
                    <div className="text-xs text-muted-foreground uppercase">{event?.month}</div>
                  </div>
                </div>

                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                      {event?.type}
                    </span>
                    {event?.isFree && (
                      <span className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                        Free Entry
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event?.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {event?.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{event?.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={16} />
                      <span>{event?.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{event?.attendees} attending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;