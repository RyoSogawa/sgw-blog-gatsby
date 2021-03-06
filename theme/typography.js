exports.typography = theme => ({
  DEFAULT: {},
  dark: {
    css: {
      color: theme('colors.gray.400'),
      a: {
        color: theme('colors.gray.300'),
        '&:hover': {
          color: theme('colors.gray.200'),
        },
      },
      h1: {
        color: theme('colors.gray.200'),
      },
      h2: {
        color: theme('colors.gray.200'),
      },
      h3: {
        color: theme('colors.gray.200'),
      },
      h4: {
        color: theme('colors.gray.200'),
      },
      h5: {
        color: theme('colors.gray.200'),
      },
      h6: {
        color: theme('colors.gray.200'),
      },
      th: {
        color: theme('colors.gray.300'),
      },
      strong: {
        color: theme('colors.gray.300'),
      },
      code: {
        color: theme('colors.gray.200'),
      },
      figcaption: {
        color: theme('colors.gray.500'),
      },
      blockquote: {
        color: theme('colors.gray.400'),
      },
    },
  },
})
