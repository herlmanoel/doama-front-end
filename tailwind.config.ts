/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        'doama-rosado': '#AA6665',
        'doama-rosaseco': '#D89B9A',
        'doama-pink': '#FB81A6',
        'doama-rose': '#FDE0DA',
        'doama-chumbo': '#7F7F7A',
        'doama-cinza': '#F7F5F8',
        'doama-verdecha': '#DCE4BF',
        'doama-oliva': '#AAB477',
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], 
  },
}