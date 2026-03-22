import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene7: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.9,
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
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-purple-900 to-slate-900 flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="../../../assets/generated/s7-final-hero.png"
              alt="BOSH! Umami Seasoning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold text-white mb-4">
                Try The Clear Winner
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                BOSH! Rich & Savoury Umami Seasoning
              </p>
              <div className="space-y-4 text-gray-300 mb-8">
                <p className="flex items-center gap-3">
                  <span className="text-purple-400 text-2xl">✓</span>
                  <span>4g protein per serving</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-purple-400 text-2xl">✓</span>
                  <span>2g fiber per serving</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-purple-400 text-2xl">✓</span>
                  <span>25% less salt than competitors</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-purple-400 text-2xl">✓</span>
                  <span>Real ingredients, zero compromise</span>
                </p>
              </div>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
              Order Now
            </button>

            <p className="text-center text-sm text-gray-500">
              Available at major retailers and online
            </p>

            <div className="text-center text-2xl font-bold text-purple-300">
              FLAVOUR FOR LIFE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene7;
