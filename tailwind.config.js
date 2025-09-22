/** @type {import('tailwindcss').Config} */
import pxToViewport from 'tailwindcss-px-to-viewport';
import daisyui from 'daisyui';

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'big': '1440px',
      },
      pxToViewPort: {
        // Base viewport configuration
        PresetScreen: {
          width: 1440, // Default design width (in px)
          height: 1080, // Default design height (in px)
        },
        utilities: {
          'gap': 'gap',
          'rounded-ee': 'border-end-end-radius',
          'gap-x': 'column-gap',
          'gap-y': 'row-gap',
          'tracking': 'letter-spacing',
          "rounded": "border-radius",
        }
      },
      fontFamily: {
        'gotham': ['var(--font-gotham)'],
        'myriad': ['var(--font-myriad)'],
        'manrope': ['var(--font-manrope)'],
      },
      colors: {
        'wund-red': '#DE0026',
        'wund-black': '#414042'
      },
    },
  },
  plugins: [
    pxToViewport(),
    daisyui({
      themes: ["light"],
      exclude: ["rootcolor", "rootscrollgutter"],
    }),
  ],
}