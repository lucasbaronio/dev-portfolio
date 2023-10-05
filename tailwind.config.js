/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        100: '#0D6E6E',
        200: '#4a9d9c',
        300: '#00ADB5',
        400: '#AAE3E2',
        500: '#fdf6fd',
      },
      accent: {
        100: '#FF4081',
        200: '#ffe0c8',
      },
      text: {
        100: '#FFFFFF',
        200: '#e0e0e0',
        300: '#C5C5C5',
        700: '#878787',
        800: '#4A4A4A',
        900: '#000000',
      },
      bg: {
        100: '#0D1F2D',
        200: '#1d2e3d',
        300: '#354656',
        700: '#F5F3F7',
        800: '#E9E4ED',
        900: '#FFFFFF',
      },
    },
    extend: {
      screens: {
        xs: '480px',
      },
      keyframes: {
        typing: {
          from: {
            width: '0%',
          },
          to: {
            width: '100%',
          },
        },
        blink: {
          from: {
            borderColor: 'transparent',
          },
          to: {
            borderColor: 'transparent',
          },
          '50%': {
            borderColor: 'orange',
          },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        fadeIn: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        typing: 'typing 3.5s steps(50), blink .75s step-end infinite',
        text: 'text 5s ease infinite',
        fadein: 'fadeIn .5s ease-in-out',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
