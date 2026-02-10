
import React from 'react';
import { Project } from '../types';

interface ProjectPreviewProps {
  project: Project | null;
  onOpenFull: () => void;
  onClose: () => void;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project, onOpenFull, onClose }) => {
  if (!project) return null;

  const accentColor = project.medium === 'code' ? 'text-fuchsia-500' : project.medium === 'art' ? 'text-cyan-400' : 'text-amber-500';
  const accentBg = project.medium === 'code' ? 'bg-fuchsia-500' : project.medium === 'art' ? 'bg-cyan-400' : 'bg-amber-500';
  const borderColor = project.medium === 'code' ? 'border-fuchsia-500/50' : project.medium === 'art' ? 'border-cyan-400/50' : 'border-amber-500/50';

  return (
    <div className="absolute bottom-10 left-10 z-30 animate-in slide-in-from-left-4 duration-300">
      <div className={`w-80 bg-zinc-900/90 backdrop-blur-xl border ${borderColor} rounded-xl overflow-hidden shadow-2xl`}>
        <div className="relative h-32">
          <img src={project.imageUrl} className="w-full h-full object-cover opacity-60" alt={project.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-zinc-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${accentColor}`}>{project.medium}</span>
              <span className="text-[8px] text-zinc-500">•</span>
              <span className="text-[8px] text-zinc-500">{project.year}</span>
              <span className="text-[8px] text-zinc-500">•</span>
              <span className="text-[8px] text-zinc-500 uppercase">{project.status}</span>
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-tighter leading-none">{project.title}</h2>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          {/* Tech tags - up to 4 */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide bg-zinc-800/50 text-zinc-400 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {/* Genre tags - all */}
          {project.genre && project.genre.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.genre.map((genre, idx) => (
                <span 
                  key={idx}
                  className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${accentBg}/20 ${accentColor} rounded border border-current/30`}
                >
                  {genre}
                </span>
              ))}
            </div>
          )}
          
          <button 
            onClick={onOpenFull}
            className={`w-full py-2.5 rounded text-[10px] font-black uppercase tracking-widest text-zinc-950 transition-all hover:scale-[1.02] active:scale-95 ${accentBg}`}
          >
            View Full Archive
          </button>
        </div>
      </div>
    </div>
  );
};
