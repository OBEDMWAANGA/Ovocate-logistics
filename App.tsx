import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Tracking from './components/Tracking';
import Contact from './components/Contact';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>(PageView.HOME);

  const renderContent = () => {
    switch (currentPage) {
      case PageView.HOME:
        return (
          <>
            <Hero setPage={setCurrentPage} />
            <Services />
            <Contact />
          </>
        );
      case PageView.SERVICES:
        return (
          <>
             <div className="bg-blue-900 py-16 text-center">
                <h1 className="text-4xl font-bold text-white">Our Services</h1>
             </div>
             <Services />
          </>
        );
      case PageView.TRACKING:
        return <Tracking />;
      case PageView.CONTACT:
        return (
            <>
                <div className="bg-blue-900 py-16 text-center">
                    <h1 className="text-4xl font-bold text-white">Contact Us</h1>
                </div>
                <Contact />
            </>
        );
      default:
        return <Hero setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header setPage={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
