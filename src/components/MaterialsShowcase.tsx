import React from 'react';
import { materialsData } from '../data/materialsData';
import { Sparkles, Layers } from 'lucide-react';

export const MaterialsShowcase: React.FC = () => {
  return (
    <section id="materials" className="py-24 sm:py-36 bg-[#FBF9F5] border-b border-[#EAE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#EAE5DB]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8E7452] font-semibold">
                05 / MATERIALITY & HARDWARE
              </span>
              <span className="h-[1px] w-12 bg-[#EAE5DB]" />
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-[#1A1918] tracking-tight font-light leading-[1.05]">
              BEAUTY LIVES <br />
              <span className="italic font-normal text-[#8E7452]">IN THE DETAILS.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#6E6C67] leading-relaxed">
            Good interiors are tactile. They depend on the textures your fingers brush across every morning: cool stone countertops, warm natural grain, silent drawer glides, and gentle evening illumination.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {materialsData.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-[#FFFDF9] border border-[#EAE5DB] overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/5 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 text-[10px] font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md text-[#FBF9F5] px-3 py-1 rounded-full border border-white/10">
                  {item.category}
                </span>
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1A1918] font-normal">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6E6C67] leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE5DB] mt-4 flex items-center gap-2 text-[11px] font-mono text-[#8E7452]">
                  <Sparkles className="w-3.5 h-3.5 text-[#B89B72]" />
                  <span>{item.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coastal Durability Assurance */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#F3EFE6] border border-[#EAE5DB] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#6E6C67]">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#8E7452] shrink-0" />
            <span>
              <strong>Visakhapatnam Climate Engineering:</strong> All timber substrates are BWR/BWP grade 710 calibrated marine ply with anti-termite treatment, designed to withstand Bay of Bengal coastal humidity without warping or swelling.
            </span>
          </div>
          <span className="font-mono text-[#8E7452] uppercase tracking-wider whitespace-nowrap">
            GRADE IS 710 CERTIFIED
          </span>
        </div>
      </div>
    </section>
  );
};
