/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,tsx,md}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['Press Start 2P', 'cursive'],
      },
    },
  },
  plugins: [],
};