import { PluginOption } from 'vite'

import reactRefresh from '@vitejs/plugin-react-refresh'
import legacyPlugin from '@vitejs/plugin-legacy'

/**
 * Array of vite plugins to use.
 */
const plugins: (PluginOption | PluginOption[])[] = [
  // 热更新插件
  reactRefresh(),
  // 默认的构建目标浏览器是能 在 script 标签上支持原生 ESM 和 原生 ESM 动态导入。传统浏览器可以通过官方插件 @vitejs/plugin-legacy 支持
  legacyPlugin({
    targets: [
      'Android > 39',
      'Chrome >= 60',
      'Safari >= 10.1',
      'iOS >= 10.3',
      'Firefox >= 54',
      'Edge >= 15',
    ],
  }),
]

export default plugins
