import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Rocket, 
  QrCode, 
  Mail, 
  FileText, 
  CheckCircle2, 
  Copy, 
  Search,
  Check
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function RecruiterModal({ isOpen, onClose, initialTab = 'strategy' }) {
  if (!isOpen) return null;

  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab);

  const portfolioUrl = "https://quangson-portfolio.vercel.app";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(portfolioUrl)}&bgcolor=ffffff&color=111827`;

  const copyUrl = () => {
    navigator.clipboard.writeText(portfolioUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
    confetti({ particleCount: 35, spread: 55, origin: { y: 0.8 } });
  };

  const steps = [
    {
      num: "01",
      icon: Rocket,
      title: "Deploy for Free in 2 Minutes on Vercel or Netlify",
      desc: "Push this project to GitHub (e.g. repo named 'quang-portfolio'). Go to vercel.com or netlify.com, connect your GitHub account, select the repository, and click Deploy. You get an instant, lightning-fast live website with SSL: https://quangson-portfolio.vercel.app."
    },
    {
      num: "02",
      icon: FileText,
      title: "Embed Live Link & QR Code on Your CV Header",
      desc: "Place your clickable website link right beneath your name on your PDF CV: 'Portfolio: quangson-portfolio.vercel.app'. Also download the QR code below and insert it at the top-right corner of your CV PDF so recruiters who print your resume on paper can scan and open it instantly on their phones."
    },
    {
      num: "03",
      icon: LinkedinIcon,
      title: "Pin to LinkedIn Profile & Vietnamese IT Platforms",
      desc: "On LinkedIn: Add the portfolio link to your 'Featured' section with an attractive screenshot, and update your 'Contact Info > Website'. On ITviec, TopCV, and VietnamWorks: Paste the portfolio URL into your Bio summary and Cover Letter."
    },
    {
      num: "04",
      icon: Mail,
      title: "Professional Email Signature & Application Letters",
      desc: "Configure a clean signature in Gmail: 'Son Huynh Nhat Quang | Web Developer & Technical Support | Portfolio: [link] | Phone: 0343839979'. When submitting job applications, mention: 'Please explore my interactive Harvard-standard portfolio and live code repositories at [link].'"
    },
    {
      num: "05",
      icon: Search,
      title: "Google Search Console & GitHub Profile README",
      desc: "Submit your site to Google Search Console to index 'Son Huynh Nhat Quang' on Google. Create a GitHub profile repository (github.com/quangson140302/quangson140302) with a markdown badge and link to your portfolio to capture technical recruiters researching your repositories."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn no-print">
      <div className="bg-white dark:bg-[#1c1c20] text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-2xl md:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                Recruiter Visibility Playbook
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Actionable 5-step strategy to make recruiters discover and explore your portfolio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-6">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'strategy'
                ? 'border-blue-600 text-blue-600 dark:text-cyan-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            5 Visibility Steps
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'qr'
                ? 'border-blue-600 text-blue-600 dark:text-cyan-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            CV QR Code & Deploy Hub
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {activeTab === 'strategy' ? (
            <div className="space-y-3.5">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-cyan-400">{step.num}</span>
                      <div className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-blue-600 dark:text-cyan-400 mt-1 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* QR Code Box */}
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center space-y-4 flex flex-col items-center">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                  QR Code for Your CV (Paper/PDF)
                </h4>
                <div className="p-3 bg-white rounded-xl border border-zinc-200 shadow-sm inline-block">
                  <img 
                    src={qrCodeUrl} 
                    alt="Portfolio QR Code" 
                    className="w-44 h-44 rounded-lg object-contain"
                  />
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs">
                  Right-click or download this QR code and paste it on top of your CV PDF. Recruiters can scan and browse your work in seconds.
                </p>
                <a
                  href={qrCodeUrl}
                  download="quangson-portfolio-qr.png"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-colors"
                >
                  Download QR Code
                </a>
              </div>

              {/* Fast Deploy Commands */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <div className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                    Deploy Online in 1 Step via Terminal
                  </div>
                  <pre className="p-3 rounded-lg bg-zinc-900 text-emerald-400 font-mono text-xs overflow-x-auto">
                    npx vercel
                  </pre>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Follow the prompt (press Enter for defaults) and your site will be immediately live globally with HTTPS!
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <div className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                    Your Target Live Link
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800">
                    <span className="font-mono text-xs text-zinc-800 dark:text-zinc-200">{portfolioUrl}</span>
                    <button
                      onClick={copyUrl}
                      className="text-xs text-blue-600 dark:text-cyan-400 hover:underline font-semibold flex items-center gap-1"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-xs text-blue-900 dark:text-blue-200 space-y-1">
                  <div className="font-bold">💡 Recruiter Cold Outreach Tip:</div>
                  <p>When reaching out to HR via LinkedIn or Email: <em>"Dear [Hiring Manager], I've attached my CV and also created a live interactive version featuring direct links to my code repositories at quangson-portfolio.vercel.app."</em></p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
