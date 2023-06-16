/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Heebo', 'sans-serif'],
      },
      'animation': {
        'text':'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
      },
      colors: {
        'gradient-start': 'rgb(0, 123, 255, 0.8)',
      }
    }
  },
  plugins: []
}
