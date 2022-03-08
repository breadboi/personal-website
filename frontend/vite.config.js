import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // string shorthand
      '/api/github': {
        target: 'http://localhost:48080/api/github',
        rewrite: (path) => path.replace('/api/github', ''),
        changeOrigin: true,
        secure: false,      
        ws: true,
      }
    }
  }
})
