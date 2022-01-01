const { typography } = require('./theme/typography')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    zIndex: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
      colors: {
        black: '#231815',
      },
      typography,
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
        },
      })
    },
  ],
}
