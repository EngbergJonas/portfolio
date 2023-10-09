/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx,html,css}'];
export const theme = {
  fontFamily: {
    lato: ['Lato', 'sans-serif'],
    raleway: ['Raleway', 'sans-serif'],
  },
  extend: {
    colors: {
      green: '#64ffda',
      navy: '#0a192f',
      'navy-d': '#020c1b',
      slate: '#8892b0',
      'slate-l': '#ccd6f6',
    },
    keyframes: {
      appear: {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
      'bounce-right': {
        '0%, 100%': {
          transform: 'translateX(0%)',
          'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'translateX(70%)',
          'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
    animation: {
      'appear-fast': 'appear 1s ease-in-out',
      'appear-medium': 'appear 1.5s ease-in-out',
      'appear-slow': 'appear 2s ease-in-out',
      'bounce-right': 'bounce-right 1s infinite',
    },
  },
};
export const plugins = [];
