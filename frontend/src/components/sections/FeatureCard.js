import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="mono-card p-6 md:p-8 flex flex-col items-start group select-none hover:shadow-premium-sm">
      {/* Icon Wrapper (Sleek monochrome box) */}
      <div className="w-12 h-12 mb-6 bg-mono-dark border border-mono-border text-mono-white flex items-center justify-center rounded-lg transition-all duration-300 group-hover:border-mono-white/40 group-hover:bg-mono-black shadow-premium-border">
        {icon}
      </div>

      {/* Feature Title */}
      <h3 className="text-body-lg font-bold text-mono-white uppercase tracking-wider mb-3 group-hover:text-mono-white transition-colors">
        {title}
      </h3>

      {/* Feature Description */}
      <p className="text-mono-muted text-xs leading-relaxed font-light tracking-wide">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
