/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      'light-blue': '#E1F1FF',
      blue: '#2E4BDF',
      'dark-blue': '#051A88',
      purple: '#8B9EFF',
      'dark-purple': '#6C63FF',
      gray: '#CACACA',
      'light-gray': '#DFE6EC'
    },
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  plugins: []
}
