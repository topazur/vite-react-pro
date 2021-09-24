/**
 * [前端也要懂编译：Babel 全景上手指南](https://blog.csdn.net/huan1043269994/article/details/112793122)
 */
module.exports = {
  presets: [
    '@babel/preset-env',
    // https://www.babeljs.cn/docs/babel-preset-react
    '@babel/preset-react',
  ],
  plugins: [
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    '@babel/plugin-transform-runtime',
  ],
  // 根据环境变量分别设置 presets和plugins
  env: {
    development: {},
    production: {},
  },
}
