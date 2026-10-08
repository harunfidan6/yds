import React from 'react';
import { Flame, Clock, Target, Sparkles, BookOpen } from 'lucide-react';

export const Navbar = ({ streak, studyMinutes, targetMinutes = 240, onOpenTimer }) => {
  const progressPercent = Math.min(100, Math.round((studyMinutes / targetMinutes) * 100));

  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 font-black text-sm tracking-wider">
            70+
          </div>
          <div>
            <h1 className="text-base font-bold text-white leading-tight flex items-center gap-1.5">
              YDS Sprint
              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                7 Hafta
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 font-medium">Hedef: 56 Net (70.0 Puan)</p>
          </div>
        </div>

        {/* Action badges */}
        <div className="flex items-center space-x-2">
          {/* Streak */}
          <div 
            className="flex items-center space-x-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer"
            title="Günlük Seri"
          >
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>{streak} Gün</span>
          </div>

          {/* Daily 4h Timer Button */}
          <button
            onClick={onOpenTimer}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-md shadow-blue-600/20 transition-all active:scale-95 cursor-pointer"
            title="Günün 4 Saatlik Çalışma Sayacı"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{studyMinutes}/240 dk</span>
          </button>
        </div>
      </div>

      {/* Daily 4-Hour Progress Bar */}
      <div className="mt-2.5 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden flex items-center">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            progressPercent >= 100 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-400'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-1 text-[10px] text-slate-400">
        <span>Bugünkü 4 Saatlik Hedef: %{progressPercent}</span>
        {progressPercent >= 100 ? (
          <span className="text-emerald-400 font-bold flex items-center gap-0.5">
            <Sparkles className="w-2.5 h-2.5" /> Günlük Hedef Tamam!
          </span>
        ) : (
          <span>Kalan: {Math.max(0, targetMinutes - studyMinutes)} dk</span>
        )}
      </div>
    </header>
  );
};
