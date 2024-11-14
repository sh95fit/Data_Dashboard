import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
