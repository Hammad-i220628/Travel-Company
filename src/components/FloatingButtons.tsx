import React from 'react';
import { MessageCircle, Moon, Sun } from 'lucide-react';

interface FloatingButtonsProps {
  onToggleDarkMode: () => void;
  darkMode: boolean;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onToggleDarkMode, darkMode }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 items-end">
      {/* Dark Mode Toggle Button */}
      <button
        onClick={onToggleDarkMode}
        className="bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-yellow-300 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-125 group mb-2 focus:outline-none border border-gray-300 dark:border-gray-700"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="h-6 w-6 group-hover:animate-pulse" /> : <Moon className="h-6 w-6 group-hover:animate-pulse" />}
      </button>
      {/* Enhanced WhatsApp Button */}
      <a
        href="https://wa.me/923068954966"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-125 group animate-bounce-gentle"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </a>
    </div>
  );
};

export default FloatingButtons;