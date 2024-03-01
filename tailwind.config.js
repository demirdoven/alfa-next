/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'alfa-black-1': '#242424',
        'alfa-black-2': '#333333',
        'alfa-black-3': 'rgba(26, 26, 26, 1)',
        'alfa-red-1': 'rgb(221,5,19)',
        'alfa-red-2': 'rgb(205,14,21)',
        'alfa-gray-1': 'rgba(248, 248, 248, 1)',
        'alfa-gray-2': '#ededed',
        'alfa-gray-3': '#64676d',
        'alfa-gray-4': '#f6f6f6',
        'alfa-gray-5': '#777777cf',
        'alfa-gray-6': '#f8f8f8',
        'alfa-gray-7': '#979797',
        'alfa-gray-8': '#a9a9a9',
        'alfa-gray-9': '#737373',
        'alfa-gray-10': '#e1e1e1',
        'alfa-gray-11': '#c2c2c2',
        
      },
      // fontFamily: {
      //   helvetica: ["Helvetica", "sans-serif"],
      //   openSansCondensed: ["OpenSans Condensed", "sans-serif"],
      //   lato: ["Lato", "sans-serif"],
      // }
    },
  },
  plugins: [],
};
