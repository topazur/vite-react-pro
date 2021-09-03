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
}

export default resolve
