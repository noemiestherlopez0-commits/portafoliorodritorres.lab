/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#7da866',
        orange: '#e08246',
        dark: '#0c120c',
        cream: '#fdf9f1',
        'dark-card': '#141e14',
        'dark-border': '#2a3a2a',
        'muted-green': '#4a6b3a',
      },
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'],
        heading: ['Syne', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'flip-in': {
          '0%': { opacity: '0', transform: 'rotateY(90deg)' },
          '100%': { opacity: '1', transform: 'rotateY(0deg)' },
        },
        wobble: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease both',
        'flip-in': 'flip-in 0.5s ease both',
        wobble: 'wobble 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
