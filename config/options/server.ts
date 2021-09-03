import { ServerOptions } from 'vite'

/**
 * Server specific options, e.g. host, port, https...
 */
const server: ServerOptions = {
  host: '0.0.0.0',
  port: 4000,
  open: true,
  https: false,
  proxy: {
    '/api': {
      target: 'http://api.qq.com/api/v1',
      changeOrigin: true,
      // 将 /api 重写为空
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
}

export default server
