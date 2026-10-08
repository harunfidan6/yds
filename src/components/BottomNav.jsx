import React from 'react';
import { Calendar, GraduationCap, BookMarked, HelpCircle, Award, BookX } from 'lucide-react';

export const BottomNav = ({ activeTab, setActiveTab, mistakeCount = 0 }) => {
  const tabs = [
    { id: 'roadmap', label: 'Plan', icon: Calendar },
    { id: 'lessons', label: 'Konu & Taktik', icon: GraduationCap },
    { id: 'vocab', label: 'Kelimeler', icon: BookMarked },
    { id: 'practice', label: 'Soru Çöz', icon: HelpCircle },
    { id: 'exam', label: 'Deneme', icon: Award },
    { id: 'mistakes', label: 'Hata Defteri', icon: BookX, badge: mistakeCount },
  ];

  return (
    <nav className="sticky bottom-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-1 py-1.5 flex justify-around items-center">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-xl transition-all duration-200 relative cursor-pointer ${
              isActive
                ? 'text-blue-400 font-bold scale-105'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="relative">
              <Icon className={`w-5 h-5 transition-transform ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              {tab.badge > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[9px] font-black rounded-full px-1 min-w-[14px] h-[14px] flex items-center justify-center shadow-sm">
                  {tab.badge > 99 ? '99+' : tab.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] mt-1 tracking-tight">{tab.label}</span>
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-0.5 absolute -bottom-1" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
