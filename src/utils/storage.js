// LocalStorage State Manager for YDS 70+ Sprint

const STORAGE_KEYS = {
  COMPLETED_BLOCKS: 'yds_completed_blocks',
  LEARNED_WORDS: 'yds_learned_words',
  REVIEW_WORDS: 'yds_review_words',
  FAVORITE_WORDS: 'yds_favorite_words',
  MISTAKE_QUESTIONS: 'yds_mistake_questions',
  SOLVED_QUESTIONS: 'yds_solved_questions',
  EXAM_HISTORY: 'yds_exam_history',
  STUDY_MINUTES: 'yds_study_minutes_today',
  LAST_STUDY_DATE: 'yds_last_study_date',
  STREAK_COUNT: 'yds_streak_count',
};

export const getStoredData = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.error('Storage read error:', e);
    return defaultValue;
  }
};

export const setStoredData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage write error:', e);
  }
};

export const getTodayDateKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// Study Minutes & Streak Manager
export const getTodayStudyMinutes = () => {
  const today = getTodayDateKey();
  const lastDate = getStoredData(STORAGE_KEYS.LAST_STUDY_DATE, '');
  if (lastDate !== today) {
    // Reset for new day
    return 0;
  }
  return getStoredData(STORAGE_KEYS.STUDY_MINUTES, 0);
};

export const addStudyMinutes = (minutes) => {
  const today = getTodayDateKey();
  const lastDate = getStoredData(STORAGE_KEYS.LAST_STUDY_DATE, '');
  let currentMinutes = 0;
  let streak = getStoredData(STORAGE_KEYS.STREAK_COUNT, 1);

  if (lastDate === today) {
    currentMinutes = getStoredData(STORAGE_KEYS.STUDY_MINUTES, 0);
  } else {
    // Check if yesterday or first time
    if (lastDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
      if (lastDate === yesterdayStr) {
        streak += 1;
      } else {
        streak = 1;
      }
    } else {
      streak = 1;
    }
    setStoredData(STORAGE_KEYS.LAST_STUDY_DATE, today);
    setStoredData(STORAGE_KEYS.STREAK_COUNT, streak);
  }

  const newTotal = currentMinutes + minutes;
  setStoredData(STORAGE_KEYS.STUDY_MINUTES, newTotal);
  return { minutes: newTotal, streak };
};

export { STORAGE_KEYS };
