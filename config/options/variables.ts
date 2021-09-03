import { UserConfigExport } from 'vite'

const variables: UserConfigExport = {
  /**
   * @title Base public path when served in development or production.
   * @default {string} '/'
   */
  base: './',
  /**
   * @title 静态目录
   * @default {string|false} 'public'
   */
  publicDir: 'public',
  /* 明确设置运行模式; 可以被命令行 --mode 选项覆盖 */
  // mode: 'development',
  define: {},
}

export default variables
