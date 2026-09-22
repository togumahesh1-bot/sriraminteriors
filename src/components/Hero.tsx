import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="vision" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#121211]">
      {/* Background Architectural Photography with subtle parallax scale */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90')`,
          transform: `scale(${1 + Math.min(scrollY * 0.0004, 0.1)}) translateY(${scrollY * 0.2}px)`,
        }}
      >
        {/* Architectural Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-[#121211]/50 to-[#121211]/30" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#121211]/30 to-[#121211]/80" />
      </div>

      {/* Floating Badge (Top Right / Asymmetric) */}
      <div className="absolute top-28 right-6 sm:right-12 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] text-[#EAE5DB] font-mono tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B89B72] animate-pulse" />
        <span>INTERIOR DESIGN · EXECUTION · VIZAG</span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#B89B72]" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#B89B72] uppercase font-medium">
              SRIRAM INTERIORS · VISAKHAPATNAM
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#FBF9F5] leading-[0.95] font-light">
            INTERIORS <br />
            <span className="italic font-normal text-[#EAE5DB]">THAT FEEL</span> <br />
            LIKE YOU.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-[#D6D2CA] max-w-xl font-light leading-relaxed text-balance">
            Thoughtfully designed homes and workspaces, shaped around the way you live, work and experience your space in Visakhapatnam.
          </p>

          {/* Primary and Secondary CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-7 py-4 rounded-full bg-[#FBF9F5] text-[#1A1918] font-semibold text-xs sm:text-sm tracking-widest uppercase hover:bg-[#B89B72] hover:text-white transition-all duration-300 shadow-xl flex items-center gap-2 group"
            >
              <span>EXPLORE OUR PROJECTS</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#FBF9F5] font-medium text-xs sm:text-sm tracking-widest uppercase backdrop-blur-md border border-white/25 transition-all duration-300 flex items-center gap-2"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4 text-[#B89B72]" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Scroll Indicator & Living Architecture Concept Note */}
        <div className="pt-16 sm:pt-24 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/10 mt-12">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#A8A49C] hover:text-white transition"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#B89B72] group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>

          <div className="flex items-center gap-6 text-xs text-[#8E8C87] font-mono tracking-wider">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#B89B72]" />
              <span>CONCEPT: LIVING ARCHITECTURE</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline">RESIDENTIAL & COMMERCIAL EXECUTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};
