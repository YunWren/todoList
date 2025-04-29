import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    host: '0.0.0.0',   // 监听所有网卡
    port: 5173,        // 如果需要，也可以改端口
    strictPort: false, // 端口被占用时自动切换
  }
})
