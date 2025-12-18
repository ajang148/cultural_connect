import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CultureCategories = ({ onCategoryClick }) => {
  const categories = [
  {
    id: 1,
    name: "Indian Culture",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12149432a-1765037026113.png",
    imageAlt: "Traditional Indian woman in vibrant red and gold sari performing classical dance with graceful hand gestures in ornate temple setting",
    programs: 45,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 2,
    name: "Chinese Culture",
    image: "https://images.unsplash.com/photo-1643722673992-2cee355ba96a",
    imageAlt: "Traditional Chinese dragon dance performance with colorful red and gold dragon costume during festive celebration with lanterns",
    programs: 38,
    color: "from-red-600 to-yellow-500"
  },
  {
    id: 3,
    name: "Mexican Culture",
    image: "https://images.unsplash.com/photo-1587922342650-955e9760d689",
    imageAlt: "Vibrant Mexican folk dancers in traditional colorful dresses performing folkloric dance with flowing skirts in festive plaza",
    programs: 32,
    color: "from-green-600 to-red-600"
  },
  {
    id: 4,
    name: "African Culture",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_172530e40-1765372776492.png",
    imageAlt: "African tribal dancers in traditional colorful ceremonial attire performing energetic dance with drums in outdoor village setting",
    programs: 28,
    color: "from-yellow-600 to-orange-700"
  },
  {
    id: 5,
    name: "Middle Eastern",
    image: "https://images.unsplash.com/photo-1624234636182-6d61fe4cd140",
    imageAlt: "Middle Eastern belly dancer in ornate turquoise and gold costume performing traditional dance with flowing silk veils",
    programs: 25,
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 6,
    name: "European Culture",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_165aeb65d-1765340740879.png",
    imageAlt: "European folk dancers in traditional regional costumes performing classical dance in historic town square with cobblestone streets",
    programs: 30,
    color: "from-blue-600 to-indigo-700"
  }];


  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Icon name="Globe" size={24} color="var(--color-primary)" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-accent">
              Explore by Culture
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover programs from diverse cultural traditions around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => onCategoryClick(category?.name)}
            className="group relative h-64 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">

              <Image
              src={category?.image}
              alt={category?.imageAlt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

              <div className={`absolute inset-0 bg-gradient-to-t ${category?.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2 text-center">{category?.name}</h3>
                <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Icon name="BookOpen" size={16} />
                  <span>{category?.programs} Programs</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ArrowRight" size={20} color="var(--color-primary)" />
              </div>
            </button>
          )}
        </div>
      </div>
    </section>);

};

export default CultureCategories;