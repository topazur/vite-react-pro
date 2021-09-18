// import path from 'path'
import visualizer from 'rollup-plugin-visualizer'

/**
 * @title 可视化分析 rollup 捆绑包，以查看哪些模块占用了空间。
 * @url https://github.com/btd/rollup-plugin-visualizer
 */
export default () => {
  return visualizer({
    // (字符串，默认值 ) - 文件名称与图表生成stats.html
    filename: 'stats.html',

    // (字符串，默认值 ) - 标题标记值Rollup Visualizer
    title: 'Rollup Visualizer',

    // (布尔， 默认) - 使用源图来计算大小 （例如， 在 Uglifyjs 或 Terser 之后） 。始终将插件添加为最后选项。false
    sourcemap: false,

    // (布尔， 默认) - 在默认用户代理中打开生成的文件false
    open: false,

    // (布尔， 默认) - 生产便携式 json 文件， 可用于插件 Cli， 用于从几个 json 文件生成图表。在这种情况下，每个 UI 属性都被忽略。false
    json: false,

    // (布尔， 默认) - 从源代码收集 gzip 大小，并在图表上显示。false
    gzipSize: true,

    // (布尔， 默认) - 从源代码收集肉汤大小，并显示在图表上。false
    brotliSize: true,

    // (字符串，默认值) - 使用哪种图表类型：treemap sunburst treemap network
    // template: '',

    // (字符串|RegExp， 默认) - 默认生成在根目录 process.cwd()
    // projectRoot: path.resolve(process.cwd(), 'dist'),// 想配置在dist目录未生效
  })
}
