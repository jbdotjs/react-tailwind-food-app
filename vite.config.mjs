import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Mantém a pasta "build" esperada pelo preset "Create React App" da Vercel
    outDir: 'build',
  },
});
