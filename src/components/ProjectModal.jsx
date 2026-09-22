import React, { useState } from 'react';
import { X, ExternalLink, Check, Copy, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const [copiedClone, setCopiedClone] = useState(false);

  const cloneCommand = `git clone ${project.github}.git`;

  const copyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
    confetti({ particleCount: 30, spread: 50 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn no-print">
      <div className="w-full max-w-2xl rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all bg-white text-zinc-900 border-zinc-200">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b border-zinc-200">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl sm:text-2xl font-bold">
                {project.title}
              </h3>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
                {project.period}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Architecture & Engineering Blueprint
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div className="space-y-4 text-xs sm:text-sm">
          <div>
            <h4 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-1">
              Overview
            </h4>
            <p className="text-zinc-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-1.5">
              Core Technical Contributions
            </h4>
            <ul className="space-y-1.5 text-zinc-700">
              {project.contributions.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-bold text-zinc-800 uppercase tracking-wider text-[11px] mb-2">
              Tech Stack Architecture
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Git Clone Box */}
          <div className="p-3.5 rounded-xl bg-zinc-900 text-zinc-100 font-mono text-xs flex items-center justify-between gap-2 border border-zinc-800">
            <span className="truncate">{cloneCommand}</span>
            <button
              onClick={copyClone}
              className="text-xs text-sky-400 hover:text-sky-300 font-sans font-semibold flex items-center gap-1 flex-shrink-0"
            >
              {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedClone ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Open Repository on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-600 hover:bg-zinc-100 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
