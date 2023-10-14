import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './components/**/*.{tsx}',
    './app/**/*.{ts,tsx}',
  ],

  theme: {
    screens: {
      xs: '280px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#E5E5E5',
          light: '#D9D9D9',
        },
        green: {
          DEFAULT: '#156700',
          light: '#B4FCA2',
        },
        white: '#FFF',
        black: '#000',
        red: '#E50E0E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        homescreen: 'url("/images/farm.jpg")',
        frame:'url("/images/Framemain.png")',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
      },
      backgroundPosition: {
        'center': 'center',
        'top': 'top',
        'right': 'right',
        'bottom': 'bottom',
        'left': 'left',
      },
      backgroundRepeat: {
        'repeat': 'repeat',
        'no-repeat': 'no-repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
      },
      dark: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.10))',
      },

  },
  },
  plugins: [],
};;;
export default config;

