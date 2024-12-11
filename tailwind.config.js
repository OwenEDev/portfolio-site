import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
const test = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    layout: {},
    themes: {
      light: {
        colors: {
          background: '#E9EDDE',
          primary: '#F0A202',
          secondary: '#D95D39'
        }
      },
      dark: {
        colors: {
          background: '#050517',
          primary: '#202C59',
        }
      }
    },  
  })],
}

export default test
