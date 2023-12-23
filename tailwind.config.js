/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        'mobile': '768px',
        // => @media (min-width: 768px) { ... }
  
        'tablet': '992px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
  
      },
      container: {
        width: {
          mobile: '100%',
          tablet: '992px',
          desktop: '1280px'
        },
        center: true,
      },
    
    extend: {},
  },
  plugins: [],
}