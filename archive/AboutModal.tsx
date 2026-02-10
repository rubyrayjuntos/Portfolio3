import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <h2 className="text-2xl font-black tracking-tighter text-white">About Ray Swan</h2>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Close about modal"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
          <div className="prose prose-invert prose-zinc max-w-none">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Mystical Technologist</h3>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Ray Swan bridges the worlds of technology and spirituality, creating systems that reveal 
                  deeper patterns and connections. With expertise spanning full-stack development, 
                  creative writing, and digital art, Ray approaches each project as an opportunity 
                  to explore the sacred within the technical.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  This knowledge graph portfolio represents more than just a collection of work—it's 
                  an invitation to "get down into the gravity of it all," exploring the interconnected 
                  nature of creative expression across different mediums.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Cross-Domain Expertise</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-fuchsia-500"></div>
                    <div>
                      <div className="text-white font-semibold">Code Systems</div>
                      <div className="text-zinc-400 text-sm">Full-stack development, AI integration, cloud architecture</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <div>
                      <div className="text-white font-semibold">Art Visions</div>
                      <div className="text-zinc-400 text-sm">Digital art, 3D visualization, interactive experiences</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div>
                      <div className="text-white font-semibold">Writing Words</div>
                      <div className="text-zinc-400 text-sm">Technical documentation, creative fiction, philosophical exploration</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8">
              <h3 className="text-lg font-bold text-white mb-4">Philosophy & Approach</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Pattern Recognition</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Every project reveals universal patterns that connect across domains. 
                    The same principles that govern elegant code also create compelling narratives 
                    and beautiful visual compositions.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Sacred Technology</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Technology becomes a spiritual practice when approached with intention and reverence. 
                    Each system built is an opportunity to create something that serves and elevates.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Archetypal Storytelling</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Stories carry the deepest truths. Whether in code comments, user interfaces, 
                    or creative fiction, every piece of work tells a story that resonates with 
                    universal human experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Bridge Building</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    The most meaningful work happens at the intersections—between technical and creative, 
                    logical and intuitive, individual and collective. Building bridges creates new possibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-8">
              <h3 className="text-lg font-bold text-white mb-4">Current Focus</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Currently exploring the intersection of AI and creative expression, building systems 
                that amplify human creativity rather than replace it. Recent work includes developing 
                immersive portfolio experiences, AI-assisted creative tools, and platforms that help 
                people discover deeper patterns in their own creative work.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Always interested in collaborations that push the boundaries of what's possible 
                when technology serves the highest human aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};