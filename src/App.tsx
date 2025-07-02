import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      // Default to dark mode if no preference is set
      return true;
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-950 font-inter overflow-x-hidden`}>
      {/* Enhanced Dynamic background pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary floating elements */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full opacity-5">
          <div className="w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-400 rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-5">
          <div className="w-80 h-80 bg-gradient-to-br from-secondary-200 to-secondary-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-2xl animate-pulse-slow opacity-10"></div>
        
        {/* Additional floating elements for more dynamic feel */}
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full blur-2xl animate-float opacity-8" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-xl animate-pulse-slow opacity-6" style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-10 right-10 w-20 h-20 border border-primary-200 rounded-lg rotate-45 animate-rotate-slow opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border border-secondary-200 rounded-full animate-pulse opacity-15"></div>
      </div>

      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTABanner />
      <Contact />
      <Footer />
      <FloatingButtons onToggleDarkMode={() => setDarkMode((d) => !d)} darkMode={darkMode} />
    </div>
  );
}

export default App;