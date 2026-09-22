import React from 'react';
import { 
  Wrench, 
  Layout, 
  Server, 
  Database, 
  CheckCircle2, 
  Globe2, 
  Award, 
  Sparkles,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills({ lang }) {
  const isEn = lang === 'en';
  const { skills } = portfolioData;

  const skillGroups = [
    {
      title: isEn ? "Frontend Development" : "Lập Trình Frontend",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      skills: skills.frontend
    },
    {
      title: isEn ? "Backend & Architecture" : "Backend & Kiến Trúc",
      icon: Server,
      color: "from-indigo-500 to-purple-500",
      skills: skills.backend
    },
    {
      title: isEn ? "Databases & DevOps Tools" : "Cơ Sở Dữ Liệu & Công Cụ",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      skills: skills.databaseAndTools
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <Wrench className="w-3.5 h-3.5" />
            <span>{isEn ? "Technical & Interpersonal Skills" : "Năng Lực Chuyên Môn & Kỹ Năng Mềm"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isEn ? "Skills & Technology Stack" : "Kỹ Năng & Công Nghệ Thực Chiến"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {isEn 
              ? "A well-rounded toolkit spanning modern web engineering, CMS customization, and international user communication."
              : "Bộ công cụ toàn diện từ kỹ thuật lập trình web hiện đại, tùy biến CMS Shopify đến kỹ năng giao tiếp quốc tế."}
          </p>
        </div>

        {/* 3 Technical Skill Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillGroups.map((group, gIdx) => {
            const Icon = group.icon;
            return (
              <div 
                key={gIdx}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${group.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {group.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 font-mono">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Bottom Cards: Soft Skills & Languages/Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Soft Skills */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isEn ? "Soft Skills & Customer Delight Mindset" : "Kỹ Năng Mềm & Tư Duy Khách Hàng"}
                </h3>
                <p className="text-xs text-slate-400">
                  {isEn ? "Honed through direct global customer support" : "Rèn luyện qua quá trình hỗ trợ thực tế người dùng quốc tế"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {skills.softSkills[lang].map((soft, sIdx) => (
                <div key={sIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-snug">{soft}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Working Shifts */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-md">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {isEn ? "Languages & Availability" : "Ngoại Ngữ & Độ Sẵn Sàng"}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isEn ? "Global business readiness" : "Khả năng làm việc môi trường quốc tế"}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {skills.languages.map((l, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="text-sm font-bold text-white flex items-center justify-between">
                      <span>{l.name[lang]}</span>
                      <span className="text-xs text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-800/50">
                        {idx === 0 ? "Daily Professional" : "Native"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{l.desc[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shift Readiness Pill */}
            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>
                {isEn 
                  ? "Comfortable with flexible schedules, remote setups & night shifts."
                  : "Sẵn sàng làm việc theo ca linh hoạt, remote hoặc ca đêm đáp ứng múi giờ quốc tế."}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
