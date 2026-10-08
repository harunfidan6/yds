import React, { useState, useEffect, useRef } from 'react';
import { QUESTIONS_DATA } from '../data/questionsData';
import { Award, Clock, CheckCircle2, AlertCircle, RotateCcw, ChevronRight, ChevronLeft, Sparkles, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSoundEffect } from '../utils/sound';

export const ExamView = ({ onSaveExamResult, examHistory = [], onAddToMistakes }) => {
  const [examState, setExamState] = useState('IDLE'); // 'IDLE', 'RUNNING', 'RESULT'
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 mins
  const timerRef = useRef(null);

  // Timer loop
  useEffect(() => {
    if (examState === 'RUNNING' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (examState === 'RUNNING' && timeLeft === 0) {
      clearInterval(timerRef.current);
      finishExam();
    }
    return () => clearInterval(timerRef.current);
  }, [examState, timeLeft]);

  const startExam = (count = 10, minutes = 20) => {
    // Shuffle and pick
    const shuffled = [...QUESTIONS_DATA].sort(() => 0.5 - Math.random()).slice(0, count);
    setExamQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setTimeLeft(minutes * 60);
    setExamState('RUNNING');
    playSoundEffect('click');
  };

  const handleSelect = (optionLabel) => {
    setAnswers({
      ...answers,
      [examQuestions[currentIndex].id]: optionLabel
    });
    playSoundEffect('click');
  };

  const finishExam = () => {
    clearInterval(timerRef.current);
    playSoundEffect('correct');

    // Calculate score
    let correctCount = 0;
    let wrongCount = 0;
    let emptyCount = 0;

    examQuestions.forEach((q) => {
      const userAns = answers[q.id];
      if (!userAns) {
        emptyCount++;
      } else if (userAns === q.correct) {
        correctCount++;
      } else {
        wrongCount++;
        onAddToMistakes(q.id);
      }
    });

    const score = Math.round(correctCount * 1.25 * 10) / 10; // each question 1.25 in 80-q scale, or normalized
    // If mini exam, normalize to 100 or show standard points:
    // Let's calculate standard YDS equivalent percentage score:
    const percentageScore = Math.round((correctCount / examQuestions.length) * 100);

    const result = {
      date: new Date().toLocaleDateString('tr-TR'),
      total: examQuestions.length,
      correct: correctCount,
      wrong: wrongCount,
      empty: emptyCount,
      score: percentageScore,
      targetReached: percentageScore >= 70
    };

    onSaveExamResult(result);
    setExamState('RESULT');

    if (percentageScore >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const currentQ = examQuestions[currentIndex];

  // If IDLE: Show Start Screen & Past Results
  if (examState === 'IDLE') {
    return (
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
        {/* Banner */}
        <div className="bg-gradient-to-br from-amber-600/30 via-orange-600/20 to-slate-900 border border-amber-500/30 rounded-3xl p-5 shadow-xl">
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs mb-1">
            <Award className="w-4 h-4" />
            <span>Gerçek Sınav Simülasyonu</span>
          </div>
          <h2 className="text-xl font-black text-white">YDS Puan Simülatörü</h2>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            YDS'de yanlışlar doğruyu götürmez! Hedef: 80 soruda 56 doğru ile en az 70 puan.
          </p>
        </div>

        {/* Start Exam Card */}
        <div className="bg-slate-850 border border-slate-800 rounded-3xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-white">Deneme Sınavı Seçenekleri</h3>

          <div className="space-y-3">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">Mini Deneme (10 Soru)</h4>
                <p className="text-[11px] text-slate-400">15 Dakika • Hızlı Seviye Tespiti</p>
              </div>
              <button
                onClick={() => startExam(10, 15)}
                className="py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/20 transition cursor-pointer"
              >
                Başlat
              </button>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">Orta Kamp Denemesi (20 Soru)</h4>
                <p className="text-[11px] text-slate-400">30 Dakika • Karma YDS Formatı</p>
              </div>
              <button
                onClick={() => startExam(20, 30)}
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/20 transition cursor-pointer"
              >
                Başlat
              </button>
            </div>
          </div>
        </div>

        {/* Past Exam History */}
        {examHistory.length > 0 && (
          <div className="bg-slate-850 border border-slate-800 rounded-3xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span>Son Deneme Sonuçların</span>
            </h3>
            <div className="space-y-2">
              {examHistory.slice(-4).reverse().map((hist, hIdx) => (
                <div
                  key={hIdx}
                  className="bg-slate-900/70 border border-slate-800 rounded-2xl p-3 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="text-[10px] text-slate-400 block">{hist.date}</span>
                    <span className="font-bold text-white">
                      {hist.correct} Doğru / {hist.wrong} Yanlış
                    </span>
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-base font-black ${
                        hist.score >= 70 ? 'text-emerald-400' : 'text-amber-400'
                      }`}
                    >
                      {hist.score} Puan
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      {hist.score >= 70 ? '✓ 70 Hedefi Aşıldı' : 'Hedefe Devam'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // If RUNNING: Active Exam Interface
  if (examState === 'RUNNING' && currentQ) {
    const userSelected = answers[currentQ.id];

    return (
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
        {/* Exam Header & Timer */}
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded-2xl">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-white">
              Soru {currentIndex + 1} / {examQuestions.length}
            </span>
          </div>
          <div className="flex items-center space-x-1.5 text-amber-400 font-mono font-bold text-sm bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">
            <Clock className="w-4 h-4" />
            <span>{formatTimer(timeLeft)}</span>
          </div>
          <button
            onClick={finishExam}
            className="text-xs font-bold text-rose-400 hover:text-rose-300 transition cursor-pointer"
          >
            Sınavı Bitir
          </button>
        </div>

        {/* Question Palette (Numbers) */}
        <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {examQuestions.map((q, idx) => {
            const isAnswered = !!answers[q.id];
            const isCurrent = idx === currentIndex;

            return (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  playSoundEffect('click');
                }}
                className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition cursor-pointer flex-shrink-0 ${
                  isCurrent
                    ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                    : isAnswered
                    ? 'bg-emerald-600/30 border border-emerald-500 text-emerald-300'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Current Question */}
        <div className="bg-slate-850/90 border border-slate-750 rounded-3xl p-5 shadow-2xl space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded-full">
              {currentQ.category}
            </span>
          </div>

          <div className="text-sm font-medium text-white leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            {currentQ.question}
          </div>

          {/* Options */}
          <div className="space-y-2 pt-1">
            {currentQ.options.map((opt) => {
              const isSelected = userSelected === opt.label;
              return (
                <button
                  key={opt.label}
                  onClick={() => handleSelect(opt.label)}
                  className={`w-full p-3.5 rounded-2xl border text-left text-xs transition cursor-pointer flex items-start space-x-3 ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 text-blue-200 font-bold'
                      : 'bg-slate-800/70 hover:bg-slate-800 text-slate-300 border-slate-750'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {opt.label}
                  </span>
                  <span className="flex-1 pt-0.5 leading-relaxed">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-1">
          <button
            onClick={() => {
              if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
              playSoundEffect('click');
            }}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold disabled:opacity-40 cursor-pointer"
          >
            Önceki
          </button>
          <button
            onClick={() => {
              if (currentIndex < examQuestions.length - 1) {
                setCurrentIndex(currentIndex + 1);
              } else {
                finishExam();
              }
              playSoundEffect('click');
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-md shadow-blue-600/20 cursor-pointer"
          >
            {currentIndex === examQuestions.length - 1 ? 'Sınavı Bitir' : 'Sonraki'}
          </button>
        </div>
      </div>
    );
  }

  // If RESULT: Show Score Screen
  const lastExam = examHistory[examHistory.length - 1] || {};
  const isTargetAchieved = (lastExam.score || 0) >= 70;

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
      <div
        className={`border rounded-3xl p-6 text-center space-y-3 shadow-2xl ${
          isTargetAchieved
            ? 'bg-gradient-to-b from-emerald-950/60 to-slate-900 border-emerald-500/40'
            : 'bg-gradient-to-b from-amber-950/60 to-slate-900 border-amber-500/40'
        }`}
      >
        <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-slate-900 border-2 border-slate-700 shadow-inner">
          <Award
            className={`w-8 h-8 ${isTargetAchieved ? 'text-emerald-400' : 'text-amber-400'}`}
          />
        </div>

        <div>
          <span className="text-4xl font-black text-white">{lastExam.score || 0}</span>
          <span className="text-xs text-slate-400 block mt-0.5">YDS Deneme Puanı</span>
        </div>

        {isTargetAchieved ? (
          <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold p-2.5 rounded-2xl">
            🎉 TEBRİKLER! 70 PUAN BARAJINI AŞTINIZ!
          </div>
        ) : (
          <div className="bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold p-2.5 rounded-2xl">
            🎯 70 HEDEFİNE AZ KALDI! (Hatalarını Hata Defteri'nden tekrar çöz)
          </div>
        )}

        {/* Detailed Stats */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="bg-slate-900/70 p-3 rounded-2xl border border-slate-800">
            <span className="text-emerald-400 font-black text-base block">{lastExam.correct}</span>
            <span className="text-[10px] text-slate-400">Doğru</span>
          </div>
          <div className="bg-slate-900/70 p-3 rounded-2xl border border-slate-800">
            <span className="text-rose-400 font-black text-base block">{lastExam.wrong}</span>
            <span className="text-[10px] text-slate-400">Yanlış</span>
          </div>
          <div className="bg-slate-900/70 p-3 rounded-2xl border border-slate-800">
            <span className="text-slate-400 font-black text-base block">{lastExam.empty}</span>
            <span className="text-[10px] text-slate-400">Boş</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setExamState('IDLE')}
        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-bold transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Deneme Menüsüne Dön</span>
      </button>
    </div>
  );
};
