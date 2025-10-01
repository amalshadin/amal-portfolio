/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0A192F', // A dark navy blue
        'primary': '#CCD6F6',   // A light slate for text
        'secondary': '#8892B0', // A dimmer slate for secondary text
        'accent': '#64FFDA',    // A bright, techy cyan/green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}