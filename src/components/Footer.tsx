import React from 'react';
import { Truck, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const services = [
    'House Shifting',
    'Office Relocation',
    'Industrial Moving',
    'Fragile Items',
    'City to City',
    'Packing Services'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary-500/10 to-primary-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Enhanced Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold leading-heading bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Butt Movers & Packers
                </h3>
                <p className="text-sm text-gray-400 font-medium">Safe Shifting & Goods Transport</p>
              </div>
            </div>
            <p className="text-gray-300 leading-body">
              Your trusted partner for safe, reliable, and affordable moving services across Pakistan. 
              We handle your belongings with the utmost care and professionalism.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 leading-heading bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 leading-heading bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-gray-100 transition-colors duration-300 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 leading-heading bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300">+92 306 895 4966</div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300">info@buttmovers.com</div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300">
                  Main Boulevard, Gulberg III<br />
                  Lahore, Punjab, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Butt Movers & Packers. All Rights Reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;