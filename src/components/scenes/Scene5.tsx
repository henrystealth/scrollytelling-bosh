import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene5: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      scale: 1.1,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-slate-900 flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Everyday Moments</h2>
          <p className="text-xl text-gray-300">A little sprinkle, big flavor</p>
        </div>

        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <img
            ref={imageRef}
            src="../../../assets/generated/s5-lifestyle.png"
            alt="Lifestyle moment"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Versatile</h3>
            <p className="text-gray-400">Works on everything—soups, pasta, vegetables, protein</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Simple</h3>
            <p className="text-gray-400">No prep, no measuring cups—just sprinkle and taste</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Delicious</h3>
            <p className="text-gray-400">Real umami depth from day one</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene5;
