/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-soft-orange': 'hsl(35, 77%, 62%)',
      'primary-soft-red': 'hsl(5, 85%, 63%)',
      'neutral-off-white': 'hsl(36, 100%, 99%)',
      'neutral-gray-blue': 'hsl(233, 8%, 79%)',
      'neutral-dark-gray-blue': 'hsl(236, 13%, 42%)',
      'neutral-very-dark-blue': 'hsl(240, 100%, 5%)',
      'transparent': 'rgba(0, 0, 0, 0.49)'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1028px',
      'xl': '1500px',
    }
  },
  plugins: [],
}
