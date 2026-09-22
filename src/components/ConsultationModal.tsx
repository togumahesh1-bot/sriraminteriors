import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    propertyType: '3BHK Apartment',
    consultationType: 'On-Site Site Walkthrough',
    preferredDate: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Sriram Interiors, I'd like to book an interior consultation for my ${formData.propertyType} in ${formData.location || 'Visakhapatnam'}.`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FBF9F5] text-[#1A1918] rounded-2xl shadow-2xl border border-[#EAE5DB] p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EAE5DB] text-[#6E6C67] hover:text-[#1A1918] transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F3EFE6] text-[#8E7452] flex items-center justify-center mx-auto border border-[#EAE5DB]">
              <CheckCircle2 className="w-7 h-7 text-[#B89B72]" />
            </div>
            <h3 className="font-serif text-2xl text-[#1A1918]">Consultation Scheduled</h3>
            <p className="text-xs text-[#6E6C67] max-w-sm mx-auto leading-relaxed">
              We have reserved your slot. An interior architect from Sriram Interiors will call <strong>{formData.phone}</strong> to confirm the exact meeting time and site access.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-[#1A1918] text-[#FBF9F5] text-xs font-mono uppercase tracking-wider hover:bg-[#8E7452] transition"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E7452] block mb-1">
                SRIRAM INTERIORS · VISAKHAPATNAM
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1918]">
                Book a Design Consultation
              </h3>
              <p className="text-xs text-[#8E8C87] mt-1">
                Select your preferred mode: On-site visit in Vizag or digital video layout review.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#4A4844] tracking-wider block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Raju"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#EAE5DB] text-xs text-[#1A1918] focus:outline-none focus:border-[#B89B72]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#4A4844] tracking-wider block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#EAE5DB] text-xs text-[#1A1918] focus:outline-none focus:border-[#B89B72]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#4A4844] tracking-wider block">
                    Property Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Madhurawada"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#EAE5DB] text-xs text-[#1A1918] focus:outline-none focus:border-[#B89B72]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#4A4844] tracking-wider block">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#EAE5DB] text-xs text-[#1A1918] focus:outline-none focus:border-[#B89B72]"
                  >
                    <option>2BHK Apartment</option>
                    <option>3BHK Apartment</option>
                    <option>4BHK / Penthouse</option>
                    <option>Independent Villa</option>
                    <option>Commercial / Office</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#4A4844] tracking-wider block">
                    Preferred Mode
                  </label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-white border border-[#EAE5DB] text-xs text-[#1A1918] focus:outline-none focus:border-[#B89B72]"
                  >
                    <option>On-Site Site Walkthrough</option>
                    <option>Design Studio Meeting</option>
                    <option>Digital Video Consultation</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1A1918] hover:bg-[#8E7452] text-white font-semibold text-xs tracking-widest uppercase transition flex items-center justify-center gap-2"
                >
                  <span>CONFIRM APPOINTMENT REQUEST</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89B72]" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 rounded-full bg-[#F3EFE6] hover:bg-[#EAE5DB] text-[#1A1918] font-medium text-xs font-mono tracking-wider transition flex items-center justify-center gap-2 border border-[#EAE5DB]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>OR BOOK DIRECTLY VIA WHATSAPP</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
