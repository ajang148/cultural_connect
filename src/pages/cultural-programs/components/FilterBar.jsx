import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const FilterBar = ({ onFilterChange, activeFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cultureOptions = [
    { value: 'all', label: 'All Cultures' },
    { value: 'indian', label: 'Indian' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'mexican', label: 'Mexican' },
    { value: 'african', label: 'African' },
    { value: 'middle-eastern', label: 'Middle Eastern' },
    { value: 'european', label: 'European' },
    { value: 'latin-american', label: 'Latin American' },
    { value: 'southeast-asian', label: 'Southeast Asian' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'dance', label: 'Dance & Movement' },
    { value: 'music', label: 'Music & Performance' },
    { value: 'language', label: 'Language Classes' },
    { value: 'cooking', label: 'Cooking & Cuisine' },
    { value: 'art', label: 'Arts & Crafts' },
    { value: 'festival', label: 'Festivals & Celebrations' },
    { value: 'workshop', label: 'Workshops & Seminars' },
    { value: 'storytelling', label: 'Storytelling & Literature' }
  ];

  const locationOptions = [
    { value: 'all', label: 'All Locations' },
    { value: 'online', label: 'Online/Virtual' },
    { value: 'new-york', label: 'New York, NY' },
    { value: 'los-angeles', label: 'Los Angeles, CA' },
    { value: 'chicago', label: 'Chicago, IL' },
    { value: 'houston', label: 'Houston, TX' },
    { value: 'miami', label: 'Miami, FL' },
    { value: 'san-francisco', label: 'San Francisco, CA' }
  ];

  const levelOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'all-levels', label: 'All Levels Welcome' }
  ];

  return (
    <div className="bg-card border-b border-border sticky top-16 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex-1 max-w-md">
            <Input
              type="search"
              placeholder="Search programs, workshops, events..."
              className="w-full"
              onChange={(e) => onFilterChange('search', e?.target?.value)}
            />
          </div>
          
          <Button
            variant="outline"
            size="default"
            iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
            <Select
              label="Culture"
              options={cultureOptions}
              value={activeFilters?.culture || 'all'}
              onChange={(value) => onFilterChange('culture', value)}
            />
            
            <Select
              label="Category"
              options={categoryOptions}
              value={activeFilters?.category || 'all'}
              onChange={(value) => onFilterChange('category', value)}
            />
            
            <Select
              label="Location"
              options={locationOptions}
              value={activeFilters?.location || 'all'}
              onChange={(value) => onFilterChange('location', value)}
            />
            
            <Select
              label="Skill Level"
              options={levelOptions}
              value={activeFilters?.level || 'all'}
              onChange={(value) => onFilterChange('level', value)}
            />
          </div>
        )}

        {Object.values(activeFilters)?.some(val => val && val !== 'all') && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {Object.entries(activeFilters)?.map(([key, value]) => {
                if (!value || value === 'all') return null;
                return (
                  <div key={key} className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    <span className="capitalize">{key}: {value}</span>
                    <button
                      onClick={() => onFilterChange(key, 'all')}
                      className="hover:bg-primary/20 rounded-full p-0.5"
                    >
                      <Icon name="X" size={14} />
                    </button>
                  </div>
                );
              })}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onFilterChange('reset')}
              >
                Clear All
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;