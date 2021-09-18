// import path from 'path'
import { DepOptimizationOptions } from 'vite'

/**
 * 依赖优化
 */
const optimizeDeps: DepOptimizationOptions = {
  /**
   * @type {string | string[]} 入口
   * @description 默认情况下，Vite 会抓取你的 index.html 来检测需要预构建的依赖项。如果指定了 `build.rollupOptions.input`，Vite 将转而去抓取这些入口点。
   * 如果这两者都不适合你的需要，则可以使用此选项指定自定义条目 - 该值需要遵循 fast-glob 模式 ，或者是相对于 vite 项目根的模式数组。这将覆盖掉默认条目推断。
   * @url https://github.com/mrmlnc/fast-glob#basic-syntax
   */
  entries: '',

  /**
   * @title 在预构建中强制排除的依赖项
   * @type {string[]}
   */
  exclude: [],

  /**
   * @title 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
   * @type {string[]}
   */
  include: [],
}
export default optimizeDeps
