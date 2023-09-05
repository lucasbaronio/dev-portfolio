/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
      },
      animation: {
        typing: 'typing 3.5s steps(50), blink .75s step-end infinite',
      },
    },
  },
  plugins: [],
};
