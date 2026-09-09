/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#176B3A',
          dark: '#0F4F2A',
          light: '#2E8B57',
          bg: '#F3F8F4',
          subtle: '#E7F2E9',
        },
        ink: {
          DEFAULT: '#163326',
          soft: '#6B7B72',
        },
        gold: {
          DEFAULT: '#E7A928',
          light: '#F5D088',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
