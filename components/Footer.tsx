import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 text-white">
               <Icons.Globe />
               <span className="ml-2 text-2xl font-bold">OVOCATE</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              We deliver excellence in transport and logistics. Connecting businesses across continents with speed, reliability, and intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Supply Chain</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Logistics Way</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">contact@ovocatelogistics.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ovocate Logistics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
