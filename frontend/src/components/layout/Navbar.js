import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-surface-900 border-b border-surface-700/50 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/20">
              <span className="text-white font-bold text-sm">GL</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Group<span className="text-primary-400">Ledger</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#dashboard"
              className="text-surface-300 hover:text-white hover:bg-surface-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Dashboard
            </a>
            <a
              href="#expenses"
              className="text-surface-300 hover:text-white hover:bg-surface-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Expenses
            </a>
            <a
              href="#reconciliation"
              className="text-surface-300 hover:text-white hover:bg-surface-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Reconciliation
            </a>
            <a
              href="#reports"
              className="text-surface-300 hover:text-white hover:bg-surface-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Reports
            </a>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="text-surface-400 hover:text-white p-2 rounded-lg hover:bg-surface-800 transition-colors duration-200">
              {/* Bell Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center cursor-pointer ring-2 ring-surface-700 hover:ring-primary-500 transition-all duration-200">
              <span className="text-white text-xs font-semibold">NR</span>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-surface-300 hover:text-white p-2 rounded-lg hover:bg-surface-800 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                /* Close Icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-surface-700/50">
          <div className="px-4 py-3 space-y-1">
            <a
              href="#dashboard"
              className="block text-surface-300 hover:text-white hover:bg-surface-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Dashboard
            </a>
            <a
              href="#expenses"
              className="block text-surface-300 hover:text-white hover:bg-surface-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Expenses
            </a>
            <a
              href="#reconciliation"
              className="block text-surface-300 hover:text-white hover:bg-surface-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Reconciliation
            </a>
            <a
              href="#reports"
              className="block text-surface-300 hover:text-white hover:bg-surface-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Reports
            </a>
          </div>
          <div className="border-t border-surface-700/50 px-4 py-3 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold">NR</span>
            </div>
            <span className="text-surface-300 text-sm font-medium">Nishan Rosary</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
