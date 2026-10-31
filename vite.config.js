import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/sunny-ocean/' : '/',
  build: {
    outDir: 'dist',
  },
}));
