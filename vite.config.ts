/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/\.[jt]sx$/]
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,js}'],
      exclude: ['node_modules/', '**/__tests__/**']
    }
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
})
