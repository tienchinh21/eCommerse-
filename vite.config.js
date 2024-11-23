import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@style': path.resolve(__dirname, "src/assets/style"),
            '@icon': path.resolve(__dirname, "src/assets/icon"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@contexts": path.resolve(__dirname, "src/contexts/"),
        }
    }
})
