const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': {
          100: "#28B67E",
          200: "#28b67dd2",
          300: "#28b67de0",
          400: "#1D4C4F",
          500: '#022016',
          600: "#002317",
          700: "#0D1321",
        },
        'custom-gray': {
          100: '#747474',
          200: '#353535',
          300: '#323232'
        },
        'custom-light-gray': {
          100: '#D3DCDE',
          200: '#D3DCDE',
          300: '#E9EAED',
          400: '#D9D9D9',
          500: '#BCBCBC',
        }
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
