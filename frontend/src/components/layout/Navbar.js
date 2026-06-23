import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Expenses', href: '#expenses' },
    { label: 'Reconciliation', href: '#reconciliation' },
    { label: 'Reports', href: '#reports' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'mono-glass shadow-premium-sm'
          : 'bg-mono-black/90 border-b border-mono-border/30'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">

          {/* ── Brand Logo (Black and White) ── */}
          <a href="#home" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded bg-mono-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-mono-black font-extrabold text-[13px] tracking-tight">GL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-mono-white font-bold text-sm tracking-tight leading-none">
                GROUPLEDGER
              </span>
              <span className="text-mono-muted text-[9px] font-semibold tracking-wider mt-0.5">
                AI RECONCILIATION
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation ── */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-mono-muted hover:text-mono-white text-xs font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Desktop Right Actions (No colors) ── */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button className="text-mono-muted hover:text-mono-white transition-colors duration-200" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Notification (No pink dot, simplified mono dot) */}
            <button className="relative text-mono-muted hover:text-mono-white transition-colors duration-200" aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-mono-white rounded-full" />
            </button>

            <div className="w-px h-5 bg-mono-border" />

            {/* Profile Avatar (Strictly Monochrome) */}
            <button className="w-7 h-7 rounded bg-mono-dark border border-mono-border flex items-center justify-center hover:border-mono-white transition-colors duration-200">
              <span className="text-mono-white text-[10px] font-bold">NR</span>
            </button>
          </div>

          {/* ── Mobile Hamburger Menu ── */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-mono-muted hover:text-mono-white p-1 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-60 border-t border-mono-border' : 'max-h-0'
        }`}
      >
        <div className="bg-mono-darkest px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-mono-muted hover:text-mono-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-mono-border my-2" />
          <div className="flex items-center space-x-3 pt-1">
            <div className="w-8 h-8 rounded bg-mono-dark border border-mono-border flex items-center justify-center">
              <span className="text-mono-white text-xs font-bold">NR</span>
            </div>
            <div>
              <p className="text-mono-white text-xs font-semibold">Nishan Rosary</p>
              <p className="text-mono-muted text-[10px]">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
