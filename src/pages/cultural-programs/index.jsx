import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FilterBar from './components/FilterBar';
import FeaturedPrograms from './components/FeaturedPrograms';
import CultureCategories from './components/CultureCategories';
import UpcomingEvents from './components/UpcomingEvents';
import ArtistShowcase from './components/ArtistShowcase';
import CommunityGallery from './components/CommunityGallery';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ProgramCard from './components/ProgramCard';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';



const CulturalPrograms = () => {
  const [filters, setFilters] = useState({
    search: '',
    culture: 'all',
    category: 'all',
    location: 'all',
    level: 'all'
  });

  const [filteredPrograms, setFilteredPrograms] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allPrograms = [
  {
    id: 1,
    title: "Classical Indian Bharatanatyam Dance",
    description: "Learn the ancient art of Bharatanatyam, one of India's oldest classical dance forms. Master intricate footwork, expressive hand gestures, and storytelling through movement.",
    culture: "Indian",
    category: "dance",
    level: "beginner",
    location: "New York, NY",
    schedule: "Every Saturday, 10:00 AM - 12:00 PM",
    duration: "12 weeks",
    price: 299,
    participants: 24,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12149432a-1765037026113.png",
    imageAlt: "Indian woman in traditional red and gold Bharatanatyam costume performing classical dance with precise mudra hand gestures in temple",
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    title: "Mandarin Language Fundamentals",
    description: "Begin your journey into Mandarin Chinese with comprehensive lessons covering pronunciation, basic grammar, and everyday conversation skills.",
    culture: "Chinese",
    category: "language",
    level: "beginner",
    location: "Online/Virtual",
    schedule: "Tuesdays & Thursdays, 7:00 PM - 8:30 PM",
    duration: "8 weeks",
    price: 199,
    participants: 32,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5fa050e-1764704031317.png",
    imageAlt: "Asian teacher in modern classroom pointing at Chinese characters on whiteboard during interactive Mandarin language lesson",
    isNew: false,
    isFeatured: true
  },
  {
    id: 3,
    title: "Authentic Mexican Cooking Workshop",
    description: "Discover the secrets of traditional Mexican cuisine. Learn to prepare authentic dishes from various regions including moles, tamales, and fresh salsas.",
    culture: "Mexican",
    category: "cooking",
    level: "all-levels",
    location: "Los Angeles, CA",
    schedule: "Sundays, 2:00 PM - 5:00 PM",
    duration: "6 weeks",
    price: 249,
    participants: 18,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13a99f512-1764667808849.png",
    imageAlt: "Mexican chef in traditional white uniform preparing colorful authentic tacos with fresh ingredients in rustic kitchen setting",
    isNew: true,
    isFeatured: true
  },
  {
    id: 4,
    title: "West African Drumming Circle",
    description: "Experience the powerful rhythms of West African percussion. Learn traditional djembe techniques and participate in authentic drum circle ceremonies.",
    culture: "African",
    category: "music",
    level: "intermediate",
    location: "Chicago, IL",
    schedule: "Wednesdays, 6:30 PM - 8:00 PM",
    duration: "10 weeks",
    price: 179,
    participants: 20,
    image: "https://images.unsplash.com/photo-1523689119443-df96632084a1",
    imageAlt: "African musicians in colorful traditional attire playing djembe drums in energetic outdoor drumming circle performance",
    isNew: false,
    isFeatured: false
  },
  {
    id: 5,
    title: "Arabic Calligraphy Masterclass",
    description: "Master the elegant art of Arabic calligraphy. Learn various traditional scripts including Naskh, Thuluth, and Diwani with expert guidance.",
    culture: "Middle Eastern",
    category: "art",
    level: "beginner",
    location: "Houston, TX",
    schedule: "Saturdays, 1:00 PM - 3:00 PM",
    duration: "8 weeks",
    price: 159,
    participants: 15,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a82d1855-1764758362296.png",
    imageAlt: "Middle Eastern calligrapher in traditional dress carefully writing ornate Arabic script with reed pen on parchment paper",
    isNew: false,
    isFeatured: false
  },
  {
    id: 6,
    title: "European Folk Dance Ensemble",
    description: "Explore traditional folk dances from across Europe including Irish step dancing, Greek circle dances, and Polish polkas in a fun group setting.",
    culture: "European",
    category: "dance",
    level: "all-levels",
    location: "San Francisco, CA",
    schedule: "Fridays, 7:00 PM - 9:00 PM",
    duration: "12 weeks",
    price: 219,
    participants: 28,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_197b33128-1764643219284.png",
    imageAlt: "European folk dancers in colorful traditional regional costumes performing synchronized group dance in historic town square",
    isNew: true,
    isFeatured: false
  }];


  const upcomingEvents = [
  {
    id: 1,
    title: "Diwali Festival of Lights Celebration",
    description: "Join us for a spectacular celebration of Diwali featuring traditional dances, authentic Indian cuisine, rangoli art demonstrations, and a stunning fireworks display.",
    type: "Festival",
    date: "23",
    month: "Dec",
    time: "5:00 PM - 10:00 PM",
    venue: "Community Cultural Center, New York",
    attendees: 450,
    isFree: true,
    image: "https://images.unsplash.com/photo-1614723357885-d95bc4839dbb",
    imageAlt: "Vibrant Diwali celebration with women in colorful saris lighting traditional oil lamps surrounded by marigold flowers and rangoli patterns"
  },
  {
    id: 2,
    title: "Chinese New Year Dragon Dance Parade",
    description: "Experience the magic of Chinese New Year with our traditional dragon dance parade, lion dances, martial arts demonstrations, and authentic street food festival.",
    type: "Parade",
    date: "29",
    month: "Jan",
    time: "12:00 PM - 6:00 PM",
    venue: "Downtown Chinatown District",
    attendees: 800,
    isFree: true,
    image: "https://images.unsplash.com/photo-1647482897893-3101cfaef492",
    imageAlt: "Spectacular Chinese New Year parade with massive red and gold dragon costume being carried by performers through crowded festive street"
  },
  {
    id: 3,
    title: "Cinco de Mayo Cultural Festival",
    description: "Celebrate Mexican heritage with live mariachi bands, folkloric dance performances, traditional food vendors, and hands-on craft workshops for all ages.",
    type: "Festival",
    date: "05",
    month: "May",
    time: "11:00 AM - 8:00 PM",
    venue: "City Park Amphitheater, Los Angeles",
    attendees: 600,
    isFree: false,
    image: "https://images.unsplash.com/photo-1600045108547-e98b77f7ccbd",
    imageAlt: "Mexican dancers in vibrant traditional dresses performing folkloric dance with colorful ribbons during Cinco de Mayo celebration"
  },
  {
    id: 4,
    title: "African Heritage Music & Arts Showcase",
    description: "Immerse yourself in African culture through live drumming performances, traditional dance workshops, art exhibitions, and storytelling sessions by renowned griots.",
    type: "Showcase",
    date: "15",
    month: "Feb",
    time: "3:00 PM - 9:00 PM",
    venue: "Heritage Arts Center, Chicago",
    attendees: 350,
    isFree: false,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_172530e40-1765372776492.png",
    imageAlt: "African performers in colorful traditional ceremonial attire dancing energetically with drums during cultural heritage showcase"
  }];


  const featuredArtists = [
  {
    id: 1,
    name: "Priya Sharma",
    specialty: "Bharatanatyam Dance Master",
    location: "New York, NY",
    rating: 4.9,
    students: 250,
    expertise: ["Classical Dance", "Choreography", "Cultural Education"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_141420573-1765159079544.png",
    imageAlt: "Indian classical dance instructor Priya Sharma in elegant traditional costume demonstrating graceful Bharatanatyam pose in dance studio"
  },
  {
    id: 2,
    name: "Wei Chen",
    specialty: "Mandarin Language Expert",
    location: "San Francisco, CA",
    rating: 4.8,
    students: 420,
    expertise: ["Language Teaching", "Cultural Studies", "Translation"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f9f88657-1763292682460.png",
    imageAlt: "Asian male language instructor Wei Chen in professional attire smiling warmly while teaching Mandarin in modern classroom"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    specialty: "Mexican Culinary Artist",
    location: "Los Angeles, CA",
    rating: 5.0,
    students: 180,
    expertise: ["Traditional Cooking", "Regional Cuisine", "Food History"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a0eb4a41-1763301939964.png",
    imageAlt: "Hispanic female chef Maria Rodriguez in white chef coat preparing authentic Mexican dishes in professional kitchen"
  },
  {
    id: 4,
    name: "Kwame Osei",
    specialty: "West African Percussion Master",
    location: "Chicago, IL",
    rating: 4.9,
    students: 310,
    expertise: ["Djembe", "Traditional Rhythms", "Cultural Ceremonies"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_100467d8e-1765885031497.png",
    imageAlt: "African male percussion instructor Kwame Osei in traditional attire demonstrating djembe drumming techniques with focused expression"
  }];


  const galleryItems = [
  {
    id: 1,
    title: "Diwali Dance Performance",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_154afc0db-1764696092825.png",
    imageAlt: "Group of Indian dancers in vibrant traditional costumes performing synchronized Bharatanatyam dance during Diwali celebration",
    likes: 234,
    description: "Beautiful Bharatanatyam performance during our annual Diwali celebration"
  },
  {
    id: 2,
    title: "Chinese Calligraphy Workshop",
    image: "https://images.unsplash.com/photo-1608046878377-12e92b23e6e9",
    imageAlt: "Students practicing Chinese calligraphy with brushes and ink on traditional rice paper in focused workshop setting",
    likes: 189,
    description: "Students learning traditional Chinese calligraphy techniques"
  },
  {
    id: 3,
    title: "Mexican Cooking Class",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_158e54620-1765758283381.png",
    imageAlt: "Participants preparing authentic Mexican tacos with fresh ingredients during hands-on cooking workshop",
    likes: 312,
    description: "Hands-on experience making authentic Mexican tacos"
  },
  {
    id: 4,
    title: "African Drumming Circle",
    image: "https://images.unsplash.com/photo-1602707515601-ce9b723fb5eb",
    imageAlt: "Diverse group of participants playing djembe drums together in energetic outdoor drumming circle session",
    likes: 267,
    description: "Community members enjoying our weekly drumming circle"
  },
  {
    id: 5,
    title: "Henna Art Workshop",
    image: "https://images.unsplash.com/photo-1556350784-73febbcf33a3",
    imageAlt: "Artist applying intricate traditional henna designs on woman\'s hands during cultural art workshop",
    likes: 421,
    description: "Intricate henna designs created in our art workshop"
  },
  {
    id: 6,
    title: "Folk Dance Festival",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14de581ce-1765173475983.png",
    imageAlt: "European folk dancers in traditional costumes performing synchronized group dance at outdoor cultural festival",
    likes: 198,
    description: "European folk dance performance at our cultural festival"
  },
  {
    id: 7,
    title: "Language Exchange Meetup",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15ce21d02-1764791391752.png",
    imageAlt: "Diverse group of people engaged in animated conversation during multilingual language exchange meetup session",
    likes: 156,
    description: "Participants practicing multiple languages together"
  },
  {
    id: 8,
    title: "Cultural Art Exhibition",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17e6d5351-1765262216982.png",
    imageAlt: "Visitors admiring diverse collection of traditional cultural artwork displayed in modern gallery exhibition space",
    likes: 289,
    description: "Showcasing traditional art from various cultures"
  }];


  const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    program: "Bharatanatyam Dance Classes",
    rating: 5,
    comment: "The Bharatanatyam classes have been transformative! The instructor's passion and expertise made learning this beautiful art form an incredible journey. I've not only learned dance but also gained deep appreciation for Indian culture.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ad9e1013-1763294640440.png",
    avatarAlt: "Professional headshot of Sarah Johnson, Caucasian woman with long brown hair and warm smile wearing blue blouse",
    date: "December 2025"
  },
  {
    id: 2,
    name: "Michael Chen",
    program: "Mexican Cooking Workshop",
    rating: 5,
    comment: "As someone who loves cooking, this workshop exceeded all expectations. Chef Maria's authentic recipes and cultural insights made each class special. Now I can recreate restaurant-quality Mexican dishes at home!",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11e69798f-1763293582771.png",
    avatarAlt: "Professional headshot of Michael Chen, Asian man with short black hair and friendly smile in casual shirt",
    date: "November 2025"
  },
  {
    id: 3,
    name: "Aisha Patel",
    program: "Arabic Calligraphy",
    rating: 5,
    comment: "The calligraphy class was meditative and enriching. Learning this ancient art form connected me to my heritage in ways I never expected. The instructor\'s patience and guidance were exceptional.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11f0b2f2c-1763295813717.png",
    avatarAlt: "Professional headshot of Aisha Patel, South Asian woman with long dark hair and bright smile wearing traditional jewelry",
    date: "December 2025"
  },
  {
    id: 4,
    name: "David Martinez",
    program: "West African Drumming",
    rating: 5,
    comment: "The drumming circle has become the highlight of my week! The energy, community spirit, and cultural education make every session unforgettable. Kwame is an amazing teacher who brings authentic tradition to life.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_199428bcb-1763295913661.png",
    avatarAlt: "Professional headshot of David Martinez, Hispanic man with beard and warm expression wearing casual button-up shirt",
    date: "November 2025"
  },
  {
    id: 5,
    name: "Emily Wong",
    program: "Mandarin Language Classes",
    rating: 5,
    comment: "Wei\'s teaching method made learning Mandarin enjoyable and effective. The cultural context provided in each lesson helped me understand not just the language but also Chinese traditions and customs.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13895f6ce-1763294091716.png",
    avatarAlt: "Professional headshot of Emily Wong, Asian woman with shoulder-length black hair and confident smile in professional attire",
    date: "December 2025"
  },
  {
    id: 6,
    name: "James Thompson",
    program: "European Folk Dance",
    rating: 5,
    comment: "I joined the folk dance ensemble to stay active and ended up discovering a passion! The variety of dances from different European cultures keeps it exciting, and the community is wonderfully welcoming.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1219eacec-1763294869102.png",
    avatarAlt: "Professional headshot of James Thompson, Caucasian man with short brown hair and friendly smile in casual attire",
    date: "November 2025"
  }];


  useEffect(() => {
    let filtered = [...allPrograms];

    if (filters?.search) {
      filtered = filtered?.filter((program) =>
      program?.title?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      program?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    if (filters?.culture !== 'all') {
      filtered = filtered?.filter((program) =>
      program?.culture?.toLowerCase() === filters?.culture?.toLowerCase()
      );
    }

    if (filters?.category !== 'all') {
      filtered = filtered?.filter((program) =>
      program?.category === filters?.category
      );
    }

    if (filters?.location !== 'all') {
      filtered = filtered?.filter((program) =>
      program?.location?.toLowerCase()?.includes(filters?.location?.toLowerCase())
      );
    }

    if (filters?.level !== 'all') {
      filtered = filtered?.filter((program) =>
      program?.level === filters?.level
      );
    }

    setFilteredPrograms(filtered);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    if (key === 'reset') {
      setFilters({
        search: '',
        culture: 'all',
        category: 'all',
        location: 'all',
        level: 'all'
      });
    } else {
      setFilters((prev) => ({
        ...prev,
        [key]: value
      }));
    }
  };

  const handleRegister = (program) => {
    alert(`Registration initiated for: ${program?.title}\n\nYou will be redirected to the registration form.`);
  };

  const handleViewDetails = (program) => {
    alert(`Viewing details for: ${program?.title}\n\n${program?.description}`);
  };

  const handleCategoryClick = (category) => {
    setFilters((prev) => ({
      ...prev,
      culture: category?.toLowerCase()?.replace(' culture', '')
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEventClick = (event) => {
    alert(`Event Details:\n\n${event?.title}\n${event?.description}\n\nDate: ${event?.month} ${event?.date}\nTime: ${event?.time}\nVenue: ${event?.venue}`);
  };

  const handleArtistClick = (artist) => {
    alert(`Artist Profile:\n\n${artist?.name}\n${artist?.specialty}\n\nLocation: ${artist?.location}\nRating: ${artist?.rating}/5\nStudents: ${artist?.students}\n\nExpertise: ${artist?.expertise?.join(', ')}`);
  };

  const handleSearchClick = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const handleFilterClick = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    alert('Welcome to CulturalConnect!\n\nYou will be redirected to create your account and start exploring programs.');
  };

  const handleLearnMore = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <HeroSection
          onSearchClick={handleSearchClick}
          onFilterClick={handleFilterClick} />


        <FilterBar
          onFilterChange={handleFilterChange}
          activeFilters={filters} />


        {filteredPrograms?.length > 0 ?
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {Object.values(filters)?.some((val) => val && val !== 'all') ?
                `Filtered Programs (${filteredPrograms?.length})` :
                'All Programs'}
                </h2>
                <p className="text-muted-foreground">
                  {Object.values(filters)?.some((val) => val && val !== 'all') ?
                'Showing results based on your filters' : 'Browse our complete collection of cultural programs'}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms?.map((program) =>
              <ProgramCard
                key={program?.id}
                program={program}
                onRegister={handleRegister}
                onViewDetails={handleViewDetails} />

              )}
              </div>
            </div>
          </section> :

        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} color="var(--color-muted-foreground)" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">No Programs Found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any programs matching your filters. Try adjusting your search criteria.
                </p>
                <Button
                variant="outline"
                onClick={() => handleFilterChange('reset')}>

                  Clear All Filters
                </Button>
              </div>
            </div>
          </section>
        }

        <FeaturedPrograms
          programs={allPrograms?.filter((p) => p?.isFeatured)}
          onRegister={handleRegister}
          onViewDetails={handleViewDetails} />


        <CultureCategories onCategoryClick={handleCategoryClick} />

        <UpcomingEvents
          events={upcomingEvents}
          onEventClick={handleEventClick} />


        <ArtistShowcase
          artists={featuredArtists}
          onArtistClick={handleArtistClick} />


        <CommunityGallery galleryItems={galleryItems} />

        <TestimonialsSection testimonials={testimonials} />

        <CTASection
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore} />

      </main>
      <Footer />
    </div>);

};

export default CulturalPrograms;