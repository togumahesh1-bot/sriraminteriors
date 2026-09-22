import React from 'react';
import { ArrowUpRight, MessageCircle, Instagram, Facebook, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Sriram Interiors, I'm reaching out from your website to discuss an interior project in Visakhapatnam."
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#121211] text-[#FBF9F5] border-t border-[#2A2826] relative overflow-hidden">
      {/* Editorial High-Impact Closing Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-[#2A2826]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#B89B72] font-semibold">
              BEGIN YOUR JOURNEY
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-light tracking-tight leading-[1.05]">
              YOUR SPACE HAS A STORY. <br />
              <span className="italic font-normal text-[#B89B72]">LET'S DESIGN IT.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-full bg-[#B89B72] text-[#1A1918] font-semibold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 rounded-full bg-[#242321] hover:bg-[#2A2826] text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 border border-[#3A3835] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WHATSAPP US</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation & Brand */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-semibold text-white">
                SRIRAM
              </span>
              <span className="block font-serif text-xl sm:text-2xl tracking-[0.2em] text-[#B89B72] font-light -mt-1">
                INTERIORS
              </span>
            </div>

            <p className="text-xs text-[#8E8C87] max-w-sm leading-relaxed font-mono">
              INTERIOR DESIGN · EXECUTION · VISAKHAPATNAM
            </p>
            <p className="text-xs text-[#A8A49C] max-w-sm leading-relaxed">
              Living Architecture — creating thoughtful residential and commercial spaces across Visakhapatnam, Andhra Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B89B72] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono tracking-wider text-[#A8A49C]">
              <li><a href="#vision" className="hover:text-white transition">01 / Vision</a></li>
              <li><a href="#projects" className="hover:text-white transition">02 / Projects</a></li>
              <li><a href="#services" className="hover:text-white transition">03 / Services</a></li>
              <li><a href="#process" className="hover:text-white transition">04 / The Sriram Way</a></li>
              <li><a href="#materials" className="hover:text-white transition">05 / Materials</a></li>
              <li><a href="#about" className="hover:text-white transition">06 / About Studio</a></li>
              <li><a href="#contact" className="hover:text-white transition">07 / Contact</a></li>
            </ul>
          </div>

          {/* Social Profiles & Local Business Connection */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#B89B72] block">
              Connect & Verify
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1A1918] border border-[#2A2826] text-[#A8A49C] hover:text-[#B89B72] hover:border-[#B89B72] flex items-center justify-center transition"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1A1918] border border-[#2A2826] text-[#A8A49C] hover:text-[#B89B72] hover:border-[#B89B72] flex items-center justify-center transition"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://google.com/business"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1A1918] border border-[#2A2826] text-[#A8A49C] hover:text-[#B89B72] hover:border-[#B89B72] flex items-center justify-center transition"
                aria-label="Google Business Profile"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#8E8C87] space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B89B72]" />
                <span>Visakhapatnam, Andhra Pradesh 530017</span>
              </div>
              <span>Serving MVP Colony, Madhurawada, Beach Road & Surroundings</span>
            </div>
          </div>
        </div>

        {/* Bottom Tagline & Proposal Credit */}
        <div className="pt-12 mt-12 border-t border-[#2A2826] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E6C67]">
          <div>
            © {new Date().getFullYear()} SRIRAM INTERIORS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#B89B72]">DIGITAL REDESIGN PROPOSAL</span>
            <span>·</span>
            <span>VISAKHAPATNAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
