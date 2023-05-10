/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens:{
        '1040': '1040px',
      },
      height: {
        'header': '63.5px',
      },
      colors:{
        "hed": "#0b0e13",
        "link": "#eee",
        "navbg": "#222222",
        "mainbg": "#333",
        "pr":"#CCCCCC"
      }
    },
    fontFamily:{
      montserrat:["Montserrat","sans-serif"],
    },
    container:{
      center:true,
    },
  },
  plugins: [],
}

