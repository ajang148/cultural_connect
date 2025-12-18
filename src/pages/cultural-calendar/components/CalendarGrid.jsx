import React from 'react';
import Icon from '../../../components/AppIcon';

const CalendarGrid = ({ currentDate, events, onDateClick, onEventClick }) => {
  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevMonthDay = new Date(year, month, -startingDayOfWeek + i + 1);
      days?.push({ date: prevMonthDay, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days?.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }

    const remainingDays = 42 - days?.length;
    for (let i = 1; i <= remainingDays; i++) {
      days?.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
    }

    return days;
  };

  const getEventsForDate = (date) => {
    return events?.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate?.toDateString() === date?.toDateString();
    });
  };

  const isToday = (date) => {
    const today = new Date();
    return date?.toDateString() === today?.toDateString();
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="grid grid-cols-7 border-b border-border">
        {weekDays?.map(day => (
          <div
            key={day}
            className="p-4 text-center text-sm font-semibold text-muted-foreground bg-muted"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {days?.map((day, index) => {
          const dayEvents = getEventsForDate(day?.date);
          const isTodayDate = isToday(day?.date);

          return (
            <div
              key={index}
              onClick={() => onDateClick(day?.date)}
              className={`min-h-[120px] p-2 border-r border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                !day?.isCurrentMonth ? 'bg-muted/30' : 'bg-background'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-sm font-medium ${
                    !day?.isCurrentMonth
                      ? 'text-muted-foreground'
                      : isTodayDate
                      ? 'bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center'
                      : 'text-foreground'
                  }`}
                >
                  {day?.date?.getDate()}
                </span>
                {dayEvents?.length > 0 && (
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium">
                    {dayEvents?.length}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                {dayEvents?.slice(0, 2)?.map((event, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e?.stopPropagation();
                      onEventClick(event);
                    }}
                    className="w-full text-left p-1.5 rounded text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors truncate"
                  >
                    <div className="flex items-center gap-1">
                      <Icon name="Circle" size={6} className="flex-shrink-0" />
                      <span className="truncate">{event?.title}</span>
                    </div>
                  </button>
                ))}
                {dayEvents?.length > 2 && (
                  <button
                    onClick={(e) => {
                      e?.stopPropagation();
                      onDateClick(day?.date);
                    }}
                    className="w-full text-left text-xs text-primary hover:text-primary/80 font-medium"
                  >
                    +{dayEvents?.length - 2} more
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;