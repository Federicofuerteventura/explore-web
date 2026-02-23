import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Atlantic Ocean blue palette — primary brand color
        ocean: {
          50:  '#e0f7fc',
          100: '#b3ecf7',
          200: '#80dff1',
          300: '#4dd2eb',
          400: '#26c8e7',
          500: '#00B4D8', // vibrant Atlantic
          600: '#0096C7', // primary CTA
          700: '#0077B6', // hover
          800: '#023E8A', // deep navy headings
          900: '#03045E', // darkest navy
        },
        // Warm sand tones — backgrounds and accents
        sand: {
          50:  '#fdfaf5',
          100: '#f9f1e4',
          200: '#f2e1c4',
          300: '#e8c99a',
          400: '#d9a96e',
          500: '#c98945',
          600: '#a86c2c',
        },
        // Sunset coral — secondary accent
        coral: {
          300: '#f9a98a',
          400: '#f4845f',
          500: '#e07a5f',
          600: '#c96840',
        },
        // Neutral warm gray — text & UI
        stone: {
          750: '#3a3530',
        },
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-inter)',   'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid type scale
        'display': ['clamp(2.5rem, 5vw, 4rem)',    { lineHeight: '1.1', fontWeight: '800' }],
        'headline': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'title':    ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease-out forwards',
        'fade-in':   'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card':      '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover':'0 4px 12px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.08)',
        'button':    '0 2px 8px rgba(0, 150, 199, 0.3)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
