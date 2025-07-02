import React from 'react';
import { MessageCircle, ArrowRight, Truck, Clock, Shield } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/20 rounded-2xl rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-white/15 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white space-y-10">
          {/* Enhanced Main Heading */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-heading">
              Planning to Move? <span className="text-secondary-200 animate-pulse">We've Got Your Back!</span>
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-body max-w-3xl mx-auto font-medium">
              Don't let moving stress you out. Our expert team is ready to handle everything from packing to delivery with complete care and professionalism.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://wa.me/923068954966"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center space-x-3"
            >
              <MessageCircle className="h-5 w-5 group-hover:animate-bounce" />
              <span>WhatsApp Us</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          {/* Enhanced Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/20">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-4 mx-auto w-fit group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <Clock className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Available Support</div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-4 mx-auto w-fit group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <Shield className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-2xl font-bold mb-2">Free</div>
              <div className="text-sm opacity-80">Quotation & Survey</div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-4 mx-auto w-fit group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                <Truck className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-2xl font-bold mb-2">Same Day</div>
              <div className="text-sm opacity-80">Response Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;