/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:         '#0a0f0a',
        card:       '#141c14',
        border:     '#1e3a1e',
        forest:     '#7da866',
        orange:     '#e08246',
        cream:      '#fdf9f1',
        'card-hover': '#192419',
      },
      fontFamily: {
        sans:    ['"Space Mono"', 'monospace'],
        heading: ['Syne', 'sans-serif'],
        hand:    ['Caveat', 'cursive'],
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wobble: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.55s ease both',
        wobble:       'wobble 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
