import React from 'react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Logistics Solutions</h3>
          <p className="text-gray-600 text-lg">
            We provide end-to-end supply chain management tailored to your industry's specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-900 rounded-3xl p-12 md:p-16 text-white mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">150+</div>
              <div className="text-blue-200">Countries Served</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">2M+</div>
              <div className="text-blue-200">Parcels Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">50k+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-600 italic mb-6">"{t.content}"</p>
                    <div className="flex items-center">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                        <div className="text-left">
                            <div className="font-bold text-gray-900">{t.name}</div>
                            <div className="text-xs text-gray-500 uppercase font-semibold">{t.role}, {t.company}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
