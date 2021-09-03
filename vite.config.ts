// 使用node内置对象，需安装类型声明：`@types/node` or `ts-node`
// import path from 'path'

import { defineConfig } from 'vite'

// 配置分类处理，统一导入
import getConfig from './config'

/* https://vitejs.dev/config/ */
export default defineConfig(getConfig())
