import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// Allow HMR host/protocol to be overridden for local vs remote usage
const host = process.env.VITE_HOST ?? 'localhost';
const port = Number(process.env.VITE_PORT ?? 5173);
const hmrHost = process.env.VITE_HMR_HOST ?? host;
const hmrPort = Number(process.env.VITE_HMR_PORT ?? port);
const hmrProtocol = process.env.VITE_HMR_PROTOCOL ?? 'ws';

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
        host,
        port,
        hmr: {
            host: hmrHost,
            port: hmrPort,
            protocol: hmrProtocol,
        },
    },
});