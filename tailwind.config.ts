import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2sm': '460px',
      '1.5sm': '537px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      '2lg': '1180px',
      xl: '1280px',
      '2xl': '1536px',
      'max-2xl': { max: '1536px' },
      'max-xl': { max: '1280px' },
      'max-lg': { max: '1024px' },
      'max-2md': { max: '960px' },
      'max-md': { max: '768px' },
      'max-sm': { max: '640px' },
      'max-2sm': { max: '460px' },
      'max-3sm': { max: '420px' },
      'h-2md': { raw: '(max-height: 730px)' },
      'h-md': { raw: '(max-height: 560px)' },
      'h-sm': { raw: '(max-height: 450px)' },
      'wh-sm': { raw: '(max-width: 450px) and (max-height: 750px)' },
    },
    extend: {
      colors: {
        orange: '#ff5013',
        blue: '#2e1eff',
        green: '#29AD04',
        'gray-light': '#EBEBEB',
        'gray-light-darker': '#E3E3E3',
        'gray-light-darker2': '#D0D0D0',
        'gray-dark': '#282828',
        'gray-dark-lighter': '#414141',
        'gray-dark-lighter2': '#505050',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
} satisfies Config;
