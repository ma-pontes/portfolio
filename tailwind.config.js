/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf7f2',
        forest: '#2d5a27',
        'forest-mid': '#3d7a35',
        'forest-light': '#edf4e8',
        'forest-pale': '#f2f7f0',
        gold: '#e8b84b',
        terracotta: '#c4693a',
        charcoal: '#1a1a1a',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
