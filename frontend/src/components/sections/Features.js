import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const featuresList = [
    {
      title: 'AI Receipt Scanning',
      description: 'Automatically extract expenses from receipts, invoices, and UPI screenshots using AI-powered OCR.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {/* Document with Scan corners and sparkle indicator */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4a1 1 0 001 1h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h14" className="stroke-mono-muted opacity-60" />
        </svg>
      ),
    },
    {
      title: 'Smart Expense Tracking',
      description: 'Track shared expenses across groups and monitor spending in real time.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {/* Interactive node connection representation */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Optimized Settlements',
      description: 'Reduce unnecessary transactions and instantly calculate who owes whom.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {/* Bidirectional simplified settlement arrows */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Budget Insights',
      description: 'Receive spending analytics and budget forecasts to avoid overspending.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {/* Upward forecasting trend and lightbulb indicator */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 border-t border-mono-border/40 bg-mono-black">
      {/* Visual glow backdrop for modern fintech styling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[28px] md:text-title-lg font-extrabold uppercase tracking-tight text-mono-white mb-4">
            Why Choose GroupLedger?
          </h2>
          <div className="h-px bg-mono-border w-16 mx-auto mb-4" />
          <p className="text-xs md:text-body-md text-mono-muted font-light max-w-xl mx-auto tracking-wide leading-relaxed">
            Smart expense tracking and settlements for trips, events, roommates, and teams.
          </p>
        </div>

        {/* Features Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
