import React, { useState } from 'react';
import HarvardResume from './components/HarvardResume';
import AppleToolbar from './components/AppleToolbar';
import RecruiterModal from './components/RecruiterModal';
import AudioBioPlayer from './components/AudioBioPlayer';
import KeywordFilter from './components/KeywordFilter';
import ProjectModal from './components/ProjectModal';
import { Share2, Check, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' (primary) | 'vi' (technical Vietnamese)
  const [fontFamily, setFontFamily] = useState('times'); // 'times' | 'georgia' | 'inter'
  const [fontSize, setFontSize] = useState('normal'); // 'small' | 'normal' | 'large'
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('strategy');
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.1 } });
  };

  return (
    <div className="min-h-screen bg-[#f4f4f7] text-zinc-900 pb-28 pt-4 px-3 sm:px-6 selection:bg-blue-600 selection:text-white">

      {/* Top Apple Minimalist Bar */}
      <header className="max-w-[960px] mx-auto mb-3 flex items-center justify-between text-xs text-zinc-600 no-print px-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-zinc-900">
            Son Huynh Nhat Quang
          </span>
          <span className="hidden sm:inline text-[11px] px-2 py-0.5 rounded-full bg-zinc-200/80 text-zinc-700 font-mono font-medium">
            Standard Paper Edition
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Language Switcher (EN is primary default, VI with technical phrasing) */}
          <div className="flex items-center p-0.5 bg-zinc-200/90 rounded-lg text-[11px] font-semibold border border-zinc-300/60 shadow-inner">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 rounded-md transition-all ${lang === 'en'
                  ? 'bg-white text-zinc-950 shadow-xs font-bold'
                  : 'text-zinc-600 hover:text-zinc-950'
                }`}
              title="English (Primary)"
            >
              English
            </button>
            <button
              onClick={() => setLang('vi')}
              className={`px-2.5 py-0.5 rounded-md transition-all ${lang === 'vi'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-zinc-600 hover:text-zinc-950'
                }`}
              title="Chuyển sang Tiếng Việt (Ngôn ngữ kỹ thuật)"
            >
              Tiếng Việt
            </button>
          </div>

          <span className="text-zinc-300">•</span>

          {/* Share button */}
          <button
            onClick={handleShare}
            className="hover:text-zinc-950 flex items-center gap-1.5 transition-colors font-semibold px-2.5 py-1 rounded-lg hover:bg-zinc-200/60"
            title="Copy shareable link to clipboard"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-zinc-600" />}
            <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
          </button>
        </div>
      </header>

      {/* Audio Bio Player: Crisp AI Voice introduction */}
      <AudioBioPlayer darkMode={false} />

      {/* Keyword & Recruiter Lens Filter */}
      <KeywordFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        darkMode={false}
      />

      {/* Main Harvard CV Document */}
      <main>
        <HarvardResume
          fontFamily={fontFamily}
          fontSize={fontSize}
          lang={lang}
          activeFilter={activeFilter}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </main>

      {/* Apple Floating Action Dock */}
      <AppleToolbar
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onOpenQR={() => {
          setModalTab('qr');
          setModalOpen(true);
        }}
        onOpenGuide={() => {
          setModalTab('strategy');
          setModalOpen(true);
        }}
      />

      {/* Project Architecture & Engineering Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
