// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Airqualityproject/', // 👈 repo name here
  plugins: [react()],
})