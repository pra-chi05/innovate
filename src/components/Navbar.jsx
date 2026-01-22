import React from 'react';
import { Menu, LayoutDashboard } from 'lucide-react';

const Navbar = ({ scrollY }) => {
  const isScrolled = scrollY > 50;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-delhi-saffron to-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl tracking-tight">
              DELHI REJUVENATION
            </h1>
            <p className="text-gray-400 text-xs">Smart City Initiative</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-delhi-saffron transition-colors">
            Home
          </a>
          <a href="#features" className="text-gray-300 hover:text-delhi-saffron transition-colors">
            Features
          </a>
          <a href="#map" className="text-gray-300 hover:text-delhi-saffron transition-colors">
            Map
          </a>
          <a href="#initiatives" className="text-gray-300 hover:text-delhi-saffron transition-colors">
            Initiatives
          </a>
          <a href="#dashboard" className="bg-gradient-to-r from-delhi-saffron to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </a>
        </div>

        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
