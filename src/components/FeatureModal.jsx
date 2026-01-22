import React from 'react';
import { X, TrendingUp, Users, MapPin, Clock } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FeatureModal = ({ feature, onClose }) => {
  if (!feature) return null;

  // Sample data for different features
  const getChartData = (featureTitle) => {
    switch (featureTitle) {
      case 'Live Waste Transport Tracking':
        return {
          lineData: [
            { month: 'Jan', trips: 2400, efficiency: 85 },
            { month: 'Feb', trips: 2600, efficiency: 87 },
            { month: 'Mar', trips: 2800, efficiency: 89 },
            { month: 'Apr', trips: 3100, efficiency: 91 },
            { month: 'May', trips: 3300, efficiency: 92 },
            { month: 'Jun', trips: 3500, efficiency: 94 },
          ],
          pieData: [
            { name: 'On Time', value: 85, color: '#10b981' },
            { name: 'Delayed', value: 12, color: '#f59e0b' },
            { name: 'In Transit', value: 3, color: '#3b82f6' },
          ],
        };
      case 'Digital Waste Marketplace':
        return {
          barData: [
            { product: 'RDF', sales: 450, revenue: 180 },
            { product: 'Compost', sales: 380, revenue: 150 },
            { product: 'Recyclables', sales: 520, revenue: 280 },
            { product: 'Bio-oil', sales: 220, revenue: 320 },
          ],
          areaData: [
            { month: 'Jan', revenue: 420 },
            { month: 'Feb', revenue: 480 },
            { month: 'Mar', revenue: 550 },
            { month: 'Apr', revenue: 630 },
            { month: 'May', revenue: 720 },
            { month: 'Jun', revenue: 850 },
          ],
        };
      case 'Predictive Analytics Engine':
        return {
          lineData: [
            { week: 'W1', actual: 2800, predicted: 2750 },
            { week: 'W2', actual: 2900, predicted: 2880 },
            { week: 'W3', actual: 3100, predicted: 3050 },
            { week: 'W4', actual: 3200, predicted: 3180 },
          ],
          accuracy: 96.5,
        };
      case 'Blockchain Waste Passport':
        return {
          pieData: [
            { name: 'Verified', value: 92, color: '#10b981' },
            { name: 'Pending', value: 6, color: '#f59e0b' },
            { name: 'Failed', value: 2, color: '#ef4444' },
          ],
          transactions: 45680,
        };
      case 'Waste-to-Energy Dashboard':
        return {
          areaData: [
            { time: '00:00', power: 85 },
            { time: '04:00', power: 82 },
            { time: '08:00', power: 95 },
            { time: '12:00', power: 98 },
            { time: '16:00', power: 96 },
            { time: '20:00', power: 92 },
          ],
          capacity: '100 MW',
        };
      default:
        return {
          lineData: [
            { month: 'Jan', value: 400 },
            { month: 'Feb', value: 450 },
            { month: 'Mar', value: 520 },
            { month: 'Apr', value: 580 },
            { month: 'May', value: 650 },
            { month: 'Jun', value: 720 },
          ],
        };
    }
  };

  const chartData = getChartData(feature.title);
  const Icon = feature.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
        {/* Header */}
        <div className={`relative bg-gradient-to-r ${feature.color} p-8`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
              <p className="text-white/80 mt-1">Detailed Analytics & Performance</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Hero Image */}
          <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-r from-slate-800 to-slate-700">
            <img
              src={`https://images.unsplash.com/photo-${
                feature.title.includes('Transport') ? '1494412574643-3246b3f43f09' :
                feature.title.includes('Marketplace') ? '1556740758-90de374c12ad' :
                feature.title.includes('Analytics') ? '1551288049-bebda4e38f71' :
                feature.title.includes('Blockchain') ? '1639762681485-074b7f938ba0' :
                feature.title.includes('Energy') ? '1473341304170-971dccb5ac1e' :
                '1581093458791-9f3c3250e35b'
              }?w=1200&q=80`}
              alt={feature.title}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          </div>

          {/* Description */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4">
              <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
              <h4 className="text-white font-semibold mb-1">High Performance</h4>
              <p className="text-gray-400 text-sm">99.9% uptime with real-time processing</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-4">
              <Users className="w-8 h-8 text-blue-400 mb-2" />
              <h4 className="text-white font-semibold mb-1">Multi-User Access</h4>
              <p className="text-gray-400 text-sm">Role-based permissions for 500+ users</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4">
              <MapPin className="w-8 h-8 text-purple-400 mb-2" />
              <h4 className="text-white font-semibold mb-1">Geo-Tracking</h4>
              <p className="text-gray-400 text-sm">GPS-enabled location monitoring</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4">
              <Clock className="w-8 h-8 text-orange-400 mb-2" />
              <h4 className="text-white font-semibold mb-1">24/7 Operations</h4>
              <p className="text-gray-400 text-sm">Round-the-clock monitoring and alerts</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Performance Analytics</h3>
            
            {/* Line Chart */}
            {chartData.lineData && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Trend Analysis</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData.lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey={Object.keys(chartData.lineData[0])[0]} stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#f3f4f6' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey={Object.keys(chartData.lineData[0])[1]} stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
                    {Object.keys(chartData.lineData[0]).length > 2 && (
                      <Line type="monotone" dataKey={Object.keys(chartData.lineData[0])[2]} stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Area Chart */}
            {chartData.areaData && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Growth Metrics</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={chartData.areaData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey={Object.keys(chartData.areaData[0])[0]} stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#f3f4f6' }}
                    />
                    <Area type="monotone" dataKey={Object.keys(chartData.areaData[0])[1]} stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Bar Chart */}
            {chartData.barData && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Comparative Analysis</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData.barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="product" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#f3f4f6' }}
                    />
                    <Legend />
                    <Bar dataKey="sales" fill="#8b5cf6" />
                    <Bar dataKey="revenue" fill="#ec4899" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Pie Chart */}
            {chartData.pieData && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Distribution Overview</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={chartData.pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {chartData.pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                      labelStyle={{ color: '#f3f4f6' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button className="w-full bg-gradient-to-r from-delhi-saffron to-orange-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all">
            Access Full Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureModal;
