/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx,html,css}'];
export const theme = {
  fontFamily: {
    lato: ['Lato', 'sans-serif'],
    raleway: ['Raleway', 'sans-serif'],
  },
  /**
   * 
   *     --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2,12,27,0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100,255,218,0.1);
    --pink: #f57dff;
    --blue: #57cbff;
   */
  extend: {
    colors: {
      green: '#64ffda',
      navy: '#0a192f',
      'navy-l': '#112240',
      'navy-d': '#020c1b',
      'navy-xl': '#233554',
      slate: '#8892b0',
      'slate-l': '#a8b2d1',
      'slate-xl': '#ccd6f6',
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
      'move-up': {
        '0%': {
          transform: 'translateY(0px)',
        },
        '100%': {
          transform: 'translateY(-100px)',
          display: 'hidden',
        },
      },
      'move-down': {
        '0%': {
          transform: 'translateY(-100px)',
        },
        '100%': {
          transform: 'translateY(0px)',
          display: 'flex',
        },
      },
    },
    animation: {
      'appear-fast': 'appear 1s ease-in-out',
      'appear-medium': 'appear 1.5s ease-in-out',
      'appear-slow': 'appear 2s ease-in-out',
      'bounce-right': 'bounce-right 1s infinite',
      'move-up': 'move-up 0.5s ease-in-out',
      'move-down': 'move-down 0.5s ease-in-out',
    },
  },
};
export const plugins = [];
