import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { MobileMenu } from './MobileMenu';
import { useStore } from '../store/useStore';
import { translations } from '../data/translations';

export const Navbar: React.FC = () => {
  const { language } = useStore();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Ibrahim El-Meligy</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {value}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <MobileMenu
              isOpen={isMenuOpen}
              onOpen={() => setIsMenuOpen(true)}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};