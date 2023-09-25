/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'GrayBg': '#353945',
      'black1': '#141416',
      'black2': '#27272E',
      'pink': '#ff49db',
      'white': '#FCFCFD',
      "label-color-gray1": "#425466",
      "place-holder-color-gray1": "#7A828A",
      "input-inner-bg-gray": "#EDF2F7",
      "nav-text-color": "#777E90",
      "black": "#141416"

    },
    container: {
      padding: '2rem',
    },
    fontFamily: {
      inter: ['DM Sans', 'sans-serif'],
      DM: ['DM Sans', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      dropShadow: {
        'button-drop-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

      }
    }
  },
}