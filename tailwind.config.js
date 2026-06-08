/** @type {import('tailwindcss').Config} */

import fluid, { extract } from 'fluid-tailwind'

const daisyui = require('daisyui')
const defaultTheme = require('tailwindcss/defaultTheme')
const fluid = require('fluid-tailwind')



export default {
  content: {
    files: ['./src/**/*.{html,svelte,js,ts}'],
    extract
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ['Crimson Text', defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: '20rem',
      lg: '64rem',
      xl: '80rem',
      xxl: '96rem'
    },
    

  },
  plugins: [require('@tailwindcss/typography'),daisyui, fluid],


  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9BC1BC",
          "secondary": "#7A306C",
          "accent": "#2B50AA",
          "neutral": "#CD9FCC",
          "base-100": "#000000",

        },
      },
    ],
  },

}