import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set your GitHub repository name here
const repoName = 'solar-system-app'; // <-- Make sure this matches your GitHub repo name exactly!

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // <--- ADD or CHANGE THIS LINE
})