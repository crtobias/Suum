import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-suum-mint',
    'bg-suum-purple',
    'bg-suum-yellow',
    'text-suum-mint-dark',
    'text-suum-purple',
    'text-suum-yellow',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        suum: {
          blue: '#5B9BD5',
          'blue-dark': '#2E5C8A',
          'blue-light': '#E8F1F8',
          mint: '#6CC9A8',
          'mint-dark': '#4A9B7F',
          'mint-light': '#E8F5F1',
          coral: '#F08A5D',
          'coral-dark': '#D46C38',
          'coral-light': '#FEE8DC',
          purple: '#B89FD9',
          'purple-light': '#F0E6F6',
          yellow: '#F5D547',
          'yellow-light': '#FDF9E6',
          gray: '#6B7280',
          'gray-light': '#F3F4F6',
          'gray-dark': '#1F2937',
        },
      },
    },
  },
  plugins: [],
}
export default config
