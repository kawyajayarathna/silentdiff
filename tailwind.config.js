/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        base: '#0B0F19',
        surface: '#151B2B',
        primary: '#6366F1',
        accent: '#F59E0B',
        success: '#10B981',
        danger: '#EF4444',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
