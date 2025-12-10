import React from 'react';
import { PageView } from '../types';

interface HeroProps {
  setPage: (page: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Logistics Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Moving the World, <br/>
            <span className="text-amber-400">One Shipment at a Time.</span>
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mb-10 leading-relaxed">
            Global logistics solutions tailored to your business needs. 
            From ocean freight to last-mile delivery, Ovocate ensures your cargo arrives safely and on time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setPage(PageView.TRACKING)}
              className="px-8 py-4 bg-amber-500 text-blue-950 font-bold rounded-full hover:bg-amber-400 transition-all hover:shadow-xl active:transform active:scale-95 flex items-center justify-center"
            >
              Track Shipment
            </button>
            <button 
              onClick={() => setPage(PageView.SERVICES)}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition-all active:transform active:scale-95 flex items-center justify-center"
            >
              Our Services
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-blue-200 text-sm font-medium">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Global Network
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              24/7 AI Support
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Real-time Tracking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
