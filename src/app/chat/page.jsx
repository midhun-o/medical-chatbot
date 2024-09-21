import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot'; // Import the Chatbot component
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <main className="flex-grow p-4" style={{ height: 'calc(100vh - 200px)' }}>
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
