import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, RotateCcw, Plus, CheckCircle, Flame, Coffee, Sparkles } from 'lucide-react';
import { playSoundEffect } from '../utils/sound';

export const StudyTimerModal = ({ isOpen, onClose, currentMinutes, targetMinutes = 240, onAddMinutes }) => {
  const [timerMode, setTimerMode] = useState(50); // 50 min or 25 min
  const [secondsLeft, setSecondsLeft] = useState(50 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setSecondsLeft(timerMode * 60);
    setIsActive(false);
  }, [timerMode]);

  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);
      playSoundEffect('correct');
      if (!isBreak) {
        // Study session completed! Add minutes
        onAddMinutes(timerMode);
        alert(`Tebrikler! ${timerMode} dakikalık YDS çalışma bloğunu tamamladın ve hedefine eklendi! 🎉`);
        setIsBreak(true);
        setSecondsLeft(10 * 60);
      } else {
        alert('Mola bitti! Yeni çalışma bloğuna hazır mısın? 🚀');
        setIsBreak(false);
        setSecondsLeft(timerMode * 60);
      }
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, secondsLeft, isBreak, timerMode, onAddMinutes]);

  if (!isOpen) return null;

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const progressPercent = Math.min(100, Math.round((currentMinutes / targetMinutes) * 100));

  const handleManualAdd = (mins) => {
    onAddMinutes(mins);
    playSoundEffect('click');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">4 Saatlik Çalışma Odası</h3>
              <p className="text-xs text-slate-400">Günde 240 dk $\times$ 49 gün = 70+ Puan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col items-center">
          {/* Mode Switcher */}
          <div className="flex bg-slate-800/80 p-1 rounded-2xl mb-6 w-full max-w-xs justify-between">
            <button
              onClick={() => { setTimerMode(50); setIsBreak(false); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition cursor-pointer ${
                timerMode === 50 && !isBreak ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              50 dk Odak
            </button>
            <button
              onClick={() => { setTimerMode(25); setIsBreak(false); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition cursor-pointer ${
                timerMode === 25 && !isBreak ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              25 dk Pomodoro
            </button>
            <button
              onClick={() => { setIsBreak(true); setSecondsLeft(10 * 60); setIsActive(false); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-xl transition cursor-pointer flex items-center justify-center gap-1 ${
                isBreak ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Coffee className="w-3 h-3" /> 10 dk Mola
            </button>
          </div>

          {/* Big Timer Display */}
          <div className="relative w-52 h-52 flex flex-col items-center justify-center rounded-full border-4 border-slate-800 bg-slate-950/60 shadow-inner mb-6">
            <span className="text-5xl font-mono font-black text-white tracking-wider">
              {formatTime(secondsLeft)}
            </span>
            <span className="text-xs font-medium text-slate-400 mt-1 flex items-center gap-1">
              {isBreak ? '☕ Dinlenme Molası' : '🎯 YDS Odak Bloğu'}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => {
                setSecondsLeft((isBreak ? 10 : timerMode) * 60);
                setIsActive(false);
                playSoundEffect('click');
              }}
              className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
              title="Sıfırla"
            >
              <RotateCcw className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                setIsActive(!isActive);
                playSoundEffect('click');
              }}
              className={`px-8 py-3.5 rounded-2xl font-bold text-white text-base flex items-center space-x-2 shadow-lg transition-all cursor-pointer ${
                isActive
                  ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/30'
                  : 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/30'
              }`}
            >
              {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isActive ? 'Duraklat' : 'Başlat'}</span>
            </button>
          </div>

          {/* Daily 4-Hour Progress */}
          <div className="w-full bg-slate-800/60 rounded-2xl p-3 border border-slate-800/80 mb-4">
            <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
              <span className="text-slate-300">Bugünkü İlerleme</span>
              <span className="text-blue-400 font-bold">{currentMinutes} / {targetMinutes} dk (%{progressPercent})</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  progressPercent >= 100 ? 'bg-emerald-500' : 'bg-blue-500'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {progressPercent >= 100 && (
              <p className="text-[11px] text-emerald-400 font-semibold mt-1.5 text-center flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Harikasın! Günlük 4 saatlik hedefini aştın!
              </p>
            )}
          </div>

          {/* Quick Add Buttons for off-screen study */}
          <div className="w-full">
            <p className="text-xs text-slate-400 mb-2 font-medium">Uygulama Dışında Çalıştıysan Hızlı Ekle:</p>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleManualAdd(15)}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-1"
              >
                <Plus className="w-3 h-3" /> 15 dk
              </button>
              <button
                onClick={() => handleManualAdd(30)}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-1"
              >
                <Plus className="w-3 h-3" /> 30 dk
              </button>
              <button
                onClick={() => handleManualAdd(60)}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-1"
              >
                <Plus className="w-3 h-3" /> 60 dk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
