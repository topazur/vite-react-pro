import legacyPlugin from '@vitejs/plugin-legacy' // { cspHashes }-哈希数组

/**
 * @title 默认的构建目标浏览器是能 在 script 标签上支持原生 ESM 和 原生 ESM 动态导入。传统浏览器可以通过官方插件 @vitejs/plugin-legacy 支持
 * @url https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
 */
export default () => {
  return legacyPlugin({
    targets: [
      'Android > 39',
      'Chrome >= 60',
      'Safari >= 10.1',
      'iOS >= 10.3',
      'Firefox >= 54',
      'Edge >= 15',
    ],
    // targets: ['defaults', 'not IE 11'],
    // targets: ['ie >= 11'],
    // additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
  })
}
