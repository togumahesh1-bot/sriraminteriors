import React from 'react';
import { ArrowUpRight, MessageCircle, Calendar } from 'lucide-react';

interface ConsultationCTAProps {
  onOpenConsultation: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onOpenConsultation }) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Sriram Interiors, I'm interested in booking a consultation for my home/workspace in Visakhapatnam."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-28 sm:py-40 bg-[#121211] text-[#FBF9F5] overflow-hidden">
      {/* Background Architectural Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')`,
        }}
      />
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-[#121211]/80 to-[#121211]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest text-[#B89B72] uppercase">
          <span>START YOUR JOURNEY</span>
        </div>

        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[0.95]">
          READY TO <br />
          <span className="italic font-normal text-[#B89B72]">REIMAGINE</span> <br />
          YOUR SPACE?
        </h2>

        <p className="text-base sm:text-xl text-[#D6D2CA] max-w-xl mx-auto font-light leading-relaxed">
          Tell us about your project and let's explore what your space could become. We begin with listening to your daily rituals.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-full bg-[#B89B72] text-[#1A1918] font-semibold text-xs sm:text-sm tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-xl flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK A CONSULTATION</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-widest uppercase backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WHATSAPP US</span>
          </button>
        </div>

        <p className="text-xs font-mono text-[#8E8C87] pt-2">
          Initial consultation includes layout review & preliminary scope assessment in Visakhapatnam.
        </p>
      </div>
    </section>
  );
};
