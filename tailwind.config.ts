import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F8F8F6',
        foreground: '#0D0D0B',
        muted: '#6B6B68',
        border: '#E5E5E3',
        card: '#FFFFFF',
      },
      fontSize: {
        'hero': ['clamp(2.8rem, 6vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'card-title': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
