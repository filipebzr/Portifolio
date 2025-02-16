import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portifolio/' // ⚠️ Use o nome exato do seu repositório (tudo minúsculo)
});
