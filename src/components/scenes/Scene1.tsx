import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene1: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax effect on image
    gsap.to(imageRef.current, {
      yPercent: 50,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    });

    // Fade in text
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
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
    <section ref={sectionRef} className="min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative h-96 overflow-hidden rounded-lg">
          <img
            ref={imageRef}
            src="../../../assets/generated/s1-shelves.png"
            alt="Shelf comparison"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div ref={textRef} className="space-y-6">
          <h2 className="text-5xl font-bold text-white">
            The Clear Winner
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            When you compare umami seasoning side-by-side, BOSH! stands apart. 
            Superior ingredients. Better nutrition. Lower salt. That's not a claim—
            that's a measurable difference.
          </p>
          <div className="space-y-3 pt-6 border-t border-purple-700">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-purple-400">✓</span>
              <span className="text-gray-300">4g Protein per serving</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl text-purple-400">✓</span>
              <span className="text-gray-300">Real ingredients you recognize</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl text-purple-400">✓</span>
              <span className="text-gray-300">25% less sodium than competitors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene1;
