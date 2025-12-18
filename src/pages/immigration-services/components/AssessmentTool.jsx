import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';


const AssessmentTool = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: '',
    nationality: '',
    education: '',
    experience: '',
    language: ''
  });

  const purposeOptions = [
    { value: 'work', label: 'Work/Employment' },
    { value: 'study', label: 'Study/Education' },
    { value: 'family', label: 'Family Reunion' },
    { value: 'business', label: 'Business/Investment' },
    { value: 'tourist', label: 'Tourism/Visit' }
  ];

  const nationalityOptions = [
    { value: 'india', label: 'India' },
    { value: 'china', label: 'China' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'philippines', label: 'Philippines' },
    { value: 'vietnam', label: 'Vietnam' },
    { value: 'other', label: 'Other' }
  ];

  const educationOptions = [
    { value: 'high_school', label: 'High School' },
    { value: 'bachelors', label: "Bachelor\'s Degree" },
    { value: 'masters', label: "Master\'s Degree" },
    { value: 'doctorate', label: 'Doctorate/PhD' },
    { value: 'professional', label: 'Professional Certification' }
  ];

  const experienceOptions = [
    { value: '0-2', label: '0-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '10+', label: '10+ years' }
  ];

  const languageOptions = [
    { value: 'native', label: 'Native/Fluent' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'basic', label: 'Basic' }
  ];

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch(step) {
      case 1: return formData?.purpose !== '';
      case 2: return formData?.nationality !== '';
      case 3: return formData?.education !== '';
      case 4: return formData?.experience !== '';
      case 5: return formData?.language !== '';
      default: return false;
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-card rounded-2xl shadow-medium p-8 border border-border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">Visa Eligibility Assessment</h2>
            <p className="text-muted-foreground">Answer a few questions to get personalized visa recommendations</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Step {step} of 5</span>
              <span className="text-sm text-muted-foreground">{Math.round((step / 5) * 100)}% Complete</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-6 mb-8">
            {step === 1 && (
              <Select
                label="What is your primary purpose for immigration?"
                description="Select the main reason for your visa application"
                options={purposeOptions}
                value={formData?.purpose}
                onChange={(value) => setFormData({ ...formData, purpose: value })}
                required
              />
            )}
            
            {step === 2 && (
              <Select
                label="What is your current nationality?"
                description="Select your country of citizenship"
                options={nationalityOptions}
                value={formData?.nationality}
                onChange={(value) => setFormData({ ...formData, nationality: value })}
                searchable
                required
              />
            )}
            
            {step === 3 && (
              <Select
                label="What is your highest level of education?"
                description="Select your completed education level"
                options={educationOptions}
                value={formData?.education}
                onChange={(value) => setFormData({ ...formData, education: value })}
                required
              />
            )}
            
            {step === 4 && (
              <Select
                label="How many years of work experience do you have?"
                description="Select your total professional experience"
                options={experienceOptions}
                value={formData?.experience}
                onChange={(value) => setFormData({ ...formData, experience: value })}
                required
              />
            )}
            
            {step === 5 && (
              <Select
                label="What is your English language proficiency?"
                description="Select your current English language level"
                options={languageOptions}
                value={formData?.language}
                onChange={(value) => setFormData({ ...formData, language: value })}
                required
              />
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
              iconName="ArrowLeft"
              iconPosition="left"
            >
              Back
            </Button>
            
            <Button
              variant="default"
              onClick={handleNext}
              disabled={!isStepValid()}
              iconName={step === 5 ? "Check" : "ArrowRight"}
              iconPosition="right"
            >
              {step === 5 ? 'Get Results' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentTool;