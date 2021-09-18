import { ServerOptions } from 'vite'

/**
 * Server specific options, e.g. host, port, https...
 */
const server: ServerOptions = {
  host: '0.0.0.0',
  port: 4000,

  /**
   * @notice 当此值为字符串时，会被用作URL的路径名; 例如`open: '/docs/index.html'`
   */
  open: false,

  /**
   * @notice 设为true时若端口已被占用则会直接退出，而不是尝试下一个可用端口
   */
  strictPort: false,

  /**
   * @type {boolean | https.ServerOptions}
   * @notice 启用 TLS + HTTP/2。注意当 server.proxy option 也被使用时，将会仅使用 TLS。
   * @notice 这个值也可以是一个传递给 https.createServer() 的 选项对象。
   */
  https: false,

  /**
   * @notice 为开发服务器配置自定义代理规则。期望接收一个 { key: options } 对象。如果 key 值以 ^ 开头，将会被解释为 RegExp。
   * @other 使用`http-proxy`，完整选项详见https://github.com/http-party/node-http-proxy#options
   */
  proxy: {
    // 1️⃣ 字符串简写写法
    // '/foo': 'http://localhost:4567/foo',

    // 2️⃣ 选项写法
    '/api': {
      target: 'http://api.qq.com/api/v1',
      changeOrigin: true,
      // 将 /api 重写为空
      rewrite: (path) => path.replace(/^\/api/, ''),
    },

    // 3️⃣ 正则表达式写法
    // '^/fallback/.*': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   rewrite: (path) => path.replace(/^\/fallback/, ''),
    // },
  },

  /**
   * @title 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
   * @type {boolean | CorsOptions}
   */
  cors: true,

  /**
   * @title {boolean} 设置为`true`强制使依赖预构建
   * @url 相关内容: https://cn.vitejs.dev/guide/dep-pre-bundling.html
   */
  force: false,

  /**
   * @description 禁用或配置HMR链接（用于HMR websocket 必须使用不同的http服务器地址的情况）
   * @notice 设置`server.hmr.overlay`为`false`可以禁用服务器错误遮罩层
   * @type { boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean } }
   */
  hmr: true,

  /**
   * @title 传递给`chokidar`的文件系统监视器选项
   * @url https://github.com/paulmillr/chokidar#api
   */
  watch: {},
}

export default server
