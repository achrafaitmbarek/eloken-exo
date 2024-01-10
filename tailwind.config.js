/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "costum-bleu-color": "#0F172A",
        "progress-bleu-color": "#0F172A",
        "hover-bleu-color": "#1D2B53",
      },
      animation: {
        'fade-in-scale': 'fade-in-scale 0.6s ease-in-out',
        'fade-in-scale-1': 'fade-in-scale 0.8s ease-in-out',
        'fade-in-scale-2': 'fade-in-scale 1s ease-in-out',
        'fade-in-scale-3': 'fade-in-scale 1.2s ease-in-out',
        'slide-from-bottom': 'slideFromBottom 1s ease-out',
      },
      keyframes: {
        'fade-in-scale': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slideFromBottom': { // Add this block
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};
