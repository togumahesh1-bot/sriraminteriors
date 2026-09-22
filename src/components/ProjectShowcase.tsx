import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Complete Home', 'Modular Kitchen', 'Commercial', 'Villa'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-36 bg-[#1A1918] text-[#FBF9F5] relative overflow-hidden">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#FBF9F5_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#2A2826]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#B89B72] font-semibold">
                02 / CURATED PORTFOLIO
              </span>
              <span className="h-[1px] w-12 bg-[#33312E]" />
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight font-light">
              SPACES WE’VE <br />
              <span className="italic font-normal text-[#B89B72]">SHAPED.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A8A49C] leading-relaxed">
            A portfolio of completed residential and commercial environments across Visakhapatnam, reflecting individual lifestyles and precision craftsmanship.
          </p>
        </div>

        {/* Category Filters */}
        <div className="py-8 flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#B89B72] text-[#1A1918] font-semibold shadow-md'
                  : 'bg-[#242321] text-[#A8A49C] hover:bg-[#2A2826] hover:text-white border border-[#33312E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#242321] border border-[#33312E] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-[#B89B72]/15 text-[#B89B72] border border-[#B89B72]/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white">Have a specific architectural floorplan?</h3>
              <p className="text-xs text-[#8E8C87] mt-0.5">
                We review CAD blueprints and site layouts for homes across Visakhapatnam.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#FBF9F5] text-[#1A1918] hover:bg-[#B89B72] hover:text-white transition font-medium text-xs tracking-wider uppercase flex items-center gap-2"
          >
            <span>SUBMIT YOUR FLOORPLAN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
