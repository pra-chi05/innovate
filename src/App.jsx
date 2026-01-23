import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MapSection from './components/MapSection';
import Statistics from './components/Statistics';
import WasteFlow from './components/WasteFlow';
import ImageGallery from './components/ImageGallery';
import LiveDashboard from './components/LiveDashboard';
import Initiatives from './components/Initiatives';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Statistics />
      <Features scrollY={scrollY} />
      <WasteFlow />
      <LiveDashboard />
      <ImageGallery />
      <MapSection />
      <Initiatives />
      <Footer />
    </div>
  );
}

export default App;
