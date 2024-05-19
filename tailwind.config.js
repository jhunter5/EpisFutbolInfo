/** @type {import('tailwindcss').Config} */
const { withMaterialColors } = require('tailwind-material-colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jaro: ['"Jaro"', ...defaultTheme.fontFamily.sans],
        assistant: ['"Assistant"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

module.exports = withMaterialColors(config, {
  // Your base colors as HEX values. 'primary' is required.
  primary: '#006A61',
  // secondary and/or tertiary are optional, if not set they will be derived from the primary color.
  secondary: '#231942',
  tertiary: '#F8B1DC',
  },
  {
  /* one of 'content', 'expressive', 'fidelity', 'monochrome', 'neutral', 'tonalSpot' or 'vibrant' */
  scheme: 'content',
  contrast: 0,
  });
