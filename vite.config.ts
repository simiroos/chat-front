/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    clearMocks: true,
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '~components': path.join(__dirname, 'src/components'),
      '~repositories': path.join(__dirname, 'src/repositories'),
      '~services': path.join(__dirname, 'src/services'),
    }
  }
})
