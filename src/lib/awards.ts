import { getProgress, saveProgress } from "./progress";

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: number;
}

const BADGES: Badge[] = [
  { id: 'first_star', name: 'First Star!', description: 'Earned your very first star.', icon: '⭐' },
  { id: 'topic_master', name: 'Topic Master', description: 'Completed all lessons in a topic.', icon: '🏆' },
  { id: 'perfect_score', name: 'Perfect 10', description: 'Got 10/10 in a practice session.', icon: '🎯' },
  { id: 'streak_master', name: 'Streak Master', description: 'Maintained a 3-day learning streak!', icon: '🔥' },
  { id: 'math_ninja', name: 'Math Ninja', description: 'Earned 50 stars.', icon: '🥷' },
];

export function getBadges(): Badge[] {
  const saved = localStorage.getItem('math_app_badges');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Merge with default badges to ensure new ones appear
      return BADGES.map(b => {
        const found = parsed.find((p: Badge) => p.id === b.id);
        return found ? { ...b, unlockedAt: found.unlockedAt } : b;
      });
    } catch (e) {
      return BADGES;
    }
  }
  return BADGES;
}

export function saveBadges(badges: Badge[]) {
  localStorage.setItem('math_app_badges', JSON.stringify(badges));
}

export function checkNewAwards() {
  const progress = getProgress();
  const currentBadges = getBadges();
  const newlyUnlocked: Badge[] = [];

  // Check First Star
  if (progress.stars > 0 && !isUnlocked(currentBadges, 'first_star')) {
    unlock(currentBadges, 'first_star', newlyUnlocked);
  }

  // Check Streak Master (3 days) - using 3 for demo/easy win
  if (progress.streak >= 3 && !isUnlocked(currentBadges, 'streak_master')) {
    unlock(currentBadges, 'streak_master', newlyUnlocked);
  }

  // Check Math Ninja (50 stars)
  if (progress.stars >= 50 && !isUnlocked(currentBadges, 'math_ninja')) {
    unlock(currentBadges, 'math_ninja', newlyUnlocked);
  }

  if (newlyUnlocked.length > 0) {
    saveBadges(currentBadges);
    return newlyUnlocked;
  }
  return [];
}

function isUnlocked(badges: Badge[], id: string) {
  return !!badges.find(b => b.id === id)?.unlockedAt;
}

function unlock(badges: Badge[], id: string, newlyUnlocked: Badge[]) {
  const badge = badges.find(b => b.id === id);
  if (badge) {
    badge.unlockedAt = Date.now();
    newlyUnlocked.push(badge);
  }
}
