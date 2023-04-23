/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ncc: {
          lightblue: "#A2E1FF",
          blue: "#5EB7FF",
          bluePurple: "#7D91EA",
          purple: "#A571CD",
          pinkPurple: "#BF4CA0",
          pink: "#C62368",
          black: "#001220",
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
}
}