import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onClearFilters,
  isOpen,
  onToggle 
}) => {
  const cultureOptions = [
    { value: 'all', label: 'All Cultures' },
    { value: 'indian', label: 'Indian' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'african', label: 'African' },
    { value: 'middle-eastern', label: 'Middle Eastern' },
    { value: 'european', label: 'European' },
    { value: 'latin-american', label: 'Latin American' },
    { value: 'asian', label: 'Asian' }
  ];

  const eventTypeOptions = [
    { value: 'all', label: 'All Event Types' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'festival', label: 'Festival' },
    { value: 'class', label: 'Class' },
    { value: 'meetup', label: 'Community Meetup' },
    { value: 'performance', label: 'Performance' },
    { value: 'exhibition', label: 'Exhibition' },
    { value: 'seminar', label: 'Seminar' }
  ];

  const locationOptions = [
    { value: 'all', label: 'All Locations' },
    { value: 'new-york', label: 'New York, NY' },
    { value: 'los-angeles', label: 'Los Angeles, CA' },
    { value: 'chicago', label: 'Chicago, IL' },
    { value: 'houston', label: 'Houston, TX' },
    { value: 'miami', label: 'Miami, FL' },
    { value: 'san-francisco', label: 'San Francisco, CA' },
    { value: 'online', label: 'Online/Virtual' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors lg:hidden"
      >
        <div className="flex items-center gap-3">
          <Icon name="Filter" size={20} color="var(--color-primary)" />
          <span className="font-semibold text-foreground">Filters</span>
        </div>
        <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={20} />
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block p-6 space-y-6`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Icon name="Filter" size={20} color="var(--color-primary)" />
            Filter Events
          </h3>
          <button
            onClick={onClearFilters}
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Clear All
          </button>
        </div>

        <div>
          <Input
            type="search"
            placeholder="Search events..."
            value={filters?.search}
            onChange={(e) => onFilterChange('search', e?.target?.value)}
            className="mb-4"
          />
        </div>

        <div>
          <Select
            label="Culture"
            options={cultureOptions}
            value={filters?.culture}
            onChange={(value) => onFilterChange('culture', value)}
          />
        </div>

        <div>
          <Select
            label="Event Type"
            options={eventTypeOptions}
            value={filters?.eventType}
            onChange={(value) => onFilterChange('eventType', value)}
          />
        </div>

        <div>
          <Select
            label="Location"
            options={locationOptions}
            value={filters?.location}
            onChange={(value) => onFilterChange('location', value)}
          />
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-3">Event Features</p>
          <div className="space-y-3">
            <Checkbox
              label="Free Events"
              checked={filters?.freeOnly}
              onChange={(e) => onFilterChange('freeOnly', e?.target?.checked)}
            />
            <Checkbox
              label="Virtual Events"
              checked={filters?.virtualOnly}
              onChange={(e) => onFilterChange('virtualOnly', e?.target?.checked)}
            />
            <Checkbox
              label="Family Friendly"
              checked={filters?.familyFriendly}
              onChange={(e) => onFilterChange('familyFriendly', e?.target?.checked)}
            />
            <Checkbox
              label="Registration Required"
              checked={filters?.registrationRequired}
              onChange={(e) => onFilterChange('registrationRequired', e?.target?.checked)}
            />
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-sm font-medium text-foreground mb-3">Date Range</p>
          <div className="space-y-3">
            <Input
              type="date"
              label="From"
              value={filters?.dateFrom}
              onChange={(e) => onFilterChange('dateFrom', e?.target?.value)}
            />
            <Input
              type="date"
              label="To"
              value={filters?.dateTo}
              onChange={(e) => onFilterChange('dateTo', e?.target?.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;