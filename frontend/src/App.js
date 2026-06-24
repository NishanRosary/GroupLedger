import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';

import Features from './components/sections/Features';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />

      {/* ── Status Bar ── */}
      <section className="mt-16 pt-8 border-t border-mono-border flex items-center justify-center">
        <div className="flex items-center space-x-2 text-[10px] text-mono-muted uppercase tracking-wider">
          <span className="w-1.5 h-1.5 bg-mono-white rounded-full" />
          <span>System status operational</span>
          <span className="text-mono-border px-1">·</span>
          <span>Version 0.1.0</span>
        </div>
      </section>
    </Layout>
  );
}

export default App;
