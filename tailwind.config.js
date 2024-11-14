/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // Add Poppins font
        cormorant: ['Cormorant', 'serif'],   // Add Cormorant font
      },
      colors: {
        primary: '#D9D9D9',       // Example: Adding a primary color (dark green)
        secondary: '#224E05',     // Example: Adding a secondary color (light green)
        accent: '#CEDD71',        // Example: Adding an accent color (gray)
          // Example: Adding a custom gray color
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}

