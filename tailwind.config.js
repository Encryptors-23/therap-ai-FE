/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0F0D',
        backgroundLight: '#B1AFAF',
        accent: '#F86C30'
      },
    },
  },
  plugins: [],
}

