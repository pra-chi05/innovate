import React, { useEffect, useState, useRef } from 'react';
import { 
  Home, 
  Truck, 
  Scale, 
  Repeat, 
  Leaf, 
  Factory, 
  Zap, 
  Droplets,
  Wind,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const WasteFlow = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  const flowSteps = [
    {
      id: 1,
      title: 'Collection',
      icon: Home,
      description: 'Waste collected from 3M+ households and 50K+ commercial establishments',
      stats: '11,200 tonnes/day',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 2,
      title: 'Transportation',
      icon: Truck,
      description: 'GPS-tracked fleet of 2,500+ vehicles transport waste to processing facilities',
      stats: '2,500+ vehicles',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 3,
      title: 'Weighing & Sorting',
      icon: Scale,
      description: 'Automated weighbridges and AI-powered sorting segregate waste by type',
      stats: '98% accuracy',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-500/20 to-amber-500/20',
    },
    {
      id: 4,
      title: 'Recyclables',
      icon: Repeat,
      description: 'Paper, plastic, metal, and glass sent to recycling facilities',
      stats: '2,200 T/day',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 5,
      title: 'Composting',
      icon: Leaf,
      description: 'Organic waste converted to nutrient-rich compost and bio-manure',
      stats: '3,800 T/day',
      color: 'from-lime-500 to-green-600',
      bgColor: 'from-lime-500/20 to-green-600/20',
    },
    {
      id: 6,
      title: 'Biogas Generation',
      icon: Wind,
      description: 'Anaerobic digestion of organic waste produces methane for power',
      stats: '45 MW capacity',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      id: 7,
      title: 'RDF Production',
      icon: Factory,
      description: 'Non-recyclable dry waste processed into Refuse Derived Fuel',
      stats: '2,400 T/day',
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-500/20 to-orange-600/20',
    },
    {
      id: 8,
      title: 'Waste-to-Energy',
      icon: Zap,
      description: 'Incineration plants convert waste to electricity for the grid',
      stats: '100 MW output',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-400/20 to-orange-500/20',
    },
    {
      id: 9,
      title: 'Treated Water',
      icon: Droplets,
      description: 'Process water treated and recycled for facility operations',
      stats: '2M liters/day',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-400/20 to-indigo-500/20',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleSteps((prev) => [...new Set([...prev, index])]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    const steps = document.querySelectorAll('.flow-step');
    steps.forEach((step) => observer.observe(step));

    return () => {
      steps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Waste-to-Energy Flow Process
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Complete journey of waste from collection to energy generation - 
            transforming 11,200 tonnes of daily waste into valuable resources
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              
              return (
                <React.Fragment key={step.id}>
                  <div
                    data-index={index}
                    className={`flow-step relative bg-gradient-to-br ${step.bgColor} backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-white/30 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-delhi-saffron to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-xl font-semibold mb-2 text-center">
                      {step.title}
                    </h3>

                    {/* Stats Badge */}
                    <div className="flex justify-center mb-3">
                      <span className={`inline-block bg-gradient-to-r ${step.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {step.stats}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow (except for last items in rows) */}
                    {(index + 1) % 3 !== 0 && index !== flowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-delhi-saffron/30 blur-xl rounded-full"></div>
                          <ArrowRight className="relative w-8 h-8 text-delhi-saffron drop-shadow-[0_0_10px_rgba(255,153,51,0.8)] animate-pulse" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                    
                    {/* Down Arrow for end of rows */}
                    {(index + 1) % 3 === 0 && index < flowSteps.length - 3 && (
                      <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="relative rotate-90">
                          <div className="absolute inset-0 bg-delhi-saffron/30 blur-xl rounded-full"></div>
                          <ArrowRight className="relative w-8 h-8 text-delhi-saffron drop-shadow-[0_0_10px_rgba(255,153,51,0.8)] animate-pulse" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center">
              <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">68%</div>
              <div className="text-gray-300 text-sm">Waste Diverted</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 text-center">
              <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">145MW</div>
              <div className="text-gray-300 text-sm">Total Power</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 text-center">
              <Repeat className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">2,200T</div>
              <div className="text-gray-300 text-sm">Daily Recycling</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center">
              <Leaf className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">3,800T</div>
              <div className="text-gray-300 text-sm">Compost/Day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteFlow;
