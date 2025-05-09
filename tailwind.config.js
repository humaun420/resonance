/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add paths to your template files where Tailwind classes will be used
    "./src/**/*.{html,js}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
        screens: {
            tiny: '320px',
            compact: '375px',
            standard: '425px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
          },
      fontFamily: {
        primary: ["var(--font-primary)"],
      },
      // Add custom animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 5s ease-in-out",
        fadeOut: "fadeOut 5s ease-in-out",
      },
    },
  },
  plugins: [],
};
