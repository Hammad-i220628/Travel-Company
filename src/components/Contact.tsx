import React from 'react';
import { MapPin, MessageCircle, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full blur-2xl opacity-25 animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-heading">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Get in </span>
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Touch</span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"> with Us</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full mt-4 animate-gradient-shift bg-[length:200%_200%]"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-body max-w-3xl mx-auto">
            Ready to move? Contact us for a free consultation and personalized quote for your moving needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary-100 to-primary-100 rounded-full blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-heading">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">WhatsApp</div>
                      <div className="text-gray-600">+92 306 895 4966</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">anasbutt678888@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">Opposite BAHRIA TOWN phase 1 to 6<br />near Bilal masjid, oppsite, Rawalpindi, 46000</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Working Hours</div>
                      <div className="text-gray-600">24/7 Available<br />Emergency Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Map Section with Background Image */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-100 to-secondary-100 rounded-full blur-2xl opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-heading">Our Location</h3>
              <div 
                className="relative h-64 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 group overflow-hidden shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://www.google.com/maps/place/Butt+Goods+Transport+Company/@33.5454463,73.0987003,14.77z/data=!4m5!3m4!1s0x38dfed838e7a9b5d:0x769dcca19cef130c!8m2!3d33.5406972!4d73.1125331?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/image.png)' }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-4 mx-auto w-fit shadow-lg group-hover:bg-white/30 transition-all duration-300">
                      <MapPin className="h-12 w-12 text-white mx-auto drop-shadow-lg" />
                    </div>
                    <p className="text-lg font-bold drop-shadow-lg">Click to Open Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;