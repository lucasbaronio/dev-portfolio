/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
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
