import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, FileText, Send, Sparkles } from 'lucide-react';

export default function Navbar({ lang, setLang, onOpenGuide }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: lang === 'en' ? "About" : "Giới thiệu" },
    { href: "#experience", label: lang === 'en' ? "Experience" : "Kinh nghiệm" },
    { href: "#projects", label: lang === 'en' ? "Projects" : "Dự án" },
    { href: "#skills", label: lang === 'en' ? "Skills" : "Kỹ năng" },
    { href: "#contact", label: lang === 'en' ? "Contact" : "Liên hệ" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0d14]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              SQ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Son Huynh Nhat Quang
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {lang === 'en' ? 'Open for Opportunities' : 'Sẵn sàng nhận việc'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Guide for Recruiters */}
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 rounded-lg transition-all"
              title="Xem chiến lược tối ưu tiếp cận nhà tuyển dụng"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'en' ? 'Recruiter Hub' : 'Cổng Nhà tuyển dụng'}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-all"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold uppercase tracking-wider">{lang === 'en' ? 'VI' : 'EN'}</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Hire Me' : 'Liên hệ ngay'}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
              className="p-2 text-xs font-bold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
            >
              {lang === 'en' ? 'VI' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c101a]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-800/60 rounded-lg"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              {lang === 'en' ? 'Recruiter Hub & Strategy' : 'Cổng Tiếp Cận Tuyển Dụng'}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg"
            >
              <Send className="w-4 h-4" />
              {lang === 'en' ? 'Get In Touch' : 'Liên hệ với tôi'}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
