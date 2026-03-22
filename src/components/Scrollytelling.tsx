import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scene1 from './scenes/Scene1';
import Scene2 from './scenes/Scene2';
import Scene3 from './scenes/Scene3';
import Scene4 from './scenes/Scene4';
import Scene5 from './scenes/Scene5';
import Scene6 from './scenes/Scene6';
import Scene7 from './scenes/Scene7';

gsap.registerPlugin(ScrollTrigger);

const Scrollytelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scrolling for parallax effects
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-slate-900">
      {/* Hero / Intro */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-6 text-white">
            BOSH! Rich & Savoury Umami
          </h1>
          <p className="text-2xl text-purple-300 mb-4">
            Objectively Superior Seasoning
          </p>
          <p className="text-lg text-gray-300">Scroll to discover why</p>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        </div>
      </section>

      {/* Scene 1: Shelf Comparison */}
      <Scene1 />

      {/* Scene 2: Ingredients */}
      <Scene2 />

      {/* Scene 3: Nutrition */}
      <Scene3 />

      {/* Scene 4: Before/After */}
      <Scene4 />

      {/* Scene 5: Lifestyle */}
      <Scene5 />

      {/* Scene 6: Timeline */}
      <Scene6 />

      {/* Scene 7: Final CTA */}
      <Scene7 />

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-purple-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">FLAVOUR FOR LIFE</p>
          <p className="text-sm text-gray-500">
            © 2026 BOSH! Ltd. Plant-based seasoning for everyone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Scrollytelling;
