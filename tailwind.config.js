/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        'mobile': {'max': '767px'},
  
        'tablet': {'min':'768px', 'max': '991px'},
  
        'desktop': {'min':'992px'},
  
      },
      container: {
        width: {
          tablet: '768px',
          desktop: '992px'
        },
        center: true,
      },
    
    extend: {},
  },
  plugins: [],
}