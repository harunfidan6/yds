import React, { useState } from 'react';
import { VOCABULARY_LIST } from '../data/vocabularyData';
import { Volume2, RotateCcw, Check, Star, Search, Filter, Layers, List, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { speakWord, playSoundEffect } from '../utils/sound';

export const VocabularyView = ({
  learnedWords = [],
  reviewWords = [],
  favoriteWords = [],
  onToggleLearned,
  onToggleReview,
  onToggleFavorite
}) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('flashcard'); // 'flashcard' or 'list'
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter words
  const filteredWords = VOCABULARY_LIST.filter((item) => {
    // Search
    const matchesSearch =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.turkish.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'FAVORITES') return favoriteWords.includes(item.id);
    if (selectedCategory === 'REVIEW') return reviewWords.includes(item.id);
    if (selectedCategory === 'LEARNED') return learnedWords.includes(item.id);
    return item.category === selectedCategory;
  });

  const currentWord = filteredWords[currentCardIndex] || filteredWords[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    playSoundEffect('click');
    if (currentCardIndex < filteredWords.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0); // loop
    }
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    playSoundEffect('click');
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    } else {
      setCurrentCardIndex(filteredWords.length - 1);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    playSoundEffect('click');
  };

  const handleSpeak = (e, word) => {
    e.stopPropagation();
    speakWord(word);
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 pb-20 space-y-4">
      {/* Header & Stats */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-1.5">
            Akıllı Kelime Kartları
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {filteredWords.length} Kelime
            </span>
          </h2>
          <p className="text-xs text-slate-400">Leitner aralıklı tekrar sistemi ile kalıcı ezber</p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex bg-slate-800 p-0.5 rounded-xl border border-slate-700">
          <button
            onClick={() => { setViewMode('flashcard'); playSoundEffect('click'); }}
            className={`p-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              viewMode === 'flashcard' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Kart Modu"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => { setViewMode('list'); playSoundEffect('click'); }}
            className={`p-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              viewMode === 'list' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Liste Modu"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentCardIndex(0);
          }}
          placeholder="İngilizce veya Türkçe kelime ara..."
          className="w-full bg-slate-850/80 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      {/* Category Pills */}
      <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none text-xs">
        {[
          { id: 'ALL', label: 'Tümü' },
          { id: 'Academic Verbs', label: 'Akademik Fiiller' },
          { id: 'Academic Adjectives', label: 'Sıfatlar' },
          { id: 'Academic Nouns', label: 'İsimler' },
          { id: 'Phrasal Verbs', label: 'Phrasal Verbs' },
          { id: 'Preposition Collocations', label: 'Edatlar' },
          { id: 'REVIEW', label: `Tekrar Edilecek (${reviewWords.length})` },
          { id: 'LEARNED', label: `Öğrenilenler (${learnedWords.length})` },
          { id: 'FAVORITES', label: `Yıldızlılar (${favoriteWords.length})` },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setCurrentCardIndex(0);
              setIsFlipped(false);
              playSoundEffect('click');
            }}
            className={`flex-shrink-0 px-3 py-1.5 rounded-xl font-semibold transition cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FLASHCARD MODE */}
      {viewMode === 'flashcard' && (
        <div className="space-y-4">
          {filteredWords.length === 0 ? (
            <div className="bg-slate-850 border border-slate-800 rounded-3xl p-8 text-center text-slate-400">
              <p className="text-sm">Bu filtreye uygun kelime bulunamadı.</p>
            </div>
          ) : (
            <>
              {/* Card Container */}
              <div
                onClick={handleFlip}
                className="w-full min-h-[300px] bg-gradient-to-br from-slate-800/90 to-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl relative cursor-pointer flex flex-col justify-between transition-all hover:border-blue-500/50 select-none group"
              >
                {/* Card Top Action Row */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {currentWord.category} • {currentWord.type}
                  </span>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => handleSpeak(e, currentWord.word)}
                      className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                      title="Sesli Telaffuz Dinle"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(currentWord.id);
                        playSoundEffect('click');
                      }}
                      className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 transition cursor-pointer"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          favoriteWords.includes(currentWord.id)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-400'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="my-auto py-4 text-center">
                  {!isFlipped ? (
                    // FRONT OF CARD
                    <div className="animate-in fade-in duration-200">
                      <h3 className="text-3xl font-black text-white tracking-wide mb-2 group-hover:text-blue-400 transition-colors">
                        {currentWord.word}
                      </h3>
                      <p className="text-xs text-slate-400 italic">
                        Anlamı görmek için karta dokun
                      </p>
                    </div>
                  ) : (
                    // BACK OF CARD
                    <div className="animate-in fade-in duration-200 text-left space-y-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Türkçe Anlamı
                        </span>
                        <h4 className="text-xl font-bold text-emerald-400">
                          {currentWord.turkish}
                        </h4>
                      </div>

                      {currentWord.synonyms && (
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Eş Anlamlılar (Synonyms)
                          </span>
                          <p className="text-xs text-slate-200 font-medium">
                            {currentWord.synonyms}
                          </p>
                        </div>
                      )}

                      <div className="pt-1 border-t border-slate-700/60">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          YDS Örnek Cümle
                        </span>
                        <p className="text-xs text-slate-200 italic mt-0.5">
                          "{currentWord.example}"
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          ↳ {currentWord.translation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Bottom Indicator */}
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono">
                    {currentCardIndex + 1} / {filteredWords.length}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {isFlipped ? 'Ön yüze dönmek için dokun' : 'Arka yüze geçmek için dokun'}
                  </span>
                </div>
              </div>

              {/* Leitner Learning Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onToggleReview(currentWord.id);
                    playSoundEffect('wrong');
                    handleNextCard();
                  }}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer border ${
                    reviewWords.includes(currentWord.id)
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                      : 'bg-slate-800 hover:bg-slate-700 text-rose-400 border-slate-700'
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Tekrar Et (Bilemedim)</span>
                </button>

                <button
                  onClick={() => {
                    onToggleLearned(currentWord.id);
                    playSoundEffect('correct');
                    handleNextCard();
                  }}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer border ${
                    learnedWords.includes(currentWord.id)
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-600/20'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span>Öğrendim (Biliyorum)</span>
                </button>
              </div>

              {/* Card Navigation Arrows */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handlePrevCard}
                  className="px-4 py-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Önceki
                </button>
                <button
                  onClick={handleNextCard}
                  className="px-4 py-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                >
                  Sonraki <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <div className="space-y-2.5">
          {filteredWords.map((item) => {
            const isLearned = learnedWords.includes(item.id);
            const isReview = reviewWords.includes(item.id);
            const isFav = favoriteWords.includes(item.id);

            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-2xl border transition bg-slate-850/70 border-slate-800 hover:border-slate-700`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-bold text-white">{item.word}</h4>
                      <button
                        onClick={(e) => handleSpeak(e, item.word)}
                        className="text-slate-400 hover:text-blue-400 transition cursor-pointer"
                        title="Dinle"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-medium">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      {item.turkish}
                    </p>
                    {item.synonyms && (
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        <span className="text-slate-500">Eş:</span> {item.synonyms}
                      </p>
                    )}
                    <p className="text-[11px] text-slate-300 italic mt-1.5 border-l-2 border-slate-700 pl-2">
                      "{item.example}"
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-1 ml-2">
                    <button
                      onClick={() => onToggleFavorite(item.id)}
                      className="p-1.5 text-slate-400 hover:text-amber-400 cursor-pointer"
                    >
                      <Star className={`w-4 h-4 ${isFav ? 'text-amber-400 fill-amber-400' : ''}`} />
                    </button>
                    <button
                      onClick={() => onToggleLearned(item.id)}
                      className={`p-1.5 rounded-lg cursor-pointer transition ${
                        isLearned ? 'bg-emerald-500/20 text-emerald-400' : 'text-slate-500 hover:text-emerald-400'
                      }`}
                      title={isLearned ? 'Öğrenildi' : 'Öğrendim olarak işaretle'}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
