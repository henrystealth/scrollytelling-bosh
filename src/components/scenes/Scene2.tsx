import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
        },
      });
    });
  }, []);

  const ingredients = [
    { name: 'Nutritional Yeast', benefit: 'B Vitamins & Umami' },
    { name: 'Shiitake Mushroom', benefit: 'Glutamates & Depth' },
    { name: 'Onion Powder', benefit: 'Natural Sweetness' },
    { name: 'Garlic Powder', benefit: 'Savory Notes' },
    { name: 'Tomato Powder', benefit: 'Acid & Complexity' },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Ingredients Matter</h2>
          <p className="text-xl text-gray-300">Five real ingredients. Zero compromise.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="bg-slate-800 rounded-lg p-6 border border-purple-500 hover:border-purple-300 transition-colors"
            >
              <h3 className="text-lg font-bold text-purple-300 mb-2">{ingredient.name}</h3>
              <p className="text-sm text-gray-400">{ingredient.benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-800 rounded-lg p-8 border border-purple-400">
          <p className="text-center text-gray-300 text-lg">
            Each ingredient is chosen for its nutritional profile and flavor contribution. 
            No fillers. No artificial anything. Just pure umami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scene2;
