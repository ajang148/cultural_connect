import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import SupportHero from './components/SupportHero';
import SearchBar from './components/SearchBar';
import SupportCategories from './components/SupportCategories';
import FAQSection from './components/FAQSection';
import CommunityQA from './components/CommunityQA';
import SupportTicketSystem from './components/SupportTicketSystem';
import ContactOptions from './components/ContactOptions';
import LiveChatWidget from './components/LiveChatWidget';

const SupportCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log('Selected category:', categoryId);
  };

  return (
    <>
      <Helmet>
        <title>Support Center - CulturalConnect | 24/7 Multi-Language Help</title>
        <meta 
          name="description" 
          content="Get instant support through our multi-language help center, live chat, and community-driven Q&A. Available 24/7 in English, Spanish, Mandarin, Hindi, Arabic, and French." 
        />
        <meta name="keywords" content="support center, help desk, live chat, immigration support, cultural programs help, community Q&A, multilingual support" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="main-content">
          <SupportHero />
          <SearchBar onSearch={handleSearch} />
          <SupportCategories onCategorySelect={handleCategorySelect} />
          <FAQSection />
          <CommunityQA />
          <SupportTicketSystem />
          <ContactOptions />
        </main>

        <LiveChatWidget />

        <footer className="bg-card border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © {new Date()?.getFullYear()} CulturalConnect. All rights reserved. Your trusted partner in cultural integration and immigration services.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SupportCenter;