import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Code2, 
  Headphones, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ lang, onOpenGuide }) {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {lang === 'en' 
                  ? 'Ready for Web Developer / Technical Support Roles' 
                  : 'Sẵn sàng nhận vị trí Lập trình viên Web & Tech Support'}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                {lang === 'en' ? "Hello, I'm" : "Xin chào, tôi là"}
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personal.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {personal.title[lang]}
              </h2>
            </div>

            {/* Brief Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personal.bio[lang]}
            </p>

            {/* Quick Badges / Core strengths */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-blue-950/50 text-blue-300 border border-blue-800/40">
                <Code2 className="w-3.5 h-3.5" />
                ReactJS & Node.js Fullstack
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-800/40">
                <Headphones className="w-3.5 h-3.5" />
                Shopify / PageFly Technical Support
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-purple-950/50 text-purple-300 border border-purple-800/40">
                <Sparkles className="w-3.5 h-3.5" />
                AI NLP & Computer Vision
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>{lang === 'en' ? 'Explore Projects' : 'Xem các dự án'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <span>{lang === 'en' ? 'Work Experience' : 'Kinh nghiệm làm việc'}</span>
              </a>

              <button
                onClick={onOpenGuide}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 transition-all"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{lang === 'en' ? 'For Recruiters' : 'Dành cho Nhà tuyển dụng'}</span>
              </button>
            </div>

            {/* Contact details & Social icons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-slate-400">
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>quangson140302</span>
              </a>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>quang-son</span>
              </a>
              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Can Tho, Vietnam</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Card Frame */}
              <div className="glass-panel rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden border border-slate-700/80 bg-slate-900/80 backdrop-blur-xl">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                    <span className="ml-2 font-mono text-slate-400">quang-profile.tsx</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-mono">v2026.1</span>
                </div>

                {/* Avatar / Bio Feature */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/30">
                    SQ
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                      {personal.name}
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    </h3>
                    <p className="text-xs text-slate-400">Can Tho University (2020 - 2024)</p>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">B.S. in Computer Science</p>
                  </div>
                </div>

                {/* Core Strengths Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {personal.stats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                      <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-1 font-medium">
                        {stat.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live snippet box */}
                <div className="p-3.5 rounded-xl bg-[#07090e] border border-slate-800 font-mono text-xs text-slate-300 space-y-1 mb-5">
                  <p className="text-slate-500">// Tech summary</p>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p className="pl-3"><span className="text-cyan-400">frontend:</span> [<span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'Tailwind'</span>],</p>
                  <p className="pl-3"><span className="text-cyan-400">backend:</span> [<span className="text-emerald-400">'Node'</span>, <span className="text-emerald-400">'Express'</span>, <span className="text-emerald-400">'MongoDB'</span>],</p>
                  <p className="pl-3"><span className="text-cyan-400">support:</span> [<span className="text-emerald-400">'Shopify Liquid'</span>, <span className="text-emerald-400">'CSAT 98%'</span>]</p>
                  <p>&#125;;</p>
                </div>

                {/* Quick Contact Links */}
                <div className="space-y-2">
                  <a
                    href="mailto:shnquang02@gmail.com"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      shnquang02@gmail.com
                    </span>
                    <ExternalLink className="w-3 h-3 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="tel:0343839979"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      0343 839 979
                    </span>
                    <ExternalLink className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
