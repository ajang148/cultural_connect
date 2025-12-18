import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth, onToday, viewMode, onViewModeChange }) => {
  const monthYear = currentDate?.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevMonth}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
              aria-label="Previous month"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={onNextMonth}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
              aria-label="Next month"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
          <h2 className="text-2xl font-semibold text-foreground">{monthYear}</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={onToday}
          >
            Today
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('month')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'month' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => onViewModeChange('week')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'week' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'list' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;