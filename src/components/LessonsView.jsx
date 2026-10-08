import React, { useState } from 'react';
import { LESSONS_DATA } from '../data/lessonsData';
import { TACTICS_DATA } from '../data/tacticsData';
import { BookOpen, Zap, CheckCircle, AlertTriangle, Clock, Sparkles, HelpCircle, Table } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';

export const LessonsView = () => {
  const [subTab, setSubTab] = useState('lessons'); // 'lessons' or 'tactics'
  const [selectedLessonId, setSelectedLessonId] = useState(LESSONS_DATA[0].id);
  const [selectedTacticId, setSelectedTacticId] = useState(TACTICS_DATA[0].id);

  const currentLesson = LESSONS_DATA.find((l) => l.id === selectedLessonId) || LESSONS_DATA[0];
  const currentTactic = TACTICS_DATA.find((t) => t.id === selectedTacticId) || TACTICS_DATA[0];

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
      {/* Header & Sub-tab Switcher */}
      <div className="space-y-3">
        <div>
          <h2 className="text-lg font-black text-white flex items-center gap-1.5">
            YDS Akademi & Taktik
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              Sıfırdan 70'e
            </span>
          </h2>
          <p className="text-xs text-slate-400">Detaylı konu anlatımları ve pratik sınav hileleri</p>
        </div>

        {/* Sub-tab Pills */}
        <div className="flex bg-slate-800 p-1 rounded-2xl border border-slate-700">
          <button
            onClick={() => { setSubTab('lessons'); playSoundEffect('click'); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
              subTab === 'lessons'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Gramer & Konu Anlatımı</span>
          </button>
          <button
            onClick={() => { setSubTab('tactics'); playSoundEffect('click'); }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
              subTab === 'tactics'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Altın Sınav Taktikleri</span>
          </button>
        </div>
      </div>

      {/* 1. GRAMER & KONU ANLATIMI SUB-TAB */}
      {subTab === 'lessons' && (
        <div className="space-y-4">
          {/* Lesson Chips Horizontal Selector */}
          <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {LESSONS_DATA.map((lesson) => {
              const isSelected = lesson.id === selectedLessonId;
              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLessonId(lesson.id);
                    playSoundEffect('click');
                  }}
                  className={`flex-shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/30'
                      : 'bg-slate-850 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-750'
                  }`}
                >
                  <span>{lesson.title.split('.')[1] || lesson.title}</span>
                </button>
              );
            })}
          </div>

          {/* Lesson Body Card */}
          <div className="bg-slate-850/90 border border-slate-750 rounded-3xl p-5 shadow-2xl space-y-4">
            {/* Lesson Title Header */}
            <div className="border-b border-slate-800 pb-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold uppercase tracking-wider text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {currentLesson.category} • {currentLesson.badge}
                </span>
                <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3" /> {currentLesson.estimatedTime}
                </span>
              </div>
              <h3 className="text-base font-black text-white mt-1">{currentLesson.title}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{currentLesson.summary}</p>
            </div>

            {/* Lesson Content Sections */}
            <div className="space-y-4">
              {currentLesson.content.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {sec.heading}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed pl-3">{sec.text}</p>

                  {/* Formula / Rule Box */}
                  {sec.box && (
                    <div
                      className={`p-3.5 rounded-2xl border text-xs leading-relaxed space-y-1 ${
                        sec.box.type === 'formula'
                          ? 'bg-indigo-950/40 border-indigo-500/30 text-indigo-200'
                          : 'bg-amber-950/30 border-amber-500/30 text-amber-200'
                      }`}
                    >
                      <div className="font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{sec.box.title}</span>
                      </div>
                      <div className="whitespace-pre-line text-[11px] font-medium opacity-90 pl-1">
                        {sec.box.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sample Real Exam Question in this Lesson */}
            {currentLesson.sampleExamQuestion && (
              <div className="pt-2 border-t border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    ÖSYM Çıkmış Soru Analizi ({currentLesson.sampleExamQuestion.year})
                  </span>
                </div>
                <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 text-xs text-white leading-relaxed font-medium">
                  {currentLesson.sampleExamQuestion.question}
                </div>
                <div className="grid grid-cols-1 gap-1 text-xs">
                  {currentLesson.sampleExamQuestion.options.map((opt, oIdx) => (
                    <div
                      key={oIdx}
                      className={`p-2 rounded-xl border text-[11px] ${
                        opt.startsWith(currentLesson.sampleExamQuestion.correct)
                          ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-200 font-bold'
                          : 'bg-slate-900/40 border-slate-800/80 text-slate-400'
                      }`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-3 text-[11px] text-emerald-300 leading-relaxed">
                  <span className="font-bold block mb-0.5">💡 Çözüm ve Taktik Yorumu:</span>
                  {currentLesson.sampleExamQuestion.explanation}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. ALTIN SINAV TAKTİKLERİ SUB-TAB */}
      {subTab === 'tactics' && (
        <div className="space-y-4">
          {/* Tactic Selector Horizontal Scroll */}
          <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {TACTICS_DATA.map((t) => {
              const isSelected = t.id === selectedTacticId;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTacticId(t.id);
                    playSoundEffect('click');
                  }}
                  className={`flex-shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/20 ring-2 ring-amber-400/30'
                      : 'bg-slate-850 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-750'
                  }`}
                >
                  <span>{t.title.split('(')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Tactic Card */}
          <div className="bg-slate-850/90 border border-slate-750 rounded-3xl p-5 shadow-2xl space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {currentTactic.badge}
              </span>
              <h3 className="text-base font-black text-white mt-1.5">{currentTactic.title}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{currentTactic.summary}</p>
            </div>

            {/* Steps */}
            {currentTactic.steps && (
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Adım Adım Çözüm Stratejisi
                </h4>
                {currentTactic.steps.map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 text-xs"
                  >
                    <div className="flex items-center space-x-2 text-blue-400 font-bold mb-1">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{st.step}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed pl-5">{st.detail}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Conjunction Matrix Table */}
            {currentTactic.matrix && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bağlaç Grupları & Kullanım Matrisi</span>
                </h4>
                <div className="space-y-2.5">
                  {currentTactic.matrix.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="bg-slate-900/70 border border-slate-800 rounded-2xl p-3 text-xs space-y-1.5"
                    >
                      <div className="font-bold text-amber-400 text-xs border-b border-slate-800 pb-1">
                        {row.category}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-blue-400 block uppercase">
                          + Cümle Alanlar (S + V):
                        </span>
                        <span className="text-slate-200">{row.sentenceGroup}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400 block uppercase">
                          + İsim Alanlar (Noun / Ving):
                        </span>
                        <span className="text-slate-200">{row.nounGroup}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-purple-400 block uppercase">
                          Geçiş Zarfları / Noktalama:
                        </span>
                        <span className="text-slate-200">{row.adverbGroup}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Golden Rule Highlight Box */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5 text-xs text-amber-200 flex items-start space-x-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold text-amber-300 block mb-0.5">Altın Sınav Kuralı</span>
                {currentTactic.goldenRule}
              </div>
            </div>

            {/* Live Example */}
            {currentTactic.example && (
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Canlı Soru Uygulaması:
                </span>
                <p className="text-xs font-semibold text-white bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  "{currentTactic.example.question}"
                </p>
                <div className="text-xs text-slate-300 whitespace-pre-line leading-relaxed pl-1">
                  {currentTactic.example.analysis}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
