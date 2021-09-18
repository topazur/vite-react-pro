// import path from 'path'
import { BuildOptions } from 'vite'

/**
 * Build specific options
 */
const build: BuildOptions = {
  /**
   * @url 相关内容：https://cn.vitejs.dev/guide/build.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7
   * @url 选项: https://esbuild.github.io/api/#target
    设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值，'modules'，这是指 支持原生 ES 模块的浏览器。
    另一个特殊值是 “esnext” —— 即指执行 minify 转换（作最小化压缩）并假设有原生动态导入支持。
    转换过程将会由 esbuild 执行，并且此值应该是一个合法的 esbuild 目标选项。自定义目标也可以是一个 ES 版本（例如：es2015）、一个浏览器版本（例如：chrome58）或是多个目标组成的一个数组。
    注意，如果代码包含不能被 esbuild 安全地编译的特性，那么构建将会失败。查看 esbuild 文档 获取更多细节。
  */
  target: 'modules',

  /**
   * @title 指定输出路径（相对于项目根目录）
   * @default {string} dist
   */
  outDir: 'dist',

  /**
   * @title 指定生成静态资源的存放路径（相对于build.outDir）
   * @default {string} assets
   */
  assetsDir: 'assets',

  /**
   * @title 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
   * @default {number} 4096（4kb）
   */
  assetsInlineLimit: 4096,

  /**
   * @title 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在块加载时插入。
   * @notice 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
   * @default {boolean} true
   */
  cssCodeSplit: true,

  /**
   * @title 构建后是否生成sourceMap文件
   * @default {boolean} false
   */
  sourcemap: false,

  /**
   * @title 当设置为 true，构建后将会生成 manifest.json 文件，映射没有被 hash 的资源文件名和它们的 hash 版本。可以为一些服务器框架渲染时提供正确的资源引入链接。
   * @url https://cn.vitejs.dev/guide/backend-integration.html
   * @default {boolean} false
   */
  manifest: false,

  /**
   * @title 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Terser，虽然 Terser 相对较慢，但大多数情况下构建后的文件体积更小。ESbuild 最小化混淆更快但构建后的文件相对更大。
   * @default {boolean|'terser'|'esbuild'} 'terser'
   * @url https://github.com/terser/terser
   */
  minify: 'terser',

  /**
   * @title 传递给Terser的更多minify选项
   * @type {TerserOptions}
   * @url https://terser.org/docs/api-reference#minify-options
   */
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  },

  /**
   * @title 启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
   * @notice vite在打包中会计算包的大小，但是只是计算不做处理，会延长打包时间
   * @default {boolean} true
   */
  brotliSize: true,

  /**
   * @title 设置为 false 来禁用将构建后的文件写入磁盘。这常用于 编程式地调用 build() 在写入磁盘之前，需要对构建后的文件进行进一步处理。
   * @url https://cn.vitejs.dev/guide/api-javascript.html#build
   * @default {boolean} true
   */
  write: true,

  /**
   * @title 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。若 outDir 在根目录之外则会抛出一个警告避免意外删除掉重要的文件。可以设置该选项来关闭这个警告。该功能也可以通过命令行参数 --emptyOutDir 来使用。
   * @default {boolean} 若outDir在root目录下，则为true
   */
  emptyOutDir: true,

  /**
   * @title chunk大小警告的限制阈值，以kbs为单位
   * @default {number} 500
   */
  chunkSizeWarningLimit: 500,

  /**
   * @title {RollupCommonJSOptions} 传递给 @rollup/plugin-commonjs 插件的选项。
   * @url https://github.com/rollup/plugins/tree/master/packages/commonjs#options
   */
  commonjsOptions: {},

  /**
   * @title 构建为库。entry 是必须的因为库不可以使用 HTML 作为入口。name 则是暴露的全局变量，并且在 formats 包含 'umd' 或 'iife' 时是必须的。默认 formats 是 ['es', 'umd']。
   * @url https://cn.vitejs.dev/guide/build.html#%E5%BA%93%E6%A8%A1%E5%BC%8F
   * @type { { entry: string, name?: string, formats?: ('es' | 'cjs' | 'umd' | 'iife')[] } }
   */
  // lib: { entry: '' },

  /**
   * @title 自定义底层的 Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup 选项合并。查看 Rollup 选项文档 获取更多细节。
   * @type RollupOptions
   * @url https://rollupjs.org/guide/en/#big-list-of-options
   */
  rollupOptions: {
    /* 🔨 多入口？？？ */
    // input: {
    //   main: path.resolve(process.cwd(), 'index.html'),
    //   nested: path.resolve(process.cwd(), 'index.html'),
    // },
    /* 🔨 输出文件路径自定义 */
    output: {
      chunkFileNames: 'static/js/[name]-[hash].js',
      entryFileNames: 'static/js/[name]-[hash].js',
      assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
    },
  },
}

export default build
