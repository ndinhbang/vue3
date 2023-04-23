import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sri from "vite-tiptop-sri"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
  },
  plugins: [vue(), sri({ augmentManifest: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
