/** @type {import('tailwindcss').Config} */
const { withMaterialColors } = require('tailwind-material-colors');

const config = {
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
