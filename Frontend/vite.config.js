import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy : {
      "/todo" : "http://localhost:4004" 
    },
  },
  plugins: [react()],
})
