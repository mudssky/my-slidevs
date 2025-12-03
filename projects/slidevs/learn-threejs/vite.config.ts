import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  assetsInclude: ['**/*.awebp'],
  optimizeDeps: {
    // 强制 Vite 预构建 ansis 包
    include: ['ansis'],
  },
})
