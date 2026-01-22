import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const LiveDashboard = () => {
  const [liveData, setLiveData] = useState({
    activeVehicles: 1847,
    wasteCollected: 8456,
    powerGenerated: 87,
    efficiency: 94,
  });

  const [chartData, setChartData] = useState([
    { time: '00:00', value: 85 },
    { time: '04:00', value: 82 },
    { time: '08:00', value: 92 },
    { time: '12:00', value: 88 },
    { time: '16:00', value: 95 },
    { time: '20:00', value: 87 },
  ]);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        activeVehicles: prev.activeVehicles + Math.floor(Math.random() * 10) - 5,
        wasteCollected: prev.wasteCollected + Math.floor(Math.random() * 50),
        powerGenerated: Math.min(100, prev.powerGenerated + Math.random() * 2 - 1),
        efficiency: Math.min(100, Math.max(85, prev.efficiency + Math.random() * 2 - 1)),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      title: 'Active Vehicles',
      value: liveData.activeVehicles,
      unit: '',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500',
      trend: '+12',
      isLive: true,
    },
    {
      title: 'Waste Collected Today',
      value: liveData.wasteCollected,
      unit: 'T',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      trend: '+18%',
      isLive: true,
    },
    {
      title: 'Power Output',
      value: Math.round(liveData.powerGenerated),
      unit: 'MW',
      icon: CheckCircle,
      color: 'from-yellow-500 to-orange-500',
      trend: '+5%',
      isLive: true,
    },
    {
      title: 'System Efficiency',
      value: Math.round(liveData.efficiency),
      unit: '%',
      icon: AlertCircle,
      color: 'from-purple-500 to-pink-500',
      trend: 'Normal',
      isLive: true,
    },
  ];

  return (
    <section id="dashboard" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">LIVE DASHBOARD</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time Operations
          </h2>
          <p className="text-gray-400 text-lg">
            Live monitoring of Delhi's waste management ecosystem
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Live Indicator */}
                {metric.isLive && (
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-red-400 font-medium">LIVE</span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.value.toLocaleString()}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">{metric.unit}</span>
                </div>

                {/* Title */}
                <div className="text-gray-400 text-sm mb-3">{metric.title}</div>

                {/* Trend */}
                <div className={`inline-flex items-center gap-1 ${
                  metric.trend.includes('+') ? 'text-green-400' : 'text-blue-400'
                } text-xs font-medium bg-white/5 px-2 py-1 rounded-full`}>
                  {metric.trend.includes('+') && <TrendingUp className="w-3 h-3" />}
                  <span>{metric.trend}</span>
                </div>

                {/* Animated Background */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>

        {/* Live Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Area Chart */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">Power Generation</h3>
                <p className="text-gray-400 text-sm">Last 24 hours</p>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155', 
                    borderRadius: '8px' 
                  }}
                  labelStyle={{ color: '#f3f4f6' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#f59e0b" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">Waste Inflow Rate</h3>
                <p className="text-gray-400 text-sm">Tonnes per hour</p>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <XAxis dataKey="time" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155', 
                    borderRadius: '8px' 
                  }}
                  labelStyle={{ color: '#f3f4f6' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-400" />
            <div>
              <div className="text-white font-semibold">All Systems Operational</div>
              <div className="text-green-400 text-sm">No critical alerts</div>
            </div>
          </div>
          <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 flex items-center gap-3">
            <Activity className="w-8 h-8 text-blue-400" />
            <div>
              <div className="text-white font-semibold">2,847 Active Sensors</div>
              <div className="text-blue-400 text-sm">Monitoring 24/7</div>
            </div>
          </div>
          <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-4 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            <div>
              <div className="text-white font-semibold">98.5% Uptime</div>
              <div className="text-purple-400 text-sm">This month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;
