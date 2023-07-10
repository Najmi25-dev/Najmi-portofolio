/**
 *  @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
   
    extend: {
      colors:{
        primary: '#0ea5e9',
        dark: '#111827',
        darkWarm: '#050505',
      },
      
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'goyang': 'goyang 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gloww': 'gloww 2s ease-in-out infinite',
      },
      keyframes: {
       goyang: {
          '0%, 100%' : { transform: 'rotate(-5deg)'},
          '50%' : {transform: 'rotate(5deg)'}
        },
        glow: {
          '0%': { boxShadow: ' 10px 7px 25px rgb(255, 62, 191), -10px -7px 25px rgb(255, 62, 191)' },
          '50%': { boxShadow: '10px 7px 25px rgb(62, 145, 255), -10px -7px 25px rgb(81, 224, 210)' },
          '100%': { boxShadow: ' 10px 7px 25px rgb(178, 86, 231), -10px -7px 25px rgb(178, 86, 231)' }
        },
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

