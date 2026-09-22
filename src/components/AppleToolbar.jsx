import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Printer, 
  Share2, 
  Mail, 
  Check, 
  Type, 
  ChevronUp, 
  Sparkles,
  X, 
  CheckCircle2, 
  XCircle, 
  Info, 
  Layers, 
  Sliders 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AppleToolbar({ 
  fontFamily, 
  setFontFamily, 
  fontSize, 
  setFontSize, 
  onOpenQR, 
  onOpenGuide,
  onOpenWelcome 
}) {
  const [copiedType, setCopiedType] = useState(null);
  const [showTypeMenu, setShowTypeMenu] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const menuRef = useRef(null);

  // Close menus when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowTypeMenu(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowTypeMenu(false);
        setShowPrintModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
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
    setShowPrintModal(true);
  };

  const executePrint = () => {
    setShowPrintModal(false);
    const prevTitle = document.title;
    document.title = 'CV_Son_Huynh_Nhat_Quang';
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.title = prevTitle;
      }, 1000);
    }, 200);
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
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 no-print max-w-[calc(100vw-20px)]" ref={menuRef}>
      
      {/* Popover Typography Menu (Triggered by T) */}
      {showTypeMenu && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[calc(100vw-28px)] max-w-xs sm:w-72 p-4 bg-white/95 backdrop-blur-xl border border-zinc-200/90 rounded-2xl shadow-2xl animate-fadeIn space-y-4 text-xs">
          
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
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full apple-glass transition-all duration-300 shadow-xl">
        
        {/* Welcome Gate / Entrance trigger */}
        {onOpenWelcome && (
          <button
            onClick={onOpenWelcome}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-full bg-zinc-100/90 hover:bg-zinc-200/90 text-zinc-800 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            title="Mở lại màn hình chào mừng (Welcome Gate)"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden md:inline">Welcome</span>
          </button>
        )}

        {/* Print / Save PDF */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
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

      {/* Apple-style Print / Export PDF Guidance Modal Portaled to document.body */}
      {showPrintModal && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn no-print"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPrintModal(false);
          }}
        >
          <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-zinc-200 text-left space-y-4 relative">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950">Xuất CV PDF Chuẩn Chuyên Nghiệp</h3>
                  <p className="text-xs text-zinc-500">Mẹo để file PDF 100% sạch sẽ, không dính localhost</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPrintModal(false)}
                className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
                title="Đóng"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Instruction Checklist */}
            <div className="space-y-3 pt-1">
              
              {/* Tip 1: Uncheck Headers and footers */}
              <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-200 flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-rose-950 space-y-0.5">
                  <div className="font-bold">1. Bỏ chọn: "Headers and footers" (Tiêu đề và chân trang)</div>
                  <div className="text-rose-800/90 text-[11.5px] leading-relaxed">
                    Trong hộp thoại in của trình duyệt (mục <b>Cài đặt khác / More settings</b>), hãy <b>bỏ tick</b> ô này để ẩn hoàn toàn ngày giờ, tiêu đề và link <code>localhost</code>.
                  </div>
                </div>
              </div>

              {/* Tip 2: Check Background graphics */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-950 space-y-0.5">
                  <div className="font-bold">2. Bật chọn: "Background graphics" (Đồ họa nền)</div>
                  <div className="text-emerald-800/90 text-[11.5px] leading-relaxed">
                    Hãy <b>tick chọn (✓)</b> ô này để toàn bộ màu nền badge mốc năm (2024–2025, 2025), tag Architecture và thanh highlight giữ màu sắc rực rỡ y như trên website.
                  </div>
                </div>
              </div>

              {/* Tip 3: Intelligent page break note */}
              <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950 space-y-0.5">
                  <div className="font-bold">3. Tự động chia 2 trang thông minh (2-Page Harvard Format)</div>
                  <div className="text-blue-800/90 text-[11.5px] leading-relaxed">
                    • <b>Trang 1:</b> Tóm tắt năng lực, Kỹ năng cốt lõi & Toàn bộ Kinh nghiệm làm việc.<br/>
                    • <b>Trang 2:</b> Kiến trúc các Dự án tiêu biểu & Học vấn Đại học Cần Thơ.
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-zinc-100">
              <button
                onClick={() => setShowPrintModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                Hủy
              </button>
              <button
                onClick={executePrint}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Mở Hộp Thoại In Ngay</span>
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
