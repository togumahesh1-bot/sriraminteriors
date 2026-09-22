import React, { useState } from 'react';
import { processData } from '../data/processData';
import { CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = processData[activeStepIndex];

  return (
    <section id="process" className="py-24 sm:py-36 bg-[#121211] text-[#FBF9F5] border-b border-[#2A2826] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#2A2826]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#B89B72] font-semibold">
                04 / THE SRIRAM WAY
              </span>
              <span className="h-[1px] w-12 bg-[#33312E]" />
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-light leading-[1.05]">
              DESIGNED WITH INTENT. <br />
              <span className="italic font-normal text-[#B89B72]">EXECUTED WITH CARE.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A8A49C] leading-relaxed">
            A methodical six-phase roadmap ensuring every millimeter is accounted for, deadlines are honored, and costs remain predictable.
          </p>
        </div>

        {/* Process Steps Horizontal / Interactive Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 py-10 border-b border-[#2A2826]">
          {processData.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                activeStepIndex === idx
                  ? 'bg-[#242321] border-[#B89B72] text-white shadow-lg'
                  : 'bg-[#181716] border-[#2A2826] text-[#8E8C87] hover:bg-[#201F1D] hover:text-[#D6D2CA]'
              }`}
            >
              <span className={`text-xs font-mono tracking-widest ${activeStepIndex === idx ? 'text-[#B89B72]' : 'text-[#6E6C67]'}`}>
                {step.number}
              </span>
              <div className="pt-3">
                <span className="font-serif text-base tracking-wide block">{step.title}</span>
                <span className="text-[10px] font-mono opacity-60 line-clamp-1">{step.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed View (Split Architecture: Visual + Narrative) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 pt-12 items-center">
          {/* Visual Step Preview */}
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-[#33312E]">
            <img
              src={currentStep.image}
              alt={currentStep.title}
              key={currentStep.number}
              className="w-full h-full object-cover animate-fadeIn transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#D6D2CA]">
              <span className="bg-black/60 px-3 py-1 rounded backdrop-blur-sm border border-white/10">
                PHASE {currentStep.number} OF 06
              </span>
              <span className="text-[#B89B72] font-semibold">{currentStep.title}</span>
            </div>
          </div>

          {/* Narrative & Deliverables */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#B89B72] tracking-widest uppercase">
                PHASE {currentStep.number} : {currentStep.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-light">
                {currentStep.title}
              </h3>
            </div>

            <p className="text-base text-[#D6D2CA] leading-relaxed">
              {currentStep.description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono tracking-wider text-[#8E8C87] uppercase block">
                Key Milestone Deliverables
              </span>
              <div className="space-y-2">
                {currentStep.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#1C1B19] border border-[#2A2826] text-xs text-[#EAE5DB]">
                    <CheckCircle2 className="w-4 h-4 text-[#B89B72] shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Step Quick Navigation */}
            <div className="pt-4 flex items-center justify-between">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="text-xs font-mono tracking-wider text-[#8E8C87] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition"
              >
                ← PREVIOUS PHASE
              </button>

              <button
                disabled={activeStepIndex === processData.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(processData.length - 1, prev + 1))}
                className="text-xs font-mono tracking-wider text-[#B89B72] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition flex items-center gap-1"
              >
                <span>NEXT PHASE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
