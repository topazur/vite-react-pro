import { ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

/**
 * - https://github.com/anncwb/vite-plugin-mock
 * - 无法在 mock.ts 文件中使用 node 模块，否则生产环境将失
 * - 模拟数据如果用于生产环境，仅适用于某些测试环境。 不要在正式环境中打开它，以避免不必要的错误。
 * - 同时，在生产环境中，它可能会影响正常的 Ajax 请求，例如文件上传/下载失败等。
 */
export default ({ mode, command }: ConfigEnv) => {
  return viteMockServe({
    // 设置 `mock/**/*.ts` 文件的存储文件夹
    mockPath: 'mock',
    // 自动读取模拟.ts 文件时，请忽略指定格式的文件
    // ignore: undefined,
    // 监控修改达到接口热更新
    watchFiles: true,
    // 打开后，可以读取 ts 文件模块。请注意，打开后将无法监视.js 文件。（默认打开）
    supportTs: true,
    // 设置是否启用本地` xxx.ts` 文件，不要在生产环境中打开它.设置为 `false` 将禁用 mock 功能
    localEnabled: command === 'serve',
    // 设置打包是否启用 mock 功能
    prodEnabled: false,
    // 是否在控制台显示请求日志
    logger: true,
  })
}
