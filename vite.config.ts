import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          windicss: ['windicss'],
        },
      },
    },
  },
  server: {
    proxy: {
      '/.netlify': {
        target: 'http://localhost:8888',
      },
    },
  },
  plugins: [WindiCSS()],
  optimizeDeps: {
    include: [ 'windicss/utils/style','windicss'],
  },
})
