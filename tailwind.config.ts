import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'radial-fade':
          'radial-gradient(circle, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 70%)',
          'radial-fade-hero':
          'radial-gradient(circle, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 70%)',
        'custom-gradient': 'linear-gradient(to top right, #16151E, #343439)',
        '3d-gradient':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%,  rgba(22, 21, 30, 1) 30%, #343439 100%)',
        'gradient-tl-br':
          'linear-gradient(to bottom right, transparent, rgba(237, 123, 41, 0.2))',
      },
      colors: {
        red: '#FF0000',
        green: '#008000',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        textColor: {
          DEFAULT: '#ffffff',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        fadeSlideIn: {
          "0%, 30%": { opacity: "0", transform: "translateY(20%)" },
          "50%, 100%": { opacity: "1", transform: "translateY(0)" },
      },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        orbit: {
          '0%': {
            transform:
              'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
          },
          '100%': {
            transform:
              'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
          },
        },
        
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeSlideIn: "fadeSlideIn 0.5s ease-in forwards",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
