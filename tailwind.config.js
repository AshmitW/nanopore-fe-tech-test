/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nanopore-blue': '#265b76',
        'nanopore-dark-blue': '#265972',
        'nanopore-light-blue': '#9dc7e8',
      },
    },
  },
  plugins: [],
};
