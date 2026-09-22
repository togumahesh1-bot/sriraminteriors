import React from 'react';
import { Compass, CheckCircle2, ShieldCheck, MapPin, PenTool, Wrench } from 'lucide-react';

export const WhySriram: React.FC = () => {
  const points = [
    {
      title: 'PERSONALIZED DESIGN',
      description: 'Spaces planned around your individual routines, family composition, and storage patterns—never standardized templates.',
      icon: Compass,
    },
    {
      title: 'FUNCTION-FIRST PLANNING',
      description: 'Striking aesthetics balanced with everyday ergonomic practicality, easy maintenance, and logical spatial circulation.',
      icon: CheckCircle2,
    },
    {
      title: 'ATTENTION TO DETAIL',
      description: 'Meticulous consideration of shadow gaps, handleless profiles, seamless veneer grain matching, and concealed conduits.',
      icon: PenTool,
    },
    {
      title: 'LOCAL EXPERTISE',
      description: 'Deep familiarity with residential layouts across Visakhapatnam—from MVP Colony and Madhurawada to Beach Road villas.',
      icon: MapPin,
    },
    {
      title: 'END-TO-END SUPPORT',
      description: 'Single-window accountability. We coordinate 3D designers, carpentry masters, electricians, and stone artisans on your behalf.',
      icon: Wrench,
    },
    {
      title: 'CUSTOM APPROACH',
      description: 'Tailored solutions calibrated to your exact architectural space, timeline commitments, and budget parameters.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-36 bg-[#1A1918] text-[#FBF9F5] border-b border-[#2A2826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#2A2826]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#B89B72] font-semibold">
                06 / THE ADVANTAGE
              </span>
              <span className="h-[1px] w-12 bg-[#33312E]" />
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-light leading-[1.05]">
              CRAFTED WITH INTENT. <br />
              <span className="italic font-normal text-[#B89B72]">BUILT ON TRUST.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A8A49C] leading-relaxed">
            We believe an interior design partner should bring calm clarity to what is traditionally a stressful construction process.
          </p>
        </div>

        {/* 6 Value Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="p-7 rounded-2xl bg-[#242321] border border-[#33312E] hover:border-[#B89B72]/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#8E8C87]">0{idx + 1}</span>
                    <Icon className="w-4 h-4 text-[#B89B72]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-wide">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A49C] leading-relaxed pt-1">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#33312E] flex items-center gap-2 text-[11px] font-mono text-[#B89B72]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72]" />
                  <span>SRIRAM STANDARD OF EXECUTION</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Business Information Credentials Panel */}
        <div className="mt-16 p-8 rounded-2xl bg-[#121211] border border-[#2A2826]">
          <div className="flex items-center justify-between pb-6 border-b border-[#2A2826]">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#B89B72] uppercase block">
                BUSINESS ACCREDITATION & FACT SHEET
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-white mt-0.5">
                Sriram Interiors · Visakhapatnam Studio
              </h4>
            </div>
            <span className="px-3 py-1 rounded bg-[#242321] text-[10px] font-mono text-[#D6D2CA] border border-[#3A3835]">
              VERIFIED BUSINESS PROFILE
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[#8E8C87] uppercase block">ESTABLISHED</span>
              <span className="text-white font-medium text-sm">Established Local Firm</span>
              <span className="text-[10px] text-[#B89B72] block">Visakhapatnam, A.P.</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E8C87] uppercase block">LOCATION HQ</span>
              <span className="text-white font-medium text-sm">Visakhapatnam</span>
              <span className="text-[10px] text-[#A8A49C] block">Andhra Pradesh, India</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E8C87] uppercase block">SPECIALIZATION</span>
              <span className="text-white font-medium text-sm">Residential & Commercial</span>
              <span className="text-[10px] text-[#A8A49C] block">Apartments, Villas & Offices</span>
            </div>

            <div className="space-y-1">
              <span className="text-[#8E8C87] uppercase block">DELIVERY MODEL</span>
              <span className="text-white font-medium text-sm">Turnkey Execution</span>
              <span className="text-[10px] text-[#B89B72] block">Design + Joinery + Handover</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
