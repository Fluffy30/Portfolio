import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages project sites (username.github.io/repo-name):
// Set `base` to '/your-repo-name/'. For a user/organization page
// (username.github.io) or for Netlify/Vercel, leave base as '/'.
export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        outDir: 'dist',
        sourcemap: false
    }
})
