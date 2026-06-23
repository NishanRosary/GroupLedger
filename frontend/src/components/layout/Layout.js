import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-mono-black text-mono-white relative overflow-x-hidden">
      
      {/* ── Outer wrapper ensuring strict monochrome visual alignment ── */}
      <div className="flex-1 flex flex-col z-10">
        <Navbar />

        {/* ── Main Content Container with strict maximum width & precise alignments ── */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 md:py-16">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
