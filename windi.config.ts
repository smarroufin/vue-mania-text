import { defineConfig } from 'windicss/helpers'

export default defineConfig({
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
  },
  shortcuts: {
    'content': 'w-full max-w-screen-sm px-2 py-6 mx-auto',
    'control-default': 'border-2 border-white rounded-tl-xl rounded-br-xl bg-primary-dark text-white',
    'button-default': 'control-default px-2 py-1 text-xl',
  }
})
