/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    colors: {
      softOrange: '#e9ab53',
      softRed: '#f15e50',
      offWhite: '#fffdfa',
      blueGray: '#c5c6ce',
      darkGray: '#5d5f79',
      darkBlue: '#00001a',
      gold: '#EEA74F',
    },
    extend: {
      fontFamily: {
        'inter-reg' : ['inter-reg'],
        'inter-bold' : ['inter-bold'],
        'inter-extra' : ['inter-extra'],
      },
    },
  },
  plugins: [],
}

