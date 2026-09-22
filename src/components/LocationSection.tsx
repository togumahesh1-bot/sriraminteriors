import React from 'react';
import { MapPin, Navigation, Compass, Waves } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const localities = [
    { name: 'MVP Colony', type: 'Residential & Commercial' },
    { name: 'Madhurawada', type: 'High-Rise Apartments' },
    { name: 'Rushikonda', type: 'Coastal Villas & Penthouses' },
    { name: 'Beach Road', type: 'Luxury Residences' },
    { name: 'Waltair Uplands', type: 'Independent Bungalows' },
    { name: 'Seethammadhara', type: 'Family Residences' },
    { name: 'Yendada', type: 'Gated Communities' },
    { name: 'Siripuram', type: 'Executive Workspaces' },
    { name: 'Sagar Nagar', type: 'Modern Apartments' },
    { name: 'PM Palem', type: 'Contemporary Homes' },
    { name: 'Gajuwaka', type: 'Commercial & Homes' },
    { name: 'Dwaraka Nagar', type: 'Retail & Office Suites' },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#121211] text-[#FBF9F5] border-b border-[#2A2826] relative overflow-hidden">
      {/* Subtle Coastal Topographic / Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FBF9F5" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#2A2826]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#B89B72] font-semibold">
                08 / LOCAL EXPERTISE
              </span>
              <span className="h-[1px] w-12 bg-[#33312E]" />
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-light leading-[1.05]">
              DESIGNED <br />
              <span className="italic font-normal text-[#B89B72]">FOR VIZAG.</span>
            </h2>
          </div>

          <div className="space-y-2 max-w-md">
            <p className="text-sm text-[#A8A49C] leading-relaxed">
              From apartments and independent homes to offices and commercial spaces, Sriram Interiors brings thoughtful interior design and execution to spaces across Visakhapatnam.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B89B72] tracking-wider uppercase pt-1">
              <Waves className="w-3.5 h-3.5" />
              <span>SERVING VISAKHAPATNAM & SURROUNDING AREAS</span>
            </div>
          </div>
        </div>

        {/* Architectural Visual Grid + Map Elements */}
        <div className="grid lg:grid-cols-12 gap-10 pt-12 items-center">
          {/* Left Column: Architectural Map & Coastline Graphic */}
          <div className="lg:col-span-6 relative p-8 rounded-2xl bg-[#1A1918] border border-[#2A2826] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A2826]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#EAE5DB]">
                <Navigation className="w-4 h-4 text-[#B89B72]" />
                <span className="font-semibold tracking-wider">VISAKHAPATNAM / VIZAG REGION</span>
              </div>
              <span className="text-[10px] font-mono text-[#8E8C87] tracking-widest">
                17.6868° N, 83.2185° E
              </span>
            </div>

            {/* Stylized Minimal Vector Map Graphic */}
            <div className="relative aspect-[16/10] rounded-xl bg-[#141312] border border-[#262523] p-6 flex flex-col justify-between overflow-hidden">
              {/* Stylized Coastal Curve */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#1A1918]/60 border-l border-[#B89B72]/20 flex items-center justify-center">
                <span className="rotate-90 text-[10px] font-mono tracking-[0.3em] text-[#8E8C87]/40 uppercase whitespace-nowrap">
                  BAY OF BENGAL COAST
                </span>
              </div>

              {/* Waypoints */}
              <div className="space-y-4 relative z-10 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B89B72] animate-ping" />
                  <span className="text-white font-medium">Madhurawada / Rushikonda</span>
                  <span className="text-[10px] text-[#8E8C87]">Northern Corridor</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B89B72]" />
                  <span className="text-[#EAE5DB]">MVP Colony / Beach Road</span>
                  <span className="text-[10px] text-[#8E8C87]">Central Coastal Zone</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B89B72]" />
                  <span className="text-[#EAE5DB]">Waltair Uplands / Siripuram</span>
                  <span className="text-[10px] text-[#8E8C87]">Prime Commercial & Residential</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B89B72]" />
                  <span className="text-[#EAE5DB]">Seethammadhara / Gajuwaka</span>
                  <span className="text-[10px] text-[#8E8C87]">Established Residential Belts</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#262523] flex items-center justify-between text-[11px] font-mono text-[#8E8C87]">
                <span>ON-SITE MEASUREMENT & CONSULTATION</span>
                <span className="text-[#B89B72]">ACROSS ALL VIZAG SECTORS</span>
              </div>
            </div>

            <p className="text-xs text-[#8E8C87] leading-relaxed">
              Our site supervision teams and material delivery logistics cover all major residential complexes, gated villas, and commercial parks in Greater Visakhapatnam.
            </p>
          </div>

          {/* Right Column: Localities Interactive Grid */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono tracking-wider text-[#8E8C87] uppercase block">
              Neighbourhoods Where We Execute Projects
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {localities.map((loc) => (
                <div
                  key={loc.name}
                  className="p-3.5 rounded-xl bg-[#1A1918] border border-[#2A2826] hover:border-[#B89B72]/40 transition group"
                >
                  <div className="flex items-center gap-1.5 text-xs text-white font-medium group-hover:text-[#B89B72] transition">
                    <MapPin className="w-3 h-3 text-[#B89B72]" />
                    <span>{loc.name}</span>
                  </div>
                  <span className="text-[10px] text-[#8E8C87] block mt-1 font-mono">
                    {loc.type}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 p-5 rounded-xl bg-[#242321] border border-[#33312E] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-white">Own a property in another part of Vizag?</h4>
                <p className="text-xs text-[#8E8C87] mt-0.5">We conduct initial site assessments anywhere in the urban district.</p>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full bg-[#B89B72] hover:bg-white text-[#1A1918] font-semibold text-[11px] font-mono tracking-wider transition uppercase whitespace-nowrap"
              >
                REQUEST VISIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
