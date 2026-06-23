import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'PLATFORM',
      links: [
        { label: 'Dashboard', href: '#dashboard' },
        { label: 'Expenses', href: '#expenses' },
        { label: 'Reconciliation', href: '#reconciliation' },
        { label: 'Reports', href: '#reports' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#api' },
        { label: 'Release Notes', href: '#releases' },
        { label: 'System Status', href: '#status' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
        { label: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'LEGAL',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'Security', href: '#security' },
      ],
    },
  ];

  return (
    <footer className="bg-mono-black border-t border-mono-border">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col space-y-4">
              <span className="text-[10px] font-extrabold tracking-widest text-mono-white">
                {section.title}
              </span>
              <ul className="flex flex-col space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-mono-muted hover:text-mono-white text-xs transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="h-px bg-mono-border w-full" />

        {/* Bottom copyright and legal */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[11px] text-mono-muted tracking-wide">
            &copy; {currentYear} GroupLedger Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <a href="#privacy" className="text-[11px] text-mono-muted hover:text-mono-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-mono-border text-[10px] hidden md:inline">|</span>
            <a href="#terms" className="text-[11px] text-mono-muted hover:text-mono-white transition-colors duration-200">
              Terms of Service
            </a>
            <span className="text-mono-border text-[10px] hidden md:inline">|</span>
            <a href="#cookies" className="text-[11px] text-mono-muted hover:text-mono-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
