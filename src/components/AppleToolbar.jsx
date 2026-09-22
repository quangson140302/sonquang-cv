import React, { useState, useRef, useEffect } from 'react';
import { 
  Printer, 
  Share2, 
  Mail, 
  Type, 
  QrCode, 
  Check, 
  Sparkles,
  ChevronUp,
  Minus,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AppleToolbar({ 
  fontFamily, 
  setFontFamily, 
  fontSize, 
  setFontSize, 
  onOpenQR, 
  onOpenGuide 
}) {
  const [copiedType, setCopiedType] = useState(null);
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowTypeMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.9 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const fontOptions = [
    { id: 'times', label: 'Times New Roman (Harvard Classic)', sample: 'Serif' },
    { id: 'georgia', label: 'Georgia (Editorial Serif)', sample: 'Serif' },
    { id: 'inter', label: 'SF Pro / Inter (Apple Modern)', sample: 'Sans' },
  ];

  const sizeOptions = [
    { id: 'small', label: 'Small', scale: '90%' },
    { id: 'normal', label: 'Standard', scale: '100%' },
    { id: 'large', label: 'Large', scale: '110%' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 no-print" ref={menuRef}>
      
      {/* Popover Typography Menu (Triggered by T) */}
      {showTypeMenu && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-72 p-4 bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl shadow-2xl animate-fadeIn space-y-4 text-xs">
          
          {/* Font Size Adjuster */}
          <div>
            <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Font Size (Cỡ chữ)</span>
              <span className="font-mono text-blue-600 font-semibold">{fontSize.toUpperCase()}</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-zinc-100 rounded-xl">
              {sizeOptions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setFontSize(s.id)}
                  className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    fontSize === s.id
                      ? 'bg-white text-zinc-900 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Family Selector */}
          <div>
            <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
              Font Family (Kiểu chữ)
            </div>
            <div className="space-y-1">
              {fontOptions.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    setFontFamily(f.id);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${
                    fontFamily === f.id
                      ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                      : 'hover:bg-zinc-100 text-zinc-700 font-medium'
                  }`}
                >
                  <span>{f.label}</span>
                  {fontFamily === f.id && <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Main Apple Floating Dock */}
      <div className="flex items-center gap-1 sm:gap-2 px-3.5 py-2 rounded-full apple-glass transition-all duration-300">
        
        {/* Print / Save PDF */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all hover:scale-105 active:scale-95"
          title="Print or Save as Clean PDF"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Print / PDF</span>
        </button>

        <div className="h-4 w-[1px] bg-zinc-300 mx-0.5"></div>

        {/* Font & Size Controller (Letter T) */}
        <button
          onClick={() => setShowTypeMenu(!showTypeMenu)}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
            showTypeMenu
              ? 'bg-zinc-900 text-white shadow-sm'
              : 'hover:bg-zinc-200/70 text-zinc-800 bg-zinc-100/90'
          }`}
          title="Adjust Font Family & Font Size (Đổi kiểu chữ & cỡ chữ)"
        >
          <Type className="w-3.5 h-3.5 text-blue-600" />
          <span className="hidden sm:inline font-bold">Font & Size</span>
          <ChevronUp className={`w-3 h-3 transition-transform ${showTypeMenu ? 'rotate-180' : ''}`} />
        </button>

        {/* Copy Share Link */}
        <button
          onClick={() => handleCopy(window.location.href, 'link')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-full hover:bg-zinc-100 text-zinc-700 transition-all"
          title="Copy Live Link"
        >
          {copiedType === 'link' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          <span className="hidden md:inline">{copiedType === 'link' ? 'Copied' : 'Share'}</span>
        </button>

        {/* Copy Email */}
        <button
          onClick={() => handleCopy('shnquang02@gmail.com', 'email')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-full hover:bg-zinc-100 text-zinc-700 transition-all"
          title="Copy Email"
        >
          {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Mail className="w-3.5 h-3.5" />}
          <span className="hidden md:inline">{copiedType === 'email' ? 'Copied' : 'Email'}</span>
        </button>

      </div>
    </div>
  );
}
