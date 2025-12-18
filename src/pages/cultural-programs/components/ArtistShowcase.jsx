import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ArtistShowcase = ({ artists, onArtistClick }) => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center">
              <Icon name="Award" size={24} color="var(--color-brand-gold)" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent">
              Featured Artists & Instructors
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from renowned cultural experts and master artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists?.map((artist) => (
            <div
              key={artist?.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onClick={() => onArtistClick(artist)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={artist?.image}
                  alt={artist?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{artist?.name}</h3>
                  <p className="text-sm text-white/80">{artist?.specialty}</p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="MapPin" size={14} color="var(--color-muted-foreground)" />
                  <span className="text-sm text-muted-foreground">{artist?.location}</span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} color="var(--color-brand-gold)" />
                    <span className="font-medium">{artist?.rating}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {artist?.students} students
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {artist?.expertise?.slice(0, 2)?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" fullWidth>
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistShowcase;