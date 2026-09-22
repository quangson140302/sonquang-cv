import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ lang }) {
  const isEn = lang === 'en';
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Web Developer / Front-end',
    message: ''
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
    // Confetti burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.85 }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Job Opportunity] ${formData.role} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Hi Quang,\n\nMy name is ${formData.name} from ${formData.company || 'our company'}.\nWe came across your portfolio website and would love to discuss an opportunity for: ${formData.role}.\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.8 }
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isEn ? "Let's Connect" : "Kết Nối Ngay"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isEn ? "Get In Touch Directly" : "Liên Hệ Trực Tiếp Với Tôi"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {isEn 
              ? "Open to Full-time, Remote, or Hybrid roles in Web Development & Technical Support."
              : "Sẵn sàng đón nhận các cơ hội việc làm Toàn thời gian, Remote hoặc Hybrid về Lập trình Web & Technical Support."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/90 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">{isEn ? "Primary Email" : "Email Liên Hệ"}</div>
                  <a href={`mailto:${personal.email}`} className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.email, 'email')}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/90 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">{isEn ? "Phone / Zalo" : "Số Điện Thoại / Zalo"}</div>
                  <a href={`tel:${personal.phone}`} className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors">
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/90 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">{isEn ? "Location" : "Địa Chỉ Hiện Tại"}</div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {personal.location}
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-cyan-500/50 flex items-center gap-3 group transition-all"
              >
                <LinkedinIcon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400">LinkedIn</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400">quang-son</div>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-slate-600 flex items-center gap-3 group transition-all"
              >
                <GithubIcon className="w-5 h-5 text-slate-200 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400">GitHub</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-400">quangson140302</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right: Direct Quick Hiring Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 relative">
              
              <div className="flex items-center gap-2 mb-6 text-sm font-bold text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>{isEn ? "Send a Direct Interview or Project Inquiry" : "Gửi Lời Mời Phỏng Vấn / Hợp Tác Nhanh"}</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isEn ? "Your Name / Recruiter Name *" : "Họ và Tên của bạn / HR *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / HR Specialist"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isEn ? "Your Work Email *" : "Email Công Ty / Cá Nhân *"}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isEn ? "Company / Organization" : "Tên Doanh Nghiệp / Tổ Chức"}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. TechCorp Solutions"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isEn ? "Position Open For" : "Vị Trí Quan Tâm"}
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Web Developer / Front-end">Web Developer / Front-end (React)</option>
                      <option value="Full-stack Developer">Full-stack Developer (MERN Stack)</option>
                      <option value="Technical Support Specialist">Technical Support Specialist (Shopify/SaaS)</option>
                      <option value="Customer Support Specialist">Customer Support Specialist (Global)</option>
                      <option value="Other Project / Contract">Khác / Dự án Freelance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isEn ? "Message / Job Details" : "Nội Dung Trao Đổi"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={isEn ? "Describe the role, timeline, or interview invitation..." : "Mô tả yêu cầu vị trí, mức lương dự kiến hoặc thời gian phỏng vấn..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isEn ? "Send Invitation via Email" : "Gửi Lời Mời Trực Tiếp Qua Email"}</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
