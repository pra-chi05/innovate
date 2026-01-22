import React, { useEffect, useState, useRef } from 'react';
import { Truck, ArrowRightLeft, BarChart3, Link2, Zap, Database, ChevronRight } from 'lucide-react';
import FeatureModal from './FeatureModal';

const Features = ({ scrollY }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const sectionRef = useRef(null);

  const features = [
    {
      title: 'Live Waste Transport Tracking',
      description: 'Real-time GPS-enabled monitoring of waste collection vehicles across Delhi with route optimization, delay analytics, and carbon footprint tracking.',
      icon: Truck,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Digital Waste Marketplace',
      description: 'Transaction hub for trading RDF, recyclables, compost, bio-oil, and syngas with real-time pricing trends and secure payment integration.',
      icon: ArrowRightLeft,
      color: 'from-green-500 to-emerald-500',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'AI-based forecasting for waste inflow patterns, resource requirements, and downtime risks with configurable dashboards and alerts.',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Blockchain Waste Passport',
      description: 'Digital traceability for each waste consignment showing source, transport path, processing outcome, and environmental credits earned.',
      icon: Link2,
      color: 'from-orange-500 to-red-500',
      gradient: 'from-orange-500/20 to-red-500/20',
    },
    {
      title: 'Waste-to-Energy Dashboard',
      description: 'Real-time monitoring of thermal plants, biogas facilities, and RDF production with energy output metrics and efficiency indicators.',
      icon: Zap,
      color: 'from-amber-500 to-yellow-500',
      gradient: 'from-amber-500/20 to-yellow-500/20',
    },
    {
      title: 'Data Management Hub',
      description: 'Centralized repository with APIs for operator logs, contracts, compliance reports, historical trends, and regulatory documentation.',
      icon: Database,
      color: 'from-cyan-500 to-blue-600',
      gradient: 'from-cyan-500/20 to-blue-600/20',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
      <section id="features" ref={sectionRef} className="py-20 px-6">
        <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Platform Capabilities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end waste management solutions for Delhi's circular economy transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card group bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 cursor-pointer ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  transform: `translateY(${Math.max(0, (scrollY - 800) / 50 - index * 5)}px)`,
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <button 
                  onClick={() => setSelectedFeature(feature)}
                  className="mt-4 flex items-center text-delhi-saffron hover:text-orange-400 transition-colors"
                >
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default Features;
