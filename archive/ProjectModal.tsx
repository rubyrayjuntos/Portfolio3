
import React from 'react';
import { Project } from '../types';
import { ContentTabs } from './content/ContentTabs';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const accentColor = project.medium === 'code' ? 'text-fuchsia-500' : project.medium === 'art' ? 'text-cyan-400' : 'text-amber-500';
  const accentBg = project.medium === 'code' ? 'bg-fuchsia-500' : project.medium === 'art' ? 'bg-cyan-400' : 'bg-amber-500';
  const borderColor = project.medium === 'code' ? 'border-fuchsia-500/30' : project.medium === 'art' ? 'border-cyan-400/30' : 'border-amber-500/30';

  const primaryLinkKey = project.links ? Object.keys(project.links)[0] : null;
  const primaryLinkUrl = primaryLinkKey ? project.links![primaryLinkKey] : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-zinc-950/90 backdrop-blur-xl transition-all duration-300">
      <div 
        className={`w-full max-w-4xl max-h-[85vh] bg-zinc-900 border ${borderColor} rounded-2xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_0_50px_rgba(0,0,0,0.5)]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-950/80 rounded-full hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Section */}
        <div className="w-full md:w-[45%] h-64 md:h-auto bg-zinc-950 relative overflow-hidden group">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-[0.2em] text-zinc-950 ${accentBg}`}>
                {project.medium}
              </span>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{project.year}</span>
            </div>
            <h2 className="text-4xl font-black text-white leading-[0.9] uppercase tracking-tighter">{project.title}</h2>
          </div>
        </div>

        {/* Content Section with Tabs */}
        <div className="w-full md:w-[55%] flex flex-col overflow-hidden">
          <ContentTabs project={project} />
        </div>
      </div>
    </div>
  );
};
