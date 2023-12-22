import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['1.2rem', { lineHeight: '2.4rem' }],
        sm: ['1.4rem', { lineHeight: '2.8rem' }],
        md: ['1.6rem', { lineHeight: '3.2rem' }],
        lg: ['2rem', { lineHeight: '4rem' }],
        xl: ['2.4rem', { lineHeight: '4.8rem' }],
      },
      colors: {
        primary: {
          100: '#334155',
          200: '#475569',
        },
        secondary: {
          100: '#7dd3fc',
        },
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
