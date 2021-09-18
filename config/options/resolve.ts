import path from 'path'
import { ResolveOptions, AliasOptions } from 'vite'

/**
 * @title NOTICE for alias
 * @description [传递到@rollup/plugin-alias，不再和vite1一样需要开头结尾斜杠](https://cn.vitejs.dev/config/#resolve-alias)
 * @description 支持对象或数组两种写法 `export declare type AliasOptions = readonly Alias[] | { [find: string]: string }`
 */
// alias: { '@': path.resolve(process.cwd(), 'src') },
const alias: AliasOptions = [
  // 在 less 文件中引入 antd 的 less 文件会有一个 ~ 前置符，这种写法对于 ESM 构建工具是不兼容的，vite 恰好就是一个ESM 构建工具。为了绕过这个问题，我们可以在 vite.config.ts 中添加如下配置
  // { find: /^~/, replacement: '' },
  { find: '@', replacement: path.resolve(process.cwd(), 'src') },
]

/**
 * Server specific options, e.g. host, port, https...
 */
const resolve: ResolveOptions & {
  alias?: AliasOptions
} = {
  alias,

  /**
   * @type {string[]}
   * @description 如果你在你的应用程序中有相同依赖的副本（比如monorepos），使用这个选项来强制vite总是将列出的依赖关系解析到相同的副本（从项目根目录）
   */
  dedupe: [],

  /**
   * @type {string[]}
   * @title 在解析包的情景导出时允许的附加条件
   */
  conditions: [],

  /**
   * @default {string[]} ['module', 'jsnext:main', 'jsnext']
   * @description `package.json`中，在解析包的入口点时尝试的字段列表。注意，这比从`exports`字段解析的情景导出优先级低。
   * @description 如果一个入口点从`exports`成功解析，主字段将被忽略
   * @example 当此字段为空数组时，引入ant会从main字段导入(但是时cjs模块)，我们想法是从module导入
   * @notice 💥 随便替代默认值会导致导入问题（导入模式变化）
   */
  // mainFields: [],

  /**
   * @title 导入时想要省略的扩展名列表。
   * @default {string[]} ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
   * @notice 不建议忽略自定义导入类型的扩展名（例如：`.vue`），因为它会干扰IDE和类型支持
   * @notice 💥 随便替代默认值会导致导入问题（为空则省略扩展名出错）
   */
  // extensions: [],
}

export default resolve
