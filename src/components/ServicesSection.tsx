import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 sm:py-36 bg-[#FBF9F5] border-b border-[#EAE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#EAE5DB]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8E7452] font-semibold">
                03 / CAPABILITIES & SERVICES
              </span>
              <span className="h-[1px] w-12 bg-[#EAE5DB]" />
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-[#1A1918] tracking-tight font-light leading-[1.05]">
              FROM FIRST IDEA <br />
              <span className="italic font-normal text-[#8E7452]">TO FINAL DETAIL.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#6E6C67] leading-relaxed">
            Whether furnishing a new flat in Madhurawada, renovating a Beach Road villa, or designing executive commercial spaces, we provide end-to-end craftsmanship.
          </p>
        </div>

        {/* 6 Elegant Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
              className="group relative cursor-pointer rounded-2xl bg-[#FFFDF9] border border-[#EAE5DB] overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Big Number */}
                <div className="absolute top-4 left-4">
                  <span className="text-sm font-mono text-[#FBF9F5] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#1A1918] group-hover:text-[#8E7452] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#8E7452] italic">
                    “{service.tagline}”
                  </p>
                  <p className="text-xs text-[#6E6C67] leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Included Features list */}
                <div className="pt-3 border-t border-[#EAE5DB]/60 space-y-1.5">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-[#4A4844]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-mono tracking-widest text-[#1A1918] group-hover:text-[#8E7452] transition">
                  <span className="uppercase text-[11px]">DISCUSS THIS SERVICE</span>
                  <div className="w-7 h-7 rounded-full bg-[#F3EFE6] group-hover:bg-[#8E7452] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation CTA from services */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A1918] text-[#FBF9F5] hover:bg-[#8E7452] transition font-medium text-xs tracking-widest uppercase shadow-md"
          >
            <span>INQUIRE ABOUT CUSTOM REQUIREMENTS</span>
            <ArrowUpRight className="w-4 h-4 text-[#B89B72]" />
          </button>
        </div>
      </div>
    </section>
  );
};
