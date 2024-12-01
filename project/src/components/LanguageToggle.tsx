import React from 'react';
import { Languages } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { Language } from '../types';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useStore();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Languages className="w-5 h-5" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};