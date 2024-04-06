import { defineConfig } from 'vite'
import analog from '@analogjs/platform'

export default defineConfig({
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog()],
})
