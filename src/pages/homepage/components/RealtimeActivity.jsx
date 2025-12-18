import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RealtimeActivity = () => {
  const [activities, setActivities] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  const allActivities = [
  {
    id: 1,
    type: "visa_success",
    user: "Sarah Johnson",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1456eb2f9-1763294356174.png",
    avatarAlt: "Professional woman with blonde hair wearing business attire smiling confidently in modern office environment",
    action: "received H-1B visa approval",
    time: "2 minutes ago",
    icon: "CheckCircle",
    color: "text-success"
  },
  {
    id: 2,
    type: "new_member",
    user: "Raj Patel",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png",
    avatarAlt: "Indian man with short black hair wearing casual blue shirt smiling warmly in outdoor natural setting",
    action: "joined the community",
    time: "5 minutes ago",
    icon: "UserPlus",
    color: "text-primary"
  },
  {
    id: 3,
    type: "event_registration",
    user: "Elena Martinez",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17c0179e8-1763295822377.png",
    avatarAlt: "Hispanic woman with long dark hair wearing elegant black top smiling joyfully in bright studio lighting",
    action: "registered for Diwali Festival",
    time: "8 minutes ago",
    icon: "Calendar",
    color: "text-secondary"
  },
  {
    id: 4,
    type: "consultation_booked",
    user: "Michael Chen",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a99cc915-1763299240589.png",
    avatarAlt: "Asian man with short dark hair wearing professional gray suit smiling confidently in corporate office setting",
    action: "booked immigration consultation",
    time: "12 minutes ago",
    icon: "Calendar",
    color: "text-accent"
  },
  {
    id: 5,
    type: "visa_success",
    user: "Fatima Al-Rashid",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1400f5ad7-1763296600804.png",
    avatarAlt: "Middle Eastern woman with long dark hair wearing professional attire smiling warmly in modern workspace",
    action: "received Green Card approval",
    time: "15 minutes ago",
    icon: "CheckCircle",
    color: "text-success"
  },
  {
    id: 6,
    type: "new_member",
    user: "David Kim",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecb5f28a-1763295349952.png",
    avatarAlt: "Korean man with short black hair wearing casual denim shirt smiling cheerfully in urban outdoor environment",
    action: "joined the community",
    time: "18 minutes ago",
    icon: "UserPlus",
    color: "text-primary"
  },
  {
    id: 7,
    type: "event_registration",
    user: "Aisha Mohammed",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfea6559-1763295615436.png",
    avatarAlt: "African woman with natural curly hair wearing colorful traditional headwrap smiling radiantly in bright natural light",
    action: "registered for Lunar New Year Gala",
    time: "22 minutes ago",
    icon: "Calendar",
    color: "text-secondary"
  },
  {
    id: 8,
    type: "visa_success",
    user: "Carlos Rodriguez",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f96e3774-1763296398369.png",
    avatarAlt: "Hispanic man with short dark hair and beard wearing casual white shirt smiling warmly in outdoor setting",
    action: "received Student Visa approval",
    time: "25 minutes ago",
    icon: "CheckCircle",
    color: "text-success"
  }];


  useEffect(() => {
    setActivities(allActivities?.slice(0, visibleCount));
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allActivities?.length));
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Real-Time Activity
                </h2>
                <p className="text-muted-foreground">
                  See what's happening in our community right now
                </p>
              </div>
              <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>

            <div className="space-y-4">
              {activities?.map((activity, index) =>
              <div
                key={activity?.id}
                className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                }}>

                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <Image
                      src={activity?.avatar}
                      alt={activity?.avatarAlt}
                      className="w-12 h-12 rounded-full object-cover border-2 border-background" />

                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background flex items-center justify-center border-2 border-background ${activity?.color}`}>
                        <Icon name={activity?.icon} size={14} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-foreground">
                          <span className="font-semibold">{activity?.user}</span>
                          {' '}
                          <span className="text-muted-foreground">{activity?.action}</span>
                        </p>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {activity?.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {visibleCount < allActivities?.length &&
              <button
                onClick={handleLoadMore}
                className="w-full py-3 rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300 font-medium">

                  Load More Activities
                </button>
              }
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary to-brand-teal rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">10,247</div>
                  <div className="text-sm text-white/80">Active Members</div>
                </div>
              </div>
              <div className="text-sm text-white/90">
                Join thousands of community members navigating their cultural journey together
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Calendar" size={20} className="text-primary" />
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {[
                { name: "Diwali Festival", date: "Dec 28", attendees: 250 },
                { name: "Lunar New Year", date: "Jan 29", attendees: 400 },
                { name: "Nowruz Festival", date: "Mar 20", attendees: 180 }]?.
                map((event, index) =>
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">

                    <div>
                      <div className="font-medium text-foreground text-sm">{event?.name}</div>
                      <div className="text-xs text-muted-foreground">{event?.date}</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Icon name="Users" size={14} />
                      <span>{event?.attendees}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-brand-gold/10 rounded-2xl p-6 border border-secondary/20">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Icon name="Award" size={20} className="text-secondary" />
                This Week's Stats
              </h3>
              <div className="space-y-3">
                {[
                { label: "Visa Approvals", value: "47", icon: "CheckCircle" },
                { label: "New Members", value: "156", icon: "UserPlus" },
                { label: "Events Hosted", value: "12", icon: "Calendar" }]?.
                map((stat, index) =>
                <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name={stat?.icon} size={16} className="text-secondary" />
                      <span className="text-sm text-muted-foreground">{stat?.label}</span>
                    </div>
                    <span className="text-lg font-bold text-foreground">{stat?.value}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>);

};

export default RealtimeActivity;