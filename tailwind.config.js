/** @type {import('tailwindcss').Config} */

import fluid, { extract } from 'fluid-tailwind'
import daisyui from 'daisyui'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: {
    files: ['./src/**/*.{html,svelte,js,ts}'],
    extract
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ['Crimson Text', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: '20rem',
      lg: '64rem',
      xl: '80rem',
      xxl: '96rem'
    },
  },

  plugins: [require('@tailwindcss/typography'), daisyui, fluid],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary":   "#9BC1BC",
          "secondary": "#7A306C",
          "accent":    "#2B50AA",
          "neutral":   "#CD9FCC",
          "base-100":  "#000000",
          "base-200":  "#1a1a1a",
          "base-300":  "#2a2a2a",
        },
      },
    ],
  },
}