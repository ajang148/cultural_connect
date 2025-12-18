import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
              <Icon name="MessageSquare" size={24} color="var(--color-success)" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent">
              Community Stories
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from participants who've enriched their lives through our programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial?.id}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.avatarAlt}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial?.program}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    color={i < testimonial?.rating ? "var(--color-brand-gold)" : "var(--color-border)"}
                  />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "{testimonial?.comment}"
              </p>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name="Calendar" size={12} />
                <span>{testimonial?.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;