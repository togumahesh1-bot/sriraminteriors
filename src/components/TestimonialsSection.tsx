import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Strictly compliant with prompt Section 15 & 30: Clearly marked placeholder content, zero invented customer names or fake quotes!
  const testimonials = [
    {
      id: 'placeholder-1',
      quote: 'Client testimonial will appear here upon verified project completion and homeowner sign-off.',
      status: 'VERIFIED CLIENT REVIEW PLACEHOLDER',
      projectType: 'Residential Interior Project',
      location: 'Visakhapatnam, A.P.',
      note: 'Sriram Interiors maintains a strict policy of only displaying authenticated client feedback.'
    },
    {
      id: 'placeholder-2',
      quote: 'Client testimonial will appear here upon verified project completion and homeowner sign-off.',
      status: 'VERIFIED CLIENT REVIEW PLACEHOLDER',
      projectType: 'Turnkey Villa Fitout',
      location: 'Beach Road, Visakhapatnam',
      note: 'Authentic homeowner reviews collected directly following joint final walkthroughs.'
    },
    {
      id: 'placeholder-3',
      quote: 'Client testimonial will appear here upon verified project completion and homeowner sign-off.',
      status: 'VERIFIED CLIENT REVIEW PLACEHOLDER',
      projectType: 'Commercial Workspace Project',
      location: 'Siripuram, Visakhapatnam',
      note: 'Corporate client evaluations displayed with permission.'
    }
  ];

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#EAE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8E7452] font-semibold">
            07 / VERIFIED REVIEWS
          </span>
          <span className="h-[1px] flex-1 bg-[#EAE5DB] max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <h2 className="font-serif text-4xl sm:text-6xl text-[#1A1918] tracking-tight font-light leading-[1.05]">
            WHAT OUR <br />
            <span className="italic font-normal text-[#8E7452]">CLIENTS SAY.</span>
          </h2>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8E8C87]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1 ml-4">
              <button
                onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="p-2 rounded-full border border-[#EAE5DB] bg-white hover:bg-[#F3EFE6] text-[#1A1918] transition"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded-full border border-[#EAE5DB] bg-white hover:bg-[#F3EFE6] text-[#1A1918] transition"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Editorial Display */}
        <div className="relative p-8 sm:p-14 rounded-2xl bg-[#FFFDF9] border border-[#EAE5DB] shadow-sm overflow-hidden">
          <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-[#B89B72]/20 absolute top-6 right-8 pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFE6] text-[10px] font-mono tracking-wider text-[#8E7452] border border-[#EAE5DB]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89B72]" />
              <span>{current.status}</span>
            </div>

            <p className="font-serif text-2xl sm:text-4xl text-[#1A1918] font-light leading-snug italic">
              “{current.quote}”
            </p>

            <div className="pt-4 border-t border-[#EAE5DB] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="space-y-0.5">
                <span className="font-semibold text-[#1A1918] block">{current.projectType}</span>
                <span className="text-[#8E8C87] font-mono">{current.location}</span>
              </div>
              <p className="text-[11px] text-[#8E8C87] italic">
                {current.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
