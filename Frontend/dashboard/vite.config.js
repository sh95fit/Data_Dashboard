import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import multi from 'vite-plugin-multi-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // multi({
    //   pagesDir: 'public', // HTML 파일 경로
    // }),
  ],
  build: {
    rollupOptions: {
      input: {
          denso: './public/company/denso.html',
          ikea: './public/company/ikea.html',
          tk: './public/company/tk.html',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 백엔드 서버의 URL
        changeOrigin: true,  // CORS 문제를 해결하려면 true로 설정
        // rewrite: (path) => path.replace(/^\/api/, ''),  // API 경로 수정 (필요시)
      },
    },
  }
})
