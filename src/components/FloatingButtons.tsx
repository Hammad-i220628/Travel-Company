import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
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