import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 
                'resources/js/dashboard.jsx', 
                'resources/js/main.jsx', 
                'resources/js/404.jsx',
                'resources/js/login.jsx'
            ],
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
    server: {
        hmr: {
            host: 'benine.qzz.io',
            protocol: 'wss',
        },
    },
});