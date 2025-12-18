import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityQA = () => {
  const [selectedFilter, setSelectedFilter] = useState('popular');

  const questions = [
  {
    id: 1,
    author: 'Maria Rodriguez',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_151b2e1e2-1765095634419.png",
    avatarAlt: 'Hispanic woman with curly brown hair wearing red sweater with friendly smile',
    question: 'What are the typical processing times for family-based visa applications?',
    excerpt: 'I submitted my family-based visa application three months ago and wondering what the typical timeline is...',
    answers: 12,
    votes: 45,
    views: 892,
    tags: ['Visa', 'Family Immigration', 'Processing Time'],
    timestamp: new Date(Date.now() - 7200000),
    hasAcceptedAnswer: true
  },
  {
    id: 2,
    author: 'Ahmed Hassan',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_123f8c923-1763295598044.png",
    avatarAlt: 'Middle Eastern man with short black hair and beard wearing white shirt',
    question: 'How do I prepare for my first cultural integration workshop?',
    excerpt: 'I registered for the cultural integration workshop next week. What should I bring and how should I prepare?',
    answers: 8,
    votes: 32,
    views: 567,
    tags: ['Cultural Programs', 'Workshops', 'Integration'],
    timestamp: new Date(Date.now() - 14400000),
    hasAcceptedAnswer: false
  },
  {
    id: 3,
    author: 'Li Wei Chen',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_176d63896-1763295945656.png",
    avatarAlt: 'Asian man with glasses and short black hair wearing blue polo shirt',
    question: 'Can I change my immigration consultant after starting the process?',
    excerpt: 'I am not satisfied with my current consultant. Is it possible to switch to a different expert?',
    answers: 15,
    votes: 67,
    views: 1234,
    tags: ['Immigration Services', 'Consultation', 'Expert Help'],
    timestamp: new Date(Date.now() - 21600000),
    hasAcceptedAnswer: true
  },
  {
    id: 4,
    author: 'Priya Sharma',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_111e29bbe-1763294966477.png",
    avatarAlt: 'Indian woman with long black hair wearing traditional green saree with warm smile',
    question: 'What documents are required for work permit extension?',
    excerpt: 'My work permit expires in 3 months. What documents do I need to gather for the extension application?',
    answers: 10,
    votes: 54,
    views: 987,
    tags: ['Work Permit', 'Documentation', 'Extension'],
    timestamp: new Date(Date.now() - 28800000),
    hasAcceptedAnswer: true
  },
  {
    id: 5,
    author: 'Carlos Mendez',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7848957-1763295891368.png",
    avatarAlt: 'Latino man with short brown hair wearing casual gray t-shirt with friendly expression',
    question: 'How can I connect with other members from my home country?',
    excerpt: 'I am new to the platform and would like to connect with other community members from Mexico...',
    answers: 6,
    votes: 28,
    views: 445,
    tags: ['Community', 'Networking', 'Cultural Connection'],
    timestamp: new Date(Date.now() - 36000000),
    hasAcceptedAnswer: false
  }];


  const filters = [
  { id: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
  { id: 'recent', label: 'Recent', icon: 'Clock' },
  { id: 'unanswered', label: 'Unanswered', icon: 'HelpCircle' },
  { id: 'solved', label: 'Solved', icon: 'CheckCircle' }];


  const formatTimeAgo = (date) => {
    const hours = Math.floor((Date.now() - date) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Community Q&A
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers from experienced community members and verified experts
            </p>
          </div>
          <Button
            variant="default"
            iconName="Plus"
            iconPosition="left"
            className="mt-4 md:mt-0">

            Ask a Question
          </Button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {filters?.map((filter) =>
          <button
            key={filter?.id}
            onClick={() => setSelectedFilter(filter?.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            selectedFilter === filter?.id ?
            'bg-primary text-white shadow-soft' :
            'bg-card border border-border text-foreground hover:bg-muted'}`
            }>

              <Icon name={filter?.icon} size={18} />
              <span>{filter?.label}</span>
            </button>
          )}
        </div>

        <div className="space-y-4">
          {questions?.map((question) =>
          <div
            key={question?.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300">

              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <button className="w-10 h-10 rounded-lg border border-border hover:bg-muted flex items-center justify-center transition-colors">
                    <Icon name="ChevronUp" size={20} className="text-muted-foreground" />
                  </button>
                  <span className="text-lg font-semibold text-foreground">{question?.votes}</span>
                  <button className="w-10 h-10 rounded-lg border border-border hover:bg-muted flex items-center justify-center transition-colors">
                    <Icon name="ChevronDown" size={20} className="text-muted-foreground" />
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 mb-3">
                    <img
                    src={question?.avatar}
                    alt={question?.avatarAlt}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0" />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{question?.author}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{formatTimeAgo(question?.timestamp)}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors">
                        {question?.question}
                      </h3>
                      <p className="text-muted-foreground mb-3">{question?.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {question?.tags?.map((tag, index) =>
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-sm font-medium text-foreground rounded-lg">

                            {tag}
                          </span>
                      )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="MessageSquare" size={16} />
                      <span>{question?.answers} answers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Eye" size={16} />
                      <span>{question?.views} views</span>
                    </div>
                    {question?.hasAcceptedAnswer &&
                  <div className="flex items-center gap-2 text-success">
                        <Icon name="CheckCircle" size={16} />
                        <span>Solved</span>
                      </div>
                  }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" iconName="RefreshCw" iconPosition="left">
            Load More Questions
          </Button>
        </div>
      </div>
    </section>);

};

export default CommunityQA;