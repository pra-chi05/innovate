import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import { Map, Zap, Recycle, Truck, Sprout, Wind, Factory } from 'lucide-react';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapSection = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  // Delhi center coordinates
  const delhiCenter = [28.6139, 77.2090];

  // Major Delhi Landfills and Waste Processing Facilities
  const landfills = [
    { 
      name: 'Ghazipur Landfill', 
      position: [28.6174, 77.3122], 
      type: 'landfill', 
      capacity: '2,000T/day',
      height: '65m',
      status: 'Active + WTE Plant',
      color: '#ef4444'
    },
    { 
      name: 'Bhalswa Landfill', 
      position: [28.7520, 77.1650], 
      type: 'landfill', 
      capacity: '1,500T/day',
      height: '62m',
      status: 'Active',
      color: '#ef4444'
    },
    { 
      name: 'Okhla Landfill', 
      position: [28.5355, 77.3093], 
      type: 'landfill', 
      capacity: '1,300T/day',
      height: '45m',
      status: 'Active + WTE Plant',
      color: '#ef4444'
    },
    { 
      name: 'Narela-Bawana WTE Plant', 
      position: [28.8500, 77.0833], 
      type: 'wte', 
      capacity: '2,000T/day',
      power: '16MW',
      status: 'Operational',
      color: '#f59e0b'
    },
  ];

  const zones = [
    { name: 'Central Delhi', position: [28.6448, 77.2167], projects: 45, type: 'wte', color: '#f59e0b', waste: '420T/day' },
    { name: 'New Delhi', position: [28.6139, 77.2090], projects: 38, type: 'recycling', color: '#10b981', waste: '380T/day' },
    { name: 'North Delhi', position: [28.7041, 77.1025], projects: 52, type: 'collection', color: '#3b82f6', waste: '650T/day' },
    { name: 'South Delhi', position: [28.5355, 77.2530], projects: 41, type: 'composting', color: '#8b5cf6', waste: '510T/day' },
    { name: 'East Delhi', position: [28.6517, 77.2833], projects: 36, type: 'biogas', color: '#06b6d4', waste: '480T/day' },
    { name: 'West Delhi', position: [28.6692, 77.1114], projects: 48, type: 'rdf', color: '#ef4444', waste: '560T/day' },
  ];

  const filters = [
    { id: 'all', label: 'All Facilities', icon: Map },
    { id: 'landfill', label: 'Landfills', icon: Factory },
    { id: 'wte', label: 'Waste-to-Energy', icon: Zap },
    { id: 'recycling', label: 'Recycling', icon: Recycle },
    { id: 'collection', label: 'Collection', icon: Truck },
    { id: 'composting', label: 'Composting', icon: Sprout },
    { id: 'biogas', label: 'Biogas', icon: Wind },
    { id: 'rdf', label: 'RDF Plants', icon: Factory },
  ];

  return (
    <section id="map" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live Waste Management Map
          </h2>
          <p className="text-gray-400 text-lg">
            Real-time tracking of waste processing facilities and collection zones across Delhi
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedZone(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all inline-flex items-center gap-2 ${
                  selectedZone === filter.id
                    ? 'bg-gradient-to-r from-delhi-saffron to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 h-[500px] overflow-hidden">
            <MapContainer
              center={delhiCenter}
              zoom={11}
              style={{ height: '100%', width: '100%' }}
              className="rounded-xl"
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              
              {/* Landfills and WTE Plants */}
              {landfills
                .filter((site) => selectedZone === 'all' || site.type === selectedZone)
                .map((site, index) => (
                  <React.Fragment key={`landfill-${index}`}>
                    <Circle
                      center={site.position}
                      radius={site.type === 'landfill' ? 2500 : 3500}
                      pathOptions={{
                        fillColor: site.color,
                        fillOpacity: 0.3,
                        color: site.color,
                        weight: 3,
                      }}
                    />
                    <Marker position={site.position}>
                      <Popup>
                        <div className="text-sm font-medium">
                          <strong className="text-base">{site.name}</strong>
                          <br />
                          <span className="text-orange-600">Capacity: {site.capacity}</span>
                          <br />
                          {site.height && <><span>Height: {site.height}</span><br /></>}
                          {site.power && <><span className="text-green-600">Power: {site.power}</span><br /></>}
                          <span className="text-blue-600">Status: {site.status}</span>
                        </div>
                      </Popup>
                    </Marker>
                  </React.Fragment>
                ))}
              
              {/* Collection Zones */}
              {zones
                .filter((zone) => selectedZone === 'all' || zone.type === selectedZone)
                .map((zone, index) => (
                  <React.Fragment key={`zone-${index}`}>
                    <Circle
                      center={zone.position}
                      radius={3000}
                      pathOptions={{
                        fillColor: zone.color,
                        fillOpacity: 0.15,
                        color: zone.color,
                        weight: 2,
                      }}
                    />
                    <Marker position={zone.position}>
                      <Popup>
                        <div className="text-sm">
                          <strong>{zone.name}</strong>
                          <br />
                          {zone.waste} waste processed
                          <br />
                          {zone.projects} facilities
                          <br />
                          Type: {zone.type}
                        </div>
                      </Popup>
                    </Marker>
                  </React.Fragment>
                ))}
            </MapContainer>
          </div>

          {/* Landfills & Statistics */}
          <div className="space-y-4">
            {/* Major Landfills */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Major Landfills</h3>
              <div className="space-y-3">
                {landfills.map((site, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all cursor-pointer border-l-4"
                    style={{ borderColor: site.color }}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <div className="text-white text-sm font-medium">{site.name}</div>
                        <div className="text-gray-400 text-xs mt-1">{site.status}</div>
                      </div>
                      <span className="text-delhi-saffron text-xs font-bold bg-delhi-saffron/20 px-2 py-1 rounded">
                        {site.capacity}
                      </span>
                    </div>
                    {site.power && (
                      <div className="text-green-400 text-xs mt-2">⚡ {site.power} power generation</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-delhi-saffron/20 to-orange-600/20 backdrop-blur-sm border border-delhi-saffron/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-white mb-2">11,200T</div>
              <div className="text-gray-300 text-sm">Total Daily Capacity</div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-yellow-400 text-sm">4 Major Facilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
