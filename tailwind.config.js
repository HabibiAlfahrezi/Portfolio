/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
        'kecik': '450px',
        'sm': '550px',
        'md': '668px',
        'lg': '760px',
        'xl': '1200px',    
      },
    extend: {
      fontSize: {
      sm: ['14px', '20px'],
      smS: ['14px', '20px'],
      },
      colors : {
        primary : "#ffc300",
        secondary : "#6b7280",
        dark : "#0f172a",
        footer : "#f48c06",
      },
      fontFamily : {
        poppins : ['Poppins', 'sans-serif'],
      },
      container: {
        center : true,
        padding : '12px',
      },
    },
  },
  plugins: [
    // require("daisyui"),
  ],
  
}

