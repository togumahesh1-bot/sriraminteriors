import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Sriram Interiors, I'd like to book an interior consultation in Visakhapatnam."
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#1A1918]/95 backdrop-blur-md border-t border-[#2A2826] p-3 px-4 flex items-center gap-3 shadow-2xl">
      <button
        onClick={handleWhatsApp}
        className="flex-1 py-3 px-3 rounded-full bg-[#242321] text-white border border-[#3A3835] text-[11px] font-mono tracking-wider uppercase font-semibold flex items-center justify-center gap-2 active:scale-95 transition"
      >
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span>WHATSAPP</span>
      </button>

      <button
        onClick={onOpenConsultation}
        className="flex-1 py-3 px-3 rounded-full bg-[#B89B72] text-[#1A1918] text-[11px] font-mono tracking-wider uppercase font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition"
      >
        <Calendar className="w-4 h-4" />
        <span>CONSULTATION</span>
      </button>
    </div>
  );
};
