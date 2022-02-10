module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/tailwindStyles.json',
  ],
  theme: {
    extend: {
      maxHeight: {
        'screen-mobile': 'calc(100vh - 4.5rem)',
      },
      minHeight: {
        'section-mobile': 'calc(100vh - 5.5rem)',
      },
      keyframes: {
        'vercel-text': {
          '0%, 55%': {
            color: 'inherit',
          },
          '5%, 50%': {
            color: 'transparent',
          },
        },
        'section-title': {
          '0%, 100%': {
            color: '#000',
          },
          '25%, 75%': {
            color: 'transparent',
          },
        },
      },
      animation: {
        'vercel-text-a': 'vercel-text 8s infinite',
        'vercel-text-b': 'vercel-text 8s infinite 4s',
        'section-title': 'section-title 4s infinite',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
