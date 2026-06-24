import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';

function App() {
  return (
    <Layout>
      <Hero />


      {/* ── Minimalist Monochrome Info Deck ── */}
      <section className="mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="mono-card p-8 group">
            <div className="w-10 h-10 mb-6 bg-mono-white text-mono-black flex items-center justify-center rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-body-lg font-bold text-mono-white uppercase tracking-wider mb-2">
              Automated Reconciliation
            </h3>
            <p className="text-mono-muted text-xs leading-relaxed">
              Match transaction logs and receipt images immediately with our intelligent ledger reconciliation algorithm.
            </p>
          </div>

          {/* Card 2 */}
          <div className="mono-card p-8 group">
            <div className="w-10 h-10 mb-6 bg-mono-white text-mono-black flex items-center justify-center rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-body-lg font-bold text-mono-white uppercase tracking-wider mb-2">
              AI Categorization
            </h3>
            <p className="text-mono-muted text-xs leading-relaxed">
              Smart auto-labeling engine classifies transactional accounts, tags entities, and marks tax write-offs correctly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="mono-card p-8 group">
            <div className="w-10 h-10 mb-6 bg-mono-white text-mono-black flex items-center justify-center rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-body-lg font-bold text-mono-white uppercase tracking-wider mb-2">
              Real-time Analytics
            </h3>
            <p className="text-mono-muted text-xs leading-relaxed">
              Generate audited ledger summaries and compliance-ready reports instantaneously for external stakeholders.
            </p>
          </div>

        </div>
      </section>

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
