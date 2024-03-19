/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '1440': '1440px',
        '460':'460px',
        '450':'450px',
        '1000':'1000px',
        '500':'500px',
        
      },
      width: {
        '7/10': '70%',
        '1400':'1400px',
      }
    },
  },
  plugins: [],
}

