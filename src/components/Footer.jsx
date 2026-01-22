import React from 'react';
import { Smartphone, Twitter, Facebook, Flag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-white/10 py-12 px-6 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-delhi-saffron to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">DELHI REJUVENATION</h3>
                <p className="text-gray-400 text-xs">Smart City Initiative</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-md">
              A Government of India initiative to transform Delhi into a sustainable,
              smart, and citizen-friendly metropolis through technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Smartphone className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#dashboard" className="text-gray-400 hover:text-delhi-saffron transition-colors text-sm">Dashboard</a></li>
              <li><a href="#initiatives" className="text-gray-400 hover:text-delhi-saffron transition-colors text-sm">Projects</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-delhi-saffron transition-colors text-sm">Capabilities</a></li>
              <li><a href="#map" className="text-gray-400 hover:text-delhi-saffron transition-colors text-sm">Interactive Map</a></li>
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Government</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-delhi-saffron transition-colors text-sm">Delhi Govt Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-delhi-saffron transition-colors text-sm">Smart Cities Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-delhi-saffron transition-colors text-sm">MoHUA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-delhi-saffron transition-colors text-sm">Digital India</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Delhi Rejuvenation Initiative. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

        {/* Government Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Flag className="w-5 h-5 text-delhi-saffron" />
            <span className="text-gray-300 text-sm">An initiative by the Government of India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
