import React, { useState } from 'react';
import { Icons } from '../constants';

const Tracking: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState<null | 'found' | 'not-found'>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (trackingId.toUpperCase().startsWith('OVO')) {
        setResult('found');
      } else {
        setResult('not-found');
      }
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <div className="text-blue-600">
                <Icons.Search />
            </div>
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Track Your Shipment</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your tracking ID (e.g., OVO-123456) to see real-time status.
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleTrack}>
            <div>
              <label htmlFor="tracking-id" className="block text-sm font-medium text-gray-700">
                Tracking ID
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="tracking-id"
                  name="tracking-id"
                  type="text"
                  required
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 pr-12 py-4 sm:text-lg border-gray-300 rounded-lg"
                  placeholder="Enter ID (Try OVO-123)"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Locating Package...' : 'Track Shipment'}
              </button>
            </div>
          </form>

          {/* Results */}
          {result === 'found' && (
             <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 animate-fade-in-up">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="text-green-500"><Icons.Check /></div>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-lg font-medium text-green-800">Shipment In Transit</h3>
                        <div className="mt-2 text-green-700">
                            <p className="mb-2"><strong>Origin:</strong> Shanghai, CN</p>
                            <p className="mb-2"><strong>Destination:</strong> Los Angeles, USA</p>
                            <p><strong>Status:</strong> Arrived at Port of Long Beach. Awaiting Customs Clearance.</p>
                        </div>
                        <div className="mt-4 w-full bg-green-200 rounded-full h-2.5">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-green-800 mt-1">
                            <span>Dispatched</span>
                            <span>In Transit</span>
                            <span>Delivered</span>
                        </div>
                    </div>
                </div>
             </div>
          )}

          {result === 'not-found' && (
              <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex">
                    <div className="flex-shrink-0">
                         <div className="text-red-500"><Icons.X /></div>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-lg font-medium text-red-800">Shipment Not Found</h3>
                        <div className="mt-2 text-red-700">
                            <p>We could not find a shipment with that ID. Please check the number and try again, or contact support.</p>
                        </div>
                    </div>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
