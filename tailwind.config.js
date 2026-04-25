/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#3ec155',
        card:    '#ffffff',
        border:  '#d4e8cc',
        forest:  '#4a8c3f',
        orange:  '#c96b2e',
        cream:   '#fdf8ef',
        muted:   '#6b8560',
        warm:    '#1c2b1a',
      },
      fontFamily: {
        sans:    ['Calibri', 'Gill Sans', 'Trebuchet MS', 'Segoe UI', 'sans-serif'],
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        hand:    ['Caveat', 'cursive'],
      },
      keyframes: {
        /* --- continuous loop animations --- */
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-7px)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '33%':      { transform: 'translateX(3px) rotate(0.5deg)' },
          '66%':      { transform: 'translateX(-3px) rotate(-0.5deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%':      { transform: 'scale(1.04)', opacity: '0.85' },
        },
        wobble: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(1.5)' },
        },
        'badge-shift': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.65' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%':      { transform: 'translate(2px, -3px) rotate(0.3deg)' },
          '75%':      { transform: 'translate(-2px, 2px) rotate(-0.3deg)' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.93)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        /* one-shot entrance (used on load) */
        'slide-in-left':  'slide-in-left 0.55s ease both',
        'slide-in-right': 'slide-in-right 0.55s ease both',
        'fade-in-up':     'fade-in-up 0.55s ease both',
        'scale-in':       'scale-in 0.5s ease both',

        /* infinite loops — always running */
        float:        'float 3.6s ease-in-out infinite',
        sway:         'sway 5s ease-in-out infinite',
        breathe:      'breathe 4s ease-in-out infinite',
        wobble:       'wobble 8s ease-in-out infinite',
        'pulse-dot':  'pulse-dot 2s ease-in-out infinite',
        'badge-shift':'badge-shift 3s ease-in-out infinite',
        drift:        'drift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
