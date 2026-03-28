export interface UserProfile {
  name: string;
  avatar: string | null; // base64 string
}

const PROFILE_KEY = 'math-adventure-profile';

export const getProfile = (): UserProfile => {
  const saved = localStorage.getItem(PROFILE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse profile', e);
    }
  }
  return { name: '', avatar: null };
};

export const saveProfile = (profile: UserProfile): void => {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
};
