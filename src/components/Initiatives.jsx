import React, { useState } from 'react';
import { Zap, Wind, Smartphone, Factory, Truck, ArrowRightLeft, Link2, Bot } from 'lucide-react';

const Initiatives = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const projects = {
    ongoing: [
      {
        title: 'Ghazipur WTE Plant Expansion',
        status: 'In Progress',
        progress: 68,
        budget: '₹1,850 Cr',
        completion: 'Dec 2026',
        category: 'Waste-to-Energy',
        icon: Zap,
      },
      {
        title: 'Biogas Plant Network Rollout',
        status: 'In Progress',
        progress: 45,
        budget: '₹680 Cr',
        completion: 'Mar 2027',
        category: 'Biogas',
        icon: Wind,
      },
      {
        title: 'Smart Bin IoT Integration',
        status: 'In Progress',
        progress: 82,
        budget: '₹420 Cr',
        completion: 'Jun 2026',
        category: 'IoT',
        icon: Smartphone,
      },
      {
        title: 'RDF Production Facilities',
        status: 'In Progress',
        progress: 56,
        budget: '₹950 Cr',
        completion: 'Sep 2026',
        category: 'RDF',
        icon: Factory,
      },
    ],
    completed: [
      {
        title: 'GPS Fleet Tracking System',
        status: 'Completed',
        progress: 100,
        budget: '₹180 Cr',
        completion: 'Jan 2026',
        category: 'Logistics',
        icon: Truck,
      },
      {
        title: 'Waste Marketplace Platform',
        status: 'Completed',
        progress: 100,
        budget: '₹95 Cr',
        completion: 'Nov 2025',
        category: 'Digital',
        icon: ArrowRightLeft,
      },
    ],
    planned: [
      {
        title: 'Blockchain Traceability System',
        status: 'Planned',
        progress: 0,
        budget: '₹240 Cr',
        completion: 'Dec 2027',
        category: 'Blockchain',
        icon: Link2,
      },
      {
        title: 'AI Waste Segregation Units',
        status: 'Planned',
        progress: 0,
        budget: '₹580 Cr',
        completion: 'Mar 2028',
        category: 'AI/ML',
        icon: Bot,
      },
    ],
  };

  return (
    <section id="initiatives" className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Infrastructure Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Building Delhi's waste-to-energy ecosystem for a circular economy future
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1 inline-flex">
            {['ongoing', 'completed', 'planned'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all capitalize ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-delhi-saffron to-orange-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab} ({projects[tab].length})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects[activeTab].map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-delhi-saffron to-orange-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                      <span className="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full mt-1">
                        {project.category}
                      </span>
                    </div>
                  </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-500/20 text-green-400'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-purple-500/20 text-purple-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-delhi-saffron font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-3 bg-gradient-to-r from-delhi-saffron to-orange-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Budget</div>
                    <div className="text-white font-semibold">{project.budget}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Target Date</div>
                    <div className="text-white font-semibold">{project.completion}</div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
