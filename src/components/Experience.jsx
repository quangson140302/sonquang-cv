import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ lang }) {
  const isEn = lang === 'en';
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{isEn ? "Career Journey" : "Kinh Nghiệm & Học Vấn"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isEn ? "Work Experience & Education" : "Hành Trình Làm Việc & Đào Tạo"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {isEn 
              ? "Track record of delivering technical solutions and delighting international customers."
              : "Thực chiến giải quyết các sự cố kỹ thuật và tối ưu trải nghiệm khách hàng quốc tế."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12 pb-4">
          
          {/* Work Experience Items */}
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-md shadow-cyan-500/30">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card Content */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 group-hover:border-slate-700 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.role[lang]}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                        {item.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                    <span className="inline-flex items-center gap-1.5 font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullet highlights */}
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {item.highlights[lang].map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

          {/* Education Item */}
          <div className="relative pl-6 md:pl-10 group">
            
            {/* Timeline marker */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-md shadow-blue-500/30">
              <Award className="w-4 h-4" />
            </div>

            {/* Card Content */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 group-hover:border-slate-700 transition-all">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {education.degree[lang]}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{education.school[lang]}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                  <span className="inline-flex items-center gap-1.5 font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                    <Calendar className="w-3 h-3 text-blue-400" />
                    {education.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {education.location}
                  </span>
                </div>
              </div>

              {/* Coursework & Certifications */}
              <div className="space-y-4 pt-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {isEn ? "Key Computer Science Disciplines:" : "Các môn học chuyên ngành trọng tâm:"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course, cIdx) => (
                      <span key={cIdx} className="px-2.5 py-1 rounded-md text-xs bg-slate-900 text-slate-300 border border-slate-800">
                        {course[lang]}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {isEn ? "Continuous Learning & Certifications:" : "Chứng chỉ & Khoá đào tạo chuyên sâu:"}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {education.certifications.map((cert, certIdx) => (
                      <div key={certIdx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <div className="text-sm font-bold text-cyan-300">{cert.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{cert.issuer}</div>
                        <div className="text-xs text-slate-400 mt-1 leading-relaxed">{cert.desc[lang]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
