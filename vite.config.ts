// 使用node内置对象，需安装类型声明：`@types/node` or `ts-node`
// import path from 'path'

import {
  defineConfig,
  // ConfigEnv, UserConfigExport, UserConfigFn
} from 'vite'

// 配置分类处理，统一导入
import getConfig from './config'

/**
 * https://vitejs.dev/config/
 *
 * # ConfigEnv
 * { mode: 'development', command: 'serve' }
 * { mode: 'production', command: 'build' }
 */
export default defineConfig(({ mode, command }) => {
  return {
    ...getConfig({ mode, command }),
  }
})
