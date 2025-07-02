import React from 'react';
import { CheckCircle, Users, DollarSign, MapPin, Award, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Trustworthy & Experienced Team',
      description: 'Our skilled professionals have years of experience in safe handling and transportation of all types of goods.',
      stat: '10+ Years',
      statLabel: 'Experience',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Affordable & Clear Pricing',
      description: 'Transparent pricing with no hidden charges. We provide detailed quotes upfront so you know exactly what to expect.',
      stat: '100%',
      statLabel: 'Transparent',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Full Pakistan Coverage',
      description: 'Complete coverage across all major cities in Pakistan including remote areas with reliable service delivery.',
      stat: '50+',
      statLabel: 'Cities Covered',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Customer Satisfaction Guaranteed',
      description: 'We stand behind our service quality with a satisfaction guarantee and comprehensive insurance coverage.',
      stat: '99%',
      statLabel: 'Satisfaction Rate',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    'Licensed & Insured Company',
    'Professional Packing Materials',
    'Real-time Tracking Available',
    'Dedicated Customer Support',
    'Flexible Scheduling Options',
    'Emergency Moving Services'
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full blur-2xl opacity-25 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-heading">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Why Choose </span>
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Butt Movers</span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"> & </span>
              <span className="bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent">Packers</span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">?</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full mt-4 animate-gradient-shift bg-[length:200%_200%]"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-body max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of satisfied customers across Pakistan
          </p>
        </div>

        {/* Enhanced Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 border border-gray-100 hover:border-primary-200 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Floating decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-br ${reason.gradient} p-4 rounded-2xl transition-all duration-300 flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-heading group-hover:text-primary-600 transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-body mb-6 group-hover:text-gray-700 transition-colors duration-300">
                        {reason.description}
                      </p>
                      <div className="flex items-center space-x-3">
                        <span className={`text-3xl font-bold bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}>
                          {reason.stat}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">{reason.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Features List */}
        <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary-100 to-primary-100 rounded-full blur-2xl opacity-15"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-heading">
                Additional Benefits You'll Love
              </h3>
              <p className="text-gray-600 leading-body max-w-2xl mx-auto">
                We go above and beyond to ensure your moving experience is smooth and hassle-free
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-gray-100 hover:border-primary-200 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Testimonial */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto border-l-4 border-secondary-500 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full blur-2xl opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-secondary-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-body mb-6 font-medium">
                "Exceptional service! The team was professional, careful with our belongings, and completed our house move on time and within budget. Highly recommended!"
              </blockquote>
              <cite className="text-gray-600 font-semibold">- Ahmad Khan, Satisfied Customer from Lahore</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;