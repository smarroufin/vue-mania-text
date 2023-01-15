import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#D1FAE5',
          lighter: '#A7F3D0',
          light: '#6EE7B7',
          DEFAULT: '#34D399',
          dark: '#10B981'
        }
      }
    }
  }
}
