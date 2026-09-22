import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, MapPin, Calendar, CheckCircle2, ArrowRight, ArrowLeft, Sliders, Layers, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center animate-fadeIn">
      {/* Container for the Case Study Modal */}
      <div className="relative w-full max-w-5xl bg-[#FBF9F5] text-[#1A1918] my-0 sm:my-10 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden min-h-screen sm:min-h-0 border border-[#EAE5DB]">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="sticky top-6 right-6 ml-auto mr-6 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition flex items-center justify-center shadow-lg"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Section of the Case Study */}
        <div className="relative aspect-[16/9] max-h-[500px] w-full bg-[#121211] -mt-14">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918] via-black/40 to-transparent" />

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-white space-y-2">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-wider text-[#B89B72]">
              <span className="px-2.5 py-0.5 rounded bg-black/50 backdrop-blur-sm border border-white/20 uppercase">
                {project.category}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
              {project.year && <span>· Completed {project.year}</span>}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-wide">
              {project.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#D6D2CA] font-mono tracking-wide">
              Scope: {project.scope}
            </p>
          </div>
        </div>

        {/* Narrative: The Brief & The Approach */}
        <div className="p-6 sm:p-12 space-y-12">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 pb-10 border-b border-[#EAE5DB]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8E7452] font-semibold">
                <span>01</span>
                <span className="h-[1px] w-6 bg-[#8E7452]" />
                <span>THE BRIEF</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1A1918]">Client Requirements</h3>
              <p className="text-sm sm:text-base text-[#4A4844] leading-relaxed">
                {project.brief}
              </p>
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8E7452] font-semibold">
                <span>02</span>
                <span className="h-[1px] w-6 bg-[#8E7452]" />
                <span>THE APPROACH</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1A1918]">Design Direction</h3>
              <p className="text-sm sm:text-base text-[#4A4844] leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Design Details Breakdown */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#8E7452] font-semibold">
                  03 / DESIGN DETAILS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1918] mt-1">
                  Living Room, Kitchen & Storage Craft
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              {project.designDetails.map((detail, idx) => (
                <div key={idx} className="group rounded-xl overflow-hidden bg-[#F3EFE6] border border-[#EAE5DB] flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden bg-black/10">
                    <img
                      src={detail.image}
                      alt={detail.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                    <h4 className="font-serif text-lg text-[#1A1918] font-medium">{detail.title}</h4>
                    <p className="text-xs text-[#6E6C67] leading-relaxed">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Before -> After Comparison Slider */}
          <div className="pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#8E7452] font-semibold">
                  04 / TRANSFORMATION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1918] mt-1">
                  Before → After Interactive Comparison
                </h3>
              </div>
              <p className="text-xs text-[#8E8C87] font-mono">
                Drag the divider left or right to inspect the execution
              </p>
            </div>

            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              className="relative aspect-[16/9] w-full rounded-xl overflow-hidden select-none cursor-ew-resize border border-[#EAE5DB] shadow-inner bg-black"
            >
              {/* After Image (Full width background) */}
              <img
                src={project.beforeAfter.afterImage}
                alt="After Interior Execution"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-[#1A1918]/80 text-[#FBF9F5] text-xs font-mono tracking-wider backdrop-blur-sm">
                AFTER: {project.beforeAfter.afterLabel || 'Completed Execution'}
              </span>

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="absolute inset-y-0 left-0 w-full h-full"
                  style={{ width: containerRef.current?.clientWidth || '100%' }}
                >
                  <img
                    src={project.beforeAfter.beforeImage}
                    alt="Before Interior Execution"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 text-[#FBF9F5] text-xs font-mono tracking-wider backdrop-blur-sm">
                    BEFORE: {project.beforeAfter.beforeLabel || 'Initial Shell'}
                  </span>
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-2xl flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-[#1A1918] border-2 border-white text-white flex items-center justify-center shadow-lg -translate-x-1/2">
                  <Sliders className="w-4 h-4 rotate-90" />
                </div>
              </div>
            </div>
          </div>

          {/* Visual Timeline: Design -> Execution -> Final */}
          <div className="pt-8 space-y-4">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#8E7452] font-semibold">
              05 / DELIVERY TIMELINE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1918]">
              Design → Execution → Final Handover
            </h3>

            <div className="grid md:grid-cols-3 gap-6 pt-4">
              {project.timeline.map((step, idx) => (
                <div key={idx} className="relative p-5 rounded-xl bg-[#F3EFE6] border border-[#EAE5DB] space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8E7452]">
                    <span className="font-semibold">{step.phase}</span>
                    <span className="bg-[#EAE5DB] px-2 py-0.5 rounded text-[#1A1918]">{step.duration}</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#1A1918] font-medium">{step.title}</h4>
                  <p className="text-xs text-[#6E6C67] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Finish CTA: Let's create your space */}
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-[#1A1918] text-[#FBF9F5] text-center space-y-4">
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
              LET'S CREATE YOUR SPACE.
            </h3>
            <p className="text-sm text-[#A8A49C] max-w-md mx-auto leading-relaxed">
              Every home has unique proportions and stories. Discuss your upcoming project in Visakhapatnam with our interior team.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="px-8 py-3.5 rounded-full bg-[#B89B72] text-[#1A1918] font-semibold text-xs tracking-widest uppercase hover:bg-white transition shadow-lg"
              >
                BOOK A CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
