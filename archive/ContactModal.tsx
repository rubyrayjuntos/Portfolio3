import React, { useState } from 'react';
import { XMarkIcon, EnvelopeIcon, LinkIcon, DocumentIcon } from '@heroicons/react/24/outline';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = async (text: string, item: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      label: 'Email',
      value: 'ray@rayswanfoundation.org',
      icon: EnvelopeIcon,
      action: () => window.open('mailto:ray@rayswanfoundation.org', '_blank'),
      copyValue: 'ray@rayswanfoundation.org'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/rayswantech',
      icon: LinkIcon,
      action: () => window.open('https://linkedin.com/in/rayswantech', '_blank'),
      copyValue: 'https://linkedin.com/in/rayswantech'
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/rayswantech',
      icon: LinkIcon,
      action: () => window.open('https://github.com/rayswantech', '_blank'),
      copyValue: 'https://github.com/rayswantech'
    },
    {
      id: 'portfolio',
      label: 'Portfolio Site',
      value: 'rayswanfoundation.org',
      icon: LinkIcon,
      action: () => window.open('https://rayswanfoundation.org', '_blank'),
      copyValue: 'https://rayswanfoundation.org'
    }
  ];

  const collaborationAreas = [
    {
      title: 'AI & Creative Tools',
      description: 'Building systems that amplify human creativity',
      tags: ['Machine Learning', 'Creative AI', 'Human-Computer Interaction']
    },
    {
      title: 'Immersive Experiences',
      description: 'Interactive portfolios and storytelling platforms',
      tags: ['3D Visualization', 'WebGL', 'Interactive Design']
    },
    {
      title: 'Knowledge Systems',
      description: 'Platforms for discovering patterns and connections',
      tags: ['Graph Databases', 'Data Visualization', 'Information Architecture']
    },
    {
      title: 'Spiritual Technology',
      description: 'Technology that serves higher human purposes',
      tags: ['Ethical AI', 'Mindful Design', 'Purpose-Driven Development']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <h2 className="text-2xl font-black tracking-tighter text-white">Connect & Collaborate</h2>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Close contact modal"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div key={method.id} className="group">
                      <div className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-zinc-400" />
                          <div>
                            <div className="text-white font-semibold text-sm">{method.label}</div>
                            <div className="text-zinc-400 text-sm">{method.value}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleCopy(method.copyValue, method.id)}
                            className="px-3 py-1.5 text-xs font-bold bg-zinc-800 text-zinc-300 rounded hover:bg-zinc-700 transition-colors"
                          >
                            {copiedItem === method.id ? 'COPIED!' : 'COPY'}
                          </button>
                          <button
                            onClick={method.action}
                            className="px-3 py-1.5 text-xs font-bold bg-zinc-100 text-zinc-950 rounded hover:bg-white transition-colors"
                          >
                            OPEN
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <DocumentIcon className="w-4 h-4" />
                  Resume & Portfolio
                </h4>
                <p className="text-zinc-400 text-sm mb-3">
                  Comprehensive portfolio and technical resume available upon request.
                </p>
                <button
                  onClick={() => window.open('mailto:ray@rayswanfoundation.org?subject=Portfolio%20Request', '_blank')}
                  className="text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  REQUEST PORTFOLIO →
                </button>
              </div>
            </div>

            {/* Collaboration Areas */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Collaboration Interests</h3>
              <div className="space-y-4">
                {collaborationAreas.map((area, index) => (
                  <div key={index} className="p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">{area.title}</h4>
                    <p className="text-zinc-400 text-sm mb-3">{area.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-bold bg-zinc-800 text-zinc-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-fuchsia-500/10 to-cyan-400/10 border border-fuchsia-500/20 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Open to Opportunities</h4>
                <p className="text-zinc-300 text-sm mb-3">
                  Always interested in projects that push creative and technical boundaries. 
                  Whether it's a startup, established company, or creative collective, 
                  let's explore what we can build together.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.open('mailto:ray@rayswanfoundation.org?subject=Collaboration%20Opportunity', '_blank')}
                    className="px-4 py-2 text-xs font-bold bg-fuchsia-500 text-white rounded hover:bg-fuchsia-600 transition-colors"
                  >
                    START CONVERSATION
                  </button>
                  <button
                    onClick={() => window.open('https://calendly.com/rayswantech', '_blank')}
                    className="px-4 py-2 text-xs font-bold bg-zinc-800 text-zinc-300 rounded hover:bg-zinc-700 transition-colors"
                  >
                    SCHEDULE CALL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};