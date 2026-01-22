import React from 'react';
import { Flag, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Multiple Background Images with Different Opacities */}
      <div className="absolute inset-0">
        {/* Main Background - Delhi Cityscape */}
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80"
            alt="Delhi Cityscape"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1581093458791-9f3c3250e35b?w=1920&q=80';
            }}
          />
        </div>
        
        {/* Secondary Background - Waste Management */}
        <div className="absolute inset-0 opacity-8">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80"
            alt="Waste Management"
            className="w-full h-full object-cover mix-blend-overlay"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-delhi-saffron/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-delhi-saffron/20 to-orange-600/20 border border-delhi-saffron/30 text-delhi-saffron px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
              <Flag className="w-4 h-4" />
              Government of India Initiative
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in drop-shadow-2xl">
            Delhi's Unified
            <span className="block bg-gradient-to-r from-delhi-saffron via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
              Waste-to-Energy Platform
            </span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-slide-up leading-relaxed drop-shadow-lg">
            Revolutionizing waste management through circular economy principles. Real-time tracking,
            marketplace integration, predictive analytics, and blockchain traceability for a zero-waste Delhi.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="#dashboard" className="bg-gradient-to-r from-delhi-saffron to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all transform">
              Explore Dashboard
            </a>
            <a href="#initiatives" className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-white/50 transition-all">
              View Projects
            </a>
          </div>

          {/* Feature Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-delhi-saffron mb-1">11,200T</div>
              <div className="text-gray-400 text-sm">Daily Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">145MW</div>
              <div className="text-gray-400 text-sm">Power Output</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">68%</div>
              <div className="text-gray-400 text-sm">Waste Diverted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">2,500+</div>
              <div className="text-gray-400 text-sm">Fleet Vehicles</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-delhi-saffron" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
