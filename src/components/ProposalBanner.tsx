import React, { useState } from 'react';
import { Eye, Info, X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProposalBannerProps {
  onOpenConsultation: () => void;
}

export const ProposalBanner: React.FC<ProposalBannerProps> = ({ onOpenConsultation }) => {
  const [showRationale, setShowRationale] = useState(false);
  const [activeSection, setActiveSection] = useState('01');

  const navItems = [
    { number: '01', label: 'Vision', href: '#vision' },
    { number: '02', label: 'Experience', href: '#experience' },
    { number: '03', label: 'Projects', href: '#projects' },
    { number: '04', label: 'Services', href: '#services' },
    { number: '05', label: 'Process', href: '#process' },
    { number: '06', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Proposal Bar */}
      <aside aria-label="Website Redesign Proposal Bar" className="bg-[#121211] text-[#EAE5DB] border-b border-[#2A2826] text-xs py-2.5 px-4 sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Proposal Identifier */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#B89B72]/15 text-[#B89B72] border border-[#B89B72]/30 font-medium tracking-wider text-[10px] uppercase">
              <Sparkles className="w-3 h-3" />
              Design Proposal
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-wide text-white">SRIRAM INTERIORS</span>
              <span className="text-[#8E8C87]">·</span>
              <span className="text-[#8E8C87] hidden sm:inline">DIGITAL EXPERIENCE PROPOSAL</span>
              <span className="text-[#8E8C87] hidden sm:inline">·</span>
              <span className="text-[#B89B72]">VISAKHAPATNAM</span>
            </div>
          </div>

          {/* Proposal Section Nav */}
          <div className="hidden lg:flex items-center gap-4 text-[11px] font-mono tracking-wider">
            {navItems.map((item) => (
              <a
                key={item.number}
                href={item.href}
                onClick={() => setActiveSection(item.number)}
                className={`transition-colors flex items-center gap-1.5 ${
                  activeSection === item.number ? 'text-[#B89B72] font-medium' : 'text-[#8E8C87] hover:text-[#EAE5DB]'
                }`}
              >
                <span className="opacity-60">{item.number}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Proposal Rationale Modal Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRationale(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#242321] hover:bg-[#2A2826] text-[#EAE5DB] transition border border-[#3A3835] text-[11px] tracking-wide"
            >
              <Info className="w-3.5 h-3.5 text-[#B89B72]" />
              <span>Client Proposal Notes</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Rationale Modal for Sriram Interiors Stakeholders */}
      {showRationale && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1A1918] text-[#FBF9F5] border border-[#2A2826] rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowRationale(false)}
              className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-[#2A2826] text-[#8E8C87] hover:text-white transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#B89B72] uppercase block mb-1">
                  Client Redesign Proposal
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">
                  Reimagining Sriram Interiors Online
                </h3>
                <p className="text-sm text-[#8E8C87] mt-1.5">
                  Prepared for Sriram Interiors, Visakhapatnam. Concept: “Living Architecture”.
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#D6D2CA] leading-relaxed">
                <div className="p-4 rounded-lg bg-[#242321] border border-[#33312E] space-y-2">
                  <h4 className="font-medium text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B89B72]" />
                    Strategic Objective
                  </h4>
                  <p className="text-xs text-[#A8A49C]">
                    Transform Sriram Interiors from a traditional local contractor into a sought-after, architectural interior design studio in Visakhapatnam that commands premium client trust and superior project margins.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded bg-[#242321] border border-[#33312E] space-y-1">
                    <span className="text-[#B89B72] font-semibold">1. Editorial Visual System</span>
                    <p className="text-[#8E8C87]">Warm ivory, charcoal, and bronze palette reflecting authentic architectural publications.</p>
                  </div>
                  <div className="p-3.5 rounded bg-[#242321] border border-[#33312E] space-y-1">
                    <span className="text-[#B89B72] font-semibold">2. Trust & Zero Fluff</span>
                    <p className="text-[#8E8C87]">No exaggerated marketing numbers. Verified local expertise in MVP Colony, Beach Road, and Yendada.</p>
                  </div>
                  <div className="p-3.5 rounded bg-[#242321] border border-[#33312E] space-y-1">
                    <span className="text-[#B89B72] font-semibold">3. Interactive Case Studies</span>
                    <p className="text-[#8E8C87]">Touch-enabled Before/After comparison sliders that prove execution mastery.</p>
                  </div>
                  <div className="p-3.5 rounded bg-[#242321] border border-[#33312E] space-y-1">
                    <span className="text-[#B89B72] font-semibold">4. Frictionless Leads</span>
                    <p className="text-[#8E8C87]">Direct WhatsApp pre-filled chat triggers and one-click consultation scheduling.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2826] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#8E8C87]">Experience the live prototype below.</span>
                <button
                  onClick={() => setShowRationale(false)}
                  className="px-5 py-2.5 rounded bg-[#B89B72] hover:bg-[#8E7452] text-white text-xs font-medium tracking-wide transition flex items-center gap-1.5"
                >
                  <span>Explore Live Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
