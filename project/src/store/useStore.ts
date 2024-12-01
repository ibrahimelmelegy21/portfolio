import { create } from 'zustand';
import { Language } from '../types';

interface Store {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useStore = create<Store>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  language: 'en',
  setLanguage: (language) => set({ language }),
}));