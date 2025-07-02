import React from 'react';
import { ArrowRight, Shield, Clock, Star, Truck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-yellow-50/30 dark:from-gray-900/80 dark:via-gray-950 dark:to-gray-900/80"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-900 rounded-2xl rotate-12 animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-secondary-200 to-secondary-300 dark:from-secondary-800 dark:to-secondary-900 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-primary-200 dark:border-primary-800 rounded-xl rotate-45 animate-rotate-slow opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-secondary-300 to-primary-300 dark:from-secondary-900 dark:to-primary-900 rounded-2xl animate-bounce-gentle opacity-50"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-200 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Star className="h-4 w-4 text-secondary-500" />
            <span>Trusted by 1000+ Happy Customers</span>
            <Award className="h-4 w-4 text-primary-500" />
          </div>

          {/* Enhanced Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-heading">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Professional 
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-300 dark:to-primary-400 bg-clip-text text-transparent animate-glow">
                Packers
              </span>
              <span className="text-gray-900"> & </span>
              <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 dark:from-secondary-300 dark:to-secondary-400 bg-clip-text text-transparent">
                Movers
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-300 dark:to-secondary-300 bg-clip-text text-transparent leading-body">
                Safe. Fast. Reliable.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-body max-w-4xl mx-auto">
                Complete House, Office & Industrial Shifting Solutions across Pakistan
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 dark:from-primary-400 dark:to-primary-500 dark:hover:from-primary-500 dark:hover:to-primary-600 text-white dark:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center space-x-2 animate-glow"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <a
              href="tel:+923068954966"
              className="group border-2 border-gray-300 dark:border-gray-700 hover:border-primary-500 bg-white dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center space-x-2">
                <Truck className="h-5 w-5 group-hover:animate-bounce" />
                <span>Call: +92 306 895 4966</span>
              </span>
            </a>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
            <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">100% Safe & Secure</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 dark:from-secondary-400 dark:to-secondary-500 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 p-2 rounded-lg">
                <Star className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">5-Star Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-primary-300 dark:border-primary-700 rounded-full flex justify-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg">
          <div className="w-1 h-3 bg-gradient-to-b from-primary-500 to-secondary-500 dark:from-primary-300 dark:to-secondary-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;