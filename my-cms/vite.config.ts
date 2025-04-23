import { defineConfig } from 'vite'
// import react from "@vitejs/plugin-react".
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    build: {
        outDir: './dist',
        target: 'ESNEXT',
        sourcemap: true,
    },
    optimizeDeps: { include: ['react/jsx-runtime'] },
    plugins: [react({})],
})
