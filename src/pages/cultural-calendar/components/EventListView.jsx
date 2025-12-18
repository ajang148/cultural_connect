import React from 'react';
import EventCard from './EventCard';

const EventListView = ({ events, onViewDetails, onRSVP }) => {
  const groupEventsByDate = (events) => {
    const grouped = {};
    events?.forEach(event => {
      const date = new Date(event.date)?.toDateString();
      if (!grouped?.[date]) {
        grouped[date] = [];
      }
      grouped?.[date]?.push(event);
    });
    return grouped;
  };

  const groupedEvents = groupEventsByDate(events);
  const sortedDates = Object.keys(groupedEvents)?.sort((a, b) => new Date(a) - new Date(b));

  const formatDateHeader = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow?.setDate(tomorrow?.getDate() + 1);

    if (date?.toDateString() === today?.toDateString()) {
      return 'Today';
    } else if (date?.toDateString() === tomorrow?.toDateString()) {
      return 'Tomorrow';
    } else {
      return date?.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
      });
    }
  };

  return (
    <div className="space-y-8">
      {sortedDates?.map(date => (
        <div key={date}>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl font-semibold text-foreground">
              {formatDateHeader(date)}
            </h3>
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-sm text-muted-foreground">
              {groupedEvents?.[date]?.length} {groupedEvents?.[date]?.length === 1 ? 'event' : 'events'}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedEvents?.[date]?.map(event => (
              <EventCard
                key={event?.id}
                event={event}
                onViewDetails={onViewDetails}
                onRSVP={onRSVP}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventListView;