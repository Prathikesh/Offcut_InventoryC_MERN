/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'light-green': '0 2px 10px rgba(0, 255, 0, 0.3)', // Adjusted for lighter green
      },
      keyframes: {
        spinOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-once': 'spinOnce 3s linear 1',
      },
    },
  },
  plugins: [],
}
