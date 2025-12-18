import React from 'react';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const QuickAccessPortals = () => {
  const portals = [
    {
      id: 1,
      title: "Cultural Programs",
      description: "Explore workshops, events, and celebrations that connect you with your heritage",
      icon: "Calendar",
      color: "from-primary to-brand-teal",
      link: "/cultural-programs",
      stats: "50+ Events Monthly"
    },
    {
      id: 2,
      title: "Immigration Services",
      description: "Expert guidance for visa applications, document preparation, and legal support",
      icon: "FileText",
      color: "from-secondary to-brand-gold",
      link: "/immigration-services",
      stats: "95% Success Rate"
    },
    {
      id: 3,
      title: "Community Forum",
      description: "Connect with others, share experiences, and find mentorship opportunities",
      icon: "Users",
      color: "from-accent to-brand-terracotta",
      link: "/community-forum",
      stats: "10K+ Members"
    },
    {
      id: 4,
      title: "Expert Network",
      description: "Access certified immigration lawyers and cultural program coordinators",
      icon: "Award",
      color: "from-trust to-brand-forest",
      link: "/immigration-services",
      stats: "200+ Experts"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quick Access to Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for your cultural journey and immigration process in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals?.map((portal) => (
            <Link
              key={portal?.id}
              to={portal?.link}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${portal?.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${portal?.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={portal?.icon} size={28} color="#FFFFFF" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {portal?.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {portal?.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">
                    {portal?.stats}
                  </span>
                  <Icon 
                    name="ArrowRight" 
                    size={18} 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessPortals;