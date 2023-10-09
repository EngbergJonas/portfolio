/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx,html,css}'];
export const theme = {
  fontFamily: {
    lato: ['Lato', 'sans-serif'],
    raleway: ['Raleway', 'sans-serif'],
  },
  extend: {
    keyframes: {
      appear: {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
    },
    animation: {
      'appear-fast': 'appear 1s ease-in-out',
      'appear-medium': 'appear 1.5s ease-in-out',
      'appear-slow': 'appear 2s ease-in-out',
    },
  },
};
export const plugins = [];
