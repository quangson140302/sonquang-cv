import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';

export default function AudioBioPlayer({ darkMode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  const bioText = "Hello! My name is Son Huynh Nhat Quang. I am a Computer Science graduate from Can Tho University with hands-on expertise in React, Node.js, and technical customer support at PageFly and BSS Group. Welcome to my interactive Harvard portfolio.";

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (!speechSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(bioText);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.lang = 'en-US';

      // Pick a good English voice if available
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  if (!speechSupported) return null;

  return (
    <div className="no-print my-3 flex items-center justify-center">
      <button
        onClick={handleTogglePlay}
        className={`group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 shadow-sm ${
          isPlaying
            ? 'bg-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-400/50'
            : darkMode
              ? 'bg-zinc-800/90 text-zinc-200 hover:bg-zinc-700/90 border border-zinc-700'
              : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
        }`}
        title={isPlaying ? "Pause Audio Bio" : "Listen to Son Huynh Nhat Quang's Introduction (AI Voice)"}
      >
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
          {isPlaying ? <Pause className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 ml-0.5" />}
        </div>
        
        <span>{isPlaying ? 'Listening to Bio...' : 'Listen to Audio Bio'}</span>

        {/* Animated Equalizer Wave when playing */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3 ml-1">
            <span className="w-0.5 bg-white rounded-full animate-pulse h-full"></span>
            <span className="w-0.5 bg-white rounded-full animate-bounce h-2/3"></span>
            <span className="w-0.5 bg-white rounded-full animate-pulse h-4/5"></span>
            <span className="w-0.5 bg-white rounded-full animate-bounce h-1/2"></span>
          </div>
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors" />
        )}
      </button>
    </div>
  );
}
