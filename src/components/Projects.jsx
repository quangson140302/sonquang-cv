import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Smartphone, 
  Cpu, 
  CheckCircle,
  Tag
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ lang }) {
  const isEn = lang === 'en';
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: isEn ? 'All Projects' : 'Tất cả dự án', icon: Layers },
    { id: 'fullstack', label: isEn ? 'Full-Stack MERN' : 'Web Full-Stack', icon: Cpu },
    { id: 'ai-mobile', label: isEn ? 'AI Mobile App' : 'Mobile & Docker', icon: Smartphone },
    { id: 'ai-nlp', label: isEn ? 'AI & Chatbot NLP' : 'Chatbot AI & NLP', icon: Sparkles },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{isEn ? "Featured Codebases" : "Dự Án Tiêu Biểu"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isEn ? "Real-World Engineering Projects" : "Các Dự Án Đã Phát Triển"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {isEn 
              ? "Practical implementations spanning full-stack web platforms, mobile AI classification, and NLP chatbots."
              : "Các sản phẩm thực tế từ nền tảng thương mại điện tử MERN, ứng dụng di động nhận diện ảnh, đến chatbot AI xử lý ngôn ngữ tự nhiên."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterOptions.map((opt) => {
            const Icon = opt.icon;
            const isActive = activeFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl flex flex-col justify-between overflow-hidden border border-slate-800/90 hover:border-slate-700 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Card Header & Content */}
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 font-medium">
                    {project.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800/40 text-[11px] font-semibold uppercase">
                    {project.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Project Title */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                    {project.description[lang]}
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="pt-2 border-t border-slate-800/80">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {isEn ? "Key Engineering Contributions:" : "Đóng góp kỹ thuật cốt lõi:"}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.highlights[lang].slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer: Action Links */}
              <div className="p-5 bg-slate-950/70 border-t border-slate-800/90 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-cyan-400 transition-colors py-1 px-2 rounded-lg hover:bg-slate-800/60"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>{isEn ? "View Source Code" : "Xem Mã Nguồn GitHub"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Verified
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-slate-900 border border-cyan-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {isEn ? "Want to inspect more code repositories?" : "Xem thêm kho mã nguồn khác?"}
              </h4>
              <p className="text-xs text-slate-300">
                {isEn 
                  ? "Explore all public repositories, commits and contributions on GitHub."
                  : "Khám phá các repositories, commit và đóng góp mã nguồn tại trang GitHub cá nhân."}
              </p>
            </div>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-700/60 transition-all hover:scale-105"
          >
            <span>github.com/quangson140302</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
