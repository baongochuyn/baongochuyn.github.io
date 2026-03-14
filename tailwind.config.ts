import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/context/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(330 80% 97%)',
          100: 'hsl(330 75% 92%)',
          200: 'hsl(330 70% 85%)',
          300: 'hsl(330 65% 70%)',
          400: 'hsl(330 65% 60%)',
          500: 'hsl(330 65% 55%)',
          600: 'hsl(330 65% 45%)',
          700: 'hsl(330 60% 38%)',
          800: 'hsl(330 55% 30%)',
          900: 'hsl(330 50% 22%)',
        },
        surface: {
          DEFAULT: 'hsl(240 20% 98%)',
          dark: 'hsl(240 15% 12%)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
