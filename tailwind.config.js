/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#2a3d27',
        card:    '#1f2e1c',
        border:  '#3a5434',
        forest:  '#a8d48a',
        orange:  '#d97b46',
        cream:   '#fdf8ef',
        muted:   '#8baa7a',
        warm:    '#e8f0e2',
      },
      fontFamily: {
        sans:    ['Calibri', 'Gill Sans', 'Trebuchet MS', 'Segoe UI', 'sans-serif'],
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        hand:    ['Caveat', 'cursive'],
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%':   { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        wobble: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(1.4)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'fade-in-up':    'fade-in-up 0.55s ease both',
        'fade-in-down':  'fade-in-down 0.55s ease both',
        'slide-in-left': 'slide-in-left 0.55s ease both',
        'slide-in-right':'slide-in-right 0.55s ease both',
        'scale-in':      'scale-in 0.5s ease both',
        float:           'float 4s ease-in-out infinite',
        wobble:          'wobble 8s ease-in-out infinite',
        'pulse-dot':     'pulse-dot 2s ease-in-out infinite',
        bounce:          'bounce 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
