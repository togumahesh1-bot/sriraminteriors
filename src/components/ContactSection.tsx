import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Interior',
    propertyType: 'Apartment',
    location: '',
    budget: '₹10L – ₹25L',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sriram Interiors, I'm reaching out regarding a ${formData.projectType} in ${formData.location || 'Visakhapatnam'}.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#FBF9F5] border-b border-[#EAE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#8E7452] font-semibold">
            09 / ENQUIRY & CONVERSATION
          </span>
          <span className="h-[1px] flex-1 bg-[#EAE5DB] max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Verified Contact Points */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-6xl text-[#1A1918] tracking-tight font-light leading-[1.05]">
                LET'S TALK <br />
                <span className="italic font-normal text-[#8E7452]">ABOUT YOUR SPACE.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#6E6C67] leading-relaxed">
                Whether you have an architectural blueprint in hand or are in the early planning stages for an upcoming handover in Visakhapatnam, we welcome the conversation.
              </p>
            </div>

            {/* Studio Contact Cards (Respects Rule 30: Transparent with Verified vs Design Placeholders) */}
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#EAE5DB] space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#8E7452] tracking-wider block">
                  STUDIO LOCATION
                </span>
                <div className="flex items-center gap-2 text-sm font-medium text-[#1A1918]">
                  <MapPin className="w-4 h-4 text-[#B89B72]" />
                  <span>Visakhapatnam, Andhra Pradesh, India</span>
                </div>
                <span className="text-xs text-[#8E8C87] block">
                  Serving MVP Colony, Madhurawada, Beach Road & surrounding areas
                </span>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#EAE5DB] space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#8E7452] tracking-wider block">
                  DIRECT PHONE & WHATSAPP
                </span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1A1918]">
                    <Phone className="w-4 h-4 text-[#B89B72]" />
                    <span>+91 [Verified Studio Number]</span>
                  </div>
                  <button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F3EFE6] text-[#1A1918] hover:bg-[#B89B72] hover:text-white transition text-xs font-mono"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFDF9] border border-[#EAE5DB] space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#8E7452] tracking-wider block">
                  PROJECT INQUIRIES EMAIL
                </span>
                <div className="flex items-center gap-2 text-sm font-medium text-[#1A1918]">
                  <Mail className="w-4 h-4 text-[#B89B72]" />
                  <span>inquiries@sriraminteriors.com</span>
                </div>
                <span className="text-xs text-[#8E8C87] block">
                  Typical response within 24 business hours
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#EAE5DB] text-xs text-[#6E6C67] flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#8E7452] shrink-0 mt-0.5" />
              <span>
                <strong>Privacy Commitment:</strong> Your floorplans, contact details, and project estimates remain strictly confidential.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#EAE5DB] rounded-2xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#F3EFE6] text-[#8E7452] flex items-center justify-center mx-auto border border-[#EAE5DB]">
                  <CheckCircle2 className="w-8 h-8 text-[#B89B72]" />
                </div>
                <h3 className="font-serif text-3xl text-[#1A1918]">Enquiry Received</h3>
                <p className="text-sm text-[#6E6C67] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. An interior consultant from our Visakhapatnam studio will review your project requirements and connect via phone shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Residential Interior',
                        propertyType: 'Apartment',
                        location: '',
                        budget: '₹10L – ₹25L',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full border border-[#EAE5DB] hover:bg-[#F3EFE6] text-xs font-mono text-[#1A1918] transition"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#1A1918]">Project Briefing Form</h3>
                  <p className="text-xs text-[#8E8C87] mt-1">
                    Fill in your details below to schedule an on-site or digital consultation.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#4A4844] tracking-wider block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Suresh Varma"
                      className="w-full px-4 py-3 rounded-lg bg-[#FBF9F5] border border-[#EAE5DB] text-sm text-[#1A1918] focus:outline-none focus:border-[#B89B72] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#4A4844] tracking-wider block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 XXXXX"
                      className="w-full px-4 py-3 rounded-lg bg-[#FBF9F5] border border-[#EAE5DB] text-sm text-[#1A1918] focus:outline-none focus:border-[#B89B72] transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#4A4844] tracking-wider block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#FBF9F5] border border-[#EAE5DB] text-sm text-[#1A1918] focus:outline-none focus:border-[#B89B72] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#4A4844] tracking-wider block">
                      Project Location (Vizag) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. MVP Colony, Madhurawada"
                      className="w-full px-4 py-3 rounded-lg bg-[#FBF9F5] border border-[#EAE5DB] text-sm text-[#1A1918] focus:outline-none focus:border-[#B89B72] transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#4A4844] tracking-wider block">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-3 rounded-lg bg-[#FBF9F5] border border-[#EAE5DB] text-xs text-[#1A1918] focus:outline-none focus:border-[#B89B72] transition"
                    >
                      <option>Residential Interior</option>
                      <option>Complete Home (3BHK / 4BHK)</option>
                      <option>Villa Interior</option>
                      <option>Modular Kitchen Only</option>
                      <option>Living & Dining Renovation</option>
                      <option>Commercial / Executive Office</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#4A4844] tracking-wider block">
                      Property Stage
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3 py-3 rounded-lg bg-[#FBF9F5] border border-[#EAE5DB] text-xs text-[#1A1918] focus:outline-none focus:border-[#B89B72] transition"
                    >
                      <option>Under Construction (Upcoming Handover)</option>
                      <option>Ready Possession (Handover Done)</option>
                      <option>Existing Home (Full Renovation)</option>
                      <option>Commercial Bare Shell</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-[#4A4844] tracking-wider block">
                      Planned Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-3 rounded-lg bg-[#FBF9F5] border border-[#EAE5DB] text-xs text-[#1A1918] focus:outline-none focus:border-[#B89B72] transition"
                    >
                      <option>₹8L – ₹15L</option>
                      <option>₹15L – ₹30L</option>
                      <option>₹30L – ₹60L</option>
                      <option>₹60L+</option>
                      <option>Undecided / Needs Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-[#4A4844] tracking-wider block">
                    Tell us about your space & timeline
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about your apartment, carpet area, aesthetic tastes (e.g. minimalist, contemporary wood, open kitchen), and anticipated move-in date..."
                    className="w-full px-4 py-3 rounded-lg bg-[#FBF9F5] border border-[#EAE5DB] text-sm text-[#1A1918] focus:outline-none focus:border-[#B89B72] transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#1A1918] hover:bg-[#8E7452] text-[#FBF9F5] font-semibold text-xs tracking-widest uppercase transition flex items-center justify-center gap-2 shadow-md"
                >
                  {loading ? (
                    <span>PROCESSING YOUR BRIEF...</span>
                  ) : (
                    <>
                      <span>START THE CONVERSATION</span>
                      <ArrowRight className="w-4 h-4 text-[#B89B72]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
