/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        3: '3px',
        6: '6px',
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ['hover'],
      textUnderlineOffset: ['hover'],
    },
  },
  plugins: [],
}

