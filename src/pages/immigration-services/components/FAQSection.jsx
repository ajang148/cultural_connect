import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      question: "How long does the visa application process typically take?",
      answer: "Processing times vary by visa type and individual circumstances. Work visas typically take 3-6 months, family-based visas 6-12 months, and student visas 2-4 months. Our experts provide accurate timelines based on your specific situation and help expedite the process where possible."
    },
    {
      question: "What documents do I need to prepare for my application?",
      answer: "Required documents vary by visa type but commonly include: valid passport, birth certificate, educational certificates, employment letters, financial statements, medical examination results, and police clearance certificates. Our document checklist tool provides a personalized list based on your visa category."
    },
    {
      question: "Can you help if my visa application was previously denied?",
      answer: "Yes, we specialize in handling previously denied applications. Our experts analyze the denial reasons, address the issues, and prepare a stronger reapplication. We have a 92% success rate with reapplications when clients follow our guidance completely."
    },
    {
      question: "Do you provide support in multiple languages?",
      answer: "Yes, we offer services in over 15 languages including Spanish, Mandarin, Hindi, Arabic, French, and more. Our multilingual experts ensure you understand every step of the process in your preferred language."
    },
    {
      question: "What is your success rate for visa applications?",
      answer: "We maintain a 98% overall success rate across all visa categories. This high success rate is achieved through thorough document preparation, expert guidance, and comprehensive application review before submission."
    },
    {
      question: "How secure is my personal information and documents?",
      answer: "We use bank-level encryption (256-bit SSL) for all data transmission and storage. Our systems are GDPR compliant and regularly audited. Documents are stored in secure cloud servers with multi-factor authentication and are never shared without your explicit consent."
    }
  ];
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our immigration services</p>
        </div>
        
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">{faq?.question}</span>
                <Icon 
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-primary flex-shrink-0"
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq?.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;