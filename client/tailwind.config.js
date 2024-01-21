/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'meeriweather' : ['Merriweather', 'serif'],
        'montserrat' : ['Montserrat', 'sans-serif'],
      },
      colors : {
        'purple-100' : '#331D4A',
        'purple-50' : '#482667',
        'purple-75' : '#6A37A6',
        'purple' : '#554266',
        'orange-100' : '#F1833A',
        'blue-100' : '#458FA3',
        'grey-900' : '#363847',
        'beige-100' : '#D9D5CB',
        'beige-900' : '#C4C0B5',
        'gray-500' : '#7B7B7B',
        'gray-100' : '#F1F1ED',
        'white-100' : 'rgba(255 ,255, 255, 0.1)',
        'black-100' : 'rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: [],
}