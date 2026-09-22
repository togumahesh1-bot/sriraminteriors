import React, { useState } from 'react';
import { ProposalBanner } from './components/ProposalBanner';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ServicesSection } from './components/ServicesSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { MaterialsShowcase } from './components/MaterialsShowcase';
import { WhySriram } from './components/WhySriram';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { ConsultationCTA } from './components/ConsultationCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConsultationModal } from './components/ConsultationModal';
import { projectsData } from './data/projectsData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1A1918] font-sans selection:bg-[#B89B72]/25 selection:text-[#1A1918] pb-16 md:pb-0">
      {/* Desktop Architectural Custom Cursor */}
      <CustomCursor />

      {/* Website Redesign Proposal Banner */}
      <ProposalBanner onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Sticky Minimal Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main>
        {/* Cinematic Hero */}
        <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Introduction / Living Architecture Statement */}
        <IntroSection />

        {/* Curated Projects Showcase */}
        <ProjectShowcase
          projects={projectsData}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Services & Capabilities */}
        <ServicesSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* The Sriram Way - Process Timeline */}
        <ProcessTimeline />

        {/* Materials & Coastal Durability */}
        <MaterialsShowcase />

        {/* Why Sriram / Trust & Local Expertise */}
        <WhySriram />

        {/* Verified Testimonials Placeholder Policy */}
        <TestimonialsSection />

        {/* Designed for Vizag - Location Architecture */}
        <LocationSection />

        {/* Dramatic Consultation Banner */}
        <ConsultationCTA onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Detailed Contact & Briefing Form */}
        <ContactSection />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Mobile Sticky Bar for WhatsApp & Consultation */}
      <MobileStickyBar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Interactive Project Deep Case Study Modal (with Before/After Slider) */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => {
          setSelectedProject(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Quick Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
