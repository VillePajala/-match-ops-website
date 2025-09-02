/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Audiowide', 'Impact', 'Arial Black', 'sans-serif'],
        body: ['Rajdhani', 'Inter', 'sans-serif'],
        sans: ['Rajdhani', 'Inter', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#0F172A',
        'bg-secondary': '#1E293B',
        'bg-tertiary': '#334155',
        'text-primary': '#F1F5F9',
        'text-secondary': '#CBD5E1',
        'text-muted': '#94A3B8',
        'primary-indigo': '#4F46E5',
        'primary-violet': '#7C3AED',
        'accent-cyan': '#22D3EE',
        'accent-lime': '#A3E635',
        'accent-yellow': '#FDE047',
        'accent-orange': '#F97316',
        'accent-magenta': '#E83D6D',
        'holographic': '#22D3EE',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F46E5, #7C3AED)',
        'gradient-holo': 'conic-gradient(from 0deg at 50% 50%, #22D3EE 0deg, #A3E635 60deg, #FDE047 120deg, #F97316 180deg, #E83D6D 240deg, #8B5CF6 300deg, #22D3EE 360deg)',
      },
      boxShadow: {
        'indigo': '0 10px 15px -3px rgb(79 70 229 / 0.4), 0 4px 6px -4px rgb(79 70 229 / 0.4)',
        'violet': '0 10px 15px -3px rgb(124 58 237 / 0.4), 0 4px 6px -4px rgb(124 58 237 / 0.4)',
      },
      animation: {
        'holographic': 'holographic 20s linear infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        holographic: {
          '0%': { 'background-position': '0% 50%' },
          '25%': { 'background-position': '100% 0%' },
          '50%': { 'background-position': '50% 100%' },
          '75%': { 'background-position': '0% 100%' },
          '100%': { 'background-position': '0% 50%' },
        },
        shimmer: {
          '0%': { 'background-position': '200% 0' },
          '100%': { 'background-position': '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}