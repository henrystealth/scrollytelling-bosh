import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene4: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLImageElement>(null);
  const afterRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.from(beforeRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0.5,
      },
    });

    gsap.from(afterRef.current, {
      opacity: 0,
      x: 50,
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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Before & After</h2>
          <p className="text-xl text-gray-300">The transformation is immediate</p>
        </div>

        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Before */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-lg overflow-hidden bg-slate-800 border-2 border-gray-600">
              <img
                ref={beforeRef}
                src="../../../assets/generated/s5-noodle-before.png"
                alt="Plain noodles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-400">Plain & Bland</h3>
              <p className="text-gray-500 mt-2">Standard noodles. No flavor depth.</p>
            </div>
          </div>

          {/* After */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-lg overflow-hidden bg-slate-800 border-2 border-purple-500">
              <img
                ref={afterRef}
                src="../../../assets/generated/s5-noodle-after.png"
                alt="Noodles with umami"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-300">Vibrant & Flavorful</h3>
              <p className="text-gray-300 mt-2">With BOSH! Umami. Instantly elevated.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            One sprinkle changes everything. That's the power of real umami seasoning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scene4;
