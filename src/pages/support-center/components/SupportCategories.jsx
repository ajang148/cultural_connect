import React from 'react';
import Icon from '../../../components/AppIcon';

const SupportCategories = ({ onCategorySelect }) => {
  const categories = [
    {
      id: 'immigration',
      icon: 'FileText',
      title: 'Immigration Services',
      description: 'Visa applications, document requirements, and legal guidance',
      articleCount: 127,
      color: 'bg-primary/10 text-primary'
    },
    {
      id: 'cultural',
      icon: 'Calendar',
      title: 'Cultural Programs',
      description: 'Event registration, workshop details, and program information',
      articleCount: 89,
      color: 'bg-secondary/10 text-secondary'
    },
    {
      id: 'community',
      icon: 'Users',
      title: 'Community Forum',
      description: 'Forum navigation, posting guidelines, and member connections',
      articleCount: 156,
      color: 'bg-trust/10 text-trust'
    },
    {
      id: 'account',
      icon: 'User',
      title: 'Account & Settings',
      description: 'Profile management, privacy settings, and preferences',
      articleCount: 64,
      color: 'bg-accent/10 text-accent'
    },
    {
      id: 'technical',
      icon: 'Settings',
      title: 'Technical Support',
      description: 'Platform issues, troubleshooting, and technical assistance',
      articleCount: 92,
      color: 'bg-brand-gray/10 text-brand-gray'
    },
    {
      id: 'billing',
      icon: 'CreditCard',
      title: 'Billing & Payments',
      description: 'Subscription plans, payment methods, and invoices',
      articleCount: 45,
      color: 'bg-warning/10 text-warning'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers quickly by exploring our comprehensive help categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => onCategorySelect && onCategorySelect(category?.id)}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div className={`w-14 h-14 ${category?.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={category?.icon} size={28} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category?.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {category?.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  {category?.articleCount} articles
                </span>
                <Icon name="ArrowRight" size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCategories;