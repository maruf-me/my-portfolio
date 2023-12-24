import type { Config } from 'tailwindcss';
import { appConfig } from './app.config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: appConfig.theams.colors,
      boxShadow: appConfig.theams.boxShadow,
      backgroundImage: appConfig.theams.gradientColors,
      fontSize: {
        xs: ['1.2rem', { lineHeight: '2.4rem' }],
        sm: ['1.4rem', { lineHeight: '2.8rem' }],
        md: ['1.6rem', { lineHeight: '3.2rem' }],
        lg: ['2rem', { lineHeight: '4rem' }],
        xl: ['2.4rem', { lineHeight: '4.8rem' }],
      },
      spacing: {
        space4: '.4rem',
        space8: '.8rem',
        space12: '1.2rem',
        space16: '1.6rem',
        space20: '2rem',
        space24: '2.4rem',
        space32: '3.2rem',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [],
  variants: {
    height: ['responsive', 'hover', 'focus']
  },
}
export default config
