import React, { useState } from 'react';
import { CURRICULUM_WEEKS } from '../data/curriculumData';
import { CheckCircle2, Circle, ChevronRight, ChevronDown, Sparkles, BookOpen, Clock, Target, ArrowRight } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';

export const RoadmapView = ({ completedBlocks, onToggleBlock, onNavigateTab }) => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [expandedDay, setExpandedDay] = useState(1);

  const currentWeekData = CURRICULUM_WEEKS.find((w) => w.week === selectedWeek) || CURRICULUM_WEEKS[0];

  // Calculate total progress
  const totalBlocks = 49 * 4;
  const totalCompleted = Object.values(completedBlocks).filter(Boolean).length;
  const overallPercent = Math.round((totalCompleted / totalBlocks) * 100);

  const handleToggle = (blockKey) => {
    playSoundEffect('click');
    onToggleBlock(blockKey);
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
      {/* Hero Sprint Banner */}
      <div className="bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/20 rounded-3xl p-4 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 mb-1">
              <Target className="w-3.5 h-3.5" />
              <span>7 Haftalık Süper Kamp</span>
            </div>
            <h2 className="text-lg font-black text-white">49 Günlük 70+ Puan Rotası</h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Günde 4 blok ile 56 nete adım adım ulaşıyoruz.
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-blue-400">%{overallPercent}</span>
            <p className="text-[10px] text-slate-400 font-medium">{totalCompleted}/{totalBlocks} Blok</p>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-3 w-full bg-slate-950/60 rounded-full h-2 overflow-hidden border border-blue-500/10">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {/* Week Selector Chips */}
      <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {CURRICULUM_WEEKS.map((w) => {
          const isSelected = selectedWeek === w.week;
          // Count completed blocks for this week
          let weekBlocksDone = 0;
          w.days.forEach(d => {
            d.blocks.forEach((_, bIdx) => {
              if (completedBlocks[`d${d.day}_b${bIdx}`]) weekBlocksDone++;
            });
          });
          const weekDoneAll = weekBlocksDone === 28;

          return (
            <button
              key={w.week}
              onClick={() => {
                setSelectedWeek(w.week);
                setExpandedDay(w.days[0].day);
                playSoundEffect('click');
              }}
              className={`flex-shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              <span>{w.week}. Hafta</span>
              {weekDoneAll && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          );
        })}
      </div>

      {/* Current Week Header */}
      <div className="bg-slate-850/70 border border-slate-800 rounded-2xl p-3.5 bg-slate-800/40">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            {currentWeekData.title}
          </h3>
          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            {currentWeekData.targetScore}
          </span>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">{currentWeekData.goal}</p>
      </div>

      {/* Days Accordion List */}
      <div className="space-y-2.5">
        {currentWeekData.days.map((dayData) => {
          const isExpanded = expandedDay === dayData.day;
          // Check how many blocks of this day are completed
          const dayBlocksCompleted = dayData.blocks.filter((_, bIdx) =>
            completedBlocks[`d${dayData.day}_b${bIdx}`]
          ).length;
          const isDayDone = dayBlocksCompleted === dayData.blocks.length;

          return (
            <div
              key={dayData.day}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isDayDone
                  ? 'bg-emerald-950/15 border-emerald-500/30'
                  : isExpanded
                  ? 'bg-slate-850 border-blue-500/40 shadow-lg'
                  : 'bg-slate-850/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Day Accordion Header */}
              <button
                onClick={() => {
                  setExpandedDay(isExpanded ? null : dayData.day);
                  playSoundEffect('click');
                }}
                className="w-full p-3.5 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs transition ${
                      isDayDone
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                        : isExpanded
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {isDayDone ? <CheckCircle2 className="w-5 h-5" /> : `${dayData.day}.G`}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {dayData.day}. Gün: {dayData.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {dayBlocksCompleted}/4 Blok Tamamlandı ({dayBlocksCompleted * 60} dk)
                    </p>
                  </div>
                </div>

                <div className="text-slate-400">
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </div>
              </button>

              {/* Day Blocks Expanded View */}
              {isExpanded && (
                <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-800/80 space-y-2.5 animate-in fade-in duration-150">
                  {dayData.blocks.map((block, bIdx) => {
                    const blockKey = `d${dayData.day}_b${bIdx}`;
                    const isChecked = !!completedBlocks[blockKey];

                    return (
                      <div
                        key={bIdx}
                        onClick={() => handleToggle(blockKey)}
                        className={`p-3 rounded-xl border flex items-start space-x-3 transition cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                            : 'bg-slate-800/50 border-slate-700/60 hover:border-slate-600 text-slate-200'
                        }`}
                      >
                        <button
                          type="button"
                          className="mt-0.5 text-slate-400 hover:text-white transition flex-shrink-0 cursor-pointer"
                        >
                          {isChecked ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-500" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className="flex items-center space-x-1.5 mb-0.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 px-1.5 py-0.2 rounded bg-blue-500/10">
                              {block.time}
                            </span>
                          </div>
                          <p className={`text-xs leading-relaxed ${isChecked ? 'line-through opacity-75' : ''}`}>
                            {block.task}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Quick Action Buttons for the day */}
                  <div className="pt-2 flex items-center space-x-2">
                    <button
                      onClick={() => onNavigateTab('vocab')}
                      className="flex-1 py-2 px-2.5 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-xl text-blue-300 text-xs font-semibold flex items-center justify-center gap-1 transition cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Kelimeleri Çalış</span>
                    </button>
                    <button
                      onClick={() => onNavigateTab('practice')}
                      className="flex-1 py-2 px-2.5 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 rounded-xl text-indigo-300 text-xs font-semibold flex items-center justify-center gap-1 transition cursor-pointer"
                    >
                      <Target className="w-3.5 h-3.5" />
                      <span>Soruları Çöz</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
