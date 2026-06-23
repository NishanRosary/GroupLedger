/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          black: '#000000',
          darkest: '#0a0a0a',
          dark: '#121212',
          card: '#161616',
          border: '#262626',
          muted: '#737373',
          light: '#e5e5e5',
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        'display':  ['64px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline': ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'title-lg': ['32px', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'title-md': ['24px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg':  ['16px', { lineHeight: '1.5', letterSpacing: '-0.005em', fontWeight: '400' }],
        'body-md':  ['14px', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'caption':  ['12px', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      boxShadow: {
        'premium': '0 8px 30px rgba(0, 0, 0, 0.5)',
        'premium-sm': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'premium-border': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'premium-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
