/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  
  theme: {
    extend: {
      colors: {
        main: '#1E90FF',
        primary: 'text-slate-800',
        dark: '#1f242d',
        txdark: '#323946',        
        bglight: '#fff',
        link: 'navy',
        
      },
      screens:{
        'sm': '576px',
      },
      boxShadow: {
        'cl': '0 0 1rem #0ef',
        'cd': '0 0 1rem #1f242d'
      }
    }    
  },
  plugins: [],
}

