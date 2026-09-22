import React from 'react';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      data-cursor-view
      onClick={() => onSelect(project)}
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#1A1918] text-[#FBF9F5] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl"
    >
      {/* Aspect ratio container */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
        {/* Background Image with Zoom on hover */}
        <img
          src={project.coverImage}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121211] via-[#121211]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90 opacity-70" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-black/50 backdrop-blur-md text-[#EAE5DB] border border-white/10">
            {project.category}
          </span>
          {project.year && (
            <span className="text-[10px] font-mono text-[#D6D2CA] bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full">
              {project.year}
            </span>
          )}
        </div>

        {/* Bottom Content with upward movement on hover */}
        <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#B89B72] tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-wide group-hover:text-[#F3EFE6] transition">
            {project.title}
          </h3>

          <p className="text-xs text-[#A8A49C] line-clamp-2 mt-2 leading-relaxed opacity-90">
            {project.scope}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-white/15 mt-4">
            <span className="text-xs font-mono tracking-widest text-[#B89B72] uppercase font-medium flex items-center gap-1 group-hover:underline">
              VIEW PROJECT
            </span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#B89B72] text-white flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
