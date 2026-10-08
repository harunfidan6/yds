import React, { useState } from 'react';
import { QUESTIONS_DATA } from '../data/questionsData';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw, Sparkles, Award } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';

export const PracticeView = ({
  solvedQuestions = {},
  onSaveAnswer,
  onAddToMistakes,
  onRemoveFromMistakes
}) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [currentIdx, setCurrentIdx] = useState(0);

  const categories = [
    { id: 'ALL', label: 'Tüm Sorular' },
    { id: 'PAST_EXAMS', label: '⭐ Çıkmış YDS Soruları' },
    { id: 'Kelime (Vocabulary)', label: 'Kelime' },
    { id: 'Phrasal Verbs', label: 'Phrasal Verbs' },
    { id: 'Gramer & Bağlaçlar', label: 'Bağlaç & Gramer' },
    { id: 'Cümle Tamamlama', label: 'Cümle Tamamlama' },
    { id: 'Çeviri (İngilizce -> Türkçe)', label: 'İng-Tr Çeviri' },
    { id: 'Çeviri (Türkçe -> İngilizce)', label: 'Tr-İng Çeviri' },
    { id: 'Akışı Bozan Cümle', label: 'Akışı Bozan' },
    { id: 'Paragraf Soruları', label: 'Paragraf' },
  ];

  const filteredQuestions = QUESTIONS_DATA.filter((q) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'PAST_EXAMS') return q.isPastExam === true;
    return q.category === selectedCategory;
  });

  const question = filteredQuestions[currentIdx] || filteredQuestions[0];
  const currentAnswer = question ? solvedQuestions[question.id] : null;

  const handleSelectOption = (optionLabel) => {
    if (!question || currentAnswer) return; // already answered

    const isCorrect = optionLabel === question.correct;
    if (isCorrect) {
      playSoundEffect('correct');
      onRemoveFromMistakes(question.id);
    } else {
      playSoundEffect('wrong');
      onAddToMistakes(question.id);
    }

    onSaveAnswer(question.id, optionLabel);
  };

  const handleNext = () => {
    playSoundEffect('click');
    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setCurrentIdx(0);
    }
  };

  const handlePrev = () => {
    playSoundEffect('click');
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    } else {
      setCurrentIdx(filteredQuestions.length - 1);
    }
  };

  const handleResetCurrent = () => {
    if (!question) return;
    playSoundEffect('click');
    onSaveAnswer(question.id, null);
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-white flex items-center gap-1.5">
            Soru Bankası & Quiz
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              {filteredQuestions.length} Soru
            </span>
          </h2>
          <p className="text-xs text-slate-400">İşaretlediğiniz anda anında cevap ve detaylı çözüm</p>
        </div>

        {/* Question Counter */}
        {question && (
          <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-xl border border-slate-700">
            {currentIdx + 1} / {filteredQuestions.length}
          </span>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setCurrentIdx(0);
              playSoundEffect('click');
            }}
            className={`flex-shrink-0 px-3 py-1.5 rounded-xl font-semibold transition cursor-pointer ${
              selectedCategory === cat.id
                ? cat.id === 'PAST_EXAMS'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 ring-2 ring-amber-400/40'
                  : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : cat.id === 'PAST_EXAMS'
                ? 'bg-amber-950/40 border border-amber-500/30 text-amber-300 hover:bg-amber-900/40'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Question Card */}
      {!question ? (
        <div className="bg-slate-850 border border-slate-800 rounded-3xl p-8 text-center text-slate-400">
          <p className="text-sm">Bu filtreye uygun soru bulunamadı.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-slate-850/90 border border-slate-750 rounded-3xl p-5 shadow-2xl space-y-4">
            {/* Category Tag & Exam Year Badge */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <span className="font-bold uppercase tracking-wider text-[10px] px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {question.category}
                </span>
                {question.isPastExam && (
                  <span className="font-black text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-400" />
                    {question.examYear}
                  </span>
                )}
              </div>
              <span className="text-slate-400 font-medium">1.25 Puan</span>
            </div>

            {/* Question Text */}
            <div className="text-sm font-medium text-white leading-relaxed whitespace-pre-line bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              {question.question}
            </div>

            {/* Options List with INSTANT ANSWER REVEAL */}
            <div className="space-y-2 pt-1">
              {question.options.map((opt) => {
                const isSelected = currentAnswer === opt.label;
                const isCorrect = opt.label === question.correct;
                const answered = !!currentAnswer;

                let btnStyle = 'bg-slate-800/70 hover:bg-slate-800 text-slate-200 border-slate-700/60';
                if (answered) {
                  if (isCorrect) {
                    // Always show the correct option in vivid emerald
                    btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-100 font-bold shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-400/30';
                  } else if (isSelected && !isCorrect) {
                    // Chosen wrong option in vivid red
                    btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-100 font-bold shadow-lg shadow-rose-950/30 ring-1 ring-rose-400/30';
                  } else {
                    btnStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelectOption(opt.label)}
                    disabled={answered}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs transition-all flex items-start space-x-3 cursor-pointer ${btnStyle}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                        answered && isCorrect
                          ? 'bg-emerald-500 text-white'
                          : answered && isSelected && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-750 text-slate-300'
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span className="flex-1 pt-0.5 leading-relaxed">{opt.text}</span>
                    {answered && isCorrect && (
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5 flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {isSelected ? 'DOĞRU!' : 'Doğru Cevap'}
                      </span>
                    )}
                    {answered && isSelected && !isCorrect && (
                      <span className="text-[10px] text-rose-400 font-bold flex items-center gap-0.5 flex-shrink-0 mt-0.5">
                        <XCircle className="w-4 h-4 text-rose-400" />
                        YANLIŞ
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DETAILED EXPLANATION CARD (Appears AUTOMATICALLY when answered, whether right or wrong!) */}
          {currentAnswer && (
            <div
              className={`border rounded-3xl p-4 shadow-xl space-y-2.5 animate-in fade-in zoom-in-95 duration-200 ${
                currentAnswer === question.correct
                  ? 'bg-emerald-950/20 border-emerald-500/40'
                  : 'bg-rose-950/20 border-rose-500/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Detaylı Türkçe Çözüm & Sınav Analizi</span>
                </span>
                <span
                  className={`font-black text-xs px-2.5 py-0.5 rounded-full ${
                    currentAnswer === question.correct
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}
                >
                  {currentAnswer === question.correct
                    ? '✓ TEBRİKLER (+1.25 P)'
                    : '✗ YANLIŞ (Hata Defterine Kaydedildi)'}
                </span>
              </div>

              {/* Explanation Content */}
              <div className="text-xs text-slate-200 whitespace-pre-line leading-relaxed bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                {question.explanation}
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handleResetCurrent}
                  className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer transition"
                >
                  <RotateCcw className="w-3 h-3" /> Tekrar Çöz
                </button>
                <button
                  onClick={handleNext}
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer transition"
                >
                  <span>Sonraki Soruya Geç</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition cursor-pointer"
            >
              Önceki Soru
            </button>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <span>Sonraki Soru</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
