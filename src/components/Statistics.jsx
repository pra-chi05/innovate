import React, { useEffect, useState, useRef } from 'react';
import { Trash2, Zap, TreePine, DollarSign } from 'lucide-react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: '3,200T', label: 'Daily Waste Processed', color: 'from-green-400 to-emerald-600', icon: Trash2 },
    { value: '850MW', label: 'Energy Generated', color: 'from-yellow-400 to-orange-600', icon: Zap },
    { value: '68%', label: 'Waste Diverted from Landfills', color: 'from-delhi-saffron to-orange-600', icon: TreePine },
    { value: '₹420Cr', label: 'Revenue Generated', color: 'from-purple-400 to-pink-600', icon: DollarSign },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className={`w-8 h-8 mb-3 bg-gradient-to-r ${stat.color} text-white p-1.5 rounded-lg`} />
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
