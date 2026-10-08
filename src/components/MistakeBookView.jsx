import React, { useState } from 'react';
import { QUESTIONS_DATA } from '../data/questionsData';
import { VOCABULARY_LIST } from '../data/vocabularyData';
import { BookX, CheckCircle, RotateCcw, Sparkles, Check, Volume2, ArrowRight } from 'lucide-react';
import { speakWord, playSoundEffect } from '../utils/sound';

export const MistakeBookView = ({
  mistakeQuestionIds = [],
  reviewWordIds = [],
  onRemoveMistakeQuestion,
  onRemoveReviewWord
}) => {
  const [activeTab, setActiveTab] = useState('questions'); // 'questions' or 'words'
  const [retestAnswers, setRetestAnswers] = useState({});

  // Filter mistakes
  const mistakeQuestions = QUESTIONS_DATA.filter((q) =>
    mistakeQuestionIds.includes(q.id)
  );

  const reviewWords = VOCABULARY_LIST.filter((w) =>
    reviewWordIds.includes(w.id)
  );

  const handleRetestAnswer = (questionId, optionLabel) => {
    const q = QUESTIONS_DATA.find((item) => item.id === questionId);
    if (!q) return;

    if (optionLabel === q.correct) {
      playSoundEffect('correct');
      setRetestAnswers({ ...retestAnswers, [questionId]: { selected: optionLabel, isCorrect: true } });
      setTimeout(() => {
        onRemoveMistakeQuestion(questionId);
      }, 1200);
    } else {
      playSoundEffect('wrong');
      setRetestAnswers({ ...retestAnswers, [questionId]: { selected: optionLabel, isCorrect: false } });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
      {/* Banner */}
      <div className="bg-gradient-to-br from-rose-950/40 via-red-900/20 to-slate-900 border border-rose-500/30 rounded-3xl p-5 shadow-xl">
        <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs mb-1">
          <BookX className="w-4 h-4" />
          <span>70+ Puanın En Büyük Sırrı</span>
        </div>
        <h2 className="text-xl font-black text-white">Akıllı Hata Defteri</h2>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          YDS'de net artışı bildiğin soruları çözerek değil, yanlış yaptığın soruların mantığını düzelterek kazanılır.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-800 p-1 rounded-2xl border border-slate-700">
        <button
          onClick={() => { setActiveTab('questions'); playSoundEffect('click'); }}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'questions' ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>Yanlış Yapılan Sorular</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900/60 font-black">
            {mistakeQuestions.length}
          </span>
        </button>
        <button
          onClick={() => { setActiveTab('words'); playSoundEffect('click'); }}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'words' ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>Zorlanılan Kelimeler</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900/60 font-black">
            {reviewWords.length}
          </span>
        </button>
      </div>

      {/* QUESTIONS SECTION */}
      {activeTab === 'questions' && (
        <div className="space-y-4">
          {mistakeQuestions.length === 0 ? (
            <div className="bg-slate-850 border border-slate-800 rounded-3xl p-8 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">Hata Defterin Tertemiz!</h4>
              <p className="text-xs text-slate-400">
                Soru bankasından veya denemelerden soru çözdükçe yanlışların otomatik buraya eklenecektir.
              </p>
            </div>
          ) : (
            mistakeQuestions.map((q) => {
              const retestState = retestAnswers[q.id];

              return (
                <div
                  key={q.id}
                  className="bg-slate-850/90 border border-rose-500/30 rounded-3xl p-4 shadow-xl space-y-3"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider bg-rose-500/10 px-2 py-0.5 rounded-full">
                      {q.category}
                    </span>
                    <button
                      onClick={() => onRemoveMistakeQuestion(q.id)}
                      className="text-[10px] text-slate-500 hover:text-slate-300 cursor-pointer"
                    >
                      Defterden Sil
                    </button>
                  </div>

                  <p className="text-xs font-medium text-white leading-relaxed bg-slate-900 p-3 rounded-xl border border-slate-800">
                    {q.question}
                  </p>

                  {/* Re-test options */}
                  <div className="space-y-1.5">
                    {q.options.map((opt) => {
                      const isSelected = retestState?.selected === opt.label;
                      const isCorrect = opt.label === q.correct;

                      let btnCls = 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700';
                      if (retestState) {
                        if (isCorrect) {
                          btnCls = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnCls = 'bg-rose-950/60 border-rose-500 text-rose-200 font-bold';
                        }
                      }

                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleRetestAnswer(q.id, opt.label)}
                          className={`w-full p-2.5 rounded-xl border text-left text-xs transition flex items-center space-x-2.5 cursor-pointer ${btnCls}`}
                        >
                          <span className="w-5 h-5 rounded-md bg-slate-700 text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                            {opt.label}
                          </span>
                          <span className="flex-1 leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Solution info */}
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                    <span className="font-bold text-blue-400 block mb-1">
                      💡 Çözüm Mantığı ve Taktik Hatırlatması:
                    </span>
                    <div className="whitespace-pre-line text-[11px]">{q.explanation}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* WORDS SECTION */}
      {activeTab === 'words' && (
        <div className="space-y-3">
          {reviewWords.length === 0 ? (
            <div className="bg-slate-850 border border-slate-800 rounded-3xl p-8 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white">Tekrar Listesi Boş!</h4>
              <p className="text-xs text-slate-400">
                Kelime kartlarında "Tekrar Et / Bilemedim" dediğin kelimeler burada toplanır.
              </p>
            </div>
          ) : (
            reviewWords.map((w) => (
              <div
                key={w.id}
                className="bg-slate-850 border border-slate-800 rounded-2xl p-3.5 flex items-start justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-bold text-white">{w.word}</h4>
                    <button
                      onClick={() => speakWord(w.word)}
                      className="text-slate-400 hover:text-blue-400 transition cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-slate-500">{w.type}</span>
                  </div>
                  <p className="text-xs text-rose-400 font-bold mt-0.5">{w.turkish}</p>
                  <p className="text-[11px] text-slate-400 italic mt-1">"{w.example}"</p>
                </div>

                <button
                  onClick={() => {
                    onRemoveReviewWord(w.id);
                    playSoundEffect('correct');
                  }}
                  className="p-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 transition cursor-pointer flex-shrink-0 ml-2"
                  title="Öğrendim olarak işaretle ve listeden çıkar"
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
