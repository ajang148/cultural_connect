import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CulturalSpotlight = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const spotlights = {
    featured: [
    {
      id: 1,
      title: "Diwali Festival Celebration 2025",
      culture: "Indian",
      image: "https://images.unsplash.com/photo-1637384999273-68131490b4c3",
      imageAlt: "Beautiful display of traditional Indian oil lamps and colorful rangoli patterns during Diwali festival celebration with people in traditional attire",
      date: "December 28, 2025",
      location: "Community Center Hall",
      attendees: 250,
      description: "Join us for an evening of lights, traditional dance performances, authentic cuisine, and cultural workshops celebrating the Festival of Lights."
    },
    {
      id: 2,
      title: "Lunar New Year Gala",
      culture: "Chinese",
      image: "https://images.unsplash.com/photo-1674103389324-f45815c6becb",
      imageAlt: "Vibrant red and gold Chinese New Year decorations with traditional lanterns hanging in festive celebration with dragon dance performers",
      date: "January 29, 2025",
      location: "Grand Ballroom",
      attendees: 400,
      description: "Welcome the Year of the Snake with lion dances, calligraphy demonstrations, traditional music, and a spectacular feast."
    },
    {
      id: 3,
      title: "African Heritage Month Showcase",
      culture: "Pan-African",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14de581ce-1765173475983.png",
      imageAlt: "Group of African dancers in colorful traditional clothing performing energetic cultural dance with drums and traditional instruments at outdoor festival",
      date: "February 15, 2025",
      location: "Cultural Arts Center",
      attendees: 300,
      description: "Celebrate the rich diversity of African cultures through art exhibitions, drumming circles, storytelling, and traditional cuisine."
    }],

    upcoming: [
    {
      id: 4,
      title: "Persian Nowruz Spring Festival",
      culture: "Persian",
      image: "https://images.unsplash.com/photo-1527892402182-79f03b82a38e",
      imageAlt: "Traditional Persian Haft-Seen table setting with seven symbolic items for Nowruz celebration including colorful flowers and decorative elements",
      date: "March 20, 2025",
      location: "Heritage Garden",
      attendees: 180,
      description: "Experience the Persian New Year with traditional Haft-Seen displays, poetry readings, and authentic Persian cuisine."
    },
    {
      id: 5,
      title: "Caribbean Carnival Celebration",
      culture: "Caribbean",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1181c7363-1765637011035.png",
      imageAlt: "Colorful Caribbean carnival parade with dancers in elaborate feathered costumes performing soca dance moves with steel drum band",
      date: "April 12, 2025",
      location: "Waterfront Plaza",
      attendees: 500,
      description: "Dance to soca and calypso rhythms, enjoy island cuisine, and witness spectacular costume displays."
    }]

  };

  const tabs = [
  { id: 'featured', label: 'Featured Events', icon: 'Star' },
  { id: 'upcoming', label: 'Coming Soon', icon: 'Calendar' }];


  return (
    <section className="py-16 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Cultural Spotlight
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and celebrate diverse cultures through authentic events and programs
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {tabs?.map((tab) =>
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            activeTab === tab?.id ?
            'bg-primary text-primary-foreground shadow-md' :
            'bg-card text-foreground hover:bg-muted border border-border'}`
            }>

              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {spotlights?.[activeTab]?.map((event) =>
          <div
            key={event?.id}
            className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">

              <div className="relative h-48 overflow-hidden">
                <Image
                src={event?.image}
                alt={event?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {event?.culture}
                </div>
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  <span>{event?.attendees} attending</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event?.title}
                </h3>

                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>{event?.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    <span>{event?.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {event?.description}
                </p>

                <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">

                  Learn More
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left">

            View Full Cultural Calendar
          </Button>
        </div>
      </div>
    </section>);

};

export default CulturalSpotlight;