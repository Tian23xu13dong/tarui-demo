import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "/@/": "./src/"
    }
  },
  server: {
    strictPort: true,
    port: 6555,
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    },
    // watch: {
    //   usePolling: true,   // 修复HMR热更新失效
    // },
  },
})
