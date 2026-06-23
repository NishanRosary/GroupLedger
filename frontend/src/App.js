import React from 'react';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      {/* Placeholder content — will be replaced by actual pages in future features */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25 mb-6">
          <span className="text-white font-bold text-2xl">GL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Group<span className="text-primary-400">Ledger</span>
        </h1>
        <p className="text-surface-400 text-base sm:text-lg max-w-md leading-relaxed">
          AI-Powered Expense Reconciliation Platform
        </p>
        <div className="mt-8 flex items-center space-x-2 text-surface-500 text-sm">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span>System ready</span>
        </div>
      </div>
    </Layout>
  );
}

export default App;
