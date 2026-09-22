import React from 'react';
import { Filter, Sparkles, Code2, Server, ShoppingBag, Bot, Headphones } from 'lucide-react';

export default function KeywordFilter({ activeFilter, setActiveFilter, darkMode }) {
  const filters = [
    { id: 'all', label: 'All Roles', icon: Sparkles },
    { id: 'frontend', label: 'React & Frontend', icon: Code2 },
    { id: 'backend', label: 'Node.js & Backend', icon: Server },
    { id: 'shopify', label: 'Shopify & Liquid', icon: ShoppingBag },
    { id: 'ai', label: 'AI & Machine Learning', icon: Bot },
    { id: 'support', label: 'Tech Support & CSAT', icon: Headphones },
  ];

  return (
    <div className="no-print max-w-[960px] mx-auto mb-3 sm:mb-4 px-2">
      <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600">
          <Filter className="w-3.5 h-3.5 text-blue-500" />
          <span className="text-xs">Recruiter Lens (Highlight Skills):</span>
        </div>
        {activeFilter !== 'all' && (
          <button 
            onClick={() => setActiveFilter('all')}
            className="text-[11px] text-blue-600 hover:underline font-medium"
          >
            Reset
          </button>
        )}
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
        {filters.map((f) => {
          const Icon = f.icon;
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex-shrink-0 whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-102 font-semibold'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200 shadow-xs'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{f.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
