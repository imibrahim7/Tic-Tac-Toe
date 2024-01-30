import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://imibrahim7.github.io/Tic-Tac-Toe/',
  plugins: [react()],
})
