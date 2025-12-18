import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I track my visa application status?',
      answer: 'You can track your visa application status by logging into your dashboard and navigating to the "My Applications" section. There you will find real-time updates on your application progress, including document verification status, processing stage, and estimated completion time. You will also receive email notifications for any status changes.'
    },
    {
      question: 'What documents do I need for immigration consultation?',
      answer: 'For an immigration consultation, please prepare: valid passport, birth certificate, educational certificates, employment letters, financial statements for the last 6 months, and any previous visa documentation. Our experts will review these during your consultation and provide specific guidance based on your situation.'
    },
    {
      question: 'How can I register for cultural programs and events?',
      answer: 'To register for cultural programs, visit the Cultural Programs page, browse available events, and click "Register" on your chosen program. You will need to complete a registration form and make payment if applicable. Confirmation will be sent to your email, and the event will appear in your dashboard calendar.'
    },
    {
      question: 'Is live chat support available in multiple languages?',
      answer: 'Yes, our live chat support is available in English, Spanish, Mandarin, Hindi, Arabic, and French. When you start a chat, you can select your preferred language, and you will be connected with a support agent who speaks that language. Our AI chatbot also supports these languages for instant responses.'
    },
    {
      question: 'How do I escalate my support ticket to an expert?',
      answer: 'If your issue requires expert attention, you can escalate your support ticket by clicking "Request Expert Review" in your ticket dashboard. Your case will be assigned to a specialized consultant within 24 hours. You can also directly book a consultation with an immigration expert through the Expert Directory.'
    },
    {
      question: 'What is the community-driven Q&A feature?',
      answer: 'Our community-driven Q&A allows members to ask questions and receive answers from experienced community members and verified experts. You can post questions, vote on helpful answers, and earn reputation points by helping others. This peer-to-peer support complements our official support channels.'
    },
    {
      question: 'How secure is my personal information and documents?',
      answer: 'We use end-to-end encryption for all sensitive data and documents. Your information is stored on secure servers with GDPR-compliant data handling practices. All support conversations are encrypted, and only authorized personnel can access your documents. We never share your information with third parties without explicit consent.'
    },
    {
      question: 'Can I schedule a video call for document review?',
      answer: 'Yes, you can schedule video support sessions for complex immigration document reviews. Navigate to the Support Center, select "Video Support," and choose an available time slot. Our experts will conduct a thorough review of your documents via secure video conferencing and provide detailed guidance.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to common questions about our support services
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq?.question}
                </span>
                <Icon
                  name={openIndex === index ? 'ChevronUp' : 'ChevronDown'}
                  size={24}
                  className="text-primary flex-shrink-0"
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq?.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              <Icon name="MessageCircle" size={20} />
              <span>Start Live Chat</span>
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
              <Icon name="Mail" size={20} />
              <span>Submit a Ticket</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;