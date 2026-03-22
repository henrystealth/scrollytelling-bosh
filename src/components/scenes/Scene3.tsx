import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Scene3: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    metricsRef.current.forEach((metric, index) => {
      const value = metric.querySelector('.metric-value') as HTMLElement;
      if (value) {
        const finalValue = parseInt(value.textContent || '0', 10);
        gsap.from(value, {
          textContent: '0',
          duration: 2,
          scrollTrigger: {
            trigger: metric,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
          snap: { textContent: 1 },
          onUpdate() {
            const val = parseInt(value.textContent || '0', 10);
            value.textContent = val.toString();
          },
        });
      }
    });
  }, []);

  const metrics = [
    { label: 'g Protein', value: 4, sublabel: 'per serving' },
    { label: 'g Fiber', value: 2, sublabel: 'per serving' },
    { label: 'B Vitamins', value: 6, sublabel: 'included' },
    { label: '% Salt Reduction', value: 25, sublabel: 'vs competitors' },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-slate-900 flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">The Numbers Don't Lie</h2>
          <p className="text-xl text-gray-300">Measurable nutrition. Real benefits.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) metricsRef.current[index] = el;
              }}
              className="bg-gradient-to-br from-purple-900 to-slate-800 rounded-xl p-8 border border-purple-500 text-center"
            >
              <div className="text-5xl font-bold text-purple-300 mb-2">
                <span className="metric-value">{metric.value}</span>{metric.label.includes('%') ? '%' : ''}
              </div>
              <p className="text-gray-300 font-semibold">{metric.label}</p>
              <p className="text-sm text-gray-400 mt-2">{metric.sublabel}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            When you're choosing a seasoning, choose one backed by real nutrition. 
            That's BOSH! Umami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Scene3;
