import React from 'react';
import Icon from '../../../components/AppIcon';
import ProgramCard from './ProgramCard';

const FeaturedPrograms = ({ programs, onRegister, onViewDetails }) => {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Icon name="Star" size={20} color="var(--color-secondary)" />
              </div>
              <h2 className="text-3xl font-bold text-foreground font-accent">Featured Programs</h2>
            </div>
            <p className="text-muted-foreground">Handpicked cultural experiences for this month</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs?.map((program) => (
            <ProgramCard
              key={program?.id}
              program={program}
              onRegister={onRegister}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;