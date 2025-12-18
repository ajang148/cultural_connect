import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import ForumCategory from './components/ForumCategory';
import DiscussionThread from './components/DiscussionThread';
import MentorCard from './components/MentorCard';
import MeetupCard from './components/MeetupCard';
import SuccessStoryCard from './components/SuccessStoryCard';
import { getPostsAPI, createPostAPI } from '../../api';
import CreateThreadModal from './components/CreateThreadModal';
import { isLoggedIn } from '../../utils/auth';

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [discussionThreads, setDiscussionThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loggedIn = isLoggedIn();

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Fetch threads from API
  useEffect(() => {
    fetchThreads();
  }, []);

  const fetchThreads = async () => {
    try {
      setIsLoading(true);
      const data = await getPostsAPI();
      const formattedThreads = data.map(post => ({
        id: post._id,
        title: post.title,
        preview: post.content?.substring(0, 150) + '...' || '',
        content: post.content,
        authorName: post.user?.name || 'Anonymous',
        authorAvatar: post.user?.avatar || 'https://via.placeholder.com/150',
        authorAvatarAlt: `Avatar of ${post.user?.name || 'Anonymous'}`,
        categoryId: post.category || 'general',
        replyCount: post.comments?.length || 0,
        viewCount: post.views || 0,
        likeCount: post.likes || 0,
        lastActivity: new Date(post.updatedAt || post.createdAt),
        isPinned: post.isPinned || false,
        tags: post.tags || []
      }));
      setDiscussionThreads(formattedThreads);
    } catch (error) {
      console.error('Failed to fetch threads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    {
      id: 'south-asian',
      name: 'South Asian Community',
      description: 'Connect with members from India, Pakistan, Bangladesh, Sri Lanka, and Nepal. Share cultural experiences and support.',
      icon: 'Globe',
      color: '#2C5F7C',
      threadCount: 1247,
      memberCount: 3892
    },
    {
      id: 'east-asian',
      name: 'East Asian Community',
      description: 'Discussion space for Chinese, Japanese, Korean, and other East Asian community members.',
      icon: 'Users',
      color: '#E8A547',
      threadCount: 892,
      memberCount: 2456
    },
    {
      id: 'latin-american',
      name: 'Latin American Community',
      description: 'Connect with members from Mexico, Central and South America. Celebrate Hispanic heritage together.',
      icon: 'Heart',
      color: '#C73E1D',
      threadCount: 1034,
      memberCount: 3124
    },
    {
      id: 'middle-eastern',
      name: 'Middle Eastern Community',
      description: 'Forum for members from Middle Eastern countries to share experiences and cultural traditions.',
      icon: 'Star',
      color: '#4A7C59',
      threadCount: 678,
      memberCount: 1892
    },
    {
      id: 'african',
      name: 'African Community',
      description: 'Connect with members from across the African continent. Share stories and support each other.',
      icon: 'Compass',
      color: '#D97706',
      threadCount: 543,
      memberCount: 1567
    },
    {
      id: 'european',
      name: 'European Community',
      description: 'Discussion space for members from European countries navigating cultural transitions.',
      icon: 'Map',
      color: '#059669',
      threadCount: 721,
      memberCount: 2103
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Dr. Anita Desai',
      expertise: 'Immigration Law & H1B Specialist',
      bio: 'Immigration attorney with 15 years of experience helping professionals navigate US visa processes. Successfully assisted over 500 H1B and green card applications.',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e70936b1-1763298308985.png",
      avatarAlt: 'Professional headshot of South Asian woman with glasses wearing formal business suit',
      rating: 4.9,
      menteeCount: 127,
      languages: ['English', 'Hindi', 'Gujarati']
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      expertise: 'Career Development & Cultural Integration',
      bio: 'Career coach specializing in helping immigrants transition into American workplace culture. Former Fortune 500 HR director with multicultural team experience.',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8d44641-1763293534760.png",
      avatarAlt: 'Professional headshot of Hispanic man with short dark hair wearing business casual attire',
      rating: 4.8,
      menteeCount: 89,
      languages: ['English', 'Spanish', 'Portuguese']
    },
    {
      id: 3,
      name: 'Li Wei Zhang',
      expertise: 'Business Immigration & Entrepreneurship',
      bio: 'Immigration consultant and entrepreneur who successfully started three businesses in the US. Specializes in E-2 and EB-5 visa guidance.',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15bb27eee-1763295265499.png",
      avatarAlt: 'Professional headshot of East Asian man with short black hair wearing formal business suit',
      rating: 4.9,
      menteeCount: 156,
      languages: ['English', 'Mandarin', 'Cantonese']
    },
    {
      id: 4,
      name: 'Fatima Al-Rashid',
      expertise: 'Family Immigration & Settlement',
      bio: 'Social worker and immigration advocate helping families navigate the settlement process. Expertise in family-based immigration and cultural adaptation.',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d90f11a-1763294201313.png",
      avatarAlt: 'Professional headshot of Middle Eastern woman wearing hijab and professional attire',
      rating: 4.7,
      menteeCount: 94,
      languages: ['English', 'Arabic', 'French']
    }
  ];

  const meetups = [
    {
      id: 1,
      title: 'South Asian Cultural Festival & Networking',
      description: 'Join us for an evening of cultural performances, traditional food, and networking with fellow community members.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_165aeb65d-1765340740879.png",
      imageAlt: 'Vibrant cultural festival with colorful decorations and people in traditional South Asian attire celebrating together',
      category: 'Cultural',
      date: new Date('2025-12-28T18:00:00'),
      location: 'Community Center, 123 Main Street, New York, NY',
      attendeeCount: 87,
      spotsLeft: 13
    },
    {
      id: 2,
      title: 'Immigration Q&A Session with Legal Experts',
      description: 'Free consultation session with immigration attorneys. Get your visa and green card questions answered.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cdd22825-1765251619506.png",
      imageAlt: 'Professional meeting room with immigration lawyers consulting with diverse group of people around conference table',
      category: 'Legal',
      date: new Date('2025-12-22T14:00:00'),
      location: 'Virtual Event (Zoom Link Provided)',
      attendeeCount: 156,
      spotsLeft: 44
    },
    {
      id: 3,
      title: 'Lunar New Year Celebration Potluck',
      description: 'Celebrate the Lunar New Year with traditional foods, cultural activities, and community bonding.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_128d7d2fd-1765588792244.png",
      imageAlt: 'Festive Lunar New Year celebration with red lanterns, traditional decorations, and families sharing meals together',
      category: 'Cultural',
      date: new Date('2026-01-29T17:00:00'),
      location: 'Golden Dragon Restaurant, 456 Park Avenue, San Francisco, CA',
      attendeeCount: 64,
      spotsLeft: 16
    },
    {
      id: 4,
      title: 'Professional Networking for New Immigrants',
      description: 'Connect with professionals from various industries. Share experiences and build your professional network.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_14b7f467f-1764698978117.png",
      imageAlt: 'Professional networking event with diverse group of business professionals exchanging business cards and conversing',
      category: 'Networking',
      date: new Date('2025-12-25T19:00:00'),
      location: 'Tech Hub Coworking Space, 789 Innovation Drive, Austin, TX',
      attendeeCount: 92,
      spotsLeft: 8
    }
  ];

  const successStories = [
    {
      id: 1,
      title: 'From Student Visa to Tech Lead: My 5-Year Journey',
      excerpt: 'Arrived in the US with just a student visa and a dream. Today, I lead a team of 15 engineers at a Fortune 500 company. Here is how community support made all the difference.',
      authorName: 'Vikram Patel',
      authorOrigin: 'Mumbai, India',
      authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e028ecd8-1763301150099.png",
      authorAvatarAlt: 'Professional headshot of South Asian man with short black hair wearing tech company branded shirt',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cdfb43be-1765122859424.png",
      imageAlt: 'Professional South Asian man working confidently at modern tech office with multiple computer monitors',
      likeCount: 234,
      commentCount: 67,
      shareCount: 89
    },
    {
      id: 2,
      title: 'Building a Business While Navigating Immigration',
      excerpt: 'Started my restaurant with an E-2 visa. Three years later, we have two locations and I just received my green card. The community guidance was invaluable.',
      authorName: 'Sofia Martinez',
      authorOrigin: 'Mexico City, Mexico',
      authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1620e8365-1763300056403.png",
      authorAvatarAlt: 'Professional headshot of Hispanic woman with long dark hair wearing chef uniform',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8cf3759-1763292338278.png",
      imageAlt: 'Hispanic woman chef proudly standing in her successful restaurant with traditional Mexican decor and busy dining area',
      likeCount: 189,
      commentCount: 52,
      shareCount: 71
    },
    {
      id: 3,
      title: 'Family Reunification After 3 Years of Separation',
      excerpt: 'The hardest part of immigration was being away from my family. Thanks to expert guidance from this community, we are finally together again.',
      authorName: 'Amira Hassan',
      authorOrigin: 'Cairo, Egypt',
      authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1400f5ad7-1763296600804.png",
      authorAvatarAlt: 'Professional headshot of Middle Eastern woman wearing hijab with warm smile',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d47cc5a0-1764782701270.png",
      imageAlt: 'Happy Middle Eastern family reunited at airport with emotional embrace and joyful expressions',
      likeCount: 312,
      commentCount: 94,
      shareCount: 156
    },
    {
      id: 4,
      title: 'From Refugee to Medical Resident: A Story of Hope',
      excerpt: 'Came to America as a refugee with nothing. Today, I am completing my medical residency. This community believed in me when I could not believe in myself.',
      authorName: 'Anh Nguyen',
      authorOrigin: 'Hanoi, Vietnam',
      authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_134f82956-1763297825076.png",
      authorAvatarAlt: 'Professional headshot of East Asian woman in medical scrubs with stethoscope',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eca10f73-1765302149078.png",
      imageAlt: 'East Asian woman doctor in white coat confidently examining patient in modern hospital setting',
      likeCount: 456,
      commentCount: 123,
      shareCount: 201
    }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'replies', label: 'Most Replies' },
    { value: 'views', label: 'Most Views' }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveTab('discussions');
  };

  const handleThreadClick = (thread) => {
    console.log('Viewing thread:', thread);
    // TODO: Implement thread detail view
  };

  const handleCreateThread = async (threadData) => {
    try {
      await createPostAPI(threadData.title, threadData.content);
      fetchThreads(); // Refresh the list
      setIsCreateModalOpen(false);
    } catch (error) {
      console.error('Failed to create thread:', error);
    }
  };

  const handleConnectMentor = (mentor) => {
    console.log('Connecting with mentor:', mentor);
  };

  const handleJoinMeetup = (meetup) => {
    console.log('Joining meetup:', meetup);
  };

  const handleStoryClick = (story) => {
    console.log('Viewing story:', story);
  };

  const filteredThreads = discussionThreads?.filter((thread) => {
    const matchesCategory = !selectedCategory || thread?.categoryId === selectedCategory?.id;
    const matchesSearch = !searchQuery ||
      thread?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      thread?.preview?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort threads based on selected sort option
  const sortedThreads = [...filteredThreads].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.lastActivity) - new Date(a.lastActivity);
      case 'popular':
        return b.viewCount - a.viewCount;
      case 'replies':
        return b.replyCount - a.replyCount;
      case 'views':
        return b.viewCount - a.viewCount;
      default:
        return new Date(b.lastActivity) - new Date(a.lastActivity);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-brand-teal to-brand-forest py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Community Forum
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Connect, share, and grow together. Join discussions, find mentors, and celebrate cultural diversity.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
              <div className="flex-1 w-full">
                <Input
                  type="search"
                  placeholder="Search discussions, topics, or members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white"
                />
              </div>
              
              {loggedIn ? (
                <Button
                  variant="secondary"
                  iconName="Plus"
                  iconPosition="left"
                  onClick={() => setIsCreateModalOpen(true)}
                  className="w-full sm:w-auto"
                >
                  New Thread
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    variant="secondary"
                    iconName="LogIn"
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    Login to Post
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Guest Message Banner */}
        {!loggedIn && (
          <div className="bg-muted border-l-4 border-primary px-4 py-3">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3">
                <Icon name="Info" size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-foreground">
                    You're browsing as a guest. <Link to="/login" className="text-primary hover:underline font-medium">Login</Link> to post, reply, and connect with mentors. <Link to="/signup" className="text-primary hover:underline font-medium">Sign up</Link> for free to join our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Community Stats */}
        <section className="py-8 px-6 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {discussionThreads.length > 1000 ? '12,456' : discussionThreads.length}
                </div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {discussionThreads.length}
                </div>
                <div className="text-sm text-muted-foreground">Discussions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">342</div>
                <div className="text-sm text-muted-foreground">Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1,892</div>
                <div className="text-sm text-muted-foreground">Success Stories</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab('discussions')}
                className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === 'discussions' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                <Icon name="MessageSquare" size={18} className="inline mr-2" />
                Discussions
              </button>
              <button
                onClick={() => setActiveTab('mentors')}
                className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === 'mentors' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                <Icon name="Users" size={18} className="inline mr-2" />
                Find Mentors
              </button>
              <button
                onClick={() => setActiveTab('meetups')}
                className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === 'meetups' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                <Icon name="Calendar" size={18} className="inline mr-2" />
                Meetups
              </button>
              <button
                onClick={() => setActiveTab('stories')}
                className={`px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === 'stories' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                <Icon name="Heart" size={18} className="inline mr-2" />
                Success Stories
              </button>
            </div>

            {/* Loading State */}
            {isLoading && activeTab === 'discussions' && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading discussions...</p>
              </div>
            )}

            {/* Categories Section */}
            {activeTab === 'discussions' && !selectedCategory && !isLoading && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Browse by Community
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category) => (
                    <ForumCategory
                      key={category.id}
                      category={category}
                      onClick={handleCategoryClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Discussions Tab */}
            {activeTab === 'discussions' && !isLoading && (
              <div>
                {selectedCategory && (
                  <div className="mb-6">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
                    >
                      <Icon name="ArrowLeft" size={20} />
                      <span>Back to all communities</span>
                    </button>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: selectedCategory.color }}
                      >
                        <Icon name={selectedCategory.icon} size={32} color="#FFFFFF" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-foreground">
                          {selectedCategory.name}
                        </h2>
                        <p className="text-muted-foreground">
                          {selectedCategory.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {selectedCategory ? 'Recent Discussions' : 'All Discussions'}
                    {sortedThreads.length > 0 && (
                      <span className="text-sm font-normal text-muted-foreground ml-2">
                        ({sortedThreads.length})
                      </span>
                    )}
                  </h3>
                  <Select
                    options={sortOptions}
                    value={sortBy}
                    onChange={setSortBy}
                    className="w-48"
                  />
                </div>

                {sortedThreads.length === 0 ? (
                  <div className="text-center py-12 border border-border rounded-xl">
                    <Icon name="MessageSquare" size={48} className="mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      No discussions found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {searchQuery 
                        ? `No results for "${searchQuery}"`
                        : 'Be the first to start a discussion!'}
                    </p>
                    {!searchQuery && (
                      loggedIn ? (
                        <Button
                          variant="default"
                          iconName="Plus"
                          onClick={() => setIsCreateModalOpen(true)}
                        >
                          Start a Discussion
                        </Button>
                      ) : (
                        <Link to="/login">
                          <Button variant="default" iconName="LogIn">
                            Login to Start Discussion
                          </Button>
                        </Link>
                      )
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sortedThreads.map((thread) => (
                      <DiscussionThread
                        key={thread.id}
                        thread={thread}
                        onClick={handleThreadClick}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Mentors Tab */}
            {activeTab === 'mentors' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Connect with Expert Mentors
                  </h2>
                  <p className="text-muted-foreground">
                    Get guidance from experienced professionals who have successfully navigated similar journeys.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentors.map((mentor) => (
                    <MentorCard
                      key={mentor.id}
                      mentor={mentor}
                      onConnect={handleConnectMentor}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Meetups Tab */}
            {activeTab === 'meetups' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Upcoming Community Meetups
                  </h2>
                  <p className="text-muted-foreground">
                    Join local events and connect with community members in person.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {meetups.map((meetup) => (
                    <MeetupCard
                      key={meetup.id}
                      meetup={meetup}
                      onJoin={handleJoinMeetup}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Success Stories Tab */}
            {activeTab === 'stories' && (
              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Community Success Stories
                  </h2>
                  <p className="text-muted-foreground">
                    Be inspired by real stories of triumph, perseverance, and cultural celebration.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {successStories.map((story) => (
                    <SuccessStoryCard
                      key={story.id}
                      story={story}
                      onClick={handleStoryClick}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-12 px-6 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Community Guidelines
                  </h2>
                  <p className="text-muted-foreground">
                    Help us maintain a safe, respectful, and supportive environment for everyone.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Be Respectful</h3>
                    <p className="text-sm text-muted-foreground">
                      Treat all members with dignity and respect, regardless of background or beliefs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Stay On Topic</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep discussions relevant to cultural experiences and immigration topics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Share Constructively</h3>
                    <p className="text-sm text-muted-foreground">
                      Provide helpful advice and support. Avoid negativity and criticism.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Protect Privacy</h3>
                    <p className="text-sm text-muted-foreground">
                      Never share personal information or sensitive details about others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} CulturalConnect. Building bridges between cultures and communities.
            </p>
          </div>
        </footer>
      </main>

      {/* Create Thread Modal */}
      <CreateThreadModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateThread}
        categories={categories}
      />
    </div>
  );
};

export default CommunityForum;