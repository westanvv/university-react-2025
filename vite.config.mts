import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    build: {
      sourcemap: env.GENERATE_SOURCEMAP === 'true',
      outDir: 'build',
      emptyOutDir: true,
      terserOptions: {
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Separate third-party dependencies into their own chunk
              return 'vendor';
            }
          },
        },
      },
    },
    plugins: [react(), svgr()],
    server: {
      host: env.HOST || 'localhost',
      port: Number(env.PORT) || 3000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    resolve: {
      alias: {
        src: '/src',
      },
    },
  };
});
