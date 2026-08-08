import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ff7433',
        'accent-hover': '#e55f1f',
        bg: '#f5f3ef',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        display: ['Fraunces', 'serif'],
        tight: ['Inter Tight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
