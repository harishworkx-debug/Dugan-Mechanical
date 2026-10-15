/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f1e3d',
          950: '#0a1529',
          800: '#16294d',
        },
      },
    },
  },
  plugins: [],
};
