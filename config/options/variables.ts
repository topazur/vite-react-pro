import { UserConfigExport } from 'vite'
console.log(process.cwd())
const variables: UserConfigExport = {
  /**
   * @default {string} process.cwd()
   * @description 项目根目录，可以是一个绝对路径，或者是一个相对于该配置文件本身的路径
   */
  root: process.cwd(),

  /**
   * @title Base public path when served in development or production.
   * @default {string} '/'
   * @description 开发或者生产环境服务的公共基础路径，合法的值包括
   * @example 1. 绝对url路径名，如`/foo/`; 2. 完整的url，如`https://foo.com/`; 3. 空字符串或`./`（用于开发环境）
   */
  base: './',

  /**
   * @title 静态目录
   * @default {string|false} 'public' || path.resolve(__dirname, 'public')
   */
  publicDir: 'public',

  /**
   * @default {string} command为serve时默认为`development`，为build时默认为`production`
   * @notice 在配置中指明将会把`serve`和`build`时的模式都覆盖掉; 可以通过命令行`--mode`来重写
   */
  //  mode: 'development',

  /**
   * @title 定义全局变量替换方式，每项在开发时会被定义为全局变量(即`挂载window`)，而在构建时则是静态替换(即`替换成常量`)
   * @type {Record<string, any>}
   * @notice 1. 从 2.0.0-beta.70 版本开始，字符串值将作为一个直接的表达式，所以如果定义为了一个字符串常量，它需要被显式地引用（例如：通过 JSON.stringify）
   * @notice 2. 替换知会在匹配到周围是单词边界(\b)时执行
   */
  define: {},

  /**
   * @title 静态文件处理配置; 指定其他文件类型作为静态资源处理（这样导入它们就会返回解析后的 URL）
   * @url https://cn.vitejs.dev/guide/assets.html
   * @type {string | RegExp | (string | RegExp)[]}
   */
  assetsInclude: '',

  /**
   * @title 日志级别配置: 调整控制台输出的级别
   * @default {'info'|'warn'|'error'|'silent'} 'info'
   */
  logLevel: 'info',

  /**
   * @title 是否清屏: 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。命令行模式下请通过 --clearScreen false 设置。
   * @default {boolean} true
   */
  clearScreen: false,

  /**
   * @title esbuild 配置（vite使用了 esbuild 来进行编译）
   * @description ESBuildOptions继承自esbuild转换选项(https://esbuild.github.io/api/#transform-api)
   */
  esbuild: {
    // #️⃣ 最常见的用例是自定义JSX
    // jsxFactory: 'h',
    // jsxFragment: 'Fragment',
    /* #️⃣
      默认情况下，ESbuild 应用在 ts、jsx、tsx 文件。你可以通过 esbuild.include 和 esbuild.exclude 对其进行配置，它们两个配置的类型是string | RegExp | (string | RegExp)[]。
      设置成 false 可以禁用 ESbuild 转换（默认应用于 .ts. .tsx 和 .jsx 文件）。
    */
    // include: [],
    // exclude: [],
    // #️⃣ 自动为每一个被 ESbuild 转换的文件注入 JSX helper
    // jsxInject: `import React from 'react'`,
  },
}

export default variables
