import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { max: '1439px' },
      lg: { max: '975px' },
      md: { max: '767px' },
      sm: { max: '479px' },
    },
    extend: {
      colors: {
        'bright-green': '#8BC53F',
      },
    },
  },
  plugins: [],
}
export default config
