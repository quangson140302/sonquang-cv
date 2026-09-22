import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, FileText, Code2, ShoppingBag, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WelcomeGate({ onEnter, lang, setLang }) {
  const [isExiting, setIsExiting] = useState(false);
  const [greeting, setGreeting] = useState({ en: 'Welcome', vi: 'Xin chào' });

  // Determine dynamic time-of-day greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting({
        en: 'Good morning! Welcome to my digital space',
        vi: 'Chào buổi sáng! Chào mừng bạn đến với không gian số của tôi'
      });
    } else if (hour >= 12 && hour < 18) {
      setGreeting({
        en: 'Good afternoon! Excited to have you here',
        vi: 'Chào buổi chiều! Rất vui được đón tiếp bạn'
      });
    } else {
      setGreeting({
        en: 'Good evening! Hope you enjoy exploring my work',
        vi: 'Chào buổi tối! Chúc bạn có trải nghiệm tuyệt vời khi khám phá'
      });
    }
  }, []);

  // Handle keyboard shortcut [Enter] or [Space]
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleStart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStart = (targetMode = 'portfolio') => {
    if (isExiting) return;

    // Small celebratory confetti burst
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#10b981', '#6366f1', '#38bdf8']
    });

    setIsExiting(true);
    setTimeout(() => {
      onEnter(targetMode);
    }, 450);
  };

  const isVi = lang === 'vi';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all duration-500 no-print ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 30%, rgba(30, 58, 138, 0.45), rgba(9, 9, 11, 0.95) 70%)'
      }}
    >
      {/* Background Animated Ambient Lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      {/* Main Glassmorphic Welcome Card */}
      <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-zinc-950/85 border border-zinc-700/60 shadow-2xl backdrop-blur-2xl p-6 sm:p-9 text-white overflow-hidden">
        
        {/* Subtle top light bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70"></div>

        {/* Header: Live Status + Language Selector */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/70 text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold">Available for Hire</span>
            <span className="text-zinc-500 hidden xs:inline">• Vietnam / Global</span>
          </div>

          {/* Quick Language Toggle */}
          <div className="flex items-center bg-zinc-900/90 p-1 rounded-xl border border-zinc-800 text-xs">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 rounded-lg font-medium transition-all ${
                !isVi ? 'bg-blue-600 text-white shadow-xs font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('vi')}
              className={`px-2.5 py-0.5 rounded-lg font-medium transition-all ${
                isVi ? 'bg-blue-600 text-white shadow-xs font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              VI
            </button>
          </div>
        </div>

        {/* Center Monogram & Greeting */}
        <div className="text-center mb-6 sm:mb-8">
          {/* Stylized Monogram */}
          <div className="inline-flex items-center justify-center mb-4 relative group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-[2px] shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-white via-zinc-100 to-cyan-300 bg-clip-text text-transparent font-mono">
                  SQ
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full border-2 border-zinc-950 shadow-md">
              <Sparkles className="w-3 h-3 text-cyan-300" />
            </div>
          </div>

          {/* Dynamic Greeting */}
          <p className="text-xs sm:text-sm font-medium text-cyan-400 tracking-wide uppercase mb-1.5 flex items-center justify-center gap-1.5">
            <span>{isVi ? greeting.vi : greeting.en}</span>
          </p>

          {/* User Name */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            {isVi ? 'Sơn Huỳnh Nhật Quang' : 'Son Huynh Nhat Quang'}
          </h1>

          {/* Role & Core Title */}
          <p className="text-sm sm:text-base text-zinc-300 font-medium max-w-md mx-auto">
            {isVi
              ? 'Lập trình viên Web & Chuyên viên Hỗ trợ Kỹ thuật Quốc tế'
              : 'Web Developer & Technical Support Specialist'}
          </p>
        </div>

        {/* 3 Instant Competency Snapshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-7 text-left">
          <div className="p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-blue-500/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-zinc-200">Fullstack Web</div>
            <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">React, Node.js, Express, MongoDB</div>
          </div>

          <div className="p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-zinc-200">Shopify & Liquid</div>
            <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">PageFly & BSS Apps, Theme conflicts</div>
          </div>

          <div className="p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-cyan-500/40 transition-colors">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
              <Globe className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-zinc-200">Global Support</div>
            <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">Fluent English daily, high CSAT ratings</div>
          </div>
        </div>

        {/* Action Entrance Area */}
        <div className="space-y-3">
          {/* Primary Big Glowing Entrance Button */}
          <button
            onClick={() => handleStart('portfolio')}
            className="w-full relative group overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-[1.5px] focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.99]"
          >
            <div className="w-full py-3.5 px-6 rounded-[14px] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-colors group-hover:bg-opacity-90">
              <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>{isVi ? 'Khám Phá Portfolio & CV' : 'Explore Portfolio & CV'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </button>

          {/* Secondary Quick Jump */}
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1 pt-1">
            <span className="hidden sm:inline font-mono text-[11px] text-zinc-500">
              {isVi ? 'Nhấn phím [Enter ↵] để vào' : 'Press [Enter ↵] to continue'}
            </span>

            <button
              onClick={() => handleStart('cv')}
              className="text-zinc-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 ml-auto font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isVi ? 'Xem trực tiếp bản in Harvard CV →' : 'Jump to Harvard Resume View →'}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
