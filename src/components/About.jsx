import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Headphones, 
  Languages, 
  Clock, 
  Lightbulb, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ lang }) {
  const isEn = lang === 'en';

  const pillars = [
    {
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      title: isEn ? "Full-Stack Web Engineering" : "Lập Trình Web Full-Stack",
      desc: isEn 
        ? "Solid hands-on foundation in ReactJS, Node.js, Express, MongoDB, and TailwindCSS with clean MVC architectures." 
        : "Nền tảng vững chắc về ReactJS, Node.js, Express, MongoDB và TailwindCSS theo mô hình thiết kế chuẩn MVC."
    },
    {
      icon: Headphones,
      color: "from-emerald-500 to-teal-500",
      title: isEn ? "E-Commerce & Shopify Troubleshooting" : "Khắc Phục Sự Cố Shopify & Thương Mại Điện Tử",
      desc: isEn 
        ? "Diagnosed and resolved Liquid code conflicts, custom CSS, JavaScript errors, and third-party app issues for global Shopify merchants at PageFly." 
        : "Trực tiếp xử lý mã Liquid, CSS tùy biến, JavaScript và xung đột ứng dụng cho các chủ cửa hàng Shopify toàn cầu tại PageFly."
    },
    {
      icon: Languages,
      color: "from-purple-500 to-indigo-500",
      title: isEn ? "Fluent Global Communication" : "Giao Tiếp Tiếng Anh Quốc Tế",
      desc: isEn 
        ? "Daily English communication with international clients across multiple time zones via live chat and technical ticketing systems." 
        : "Giao tiếp tiếng Anh thành thạo hàng ngày với khách hàng đa quốc gia qua live chat, email và hệ thống ticket kỹ thuật."
    },
    {
      icon: Clock,
      color: "from-amber-500 to-orange-500",
      title: isEn ? "Adaptability & Night Shift Ready" : "Khả Năng Thích Nghi & Sẵn Sàng Ca Đêm",
      desc: isEn 
        ? "Comfortable with flexible shifts and high-stress environments. Rapid learner capable of quickly adopting new frameworks and tools." 
        : "Dễ dàng thích nghi với môi trường áp lực cao, sẵn sàng làm việc theo ca linh hoạt và ca đêm để hỗ trợ múi giờ quốc tế."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{isEn ? "About Me" : "Về Bản Thân"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isEn ? "The Engineering Mindset with a User-First Heart" : "Tư Duy Kỹ Thuật Gắn Liền Với Trải Nghiệm Người Dùng"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {isEn 
              ? "Bridging deep software development fundamentals with empathetic customer-facing problem solving."
              : "Kết nối nền tảng khoa học máy tính với khả năng thấu hiểu và giải quyết vấn đề thực tế cho khách hàng."}
          </p>
        </div>

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-slate-600 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Narrative Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                {isEn ? "Academic Background & Career Evolution" : "Hành Trình Học Vấn & Định Hướng Phát Triển"}
              </h3>
              
              <p>
                {isEn ? (
                  <>
                    I graduated with a Bachelor's degree in <strong>Computer Science from Can Tho University (2020 - 2024)</strong>. Throughout my academic journey, I immersed myself in core computing principles: Data Structures & Algorithms, Database Management, and Web Development.
                  </>
                ) : (
                  <>
                    Tôi tốt nghiệp Cử nhân chuyên ngành <strong>Khoa học Máy tính tại Đại học Cần Thơ (2020 - 2024)</strong>. Trong suốt 4 năm đại học, tôi đã xây dựng tư duy lập trình vững chắc qua các môn Cấu trúc dữ liệu & Giải thuật, Quản trị cơ sở dữ liệu, và Phát triển ứng dụng Web.
                  </>
                )}
              </p>

              <p>
                {isEn ? (
                  <>
                    What sets me apart from many pure developers is my direct immersion in <strong>Technical Support at PageFly (Shopify Page Builder)</strong> and <strong>Customer Support at BSS Group</strong>. I have solved real-time theme conflicts, inspected Liquid code under pressure, and delivered empathetic solutions to international merchants across North America, Europe, and Asia.
                  </>
                ) : (
                  <>
                    Điểm tạo nên sự khác biệt lớn ở tôi là kinh nghiệm làm việc thực tế tại <strong>PageFly (Shopify Page Builder)</strong> với vai trò Technical Support Specialist và <strong>BSS Group</strong> với vai trò Customer Support Specialist. Tôi đã trực tiếp xử lý các ca lỗi xung đột giao diện theme, mã nguồn Liquid, JavaScript và tư vấn giải pháp trực tiếp cho khách hàng quốc tế.
                  </>
                )}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{isEn ? "Degree Verified: Can Tho University (CS)" : "Bằng Cử nhân Khoa học Máy tính (ĐH Cần Thơ)"}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>{isEn ? "English Daily Communication" : "Giao tiếp tiếng Anh hàng ngày"}</span>
                </div>
              </div>
            </div>

            {/* Right Mini Summary Box */}
            <div className="lg:col-span-4 bg-slate-950/70 p-6 rounded-2xl border border-slate-800/80 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                {isEn ? "Core Academic Coursework" : "Môn học nền tảng tiêu biểu"}
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {portfolioData.education.courses.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{c[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
