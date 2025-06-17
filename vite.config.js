import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'solar-system-app'; // <-- THIS MUST MATCH YOUR GITHUB REPO NAME EXACTLY (case-sensitive)

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // <-- THIS IS THE CRITICAL LINE
})