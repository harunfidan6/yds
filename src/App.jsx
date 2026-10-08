import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { RoadmapView } from './components/RoadmapView';
import { LessonsView } from './components/LessonsView';
import { VocabularyView } from './components/VocabularyView';
import { PracticeView } from './components/PracticeView';
import { ExamView } from './components/ExamView';
import { MistakeBookView } from './components/MistakeBookView';
import { StudyTimerModal } from './components/StudyTimerModal';

import {
  STORAGE_KEYS,
  getStoredData,
  setStoredData,
  getTodayStudyMinutes,
  addStudyMinutes
} from './utils/storage';

export function App() {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [isTimerOpen, setIsTimerOpen] = useState(false);

  // Persistent States
  const [completedBlocks, setCompletedBlocks] = useState(() =>
    getStoredData(STORAGE_KEYS.COMPLETED_BLOCKS, {})
  );
  const [learnedWords, setLearnedWords] = useState(() =>
    getStoredData(STORAGE_KEYS.LEARNED_WORDS, [])
  );
  const [reviewWords, setReviewWords] = useState(() =>
    getStoredData(STORAGE_KEYS.REVIEW_WORDS, [])
  );
  const [favoriteWords, setFavoriteWords] = useState(() =>
    getStoredData(STORAGE_KEYS.FAVORITE_WORDS, [])
  );
  const [mistakeQuestions, setMistakeQuestions] = useState(() =>
    getStoredData(STORAGE_KEYS.MISTAKE_QUESTIONS, [])
  );
  const [solvedQuestions, setSolvedQuestions] = useState(() =>
    getStoredData(STORAGE_KEYS.SOLVED_QUESTIONS, {})
  );
  const [examHistory, setExamHistory] = useState(() =>
    getStoredData(STORAGE_KEYS.EXAM_HISTORY, [])
  );
  const [studyMinutes, setStudyMinutes] = useState(() => getTodayStudyMinutes());
  const [streak, setStreak] = useState(() =>
    getStoredData(STORAGE_KEYS.STREAK_COUNT, 1)
  );

  // Sync to storage
  useEffect(() => {
    setStoredData(STORAGE_KEYS.COMPLETED_BLOCKS, completedBlocks);
  }, [completedBlocks]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.LEARNED_WORDS, learnedWords);
  }, [learnedWords]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.REVIEW_WORDS, reviewWords);
  }, [reviewWords]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.FAVORITE_WORDS, favoriteWords);
  }, [favoriteWords]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.MISTAKE_QUESTIONS, mistakeQuestions);
  }, [mistakeQuestions]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.SOLVED_QUESTIONS, solvedQuestions);
  }, [solvedQuestions]);

  useEffect(() => {
    setStoredData(STORAGE_KEYS.EXAM_HISTORY, examHistory);
  }, [examHistory]);

  // Handlers
  const handleToggleBlock = (blockKey) => {
    setCompletedBlocks((prev) => ({
      ...prev,
      [blockKey]: !prev[blockKey]
    }));
  };

  const handleToggleLearned = (wordId) => {
    if (learnedWords.includes(wordId)) {
      setLearnedWords(learnedWords.filter((id) => id !== wordId));
    } else {
      setLearnedWords([...learnedWords, wordId]);
      setReviewWords(reviewWords.filter((id) => id !== wordId));
    }
  };

  const handleToggleReview = (wordId) => {
    if (reviewWords.includes(wordId)) {
      setReviewWords(reviewWords.filter((id) => id !== wordId));
    } else {
      setReviewWords([...reviewWords, wordId]);
      setLearnedWords(learnedWords.filter((id) => id !== wordId));
    }
  };

  const handleToggleFavorite = (wordId) => {
    if (favoriteWords.includes(wordId)) {
      setFavoriteWords(favoriteWords.filter((id) => id !== wordId));
    } else {
      setFavoriteWords([...favoriteWords, wordId]);
    }
  };

  const handleSaveAnswer = (questionId, optionLabel) => {
    setSolvedQuestions((prev) => ({
      ...prev,
      [questionId]: optionLabel
    }));
  };

  const handleAddToMistakes = (questionId) => {
    if (!mistakeQuestions.includes(questionId)) {
      setMistakeQuestions((prev) => [...prev, questionId]);
    }
  };

  const handleRemoveFromMistakes = (questionId) => {
    setMistakeQuestions((prev) => prev.filter((id) => id !== questionId));
  };

  const handleRemoveReviewWord = (wordId) => {
    setReviewWords((prev) => prev.filter((id) => id !== wordId));
    if (!learnedWords.includes(wordId)) {
      setLearnedWords((prev) => [...prev, wordId]);
    }
  };

  const handleSaveExamResult = (result) => {
    setExamHistory((prev) => [...prev, result]);
  };

  const handleAddMinutes = (mins) => {
    const { minutes, streak: updatedStreak } = addStudyMinutes(mins);
    setStudyMinutes(minutes);
    setStreak(updatedStreak);
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-900 text-slate-100 overflow-hidden font-sans">
      {/* Top Navbar */}
      <Navbar
        streak={streak}
        studyMinutes={studyMinutes}
        targetMinutes={240}
        onOpenTimer={() => setIsTimerOpen(true)}
      />

      {/* Main Content Views */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {activeTab === 'roadmap' && (
          <RoadmapView
            completedBlocks={completedBlocks}
            onToggleBlock={handleToggleBlock}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'lessons' && <LessonsView />}

        {activeTab === 'vocab' && (
          <VocabularyView
            learnedWords={learnedWords}
            reviewWords={reviewWords}
            favoriteWords={favoriteWords}
            onToggleLearned={handleToggleLearned}
            onToggleReview={handleToggleReview}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeView
            solvedQuestions={solvedQuestions}
            onSaveAnswer={handleSaveAnswer}
            onAddToMistakes={handleAddToMistakes}
            onRemoveFromMistakes={handleRemoveFromMistakes}
          />
        )}

        {activeTab === 'exam' && (
          <ExamView
            onSaveExamResult={handleSaveExamResult}
            examHistory={examHistory}
            onAddToMistakes={handleAddToMistakes}
          />
        )}

        {activeTab === 'mistakes' && (
          <MistakeBookView
            mistakeQuestionIds={mistakeQuestions}
            reviewWordIds={reviewWords}
            onRemoveMistakeQuestion={handleRemoveFromMistakes}
            onRemoveReviewWord={handleRemoveReviewWord}
          />
        )}
      </main>

      {/* Bottom Mobile Tab Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mistakeCount={mistakeQuestions.length + reviewWords.length}
      />

      {/* 4-Hour Daily Pomodoro & Study Timer Modal */}
      <StudyTimerModal
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
        currentMinutes={studyMinutes}
        targetMinutes={240}
        onAddMinutes={handleAddMinutes}
      />
    </div>
  );
}

export default App;
