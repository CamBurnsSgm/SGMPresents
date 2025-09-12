/**
 * Tailwind CSS configuration for SGM Presents.
 *
 * See https://tailwindcss.com/docs/configuration for details.
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Updated brand colours to reflect SGM Presents palette.
        primary: '#E10600',
        secondary: '#FFFFFF'
      }
    }
  },
  plugins: []
};