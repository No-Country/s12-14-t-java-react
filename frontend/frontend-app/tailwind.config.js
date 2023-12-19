/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 10px 0px rgba(13, 21, 68, 0.25)'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      'light-blue': {
        50: '#eff8ff',
        100: '#e1f1ff',
        200: '#b8e2ff',
        300: '#79cbff',
        400: '#32b1fe',
        500: '#0798f0',
        600: '#0078ce',
        700: '#0060a6',
        800: '#035189',
        900: '#094471',
        950: '#062a4b'
      },
      blue: {
        50: '#f0f4fe',
        100: '#dde5fc',
        200: '#c3d3fa',
        300: '#99b7f7',
        400: '#6992f1',
        500: '#466ceb',
        600: '#2e4bdf',
        700: '#283acd',
        800: '#2632a7',
        900: '#242f84',
        950: '#1b1f50'
      },
      'dark-blue': {
        50: '#e6f3ff',
        100: '#d1e8ff',
        200: '#add2ff',
        300: '#7bb3ff',
        400: '#4881ff',
        500: '#1f51ff',
        600: '#0027ff',
        700: '#002aff',
        800: '#0024da',
        900: '#051a88',
        950: '#041062'
      },
      purple: '#8B9EFF',
      'dark-purple': '#6C63FF',
      gray: '#CACACA',
      'light-gray': '#DFE6EC',
      indigo: '#BDC4E7'
    }
  },
  screens: {
    
    sm: '360px',
    // => @media (min-width: 360px) { ... }
    md: '768px',
    // => @media (min-width: 768px) { ... }
    lg: '1024px',
    // => @media (min-width: 1024px) { ... }
    '2xl': '1512px'
    // => @media (min-width: 1512px) { ... }
  },
  plugins: [],
  darkMode: 'false'
  // plugins: [require('flowbite/plugin')]
}
