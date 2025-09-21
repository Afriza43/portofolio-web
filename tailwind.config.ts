import type { Config } from 'tailwindcss'

const config: Config = {
  // Menentukan file mana saja yang akan dipindai oleh Tailwind
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Menambahkan kustomisasi pada tema default
  theme: {
    extend: {
      // Menambahkan properti background image baru untuk gradien radial
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      // Menambahkan palet warna custom kita
      colors: {
        'primary-dark': '#0c0a09',
        'secondary-dark': '#162447',
        'accent-blue': '#1f4068',
        'accent-purple': '#e43f5a',
        'glow-pink': '#ff80b5',
        'glow-indigo': '#9089fc',
      },
      // Menambahkan efek bayangan (box shadow) custom untuk "glow"
      boxShadow: {
        'glow-purple': '0 0 15px 5px rgba(228, 63, 90, 0.4)',  // Glow dengan warna accent-purple
        'glow-blue': '0 0 15px 5px rgba(31, 64, 104, 0.4)',    // Glow dengan warna accent-blue
      }
    },
  },
  plugins: [],
}
export default config