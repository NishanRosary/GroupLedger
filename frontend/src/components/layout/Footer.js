import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 border-t border-surface-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Column */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">GL</span>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                Group<span className="text-primary-400">Ledger</span>
              </span>
            </div>
            <p className="text-surface-400 text-sm leading-relaxed">
              AI-powered expense reconciliation for modern teams. 
              Smart, fast, and accurate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-surface-200 text-sm font-semibold uppercase tracking-wider mb-3">
              Platform
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#dashboard" className="text-surface-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#expenses" className="text-surface-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Expenses
                </a>
              </li>
              <li>
                <a href="#reconciliation" className="text-surface-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Reconciliation
                </a>
              </li>
              <li>
                <a href="#reports" className="text-surface-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Support */}
          <div>
            <h3 className="text-surface-200 text-sm font-semibold uppercase tracking-wider mb-3">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="text-surface-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#docs" className="text-surface-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-surface-400 hover:text-primary-400 text-sm transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-700/50 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-surface-500 text-xs">
            &copy; {currentYear} GroupLedger. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#privacy" className="text-surface-500 hover:text-surface-300 text-xs transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-surface-500 hover:text-surface-300 text-xs transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
