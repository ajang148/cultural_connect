import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityGallery = ({ galleryItems }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-trust/20 rounded-xl flex items-center justify-center">
              <Icon name="Camera" size={24} color="var(--color-trust)" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent">
              Community Gallery
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments captured from our vibrant cultural programs and events
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems?.map((item) => (
            <div
              key={item?.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item?.image}
                alt={item?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-semibold text-sm mb-1">{item?.title}</h4>
                  <div className="flex items-center gap-2 text-white/80 text-xs">
                    <Icon name="Heart" size={12} />
                    <span>{item?.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" size={24} color="#FFFFFF" />
            </button>
            <div className="max-w-4xl w-full">
              <Image
                src={selectedImage?.image}
                alt={selectedImage?.imageAlt}
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">{selectedImage?.title}</h3>
                <p className="text-white/80">{selectedImage?.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CommunityGallery;