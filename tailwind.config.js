import tailwindAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1e3a8a',
          600: '#2563eb',
          500: '#3b82f6',
        },
      },
    },
  },
  plugins: [
    tailwindAnimate,
  ],
}