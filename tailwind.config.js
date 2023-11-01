/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx,html,css}'];
export const theme = {
  fontFamily: {
    lato: ['Lato', 'sans-serif'],
    raleway: ['Raleway', 'sans-serif'],
  },
  extend: {
    height: {
      device: '100dvh',
    },
    width: {
      device: '100dvw',
    },
    colors: {
      green: '#64ffda',
      navy: '#0a192f',
      'navy-l': '#112240',
      'navy-d': '#020c1b',
      'navy-xl': '#233554',
      slate: '#9ba3bc',
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
