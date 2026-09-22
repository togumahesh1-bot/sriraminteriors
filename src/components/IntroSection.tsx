import React from 'react';
import { Compass, Sparkles, Hammer, CheckCircle2 } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const pillars = [
    {
      label: 'DESIGN',
      summary: 'Thoughtful spatial planning',
      description: 'Understanding light, circulation, and custom joinery so your space flows effortlessly with your family’s rhythm.',
      icon: Compass,
    },
    {
      label: 'DETAIL',
      summary: 'Materials & finishes selected with care',
      description: 'Hand-selected timber veneers, stain-resistant quartz, and precision-aligned hardware built for coastal durability.',
      icon: Sparkles,
    },
    {
      label: 'EXECUTION',
      summary: 'Coordinated from concept to completion',
      description: 'Single-source responsibility with in-house craftsmanship, strict milestone tracking, and transparent client reporting.',
      icon: Hammer,
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-36 bg-[#FBF9F5] border-b border-[#EAE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8E7452] font-semibold">
            01 / PHILOSOPHY & CRAFT
          </span>
          <span className="h-[1px] flex-1 bg-[#EAE5DB] max-w-xs" />
        </div>

        {/* Editorial Layout: Statement + Narrative */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1A1918] leading-[1.05] tracking-tight font-light">
              YOUR SPACE <br />
              <span className="italic font-normal text-[#8E7452]">SHOULD FEEL</span> <br />
              LIKE YOURS.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:pt-4">
            <p className="text-lg sm:text-xl text-[#3A3836] font-light leading-relaxed">
              At Sriram Interiors, we bring together thoughtful design, functional planning and careful execution to create interiors that are made around the people who use them.
            </p>
            <p className="text-sm sm:text-base text-[#6E6C67] leading-relaxed">
              We reject off-the-shelf templates and generic showroom replicas. Based in Visakhapatnam, our studio designs living environments that respond to coastal sea breezes, natural daylight, and the rich texture of modern Indian family life.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs font-mono tracking-wider text-[#8E7452]">
              <CheckCircle2 className="w-4 h-4 text-[#B89B72]" />
              <span>COMMITTED TO UNCOMPROMISING EXECUTION IN VIZAG</span>
            </div>
          </div>
        </div>

        {/* Three Pillars Info Blocks */}
        <div className="grid md:grid-cols-3 gap-8 pt-20 mt-16 border-t border-[#EAE5DB]">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.label} className="group relative space-y-3 p-6 rounded-xl hover:bg-[#F3EFE6]/60 transition duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8E8C87] tracking-widest">
                    0{idx + 1}
                  </span>
                  <div className="p-2 rounded-full bg-[#EAE5DB] text-[#8E7452] group-hover:bg-[#B89B72] group-hover:text-white transition">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h3 className="font-serif text-2xl text-[#1A1918] tracking-wide">
                    {pillar.label}
                  </h3>
                  <p className="text-sm font-medium text-[#8E7452]">
                    {pillar.summary}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#6E6C67] leading-relaxed pt-1">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
