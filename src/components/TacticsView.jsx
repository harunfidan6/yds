import React, { useState } from 'react';
import { TACTICS_DATA } from '../data/tacticsData';
import { Zap, BookOpen, CheckCircle, AlertTriangle, ArrowRight, Table } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';

export const TacticsView = () => {
  const [selectedTacticId, setSelectedTacticId] = useState(TACTICS_DATA[0].id);

  const tactic = TACTICS_DATA.find((t) => t.id === selectedTacticId) || TACTICS_DATA[0];

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-400 mb-1">
          <Zap className="w-3.5 h-3.5 fill-amber-400" />
          <span>Sıfırdan 70'e Altın Taktikler</span>
        </div>
        <h2 className="text-lg font-black text-white">YDS Soru Çözüm Hileleri</h2>
        <p className="text-xs text-slate-400">
          Metni baştan sona çevirmeden doğru şıkkı 20 saniyede bulma teknikleri
        </p>
      </div>

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
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              <span>{t.title.split('(')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Tactic Detailed Card */}
      <div className="bg-slate-850/90 border border-slate-750 rounded-3xl p-5 shadow-2xl space-y-4">
        {/* Title & Badge */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {tactic.badge}
            </span>
            <h3 className="text-base font-black text-white mt-1.5">{tactic.title}</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">{tactic.summary}</p>
          </div>
        </div>

        {/* Steps or Matrix */}
        {tactic.steps && (
          <div className="space-y-2.5 pt-1">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Adım Adım Çözüm Stratejisi
            </h4>
            {tactic.steps.map((st, sIdx) => (
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

        {/* Conjunction Matrix Table if present */}
        {tactic.matrix && (
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Table className="w-3.5 h-3.5 text-amber-400" />
              <span>Bağlaç Grupları & Kullanım Matrisi</span>
            </h4>
            <div className="space-y-2.5">
              {tactic.matrix.map((row, rIdx) => (
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
            {tactic.goldenRule}
          </div>
        </div>

        {/* Walkthrough Example */}
        {tactic.example && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Canlı Soru Uygulaması:
            </span>
            <p className="text-xs font-semibold text-white bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              "{tactic.example.question}"
            </p>
            <div className="text-xs text-slate-300 whitespace-pre-line leading-relaxed pl-1">
              {tactic.example.analysis}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
