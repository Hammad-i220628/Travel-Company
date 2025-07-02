import React from 'react';
import { Home, Building2, Package, Truck, MapPin, DollarSign, Shield, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Complete House Shifting Solution',
      description: 'Professional packing of valuable/delicate items with trained loading & unloading team. Vehicles: Shahzor, Suzuki Pickup, Mazda.',
      features: ['Professional packing', 'Trained team', 'Multiple vehicle options'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      title: 'Industry Material Relocation',
      description: 'Safe transport of machinery, tools, raw material with city-to-city delivery and tracking. Vehicle customization as per goods.',
      features: ['Machinery transport', 'City-to-city delivery', 'Custom solutions'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Package,
      title: 'Fragile & Valuable Items Handling',
      description: 'Glass, electronics, furniture with bubble wrap, cartons and dedicated team for fragile items protection.',
      features: ['Bubble wrap protection', 'Dedicated team', 'Special handling'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      title: 'Flexible Transport Options',
      description: 'Small to large vehicles: Suzuki, Pickup, Container for homes, offices, industries with flexible scheduling.',
      features: ['Multiple vehicle sizes', 'Flexible scheduling', 'All purposes covered'],
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: MapPin,
      title: 'Door-to-Door Pickup & Delivery',
      description: 'Safe pickup from source to final destination with time-bound, stress-free delivery service.',
      features: ['Door-to-door service', 'Time-bound delivery', 'Stress-free process'],
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: DollarSign,
      title: 'Reliable & Affordable Pricing',
      description: 'Competitive pricing with no hidden charges and 24/7 customer support for complete transparency.',
      features: ['Competitive rates', 'No hidden charges', '24/7 support'],
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'City-to-City & Within City Service',
      description: 'Complete coverage across Pakistan including Karachi, Lahore, Islamabad, Multan with both industrial and residential services.',
    },
    {
      icon: Clock,
      title: 'Express & Scheduled Moving',
      description: 'Both urgent express moves and scheduled relocations with flexible timing to meet your specific requirements.',
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-2xl opacity-50 animate-pulse dark:from-primary-900 dark:to-secondary-900"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-secondary-100 to-primary-100 rounded-full blur-xl opacity-40 animate-float dark:from-secondary-900 dark:to-primary-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-heading">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">Our </span>
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-300 dark:to-primary-400 bg-clip-text text-transparent">Professional</span>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent"> Services</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full mt-4 animate-gradient-shift bg-[length:200%_200%] dark:from-primary-300 dark:via-secondary-300 dark:to-primary-300"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-body max-w-3xl mx-auto">
            Comprehensive moving and packing solutions tailored to meet all your relocation needs
          </p>
        </div>

        {/* Enhanced Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-400 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`bg-gradient-to-br ${service.gradient} dark:from-primary-400 dark:to-primary-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-heading group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-body mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-200">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} dark:from-primary-400 dark:to-primary-500 rounded-full animate-pulse`}></div>
                        <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-secondary-500 dark:border-secondary-400 hover:border-primary-500 dark:hover:border-primary-400 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 dark:from-secondary-400 dark:to-secondary-500 group-hover:from-primary-500 group-hover:to-primary-600 p-4 rounded-xl transition-all duration-300 shadow-lg group-hover:scale-110">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-heading group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-body group-hover:text-gray-700 dark:group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 dark:from-primary-400 dark:via-primary-500 dark:to-secondary-400 rounded-3xl p-8 md:p-12 text-white dark:text-gray-900 relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-gray-900/20 dark:to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent dark:from-gray-900/10 dark:to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent dark:from-gray-900/10 dark:to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-heading">
                Need a Custom Moving Solution?
              </h3>
              <p className="text-lg mb-8 opacity-90 leading-body max-w-2xl mx-auto">
                Every move is unique. Contact us for a personalized quote tailored to your specific requirements.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;