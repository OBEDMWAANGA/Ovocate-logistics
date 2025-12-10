import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Get a Quote Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to move your cargo? Fill out the form and our team will get back to you within 24 hours with a customized solution.
          </p>
          
          <div className="space-y-6">
             <div className="flex items-start">
                 <div className="flex-shrink-0">
                     <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                     </div>
                 </div>
                 <div className="ml-4">
                     <h3 className="text-lg font-medium text-gray-900">Phone Support</h3>
                     <p className="mt-1 text-gray-500">+1 (555) 123-4567</p>
                     <p className="mt-1 text-gray-500">Mon-Fri 9am-6pm EST</p>
                 </div>
             </div>
             
             <div className="flex items-start">
                 <div className="flex-shrink-0">
                     <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-900 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                     </div>
                 </div>
                 <div className="ml-4">
                     <h3 className="text-lg font-medium text-gray-900">Email</h3>
                     <p className="mt-1 text-gray-500">sales@ovocatelogistics.com</p>
                     <p className="mt-1 text-gray-500">support@ovocatelogistics.com</p>
                 </div>
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-50 py-8 px-6 shadow-lg rounded-xl border border-gray-100">
            <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Service Needed</label>
                    <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500">
                        <option>Ocean Freight</option>
                        <option>Air Freight</option>
                        <option>Road Transport</option>
                        <option>Warehousing</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="button" className="w-full bg-amber-500 text-blue-900 font-bold py-3 px-4 rounded-md hover:bg-amber-400 transition-colors shadow-sm">
                    Send Request
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
