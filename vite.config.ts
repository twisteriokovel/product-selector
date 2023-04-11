/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/product-selector/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./tests/unit/**/*.{test,spec}.ts'],
    deps: {
      inline: ['naive-ui']
    }
  },

  plugins: [vue()]
})
