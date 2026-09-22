import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Materials', href: '#materials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Sriram Interiors, I'm interested in discussing an interior project in Visakhapatnam."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <header
        className={`sticky top-[41px] z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#EAE5DB] py-3.5 shadow-sm text-[#1A1918]'
            : 'bg-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex flex-col focus:outline-none">
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.2em] font-semibold transition-colors ${
                isScrolled ? 'text-[#1A1918]' : 'text-white'
              }`}
            >
              SRIRAM
            </span>
            <span
              className={`text-[9px] font-sans tracking-[0.35em] uppercase font-medium -mt-1 transition-colors ${
                isScrolled ? 'text-[#8E8C87]' : 'text-[#D6D2CA]'
              }`}
            >
              INTERIORS · VIZAG
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#B89B72] ${
                  isScrolled ? 'text-[#1A1918]' : 'text-[#EAE5DB]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleWhatsApp}
              className={`p-2.5 rounded-full transition-all flex items-center justify-center border ${
                isScrolled
                  ? 'border-[#EAE5DB] text-[#1A1918] hover:bg-[#F3EFE6] hover:text-[#25D366]'
                  : 'border-white/20 text-white hover:bg-white/10 hover:text-[#25D366]'
              }`}
              title="Quick WhatsApp Chat"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenConsultation}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center space-x-1.5 shadow-sm ${
                isScrolled
                  ? 'bg-[#1A1918] text-[#FBF9F5] hover:bg-[#B89B72]'
                  : 'bg-white/90 text-[#1A1918] hover:bg-[#B89B72] hover:text-white backdrop-blur-sm'
              }`}
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded focus:outline-none transition ${
              isScrolled ? 'text-[#1A1918]' : 'text-white'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1918] text-[#FBF9F5] flex flex-col p-6 sm:p-8 animate-fadeIn md:hidden">
          <div className="flex items-center justify-between pb-6 border-b border-[#2A2826]">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white">SRIRAM</span>
              <span className="block text-[10px] tracking-[0.3em] text-[#B89B72] font-mono">INTERIORS · VISAKHAPATNAM</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#8E8C87] hover:text-white"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center space-y-6 py-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-2 border-b border-[#2A2826]/40 text-xl font-serif tracking-wider hover:text-[#B89B72] transition"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-[#8E8C87]">0{idx + 1}</span>
                  <span>{link.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#8E8C87] group-hover:text-[#B89B72] transition" />
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#2A2826] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 px-4 rounded bg-[#B89B72] text-[#1A1918] font-semibold text-xs tracking-widest uppercase transition hover:bg-white text-center"
            >
              BOOK A CONSULTATION
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full py-3.5 px-4 rounded bg-[#242321] text-white font-medium text-xs tracking-widest uppercase transition hover:bg-[#2A2826] border border-[#3A3835] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WHATSAPP US</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
