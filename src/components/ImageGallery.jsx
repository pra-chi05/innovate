import React from 'react';
import { Recycle, Factory, Leaf, Truck, Zap, Droplets } from 'lucide-react';

const ImageGallery = () => {
  const galleryItems = [
    {
      title: 'Waste Collection Fleet',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
      stat: '2,500+ Vehicles',
      color: 'from-blue-500 to-cyan-500',
      description: 'Modern GPS-enabled waste collection vehicles',
    },
    {
      title: 'Recycling Facilities',
      icon: Recycle,
      image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&q=80',
      stat: '2,200 T/day',
      color: 'from-green-500 to-emerald-500',
      description: 'Advanced sorting and recycling infrastructure',
    },
    {
      title: 'WTE Power Plants',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      stat: '100 MW Output',
      color: 'from-yellow-500 to-orange-500',
      description: 'Clean energy generation from waste',
    },
    {
      title: 'Composting Units',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
      stat: '3,800 T/day',
      color: 'from-lime-500 to-green-600',
      description: 'Organic waste to nutrient-rich compost',
    },
    {
      title: 'Processing Facilities',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
      stat: '24/7 Operations',
      color: 'from-purple-500 to-pink-500',
      description: 'State-of-the-art waste processing plants',
    },
    {
      title: 'Water Treatment',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1582408928229-2f0f9f432e23?w=800&q=80',
      stat: '2M L/day',
      color: 'from-cyan-500 to-blue-500',
      description: 'Advanced water recycling systems',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Infrastructure Gallery
          </h2>
          <p className="text-gray-400 text-lg">
            State-of-the-art facilities transforming Delhi's waste management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23334155" width="800" height="600"/%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                  <div className={`inline-block bg-gradient-to-r ${item.color} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                    {item.stat}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-delhi-saffron/80 via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6">
                  <Icon className="w-16 h-16 text-white mb-4" />
                  <span className="text-white font-bold text-xl mb-2">View Details</span>
                  <span className="text-white/90 text-sm text-center">{item.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
