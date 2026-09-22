import { Mail, Phone, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ lang, onOpenGuide }) {
  const isEn = lang === 'en';
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#05070c] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md">
              SQ
            </div>
            <div>
              <span className="font-bold text-base text-white">
                {personal.name}
              </span>
              <p className="text-xs text-slate-400">
                {personal.title[lang]}
              </p>
            </div>
          </div>

          {/* Socials & Recruiter Hub */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 rounded-lg transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isEn ? "Recruiter Strategy Hub" : "Chiến Lược Tuyển Dụng"}</span>
            </button>

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-cyan-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-900 text-blue-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. {isEn ? "All rights reserved." : "Đã đăng ký bản quyền."}
          </p>
          <p className="flex items-center gap-1">
            <span>{isEn ? "Crafted with React, Tailwind CSS & Vite" : "Thiết kế với React, Tailwind CSS & Vite"}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
