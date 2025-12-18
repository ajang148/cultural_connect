import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CalendarHeader from './components/CalendarHeader';
import FilterPanel from './components/FilterPanel';
import CalendarGrid from './components/CalendarGrid';
import EventListView from './components/EventListView';
import EventDetailsModal from './components/EventDetailsModal';
import RSVPModal from './components/RSVPModal';
import ShareModal from './components/ShareModal';

const CulturalCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    culture: 'all',
    eventType: 'all',
    location: 'all',
    freeOnly: false,
    virtualOnly: false,
    familyFriendly: false,
    registrationRequired: false,
    dateFrom: '',
    dateTo: ''
  });

  const mockEvents = [
  {
    id: 1,
    title: "Diwali Festival Celebration",
    description: "Join us for a spectacular celebration of lights featuring traditional dances, music performances, and authentic Indian cuisine.",
    fullDescription: `Experience the magic of Diwali, the Festival of Lights, in this grand celebration bringing together the Indian community and culture enthusiasts.\n\nThis event features traditional Rangoli art demonstrations, classical dance performances including Bharatanatyam and Kathak, live music by renowned artists, and a spectacular fireworks display. Enjoy authentic Indian cuisine from various regions, participate in traditional games, and shop for handcrafted items at our cultural bazaar.\n\nPerfect for families and individuals looking to experience the rich traditions of Indian culture. All ages welcome!`,
    culture: 'indian',
    cultureName: 'Indian',
    eventType: 'Festival',
    date: '2025-12-20',
    startTime: '18:00',
    endTime: '22:00',
    location: 'Community Cultural Center, New York, NY',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12cc8ed01-1765289716212.png",
    imageAlt: 'Vibrant Diwali celebration with colorful rangoli patterns, traditional oil lamps, and people in festive Indian attire celebrating together',
    isFree: false,
    price: '$25',
    isVirtual: false,
    familyFriendly: true,
    registrationRequired: true,
    attendeeCount: 245,
    organizer: 'Indian Cultural Association',
    attendees: [
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc96d634-1763295460493.png", avatarAlt: 'Professional headshot of Indian woman with long black hair wearing traditional red saree' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d0e6f0d-1763295389190.png", avatarAlt: 'Professional headshot of Indian man with short black hair in formal navy blue kurta' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dc96d634-1763295460493.png", avatarAlt: 'Professional headshot of young Indian woman with braided hair wearing colorful traditional dress' }],

    highlights: [
    'Traditional Rangoli art demonstrations',
    'Classical dance performances (Bharatanatyam & Kathak)',
    'Live music by renowned artists',
    'Authentic Indian cuisine from multiple regions',
    'Cultural bazaar with handcrafted items',
    'Spectacular fireworks display']

  },
  {
    id: 2,
    title: "Chinese New Year Gala",
    description: "Welcome the Year of the Snake with traditional lion dances, cultural performances, and festive celebrations.",
    fullDescription: `Ring in the Lunar New Year with our spectacular Chinese New Year Gala, celebrating the Year of the Snake with traditional customs and modern entertainment.\n\nWitness breathtaking lion and dragon dances performed by master troupes, enjoy traditional Chinese opera and contemporary performances, and participate in calligraphy workshops. Sample authentic regional Chinese cuisine, receive lucky red envelopes, and learn about zodiac traditions.\n\nThis family-friendly event brings together the Chinese community and welcomes everyone to experience the joy and prosperity of the new year.`,
    culture: 'chinese',
    cultureName: 'Chinese',
    eventType: 'Festival',
    date: '2025-12-18',
    startTime: '17:00',
    endTime: '21:00',
    location: 'Grand Ballroom, Los Angeles, CA',
    coordinates: { lat: 34.0522, lng: -118.2437 },
    image: "https://images.unsplash.com/photo-1712329779955-b28cda0db571",
    imageAlt: 'Spectacular Chinese New Year celebration with vibrant red and gold decorations, traditional lion dance performers, and families in festive attire',
    isFree: false,
    price: '$30',
    isVirtual: false,
    familyFriendly: true,
    registrationRequired: true,
    attendeeCount: 312,
    organizer: 'Chinese Cultural Foundation',
    attendees: [
    { avatar: "https://images.unsplash.com/photo-1734594309273-7a2a6457034a", avatarAlt: 'Professional headshot of Chinese woman with elegant updo hairstyle wearing traditional red qipao dress' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a75f5670-1763292878816.png", avatarAlt: 'Professional headshot of Chinese man with short black hair in formal traditional Chinese suit' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12f9400f4-1763293680082.png", avatarAlt: 'Professional headshot of young Chinese woman with long straight hair wearing modern festive outfit' }],

    highlights: [
    'Traditional lion and dragon dance performances',
    'Chinese opera and contemporary shows',
    'Calligraphy and paper cutting workshops',
    'Authentic regional Chinese cuisine',
    'Lucky red envelope distribution',
    'Zodiac fortune telling and traditions']

  },
  {
    id: 3,
    title: "Mexican Cooking Workshop",
    description: "Learn to prepare authentic Mexican dishes from expert chefs in this hands-on culinary experience.",
    fullDescription: `Discover the rich flavors and traditions of Mexican cuisine in this immersive cooking workshop led by award-winning chefs.\n\nLearn to prepare classic dishes including handmade tortillas, authentic mole sauce, fresh guacamole, and traditional tamales. Understand the cultural significance of ingredients and cooking techniques passed down through generations. Each participant will receive a recipe booklet and certificate of completion.\n\nPerfect for food enthusiasts and anyone wanting to expand their culinary skills while learning about Mexican culture through its cuisine.`,
    culture: 'mexican',
    cultureName: 'Mexican',
    eventType: 'Workshop',
    date: '2025-12-22',
    startTime: '14:00',
    endTime: '17:00',
    location: 'Culinary Arts Center, Houston, TX',
    coordinates: { lat: 29.7604, lng: -95.3698 },
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11bd10200-1764709901951.png",
    imageAlt: 'Hands-on Mexican cooking class with chef demonstrating traditional techniques, colorful fresh ingredients, and participants preparing authentic dishes',
    isFree: false,
    price: '$45',
    isVirtual: false,
    familyFriendly: false,
    registrationRequired: true,
    attendeeCount: 28,
    organizer: 'Latin American Culinary Institute',
    attendees: [
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1620e8365-1763300056403.png", avatarAlt: 'Professional headshot of Mexican woman with curly brown hair wearing chef whites and colorful apron' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2e21bd4-1763300441970.png", avatarAlt: 'Professional headshot of Mexican man with short dark hair in professional chef uniform' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_183d8e76e-1763300829522.png", avatarAlt: 'Professional headshot of young Mexican woman with long dark hair wearing casual cooking attire' }],

    highlights: [
    'Hands-on preparation of 4 authentic dishes',
    'Learn traditional cooking techniques',
    'Understanding cultural food significance',
    'Recipe booklet and certificate included',
    'Small group size for personalized instruction',
    'Enjoy your creations at the end']

  },
  {
    id: 4,
    title: "African Drumming Circle",
    description: "Experience the rhythms of Africa in this interactive drumming session led by master percussionists.",
    fullDescription: `Immerse yourself in the powerful rhythms and traditions of African drumming in this engaging community circle.\n\nLearn traditional West African rhythms on djembe and dunun drums from master percussionists. Understand the cultural significance of drumming in African communities and its role in storytelling and celebration. No experience necessary - all skill levels welcome.\n\nThis interactive session promotes community building through music and provides a unique cultural experience. Drums provided for all participants.`,
    culture: 'african',
    cultureName: 'African',
    eventType: 'Workshop',
    date: '2025-12-19',
    startTime: '19:00',
    endTime: '21:00',
    location: 'Community Arts Center, Chicago, IL',
    coordinates: { lat: 41.8781, lng: -87.6298 },
    image: "https://images.unsplash.com/photo-1704477367024-7a2807964ba7",
    imageAlt: 'Energetic African drumming circle with diverse participants playing traditional djembe drums, master percussionist leading, vibrant cultural atmosphere',
    isFree: true,
    price: 'Free',
    isVirtual: false,
    familyFriendly: true,
    registrationRequired: true,
    attendeeCount: 42,
    organizer: 'African Heritage Foundation',
    attendees: [
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11de475a9-1763300681348.png", avatarAlt: 'Professional headshot of African man with short hair wearing traditional colorful dashiki shirt' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d4c1684b-1763296440222.png", avatarAlt: 'Professional headshot of African woman with natural hair wearing vibrant traditional head wrap' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_138da930c-1763292864568.png", avatarAlt: 'Professional headshot of young African man with short hair in casual modern attire' }],

    highlights: [
    'Learn traditional West African rhythms',
    'Master percussionists instruction',
    'Cultural significance and storytelling',
    'All skill levels welcome',
    'Drums provided for participants',
    'Community building through music']

  },
  {
    id: 5,
    title: "Middle Eastern Dance Class",
    description: "Learn traditional Middle Eastern dance movements and cultural expressions in this beginner-friendly class.",
    fullDescription: `Discover the beauty and grace of Middle Eastern dance in this welcoming beginner class taught by experienced instructors.\n\nLearn fundamental movements, understand the cultural context of the dance, and experience the joy of this expressive art form. The class covers basic hip movements, arm patterns, and simple choreography set to traditional music.\n\nNo prior dance experience required. Comfortable clothing recommended. This class celebrates Middle Eastern culture through movement and music.`,
    culture: 'middle-eastern',
    cultureName: 'Middle Eastern',
    eventType: 'Class',
    date: '2025-12-21',
    startTime: '18:30',
    endTime: '20:00',
    location: 'Dance Studio, Miami, FL',
    coordinates: { lat: 25.7617, lng: -80.1918 },
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3cce61f-1764925902166.png",
    imageAlt: 'Graceful Middle Eastern dance class with instructor demonstrating traditional movements, students in flowing costumes, cultural music atmosphere',
    isFree: false,
    price: '$20',
    isVirtual: false,
    familyFriendly: true,
    registrationRequired: true,
    attendeeCount: 18,
    organizer: 'Middle Eastern Cultural Center',
    attendees: [
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1400f5ad7-1763296600804.png", avatarAlt: 'Professional headshot of Middle Eastern woman with long dark hair wearing elegant dance costume' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12bed7637-1763301543386.png", avatarAlt: 'Professional headshot of young Middle Eastern woman with styled hair in traditional dance attire' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1beaf769e-1763297163087.png", avatarAlt: 'Professional headshot of Middle Eastern woman with curly hair wearing colorful dance outfit' }],

    highlights: [
    'Beginner-friendly instruction',
    'Learn fundamental dance movements',
    'Cultural context and history',
    'Traditional music accompaniment',
    'No prior experience required',
    'Comfortable and welcoming environment']

  },
  {
    id: 6,
    title: "Virtual European Art History Seminar",
    description: "Explore Renaissance art and its cultural impact in this engaging online seminar with expert art historians.",
    fullDescription: `Join us for an enlightening journey through European Renaissance art in this comprehensive virtual seminar.\n\nExpert art historians will guide you through masterpieces from Italy, France, and the Netherlands, exploring the cultural, social, and political contexts that shaped this transformative period. Interactive discussions, high-resolution image analysis, and Q&A sessions included.\n\nPerfect for art enthusiasts, students, and anyone interested in European cultural history. Recording available for registered participants.`,
    culture: 'european',
    cultureName: 'European',
    eventType: 'Seminar',
    date: '2025-12-23',
    startTime: '15:00',
    endTime: '17:00',
    location: 'Online/Virtual',
    coordinates: { lat: 0, lng: 0 },
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa333261-1765885031514.png",
    imageAlt: 'Virtual art history seminar showing Renaissance masterpieces on screen, expert presenter discussing European cultural heritage, engaged online participants',
    isFree: true,
    price: 'Free',
    isVirtual: true,
    familyFriendly: true,
    registrationRequired: true,
    attendeeCount: 156,
    organizer: 'European Cultural Institute',
    attendees: [
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff007ec7-1763292742403.png", avatarAlt: 'Professional headshot of European man with gray hair wearing formal academic attire and glasses' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d2b87d2d-1763294797742.png", avatarAlt: 'Professional headshot of European woman with blonde hair in professional business suit' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12e1f4c5b-1763292611030.png", avatarAlt: 'Professional headshot of young European man with brown hair in casual academic clothing' }],

    highlights: [
    'Expert art historian presenters',
    'Renaissance masterpieces analysis',
    'Cultural and historical context',
    'Interactive Q&A sessions',
    'High-resolution image viewing',
    'Recording available post-event']

  },
  {
    id: 7,
    title: "Latin American Music Festival",
    description: "Celebrate the diverse sounds of Latin America with live performances from salsa to tango.",
    fullDescription: `Experience the vibrant rhythms and melodies of Latin America in this spectacular music festival featuring renowned artists.\n\nEnjoy performances spanning multiple genres including salsa, bachata, tango, cumbia, and reggaeton. Dance lessons between sets, authentic Latin American food vendors, and a festive atmosphere celebrating the rich musical heritage of the region.\n\nBring your dancing shoes and join us for an unforgettable evening of music, dance, and cultural celebration!`,
    culture: 'latin-american',
    cultureName: 'Latin American',
    eventType: 'Festival',
    date: '2025-12-24',
    startTime: '19:00',
    endTime: '23:00',
    location: 'Outdoor Amphitheater, San Francisco, CA',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15cac0ec2-1765546886481.png",
    imageAlt: 'Lively Latin American music festival with live band performing on stage, couples dancing salsa, colorful decorations and festive crowd atmosphere',
    isFree: false,
    price: '$35',
    isVirtual: false,
    familyFriendly: true,
    registrationRequired: true,
    attendeeCount: 428,
    organizer: 'Latin American Arts Council',
    attendees: [
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16b6d8d69-1763295588171.png", avatarAlt: 'Professional headshot of Latin American woman with long dark hair wearing vibrant festive dress' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8d44641-1763293534760.png", avatarAlt: 'Professional headshot of Latin American man with short hair in casual festive attire' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1943a94b4-1763295371087.png", avatarAlt: 'Professional headshot of young Latin American woman with curly hair wearing colorful traditional outfit' }],

    highlights: [
    'Multiple live music performances',
    'Diverse Latin American genres',
    'Free dance lessons between sets',
    'Authentic food vendors',
    'Family-friendly atmosphere',
    'Outdoor festival setting']

  },
  {
    id: 8,
    title: "Asian Calligraphy Workshop",
    description: "Master the art of traditional Asian calligraphy with guidance from experienced practitioners.",
    fullDescription: `Discover the meditative art of Asian calligraphy in this hands-on workshop covering Chinese, Japanese, and Korean styles.\n\nLearn proper brush techniques, understand the cultural significance of characters, and create your own calligraphy pieces to take home. All materials provided including brushes, ink, and rice paper. Instruction covers basic strokes, character composition, and the philosophical aspects of this ancient art form.\n\nSuitable for beginners and those with some experience. Limited class size ensures personalized attention.`,
    culture: 'asian',
    cultureName: 'Asian',
    eventType: 'Workshop',
    date: '2025-12-25',
    startTime: '13:00',
    endTime: '16:00',
    location: 'Cultural Arts Center, New York, NY',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    image: "https://images.unsplash.com/photo-1608046878377-12e92b23e6e9",
    imageAlt: 'Serene Asian calligraphy workshop with instructor demonstrating brush techniques, traditional ink and paper materials, students practicing ancient art form',
    isFree: false,
    price: '$40',
    isVirtual: false,
    familyFriendly: false,
    registrationRequired: true,
    attendeeCount: 15,
    organizer: 'Asian Cultural Heritage Society',
    attendees: [
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17fe78081-1763300828108.png", avatarAlt: 'Professional headshot of Asian man with short black hair wearing traditional calligraphy master attire' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1951ed251-1763293908080.png", avatarAlt: 'Professional headshot of Asian woman with elegant bun hairstyle in traditional cultural dress' },
    { avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12f9400f4-1763293680082.png", avatarAlt: 'Professional headshot of young Asian woman with long straight hair wearing modern casual outfit' }],

    highlights: [
    'Learn Chinese, Japanese, and Korean styles',
    'Proper brush technique instruction',
    'Cultural significance of characters',
    'All materials provided',
    'Create pieces to take home',
    'Small class size for personalized attention']

  }];


  const filteredEvents = useMemo(() => {
    return mockEvents?.filter((event) => {
      if (filters?.search && !event?.title?.toLowerCase()?.includes(filters?.search?.toLowerCase()) &&
      !event?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase())) {
        return false;
      }
      if (filters?.culture !== 'all' && event?.culture !== filters?.culture) return false;
      if (filters?.eventType !== 'all' && event?.eventType?.toLowerCase() !== filters?.eventType) return false;
      if (filters?.location !== 'all') {
        if (filters?.location === 'online' && !event?.isVirtual) return false;
        if (filters?.location !== 'online' && !event?.location?.toLowerCase()?.includes(filters?.location)) return false;
      }
      if (filters?.freeOnly && !event?.isFree) return false;
      if (filters?.virtualOnly && !event?.isVirtual) return false;
      if (filters?.familyFriendly && !event?.familyFriendly) return false;
      if (filters?.registrationRequired && !event?.registrationRequired) return false;
      if (filters?.dateFrom && new Date(event.date) < new Date(filters.dateFrom)) return false;
      if (filters?.dateTo && new Date(event.date) > new Date(filters.dateTo)) return false;
      return true;
    });
  }, [filters, mockEvents]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      culture: 'all',
      eventType: 'all',
      location: 'all',
      freeOnly: false,
      virtualOnly: false,
      familyFriendly: false,
      registrationRequired: false,
      dateFrom: '',
      dateTo: ''
    });
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsDetailsModalOpen(true);
  };

  const handleDateClick = (date) => {
    const dateEvents = filteredEvents?.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate?.toDateString() === date?.toDateString();
    });
    if (dateEvents?.length > 0) {
      setViewMode('list');
    }
  };

  const handleRSVP = (event) => {
    setSelectedEvent(event);
    setIsDetailsModalOpen(false);
    setIsRSVPModalOpen(true);
  };

  const handleShare = (event) => {
    setSelectedEvent(event);
    setIsShareModalOpen(true);
  };

  const handleRSVPSubmit = (formData) => {
    console.log('RSVP submitted:', formData);
    setIsRSVPModalOpen(false);
    alert('RSVP confirmed! You will receive a confirmation email shortly.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-brand-teal flex items-center justify-center">
                <Icon name="Calendar" size={24} color="#FFFFFF" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Cultural Calendar</h1>
                <p className="text-muted-foreground">Discover and join cultural events in your community</p>
              </div>
            </div>
          </div>

          <CalendarHeader
            currentDate={currentDate}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
            viewMode={viewMode}
            onViewModeChange={setViewMode} />


          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onToggle={() => setIsFilterOpen(!isFilterOpen)} />

            </div>

            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredEvents?.length} {filteredEvents?.length === 1 ? 'event' : 'events'}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Download"
                  iconPosition="left">

                  Export Calendar
                </Button>
              </div>

              {viewMode === 'month' &&
              <CalendarGrid
                currentDate={currentDate}
                events={filteredEvents}
                onDateClick={handleDateClick}
                onEventClick={handleEventClick} />

              }

              {viewMode === 'list' &&
              <EventListView
                events={filteredEvents}
                onViewDetails={handleEventClick}
                onRSVP={handleRSVP} />

              }

              {viewMode === 'week' &&
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                  <Icon name="Calendar" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Week View Coming Soon</h3>
                  <p className="text-muted-foreground">
                    We're working on bringing you a detailed week view of all cultural events.
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
      </main>
      <EventDetailsModal
        event={selectedEvent}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        onRSVP={handleRSVP}
        onShare={handleShare} />

      <RSVPModal
        event={selectedEvent}
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
        onSubmit={handleRSVPSubmit} />

      <ShareModal
        event={selectedEvent}
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)} />

      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} CulturalConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default CulturalCalendar;