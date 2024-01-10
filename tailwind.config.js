/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
         'costum-bleu-color':'#0F172A',
         'progress-bleu-color':'#0F172A',
         'hover-bleu-color':'#1D2B53',
      }
    },
  },
  plugins: [],
}