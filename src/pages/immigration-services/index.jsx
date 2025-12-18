import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';

import HeroSection from './components/HeroSection';
import VisaTypeCard from './components/VisaTypeCard';
import AssessmentTool from './components/AssessmentTool';
import ServiceFeatureCard from './components/ServiceFeatureCard';
import ExpertCard from './components/ExpertCard';
import ProcessStepCard from './components/ProcessStepCard';
import SuccessStoryCard from './components/SuccessStoryCard';
import ResourceCard from './components/ResourceCard';
import TrustBadges from './components/TrustBadges';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';

const ImmigrationServices = () => {
  const navigate = useNavigate();
  const [showAssessment, setShowAssessment] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');

  const visaTypes = [
  {
    id: 1,
    icon: "Briefcase",
    title: "Work Visa (H-1B)",
    description: "Employment-based visa for skilled professionals in specialty occupations",
    processingTime: "3-6 months",
    successRate: "97%",
    popular: true,
    features: [
    "Specialty occupation requirement",
    "Employer sponsorship needed",
    "3-year initial validity",
    "Extension up to 6 years"]

  },
  {
    id: 2,
    icon: "GraduationCap",
    title: "Student Visa (F-1)",
    description: "Academic study visa for full-time students at accredited institutions",
    processingTime: "2-4 months",
    successRate: "99%",
    popular: false,
    features: [
    "Full-time enrollment required",
    "Financial proof needed",
    "Duration of study validity",
    "Optional practical training"]

  },
  {
    id: 3,
    icon: "Heart",
    title: "Family Visa (IR/CR)",
    description: "Family-based immigration for immediate relatives of U.S. citizens",
    processingTime: "6-12 months",
    successRate: "96%",
    popular: false,
    features: [
    "Immediate relative category",
    "No numerical limitations",
    "Permanent residence path",
    "Work authorization included"]

  },
  {
    id: 4,
    icon: "Building2",
    title: "Business Visa (E-2)",
    description: "Investment visa for entrepreneurs and business investors",
    processingTime: "4-8 months",
    successRate: "94%",
    popular: false,
    features: [
    "Substantial investment required",
    "Business ownership needed",
    "2-year initial validity",
    "Unlimited renewals possible"]

  },
  {
    id: 5,
    icon: "Plane",
    title: "Tourist Visa (B-2)",
    description: "Temporary visitor visa for tourism and leisure travel",
    processingTime: "2-4 weeks",
    successRate: "98%",
    popular: false,
    features: [
    "Tourism and leisure purpose",
    "6-month typical stay",
    "No work authorization",
    "Multiple entry possible"]

  },
  {
    id: 6,
    icon: "Users",
    title: "Green Card (EB)",
    description: "Employment-based permanent residence for skilled workers",
    processingTime: "12-24 months",
    successRate: "95%",
    popular: true,
    features: [
    "Permanent residence status",
    "Work authorization included",
    "Path to citizenship",
    "Family members included"]

  }];


  const serviceFeatures = [
  {
    icon: "FileCheck",
    title: "Document Preparation",
    description: "Comprehensive document review and preparation services to ensure your application is complete and accurate",
    benefits: [
    "Professional document review",
    "Translation services available",
    "Secure document storage",
    "Checklist and guidance"]

  },
  {
    icon: "UserCheck",
    title: "Expert Consultation",
    description: "One-on-one consultations with licensed immigration attorneys and certified consultants",
    benefits: [
    "Personalized case assessment",
    "Strategy development",
    "Legal representation",
    "Ongoing support"]

  },
  {
    icon: "BarChart3",
    title: "Application Tracking",
    description: "Real-time tracking of your application status with automated updates and notifications",
    benefits: [
    "Real-time status updates",
    "Milestone notifications",
    "Deadline reminders",
    "Progress dashboard"]

  },
  {
    icon: "Globe",
    title: "Multilingual Support",
    description: "Services available in 15+ languages to ensure clear communication throughout the process",
    benefits: [
    "Native language support",
    "Cultural sensitivity",
    "Translation services",
    "24/7 availability"]

  }];


  const experts = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10deca2fb-1763299994309.png",
    imageAlt: "Professional Asian woman with long black hair wearing navy blazer and white blouse in office setting",
    title: "Immigration Attorney",
    specialization: "Employment-Based Immigration",
    experience: 15,
    successRate: "98%",
    languages: ["English", "Mandarin", "Cantonese"],
    rating: 4.9,
    reviewCount: 342
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea7f3f4a-1763295654726.png",
    imageAlt: "Professional Hispanic man with short black hair wearing dark suit and tie in modern office",
    title: "Senior Immigration Consultant",
    specialization: "Family-Based Immigration",
    experience: 12,
    successRate: "97%",
    languages: ["English", "Spanish", "Portuguese"],
    rating: 4.8,
    reviewCount: 289
  },
  {
    id: 3,
    name: "Priya Sharma",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a330ada1-1763294525241.png",
    imageAlt: "Professional Indian woman with shoulder-length dark hair wearing burgundy blazer in professional setting",
    title: "Immigration Specialist",
    specialization: "Student Visas & Education",
    experience: 10,
    successRate: "99%",
    languages: ["English", "Hindi", "Punjabi"],
    rating: 5.0,
    reviewCount: 421
  }];


  const processSteps = [
  {
    number: 1,
    icon: "ClipboardCheck",
    title: "Initial Assessment",
    description: "Complete our comprehensive eligibility assessment to determine the best visa pathway for your situation. Our AI-powered tool analyzes your profile and provides personalized recommendations.",
    duration: "15-30 minutes",
    documents: ["Personal information", "Educational background", "Work experience", "Language proficiency"]
  },
  {
    number: 2,
    icon: "FileText",
    title: "Document Collection",
    description: "Gather and prepare all required documents with guidance from our experts. We provide detailed checklists and templates to ensure nothing is missed.",
    duration: "1-2 weeks",
    documents: ["Passport copies", "Birth certificates", "Educational certificates", "Employment letters", "Financial statements"]
  },
  {
    number: 3,
    icon: "UserCheck",
    title: "Expert Review",
    description: "Our licensed attorneys review your complete application package, ensuring accuracy and compliance with current immigration regulations.",
    duration: "3-5 business days",
    documents: ["Application forms", "Supporting documents", "Cover letter", "Evidence of eligibility"]
  },
  {
    number: 4,
    icon: "Send",
    title: "Application Submission",
    description: "We submit your application to the appropriate immigration authorities with proper documentation and filing fees.",
    duration: "1-2 business days",
    documents: ["Completed application", "Payment confirmation", "Submission receipt", "Tracking number"]
  },
  {
    number: 5,
    icon: "Clock",
    title: "Processing & Updates",
    description: "Track your application status in real-time through our dashboard. We monitor progress and respond to any requests from immigration authorities.",
    duration: "Varies by visa type",
    documents: ["Status updates", "Request for evidence responses", "Interview preparation", "Additional documentation"]
  },
  {
    number: 6,
    icon: "CheckCircle2",
    title: "Approval & Next Steps",
    description: "Receive your visa approval and guidance on next steps including travel arrangements, settlement support, and ongoing compliance requirements.",
    duration: "1-2 weeks",
    documents: ["Approval notice", "Visa stamp", "Travel documents", "Settlement guide"]
  }];


  const successStories = [
  {
    name: "Rajesh Kumar",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee047f3e-1763293623246.png",
    imageAlt: "Professional Indian man with short black hair and beard wearing blue shirt smiling at camera",
    country: "India → United States",
    visaType: "H-1B Work Visa",
    processingTime: "4 months",
    testimonial: "The team made my H-1B process incredibly smooth. Their expertise and attention to detail gave me confidence throughout the journey. I\'m now working at my dream company in Silicon Valley!",
    date: "November 2024"
  },
  {
    name: "Maria Garcia",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e33e7931-1763294360998.png",
    imageAlt: "Professional Hispanic woman with long brown hair wearing white blouse smiling warmly at camera",
    country: "Mexico → United States",
    visaType: "Family-Based Green Card",
    processingTime: "8 months",
    testimonial: "After years of uncertainty, CulturalConnect helped reunite our family. The multilingual support and compassionate guidance made all the difference during this emotional journey.",
    date: "October 2024"
  },
  {
    name: "Chen Wei",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a94acfd5-1763299528067.png",
    imageAlt: "Professional Chinese man with short black hair wearing gray suit and glasses in office environment",
    country: "China → United States",
    visaType: "F-1 Student Visa",
    processingTime: "6 weeks",
    testimonial: "As an international student, I was overwhelmed by the visa process. The step-by-step guidance and document preparation support made everything clear and manageable. Highly recommended!",
    date: "December 2024"
  }];


  const resources = [
  {
    id: 1,
    icon: "FileText",
    title: "Complete H-1B Visa Guide 2024",
    description: "Comprehensive guide covering eligibility, requirements, and application process",
    type: "PDF Guide",
    size: "2.4 MB",
    downloads: "12,450",
    language: "English"
  },
  {
    id: 2,
    icon: "CheckSquare",
    title: "Document Preparation Checklist",
    description: "Essential checklist for organizing your visa application documents",
    type: "Checklist",
    size: "156 KB",
    downloads: "18,920",
    language: "Multilingual"
  },
  {
    id: 3,
    icon: "FileSpreadsheet",
    title: "Financial Statement Template",
    description: "Professional template for preparing financial documentation",
    type: "Template",
    size: "89 KB",
    downloads: "9,340",
    language: "English"
  },
  {
    id: 4,
    icon: "Video",
    title: "Visa Interview Preparation",
    description: "Video tutorial on common interview questions and best practices",
    type: "Video",
    size: "145 MB",
    downloads: "15,670",
    language: "English"
  },
  {
    id: 5,
    icon: "FileText",
    title: "Green Card Application Guide",
    description: "Step-by-step guide for employment-based permanent residence",
    type: "PDF Guide",
    size: "3.1 MB",
    downloads: "8,230",
    language: "English"
  },
  {
    id: 6,
    icon: "CheckSquare",
    title: "Post-Arrival Settlement Guide",
    description: "Essential information for settling in the United States",
    type: "Checklist",
    size: "1.2 MB",
    downloads: "11,540",
    language: "Multilingual"
  }];


  const handleGetStarted = () => {
    setShowAssessment(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookConsultation = (expertId) => {
    console.log('Booking consultation with expert:', expertId);
    alert('Consultation booking feature coming soon! Our team will contact you within 24 hours.');
  };

  const handleLearnMore = (visaId) => {
    console.log('Learning more about visa type:', visaId);
    setSelectedTab('process');
    window.scrollTo({ top: document.getElementById('process-section')?.offsetTop - 100, behavior: 'smooth' });
  };

  const handleAssessmentComplete = (formData) => {
    console.log('Assessment completed:', formData);
    setShowAssessment(false);
    alert('Thank you for completing the assessment! Our experts will review your profile and contact you within 24 hours with personalized recommendations.');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResource = (resourceId) => {
    console.log('Downloading resource:', resourceId);
    alert('Resource download started! The file will be saved to your downloads folder.');
  };

  const handleContactSupport = () => {
    navigate('/support-center');
  };

  if (showAssessment) {
    return (
      <>
        <Header />
        <main className="main-content bg-background">
          <AssessmentTool onComplete={handleAssessmentComplete} />
        </main>
      </>);

  }

  return (
    <>
      <Header />
      <main className="main-content bg-background">
        <HeroSection
          onGetStarted={handleGetStarted}
          onBookConsultation={() => handleBookConsultation(null)} />


        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Visa Types We Handle</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive immigration services for all major visa categories with expert guidance and proven success rates
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visaTypes?.map((visaType) =>
              <VisaTypeCard
                key={visaType?.id}
                visaType={visaType}
                onLearnMore={handleLearnMore} />

              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive immigration support services designed to simplify your journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceFeatures?.map((feature, index) =>
              <ServiceFeatureCard key={index} feature={feature} />
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Meet Our Expert Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Licensed immigration attorneys and certified consultants with proven track records
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experts?.map((expert) =>
              <ExpertCard
                key={expert?.id}
                expert={expert}
                onBookConsultation={handleBookConsultation} />

              )}
            </div>
          </div>
        </section>

        <section id="process-section" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A transparent, step-by-step approach to your immigration success
              </p>
            </div>

            <div className="space-y-0">
              {processSteps?.map((step, index) =>
              <ProcessStepCard
                key={step?.number}
                step={step}
                isLast={index === processSteps?.length - 1} />

              )}
            </div>
          </div>
        </section>

        <TrustBadges />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real stories from clients who achieved their immigration goals with our help
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories?.map((story, index) =>
              <SuccessStoryCard key={index} story={story} />
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Resource Library</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Free guides, templates, and resources to support your immigration journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources?.map((resource) =>
              <ResourceCard
                key={resource?.id}
                resource={resource}
                onDownload={handleDownloadResource} />

              )}
            </div>
          </div>
        </section>

        <FAQSection />

        <CTASection
          onGetStarted={handleGetStarted}
          onContactSupport={handleContactSupport} />

      </main>
    </>);

};

export default ImmigrationServices;