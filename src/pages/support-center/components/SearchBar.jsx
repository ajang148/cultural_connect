import React, { useState } from 'react';

import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e?.preventDefault();
    if (onSearch && searchQuery?.trim()) {
      onSearch(searchQuery);
    }
  };

  const popularSearches = [
    'Visa application status',
    'Document requirements',
    'Cultural event registration',
    'Immigration consultation',
    'Community forum access'
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-10">
      <div className="bg-card rounded-2xl shadow-medium p-6 border border-border">
        <form onSubmit={handleSearch} className="flex gap-3 mb-4">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Search for help articles, guides, or ask a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            variant="default"
            iconName="Search"
            iconPosition="left"
          >
            Search
          </Button>
        </form>
        
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Popular searches:</span>
          {popularSearches?.map((search, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(search)}
              className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;