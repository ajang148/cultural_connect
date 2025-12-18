import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1660749410776-376e2ac1fd2b",
    imageAlt: "Diverse group of people in traditional cultural attire from different countries celebrating together at outdoor festival with colorful decorations and flags",
    title: "Your Cultural Journey, Expertly Supported",
    subtitle: "Connect with your heritage, navigate immigration with confidence, and build lasting community bonds",
    primaryCta: "Explore Cultural Programs",
    secondaryCta: "Immigration Services"
  },
  {
    id: 2,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_172624000-1765716730938.png",
    imageAlt: "Happy family of four holding passports and travel documents at airport terminal with luggage, smiling with excitement about their journey",
    title: "Where Tradition Meets Practical Solutions",
    subtitle: "Expert immigration guidance combined with vibrant cultural programming for your successful transition",
    primaryCta: "Book Consultation",
    secondaryCta: "View Success Stories"
  },
  {
    id: 3,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_147c980da-1764934794034.png",
    imageAlt: "Multi-generational Asian family cooking traditional dishes together in modern kitchen, grandmother teaching young children cultural recipes",
    title: "Building Bridges Between Cultures",
    subtitle: "Join thousands who\'ve found their community and achieved their immigration goals with CulturalConnect",
    primaryCta: "Join Community",
    secondaryCta: "Learn More"
  }];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      {heroSlides?.map((slide, index) =>
      <div
        key={slide?.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentSlide ? 'opacity-100' : 'opacity-0'}`
        }>

          <div className="absolute inset-0">
            <Image
            src={slide?.image}
            alt={slide?.imageAlt}
            className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {slide?.title}
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-white/90 leading-relaxed">
                {slide?.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90">

                  {slide?.primaryCta}
                </Button>
                <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">

                  {slide?.secondaryCta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroSlides?.map((_, index) =>
        <button
          key={index}
          onClick={() => handleSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentSlide ?
          'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </section>);

};

export default HeroSection;