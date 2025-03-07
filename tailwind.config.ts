/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan Next.js App Router files
    "./pages/**/*.{js,ts,jsx,tsx}", // Scan pages (if any)
    "./components/**/*.{js,ts,jsx,tsx}", // Scan components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ "Poppins","sans-serif"],
      },
      borderRadius: {
        gensys: "0.5rem", // Keeping the custom border radius for consistency
      },
    },
  },
  plugins: [],
};
