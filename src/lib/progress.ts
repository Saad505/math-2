export interface UserProgress {
  completedLessons: string[]; // Array of lesson IDs
  stars: number;
  streak: number;
  lastActivityDate: string | null; // ISO string (YYYY-MM-DD)
}

const PROGRESS_KEY = "math_app_progress";

export function getProgress(): UserProgress {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        completedLessons: parsed.completedLessons || [],
        stars: parsed.stars || 0,
        streak: parsed.streak || 0,
        lastActivityDate: parsed.lastActivityDate || null
      };
    } catch (e) {
      console.error("Failed to parse progress", e);
    }
  }
  return { completedLessons: [], stars: 0, streak: 0, lastActivityDate: null };
}

export function saveProgress(progress: UserProgress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function completeLesson(lessonId: string, starsEarned: number) {
  const progress = getProgress();
  
  // Track Streak
  const today = new Date().toISOString().split('T')[0];
  const lastDate = progress.lastActivityDate;

  if (lastDate !== today) {
    if (lastDate) {
      const last = new Date(lastDate);
      const curr = new Date(today);
      const diffTime = Math.abs(curr.getTime() - last.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        progress.streak += 1;
      } else if (diffDays > 1) {
        progress.streak = 1;
      }
    } else {
      progress.streak = 1;
    }
    progress.lastActivityDate = today;
  }

  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    progress.stars += starsEarned;
  }
  
  saveProgress(progress);
}

export function getCompletedLessons(): string[] {
  return getProgress().completedLessons;
}

export function resetProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}
