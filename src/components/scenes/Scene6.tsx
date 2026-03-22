import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene6: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
        },
      });
    });
  }, []);

  const timeline = [
    { year: '2016', event: 'BOSH! Founded', desc: 'Plant-based revolution begins' },
    { year: '2018', event: 'First Cookbook', desc: 'Real plant-based food for real people' },
    { year: '2020', event: 'Product Line', desc: 'Beyond recipes—complete nutrition' },
    { year: '2026', event: 'Umami Seasoning', desc: 'The Clear Winner launches' },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-xl text-gray-300">A decade of plant-based excellence</p>
        </div>

        <div ref={timelineRef} className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-item flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/3">
                <div className="bg-purple-600 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-white">{item.year.slice(-2)}</span>
                </div>
              </div>
              <div className="w-2/3 bg-slate-800 rounded-lg p-6 border border-purple-500">
                <h3 className="text-2xl font-bold text-purple-300 mb-2">{item.event}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scene6;
