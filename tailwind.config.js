/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#13120e',
        card:    '#1b1a14',
        border:  '#2c2a1f',
        forest:  '#8fba74',
        orange:  '#d97b46',
        cream:   '#fdf8ef',
        muted:   '#7a7464',
        warm:    '#e8e2d5',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        heading: ['"DM Serif Display"', 'serif'],
        hand:    ['Caveat', 'cursive'],
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wobble: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease both',
        wobble:       'wobble 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
