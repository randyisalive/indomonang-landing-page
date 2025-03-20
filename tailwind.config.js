/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include source files (adjust extensions as needed)
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        primary: "#1E40AF", // Example: blue
        secondary: "#F59E0B", // Example: yellow
      },
      spacing: {
        // Add custom spacing
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      fontFamily: {
        // Add custom fonts
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
