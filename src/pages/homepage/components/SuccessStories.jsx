import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
  {
    id: 1,
    name: "Maria Rodriguez",
    country: "Mexico",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13f5907c7-1763298966546.png",
    imageAlt: "Professional Hispanic woman with long dark hair wearing business casual attire smiling warmly at camera in modern office setting",
    visaType: "H-1B Work Visa",
    timeline: "6 months",
    quote: "CulturalConnect made my immigration journey seamless. The expert guidance helped me navigate the complex H-1B process, and the cultural programs helped me feel at home immediately. I found my community here.",
    achievement: "Now working as Senior Software Engineer",
    rating: 5
  },
  {
    id: 2,
    name: "Chen Wei",
    country: "China",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15be4265d-1763301291596.png",
    imageAlt: "Young Asian man with short black hair wearing navy blue suit and white shirt smiling confidently in professional corporate environment",
    visaType: "Green Card",
    timeline: "18 months",
    quote: "The immigration consultants were incredibly knowledgeable and patient. They guided me through every step of my green card application. The community forum connected me with others going through similar experiences.",
    achievement: "Permanent Resident & Community Mentor",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Sharma",
    country: "India",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
    imageAlt: "Indian woman with long black hair wearing traditional kurta with modern styling smiling joyfully in bright natural lighting",
    visaType: "Student Visa",
    timeline: "4 months",
    quote: "As an international student, I was overwhelmed with the visa process. CulturalConnect's step-by-step guidance and cultural events helped me transition smoothly. I've made lifelong friends through their programs.",
    achievement: "Graduate Student & Cultural Ambassador",
    rating: 5
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    country: "Egypt",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_108989dad-1763294264238.png",
    imageAlt: "Middle Eastern man with short dark hair and beard wearing casual button-down shirt smiling warmly in outdoor urban setting",
    visaType: "Family Reunification",
    timeline: "12 months",
    quote: "Reuniting with my family seemed impossible until I found CulturalConnect. Their immigration experts handled everything professionally, and the cultural programs helped my family integrate into the community beautifully.",
    achievement: "Reunited Family & Active Community Member",
    rating: 5
  }];


  const handleNext = () => {
    setActiveStory((prev) => (prev + 1) % stories?.length);
  };

  const handlePrev = () => {
    setActiveStory((prev) => (prev - 1 + stories?.length) % stories?.length);
  };

  const currentStory = stories?.[activeStory];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real journeys, real results. See how we've helped thousands achieve their immigration goals
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                
                <div className="relative rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src={currentStory?.image}
                    alt={currentStory?.imageAlt}
                    className="w-full h-96 object-cover" />

                </div>

                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-card rounded-2xl px-6 py-3 shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      From {currentStory?.country}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(currentStory?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                  )}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {currentStory?.name}
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <Icon name="FileCheck" size={14} />
                    {currentStory?.visaType}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                    <Icon name="Clock" size={14} />
                    {currentStory?.timeline}
                  </span>
                </div>
              </div>

              <blockquote className="relative">
                <Icon
                  name="Quote"
                  size={40}
                  className="absolute -top-2 -left-2 text-primary/20" />

                <p className="text-lg text-foreground leading-relaxed pl-8 italic">
                  "{currentStory?.quote}"
                </p>
              </blockquote>

              <div className="bg-success/10 rounded-xl p-4 border border-success/20">
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="Trophy" size={18} className="text-success" />
                  <span className="text-sm font-semibold text-success">Achievement</span>
                </div>
                <p className="text-foreground font-medium">{currentStory?.achievement}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-md"
              aria-label="Previous story">

              <Icon name="ChevronLeft" size={20} />
            </button>

            <div className="flex gap-2">
              {stories?.map((_, index) =>
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                index === activeStory ?
                'bg-primary w-8' : 'bg-border w-2 hover:bg-primary/50'}`
                }
                aria-label={`Go to story ${index + 1}`} />

              )}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-md"
              aria-label="Next story">

              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
          { label: "Success Rate", value: "95%", icon: "TrendingUp" },
          { label: "Happy Clients", value: "10K+", icon: "Users" },
          { label: "Countries Served", value: "50+", icon: "Globe" },
          { label: "Expert Consultants", value: "200+", icon: "Award" }]?.
          map((stat, index) =>
          <div
            key={index}
            className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all duration-300">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default SuccessStories;