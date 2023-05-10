import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  extract: {
    include: [
      'guide/**/*.{ts,vue}',
      '.vitepress/theme/**/*.{ts,vue}',
    ],
  },
})
